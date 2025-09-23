import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";
import { db } from "@/lib/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const role = String(formData.get("role") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const cvFile = formData.get("cv") as File | null;

    if (!name || !email || !cvFile) {
      return NextResponse.json(
        { ok: false, error: "Name, Email, and CV are required" },
        { status: 400 }
      );
    }

    // Clean + unique file name
    const cleanName = cvFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const key = `cvs/${crypto.randomUUID()}-${cleanName}`;
    const arrayBuffer = await cvFile.arrayBuffer();

    // Upload to MinIO (S3-compatible)
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        Body: Buffer.from(arrayBuffer),
        ContentType: cvFile.type,
      })
    );

    //  Build file URL (for MinIO public access)
    const publicBase = process.env.S3_PUBLIC_BASE_URL
      || process.env.MINIO_PUBLIC_BASE_URL
      || `${(process.env.S3_ENDPOINT || process.env.MINIO_ENDPOINT || "http://localhost:9000").replace(/\/$/, "")}/${process.env.S3_BUCKET_NAME}`;
    const fileUrl = `${publicBase}/${key}`;

    // Ensure table exists
    await db.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        role TEXT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT,
        cv_url TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    // In case the table already exists without the new column, add it.
    await db.query(`
      ALTER TABLE applications
      ADD COLUMN IF NOT EXISTS role TEXT
    `);

    // Insert record
    await db.query(
      `INSERT INTO applications (role, name, email, message, cv_url) VALUES ($1, $2, $3, $4, $5)`,
      [role, name, email, message || null, fileUrl]
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}