// ============================================================
// Seed Script — Couple Style Universe
// Run: npx prisma db seed
// ============================================================

import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { generateSlug } from '../src/lib/slug';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const styleWorlds = [
  {
    name: 'Casual World',
    tagline: 'Effortlessly you, every single day',
    core_energy: 'Relaxed, free, comfortable',
    description: 'The universe where comfort meets personal expression.',
    substyles: [
      {
        name: 'Oversized Casual',
        tagline: 'Big silhouettes, soft energy',
        description: 'Relaxed oversized fits in muted tones — wide legs, roomy tees, and effortless proportion play that never tries too hard.',
      },
      {
        name: 'Korean Casual',
        tagline: 'Clean lines, soft palette, effortless cool',
        description: 'Minimalist cuts in pastel tones — slim basics, pleated trousers, and soft knitwear for understated daily polish.',
      },
      {
        name: 'Girl-Next-Door',
        tagline: 'Sweet, simple, naturally pretty',
        description: 'Light florals, soft denim, and easy feminine charm — the kind of prettiness that looks effortless and always feels right.',
      },
    ],
  },
  {
    name: 'Traditional World',
    tagline: 'Where roots meet grace',
    core_energy: 'Cultural pride, timeless elegance, heritage richness',
    description: 'A celebration of cultural fashion rooted in tradition.',
    substyles: [
      {
        name: 'Royal Traditional',
        tagline: 'Dressed like you carry centuries of grace',
        description: 'Rich fabrics, jewel tones, and heavy embroidery — silk sarees, lehengas, and dupattas that command presence without effort.',
      },
      {
        name: 'Soft Ethnic',
        tagline: 'Traditional soul, light modern spirit',
        description: 'Pastel ethnic wear with delicate embroidery — Anarkali suits and printed kurtas with a graceful modern lightness.',
      },
      {
        name: 'Festive Ethnic',
        tagline: 'Every day is a celebration',
        description: 'Vibrant colors and festive embellishments — mirror-work dupattas and embroidered lehengas for moments that deserve dressing up.',
      },
    ],
  },
  {
    name: 'Western World',
    tagline: 'Sharp, confident, timeless',
    core_energy: 'Bold, structured, powerful femininity',
    description: 'Classic Western silhouettes with a modern feminine edge.',
    substyles: [
      {
        name: 'Quiet Luxury',
        tagline: 'Wealth whispers, never shouts',
        description: 'A neutral palette and impeccable tailoring with zero logos — cashmere, wide-leg trousers, and leather loafers that speak through quality alone.',
      },
      {
        name: 'Power Feminine',
        tagline: 'Soft outside, iron inside',
        description: 'Structured blazers and fitted silhouettes that channel quiet authority — blazer sets, midi skirts, and pointed-toe heels.',
      },
      {
        name: 'Coastal Luxe',
        tagline: 'Sun-kissed and effortlessly refined',
        description: 'Breezy whites and blues in linen and silk — the kind of ease that looks like it cost a lot but feels like the sea.',
      },
    ],
  },
  {
    name: 'Streetwear World',
    tagline: 'The streets are your runway',
    core_energy: 'Bold, unapologetic, culturally aware',
    description: 'Where urban culture and fashion rebellion collide.',
    substyles: [
      {
        name: 'Soft Streetwear',
        tagline: 'Street edge, feminine soul',
        description: 'Neutral streetwear softened with feminine touches — jogger sets, oversized hoodies, and chunky sneakers with an unexpected elegance.',
      },
      {
        name: 'Y2K Revival',
        tagline: 'The 2000s called — and we answered beautifully',
        description: 'Low-rise cuts, butterfly prints, and bedazzled detailing — a love letter to early 2000s fashion, worn with self-awareness and joy.',
      },
      {
        name: 'Dark Streetwear',
        tagline: 'Mystery in every stitch',
        description: 'All-black structural layering and moody textures — cargo pants, leather jackets, and combat boots for those who let the darkness speak.',
      },
    ],
  },
  {
    name: 'Vacation World',
    tagline: 'Every outfit a postcard',
    core_energy: 'Breezy, radiant, wanderlust-driven',
    description: 'Fashion made for adventures — from tropical beaches to cobblestone alleys.',
    substyles: [
      {
        name: 'Beach Babe',
        tagline: 'Sandy toes, salty hair, perfect outfit',
        description: 'Bright tropical prints and breezy fabrics — bikinis, sarongs, and crochet cover-ups made for warm water and golden light.',
      },
      {
        name: 'Euro Summer',
        tagline: 'Mediterranean charm, golden hour every hour',
        description: 'Linen sets, maxi dresses, and espadrilles — the visual language of cobblestone alleys and outdoor dinners by the sea.',
      },
      {
        name: 'Mountain Escape',
        tagline: 'Adventure looks this good',
        description: 'Layered warmth in earth tones — practical fleece, cargo trousers, and hiking boots styled with intention rather than function alone.',
      },
    ],
  },
  {
    name: 'Cozy World',
    tagline: 'Wrapped in warmth, dressed in dreams',
    core_energy: 'Soft, warm, nurturing, tender',
    description: 'The universe of soft textures, warm hues, and gentle silhouettes.',
    substyles: [
      {
        name: 'Soft Cozy',
        tagline: 'Cloud-like comfort, dreamy aesthetic',
        description: 'Fuzzy fabrics in blush and cream — fluffy sweaters, soft joggers, and knit vests that feel like being held warmly.',
      },
      {
        name: 'Cottagecore',
        tagline: 'Wildflowers and warm bread and pretty dresses',
        description: 'Floral prints and linen in a pastoral fantasy — midi dresses, Mary Janes, and woven baskets for romanticizing daily life.',
      },
      {
        name: 'Winter Warmth',
        tagline: 'Cold outside, cozy inside, chic everywhere',
        description: 'Rich winter tones in layered knits — turtlenecks, wool coats, and leather boots for facing the cold beautifully.',
      },
    ],
  },
  {
    name: 'Cinematic World',
    tagline: 'You are the protagonist',
    core_energy: 'Dramatic, artistic, deeply intentional',
    description: 'Fashion as storytelling. Each outfit is a scene — deliberate and evocative.',
    substyles: [
      {
        name: 'Dark Romance',
        tagline: 'Gothic poetry in fabric form',
        description: 'Deep reds, blacks, and lace in dramatic silhouettes — velvet, corsetry, and Victorian jewelry for those who find beauty in the dramatic.',
      },
      {
        name: 'Film Noir',
        tagline: 'Mysterious, sharp, unforgettable',
        description: 'Black and ivory in sharp cuts — trench coats, cigarette trousers, and a red lip that owns every room it enters.',
      },
      {
        name: 'Ethereal Dream',
        tagline: 'Like you stepped out of a watercolor painting',
        description: 'Sheer fabrics and soft florals in flowing silhouettes — chiffon, floral crowns, and ballet flats for a delicate, dreamy presence.',
      },
    ],
  },
];

const EMPTY_UPPER = { description: '', fit: '', fabric: '', color: '', design_features: [] };
const EMPTY_LOWER = { description: '', fit: '', fabric: '', color: '', design_features: [] };
const EMPTY_PIECE = { description: '', fit: '', fabric: '', color: '', design_features: [] };
const EMPTY_LAYER = { description: '', fit: '', fabric: '', color: '', design_features: [] };
const EMPTY_FOOT  = { description: '', color: '', design_features: [] };

const sampleOutfits = [
  {
    substyle_name: 'Quiet Luxury',
    title: 'The Boardroom Whisper',
    one_liner: 'Power dressed in silence',
    overall_vibe: 'Understated elegance, quiet authority',
    aesthetic_keywords: ['minimal', 'luxe', 'tailored', 'neutral', 'polished'],
    is_tried: false,
    is_favorite: true,
    notes: 'Perfect for office days when you want to look expensive without trying.',
    outfit_details: {
      upper_wear: {
        description: 'Slim ivory cashmere crewneck sweater softly tucked into the waistband — clean, polished, and quietly expensive without a single visible logo.',
        fit: 'Slim, tucked in',
        fabric: 'Cashmere',
        color: 'Ivory',
        design_features: ['Ribbed hem', 'Clean neckline', 'No logo'],
      },
      lower_wear: {
        description: 'High-waisted wide-leg wool-blend trousers in warm camel with a pressed center crease — effortlessly elongating and quietly authoritative.',
        fit: 'High-waisted, relaxed leg',
        fabric: 'Wool-blend',
        color: 'Camel',
        design_features: ['Pressed crease', 'High waist', 'Side pockets'],
      },
      one_piece: EMPTY_PIECE,
      layering: EMPTY_LAYER,
      footwear: {
        description: 'Chocolate brown pointed-toe loafers with horsebit hardware — the signature accent of old money sophistication.',
        color: 'Chocolate brown',
        design_features: ['Horsebit hardware', 'Pointed toe'],
      },
      accessories: { earrings: 'Small gold hoops', neckwear: 'Thin gold chain', bracelets: '', rings: 'Thin gold band', bags: 'Structured mini leather tote — tan', glasses: '', extras: '' },
      hairstyle: {
        description: 'Sleek center-parted low bun with no flyaways, secured with a minimal gold pin — the hair equivalent of pressing your crease.',
        design_features: ['Center part', 'Slicked back', 'Low bun'],
      },
      makeup: {
        description: 'Skin-like satin foundation with a nude rose lip and clean mascara — the art of looking impeccably polished without looking like you tried.',
        design_features: ['Satin finish', 'Nude lip', 'Mascara-only eyes'],
      },
      color_palette: ['#F5F0E8', '#C8A882', '#6B4226', '#D4B896'],
      styling_mood: 'A woman who arrived early and already owns the room.',
      styling_notes: 'Never over-accessorize. The restraint is the luxury.',
    },
  },
  {
    substyle_name: 'Euro Summer',
    title: 'Golden Hour in Santorini',
    one_liner: 'Linen and light and everything right',
    overall_vibe: 'Mediterranean ease, sun-drenched femininity',
    aesthetic_keywords: ['linen', 'euro-summer', 'coastal', 'relaxed', 'golden'],
    is_tried: true,
    is_favorite: true,
    notes: 'The definitive holiday outfit. Linen only.',
    outfit_details: {
      upper_wear: EMPTY_UPPER,
      lower_wear: EMPTY_LOWER,
      one_piece: {
        description: 'A relaxed terracotta linen midi dress with spaghetti straps and a soft A-line silhouette — effortlessly sun-kissed, feminine, and made entirely for golden hour.',
        fit: 'Relaxed, slightly boxy',
        fabric: 'Linen',
        color: 'Terracotta',
        design_features: ['Spaghetti straps', 'A-line silhouette', 'Raw hem', 'Midi length'],
      },
      layering: EMPTY_LAYER,
      footwear: {
        description: 'Natural tan espadrille wedges with ankle ties — the sound of cobblestone streets and golden hour light distilled into footwear.',
        color: 'Natural tan',
        design_features: ['Ankle tie', 'Woven jute sole', 'Wedge heel'],
      },
      accessories: { earrings: 'Gold hoop with turquoise drop', neckwear: 'Layered gold chains', bracelets: 'Gold bangles, evil eye bracelet', rings: 'Stacked thin gold rings', bags: 'Large raffia tote', glasses: 'Oversized tortoiseshell cat-eye', extras: 'Straw hat with ribbon tie' },
      hairstyle: {
        description: 'Effortless air-dried beach waves loosely pinned with a gold butterfly clip — as if the Mediterranean sea itself styled it.',
        design_features: ['Beach waves', 'Air-dried texture', 'Gold butterfly clip'],
      },
      makeup: {
        description: 'Tinted moisturizer with a sun-kissed radiance, coral peach gloss, bronzed lids, and a dewy luminous finish — the Mediterranean in a beauty look.',
        design_features: ['Dewy finish', 'Coral gloss lip', 'Bronzed lids', 'Sun-kissed glow'],
      },
      color_palette: ['#C1714F', '#F2D5B0', '#2F6B8A', '#E8C98A'],
      styling_mood: 'A woman on a slow, unhurried walk through a sunlit market — radiant, at ease, and entirely herself.',
      styling_notes: 'Terracotta and gold is the Euro summer color story. Linen only, always.',
    },
  },
  {
    substyle_name: 'Korean Casual',
    title: 'Seoul Sunday Afternoon',
    one_liner: 'Clean lines, soft heart',
    overall_vibe: 'Fresh minimalism, effortless Korean aesthetic',
    aesthetic_keywords: ['korean', 'minimal', 'clean', 'soft', 'casual', 'neutral'],
    is_tried: true,
    is_favorite: true,
    notes: 'Goes with everything. Always looks put-together.',
    outfit_details: {
      upper_wear: {
        description: 'Relaxed white cotton poplin button-down worn slightly oversized with a subtle open collar — the clean, minimal anchor of this entire soft-neutral look.',
        fit: 'Relaxed, slightly oversized',
        fabric: 'Cotton poplin',
        color: 'White',
        design_features: ['Open collar', 'Slight front tuck', 'Minimal buttons'],
      },
      lower_wear: {
        description: 'High-waisted flowing crepe wide-leg trousers in oatmeal with a clean front pleat — the understated foundation of effortless Korean minimalism.',
        fit: 'High-waisted, flowing',
        fabric: 'Crepe',
        color: 'Oatmeal',
        design_features: ['Front pleat', 'High waist', 'Relaxed leg'],
      },
      one_piece: EMPTY_PIECE,
      layering: EMPTY_LAYER,
      footwear: {
        description: 'Ivory square-toe slip-on loafers — quiet, minimal, and perfectly calibrated to the soft oatmeal and white palette.',
        color: 'Ivory',
        design_features: ['Square toe', 'Slip-on', 'Minimalist profile'],
      },
      accessories: { earrings: 'Small pearl studs', neckwear: '', bracelets: '', rings: '', bags: 'Mini structured shoulder bag — beige', glasses: '', extras: '' },
      hairstyle: {
        description: 'Soft, low-volume half-up secured with a thin claw clip — polished without a single wasted movement.',
        design_features: ['Half-up style', 'Thin claw clip', 'Soft volume'],
      },
      makeup: {
        description: 'Glass skin base with sheer pink lip and a clean no-makeup makeup finish — the Korean beauty ideal of looking like your effortlessly best self.',
        design_features: ['Glass skin', 'Sheer pink lip', 'No-makeup makeup'],
      },
      color_palette: ['#FAFAF7', '#E8E0D4', '#C4B8A8', '#8A7D70'],
      styling_mood: 'Like you woke up already dressed perfectly — calm, softly composed, and quietly confident.',
      styling_notes: 'The look lives in the proportion. Tucked front, flowing back.',
    },
  },
];



async function main() {
  console.log('🌸 Seeding the wardrobe archive...\n');

  // Clear existing data
  await prisma.outfitImage.deleteMany();
  await prisma.outfit.deleteMany();
  await prisma.substyle.deleteMany();
  await prisma.styleWorld.deleteMany();
  console.log('🧹 Cleared existing data\n');

  const substyleMap = new Map<string, string>();

  for (const worldData of styleWorlds) {
    const { substyles, ...worldFields } = worldData;
    const world = await prisma.styleWorld.create({
      data: { ...worldFields, slug: generateSlug(worldFields.name) },
    });
    console.log(`🌍 World: ${world.name}`);

    for (const substyleData of substyles) {
      const substyle = await prisma.substyle.create({
        data: { ...substyleData, slug: generateSlug(substyleData.name), style_world_id: world.id },
      });
      substyleMap.set(substyle.name, substyle.id);
      console.log(`   └── Substyle: ${substyle.name}`);
    }
  }

  console.log('\n🎀 Seeding sample outfits...\n');

  for (const outfitData of sampleOutfits) {
    const { substyle_name, ...outfitFields } = outfitData;
    const substyleId = substyleMap.get(substyle_name);
    if (!substyleId) { console.warn(`⚠️  Substyle "${substyle_name}" not found`); continue; }
    const outfit = await prisma.outfit.create({
      data: { ...outfitFields, substyle_id: substyleId, outfit_details: outfitFields.outfit_details as object },
    });
    console.log(`✅ Outfit: ${outfit.title}`);
  }

  console.log('\n✨ Archive seeded successfully.\n');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
