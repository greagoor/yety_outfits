// ============================================================
// Zod Request Parser — Couple Style Universe
// Centralized request validation with clean error formatting
// ============================================================

import { ZodSchema, ZodError } from 'zod';
import { validationErrorResponse } from '@/lib/api-response';
import type { ValidationError } from '@/types';

/**
 * Parse and validate a request body or query params against a Zod schema.
 * Returns { data } on success or { error: NextResponse } on failure.
 */
export async function parseBody<T>(
  request: Request,
  schema: ZodSchema<T>
): Promise<{ data: T; error: null } | { data: null; error: ReturnType<typeof validationErrorResponse> }> {
  try {
    const raw = await request.json();
    const data = schema.parse(raw);
    return { data, error: null };
  } catch (err) {
    if (err instanceof ZodError) {
      const errors: ValidationError[] = err.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));
      return { data: null, error: validationErrorResponse(errors) };
    }
    return {
      data: null,
      error: validationErrorResponse([{ field: 'body', message: 'Invalid JSON body' }]),
    };
  }
}

export function parseQuery<T>(
  searchParams: URLSearchParams,
  schema: ZodSchema<T>
): { data: T; error: null } | { data: null; error: ReturnType<typeof validationErrorResponse> } {
  try {
    const raw = Object.fromEntries(searchParams.entries());
    const data = schema.parse(raw);
    return { data, error: null };
  } catch (err) {
    if (err instanceof ZodError) {
      const errors: ValidationError[] = err.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));
      return { data: null, error: validationErrorResponse(errors) };
    }
    return {
      data: null,
      error: validationErrorResponse([{ field: 'query', message: 'Invalid query parameters' }]),
    };
  }
}
