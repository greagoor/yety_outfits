import { substyleService } from "@/services/substyle.service";
import { outfitRepository } from "@/repositories/outfit.repository";
import { styleWorldService } from "@/services/style-world.service";
import { notFound } from "next/navigation";
import { SubstylePageContent } from "@/components/features/substyle-page-content";

export default async function WardrobeSubstylePage({
  params,
}: {
  params: Promise<{ worldSlug: string; substyleSlug: string }>;
}) {
  const { worldSlug, substyleSlug } = await params;

  // Both getBySlug calls throw NotFoundError \u2014 catch to render proper 404s
  let substyle;
  try {
    substyle = await substyleService.getBySlug(substyleSlug);
  } catch {
    notFound();
  }

  // World is informational only (for breadcrumb); don't 404 if it's missing
  let world;
  try {
    world = await styleWorldService.getBySlug(worldSlug);
  } catch {
    // world will be undefined — SubstylePageContent handles missing worldName gracefully
  }


  const { outfits } = await outfitRepository.findMany({
    page: 1,
    limit: 100,
    sort_by: "created_at",
    sort_order: "desc",
    // substyle is guaranteed non-null here: notFound() throws if getBySlug threw
    substyle_id: substyle!.id,
    is_tried: undefined,
    is_favorite: undefined,
    aesthetic_keywords: undefined,
    search: undefined,
    style_world_id: undefined,
    overall_vibe: undefined,
    fabric: undefined,
    color: undefined,
    outfit_type: undefined,
    hairstyle_style: undefined,
    accessories: undefined,
  });

  return (
    <SubstylePageContent
      substyle={{ ...substyle!, worldSlug, worldName: world?.name }}
      initialOutfits={outfits}
    />
  );
}
