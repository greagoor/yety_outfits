# 🌸 Couple Style Universe

> A production-grade personalized fashion archive — cinematic, structured, deeply curated.

---

## What This Is

**Couple Style Universe** is a backend system for a personalized digital wardrobe and cinematic fashion archive. It is **not** an e-commerce platform. It is a structured aesthetic database — emotionally organized, developer-friendly, and built to scale.

The hierarchy:

```
Style World
   └── Substyle
          └── Outfit
```

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 16 (App Router)             |
| Language     | TypeScript (strict)                 |
| ORM          | Prisma 7                            |
| Database     | PostgreSQL via Supabase             |
| Validation   | Zod 4                               |
| Auth-ready   | Supabase JS client                  |

---

## Project Structure

```
src/
├── app/
│   └── api/
│       ├── health/                     ← GET  /api/health
│       ├── style-worlds/
│       │   ├── route.ts                ← GET, POST
│       │   └── [slug]/route.ts         ← GET, PATCH, DELETE
│       ├── substyles/
│       │   ├── route.ts                ← GET, POST
│       │   └── [slug]/route.ts         ← GET, PATCH, DELETE
│       └── outfits/
│           ├── route.ts                ← GET (filtered/paginated), POST
│           └── [id]/
│               ├── route.ts            ← GET, PATCH, DELETE
│               ├── toggle-tried/       ← PATCH
│               └── toggle-favorite/    ← PATCH
├── lib/
│   ├── prisma.ts                       ← Singleton Prisma client
│   ├── supabase.ts                     ← Public + admin Supabase clients
│   ├── env.ts                          ← Zod env validation
│   ├── api-response.ts                 ← Response factory functions
│   ├── errors.ts                       ← Typed error classes
│   ├── parse-request.ts                ← Request body/query parser
│   ├── route-handler.ts                ← Error-handling HOC
│   └── slug.ts                         ← Slug generator
├── repositories/
│   ├── style-world.repository.ts
│   ├── substyle.repository.ts
│   └── outfit.repository.ts            ← JSONB filtering + FTS
├── services/
│   ├── style-world.service.ts
│   ├── substyle.service.ts
│   └── outfit.service.ts
├── validators/
│   └── index.ts                        ← All Zod schemas
└── types/
    └── index.ts                        ← All TypeScript types

prisma/
├── schema.prisma                       ← Prisma models
└── seed.ts                             ← 7 worlds · 21 substyles · 6 outfits
```

---

## Database Schema

### `style_worlds`
| Column       | Type        | Notes                  |
|--------------|-------------|------------------------|
| id           | UUID        | Primary key            |
| name         | TEXT        | Required               |
| slug         | TEXT        | Unique, auto-generated |
| tagline      | TEXT        | Optional               |
| core_energy  | TEXT        | Optional               |
| description  | TEXT        | Optional               |
| created_at   | TIMESTAMPTZ | Auto                   |
| updated_at   | TIMESTAMPTZ | Auto-updates           |

### `substyles`
| Column          | Type        | Notes                        |
|-----------------|-------------|------------------------------|
| id              | UUID        | Primary key                  |
| style_world_id  | UUID        | FK → style_worlds (CASCADE)  |
| name            | TEXT        | Required                     |
| slug            | TEXT        | Unique, auto-generated       |
| one_liner       | TEXT        | Optional                     |
| visual_identity | TEXT        | Optional                     |
| includes        | TEXT        | Optional                     |
| created_at      | TIMESTAMPTZ | Auto                         |
| updated_at      | TIMESTAMPTZ | Auto-updates                 |

### `outfits`
| Column             | Type        | Notes                      |
|--------------------|-------------|----------------------------|
| id                 | UUID        | Primary key                |
| substyle_id        | UUID        | FK → substyles (CASCADE)   |
| title              | TEXT        | Required                   |
| one_liner          | TEXT        | Optional                   |
| overall_vibe       | TEXT        | Optional                   |
| aesthetic_keywords | TEXT[]      | Indexed array              |
| is_tried           | BOOLEAN     | Default false              |
| is_favorite        | BOOLEAN     | Default false              |
| rating             | SMALLINT    | 0–10                       |
| notes              | TEXT        | Optional                   |
| outfit_details     | JSONB       | Full outfit composition    |
| created_at         | TIMESTAMPTZ | Auto                       |
| updated_at         | TIMESTAMPTZ | Auto-updates               |

---

## Outfit Details JSONB Structure

```json
{
  "upper_wear":    { "type", "fit", "fabric", "color", "texture", "details" },
  "lower_wear":    { "type", "fit", "fabric", "color", "details" },
  "one_piece":     { "type", "fit", "fabric", "color", "length", "details" },
  "layering":      { "type", "fabric", "style", "details" },
  "footwear":      { "type", "color", "style" },
  "accessories":   { "earrings", "neckwear", "bracelets", "rings", "bags", "glasses", "extras" },
  "hairstyle":     { "style", "details", "hair_accessories" },
  "makeup":        { "base_style", "lip_shade", "eye_makeup", "finish" },
  "color_palette": ["#hex1", "#hex2"],
  "body_language": "",
  "overall_energy": "",
  "styling_notes": ""
}
```

---

## Setup

### 1. Clone & Install

```bash
git clone <your-repo>
cd outfits
npm install
```

### 2. Configure Environment

Copy `.env` to `.env.local` and fill in your Supabase values:

```bash
cp .env .env.local
```

Required variables:

```env
DATABASE_URL=postgresql://...?pgbouncer=true&connection_limit=1
DIRECT_URL=postgresql://...
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

> **Where to find these:** Supabase Dashboard → Project Settings → Database → Connection string

### 3. Run Migrations

```bash
npm run db:migrate
```

> Uses `DIRECT_URL` (bypasses PgBouncer) for schema migrations.

### 4. Seed the Database

```bash
npm run db:seed
```

Seeds 7 Style Worlds → 21 Substyles → 6 sample Outfits.

### 5. Start Dev Server

```bash
npm run dev
```

---

## API Reference

### Health Check

```
GET /api/health
```

---

### Style Worlds

```
GET    /api/style-worlds              List all style worlds
POST   /api/style-worlds              Create a style world
GET    /api/style-worlds/:slug        Fetch by slug (includes substyles)
PATCH  /api/style-worlds/:slug        Update
DELETE /api/style-worlds/:slug        Delete (cascades to substyles + outfits)
```

**POST body:**
```json
{
  "name": "Coastal World",
  "tagline": "Salt in the air, style in the soul",
  "core_energy": "Breezy, luminous, easy",
  "description": "Fashion born from the sea."
}
```

---

### Substyles

```
GET    /api/substyles                             List all substyles
GET    /api/substyles?style_world_id=<uuid>       Filter by style world
POST   /api/substyles                             Create a substyle
GET    /api/substyles/:slug                       Fetch by slug
PATCH  /api/substyles/:slug                       Update
DELETE /api/substyles/:slug                       Delete (cascades to outfits)
```

**POST body:**
```json
{
  "style_world_id": "uuid-here",
  "name": "Quiet Luxury",
  "one_liner": "Wealth whispers, never shouts",
  "visual_identity": "Neutral palette, impeccable tailoring",
  "includes": "Cashmere, wide-leg trousers, leather loafers"
}
```

---

### Outfits

```
GET    /api/outfits           Paginated + filtered list
POST   /api/outfits           Create an outfit
GET    /api/outfits/:id       Fetch single outfit
PATCH  /api/outfits/:id       Update outfit
DELETE /api/outfits/:id       Delete outfit
PATCH  /api/outfits/:id/toggle-tried      Toggle is_tried
PATCH  /api/outfits/:id/toggle-favorite   Toggle is_favorite
```

#### Outfit Filter Query Params

| Param               | Type    | Example                          |
|---------------------|---------|----------------------------------|
| `page`              | number  | `?page=2`                        |
| `limit`             | number  | `?limit=10`                      |
| `search`            | string  | `?search=velvet`                 |
| `style_world_id`    | UUID    | `?style_world_id=uuid`           |
| `substyle_id`       | UUID    | `?substyle_id=uuid`              |
| `overall_vibe`      | string  | `?overall_vibe=romantic`         |
| `aesthetic_keywords`| string  | `?aesthetic_keywords=dark,lace`  |
| `is_tried`          | boolean | `?is_tried=true`                 |
| `is_favorite`       | boolean | `?is_favorite=true`              |
| `fabric`            | string  | `?fabric=velvet`                 |
| `color`             | string  | `?color=burgundy`                |
| `outfit_type`       | string  | `?outfit_type=gown`              |
| `hairstyle_style`   | string  | `?hairstyle_style=bun`           |
| `accessories`       | string  | `?accessories=pearls`            |
| `rating_min`        | number  | `?rating_min=8`                  |
| `rating_max`        | number  | `?rating_max=10`                 |
| `sort_by`           | string  | `?sort_by=rating`                |
| `sort_order`        | string  | `?sort_order=desc`               |

---

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "message": "Outfit fetched successfully",
  "data": { },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 143,
    "totalPages": 8,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

Error responses:

```json
{
  "success": false,
  "message": "Outfit not found",
  "errors": [
    { "field": "outfit_details.rating", "message": "Must be between 0 and 10" }
  ]
}
```

---

## NPM Scripts

| Script               | Description                              |
|----------------------|------------------------------------------|
| `npm run dev`        | Start development server                 |
| `npm run build`      | Production build                         |
| `npm run db:migrate` | Run Prisma migrations (dev)              |
| `npm run db:migrate:deploy` | Apply migrations (production)    |
| `npm run db:seed`    | Seed all Style Worlds, Substyles, Outfits|
| `npm run db:reset`   | Reset DB and re-seed                     |
| `npm run db:studio`  | Open Prisma Studio GUI                   |
| `npm run db:push`    | Push schema without migration            |

---

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **Repository pattern** | Decouples DB queries from business logic — easy to swap or test |
| **Service layer** | Owns business rules (slug uniqueness, FK validation, existence checks) |
| **JSONB for outfit_details** | One deeply structured field instead of 12+ joined tables — flexible and queryable |
| **Zod validation at boundary** | Validates before any DB call — prevents dirty writes |
| **Slug-based routing** | Human-readable URLs (`/api/style-worlds/cinematic-world`) |
| **UUID primary keys** | Safe to expose, no sequential enumeration attacks |
| **Cascading deletes** | Substyle deleted → all its outfits deleted. Keeps referential integrity clean |
| **Prisma singleton** | Prevents connection pool exhaustion during Next.js hot reload |

---

## Future Extensibility

The system is designed so these features can be added without schema breakage:

- 🤖 **AI prompt generation** — outfit_details is already a perfect AI prompt context
- 🖼️ **Image galleries** — add `outfit_images` table with `outfit_id` FK
- 🏷️ **Tags system** — add many-to-many `outfit_tags` junction table
- 🌅 **Seasonal drops** — add `season` enum field to outfits
- 📊 **Analytics** — query existing boolean/rating fields
- 👥 **Collaborative wardrobes** — add `user_id` to outfits + RLS policies
- 🧠 **Recommendation engine** — filter by aesthetic_keywords + color_palette + vibe

---

*Built with precision. Powered by elegance. For the girl who treats her wardrobe like an archive.*
