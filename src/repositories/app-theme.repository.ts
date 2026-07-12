// ============================================================
// App Theme Repository
// ============================================================

import prisma from '@/lib/prisma';

export const appThemeRepository = {
  async findAll() {
    return prisma.appTheme.findMany({
      orderBy: { created_at: 'desc' },
    });
  },

  async getDefault() {
    return prisma.appTheme.findFirst({
      where: { is_default: true },
    });
  },
};
