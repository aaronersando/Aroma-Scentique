export interface Product {
  id: string;
  name: string;
  category: "MEN" | "WOMEN";
  description: string;
  image: string;
  featured?: boolean;
  bestSeller?: boolean;
}

export const products: Product[] = [
  // MEN'S FRAGRANCES
  {
    id: "invictus",
    name: "Invictus",
    category: "MEN",
    description:
      "A bold and energetic fragrance blending marine notes, grapefruit, and ambergris. Symbolizes victory, strength, and irresistible masculinity.",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    id: "polo-sport",
    name: "Polo Sport",
    category: "MEN",
    description:
      "Fresh and invigorating with mint, aldehydes, and seaweed. Perfect for active men who crave a clean, sporty scent.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    id: "aqua-bulgari",
    name: "Aqua Bulgari",
    category: "MEN",
    description:
      "A refined aquatic fragrance with mandarin, petitgrain, and mineral amber. Evokes the freshness of the ocean with elegant depth.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
  },
  {
    id: "lacoste-red",
    name: "Lacoste Red",
    category: "MEN",
    description:
      "Vibrant and confident, mixing green apple, cedar, and patchouli. Ideal for youthful energy and sporty charm.",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=800&fit=crop",
  },
  {
    id: "eros",
    name: "Eros",
    category: "MEN",
    description:
      "Seductive and passionate, combining mint, green apple, and tonka bean. A fragrance that celebrates desire and strength.",
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=800&fit=crop",
  },
  {
    id: "acqua-di-gio",
    name: "Acqua Di Gio",
    category: "MEN",
    description:
      "A timeless classic featuring marine accords, jasmine, and cedarwood. Fresh, elegant, and effortlessly masculine.",
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&h=800&fit=crop",
  },
  {
    id: "bulgari-extreme",
    name: "Bulgari Extreme",
    category: "MEN",
    description:
      "Sophisticated citrus and woods with notes of grapefruit, cardamom, and musk. A refined scent for the modern gentleman.",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=800&fit=crop",
    featured: true,
    bestSeller: true,
  },
  {
    id: "lacoste-black",
    name: "Lacoste Black",
    category: "MEN",
    description:
      "Smooth and mysterious, blending lavender, patchouli, and sandalwood. Perfect for evening wear and confident style.",
    image:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&h=800&fit=crop",
    featured: true,
    bestSeller: true,
  },
  {
    id: "ck-one",
    name: "CK One",
    category: "MEN",
    description:
      "A clean, unisex fragrance with green tea, papaya, and musk. Simple, fresh, and universally appealing.",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&h=800&fit=crop",
  },
  {
    id: "sauvage",
    name: "Sauvage",
    category: "MEN",
    description:
      "Raw yet refined — featuring bergamot, pepper, and ambroxan. A statement of modern masculinity and wilderness.",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=800&fit=crop",
  },

  // WOMEN'S FRAGRANCES
  {
    id: "ysl-libre",
    name: "YSL Libre",
    category: "WOMEN",
    description:
      "A bold floral fusion of lavender, orange blossom, and vanilla. Feminine freedom captured in a bottle.",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    id: "bombshell",
    name: "Bombshell",
    category: "WOMEN",
    description:
      "Playful and glamorous with passionfruit, peony, and vanilla orchid. A confident scent for the modern woman.",
    image:
      "https://images.unsplash.com/photo-1592496001020-d31bd830651f?w=800&h=800&fit=crop",
  },
  {
    id: "miss-dior",
    name: "Miss Dior",
    category: "WOMEN",
    description:
      "Romantic and elegant, featuring rose, bergamot, and patchouli. A timeless symbol of femininity and grace.",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&h=800&fit=crop",
  },
  {
    id: "pure-seduction",
    name: "Pure Seduction",
    category: "WOMEN",
    description:
      "Juicy plum and freesia blend for a sweet, seductive scent. Perfect for everyday allure.",
    image:
      "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?w=800&h=800&fit=crop",
  },
  {
    id: "bright-crystal",
    name: "Bright Crystal",
    category: "WOMEN",
    description:
      "Delicate and luminous with pomegranate, peony, and musk. A radiant fragrance that exudes femininity and freshness.",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=800&fit=crop",
  },
  {
    id: "incanto-shine",
    name: "Incanto Shine",
    category: "WOMEN",
    description:
      "A fruity-floral delight with pineapple, passionfruit, and peach. Cheerful and enchanting, like sunshine in a bottle.",
    image:
      "https://images.unsplash.com/photo-1587556930307-caa4f86e6306?w=800&h=800&fit=crop",
  },
  {
    id: "cucumber-melon",
    name: "Cucumber Melon",
    category: "WOMEN",
    description:
      "Cool cucumber and sweet melon create a refreshing, light scent. Crisp and uplifting — perfect for daily wear.",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    id: "rush",
    name: "Rush",
    category: "WOMEN",
    description:
      "A daring, sensual blend of peach, gardenia, and vanilla. Designed for confident, unforgettable women.",
    image:
      "https://images.unsplash.com/photo-1585120040688-168615d548df?w=800&h=800&fit=crop",
  },
  {
    id: "meow",
    name: "Meow",
    category: "WOMEN",
    description:
      "Playful and sweet with pear, jasmine, and creamy vanilla. A fun, flirty scent full of charm.",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068c4ea?w=800&h=800&fit=crop",
  },
  {
    id: "sweet-like-candy",
    name: "Sweet Like Candy",
    category: "WOMEN",
    description:
      "Sugary berries and marshmallow blend into a youthful, irresistible scent. Perfect for playful, romantic moods.",
    image:
      "https://images.unsplash.com/photo-1567861911437-538298e4232c?w=800&h=800&fit=crop",
  },
  {
    id: "amethyst",
    name: "Amethyst",
    category: "WOMEN",
    description:
      "Elegant and mysterious, featuring blackcurrant, rose, and musk. A luxurious fragrance with depth and sophistication.",
    image:
      "https://images.unsplash.com/photo-1587556930307-caa4f86e6306?w=800&h=800&fit=crop",
  },
  {
    id: "vanilla-lace",
    name: "Vanilla Lace",
    category: "WOMEN",
    description:
      "Warm and sensual vanilla with soft musk undertones. Cozy, comforting, and endlessly alluring.",
    image:
      "https://images.unsplash.com/photo-1595535375613-a94f3fb6dc4e?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    id: "cloud",
    name: "Cloud",
    category: "WOMEN",
    description:
      "Dreamy and soft, with lavender, pear, coconut, and praline. A comforting yet sophisticated scent that feels like floating.",
    image:
      "https://images.unsplash.com/photo-1619994121345-b8e0b5040e8f?w=800&h=800&fit=crop",
    bestSeller: true,
  },
  {
    id: "black-opium",
    name: "Black Opium",
    category: "WOMEN",
    description:
      "Addictive and bold — coffee, vanilla, and white flowers merge for ultimate sensuality.",
    image:
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800&h=800&fit=crop",
    featured: true,
    bestSeller: true,
  },
  {
    id: "baccarat-rouge",
    name: "Baccarat Rouge",
    category: "WOMEN",
    description:
      "Exquisite and luminous, featuring saffron, amberwood, and jasmine. A luxurious blend that leaves a lasting, unforgettable trail.",
    image:
      "https://images.unsplash.com/photo-1616628188599-3b3a2e6c9406?w=800&h=800&fit=crop",
  },
  {
    id: "eclat",
    name: "Éclat",
    category: "WOMEN",
    description:
      "Elegant and airy, with lilac, peach blossom, and cedar. A graceful scent that radiates sophistication and joy.",
    image:
      "https://images.unsplash.com/photo-1619994121327-e4ac8d36d80b?w=800&h=800&fit=crop",
  },
];
