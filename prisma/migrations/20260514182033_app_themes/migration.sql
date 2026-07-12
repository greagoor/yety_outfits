/*
  Warnings:

  - You are about to drop the `outfit_color_variants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "outfit_color_variants" DROP CONSTRAINT "outfit_color_variants_outfit_id_fkey";

-- DropTable
DROP TABLE "outfit_color_variants";

-- CreateTable
CREATE TABLE "app_themes" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "primary_color" TEXT NOT NULL,
    "secondary_color" TEXT NOT NULL,
    "accent_color" TEXT NOT NULL,
    "background_color" TEXT NOT NULL,
    "surface_color" TEXT NOT NULL,
    "text_primary" TEXT NOT NULL,
    "text_secondary" TEXT NOT NULL,
    "border_color" TEXT NOT NULL,
    "gradient_start" TEXT NOT NULL,
    "gradient_end" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "app_themes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "app_themes_is_default_idx" ON "app_themes"("is_default");
