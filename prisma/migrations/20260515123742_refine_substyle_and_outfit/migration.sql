/*
  Warnings:

  - You are about to drop the column `rating` on the `outfits` table. All the data in the column will be lost.
  - You are about to drop the column `includes` on the `substyles` table. All the data in the column will be lost.
  - You are about to drop the column `one_liner` on the `substyles` table. All the data in the column will be lost.
  - You are about to drop the column `visual_identity` on the `substyles` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "outfits_rating_idx";

-- AlterTable
ALTER TABLE "outfits" DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "substyles" DROP COLUMN "includes",
DROP COLUMN "one_liner",
DROP COLUMN "visual_identity",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "tagline" TEXT;
