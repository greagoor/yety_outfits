// ============================================================
// Outfit Repository — Couple Style Universe
// Handles complex filtering, JSONB querying, full-text search,
// pagination, and toggle operations
// ============================================================

import prisma from '@/lib/prisma';
import { Prisma } from '../../generated/client';
import type { CreateOutfitInput, UpdateOutfitInput, OutfitQuery } from '@/validators';

// ──────────────────────────────────────────────────────────
// Filter builder — constructs a Prisma WHERE clause
// from the validated query parameters
// ──────────────────────────────────────────────────────────

function buildWhereClause(query: OutfitQuery): Prisma.OutfitWhereInput {
  const where: Prisma.OutfitWhereInput = {};

  // Relational filters
  if (query.substyle_id) {
    where.substyle_id = query.substyle_id;
  }

  if (query.style_world_id) {
    where.substyle = { style_world_id: query.style_world_id };
  }

  // Boolean toggles
  if (query.is_tried !== undefined) where.is_tried = query.is_tried;
  if (query.is_favorite !== undefined) where.is_favorite = query.is_favorite;

  // Scalar text filters
  if (query.overall_vibe) {
    where.overall_vibe = { contains: query.overall_vibe, mode: 'insensitive' };
  }

  // Array filter — aesthetic_keywords (overlap: outfit has ANY of these)
  if (query.aesthetic_keywords?.length) {
    where.aesthetic_keywords = { hasSome: query.aesthetic_keywords };
  }

  // JSONB filters via path expressions
  const jsonFilters: Prisma.OutfitWhereInput[] = [];

  if (query.fabric) {
    // Match fabric in upper_wear OR lower_wear OR one_piece OR layering
    jsonFilters.push({
      OR: [
        { outfit_details: { path: ['upper_wear', 'fabric'], string_contains: query.fabric } },
        { outfit_details: { path: ['lower_wear', 'fabric'], string_contains: query.fabric } },
        { outfit_details: { path: ['one_piece', 'fabric'], string_contains: query.fabric } },
        { outfit_details: { path: ['layering', 'fabric'], string_contains: query.fabric } },
      ],
    });
  }

  if (query.color) {
    jsonFilters.push({
      OR: [
        { outfit_details: { path: ['upper_wear', 'color'], string_contains: query.color } },
        { outfit_details: { path: ['lower_wear', 'color'], string_contains: query.color } },
        { outfit_details: { path: ['one_piece', 'color'], string_contains: query.color } },
        { outfit_details: { path: ['footwear', 'color'], string_contains: query.color } },
      ],
    });
  }

  if (query.outfit_type) {
    jsonFilters.push({
      OR: [
        { outfit_details: { path: ['upper_wear', 'type'], string_contains: query.outfit_type } },
        { outfit_details: { path: ['lower_wear', 'type'], string_contains: query.outfit_type } },
        { outfit_details: { path: ['one_piece', 'type'], string_contains: query.outfit_type } },
        { outfit_details: { path: ['layering', 'type'], string_contains: query.outfit_type } },
      ],
    });
  }

  if (query.hairstyle_style) {
    jsonFilters.push({
      outfit_details: {
        path: ['hairstyle', 'style'],
        string_contains: query.hairstyle_style,
      },
    });
  }

  if (query.accessories) {
    // Search across all accessory fields
    const accFields = ['earrings', 'neckwear', 'bracelets', 'rings', 'bags', 'glasses', 'extras'];
    jsonFilters.push({
      OR: accFields.map((field) => ({
        outfit_details: {
          path: ['accessories', field],
          string_contains: query.accessories,
        },
      })),
    });
  }

  // Full-text search across text columns
  if (query.search) {
    const searchTerm = query.search;
    jsonFilters.push({
      OR: [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { one_liner: { contains: searchTerm, mode: 'insensitive' } },
        { overall_vibe: { contains: searchTerm, mode: 'insensitive' } },
        { notes: { contains: searchTerm, mode: 'insensitive' } },
        { aesthetic_keywords: { has: searchTerm } },
        {
          outfit_details: {
            path: ['styling_notes'],
            string_contains: searchTerm,
          },
        },
        {
          outfit_details: {
            path: ['overall_energy'],
            string_contains: searchTerm,
          },
        },
        {
          outfit_details: {
            path: ['body_language'],
            string_contains: searchTerm,
          },
        },
      ],
    });
  }

  if (jsonFilters.length > 0) {
    where.AND = jsonFilters;
  }

  return where;
}

// ──────────────────────────────────────────────────────────
// Repository
// ──────────────────────────────────────────────────────────

export const outfitRepository = {
  // ── Read ────────────────────────────────────────────────

  async findMany(query: OutfitQuery) {
    const where = buildWhereClause(query);
    const skip = (query.page - 1) * query.limit;

    const orderBy: Prisma.OutfitOrderByWithRelationInput = {
      [query.sort_by]: query.sort_order,
    };

    const [outfits, total] = await prisma.$transaction([
      prisma.outfit.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
        include: {
          substyle: {
            include: {
              style_world: { select: { id: true, name: true, slug: true } },
            },
          },
          images: {
            orderBy: { uploaded_at: 'desc' },
          },
        },
      }),
      prisma.outfit.count({ where }),
    ]);

    return { outfits, total };
  },

  async findById(id: string) {
    return prisma.outfit.findUnique({
      where: { id },
      include: {
        substyle: {
          include: {
            style_world: { select: { id: true, name: true, slug: true } },
          },
        },
        images: {
          orderBy: { uploaded_at: 'desc' },
        },
      },
    });
  },

  // ── Write ───────────────────────────────────────────────

  async create(data: CreateOutfitInput) {
    return prisma.outfit.create({
      data: {
        ...data,
        outfit_details: data.outfit_details as unknown as Prisma.InputJsonValue,
      },
      include: {
        substyle: {
          include: {
            style_world: { select: { id: true, name: true, slug: true } },
          },
        },
      },
    });
  },

  async update(id: string, data: UpdateOutfitInput) {
    return prisma.outfit.update({
      where: { id },
      data: {
        ...data,
        ...(data.outfit_details
          ? { outfit_details: data.outfit_details as unknown as Prisma.InputJsonValue }
          : {}),
      },
      include: {
        substyle: {
          include: {
            style_world: { select: { id: true, name: true, slug: true } },
          },
        },
      },
    });
  },

  async delete(id: string) {
    return prisma.outfit.delete({ where: { id } });
  },

  // ── Toggle operations ────────────────────────────────────

  async toggleTried(id: string, current: boolean) {
    return prisma.outfit.update({
      where: { id },
      data: { is_tried: !current },
      select: { id: true, is_tried: true },
    });
  },

  async toggleFavorite(id: string, current: boolean) {
    return prisma.outfit.update({
      where: { id },
      data: { is_favorite: !current },
      select: { id: true, is_favorite: true },
    });
  },
};
