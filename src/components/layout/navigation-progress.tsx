"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const completeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    // Only trigger when path actually changes
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    // Clear any running timers
    if (timerRef.current) clearInterval(timerRef.current);
    if (completeRef.current) clearTimeout(completeRef.current);

    // Reset and show
    setProgress(0);
    setVisible(true);

    // Slowly crawl to ~80% to fake work
    let p = 0;
    timerRef.current = setInterval(() => {
      p += Math.random() * 8 + 2; // random increments feel natural
      if (p >= 80) {
        p = 80;
        if (timerRef.current) clearInterval(timerRef.current);
      }
      setProgress(p);
    }, 180);

    // After a tiny delay, snap to 100% and fade out
    completeRef.current = setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(100);
      setTimeout(() => setVisible(false), 500);
    }, 900);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (completeRef.current) clearTimeout(completeRef.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <>
      {/* Top progress bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[1.5px] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition:
            progress === 100
              ? "width 0.3s ease-out, opacity 0.5s ease-out 0.1s"
              : "width 0.3s ease-out",
          background:
            "linear-gradient(90deg, #c4a265 0%, #e8cc8a 50%, #c4a265 100%)",
          boxShadow: "0 0 12px 2px rgba(196, 162, 101, 0.6)",
        }}
      />
      {/* Subtle full-page dim overlay that fades in/out */}
      <div
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{
          background: "rgba(7, 6, 10, 0.35)",
          opacity: progress === 100 ? 0 : 0.6,
          transition: "opacity 0.4s ease-out",
          backdropFilter: "blur(1px)",
        }}
      />
      {/* Centered wordmark pulse */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        style={{
          opacity: progress === 100 ? 0 : 1,
          transition: "opacity 0.4s ease-out",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Animated logo mark */}
          <div className="relative w-12 h-12">
            <div
              className="absolute inset-0 rounded-full border border-luxury-gold/30 animate-ping"
              style={{ animationDuration: "1.8s" }}
            />
            <div className="absolute inset-1 rounded-full border border-luxury-gold/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-serif italic text-luxury-gold/80 text-xl"
                style={{ letterSpacing: "0.02em" }}
              >
                Y
              </span>
            </div>
          </div>

          {/* Animated dots */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-luxury-gold/50"
                style={{
                  animation: `dotPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
