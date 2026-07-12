// ============================================================
// PATCH /api/outfits/[id]/toggle-tried     — toggle is_tried
// PATCH /api/outfits/[id]/toggle-favorite  — toggle is_favorite
// ============================================================

import { NextResponse } from 'next/server';
import { outfitService } from '@/services/outfit.service';
import { UuidSchema } from '@/validators';
import { successResponse, errorResponse } from '@/lib/api-response';
import { AppError, handlePrismaError, ValidationError } from '@/lib/errors';

type Context = { params: Promise<{ id: string }> };

export async function PATCH(_req: Request, { params }: Context): Promise<NextResponse> {
  try {
    const { id } = await params;
    const result = UuidSchema.safeParse(id);
    if (!result.success) throw new ValidationError('Invalid outfit ID format');

    const updated = await outfitService.toggleTried(id);
    return successResponse(
      updated,
      `Outfit marked as ${updated.is_tried ? 'tried' : 'untried'}`
    );
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
