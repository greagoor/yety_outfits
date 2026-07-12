// ============================================================
// GET  /api/outfits   — paginated, filtered, searchable list
// POST /api/outfits   — create an outfit
//
// Supported query params (all optional):
//   page, limit, search, sort_by, sort_order
//   style_world_id, substyle_id, overall_vibe
//   aesthetic_keywords (comma-separated)
//   is_tried, is_favorite
//   fabric, color, outfit_type, hairstyle_style, accessories
//   rating_min, rating_max
// ============================================================

import { NextResponse } from 'next/server';
import { outfitService } from '@/services/outfit.service';
import { CreateOutfitSchema, OutfitQuerySchema } from '@/validators';
import {
  paginatedResponse,
  createdResponse,
  errorResponse,
} from '@/lib/api-response';
import { parseBody, parseQuery } from '@/lib/parse-request';
import { AppError, handlePrismaError } from '@/lib/errors';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const { data: query, error } = parseQuery(searchParams, OutfitQuerySchema);
    if (error) return error;

    const { outfits, pagination } = await outfitService.getMany(query);
    return paginatedResponse(outfits, pagination, 'Outfits fetched successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { data, error } = await parseBody(request, CreateOutfitSchema);
    if (error) return error;

    const outfit = await outfitService.create(data);
    return createdResponse(outfit, 'Outfit created successfully');
  } catch (err) {
    const e = err instanceof AppError ? err : handlePrismaError(err);
    return errorResponse(e.message, e.statusCode);
  }
}
