// ============================================================
// GET  /api/style-worlds      — list all style worlds
// POST /api/style-worlds      — create a style world
// ============================================================

import { NextResponse } from 'next/server';
import { styleWorldService } from '@/services/style-world.service';
import { CreateStyleWorldSchema } from '@/validators';
import { successResponse, createdResponse, errorResponse } from '@/lib/api-response';
import { parseBody } from '@/lib/parse-request';
import { AppError, handlePrismaError } from '@/lib/errors';

export async function GET(): Promise<NextResponse> {
  try {
    const worlds = await styleWorldService.getAll();
    return successResponse(worlds, 'Style Worlds fetched successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { data, error } = await parseBody(request, CreateStyleWorldSchema);
    if (error) return error;

    const world = await styleWorldService.create(data);
    return createdResponse(world, 'Style World created successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
