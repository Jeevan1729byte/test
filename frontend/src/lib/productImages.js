// Centralised Unsplash CDN image URLs — real abaya photography by
// @raheemblacksnows (Abdul Raheem Kannath, Doha, Qatar) — free to use under
// the Unsplash license. https://unsplash.com/license

const crop = (u, w = 1200) =>
  `${u}?auto=format&fit=crop&w=${w}&q=80&ixlib=rb-4.1.0`;

export const IMG = {
  hero:         crop("https://images.unsplash.com/photo-1750190321825-3de59fe523bc", 1400),
  heroAlt:      crop("https://images.unsplash.com/photo-1750190321540-fa2f3aed139a", 1400),

  // Collection card images
  royalNoir:    crop("https://images.unsplash.com/photo-1750190321833-b5e7e1512581", 1200),
  desertGold:   crop("https://images.unsplash.com/photo-1772474587292-08b3e8932acd", 1200),
  pearlMirage:  crop("https://images.unsplash.com/photo-1750190321636-2d9b08f06ed5", 1200),
  midnightBloom:crop("https://images.unsplash.com/photo-1750190321793-973e2433ece6", 1200),

  // Instagram 9-grid
  ig: [
    crop("https://images.unsplash.com/photo-1750190321940-756f06d7c43d", 800),
    crop("https://images.unsplash.com/photo-1750190321711-5378df976bc6", 800),
    crop("https://images.unsplash.com/photo-1750190321749-bebca9d0a6ea", 800),
    crop("https://images.unsplash.com/photo-1750190321700-62c70974ef9f", 800),
    crop("https://images.unsplash.com/photo-1750190321949-129ec7bbf423", 800),
    crop("https://images.unsplash.com/photo-1750190321628-8e998e8b0c36", 800),
    crop("https://images.unsplash.com/photo-1750190321721-422ce93c152d", 800),
    crop("https://images.unsplash.com/photo-1750190321657-b7dd1b77086e", 800),
    crop("https://images.unsplash.com/photo-1750190321847-13fbd6e38f28", 800),
  ],
};

export const COLLECTIONS = [
  {
    id: "royal-noir",
    name: "Royal Noir",
    tagline: "Signature Classic",
    description: "Deep black silk with hand-applied gold thread at the cuffs. The house's signature silhouette.",
    price: 120,
    image: IMG.royalNoir,
    span: "lg:col-span-7",
    height: "h-[560px] md:h-[680px]",
  },
  {
    id: "desert-gold",
    name: "Desert Gold",
    tagline: "Limited Edition",
    description: "A warm sand-washed crêpe with subtle gold embroidery along the bodice.",
    price: 165,
    image: IMG.desertGold,
    span: "lg:col-span-5",
    height: "h-[560px] md:h-[680px]",
  },
  {
    id: "pearl-mirage",
    name: "Pearl Mirage",
    tagline: "Evening Edit",
    description: "Pearl-beaded sleeves, fluid chiffon overlay. Designed for majlis and celebrations.",
    price: 195,
    image: IMG.pearlMirage,
    span: "lg:col-span-5",
    height: "h-[520px] md:h-[640px]",
  },
  {
    id: "midnight-bloom",
    name: "Midnight Bloom",
    tagline: "Couture Occasion",
    description: "Architectural cut with a sculpted waist. Embroidered florals in antique gold.",
    price: 240,
    image: IMG.midnightBloom,
    span: "lg:col-span-7",
    height: "h-[520px] md:h-[640px]",
  },
];
