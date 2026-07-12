"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SubstyleCardProps {
  substyle: {
    name: string;
    slug: string;
    tagline?: string | null;
  };
  worldSlug: string;
  index: number;
}

export function SubstyleCard({ substyle, worldSlug, index }: SubstyleCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link
        href={`/wardrobe/${worldSlug}/${substyle.slug}`}
        className="substyle-card flex flex-col"
        style={{ minHeight: "200px" }}
      >
        {/* ── Top accent stripe ── */}
        <div className="substyle-card__accent" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col h-full p-7">
          <div className="flex-1 space-y-3">
            <h3
              className="font-serif font-light text-luxury-cream group-hover:text-luxury-gold transition-colors duration-500"
              style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)", lineHeight: 1.2 }}
            >
              {substyle.name}
            </h3>

            {substyle.tagline && (
              <p className="text-white/28 text-[12px] font-light leading-relaxed mt-2 line-clamp-2">
                {substyle.tagline}
              </p>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.05] group-hover:border-luxury-gold/12 transition-colors duration-500 flex items-center justify-between">
            <span className="eyebrow text-white/18 group-hover:text-luxury-gold/35 transition-colors duration-500">
              Explore
            </span>
            <div className="w-6 h-6 rounded-full border border-white/[0.07] group-hover:border-luxury-gold/35 group-hover:bg-luxury-gold/[0.07] flex items-center justify-center transition-all duration-500 flex-shrink-0">
              <ArrowRight className="w-3 h-3 text-white/18 group-hover:text-luxury-gold transition-colors duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
