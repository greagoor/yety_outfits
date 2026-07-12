// ============================================================
// Prisma Client — Singleton for Next.js
// Prevents multiple instances during hot reload in development
// ============================================================

import { PrismaClient } from '../../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { env } from './env';

// Use the Zod-validated env value — throws at startup if POOLED_URL is missing,
// preventing a silent connection to the literal string "undefined".
const connectionString = env.POOLED_URL;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const pool = new Pool({
  connectionString,
  max: 10,
  idleTimeoutMillis: 20_000,
  connectionTimeoutMillis: 10_000,
});
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    transactionOptions: {
      maxWait: 15_000,
      timeout:  20_000,
    },
    log: process.env.NODE_ENV === 'development'
      ? ['error', 'warn']
      : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
