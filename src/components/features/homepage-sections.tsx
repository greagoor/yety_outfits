"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/shared";
import { ArrowUpRight } from "lucide-react";

/* ── Viewport reveal ── */
function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 2 — EDITORIAL STORYTELLING
════════════════════════════════════════════════════════ */
function EditorialSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04]">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[40vw] h-[60vh] bg-luxury-blush/5 blur-[180px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-[35vw] h-[50vh] bg-luxury-gold/4 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-32 bg-luxury-espresso/40 blur-[120px]" />
      </div>

      {/* ── Row A: Statement 1 ── */}
      <div className="py-36 border-b border-white/[0.04]">
        <Container>
          <Reveal delay={0} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-10 bg-gradient-to-r from-luxury-gold/35 to-transparent" />
              <p className="eyebrow text-luxury-gold/35 tracking-[0.48em]">The Collection</p>
            </div>
            <blockquote
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-cream font-light"
              style={{ lineHeight: 1.1, overflow: "visible" }}
            >
              Every outfit begins as a feeling
              <br />
              before it becomes a{" "}
              <span className="italic text-luxury-gold">silhouette.</span>
            </blockquote>
          </Reveal>
        </Container>
      </div>

      {/* ── Row B: Split ── */}
      <div className="py-36 border-b border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <div>
              <Reveal delay={0}>
                <p className="text-luxury-beige/36 font-light text-xl md:text-2xl leading-loose">
                  Textures, palettes, and atmosphere
                  collected into wearable memories.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="h-px w-16 bg-gradient-to-r from-luxury-gold/30 to-transparent"
                />
              </Reveal>
            </div>

            {/* Right — Fashion editorial illustration */}
            <Reveal delay={0.2} className="flex justify-end">
              <div className="relative w-full max-w-[300px] aspect-[3/4] select-none">

                {/* Outer editorial frame */}
                <div className="absolute inset-0 rounded-2xl border border-white/[0.05] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal/80 via-luxury-mist/40 to-luxury-espresso/60" />
                </div>

                {/* Animated background glow */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-luxury-blush/18 blur-[70px] rounded-full pointer-events-none"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* SVG dress silhouette */}
                <svg
                  viewBox="0 0 200 320"
                  className="absolute inset-0 w-full h-full p-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="dress-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="rgba(196,162,101,0.12)" />
                      <stop offset="60%"  stopColor="rgba(176,120,128,0.08)" />
                      <stop offset="100%" stopColor="rgba(28,20,16,0.3)" />
                    </linearGradient>
                    <linearGradient id="dress-stroke" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="rgba(196,162,101,0.55)" />
                      <stop offset="100%" stopColor="rgba(196,162,101,0.15)" />
                    </linearGradient>
                  </defs>
                  <path d="M78 28 Q100 20 122 28" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M78 28 Q58 36 52 58 L44 110" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M122 28 Q142 36 148 58 L156 110" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M44 110 Q42 130 50 148" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M156 110 Q158 130 150 148" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M50 148 Q100 140 150 148" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M50 148 Q28 220 22 300" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M150 148 Q172 220 178 300" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path d="M22 300 Q100 312 178 300" stroke="url(#dress-stroke)" strokeWidth="0.8" strokeLinecap="round" />
                  <path
                    d="M78 28 Q58 36 52 58 L44 110 Q42 130 50 148 Q28 220 22 300 Q100 312 178 300 Q172 220 150 148 Q158 130 156 110 L148 58 Q142 36 122 28 Q100 20 78 28Z"
                    fill="url(#dress-fill)"
                  />
                  <path d="M62 150 Q100 144 138 150" stroke="rgba(196,162,101,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
                  <line x1="14" y1="28" x2="14" y2="148" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <line x1="11" y1="28" x2="17" y2="28" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <line x1="11" y1="148" x2="17" y2="148" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                </svg>

                {/* Editorial annotation overlays */}
                <div className="absolute top-5 right-5 text-right">
                  <p className="eyebrow text-luxury-gold/30 tracking-[0.4em] text-[7px]">No. 01</p>
                  <p className="eyebrow text-white/12 tracking-[0.3em] text-[6px] mt-0.5">SS 2024</p>
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  <span className="eyebrow text-white/10 [writing-mode:vertical-lr] tracking-[0.4em] text-[6px]">Silhouette</span>
                </div>
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="h-px bg-gradient-to-r from-luxury-gold/25 to-transparent mb-3" />
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-white/18 tracking-[0.4em] text-[7px]">Archive</p>
                    <p className="font-serif italic text-luxury-gold/30 text-xs">Y.</p>
                  </div>
                </div>

                {/* Sparkle dots */}
                <motion.div
                  className="absolute top-[35%] left-[52%] w-1 h-1 rounded-full bg-luxury-gold/40"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="absolute top-[58%] left-[44%] w-0.5 h-0.5 rounded-full bg-luxury-gold/30"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* ── Row C: Statement 3 ── */}
      <div className="py-36">
        <Container>
          <Reveal delay={0} className="max-w-2xl ml-auto text-right">
            <p
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-cream/78 font-light italic"
              style={{ lineHeight: 1.15, overflow: "visible" }}
            >
              Style captured not only in fabric,
              <br />
              but in{" "}
              <span className="not-italic text-luxury-gold/88">emotion</span>{" "}
              and presence.
            </p>
            <Reveal delay={0.2} className="mt-10 flex justify-end">
              <div className="h-px w-16 bg-gradient-to-l from-luxury-gold/28 to-transparent" />
            </Reveal>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SECTION 3 — FINAL TRANSITION
════════════════════════════════════════════════════════ */
function FinalTransition() {
  return (
    <section className="relative py-56 border-t border-white/[0.04] overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-blush/[0.045] to-luxury-black/40" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vh] rounded-full bg-luxury-gold/[0.04] blur-[220px]"
          animate={{ scale: [1, 1.14, 1], opacity: [0.48, 0.82, 0.48] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Top line reveal */}
        <motion.div
          className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(196,162,101,0.12), transparent)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <Container>
        <div className="text-center">

          {/* Giant atmospheric word */}
          <Reveal y={12} delay={0}>
            <p
              className="font-serif font-light text-[clamp(5.5rem,18vw,16rem)] text-white/[0.016] leading-none select-none pointer-events-none"
              style={{ overflow: "visible" }}
              aria-hidden
            >
              The Wardrobe
            </p>
          </Reveal>

          {/* Main statement — overlaid */}
          <Reveal y={10} delay={0.18} className="-mt-[clamp(2.5rem,7vw,7rem)]">
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-cream font-light relative z-10"
              style={{ lineHeight: 1.1, overflow: "visible" }}
            >
              Enter the wardrobe.
            </h2>
          </Reveal>

          {/* ── THE ONLY CTA ── */}
          <Reveal delay={0.36} className="mt-16">
            <Link
              href="/wardrobe"
              className="group inline-flex items-center gap-5 text-luxury-cream/30 hover:text-luxury-gold transition-colors duration-600"
            >
              <motion.div
                className="w-12 h-px bg-luxury-cream/10 group-hover:bg-luxury-gold/45 transition-colors duration-600"
                whileHover={{ scaleX: 1.5 }}
                style={{ transformOrigin: "right" }}
              />
              <span className="eyebrow tracking-[0.5em] group-hover:tracking-[0.55em] transition-all duration-600">
                Open the Archive
              </span>
              <div className="w-8 h-8 rounded-full border border-white/[0.06] group-hover:border-luxury-gold/40 group-hover:bg-luxury-gold/[0.07] flex items-center justify-center transition-all duration-500">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-luxury-gold transition-colors duration-500" />
              </div>
            </Link>
          </Reveal>

          {/* Closing sigil */}
          <Reveal delay={0.55} className="mt-32">
            <div className="w-8 h-8 rounded-full border border-luxury-gold/10 flex items-center justify-center mx-auto mb-5">
              <span className="font-serif italic text-luxury-gold/28 font-light leading-none">Y</span>
            </div>
            <p className="eyebrow text-white/[0.065] tracking-[0.52em]">Yashita&apos;s Archive</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function HomepageSections() {
  return (
    <>
      <EditorialSection />
      <FinalTransition />
    </>
  );
}
