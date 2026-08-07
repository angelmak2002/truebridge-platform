import { eq, desc, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, tutors, trialApplications, InsertTutor, InsertTrialApplication } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ============ TUTORS ============

export async function getAllTutors(activeOnly = true) {
  const db = await getDb();
  if (!db) return [];

  if (activeOnly) {
    return db.select().from(tutors).where(eq(tutors.isActive, 1)).orderBy(asc(tutors.displayOrder));
  }
  return db.select().from(tutors).orderBy(asc(tutors.displayOrder));
}

export async function getTutorById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(tutors).where(eq(tutors.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createTutor(tutor: InsertTutor) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(tutors).values(tutor);
  return result[0].insertId;
}

export async function updateTutor(id: number, data: Partial<InsertTutor>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(tutors).set(data).where(eq(tutors.id, id));
}

export async function deleteTutor(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(tutors).set({ isActive: 0 }).where(eq(tutors.id, id));
}

// ============ TRIAL APPLICATIONS ============

export async function getAllApplications() {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(trialApplications).orderBy(desc(trialApplications.createdAt));
}

export async function getApplicationById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(trialApplications).where(eq(trialApplications.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createApplication(application: InsertTrialApplication) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(trialApplications).values(application);
  return result[0].insertId;
}

export async function updateApplicationStatus(id: number, status: string, notes?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const updateData: Record<string, unknown> = { status };
  if (notes !== undefined) updateData.notes = notes;

  await db.update(trialApplications).set(updateData).where(eq(trialApplications.id, id));
}
