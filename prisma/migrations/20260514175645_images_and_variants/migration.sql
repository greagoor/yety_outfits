-- CreateTable
CREATE TABLE "outfit_images" (
    "id" UUID NOT NULL,
    "outfit_id" UUID NOT NULL,
    "image_url" TEXT NOT NULL,
    "storage_path" TEXT NOT NULL,
    "caption" TEXT,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "uploaded_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "outfit_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outfit_color_variants" (
    "id" UUID NOT NULL,
    "outfit_id" UUID NOT NULL,
    "variant_name" TEXT NOT NULL,
    "color_palette" TEXT[],
    "notes" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "outfit_color_variants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "outfit_images_outfit_id_idx" ON "outfit_images"("outfit_id");

-- CreateIndex
CREATE INDEX "outfit_images_is_primary_idx" ON "outfit_images"("is_primary");

-- CreateIndex
CREATE INDEX "outfit_color_variants_outfit_id_idx" ON "outfit_color_variants"("outfit_id");

-- AddForeignKey
ALTER TABLE "outfit_images" ADD CONSTRAINT "outfit_images_outfit_id_fkey" FOREIGN KEY ("outfit_id") REFERENCES "outfits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outfit_color_variants" ADD CONSTRAINT "outfit_color_variants_outfit_id_fkey" FOREIGN KEY ("outfit_id") REFERENCES "outfits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
