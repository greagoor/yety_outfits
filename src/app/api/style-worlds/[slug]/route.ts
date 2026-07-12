// ============================================================
// GET    /api/style-worlds/[slug]   — fetch by slug
// PATCH  /api/style-worlds/[slug]   — update
// DELETE /api/style-worlds/[slug]   — delete
// ============================================================

import { NextResponse } from 'next/server';
import { styleWorldService } from '@/services/style-world.service';
import { UpdateStyleWorldSchema } from '@/validators';
import {
  successResponse,
  notFoundResponse,
  errorResponse,
} from '@/lib/api-response';
import { parseBody } from '@/lib/parse-request';
import { AppError, handlePrismaError } from '@/lib/errors';

type Context = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const world = await styleWorldService.getBySlug(slug);
    return successResponse(world, 'Style World fetched successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function PATCH(request: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const existing = await styleWorldService.getBySlug(slug);

    const { data, error } = await parseBody(request, UpdateStyleWorldSchema);
    if (error) return error;

    const world = await styleWorldService.update(existing.id, data);
    return successResponse(world, 'Style World updated successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function DELETE(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const existing = await styleWorldService.getBySlug(slug);
    const result = await styleWorldService.delete(existing.id);
    return successResponse(result, 'Style World deleted successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
