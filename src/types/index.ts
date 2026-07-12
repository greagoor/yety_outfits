// ============================================================
// TypeScript Types — Couple Style Universe
// Mirrors the Prisma models + JSONB outfit structure
// ============================================================

// ──────────────────────────────────────────────────────────
// JSONB: Outfit Details — the heart of each outfit entry
// ──────────────────────────────────────────────────────────

export interface UpperWear {
  type: string;
  fit: string;
  fabric: string;
  color: string;
  texture: string;
  details: string;
}

export interface LowerWear {
  type: string;
  fit: string;
  fabric: string;
  color: string;
  details: string;
}

export interface OnePiece {
  type: string;
  fit: string;
  fabric: string;
  color: string;
  length: string;
  details: string;
}

export interface Layering {
  type: string;
  fabric: string;
  style: string;
  details: string;
}

export interface Footwear {
  type: string;
  color: string;
  style: string;
}

export interface Accessories {
  earrings: string;
  neckwear: string;
  bracelets: string;
  rings: string;
  bags: string;
  glasses: string;
  extras: string;
}

export interface Hairstyle {
  style: string;
  details: string;
  hair_accessories: string;
}

export interface Makeup {
  base_style: string;
  lip_shade: string;
  eye_makeup: string;
  finish: string;
}

export interface OutfitDetails {
  upper_wear: UpperWear;
  lower_wear: LowerWear;
  one_piece: OnePiece;
  layering: Layering;
  footwear: Footwear;
  accessories: Accessories;
  hairstyle: Hairstyle;
  makeup: Makeup;
  color_palette: string[];
  body_language: string;
  overall_energy: string;
  styling_notes: string;
}

// ──────────────────────────────────────────────────────────
// Domain Types (mirroring Prisma models)
// ──────────────────────────────────────────────────────────

export interface StyleWorld {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  core_energy: string | null;
  description: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Substyle {
  id: string;
  style_world_id: string;
  name: string;
  slug: string;
  one_liner: string | null;
  visual_identity: string | null;
  includes: string | null;
  created_at: Date;
  updated_at: Date;
  style_world?: StyleWorld;
}

export interface Outfit {
  id: string;
  substyle_id: string;
  title: string;
  one_liner: string | null;
  overall_vibe: string | null;
  aesthetic_keywords: string[];
  is_tried: boolean;
  is_favorite: boolean;
  rating: number;
  notes: string | null;
  outfit_details: OutfitDetails;
  created_at: Date;
  updated_at: Date;
  substyle?: Substyle;
}

// ──────────────────────────────────────────────────────────
// API Request/Response Types
// ──────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  pagination?: PaginationMeta;
  errors?: ValidationError[];
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ValidationError {
  field: string;
  message: string;
}

// ──────────────────────────────────────────────────────────
// Filter & Query Types
// ──────────────────────────────────────────────────────────

export interface OutfitFilters {
  style_world_id?: string;
  substyle_id?: string;
  overall_vibe?: string;
  aesthetic_keywords?: string[];
  is_tried?: boolean;
  is_favorite?: boolean;
  fabric?: string;
  color?: string;
  outfit_type?: string;
  hairstyle_style?: string;
  accessories?: string;
  rating_min?: number;
  rating_max?: number;
}

export interface OutfitQueryParams extends OutfitFilters {
  page?: number;
  limit?: number;
  search?: string;
  sort_by?: 'created_at' | 'updated_at' | 'rating' | 'title';
  sort_order?: 'asc' | 'desc';
}

// ──────────────────────────────────────────────────────────
// Create/Update Input Types
// ──────────────────────────────────────────────────────────

export type CreateStyleWorldInput = {
  name: string;
  tagline?: string;
  core_energy?: string;
  description?: string;
};

export type UpdateStyleWorldInput = Partial<CreateStyleWorldInput>;

export type CreateSubstyleInput = {
  style_world_id: string;
  name: string;
  one_liner?: string;
  visual_identity?: string;
  includes?: string;
};

export type UpdateSubstyleInput = Partial<Omit<CreateSubstyleInput, 'style_world_id'>>;

export type CreateOutfitInput = {
  substyle_id: string;
  title: string;
  one_liner?: string;
  overall_vibe?: string;
  aesthetic_keywords?: string[];
  is_tried?: boolean;
  is_favorite?: boolean;
  rating?: number;
  notes?: string;
  outfit_details: OutfitDetails;
};

export type UpdateOutfitInput = Partial<Omit<CreateOutfitInput, 'substyle_id'>>;
