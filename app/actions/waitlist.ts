"use server";

import { db } from "@/lib/db";

export async function submitWaitlist(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const note = String(formData.get("note") || "").trim();

  if (!email || !name) {
    return { ok: false, error: "Email and LinkedIn are required" };
  }

  await db.query(
    `CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      note TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`
  );

  await db.query(
    `INSERT INTO waitlist (email, name, note) VALUES ($1, $2, $3)`,
    [email, name, note]
  );

  return { ok: true };
}


