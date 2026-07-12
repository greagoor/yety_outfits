"use client";

import { useState } from "react";
import { Heart, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleActionsProps {
  outfitId: string;
  initialIsFavorite: boolean;
  initialIsTried: boolean;
}

export function ToggleActions({ outfitId, initialIsFavorite, initialIsTried }: ToggleActionsProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [isTried, setIsTried]       = useState(initialIsTried);
  const [loadingType, setLoadingType] = useState<"favorite" | "tried" | null>(null);

  const toggle = async (type: "favorite" | "tried") => {
    if (loadingType) return;
    setLoadingType(type);

    if (type === "favorite") setIsFavorite(f => !f);
    else setIsTried(t => !t);

    try {
      const res = await fetch(`/api/outfits/${outfitId}/toggle-${type}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`Server ${res.status}`);
    } catch (err: any) {
      // revert
      if (type === "favorite") setIsFavorite(f => !f);
      else setIsTried(t => !t);
      console.error(`Toggle ${type} failed:`, err.message);
    } finally {
      setLoadingType(null);
    }
  };

  return (
    <div className="flex items-center gap-4 pt-4 animate-fade-up">
      <button
        onClick={() => toggle("favorite")}
        disabled={!!loadingType}
        className={cn(
          "flex items-center gap-2.5 px-6 py-2.5 rounded-full border text-[10px] uppercase tracking-[0.25em] font-light transition-all duration-500",
          isFavorite
            ? "border-luxury-rose/50 bg-luxury-rose/10 text-luxury-rose"
            : "border-white/10 text-white/35 hover:border-luxury-rose/30 hover:text-luxury-rose/50"
        )}
      >
        {loadingType === "favorite"
          ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
          : <Heart className={cn("w-3.5 h-3.5 transition-all", isFavorite && "fill-luxury-rose")} />
        }
        {isFavorite ? "Saved" : "Favorite"}
      </button>

      <button
        onClick={() => toggle("tried")}
        disabled={!!loadingType}
        className={cn(
          "flex items-center gap-2.5 px-6 py-2.5 rounded-full border text-[10px] uppercase tracking-[0.25em] font-light transition-all duration-500",
          isTried
            ? "border-luxury-gold/50 bg-luxury-gold/10 text-luxury-gold"
            : "border-white/10 text-white/35 hover:border-luxury-gold/30 hover:text-luxury-gold/50"
        )}
      >
        {loadingType === "tried"
          ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
          : <CheckCircle2 className="w-3.5 h-3.5" />
        }
        {isTried ? "Styled" : "Mark as Styled"}
      </button>
    </div>
  );
}
