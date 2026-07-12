import { styleWorldService } from "@/services/style-world.service";
import { Container } from "@/components/ui/shared";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Sparkles } from "lucide-react";
import { WardrobeWorldCard } from "@/components/features/wardrobe-world-card";

export default async function WardrobePage() {
  const worlds = await styleWorldService.getAll();

  return (
    <PageWrapper>
      <section className="pt-28 pb-48 relative overflow-hidden">
        {/* Ambient atmosphere */}
        <div className="absolute top-0 right-0 w-[60vw] h-[55vh] bg-luxury-gold/[0.045] blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[40vw] h-[40vh] bg-luxury-blush/[0.055] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] bg-luxury-espresso/25 blur-[300px] rounded-full pointer-events-none" />

        <Container>
          {/* ── Editorial Section Header ── */}
          <div className="editorial-header mb-24 max-w-3xl">
            <div className="editorial-header__eyebrow">
              <div className="editorial-header__line" />
              <span className="editorial-header__label">The Collection</span>
            </div>
            <h1
              className="editorial-header__title"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              The{" "}
              <span className="italic text-luxury-gold">Wardrobe</span>
            </h1>
            <p className="editorial-header__desc max-w-sm">
              A curated collection of style worlds waiting to be explored.
            </p>
            <div className="editorial-header__divider" />
          </div>

          {/* ── World cards — 2 columns for breathing space ── */}
          {worlds.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
              {worlds.map((world: any, i: number) => (
                <WardrobeWorldCard key={world.id} world={world} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-56 text-center space-y-6">
              <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center mx-auto">
                <Sparkles className="w-4 h-4 text-white/10" />
              </div>
              <p className="font-serif italic text-luxury-cream/18 text-xl">
                No worlds in the wardrobe yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
}
