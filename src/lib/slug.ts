// ============================================================
// Slug Utility — Couple Style Universe
// Auto-generates clean URL slugs from any string
// ============================================================

/**
 * Converts a display name into a URL-safe slug.
 * "Quiet Luxury" → "quiet-luxury"
 */
export function generateSlug(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // remove non-word chars (keep hyphens)
    .replace(/[\s_]+/g, '-')    // spaces/underscores → hyphens
    .replace(/-+/g, '-')        // collapse multiple hyphens
    .replace(/^-+|-+$/g, '');   // strip leading/trailing hyphens
}

/**
 * Ensures slug uniqueness by appending a numeric suffix.
 * Usage: pass a check function that returns true if slug is taken.
 */
export async function uniqueSlug(
  base: string,
  isTaken: (slug: string) => Promise<boolean>
): Promise<string> {
  let slug = generateSlug(base);
  let counter = 1;

  while (await isTaken(slug)) {
    slug = `${generateSlug(base)}-${counter}`;
    counter++;
  }

  return slug;
}
