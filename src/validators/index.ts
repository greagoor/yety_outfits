// ============================================================
// Zod Validators — Couple Style Universe
// Strongly typed validation for all request inputs
// ============================================================

import { z } from 'zod';

// ──────────────────────────────────────────────────────────
// Shared
// ──────────────────────────────────────────────────────────

export const UuidSchema = z
  .string()
  .uuid({ message: 'Invalid UUID format' });

export const PaginationSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 1))
    .refine((v) => v >= 1, { message: 'page must be >= 1' }),
  limit: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 20))
    .refine((v) => v >= 1 && v <= 100, { message: 'limit must be between 1 and 100' }),
});

// ──────────────────────────────────────────────────────────
// Style World Validators
// ──────────────────────────────────────────────────────────

export const CreateStyleWorldSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  tagline: z.string().max(200).optional(),
  core_energy: z.string().max(200).optional(),
  description: z.string().max(2000).optional(),
});

export const UpdateStyleWorldSchema = CreateStyleWorldSchema.partial();

// ──────────────────────────────────────────────────────────
// Substyle Validators
// ──────────────────────────────────────────────────────────

export const CreateSubstyleSchema = z.object({
  style_world_id: UuidSchema,
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  tagline: z.string().max(300).optional(),
  description: z.string().max(2000).optional(),
});

export const UpdateSubstyleSchema = CreateSubstyleSchema.omit({ style_world_id: true }).partial();

// ──────────────────────────────────────────────────────────
// Outfit Details JSONB — deeply validated
// ──────────────────────────────────────────────────────────

const UpperWearSchema = z.object({
  description: z.string().default(''),
  fit: z.string().default(''),
  fabric: z.string().default(''),
  color: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const LowerWearSchema = z.object({
  description: z.string().default(''),
  fit: z.string().default(''),
  fabric: z.string().default(''),
  color: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const OnePieceSchema = z.object({
  description: z.string().default(''),
  fit: z.string().default(''),
  fabric: z.string().default(''),
  color: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const LayeringSchema = z.object({
  description: z.string().default(''),
  fit: z.string().default(''),
  fabric: z.string().default(''),
  color: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const FootwearSchema = z.object({
  description: z.string().default(''),
  color: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const AccessoriesSchema = z.object({
  earrings: z.string().default(''),
  neckwear: z.string().default(''),
  bracelets: z.string().default(''),
  rings: z.string().default(''),
  bags: z.string().default(''),
  glasses: z.string().default(''),
  extras: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const HairstyleSchema = z.object({
  description: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

const MakeupSchema = z.object({
  description: z.string().default(''),
  design_features: z.array(z.string()).default([]),
});

export const OutfitDetailsSchema = z.object({
  upper_wear: UpperWearSchema.default(() => ({ description: '', fit: '', fabric: '', color: '', design_features: [] })),
  lower_wear: LowerWearSchema.default(() => ({ description: '', fit: '', fabric: '', color: '', design_features: [] })),
  one_piece: OnePieceSchema.default(() => ({ description: '', fit: '', fabric: '', color: '', design_features: [] })),
  layering: LayeringSchema.default(() => ({ description: '', fit: '', fabric: '', color: '', design_features: [] })),
  footwear: FootwearSchema.default(() => ({ description: '', color: '', design_features: [] })),
  accessories: AccessoriesSchema.default(() => ({ earrings: '', neckwear: '', bracelets: '', rings: '', bags: '', glasses: '', extras: '', design_features: [] })),
  hairstyle: HairstyleSchema.default(() => ({ description: '', design_features: [] })),
  makeup: MakeupSchema.default(() => ({ description: '', design_features: [] })),
  color_palette: z.array(z.string()).default([]),
  styling_mood: z.string().default(''),
  styling_notes: z.string().default(''),
});

// ──────────────────────────────────────────────────────────
// Outfit Validators
// ──────────────────────────────────────────────────────────

export const CreateOutfitSchema = z.object({
  substyle_id: UuidSchema,
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  one_liner: z.string().max(300).optional(),
  overall_vibe: z.string().max(300).optional(),
  aesthetic_keywords: z.array(z.string().max(50)).max(20).default([]),
  is_tried: z.boolean().default(false),
  is_favorite: z.boolean().default(false),
  notes: z.string().max(5000).optional(),
  outfit_details: OutfitDetailsSchema,
});

export const UpdateOutfitSchema = CreateOutfitSchema
  .omit({ substyle_id: true })
  .partial();

// ──────────────────────────────────────────────────────────
// Outfit Query/Filter Validators
// ──────────────────────────────────────────────────────────

export const OutfitQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 1))
    .refine((v) => v >= 1, { message: 'page must be >= 1' }),
  limit: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 20))
    .refine((v) => v >= 1 && v <= 100, { message: 'limit must be 1–100' }),
  search: z.string().max(200).optional(),
  style_world_id: z.string().uuid().optional(),
  substyle_id: z.string().uuid().optional(),
  overall_vibe: z.string().max(200).optional(),
  aesthetic_keywords: z
    .string()
    .optional()
    .transform((v) => (v ? v.split(',').map((k) => k.trim()).filter(Boolean) : undefined)),
  is_tried: z
    .string()
    .optional()
    .transform((v) => (v === 'true' ? true : v === 'false' ? false : undefined)),
  is_favorite: z
    .string()
    .optional()
    .transform((v) => (v === 'true' ? true : v === 'false' ? false : undefined)),
  fabric: z.string().max(100).optional(),
  color: z.string().max(100).optional(),
  outfit_type: z.string().max(100).optional(),
  hairstyle_style: z.string().max(100).optional(),
  accessories: z.string().max(100).optional(),
  sort_by: z
    .enum(['created_at', 'updated_at', 'title'])
    .optional()
    .default('created_at'),
  sort_order: z.enum(['asc', 'desc']).optional().default('desc'),
});

// ──────────────────────────────────────────────────────────
// Inferred types from schemas
// ──────────────────────────────────────────────────────────

export type CreateStyleWorldInput = z.infer<typeof CreateStyleWorldSchema>;
export type UpdateStyleWorldInput = z.infer<typeof UpdateStyleWorldSchema>;
export type CreateSubstyleInput = z.infer<typeof CreateSubstyleSchema>;
export type UpdateSubstyleInput = z.infer<typeof UpdateSubstyleSchema>;
export type CreateOutfitInput = z.infer<typeof CreateOutfitSchema>;
export type UpdateOutfitInput = z.infer<typeof UpdateOutfitSchema>;
export type OutfitQuery = z.infer<typeof OutfitQuerySchema>;
export type OutfitDetailsInput = z.infer<typeof OutfitDetailsSchema>;
