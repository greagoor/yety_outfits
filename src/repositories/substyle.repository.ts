// ============================================================
// Substyle Repository — Couple Style Universe
// ============================================================

import prisma from '@/lib/prisma';
import type { CreateSubstyleInput, UpdateSubstyleInput } from '@/validators';

export const substyleRepository = {
  // ── Read ────────────────────────────────────────────────

  async findAll() {
    return prisma.substyle.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        style_world: { select: { id: true, name: true, slug: true } },
        _count: { select: { outfits: true } },
      },
    });
  },

  async findById(id: string) {
    return prisma.substyle.findUnique({
      where: { id },
      include: {
        style_world: true,
        _count: { select: { outfits: true } },
      },
    });
  },

  async findBySlug(slug: string) {
    return prisma.substyle.findUnique({
      where: { slug },
      include: {
        style_world: true,
        _count: { select: { outfits: true } },
      },
    });
  },

  async findByStyleWorld(styleWorldId: string) {
    return prisma.substyle.findMany({
      where: { style_world_id: styleWorldId },
      orderBy: { created_at: 'desc' },
      include: {
        _count: { select: { outfits: true } },
      },
    });
  },

  async slugExists(slug: string) {
    const count = await prisma.substyle.count({ where: { slug } });
    return count > 0;
  },

  // ── Write ───────────────────────────────────────────────

  async create(data: CreateSubstyleInput & { slug: string }) {
    return prisma.substyle.create({
      data,
      include: {
        style_world: { select: { id: true, name: true, slug: true } },
      },
    });
  },

  async update(id: string, data: UpdateSubstyleInput & { slug?: string }) {
    return prisma.substyle.update({
      where: { id },
      data,
      include: {
        style_world: { select: { id: true, name: true, slug: true } },
      },
    });
  },

  async delete(id: string) {
    return prisma.substyle.delete({ where: { id } });
  },
};
