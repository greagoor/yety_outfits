import { styleWorldService } from "@/services/style-world.service";
import { Container } from "@/components/ui/shared";
import { WorldCard } from "@/components/features/world-card";
import { PageWrapper } from "@/components/layout/page-wrapper";

export default async function StyleWorldsPage() {
  const worlds = await styleWorldService.getAll();

  return (
    <PageWrapper>
      <section className="pt-28 pb-48 relative overflow-hidden">
        {/* Ambient atmosphere */}
        <div className="absolute top-0 right-0 w-[60vw] h-[55vh] bg-luxury-gold/[0.04] blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[40vw] h-[40vh] bg-luxury-blush/[0.05] blur-[160px] rounded-full pointer-events-none" />

        <Container>
          {/* ── Editorial Section Header ── */}
          <div className="editorial-header mb-24 max-w-3xl">
            <div className="editorial-header__eyebrow">
              <div className="editorial-header__line" />
              <span className="editorial-header__label">Browse by Aesthetic</span>
            </div>
            <h1
              className="editorial-header__title"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Aesthetic{" "}
              <span className="italic text-luxury-gold">Categories</span>
            </h1>
            <p className="editorial-header__desc max-w-sm">
              Each category is a curated aesthetic dimension — a distinct realm of
              silhouette, energy, and identity.
            </p>
            <div className="editorial-header__divider" />
          </div>

          {/* ── World cards — 2 columns for cinematic scale ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {worlds.map((world: any, index: number) => (
              <WorldCard key={world.id} world={world} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
