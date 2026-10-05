import { COOKIE_NAME } from "../shared/const";
import { execSync } from "child_process";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor,
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplicationStatus,
} from "./db";
import { notifyOwner } from "./_core/notification";
import { sendTrialApplicationEmail, sendTrialConfirmationEmail } from "./_core/email";

// Helper function to publish to Instagram via MCP
async function publishInstagramReel({
  videoUrl,
  caption,
  coverUrl,
}: {
  videoUrl: string;
  caption: string;
  coverUrl?: string;
}) {
  try {
    // Prepare media array for Instagram MCP
    const media = [
      {
        type: "video",
        url: videoUrl,
        thumbnail_url: coverUrl,
      },
    ];

    // Build MCP input JSON
    const mcpInput = {
      media,
      caption,
      cover_url: coverUrl,
    };

    // Call Instagram MCP via shell
    const inputJson = JSON.stringify(mcpInput);
    const escapedInput = inputJson.replace(/'/g, "'\\''");
    
    const command = `manus-mcp-cli tool call create_instagram --server instagram --input '${escapedInput}'`;
    
    const result = execSync(command, {
      encoding: "utf-8",
      timeout: 30000,
    });

    // MCP call succeeded
    return {
      success: true,
      message: "Instagram Reels 已提交發布，請在 Manus 管理中心確認",
    };
  } catch (error: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: `Instagram 發布失敗: ${error.message.substring(0, 100)}`,
    });
  }
}

// Admin-only middleware
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ============ PUBLIC: Tutors (read-only) ============
  tutors: router({
    list: publicProcedure.query(async () => {
      return getAllTutors(true);
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getTutorById(input.id);
      }),
  }),

    // ============ PUBLIC: Trial Application Submission ============
  trialApply: router({
    submit: publicProcedure
      .input(
        z.object({
          studentName: z.string().min(1, "請填寫學生姓名"),
          parentPhone: z.string().min(1, "請填寫家長電話"),
          parentEmail: z.string().email("請填寫有效的電郵地址"),
          subject: z.string().min(1, "請選擇科目"),
          grade: z.string().min(1, "請選擇學生年級"),
          remarks: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Send email to admin
        const adminEmailSent = await sendTrialApplicationEmail({
          studentName: input.studentName,
          parentPhone: input.parentPhone,
          parentEmail: input.parentEmail,
          subject: input.subject,
          grade: input.grade,
          remarks: input.remarks,
        });

        if (!adminEmailSent) {
          console.error("[Trial Apply] Failed to send email to admin (info@truebridge.asia)");
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "無法發送申請至管理員郵箱，請稍後重試",
          });
        }

        // Send confirmation email to parent
        const parentEmailSent = await sendTrialConfirmationEmail(input.parentEmail, input.studentName);

        if (!parentEmailSent) {
          console.error(`[Trial Apply] Failed to send confirmation email to parent (${input.parentEmail})`);
          // Don't throw error here - admin email was sent successfully
          // Just log the warning
        }

        // Also notify owner
        await notifyOwner({
          title: "🔔 新試堂申請",
          content: `學生姓名：${input.studentName}\n家長電話：${input.parentPhone}\n電郵：${input.parentEmail}\n科目：${input.subject}\n年級：${input.grade}\n備註：${input.remarks || "無"}`,
        });

        return { success: true };
      }),
  }),

  // ============ ADMIN: Tutor Management ============
  admin: router({
    tutors: router({
      list: adminProcedure.query(async () => {
        return getAllTutors(false);
      }),
      create: adminProcedure
        .input(
          z.object({
            name: z.string().min(1),
            education: z.string().min(1),
            subjects: z.string().min(1),
            bio: z.string().min(1),
            avatarUrl: z.string().optional(),
            cvUrl: z.string().optional(),
            displayOrder: z.number().optional(),
          })
        )
        .mutation(async ({ input }) => {
          const id = await createTutor({
            ...input,
            avatarUrl: input.avatarUrl ?? null,
            cvUrl: input.cvUrl ?? null,
            displayOrder: input.displayOrder ?? 0,
          });
          return { success: true, id };
        }),
      update: adminProcedure
        .input(
          z.object({
            id: z.number(),
            name: z.string().optional(),
            education: z.string().optional(),
            subjects: z.string().optional(),
            bio: z.string().optional(),
            avatarUrl: z.string().optional(),
            cvUrl: z.string().optional(),
            isActive: z.number().optional(),
            displayOrder: z.number().optional(),
          })
        )
        .mutation(async ({ input }) => {
          const { id, ...data } = input;
          await updateTutor(id, data);
          return { success: true };
        }),
      delete: adminProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
          await deleteTutor(input.id);
          return { success: true };
        }),
    }),

    // ============ ADMIN: Trial Applications ============
    applications: router({
      list: adminProcedure.query(async () => {
        return getAllApplications();
      }),
      getById: adminProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
          return getApplicationById(input.id);
        }),
      updateStatus: adminProcedure
        .input(
          z.object({
            id: z.number(),
            status: z.enum(["pending", "contacted", "scheduled", "completed", "cancelled"]),
            notes: z.string().optional(),
          })
        )
        .mutation(async ({ input }) => {
          await updateApplicationStatus(input.id, input.status, input.notes);
          return { success: true };
        }),
    }),

    // ============ ADMIN: Instagram Publish ============
    instagram: router({
      publish: adminProcedure
        .input(
          z.object({
            videoUrl: z.string().min(1, "請提供影片 URL"),
            caption: z.string().min(1, "請填寫貼文文案"),
            coverUrl: z.string().optional(),
          })
        )
        .mutation(async ({ input }) => {
          try {
            // Call Instagram MCP to publish reel
            const result = await publishInstagramReel({
              videoUrl: input.videoUrl,
              caption: input.caption,
              coverUrl: input.coverUrl,
            });
            
            return {
              success: true,
              message: result.message,
              videoUrl: input.videoUrl,
              caption: input.caption,
            };
          } catch (error) {
            // Re-throw TRPC errors
            if (error instanceof TRPCError) {
              throw error;
            }
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: `Instagram 發布失敗: ${error instanceof Error ? error.message : "未知錯誤"}`,
            });
          }
        }),
    }),
  }),
});

export type AppRouter = typeof appRouter;
