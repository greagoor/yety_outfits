"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExplainOutfitProps {
  outfit: {
    title: string;
    one_liner?: string;
    overall_vibe?: string;
    aesthetic_keywords?: string[];
    outfit_details: any;
  };
}

function buildPrompt(outfit: ExplainOutfitProps["outfit"]): string {
  const d = outfit.outfit_details ?? {};
  const parts: string[] = [];

  parts.push(`${outfit.title}.`);
  if (outfit.one_liner) parts.push(outfit.one_liner);

  // Clothing sections — description-first
  const clothingSections = [
    { label: "Upper wear",  data: d.upper_wear  },
    { label: "Lower wear",  data: d.lower_wear  },
    { label: "One-piece",   data: d.one_piece   },
    { label: "Layering",    data: d.layering    },
    { label: "Footwear",    data: d.footwear    },
  ];

  for (const s of clothingSections) {
    if (!s.data) continue;
    const bits = [
      s.data.description,
      s.data.fit    && `Fit: ${s.data.fit}`,
      s.data.color  && `Color: ${s.data.color}`,
      s.data.fabric && `Fabric: ${s.data.fabric}`,
      Array.isArray(s.data.design_features) && s.data.design_features.length
        ? `Details: ${s.data.design_features.join(", ")}`
        : null,
    ].filter(Boolean).join(". ");
    if (bits) parts.push(`${s.label}: ${bits}.`);
  }

  // Accessories
  const acc = d.accessories ?? {};
  const accDesc = Object.values(acc).filter(Boolean).join(", ");
  if (accDesc) parts.push(`Accessories: ${accDesc}.`);

  // Hair + makeup — description-first
  if (d.hairstyle?.description) {
    const hairBits = [
      d.hairstyle.description,
      Array.isArray(d.hairstyle.design_features) && d.hairstyle.design_features.length
        ? d.hairstyle.design_features.join(", ")
        : null,
    ].filter(Boolean).join(". ");
    parts.push(`Hair: ${hairBits}.`);
  }
  if (d.makeup?.description) {
    const makeupBits = [
      d.makeup.description,
      Array.isArray(d.makeup.design_features) && d.makeup.design_features.length
        ? d.makeup.design_features.join(", ")
        : null,
    ].filter(Boolean).join(". ");
    parts.push(`Makeup: ${makeupBits}.`);
  }

  // Color palette
  if (d.color_palette?.length) {
    parts.push(`Colour palette: ${d.color_palette.join(", ")}.`);
  }

  // Aesthetic keywords + vibe
  if (outfit.aesthetic_keywords?.length) {
    parts.push(`Aesthetic: ${outfit.aesthetic_keywords.join(", ")}.`);
  }
  if (outfit.overall_vibe) parts.push(`Overall vibe: ${outfit.overall_vibe}.`);

  // Mood + notes
  if (d.styling_mood)  parts.push(`Styling mood: ${d.styling_mood}`);
  if (d.styling_notes) parts.push(`Styling notes: ${d.styling_notes}`);

  return parts.join(" ");
}

export function ExplainOutfit({ outfit }: ExplainOutfitProps) {
  const [text, setText]     = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied]   = useState(false);

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setText(buildPrompt(outfit));
      setLoading(false);
    }, 600);
  };

  const copy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Trigger row */}
      <div className="flex items-center gap-3">
        <button
          onClick={generate}
          disabled={loading}
          className={cn(
            "flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-[10px] tracking-[.25em] uppercase font-light transition-all duration-500",
            "border-luxury-gold/30 text-luxury-gold/70 hover:border-luxury-gold/60 hover:text-luxury-gold hover:bg-luxury-gold/8",
            loading && "opacity-50 pointer-events-none"
          )}
        >
          {loading
            ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
            : <Sparkles className="w-3.5 h-3.5" />
          }
          Explain Outfit
        </button>

        <AnimatePresence>
          {text && (
            <motion.button
              key="copy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={copy}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] tracking-[.25em] uppercase font-light transition-all duration-400",
                copied
                  ? "border-luxury-gold/50 bg-luxury-gold/12 text-luxury-gold"
                  : "border-white/[0.08] text-white/30 hover:border-luxury-gold/30 hover:text-luxury-gold/50"
              )}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied" : "Copy"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Generated text */}
      <AnimatePresence>
        {text && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative glass-card p-6 border-luxury-gold/10 bg-luxury-gold/[0.03] space-y-3"
          >
            <p className="eyebrow text-luxury-gold/40 text-[8px]">AI-ready description</p>
            <p className="text-luxury-cream/65 text-sm font-light leading-relaxed italic">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
