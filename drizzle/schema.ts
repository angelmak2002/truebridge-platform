import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Tutors table - stores tutor profiles displayed on the public site
 */
export const tutors = mysqlTable("tutors", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  education: varchar("education", { length: 255 }).notNull(),
  subjects: text("subjects").notNull(), // JSON array of subjects
  bio: text("bio").notNull(),
  avatarUrl: text("avatarUrl"),
  cvUrl: text("cvUrl"),
  isActive: int("isActive").default(1).notNull(),
  displayOrder: int("displayOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Tutor = typeof tutors.$inferSelect;
export type InsertTutor = typeof tutors.$inferInsert;

/**
 * Trial applications table - stores free trial lesson requests from parents
 */
export const trialApplications = mysqlTable("trial_applications", {
  id: int("id").autoincrement().primaryKey(),
  parentName: varchar("parentName", { length: 100 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 20 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  grade: varchar("grade", { length: 50 }).notNull(),
  subjects: text("subjects").notNull(), // JSON array of selected subjects
  painPoints: text("painPoints").notNull(),
  status: mysqlEnum("status", ["pending", "contacted", "scheduled", "completed", "cancelled"]).default("pending").notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TrialApplication = typeof trialApplications.$inferSelect;
export type InsertTrialApplication = typeof trialApplications.$inferInsert;
