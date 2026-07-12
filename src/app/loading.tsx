export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-luxury-blush/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-luxury-espresso/30 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vh] bg-luxury-gold/[0.03] blur-[200px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center gap-8">
        {/* Orbital ring */}
        <div className="relative w-16 h-16">
          {/* Outer spinning ring */}
          <div
            className="absolute inset-0 rounded-full border border-luxury-gold/15"
            style={{
              borderTopColor: "rgba(196,162,101,0.7)",
              animation: "spin 1.4s linear infinite",
            }}
          />
          {/* Inner glow ring */}
          <div
            className="absolute inset-2 rounded-full border border-luxury-rose/10"
            style={{
              borderTopColor: "rgba(176,120,128,0.4)",
              animation: "spin 2s linear infinite reverse",
            }}
          />
          {/* Centre monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-serif italic text-luxury-gold/70 text-2xl animate-pulse-soft"
              style={{ letterSpacing: "0.02em" }}
            >
              Y
            </span>
          </div>
        </div>

        {/* Label */}
        <div className="flex flex-col items-center gap-3">
          <p
            className="font-serif italic text-luxury-cream/25 text-sm tracking-[0.3em]"
            style={{ animation: "fadeIn 0.8s ease-out forwards" }}
          >
            curating the look…
          </p>
          {/* Animated progress dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-full bg-luxury-gold/30"
                style={{
                  width: i === 2 ? "6px" : "3px",
                  height: i === 2 ? "6px" : "3px",
                  animation: `dotPulse 1.4s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom thin line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      </div>
    </div>
  );
}
