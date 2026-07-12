-- CreateTable
CREATE TABLE "style_worlds" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "tagline" TEXT,
    "core_energy" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "style_worlds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "substyles" (
    "id" UUID NOT NULL,
    "style_world_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "one_liner" TEXT,
    "visual_identity" TEXT,
    "includes" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "substyles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outfits" (
    "id" UUID NOT NULL,
    "substyle_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "one_liner" TEXT,
    "overall_vibe" TEXT,
    "aesthetic_keywords" TEXT[],
    "is_tried" BOOLEAN NOT NULL DEFAULT false,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,
    "rating" SMALLINT NOT NULL DEFAULT 0,
    "notes" TEXT,
    "outfit_details" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "outfits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "style_worlds_slug_key" ON "style_worlds"("slug");

-- CreateIndex
CREATE INDEX "style_worlds_slug_idx" ON "style_worlds"("slug");

-- CreateIndex
CREATE INDEX "style_worlds_created_at_idx" ON "style_worlds"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "substyles_slug_key" ON "substyles"("slug");

-- CreateIndex
CREATE INDEX "substyles_style_world_id_idx" ON "substyles"("style_world_id");

-- CreateIndex
CREATE INDEX "substyles_slug_idx" ON "substyles"("slug");

-- CreateIndex
CREATE INDEX "substyles_created_at_idx" ON "substyles"("created_at");

-- CreateIndex
CREATE INDEX "outfits_substyle_id_idx" ON "outfits"("substyle_id");

-- CreateIndex
CREATE INDEX "outfits_is_tried_idx" ON "outfits"("is_tried");

-- CreateIndex
CREATE INDEX "outfits_is_favorite_idx" ON "outfits"("is_favorite");

-- CreateIndex
CREATE INDEX "outfits_rating_idx" ON "outfits"("rating");

-- CreateIndex
CREATE INDEX "outfits_aesthetic_keywords_idx" ON "outfits"("aesthetic_keywords");

-- CreateIndex
CREATE INDEX "outfits_overall_vibe_idx" ON "outfits"("overall_vibe");

-- CreateIndex
CREATE INDEX "outfits_created_at_idx" ON "outfits"("created_at");

-- AddForeignKey
ALTER TABLE "substyles" ADD CONSTRAINT "substyles_style_world_id_fkey" FOREIGN KEY ("style_world_id") REFERENCES "style_worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outfits" ADD CONSTRAINT "outfits_substyle_id_fkey" FOREIGN KEY ("substyle_id") REFERENCES "substyles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
