// ============================================================
// Substyle Service — Couple Style Universe
// ============================================================

import { substyleRepository } from '@/repositories/substyle.repository';
import { styleWorldRepository } from '@/repositories/style-world.repository';
import { uniqueSlug } from '@/lib/slug';
import { NotFoundError } from '@/lib/errors';
import type { CreateSubstyleInput, UpdateSubstyleInput } from '@/validators';

export const substyleService = {
  async getAll() {
    return substyleRepository.findAll();
  },

  async getById(id: string) {
    const substyle = await substyleRepository.findById(id);
    if (!substyle) throw new NotFoundError('Substyle');
    return substyle;
  },

  async getBySlug(slug: string) {
    const substyle = await substyleRepository.findBySlug(slug);
    if (!substyle) throw new NotFoundError('Substyle');
    return substyle;
  },

  async getByStyleWorld(styleWorldId: string) {
    // Validate parent exists
    const world = await styleWorldRepository.findById(styleWorldId);
    if (!world) throw new NotFoundError('Style World');
    return substyleRepository.findByStyleWorld(styleWorldId);
  },

  async create(input: CreateSubstyleInput) {
    // Validate parent exists
    const world = await styleWorldRepository.findById(input.style_world_id);
    if (!world) throw new NotFoundError('Style World');

    const slug = await uniqueSlug(input.name, (s) =>
      substyleRepository.slugExists(s)
    );
    return substyleRepository.create({ ...input, slug });
  },

  async update(id: string, input: UpdateSubstyleInput) {
    const existing = await substyleRepository.findById(id);
    if (!existing) throw new NotFoundError('Substyle');

    let slug: string | undefined;
    if (input.name && input.name !== existing.name) {
      slug = await uniqueSlug(input.name, async (s) => {
        if (s === existing.slug) return false;
        return substyleRepository.slugExists(s);
      });
    }

    return substyleRepository.update(id, { ...input, ...(slug ? { slug } : {}) });
  },

  async delete(id: string) {
    const existing = await substyleRepository.findById(id);
    if (!existing) throw new NotFoundError('Substyle');
    await substyleRepository.delete(id);
    return { id };
  },
};
