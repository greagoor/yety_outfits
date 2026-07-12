"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface BackButtonProps {
  label?: string;
  /** When provided, renders as a Link to this href instead of router.back() */
  href?: string;
  /** Optional parent breadcrumb items: [{label, href}] */
  breadcrumbs?: { label: string; href: string }[];
}

export function BackButton({ label = "Back", href, breadcrumbs }: BackButtonProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      {/* Breadcrumb trail */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="breadcrumb mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <Link href={crumb.href} className="breadcrumb__item">
                {crumb.label}
              </Link>
              <div className="breadcrumb__sep" />
            </span>
          ))}
          <span className="breadcrumb__item breadcrumb__item--active">{label}</span>
        </div>
      )}

      {/* Back button */}
      {href ? (
        <Link href={href}>
          <BackInner label={label} />
        </Link>
      ) : (
        <button onClick={() => router.back()}>
          <BackInner label={label} />
        </button>
      )}
    </motion.div>
  );
}

function BackInner({ label }: { label: string }) {
  return (
    <span className="group flex items-center gap-3 text-white/28 hover:text-luxury-gold transition-colors duration-500 w-fit">
      <span className="w-8 h-8 rounded-full border border-white/[0.08] group-hover:border-luxury-gold/40 flex items-center justify-center transition-all duration-500 group-hover:bg-luxury-gold/[0.07]">
        <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-translate-x-0.5" />
      </span>
      <span className="eyebrow tracking-[.32em] group-hover:tracking-[.36em] transition-all duration-500">
        {label}
      </span>
    </span>
  );
}
