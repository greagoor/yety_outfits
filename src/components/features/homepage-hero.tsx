"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/* ── Ambient floating orb ── */
function Orb({ className, delay = 0, d = 12 }: { className: string; delay?: number; d?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        scale:   [1, 1.12, 0.93, 1.08, 1],
        opacity: [0.38, 0.68, 0.42, 0.70, 0.38],
        x:       [0, 14, -8, 5, 0],
        y:       [0, -12, 10, -5, 0],
      }}
      transition={{ duration: d, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.25, 0.5, 0.75, 1] }}
    />
  );
}

/* ── Line reveal — descender-safe ── */
function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <div className="overflow-hidden pb-[0.2em] -mb-[0.2em]">
      <motion.div
        className={className}
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function HomepageHero() {
  const { scrollY } = useScroll();
  const bgY    = useTransform(scrollY, [0, 600], [0, 90]);
  const bgFade = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Parallax atmosphere ── */}
      <motion.div style={{ y: bgY, opacity: bgFade }} className="absolute inset-0 pointer-events-none">
        {/* Primary bloom */}
        <Orb className="w-[820px] h-[820px] bg-luxury-blush/13 blur-[210px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[53%]" delay={0} d={14} />
        {/* Gold — upper left */}
        <Orb className="w-[500px] h-[500px] bg-luxury-gold/7 blur-[160px] top-[12%] left-[2%]" delay={1.8} d={18} />
        {/* Rose — lower right */}
        <Orb className="w-[420px] h-[420px] bg-luxury-rose/8 blur-[140px] bottom-[10%] right-[2%]" delay={3.5} d={13} />
        {/* Corner shadows */}
        <div className="absolute -top-64 -left-64 w-[65vw] h-[75vh] bg-luxury-espresso/55 blur-[250px] rounded-full" />
        <div className="absolute -bottom-64 -right-64 w-[65vw] h-[75vh] bg-luxury-espresso/48 blur-[250px] rounded-full" />
        {/* Cinematic horizontal streak */}
        <motion.div
          className="absolute top-[44%] left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(196,162,101,0.04) 20%, rgba(196,162,101,0.09) 50%, rgba(196,162,101,0.04) 80%, transparent)" }}
          animate={{ opacity: [0, 1, 0.35, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        {/* Film grain */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-[0.022]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_22%,rgba(7,6,10,0.84)_100%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#07060a] to-transparent" />
      </motion.div>

      {/* ── Left annotation ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.6 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
      >
        <div className="h-20 w-px bg-gradient-to-b from-transparent to-luxury-gold/16" />
        <span className="eyebrow text-white/12 [writing-mode:vertical-lr] tracking-[.55em]">Private Archive</span>
        <div className="h-10 w-px bg-gradient-to-b from-luxury-gold/12 to-transparent" />
      </motion.div>

      {/* ── Right annotation ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1.6 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-luxury-gold/10" />
        <span className="eyebrow text-white/[0.08] [writing-mode:vertical-lr] tracking-[.55em]">
          SS 2024
        </span>
        <div className="h-20 w-px bg-gradient-to-b from-luxury-gold/10 to-transparent" />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-px w-12 bg-gradient-to-r from-luxury-gold/38 to-transparent"
          />
          <span className="eyebrow text-luxury-gold/42 tracking-[0.48em]">A Private Wardrobe Archive</span>
        </motion.div>

        {/* ── Main headline ── */}
        <h1 className="font-serif font-light" style={{ lineHeight: 1.08 }}>
          <Line delay={0.28} className="text-[clamp(2.6rem,6.8vw,6.4rem)] text-luxury-cream block">
            A wardrobe shaped
          </Line>
          <Line delay={0.44} className="text-[clamp(2.6rem,6.8vw,6.4rem)] text-luxury-cream block">
            by feeling,{" "}
            <span className="italic text-luxury-gold">detail,</span>
          </Line>
          <Line delay={0.60} className="text-[clamp(2.6rem,6.8vw,6.4rem)] text-luxury-beige/52 italic block">
            and memory.
          </Line>
        </h1>

        {/* Intimate line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 font-serif italic text-luxury-gold/38 text-lg md:text-xl font-light leading-relaxed"
        >
          Crafted quietly around Yashita&apos;s atmosphere and style.
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-luxury-beige/24 font-light text-sm md:text-[15px] leading-loose max-w-xs"
        >
          A private archive of silhouettes, softness, textures, and moments
          preserved through fashion.
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-12 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-luxury-gold/40 to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
            style={{ height: "100%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        </div>
        <span className="eyebrow text-white/[0.1] tracking-[.4em]">Scroll</span>
      </motion.div>
    </div>
  );
}
