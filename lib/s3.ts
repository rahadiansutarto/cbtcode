import { S3Client } from "@aws-sdk/client-s3";

const endpoint = process.env.S3_ENDPOINT || process.env.MINIO_ENDPOINT || "http://localhost:9000";
const region = process.env.AWS_REGION || process.env.S3_REGION || "us-east-1";

export const s3 = new S3Client({
  region,
  endpoint,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || process.env.MINIO_ROOT_USER || "minioadmin",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || process.env.MINIO_ROOT_PASSWORD || "minioadmin",
  },
  forcePathStyle: true,
});