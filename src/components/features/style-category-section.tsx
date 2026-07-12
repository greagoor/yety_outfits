"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface StyleCategorySubstyle {
  id: string;
  name: string;
  slug: string;
  one_liner?: string | null;
  visual_identity?: string | null;
  _count?: { outfits: number };
}

interface StyleWorld {
  id: string;
  name: string;
  slug: string;
  tagline?: string | null;
  core_energy?: string | null;
  description?: string | null;
  substyles: StyleCategorySubstyle[];
  _count?: { substyles: number };
}

interface StyleCategorySectionProps {
  style: StyleWorld;
  index: number;
}

export function StyleCategorySection({ style, index }: StyleCategorySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── Editorial world heading ── */}
      <div className="mb-10 pb-8 border-b border-white/[0.045]">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            {style.core_energy && (
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-luxury-gold/35" />
                <p className="eyebrow text-luxury-gold/50">{style.core_energy}</p>
              </div>
            )}
            <h2
              className="font-serif font-light italic text-luxury-cream leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {style.name}
            </h2>
            {style.tagline && (
              <p className="text-white/28 text-sm font-light leading-relaxed mt-2 max-w-md">
                {style.tagline}
              </p>
            )}
          </div>

          <div className="shrink-0 text-right space-y-1">
            <p className="eyebrow text-white/15">
              {style._count?.substyles ?? style.substyles.length}
            </p>
            <p className="eyebrow text-white/10">Aesthetics</p>
          </div>
        </div>
      </div>

      {/* ── Substyle cards grid ── */}
      {style.substyles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {style.substyles.map((sub, i) => (
            <InlineSubstyleCard
              key={sub.id}
              substyle={sub}
              worldSlug={style.slug}
              index={i}
            />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center border border-dashed border-white/[0.05] rounded-2xl">
          <p className="font-serif italic text-luxury-cream/14 text-sm">
            No aesthetics added yet.
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ── Inline substyle card — refined collectible style ── */
function InlineSubstyleCard({
  substyle,
  worldSlug,
  index,
}: {
  substyle: StyleCategorySubstyle;
  worldSlug: string;
  index: number;
}) {
  const outfitCount = substyle._count?.outfits ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link
        href={`/wardrobe/${worldSlug}/${substyle.slug}`}
        className="substyle-card flex flex-col"
        style={{ minHeight: "240px" }}
      >
        {/* Top accent */}
        <div className="substyle-card__accent" />

        <div className="relative z-10 flex flex-col h-full p-7">
          <div className="flex-1 space-y-3">
            {/* Outfit count */}
            {outfitCount > 0 && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/[0.07] group-hover:border-luxury-gold/20 transition-colors duration-500 mb-1">
                <div className="w-1 h-1 rounded-full bg-luxury-gold/40 group-hover:bg-luxury-gold/70 transition-colors duration-500" />
                <span className="eyebrow text-white/22 group-hover:text-luxury-gold/45 transition-colors duration-500">
                  {outfitCount} {outfitCount === 1 ? "look" : "looks"}
                </span>
              </div>
            )}

            {/* Name */}
            <h3
              className="font-serif font-light text-luxury-cream group-hover:text-luxury-gold transition-colors duration-500"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", lineHeight: 1.2 }}
            >
              {substyle.name}
            </h3>

            {substyle.one_liner && (
              <p className="text-white/28 text-[12px] font-light leading-relaxed line-clamp-2">
                {substyle.one_liner}
              </p>
            )}

            {substyle.visual_identity && (
              <div className="mt-2 space-y-1">
                <p className="eyebrow text-luxury-gold/30 text-[8px]">Style Language</p>
                <p className="text-luxury-cream/38 text-[11px] font-light leading-relaxed line-clamp-2">
                  {substyle.visual_identity}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-white/[0.05] group-hover:border-luxury-gold/12 transition-colors duration-500 flex items-center justify-between">
            <span className="eyebrow text-white/18 group-hover:text-luxury-gold/35 transition-colors duration-500">
              Explore
            </span>
            <div className="w-6 h-6 rounded-full border border-white/[0.07] group-hover:border-luxury-gold/35 group-hover:bg-luxury-gold/[0.07] flex items-center justify-center transition-all duration-500 flex-shrink-0">
              <ArrowUpRight className="w-3 h-3 text-white/18 group-hover:text-luxury-gold transition-colors duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
