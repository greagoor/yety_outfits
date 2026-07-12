import { outfitRepository } from "@/repositories/outfit.repository";
import { notFound } from "next/navigation";
import { UuidSchema } from "@/validators";
import { Container } from "@/components/ui/shared";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ToggleActions } from "@/components/features/toggle-actions";
import { InteractiveOutfitSection } from "@/components/features/interactive-outfit-section";
import { ExplainOutfit } from "@/components/features/explain-outfit";
import { BackButton } from "@/components/ui/back-button";
import { Scissors, Footprints, Watch, Paintbrush, Sparkles, Layers } from "lucide-react";

/* ── Colour swatch ── */
function Swatch({ color }: { color: string }) {
  return (
    <span
      title={color}
      className="inline-block w-5 h-5 rounded-full border border-white/10 ring-1 ring-luxury-black -ml-1.5 first:ml-0 hover:scale-110 hover:z-10 relative transition-transform cursor-default"
      style={{ backgroundColor: color }}
    />
  );
}

/* ── Description-first detail card ── */
function DetailCard({ icon: Icon, title, data }: { icon: any; title: string; data: Record<string, any> }) {
  const description = (data?.description as string | undefined)?.trim();
  const features: string[] = Array.isArray(data?.design_features)
    ? (data.design_features as string[]).filter(Boolean)
    : [];
  const meta = (
    [
      data?.fit    && { label: "Fit",    value: data.fit },
      data?.color  && { label: "Color",  value: data.color },
      data?.fabric && { label: "Fabric", value: data.fabric },
    ] as ({ label: string; value: string } | false)[]
  ).filter(Boolean) as { label: string; value: string }[];

  if (!description && !meta.length && !features.length) return null;

  return (
    <div className="glass-card p-6 border-white/[0.04] hover:border-luxury-gold/12 transition-all duration-500 space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-white/[0.05]">
        <div className="w-7 h-7 rounded-full bg-luxury-gold/[0.08] flex items-center justify-center shrink-0">
          <Icon className="w-3 h-3 text-luxury-gold/55" />
        </div>
        <p className="eyebrow text-luxury-gold/50">{title}</p>
      </div>

      {/* Description — primary visualization */}
      {description && (
        <p className="font-serif text-base text-luxury-cream/68 leading-relaxed italic">
          {description}
        </p>
      )}

      {/* Meta row — fit · color · fabric */}
      {meta.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-0.5">
          {meta.map(m => (
            <div key={m.label} className="flex items-center gap-1.5">
              <span className="eyebrow text-white/20 text-[8px]">{m.label}</span>
              <span className="text-luxury-cream/45 text-xs font-light">{m.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Design feature chips */}
      {features.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {features.map((f, i) => (
            <span
              key={i}
              className="eyebrow text-luxury-gold/60 border border-luxury-gold/[0.18] bg-luxury-gold/[0.05] px-2.5 py-1 rounded-sm text-[9px]"
            >
              {f}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Accessories — same visual rhythm as DetailCard ── */
function AccessoriesCard({ icon: Icon, data }: { icon: any; data: Record<string, any> }) {
  const description = (data?.description as string | undefined)?.trim();
  const features: string[] = Array.isArray(data?.design_features)
    ? (data.design_features as string[]).filter(Boolean)
    : [];
  const items = Object.entries(data ?? {})
    .filter(([k, v]) => k !== 'design_features' && k !== 'description' && typeof v === 'string' && v.trim());
  if (!description && !items.length && !features.length) return null;
  return (
    <div className="glass-card p-6 border-white/[0.04] hover:border-luxury-gold/12 transition-all duration-500 space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-white/[0.05]">
        <div className="w-7 h-7 rounded-full bg-luxury-gold/[0.08] flex items-center justify-center shrink-0">
          <Icon className="w-3 h-3 text-luxury-gold/55" />
        </div>
        <p className="eyebrow text-luxury-gold/50">Accessories</p>
      </div>

      {/* Description — primary, same as DetailCard */}
      {description && (
        <p className="font-serif text-base text-luxury-cream/68 leading-relaxed italic">{description}</p>
      )}

      {/* Label · Value pairs — same as DetailCard meta row */}
      {items.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-3 pt-0.5">
          {items.map(([key, value]) => (
            <div key={key} className="flex items-baseline gap-1.5">
              <span className="eyebrow text-white/20 text-[8px] shrink-0">{key.replace(/_/g, " ")}</span>
              <span className="text-luxury-cream/45 text-xs font-light leading-relaxed">{value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Design feature chips — identical to DetailCard */}
      {features.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {features.map((f, i) => (
            <span
              key={i}
              className="eyebrow text-luxury-gold/60 border border-luxury-gold/[0.18] bg-luxury-gold/[0.05] px-2.5 py-1 rounded-sm text-[9px]"
            >
              {f}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default async function OutfitDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Validate UUID format — prevents Prisma runtime errors on malformed URL params
  if (!UuidSchema.safeParse(id).success) notFound();

  const outfit  = await outfitRepository.findById(id);

  if (!outfit) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-serif italic text-luxury-cream/25 text-xl">Not found in the wardrobe.</p>
    </div>
  );

  const substyle   = (outfit as any).substyle;
  const worldSlug   = substyle?.style_world?.slug ?? 'wardrobe';
  const substyleSlug = substyle?.slug;
  const backHref = substyleSlug
    ? `/wardrobe/${worldSlug}/${substyleSlug}`
    : `/wardrobe/${worldSlug}`;

  const d      = outfit.outfit_details as any;
  const images = (outfit as any).images ?? [];
  const palette: string[] = d.color_palette ?? [];

  return (
    <PageWrapper>
      <Container>
        <BackButton label="Back" href={backHref} />
      </Container>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-luxury-blush/8 blur-[180px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left – image + upload */}
            <div>
              <InteractiveOutfitSection
                outfitId={outfit.id}
                initialImages={images}
                initialPalette={palette}
              />
            </div>

            {/* Right – identity */}
            <div className="space-y-7 lg:pt-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-luxury-gold/30" />
                <p className="eyebrow text-luxury-gold/50">Curated Silhouette</p>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl xl:text-6xl text-luxury-cream font-light leading-none tracking-tight">
                {outfit.title}
              </h1>

              {outfit.one_liner && (
                <p className="font-serif italic text-lg text-luxury-gold/50 leading-relaxed">
                  "{outfit.one_liner}"
                </p>
              )}

              {outfit.overall_vibe && (
                <div className="glass-card p-6 border-luxury-gold/[0.08] bg-luxury-blush/[0.04] space-y-3">
                  <p className="eyebrow text-luxury-gold/50">The Essence</p>
                  <p className="font-serif text-base text-luxury-cream/70 leading-relaxed">
                    {outfit.overall_vibe}
                  </p>
                </div>
              )}

              {/* Colour palette — shown ONCE here */}
              {palette.length > 0 && (
                <div className="space-y-2">
                  <p className="eyebrow text-white/25">Colour Story</p>
                  <div className="flex items-center pl-1.5">
                    {palette.map((c, i) => <Swatch key={i} color={c} />)}
                  </div>
                </div>
              )}

              {/* Keywords */}
              {outfit.aesthetic_keywords?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {outfit.aesthetic_keywords.map((tag: string, i: number) => (
                    <span key={i} className="eyebrow text-white/22 border border-white/[0.06] px-2.5 py-1 rounded-sm text-[9px]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <ToggleActions
                outfitId={outfit.id}
                initialIsFavorite={outfit.is_favorite}
                initialIsTried={outfit.is_tried}
              />

              {/* Explain Outfit */}
              <div className="pt-2 border-t border-white/[0.05]">
                <ExplainOutfit outfit={{
                  title: outfit.title,
                  one_liner: outfit.one_liner ?? undefined,
                  overall_vibe: outfit.overall_vibe ?? undefined,
                  aesthetic_keywords: outfit.aesthetic_keywords,
                  outfit_details: d,
                }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ FASHION BREAKDOWN ═══ */}
      <section className="py-14 border-t border-white/[0.04]">
        <Container>
          <div className="mb-8">
            <p className="eyebrow text-luxury-gold/50 mb-2">The Look</p>
            <h2 className="font-serif text-2xl text-luxury-cream font-light italic">Fashion Breakdown</h2>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <DetailCard icon={Scissors}   title="Upper Wear" data={d.upper_wear}  />
            <DetailCard icon={Scissors}   title="Lower Wear" data={d.lower_wear}  />
            <DetailCard icon={Sparkles}   title="One Piece"  data={d.one_piece}   />
            <DetailCard icon={Layers}     title="Layering"   data={d.layering}    />
            <DetailCard icon={Footprints} title="Footwear"   data={d.footwear}    />
            <AccessoriesCard icon={Watch} data={d.accessories} />
          </div>
        </Container>
      </section>

      {/* ═══ BEAUTY & ENERGY ═══ */}
      <section className="py-14 border-t border-white/[0.04]">
        <Container>
          <div className="mb-8">
            <p className="eyebrow text-luxury-gold/50 mb-2">The Finish</p>
            <h2 className="font-serif text-2xl text-luxury-cream font-light italic">Beauty & Energy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <DetailCard icon={Paintbrush} title="Hairstyle" data={d.hairstyle} />
            <DetailCard icon={Paintbrush} title="Makeup"    data={d.makeup}    />
          </div>
          {(d.styling_mood || d.styling_notes) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {d.styling_mood && (
                <div className="glass-card p-6 border-white/[0.04] hover:border-luxury-gold/12 transition-all duration-500 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/[0.05]">
                    <div className="w-7 h-7 rounded-full bg-luxury-gold/[0.08] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-luxury-gold/55" />
                    </div>
                    <p className="eyebrow text-luxury-gold/50">Styling Mood</p>
                  </div>
                  <p className="font-serif text-base text-luxury-cream/68 leading-relaxed italic">{d.styling_mood}</p>
                </div>
              )}
              {d.styling_notes && (
                <div className="glass-card p-6 border-white/[0.04] hover:border-luxury-gold/12 transition-all duration-500 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/[0.05]">
                    <div className="w-7 h-7 rounded-full bg-luxury-gold/[0.08] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-luxury-gold/55" />
                    </div>
                    <p className="eyebrow text-luxury-gold/50">Styling Notes</p>
                  </div>
                  <p className="font-serif text-base text-luxury-cream/68 leading-relaxed italic">&ldquo;{d.styling_notes}&rdquo;</p>
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="py-24 border-t border-white/[0.04] text-center">
        <Sparkles className="w-4 h-4 text-luxury-gold/18 mx-auto mb-5" />
        <p className="eyebrow text-white/10 tracking-[1.8em]">End of Entry</p>
      </section>
    </PageWrapper>
  );
}
