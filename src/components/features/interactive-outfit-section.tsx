"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageUpload } from "./image-upload";
import { cn } from "@/lib/utils";

interface Props {
  outfitId: string;
  initialImages: any[];
  initialPalette: string[];  // kept in props signature for backwards compat, not rendered here
}

export function InteractiveOutfitSection({ outfitId, initialImages }: Props) {
  const [images, setImages]         = useState(initialImages ?? []);
  const [activeImage, setActiveImage] = useState(images[0] ?? null);

  const handleUploadComplete = (newImage: any) => {
    setImages(prev => [newImage, ...prev]);
    if (!activeImage) setActiveImage(newImage);
  };

  return (
    <div className="space-y-3">
      {/* ── Main display ── */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-luxury-surface card-image-frame">
        {activeImage ? (
          <Image
            src={activeImage.image_url}
            alt="Outfit visual"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2 opacity-15">
              <div className="h-px w-10 bg-luxury-gold mx-auto" />
              <p className="eyebrow text-luxury-gold">No image yet</p>
              <div className="h-px w-10 bg-luxury-gold mx-auto" />
            </div>
          </div>
        )}
      </div>

      {/* ── Thumbnails ── */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => setActiveImage(img)}
              className={cn(
                "relative shrink-0 w-16 h-20 rounded-lg overflow-hidden transition-all duration-300",
                activeImage?.id === img.id
                  ? "ring-1 ring-luxury-gold ring-offset-1 ring-offset-luxury-black opacity-100"
                  : "opacity-40 hover:opacity-80"
              )}
            >
              <Image src={img.image_url} alt="Thumbnail" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* ── Upload strip ── */}
      <ImageUpload outfitId={outfitId} onUploadComplete={handleUploadComplete} />
    </div>
  );
}
