// ============================================================
// Supabase Client — Couple Style Universe
// Two clients: browser-safe (anon) + server-only (service role)
// ============================================================

import { createClient } from '@supabase/supabase-js';

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

// ── Public client (safe for browser/client components) ──────
// Uses anon key — respects RLS policies
export const supabase = createClient(
  getEnv('NEXT_PUBLIC_SUPABASE_URL'),
  getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
);

// ── Admin client (server-only — bypasses RLS) ───────────────
// NEVER expose this to the client
export function getSupabaseAdmin() {
  return createClient(
    getEnv('NEXT_PUBLIC_SUPABASE_URL'),
    getEnv('SUPABASE_SERVICE_ROLE_KEY'),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
