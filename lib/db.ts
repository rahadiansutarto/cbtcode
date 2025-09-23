import { Pool } from "pg";

// reuses the same db instead of opening new one everytime app refresh
let globalPool: Pool | undefined = (global as unknown as { __pg_pool?: Pool }).__pg_pool;

if (!globalPool) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set. Please configure your PostgreSQL connection string.");
  }
  globalPool = new Pool({ connectionString: process.env.DATABASE_URL });
  (global as unknown as { __pg_pool?: Pool }).__pg_pool = globalPool;
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// export const db = globalPool;


