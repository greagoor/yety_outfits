"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, CheckCircle2 } from "lucide-react";

interface OutfitCardProps {
  outfit: {
    id: string;
    title: string;
    one_liner?: string;
    overall_vibe?: string;
    is_tried: boolean;
    is_favorite: boolean;
    aesthetic_keywords: string[];
    images?: { image_url: string; is_primary: boolean }[];
  };
  index: number;
}

export function OutfitCard({ outfit, index }: OutfitCardProps) {
  const primaryImage = outfit.images?.find((img) => img.is_primary) || outfit.images?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link href={`/outfits/${outfit.id}`} className="block">
        {/* Card frame */}
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] isolate bg-luxury-surface">

          {/* ── Image ── */}
          {primaryImage ? (
            <Image
              src={primaryImage.image_url}
              alt={outfit.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.055] brightness-[.86] group-hover:brightness-[.94]"
              priority={index < 4}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-mist via-luxury-charcoal to-luxury-black flex items-center justify-center">
              <div className="opacity-12 text-center space-y-3">
                <div className="h-px w-8 bg-luxury-gold mx-auto" />
                <p className="eyebrow text-luxury-gold tracking-[.4em]">Aesthetic</p>
                <div className="h-px w-8 bg-luxury-gold mx-auto" />
              </div>
            </div>
          )}

          {/* ── Permanent gradient scrim ── */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-luxury-black/25 via-[45%] to-transparent" />

          {/* ── Hover gold edge glow ── */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-luxury-gold/[0.13] transition-all duration-700" />

          {/* ── Status badges ── */}
          <div className="absolute top-3.5 right-3.5 flex flex-col gap-1.5 z-20">
            {outfit.is_favorite && (
              <div className="w-7 h-7 rounded-full bg-black/55 backdrop-blur-sm border border-luxury-rose/25 flex items-center justify-center">
                <Heart className="w-3 h-3 text-luxury-rose fill-luxury-rose" />
              </div>
            )}
            {outfit.is_tried && (
              <div className="w-7 h-7 rounded-full bg-black/55 backdrop-blur-sm border border-luxury-gold/25 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-luxury-gold" />
              </div>
            )}
          </div>

          {/* ── Bottom info layer ── */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            {/* Vibe — slides up on hover */}
            <motion.div
              className="px-5 pb-1 pointer-events-none"
              initial={false}
              animate={undefined}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="eyebrow text-luxury-gold/75 mb-1.5">The Vision</p>
                <p className="text-luxury-cream/60 text-[11px] font-light italic leading-relaxed line-clamp-3">
                  {outfit.overall_vibe}
                </p>
              </div>
            </motion.div>

            {/* Thin divider */}
            <div className="mx-5 h-px bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 my-2" />

            {/* Title */}
            <div className="px-5 pb-5">
              <h3 className="font-serif text-[1.05rem] md:text-[1.1rem] text-luxury-cream leading-snug line-clamp-2 group-hover:text-luxury-gold transition-colors duration-500">
                {outfit.title}
              </h3>
              {outfit.one_liner && (
                <p className="text-white/28 text-[10px] font-light italic mt-1 line-clamp-1 group-hover:opacity-0 transition-opacity duration-300">
                  {outfit.one_liner}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ── Tags (below card) ── */}
        {outfit.aesthetic_keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 px-0.5">
            {outfit.aesthetic_keywords.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="eyebrow text-white/18 border border-white/[0.06] px-2.5 py-1 rounded-full text-[8.5px] group-hover:border-luxury-gold/14 group-hover:text-white/28 transition-all duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
