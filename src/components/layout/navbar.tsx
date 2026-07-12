"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Wardrobe",  href: "/wardrobe" },
  { name: "Favorites", href: "/favorites" },
  { name: "Styles",    href: "/tried-looks" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6">
      <motion.div
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-6 px-5 py-2.5 rounded-full border border-white/[0.05] bg-luxury-black/70 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,.55),inset_0_0_0_1px_rgba(255,255,255,.025)]"
      >
        {/* ── Brand monogram ── */}
        <Link href="/" className="group flex items-center gap-2.5 pr-1">
          <div className="w-6 h-6 rounded-full border border-luxury-gold/22 group-hover:border-luxury-gold/50 flex items-center justify-center transition-all duration-500 group-hover:bg-luxury-gold/[0.06]">
            <span className="font-serif italic text-[11px] text-luxury-gold/55 group-hover:text-luxury-gold transition-colors duration-500 leading-none">
              Y
            </span>
          </div>
          <span className="font-serif italic text-[13px] text-luxury-cream/60 group-hover:text-luxury-gold transition-colors duration-500 leading-none tracking-wide">
            Yashita
          </span>
        </Link>

        {/* Hairline separator */}
        <div className="w-px h-3.5 bg-white/[0.07]" />

        {/* Nav links */}
        <div className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[.24em] font-light transition-colors duration-500",
                  active ? "text-luxury-gold" : "text-white/32 hover:text-white/60"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-bubble"
                    className="absolute inset-0 rounded-full bg-luxury-gold/[0.09] border border-luxury-gold/16"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
