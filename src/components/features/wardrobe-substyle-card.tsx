"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WardrobeSubstyleCardProps {
  substyle: {
    id: string;
    name: string;
    slug: string;
    tagline?: string | null;
    _count?: { outfits: number };
  };
  worldSlug: string;
  index: number;
}

/* Unique inner glow tint per substyle card slot */
const CARD_TINTS = [
  "rgba(196,162,101,0.055)",
  "rgba(176,120,128,0.055)",
  "rgba(196,162,101,0.045)",
  "rgba(120,140,176,0.045)",
  "rgba(176,120,128,0.05)",
  "rgba(196,162,101,0.05)",
];

export function WardrobeSubstyleCard({ substyle, worldSlug, index }: WardrobeSubstyleCardProps) {
  const outfitCount = substyle._count?.outfits ?? 0;
  const tint = CARD_TINTS[index % CARD_TINTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link
        href={`/wardrobe/${worldSlug}/${substyle.slug}`}
        className="substyle-card flex flex-col"
        style={{ minHeight: "230px" }}
      >
        {/* ── Top accent stripe ── */}
        <div className="substyle-card__accent" />

        {/* ── Inner glow tint (unique per slot) ── */}
        <div
          className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 80%, ${tint} 0%, transparent 65%)`,
          }}
        />

        {/* ── Subtle corner dot ── */}
        <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-luxury-gold/0 group-hover:bg-luxury-gold/35 transition-all duration-700 group-hover:shadow-[0_0_8px_2px_rgba(196,162,101,0.25)]" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col h-full p-7">

          {/* Top info row */}
          <div className="flex items-center justify-between mb-auto">
            {outfitCount > 0 ? (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.065] group-hover:border-luxury-gold/22 bg-white/[0.02] group-hover:bg-luxury-gold/[0.04] transition-all duration-500">
                <div className="w-1 h-1 rounded-full bg-luxury-gold/35 group-hover:bg-luxury-gold/70 transition-colors duration-500" />
                <span className="eyebrow text-white/22 group-hover:text-luxury-gold/55 transition-colors duration-500">
                  {outfitCount} {outfitCount === 1 ? "look" : "looks"}
                </span>
              </div>
            ) : (
              <div className="w-4 h-px bg-white/10 group-hover:bg-luxury-gold/20 transition-colors duration-500" />
            )}
          </div>

          {/* Name block */}
          <div className="mt-5 space-y-2.5">
            <h3
              className="font-serif font-light text-luxury-cream group-hover:text-luxury-gold transition-colors duration-500 leading-tight"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)" }}
            >
              {substyle.name}
            </h3>

            {substyle.tagline && (
              <p className="text-white/25 text-[11.5px] font-light leading-relaxed line-clamp-2">
                {substyle.tagline}
              </p>
            )}
          </div>

          {/* ── Footer ── */}
          <div className="mt-7 pt-5 border-t border-white/[0.045] group-hover:border-luxury-gold/14 transition-colors duration-500 flex items-center justify-between">
            <span className="eyebrow text-white/16 group-hover:text-luxury-gold/40 transition-all duration-500 tracking-[.36em]">
              Explore
            </span>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 group-hover:translate-x-0">
              <div className="h-px w-5 bg-luxury-gold/35" />
              <ArrowRight className="w-3 h-3 text-luxury-gold/70" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
