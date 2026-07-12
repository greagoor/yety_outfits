// ============================================================
// GET    /api/substyles/[slug]  — fetch by slug
// PATCH  /api/substyles/[slug]  — update
// DELETE /api/substyles/[slug]  — delete
// ============================================================

import { NextResponse } from 'next/server';
import { substyleService } from '@/services/substyle.service';
import { UpdateSubstyleSchema } from '@/validators';
import { successResponse, errorResponse } from '@/lib/api-response';
import { parseBody } from '@/lib/parse-request';
import { AppError, handlePrismaError } from '@/lib/errors';

type Context = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const substyle = await substyleService.getBySlug(slug);
    return successResponse(substyle, 'Substyle fetched successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function PATCH(request: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const existing = await substyleService.getBySlug(slug);

    const { data, error } = await parseBody(request, UpdateSubstyleSchema);
    if (error) return error;

    const substyle = await substyleService.update(existing.id, data);
    return successResponse(substyle, 'Substyle updated successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function DELETE(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const existing = await substyleService.getBySlug(slug);
    const result = await substyleService.delete(existing.id);
    return successResponse(result, 'Substyle deleted successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
