import nodemailer from "nodemailer";
import { ENV } from "./env";

// Create transporter for SMTP
let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) {
    return transporter;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.");
  }

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // Use TLS for port 465
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter;
}

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Sends an email using Hostinger SMTP
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  try {
    const transporter = getTransporter();

    const result = await transporter.sendMail({
      from: process.env.SMTP_USER || "info@truebridge.asia",
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text || payload.html.replace(/<[^>]*>/g, ""),
    });

    console.log(`[Email] Successfully sent email to ${payload.to}. Message ID: ${result.messageId}`);
    return true;
  } catch (error) {
    console.error("[Email] Error sending email:", error);
    return false;
  }
}

/**
 * Sends a trial application email to the admin
 */
export async function sendTrialApplicationEmail(data: {
  studentName: string;
  parentPhone: string;
  parentEmail: string;
  subject: string;
  grade: string;
  remarks?: string;
}): Promise<boolean> {
  const html = `
    <h2>新的免費試堂申請</h2>
    <p><strong>學生姓名：</strong> ${escapeHtml(data.studentName)}</p>
    <p><strong>家長電話：</strong> ${escapeHtml(data.parentPhone)}</p>
    <p><strong>家長電郵：</strong> ${escapeHtml(data.parentEmail)}</p>
    <p><strong>科目：</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>年級：</strong> ${escapeHtml(data.grade)}</p>
    ${data.remarks ? `<p><strong>備註：</strong> ${escapeHtml(data.remarks)}</p>` : ""}
    <hr />
    <p>請登入系統查看完整申請詳情。</p>
  `;

  return sendEmail({
    to: "info@truebridge.asia",
    subject: `新的免費試堂申請 - ${data.studentName}`,
    html,
  });
}

/**
 * Sends a confirmation email to the parent
 */
export async function sendTrialConfirmationEmail(parentEmail: string, studentName: string): Promise<boolean> {
  const html = `
    <h2>感謝您的申請</h2>
    <p>親愛的家長，</p>
    <p>我們已收到您為 <strong>${escapeHtml(studentName)}</strong> 的免費試堂申請。</p>
    <p>我們的團隊將在 24 小時內與您聯絡，為您安排合適的試堂時間。</p>
    <p>如有任何疑問，歡迎直接聯絡我們：</p>
    <ul>
      <li>電郵：info@truebridge.asia</li>
      <li>WhatsApp：+852 6951 1288</li>
      <li>WeChat ID：wxid_beto3vj28dox22</li>
    </ul>
    <p>謝謝！</p>
    <p>TrueBridge 澤橋網上補習平台</p>
  `;

  return sendEmail({
    to: parentEmail,
    subject: "免費試堂申請已收到",
    html,
  });
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
