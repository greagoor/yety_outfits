export async function getStyleWorlds() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/style-worlds`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) throw new Error("Failed to fetch Style Worlds");
  const json = await res.json();
  return json.data;
}

export async function getStyleWorldBySlug(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/style-worlds/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch Style World");
  const json = await res.json();
  return json.data;
}

export async function getOutfits(params: string = "") {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/outfits?${params}`);
  if (!res.ok) throw new Error("Failed to fetch Outfits");
  const json = await res.json();
  return json;
}

export async function getOutfitById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/outfits/${id}`);
  if (!res.ok) throw new Error("Failed to fetch Outfit");
  const json = await res.json();
  return json.data;
}
