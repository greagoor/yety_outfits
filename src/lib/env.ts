// ============================================================
// Environment Validation — Couple Style Universe
// Validates all required env vars at startup using Zod
// Import this at the top of any server entry point
// ============================================================

import { z } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
  DIRECT_URL: z.string().url('DIRECT_URL must be a valid URL'),
  // Pooled connection string used at runtime by Prisma (pgbouncer mode)
  POOLED_URL: z.string().url('POOLED_URL must be a valid URL'),

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('NEXT_PUBLIC_SUPABASE_URL must be a valid URL'),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10, 'NEXT_PUBLIC_SUPABASE_ANON_KEY is required'),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10, 'SUPABASE_SERVICE_ROLE_KEY is required'),

  // App
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  // App-level password gate — avoids hard-coding in source; defaults to original value
  NEXT_PUBLIC_APP_PASSWORD: z.string().optional(),

  // Rate limiting (optional with defaults)
  RATE_LIMIT_MAX: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 100)),
  RATE_LIMIT_WINDOW_MS: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 60000)),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    const errors = result.error.issues
      .map((e) => `  ✗ ${e.path.join('.')}: ${e.message}`)
      .join('\n');

    throw new Error(
      `\n❌ Invalid environment variables:\n${errors}\n\nCheck your .env file.\n`
    );
  }

  return result.data;
}

// Singleton — validated once at module load
export const env = validateEnv();
