// ============================================================
// Route Handler Wrapper — Couple Style Universe
// Catches all unhandled errors and maps AppErrors to responses
// ============================================================

import { NextResponse } from 'next/server';
import { AppError, handlePrismaError } from '@/lib/errors';
import { errorResponse } from '@/lib/api-response';

type RouteHandler = (
  req: Request,
  context: { params: Promise<Record<string, string>> }
) => Promise<NextResponse>;

/**
 * Wraps a Next.js route handler with centralized error handling.
 * Any thrown AppError → structured JSON response.
 * Any Prisma error → sanitized AppError → structured response.
 * Any unknown error → 500.
 */
export function withErrorHandler(handler: RouteHandler): RouteHandler {
  return async (req, context) => {
    try {
      return await handler(req, context);
    } catch (err) {
      if (err instanceof AppError) {
        return errorResponse(err.message, err.statusCode);
      }

      const appErr = handlePrismaError(err);
      return errorResponse(appErr.message, appErr.statusCode);
    }
  };
}

/**
 * Simpler version for route segments without dynamic params.
 */
export function withErrorHandlerSimple(
  handler: (req: Request) => Promise<NextResponse>
) {
  return async (req: Request): Promise<NextResponse> => {
    try {
      return await handler(req);
    } catch (err) {
      if (err instanceof AppError) {
        return errorResponse(err.message, err.statusCode);
      }
      const appErr = handlePrismaError(err);
      return errorResponse(appErr.message, appErr.statusCode);
    }
  };
}
