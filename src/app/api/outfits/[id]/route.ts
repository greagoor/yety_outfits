// ============================================================
// GET    /api/outfits/[id]   — fetch single outfit by UUID
// PATCH  /api/outfits/[id]   — update outfit
// DELETE /api/outfits/[id]   — delete outfit
// ============================================================

import { NextResponse } from 'next/server';
import { outfitService } from '@/services/outfit.service';
import { UpdateOutfitSchema, UuidSchema } from '@/validators';
import { successResponse, errorResponse } from '@/lib/api-response';
import { parseBody } from '@/lib/parse-request';
import { AppError, handlePrismaError, ValidationError } from '@/lib/errors';

type Context = { params: Promise<{ id: string }> };

function validateId(id: string) {
  const result = UuidSchema.safeParse(id);
  if (!result.success) throw new ValidationError('Invalid outfit ID format');
  return id;
}

export async function GET(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { id } = await params;
    validateId(id);
    const outfit = await outfitService.getById(id);
    return successResponse(outfit, 'Outfit fetched successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function PATCH(request: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { id } = await params;
    validateId(id);

    const { data, error } = await parseBody(request, UpdateOutfitSchema);
    if (error) return error;

    const outfit = await outfitService.update(id, data);
    return successResponse(outfit, 'Outfit updated successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function DELETE(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { id } = await params;
    validateId(id);
    const result = await outfitService.delete(id);
    return successResponse(result, 'Outfit deleted successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
