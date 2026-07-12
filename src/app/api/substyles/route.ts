// ============================================================
// GET  /api/substyles        — list all substyles
// POST /api/substyles        — create a substyle
//
// Supports ?style_world_id=<uuid> to filter by parent world
// ============================================================

import { NextResponse } from 'next/server';
import { substyleService } from '@/services/substyle.service';
import { CreateSubstyleSchema, UuidSchema } from '@/validators';
import { successResponse, createdResponse, errorResponse } from '@/lib/api-response';
import { parseBody } from '@/lib/parse-request';
import { AppError, handlePrismaError } from '@/lib/errors';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const styleWorldId = searchParams.get('style_world_id');

    // Validate UUID format if provided — prevents Prisma errors on malformed values
    if (styleWorldId !== null) {
      const parsed = UuidSchema.safeParse(styleWorldId);
      if (!parsed.success) {
        return errorResponse('Invalid style_world_id: must be a valid UUID', 400);
      }
    }

    const substyles = styleWorldId
      ? await substyleService.getByStyleWorld(styleWorldId)
      : await substyleService.getAll();

    return successResponse(substyles, 'Substyles fetched successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { data, error } = await parseBody(request, CreateSubstyleSchema);
    if (error) return error;

    const substyle = await substyleService.create(data);
    return createdResponse(substyle, 'Substyle created successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
