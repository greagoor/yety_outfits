import { styleWorldService } from "@/services/style-world.service";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/shared";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SubstyleCard } from "@/components/features/substyle-card";
import { BackButton } from "@/components/ui/back-button";
import { Sparkles } from "lucide-react";

export default async function StyleWorldPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // getBySlug throws NotFoundError — catch it to render a proper 404 instead of a 500
  let world;
  try {
    world = await styleWorldService.getBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <PageWrapper>
      <section className="pt-28 pb-48 relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute top-0 right-0 w-[45vw] h-[55vh] bg-luxury-gold/[0.04] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[30vw] h-[30vh] bg-luxury-blush/[0.055] blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <BackButton label="Style Worlds" href="/style-worlds" />

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

            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-10 bg-gradient-to-r from-luxury-gold/28 to-transparent" />
              <p className="eyebrow text-white/20">
                {world.substyles?.length ?? 0}{" "}
                {(world.substyles?.length ?? 0) === 1 ? "Aesthetic" : "Aesthetics"}
              </p>
            </div>
          </div>

          {/* ── Substyle grid ── */}
          {world.substyles && world.substyles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {world.substyles.map((substyle: any, index: number) => (
                <SubstyleCard
                  key={substyle.id}
                  substyle={substyle}
                  worldSlug={world.slug}
                  index={index}
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
