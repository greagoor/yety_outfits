import { outfitRepository } from "@/repositories/outfit.repository";
import { Container } from "@/components/ui/shared";
import { OutfitCard } from "@/components/features/outfit-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Heart } from "lucide-react";

const BASE_QUERY = {
  page: 1, limit: 50, sort_by: "created_at" as const, sort_order: "desc" as const,
  is_tried: undefined, is_favorite: true, aesthetic_keywords: undefined,
  rating_min: undefined, rating_max: undefined, search: undefined,
  style_world_id: undefined, substyle_id: undefined, overall_vibe: undefined,
  fabric: undefined, color: undefined, outfit_type: undefined,
  hairstyle_style: undefined, accessories: undefined,
};

export default async function FavoritesPage() {
  const { outfits } = await outfitRepository.findMany(BASE_QUERY);

  return (
    <PageWrapper>
      <section className="pt-28 pb-48 relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute top-0 right-0 w-[55vw] h-[50vh] bg-luxury-rose/[0.045] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[35vw] h-[35vh] bg-luxury-blush/[0.06] blur-[140px] rounded-full pointer-events-none" />

        <Container>
          {/* ── Editorial header ── */}
          <div className="editorial-header mb-24 max-w-3xl">
            <div className="editorial-header__eyebrow">
              {/* Rose-tinted line for favorites accent */}
              <div className="h-px w-12 bg-gradient-to-r from-luxury-rose/40 to-transparent flex-shrink-0" />
              <span className="editorial-header__label" style={{ color: "rgba(176,120,128,0.5)" }}>
                Curated Collection
              </span>
            </div>
            <h1
              className="editorial-header__title"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              <span className="italic text-luxury-rose/80">Favorites</span>
            </h1>
            <p className="editorial-header__desc max-w-sm">
              The silhouettes that resonated most. Collected moods, worn beautifully.
            </p>
            <div
              className="editorial-header__divider"
              style={{ background: "linear-gradient(to right, rgba(176,120,128,0.28), transparent)" }}
            />
          </div>

          {outfits.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {outfits.map((outfit: any, i: number) => (
                <OutfitCard key={outfit.id} outfit={outfit} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-56 text-center space-y-6">
              <div className="w-10 h-10 rounded-full border border-luxury-rose/[0.14] flex items-center justify-center mx-auto">
                <Heart className="w-4 h-4 text-luxury-rose/25" />
              </div>
              <p className="font-serif italic text-luxury-cream/18 text-xl">
                The collection awaits its first favorite.
              </p>
            </div>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
}
