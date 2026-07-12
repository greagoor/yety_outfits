// ============================================================
// StyleWorld Service — Couple Style Universe
// Business logic layer — orchestrates repos, generates slugs
// ============================================================

import { styleWorldRepository } from '@/repositories/style-world.repository';
import { uniqueSlug } from '@/lib/slug';
import { NotFoundError, ConflictError } from '@/lib/errors';
import type { CreateStyleWorldInput, UpdateStyleWorldInput } from '@/validators';

export const styleWorldService = {
  async getAll() {
    return styleWorldRepository.findAll();
  },

  async getAllWithSubstyles() {
    return styleWorldRepository.findAllWithSubstyles();
  },

  async getById(id: string) {
    const world = await styleWorldRepository.findById(id);
    if (!world) throw new NotFoundError('Style World');
    return world;
  },

  async getBySlug(slug: string) {
    const world = await styleWorldRepository.findBySlug(slug);
    if (!world) throw new NotFoundError('Style World');
    return world;
  },

  async create(input: CreateStyleWorldInput) {
    const slug = await uniqueSlug(input.name, (s) =>
      styleWorldRepository.slugExists(s)
    );
    return styleWorldRepository.create({ ...input, slug });
  },

  async update(id: string, input: UpdateStyleWorldInput) {
    // Confirm exists
    const existing = await styleWorldRepository.findById(id);
    if (!existing) throw new NotFoundError('Style World');

    // Regenerate slug only if name changed
    let slug: string | undefined;
    if (input.name && input.name !== existing.name) {
      slug = await uniqueSlug(input.name, async (s) => {
        // Allow current slug through
        if (s === existing.slug) return false;
        return styleWorldRepository.slugExists(s);
      });
    }

    return styleWorldRepository.update(id, { ...input, ...(slug ? { slug } : {}) });
  },

  async delete(id: string) {
    const existing = await styleWorldRepository.findById(id);
    if (!existing) throw new NotFoundError('Style World');
    await styleWorldRepository.delete(id);
    return { id };
  },
};
