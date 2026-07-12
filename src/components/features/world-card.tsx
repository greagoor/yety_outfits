"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorldCardProps {
  world: {
    id: string;
    name: string;
    tagline?: string | null;
    slug: string;
    core_energy?: string | null;
    substyles?: any[];
    _count?: { substyles: number };
  };
  index: number;
}

/* Gradient meshes — unique atmosphere per card */
const CARD_ATMOSPHERES = [
  "radial-gradient(ellipse at 25% 60%, rgba(196,162,101,0.14) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(92,32,48,0.18) 0%, transparent 50%)",
  "radial-gradient(ellipse at 70% 55%, rgba(176,120,128,0.14) 0%, transparent 55%), radial-gradient(ellipse at 20% 30%, rgba(196,162,101,0.10) 0%, transparent 50%)",
  "radial-gradient(ellipse at 40% 70%, rgba(92,32,48,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(196,162,101,0.12) 0%, transparent 50%)",
  "radial-gradient(ellipse at 60% 40%, rgba(196,162,101,0.12) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(176,120,128,0.12) 0%, transparent 50%)",
  "radial-gradient(ellipse at 30% 30%, rgba(196,162,101,0.10) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(92,32,48,0.15) 0%, transparent 50%)",
];

export function WorldCard({ world, index }: WorldCardProps) {
  const atmosphere = CARD_ATMOSPHERES[index % CARD_ATMOSPHERES.length];
  const substyleCount = world._count?.substyles ?? world.substyles?.length ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/style-worlds/${world.slug}`} className="world-card block">

        {/* ── Cinematic gradient atmosphere ── */}
        <div className="world-card__bg" style={{ background: atmosphere }} />
        <div className="world-card__overlay" />
        <div className="world-card__glow" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col justify-between p-9 min-h-[280px]">
          <div className="space-y-3">
            {world.core_energy && (
              <div className="flex items-center gap-3">
                <div className="w-4 h-px bg-luxury-gold/40" />
                <p className="eyebrow text-luxury-gold/55">{world.core_energy}</p>
              </div>
            )}
          </div>

          <div className="mt-auto space-y-4">
            <h3
              className="font-serif font-light italic text-luxury-cream group-hover:text-luxury-gold transition-colors duration-500"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: 1.05 }}
            >
              {world.name}
            </h3>

            {world.tagline && (
              <p className="text-luxury-beige/38 text-sm font-light leading-relaxed line-clamp-2 max-w-[80%]">
                {world.tagline}
              </p>
            )}

            <div className="flex items-center justify-between pt-5 mt-2 border-t border-white/[0.06] group-hover:border-luxury-gold/18 transition-colors duration-600">
              <span className="eyebrow text-white/22 group-hover:text-luxury-gold/40 transition-colors duration-500">
                {substyleCount} {substyleCount === 1 ? "Aesthetic" : "Aesthetics"}
              </span>
              <motion.div
                whileHover={{ x: 2, y: -2 }}
                className="w-8 h-8 rounded-full border border-white/10 group-hover:border-luxury-gold/45 group-hover:bg-luxury-gold/[0.07] flex items-center justify-center transition-all duration-500 flex-shrink-0"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-gold transition-colors duration-500" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-luxury-gold/0 to-transparent group-hover:via-luxury-gold/20 transition-all duration-700" />
      </Link>
    </motion.div>
  );
}
