// ============================================================
// Outfit Service — Couple Style Universe
// ============================================================

import { outfitRepository } from '@/repositories/outfit.repository';
import { substyleRepository } from '@/repositories/substyle.repository';
import { NotFoundError } from '@/lib/errors';
import { buildPagination } from '@/lib/api-response';
import type { CreateOutfitInput, UpdateOutfitInput, OutfitQuery } from '@/validators';

export const outfitService = {
  async getMany(query: OutfitQuery) {
    const { outfits, total } = await outfitRepository.findMany(query);
    const pagination = buildPagination(total, query.page, query.limit);
    return { outfits, pagination };
  },

  async getById(id: string) {
    const outfit = await outfitRepository.findById(id);
    if (!outfit) throw new NotFoundError('Outfit');
    return outfit;
  },

  async create(input: CreateOutfitInput) {
    // Validate parent substyle exists
    const substyle = await substyleRepository.findById(input.substyle_id);
    if (!substyle) throw new NotFoundError('Substyle');
    return outfitRepository.create(input);
  },

  async update(id: string, input: UpdateOutfitInput) {
    const existing = await outfitRepository.findById(id);
    if (!existing) throw new NotFoundError('Outfit');
    return outfitRepository.update(id, input);
  },

  async delete(id: string) {
    const existing = await outfitRepository.findById(id);
    if (!existing) throw new NotFoundError('Outfit');
    await outfitRepository.delete(id);
    return { id };
  },

  async toggleTried(id: string) {
    const existing = await outfitRepository.findById(id);
    if (!existing) throw new NotFoundError('Outfit');
    return outfitRepository.toggleTried(id, existing.is_tried);
  },

  async toggleFavorite(id: string) {
    const existing = await outfitRepository.findById(id);
    if (!existing) throw new NotFoundError('Outfit');
    return outfitRepository.toggleFavorite(id, existing.is_favorite);
  },
};
