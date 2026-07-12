// ============================================================
// StyleWorld Repository — Couple Style Universe
// Direct database access layer — no business logic here
// ============================================================

import prisma from '@/lib/prisma';
import type { CreateStyleWorldInput, UpdateStyleWorldInput } from '@/validators';

export const styleWorldRepository = {
  // ── Read ────────────────────────────────────────────────

  async findAll() {
    return prisma.styleWorld.findMany({
      orderBy: { created_at: 'asc' },
      include: {
        _count: { select: { substyles: true } },
      },
    });
  },

  async findAllWithSubstyles() {
    return prisma.styleWorld.findMany({
      orderBy: { created_at: 'asc' },
      include: {
        substyles: {
          orderBy: { created_at: 'asc' },
          include: { _count: { select: { outfits: true } } },
        },
        _count: { select: { substyles: true } },
      },
    });
  },

  async findById(id: string) {
    return prisma.styleWorld.findUnique({
      where: { id },
      include: {
        substyles: {
          orderBy: { created_at: 'desc' },
          include: { _count: { select: { outfits: true } } },
        },
        _count: { select: { substyles: true } },
      },
    });
  },

  async findBySlug(slug: string) {
    return prisma.styleWorld.findUnique({
      where: { slug },
      include: {
        substyles: {
          orderBy: { created_at: 'desc' },
          include: { _count: { select: { outfits: true } } },
        },
        _count: { select: { substyles: true } },
      },
    });
  },

  async slugExists(slug: string) {
    const count = await prisma.styleWorld.count({ where: { slug } });
    return count > 0;
  },

  // ── Write ───────────────────────────────────────────────

  async create(data: CreateStyleWorldInput & { slug: string }) {
    return prisma.styleWorld.create({ data });
  },

  async update(id: string, data: UpdateStyleWorldInput & { slug?: string }) {
    return prisma.styleWorld.update({ where: { id }, data });
  },

  async delete(id: string) {
    return prisma.styleWorld.delete({ where: { id } });
  },
};
