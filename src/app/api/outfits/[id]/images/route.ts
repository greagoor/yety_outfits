import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { outfitImageRepository } from '@/repositories';
import { successResponse, errorResponse, notFoundResponse } from '@/lib/api-response';
import { outfitRepository } from '@/repositories';
import { UuidSchema } from '@/validators';

// Maximum allowed upload size: 10 MB
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

// Allow only genuine image MIME types
const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/avif',
  'image/heic',
]);

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Validate UUID format before any DB/storage interaction
    const idParsed = UuidSchema.safeParse(id);
    if (!idParsed.success) {
      return errorResponse('Invalid outfit ID format', 400);
    }

    // Check if outfit exists
    const outfit = await outfitRepository.findById(id);
    if (!outfit) return notFoundResponse('Outfit');

    const formData = await request.formData();
    const file = formData.get('image') as File | null;
    const isPrimary = formData.get('is_primary') === 'true';

    if (!file) {
      return errorResponse('No image file provided', 400);
    }

    // ── Server-side MIME type validation ────────────────────────────────────
    // Do NOT rely on client-side type checks — they are trivially bypassed.
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return errorResponse('Only image files are allowed (jpeg, png, gif, webp, avif, heic)', 415);
    }

    // ── Server-side file size guard ──────────────────────────────────────────
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return errorResponse('Image must be under 10 MB', 413);
    }

    // Sanitise filename — strip everything except alphanumerics, dots, and hyphens
    const safeName = file.name.replace(/[^a-zA-Z0-9.\-]/g, '_').slice(0, 120);
    const filename = `${Date.now()}-${safeName}`;
    const storagePath = `${id}/${filename}`;

    const supabase = getSupabaseAdmin();

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('outfits')
      .upload(storagePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError || !uploadData) {
      // Log internally but never expose Supabase internals to the client
      console.error('[Image Upload] Supabase storage error:', uploadError?.message);
      return errorResponse('Failed to upload image to storage', 500);
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('outfits')
      .getPublicUrl(storagePath);

    // Save to database
    const hasImages = ((outfit as any).images?.length || 0) > 0;

    const imageRecord = await outfitImageRepository.create({
      outfit_id: id,
      image_url: publicUrl,
      storage_path: storagePath,
      is_primary: isPrimary || !hasImages, // Auto-primary if first
    });

    return successResponse(imageRecord, 'Image uploaded successfully');
  } catch {
    // Never expose stack traces or internal error messages
    return errorResponse('An unexpected error occurred', 500);
  }
}
