import { outfitService } from "@/services/outfit.service";
import { SubstylePageContent } from "@/components/features/substyle-page-content";
import { styleWorldService } from "@/services/style-world.service";
import { notFound } from "next/navigation";

export default async function SubstylePage({ params }: { params: Promise<{ slug: string, substyleSlug: string }> }) {
  const { slug, substyleSlug } = await params;
  
  let world;
  try {
    world = await styleWorldService.getBySlug(slug);
  } catch {
    notFound();
  }

  const substyle = world?.substyles?.find((s: any) => s.slug === substyleSlug);
  if (!substyle) {
    notFound();
  }

  const { outfits } = await outfitService.getMany({
    substyle_id: substyle.id,
    page: 1,
    limit: 50,
    sort_by: 'created_at',
    sort_order: 'desc',
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
      substyle={{ ...substyle, worldSlug: world.slug, worldName: world.name }} 
      initialOutfits={outfits} 
    />
  );
}

