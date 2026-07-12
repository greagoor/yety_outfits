"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface WardrobeWorldCardProps {
  world: {
    id: string;
    name: string;
    tagline?: string | null;
    slug: string;
    core_energy?: string | null;
    _count?: { substyles: number };
  };
  index: number;
}

/* Unique dual-gradient mesh per card slot */
const CARD_ATMOSPHERES = [
  {
    primary:   "radial-gradient(ellipse at 20% 65%, rgba(196,162,101,0.20) 0%, transparent 52%)",
    secondary: "radial-gradient(ellipse at 82% 18%, rgba(92,32,48,0.26) 0%, transparent 48%)",
    edge:      "rgba(196,162,101,0.28)",
  },
  {
    primary:   "radial-gradient(ellipse at 72% 58%, rgba(176,120,128,0.22) 0%, transparent 52%)",
    secondary: "radial-gradient(ellipse at 18% 28%, rgba(196,162,101,0.16) 0%, transparent 48%)",
    edge:      "rgba(176,120,128,0.28)",
  },
  {
    primary:   "radial-gradient(ellipse at 38% 72%, rgba(92,32,48,0.24) 0%, transparent 52%)",
    secondary: "radial-gradient(ellipse at 78% 22%, rgba(196,162,101,0.18) 0%, transparent 48%)",
    edge:      "rgba(196,162,101,0.22)",
  },
  {
    primary:   "radial-gradient(ellipse at 62% 38%, rgba(196,162,101,0.18) 0%, transparent 52%)",
    secondary: "radial-gradient(ellipse at 12% 78%, rgba(176,120,128,0.20) 0%, transparent 48%)",
    edge:      "rgba(176,120,128,0.22)",
  },
  {
    primary:   "radial-gradient(ellipse at 28% 32%, rgba(196,162,101,0.16) 0%, transparent 52%)",
    secondary: "radial-gradient(ellipse at 82% 72%, rgba(92,32,48,0.22) 0%, transparent 48%)",
    edge:      "rgba(196,162,101,0.22)",
  },
];

export function WardrobeWorldCard({ world, index }: WardrobeWorldCardProps) {
  const atm = CARD_ATMOSPHERES[index % CARD_ATMOSPHERES.length];
  const ref = useRef<HTMLAnchorElement>(null);

  /* Subtle 3-D tilt on mouse move */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [3, -3]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-4, 4]), { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }
  function handleMouseLeave() { mouseX.set(0); mouseY.set(0); }

  const substyleCount = world._count?.substyles ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.05, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.a
        ref={ref}
        href={`/wardrobe/${world.slug}`}
        className="world-card group block"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── Gradient mesh backgrounds ── */}
        <div className="world-card__bg" style={{ background: atm.primary }} />
        <div className="world-card__bg world-card__bg--secondary" style={{ background: atm.secondary }} />

        {/* ── Noise texture overlay ── */}
        <div className="world-card__noise" />

        {/* ── Dark cinematic overlay ── */}
        <div className="world-card__overlay" />

        {/* ── Edge border glow (unique per card) ── */}
        <div className="world-card__edge-glow" style={{ ["--edge-color" as any]: atm.edge }} />

        {/* ── Hover radial spotlight ── */}
        <div className="world-card__glow" />

        {/* ── Decorative horizontal rule ── */}
        <div className="absolute left-9 right-9 top-[52%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col justify-between p-9 min-h-[300px]">

          {/* Top: energy + counter */}
          <div className="flex items-start justify-between">
            <div className="space-y-1.5">
              {world.core_energy && (
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-px bg-luxury-gold/50" />
                  <p className="eyebrow text-luxury-gold/55 tracking-[.46em]">
                    {world.core_energy}
                  </p>
                </div>
              )}
            </div>

            {substyleCount > 0 && (
              <div className="flex flex-col items-end gap-0.5 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                <span className="font-serif italic text-luxury-gold/90 leading-none" style={{ fontSize: "1.35rem" }}>
                  {substyleCount}
                </span>
                <span className="eyebrow text-white/40 tracking-[.3em]">
                  {substyleCount === 1 ? "Aesthetic" : "Aesthetics"}
                </span>
              </div>
            )}
          </div>

          {/* Bottom: name + tagline + cta */}
          <div className="space-y-5 mt-auto pt-8">
            {/* World name */}
            <h3
              className="font-serif font-light italic text-luxury-cream group-hover:text-luxury-gold transition-colors duration-600"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: 1.05 }}
            >
              {world.name}
            </h3>

            {/* Tagline */}
            {world.tagline && (
              <p className="text-luxury-beige/34 text-[12.5px] font-light leading-relaxed line-clamp-2 max-w-[85%]">
                {world.tagline}
              </p>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-white/[0.055] group-hover:border-luxury-gold/18 transition-colors duration-600">
              <span className="eyebrow text-white/20 group-hover:text-luxury-gold/45 transition-colors duration-500 tracking-[.38em]">
                Enter World
              </span>
              <div className="w-9 h-9 rounded-full border border-white/[0.08] group-hover:border-luxury-gold/50 group-hover:bg-luxury-gold/[0.08] flex items-center justify-center transition-all duration-500">
                <ArrowUpRight className="w-3.5 h-3.5 text-white/28 group-hover:text-luxury-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom glow line ── */}
        <div
          className="absolute bottom-0 left-[12%] right-[12%] h-px transition-all duration-700"
          style={{
            background: `linear-gradient(to right, transparent, ${atm.edge.replace("0.28", "0")}, transparent)`,
          }}
        />
        <div
          className="world-card__bottom-line absolute bottom-0 left-[12%] right-[12%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(to right, transparent, ${atm.edge}, transparent)`,
          }}
        />
      </motion.a>
    </motion.div>
  );
}
