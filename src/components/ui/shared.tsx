import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  variant?: "title" | "subtitle" | "body" | "caption" | "editorial";
}

export function Typography({
  children,
  className,
  as: Component = "p",
  variant = "body",
}: TypographyProps) {
  const variants = {
    title:    "font-serif tracking-tight text-luxury-cream font-light",
    subtitle: "font-serif italic text-luxury-gold/70 font-light",
    body:     "font-sans font-light leading-relaxed text-luxury-beige/60",
    caption:  "text-[10px] uppercase tracking-[0.4em] font-sans font-light text-luxury-gold/60",
    editorial:"font-serif italic tracking-tight text-luxury-cream",
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}

export function Container({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: any;
}) {
  return (
    <Component className={cn("max-w-[1400px] mx-auto px-6 md:px-12", className)}>
      {children}
    </Component>
  );
}
