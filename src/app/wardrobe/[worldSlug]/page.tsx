import { styleWorldService } from "@/services/style-world.service";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/shared";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { WardrobeSubstyleCard } from "@/components/features/wardrobe-substyle-card";
import { Sparkles } from "lucide-react";
import { BackButton } from "@/components/ui/back-button";

export default async function WardrobeWorldPage({
  params,
}: {
  params: Promise<{ worldSlug: string }>;
}) {
  const { worldSlug } = await params;

  // getBySlug throws NotFoundError — catch it to render a proper 404 instead of a 500
  let world;
  try {
    world = await styleWorldService.getBySlug(worldSlug);
  } catch {
    notFound();
  }

  return (
    <PageWrapper>
      <section className="pt-28 pb-48 relative overflow-hidden">
        {/* Ambient atmosphere */}
        <div className="absolute top-0 right-0 w-[50vw] h-[55vh] bg-luxury-gold/[0.04] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[35vw] h-[35vh] bg-luxury-blush/[0.055] blur-[140px] rounded-full pointer-events-none" />

        <Container>
          {/* ── Breadcrumb back navigation ── */}
          <BackButton label="Wardrobe" href="/wardrobe" />

          {/* ── World header ── */}
          <div className="mb-20 max-w-2xl">
            <div className="editorial-header">
              <div className="editorial-header__eyebrow">
                <div className="editorial-header__line" />
                <span className="editorial-header__label">
                  {world.core_energy ?? "Style World"}
                </span>
              </div>
              <h1
                className="editorial-header__title italic"
                style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
              >
                {world.name}
              </h1>
            </div>

            {world.tagline && (
              <p className="text-luxury-beige/42 font-light text-[15px] leading-relaxed mt-5 border-l border-luxury-gold/18 pl-4">
                {world.tagline}
              </p>
            )}

            {world.description && (
              <p className="text-white/22 font-light text-[12px] italic leading-relaxed mt-4 max-w-sm">
                {world.description}
              </p>
            )}

            {/* Meta row */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-10 bg-gradient-to-r from-luxury-gold/28 to-transparent" />
              <p className="eyebrow text-white/20">
                {world.substyles?.length ?? 0}{" "}
                {(world.substyles?.length ?? 0) === 1 ? "Aesthetic" : "Aesthetics"}
              </p>
            </div>
          </div>

          {/* ── Substyle grid — 3 columns (they are smaller, more numerous) ── */}
          {world.substyles && world.substyles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {world.substyles.map((substyle: any, i: number) => (
                <WardrobeSubstyleCard
                  key={substyle.id}
                  substyle={substyle}
                  worldSlug={world.slug}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="py-48 text-center space-y-6">
              <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center mx-auto">
                <Sparkles className="w-4 h-4 text-white/10" />
              </div>
              <p className="font-serif italic text-luxury-cream/18 text-lg">
                No aesthetics added to this world yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
}
