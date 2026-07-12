// ============================================================
// Custom 404 — Couple Style Universe
// Matches the app's design language; replaces Next.js default 404
// ============================================================

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Ambient circle sigil */}
        <div className="relative w-14 h-14 mx-auto">
          <div className="absolute inset-0 rounded-full border border-luxury-gold/15 animate-pulse-soft" />
          <div className="absolute inset-[3px] rounded-full border border-luxury-gold/08" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif italic text-luxury-gold/35 text-xl">?</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-serif italic text-luxury-cream/25 text-2xl leading-snug">
            Not found in the wardrobe.
          </p>
          <p className="eyebrow text-white/12 tracking-[.28em]">
            This silhouette does not exist
          </p>
        </div>

        <div className="h-px w-12 bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent mx-auto" />

        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-white/20 hover:text-luxury-gold/60 transition-colors duration-500"
        >
          <div className="w-6 h-px bg-white/10 group-hover:bg-luxury-gold/35 transition-colors duration-500" />
          <span className="eyebrow tracking-[.35em]">Return home</span>
        </Link>
      </div>
    </div>
  );
}
