"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORRECT     = process.env.NEXT_PUBLIC_APP_PASSWORD ?? "yetyshanky";
const SESSION_KEY = "csu_session_ts";
const SESSION_TTL = 30 * 60 * 1000; // 30 minutes in ms

/**
 * Checks sessionStorage for a valid (non-expired) unlock timestamp.
 * Returns the remaining TTL in ms if still alive, or -1 if expired / missing.
 */
function getSessionRemaining(): number {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return -1;
    const elapsed = Date.now() - parseInt(raw, 10);
    return elapsed < SESSION_TTL ? SESSION_TTL - elapsed : -1;
  } catch {
    return -1;
  }
}

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus]   = useState<"loading" | "locked" | "unlocking" | "open">("loading");
  const [password, setPassword] = useState("");
  const [shake, setShake]     = useState(false);
  const [focused, setFocused] = useState(false);
  // Once true, children stay in the DOM even when re-locked (preserves app state).
  const [hasBeenOpen, setHasBeenOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // On mount: check if there's a valid session from a previous in-tab navigation.
  // sessionStorage is per-tab, so a new tab / new browser window always starts fresh.
  useEffect(() => {
    // Clear legacy localStorage entries from older implementations.
    try { localStorage.removeItem("csu_auth_token"); } catch {/* */}

    const remaining = getSessionRemaining();
    if (remaining > 0) {
      // Still within the session window — skip the gate.
      setHasBeenOpen(true);
      setStatus("open");
    } else {
      // Expired or missing — require password.
      try { sessionStorage.removeItem(SESSION_KEY); } catch {/* */}
      setStatus("locked");
    }
  }, []);

  // Start / restart the session timeout whenever we transition to "open".
  useEffect(() => {
    if (status === "open") {
      setHasBeenOpen(true);

      // Write / refresh the session timestamp.
      try { sessionStorage.setItem(SESSION_KEY, Date.now().toString()); } catch {/* */}

      // Schedule auto-lock for the remaining TTL.
      const remaining = getSessionRemaining();
      const delay = remaining > 0 ? remaining : SESSION_TTL;

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        try { sessionStorage.removeItem(SESSION_KEY); } catch {/* */}
        setStatus("locked");
      }, delay);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT) {
      setStatus("unlocking");
      setTimeout(() => {
        setStatus("open");
      }, 1400);
    } else {
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 600);
    }
  };

  // SSR / hydration guard — render nothing until client knows auth state.
  if (status === "loading") return null;

  return (
    <>
      {/*
       * Protected content — once shown for the first time, children stay
       * mounted so that app state (scroll position, form data, navigation)
       * is preserved when the gate reappears after a timeout.
       * The gate overlay (z-[200]) fully covers the viewport when locked.
       */}
      {(hasBeenOpen || status === "unlocking" || status === "open") && (
        <>{children}</>
      )}

      {/*
       * Gate overlay — always in the same React tree so AnimatePresence can
       * properly fire the `exit` animation when status flips to "open".
       * Using `mode="wait"` is NOT needed here since children and gate are
       * sibling nodes, not alternating renders of the same slot.
       */}
      <AnimatePresence>
        {(status === "locked" || status === "unlocking") && (
          <motion.div
            key="password-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(24px)", scale: 1.05 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "#07060a" }}
          >
            {/* ── Layered ambience ── */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Central blush bloom */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#c0697a]/12 blur-[200px] rounded-full" />
              {/* Gold warmth bottom-left */}
              <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vh] bg-[#c9a84c]/8 blur-[160px] rounded-full" />
              {/* Deep mist top-right */}
              <div className="absolute top-0 right-1/4 w-[30vw] h-[35vh] bg-[#8b7355]/6 blur-[140px] rounded-full" />
              {/* Film grain */}
              <div
                className="absolute inset-0 opacity-[0.022] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(7,6,10,.85)_100%)]" />
            </div>

            {/* ── Content ── */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[340px] px-6 text-center"
            >
              {/* Brand mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-5 mb-16"
              >
                {/* Circle sigil */}
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full border border-[#c9a84c]/20 animate-pulse-soft" />
                  <div className="absolute inset-[3px] rounded-full border border-[#c9a84c]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif italic text-xl text-[#c9a84c]/60 font-light">Y</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h1 className="font-serif text-[2.6rem] italic text-[#f0e8d8] font-light leading-none tracking-tight">
                    Yashita
                  </h1>
                  <p className="eyebrow text-white/20 tracking-[.45em] text-[9px]">
                    Private Archive
                  </p>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-20 bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent mx-auto mb-14"
              />

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="space-y-8"
              >
                {/* Input */}
                <div className="relative">
                  <motion.div
                    animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <input
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="—"
                      autoFocus
                      className="w-full bg-transparent text-center font-serif italic text-xl text-[#f0e8d8]/80 tracking-[.4em] placeholder:text-white/10 focus:outline-none pb-4 border-b transition-colors duration-500"
                      style={{
                        borderColor: shake
                          ? "rgba(192,105,122,0.5)"
                          : focused
                          ? "rgba(201,168,76,0.45)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                    {/* Focus glow line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent"
                      animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {shake && (
                      <motion.p
                        key="err"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -bottom-7 left-0 right-0 text-center eyebrow text-[#c0697a]/65"
                      >
                        Not quite
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center gap-3 mx-auto text-white/25 hover:text-[#c9a84c]/70 transition-colors duration-500"
                >
                  <span className="eyebrow tracking-[.35em]">
                    {status === "unlocking" ? "Opening…" : "Enter"}
                  </span>
                  <motion.div
                    className="w-8 h-px bg-white/15 group-hover:bg-[#c9a84c]/40 transition-colors duration-500"
                    whileHover={{ scaleX: 1.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </button>
              </motion.form>

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="font-serif italic text-white/10 text-xs mt-20 leading-relaxed"
              >
                "Curated in Fabric, Memory &amp; Style."
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
