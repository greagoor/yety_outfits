import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { PasswordGate } from "@/components/layout/password-gate";
import { NavigationProgress } from "@/components/layout/navigation-progress";

export const metadata: Metadata = {
  title: "Yashita's Archive | Private Wardrobe",
  description: "A private, cinematic wardrobe archive — an intimate collection of curated aesthetics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <PasswordGate>
          {/* Three-layer ambient background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-luxury-black" />
            <div className="absolute -top-32 right-0 w-[55vw] h-[55vh] bg-luxury-blush/10 blur-[180px] rounded-full animate-shimmer" />
            <div className="absolute -bottom-16 -left-16 w-[45vw] h-[45vh] bg-luxury-espresso/30 blur-[160px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vh] bg-luxury-gold/[0.035] blur-[200px] rounded-full animate-pulse-soft" />
          </div>
          <NavigationProgress />
          <Navbar />
          {children}
        </PasswordGate>
      </body>
    </html>
  );
}
