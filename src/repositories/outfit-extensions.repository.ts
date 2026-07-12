// ============================================================
// Outfit Image Repository
// ============================================================

import prisma from '@/lib/prisma';

export const outfitImageRepository = {
  async create(data: {
    outfit_id: string;
    image_url: string;
    storage_path: string;
    caption?: string;
    is_primary?: boolean;
  }) {
    if (data.is_primary) {
      // Unset previous primary
      await prisma.outfitImage.updateMany({
        where: { outfit_id: data.outfit_id, is_primary: true },
        data: { is_primary: false },
      });
    }

    return prisma.outfitImage.create({ data });
  },

  async delete(id: string) {
    return prisma.outfitImage.delete({ where: { id } });
  },

  async findById(id: string) {
    return prisma.outfitImage.findUnique({ where: { id } });
  },
};


