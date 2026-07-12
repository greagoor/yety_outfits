"use client";

import { useState, useRef } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  outfitId: string;
  onUploadComplete: (image: any) => void;
}

export function ImageUpload({ outfitId, onUploadComplete }: ImageUploadProps) {
  const [isDragging, setIsDragging]   = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent, over: boolean) => {
    e.preventDefault(); setIsDragging(over);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false);
    if (e.dataTransfer.files[0]) await upload(e.dataTransfer.files[0]);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) await upload(e.target.files[0]);
  };

  const upload = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setIsUploading(true);
    const form = new FormData();
    form.append("image", file);
    form.append("is_primary", "false");
    try {
      const res = await fetch(`/api/outfits/${outfitId}/images`, { method: "POST", body: form });
      if (!res.ok) throw new Error();
      const json = await res.json();
      onUploadComplete(json.data);
    } catch {
      alert("Upload failed — please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={e => handleDrag(e, true)}
      onDragLeave={e => handleDrag(e, false)}
      onDrop={handleDrop}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-400 select-none",
        isDragging
          ? "border-luxury-gold/50 bg-luxury-gold/8 text-luxury-gold"
          : "border-white/[0.07] text-white/30 hover:border-luxury-gold/30 hover:text-luxury-gold/50",
        isUploading && "pointer-events-none opacity-50"
      )}
    >
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
      {isUploading
        ? <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
        : <UploadCloud className="w-3.5 h-3.5 shrink-0" />
      }
      <span className="eyebrow tracking-[.25em]">
        {isUploading ? "Uploading…" : "Upload image"}
      </span>
      {!isUploading && (
        <span className="ml-auto font-serif italic text-[11px] text-white/20">
          drag or click
        </span>
      )}
    </div>
  );
}
