"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/shared";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { OutfitCard } from "@/components/features/outfit-card";
import { BackButton } from "@/components/ui/back-button";
import { Search, Heart, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SubstylePageContent({ substyle, initialOutfits }: any) {
  const [search, setSearch] = useState("");
  const [favOnly, setFavOnly] = useState(false);

  // Shuffle once on mount so order feels organic, not chronological
  const shuffledOutfits = useMemo(() => {
    const arr = [...initialOutfits];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const backHref = substyle.worldSlug
    ? `/wardrobe/${substyle.worldSlug}`
    : undefined;

  const filtered = shuffledOutfits.filter((o: any) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      o.title?.toLowerCase().includes(q) ||
      o.overall_vibe?.toLowerCase().includes(q) ||
      o.aesthetic_keywords?.some((k: string) => k.toLowerCase().includes(q));
    const matchFav = favOnly ? o.is_favorite : true;
    return matchSearch && matchFav;
  });

  return (
    <PageWrapper>
      <section className="pt-24 pb-48 relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute top-0 right-0 w-[45vw] h-[45vh] bg-luxury-gold/[0.035] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[30vw] h-[30vh] bg-luxury-blush/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <Container>
          {/* ── Back navigation with optional breadcrumb ── */}
          <BackButton
            label={substyle.name}
            href={backHref}
            breadcrumbs={
              substyle.worldSlug && substyle.worldName
                ? [
                    { label: "Wardrobe", href: "/wardrobe" },
                    { label: substyle.worldName, href: `/wardrobe/${substyle.worldSlug}` },
                  ]
                : undefined
            }
          />

          {/* ── Page header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
            <div className="space-y-4 max-w-xl">
              <div className="editorial-header">
                <div className="editorial-header__eyebrow">
                  <div className="editorial-header__line" />
                  <span className="editorial-header__label">Aesthetic</span>
                </div>
                <h1
                  className="editorial-header__title italic"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
                >
                  {substyle.name}
                </h1>
              </div>

              {substyle.tagline && (
                <p className="text-luxury-beige/40 font-light text-[14px] leading-relaxed border-l border-luxury-gold/18 pl-4">
                  &ldquo;{substyle.tagline}&rdquo;
                </p>
              )}
              {substyle.description && (
                <p className="text-luxury-beige/26 font-light text-[12px] leading-relaxed max-w-sm">
                  {substyle.description}
                </p>
              )}
            </div>

            {/* ── Search bar ── */}
            <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[300px]">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20 group-focus-within:text-luxury-gold/60 transition-colors duration-400" />
                <input
                  type="text"
                  placeholder="Search looks…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-luxury-surface/40 border border-white/[0.06] rounded-full py-2.5 pl-9 pr-5 text-[11px] tracking-[.18em] text-luxury-cream/65 placeholder:text-white/18 focus:outline-none focus:border-luxury-gold/35 focus:bg-luxury-surface/60 transition-all duration-400 backdrop-blur-sm"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-white/25 hover:text-luxury-gold/60 transition-colors duration-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Favorites toggle — inline pill */}
              <button
                onClick={() => setFavOnly((v) => !v)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] tracking-[.22em] uppercase font-light transition-all duration-400 whitespace-nowrap",
                  favOnly
                    ? "border-luxury-rose/45 bg-luxury-rose/[0.08] text-luxury-rose"
                    : "border-white/[0.07] text-white/25 hover:border-luxury-rose/25 hover:text-luxury-rose/45"
                )}
              >
                <Heart className={cn("w-3 h-3 flex-shrink-0", favOnly && "fill-luxury-rose")} />
                <span className="hidden sm:inline">Favorites</span>
              </button>
            </div>
          </div>

          {/* ── Divider + count row ── */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/[0.04]">
            <p className="eyebrow text-white/18">
              {filtered.length} {filtered.length === 1 ? "Silhouette" : "Silhouettes"}
            </p>
            <AnimatePresence>
              {favOnly && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-luxury-rose/30 bg-luxury-rose/[0.06] text-luxury-rose eyebrow text-[9px]">
                    <Heart className="w-2 h-2 fill-luxury-rose" />
                    Filtered
                  </span>
                  <button
                    onClick={() => setFavOnly(false)}
                    className="inline-flex items-center gap-1.5 text-[9px] tracking-[.18em] uppercase text-white/30 hover:text-luxury-gold/70 transition-colors duration-300 group"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
                    All Looks
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Grid ── */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((outfit: any, i: number) => (
                <OutfitCard key={outfit.id} outfit={outfit} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-48 text-center space-y-6">
              <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center mx-auto">
                {search ? (
                  <X className="w-4 h-4 text-white/12" />
                ) : (
                  <Sparkles className="w-4 h-4 text-white/12" />
                )}
              </div>
              <p className="font-serif italic text-luxury-cream/18 text-lg">
                {search
                  ? `No matches for "${search}"`
                  : "The first look in this aesthetic is waiting to be added."}
              </p>
            </div>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
}
