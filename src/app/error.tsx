"use client";

// ============================================================
// Global Error Boundary — Couple Style Universe
// Catches unhandled render errors; preserves the app's design language
// ============================================================

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to server/monitoring — only the digest to avoid leaking internals
    if (error.digest) {
      console.error("[Error Boundary] digest:", error.digest);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Ambient */}
        <div className="relative w-12 h-12 mx-auto">
          <div className="absolute inset-0 rounded-full border border-luxury-rose/20 animate-pulse-soft" />
          <div className="absolute inset-[3px] rounded-full border border-luxury-rose/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif italic text-luxury-rose/40 text-xl">!</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-serif italic text-luxury-cream/30 text-xl">
            Something went wrong.
          </p>
          <p className="eyebrow text-white/15 tracking-[.25em]">
            The archive encountered an unexpected error
          </p>
        </div>

        <button
          onClick={reset}
          className="group flex items-center gap-3 mx-auto text-white/20 hover:text-luxury-gold/60 transition-colors duration-500"
        >
          <span className="eyebrow tracking-[.35em]">Try again</span>
          <div className="w-8 h-px bg-white/10 group-hover:bg-luxury-gold/35 transition-colors duration-500" />
        </button>
      </div>
    </div>
  );
}
