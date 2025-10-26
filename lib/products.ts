export interface Product {
  id: string;
  name: string;
  category: "MEN" | "WOMEN";
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  // MEN'S FRAGRANCES
  {
    id: "invictus",
    name: "Invictus",
    category: "MEN",
    description:
      "A bold and energetic fragrance blending marine notes, grapefruit, and ambergris. Symbolizes victory, strength, and irresistible masculinity.",
    longDescription:
      "Experience the essence of victory with Invictus. This bold and dynamic fragrance opens with vibrant grapefruit and marine accord, creating an invigorating freshness that commands attention.\n\nThe heart reveals aromatic bay leaf and jasmine, adding depth and sophistication. As it settles, the base of guaiac wood, patchouli, and ambergris creates a warm, masculine foundation that lasts throughout the day.\n\nPerfect for the modern man who embraces challenges and celebrates triumphs. Invictus is your signature of strength and confidence.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/Invictus_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/Invictus_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/Invictus_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Invictus.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Invictus.jpg",
    ],
    featured: true,
  },
  {
    id: "polo-sport",
    name: "Polo Sport",
    category: "MEN",
    description:
      "Fresh and invigorating with mint, aldehydes, and seaweed. Perfect for active men who crave a clean, sporty scent.",
    longDescription:
      "Polo Sport embodies the spirit of athleticism and adventure. This refreshing fragrance opens with crisp mint and aldehydes, delivering an instant burst of cool, clean energy that awakens the senses.\n\nThe heart features marine notes and seaweed, evoking the freshness of ocean breezes. The base combines cedarwood and amber, creating a warm, subtle finish that grounds the fragrance.\n\nIdeal for the active man who values freshness and vitality. Polo Sport is your perfect companion for daily wear, gym sessions, and outdoor activities.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/PoloSport_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/PoloSport_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/PoloSport_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Polo Sport.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Polo Sport.jpg",
    ],
    featured: true,
  },
  {
    id: "aqua-bvlgari",
    name: "Aqua Bvlgari",
    category: "MEN",
    description:
      "A refined aquatic fragrance with mandarin, petitgrain, and mineral amber. Evokes the freshness of the ocean with elegant depth.",
    longDescription:
      "Aqua Bvlgari captures the essence of Mediterranean serenity. This sophisticated aquatic fragrance opens with bright mandarin and neroli, creating a citrus burst that feels both luxurious and refreshing.\n\nThe heart features petitgrain and rosemary, adding an aromatic, herbal quality that evokes coastal gardens. The base of mineral amber and white tea provides a clean, elegant finish that lingers subtly.\n\nPerfect for the refined gentleman who appreciates understated elegance. Aqua Bvlgari is your signature for sophisticated casual wear and warm-weather occasions.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/AquaBvlgari_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/AquaBvlgari_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/AquaBvlgari_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/aqua bvlgari.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Aqua Bvlgari.jpg",
    ],
  },
  {
    id: "lacoste-red",
    name: "Lacoste Red",
    category: "MEN",
    description:
      "Vibrant and confident, mixing green apple, cedar, and patchouli. Ideal for youthful energy and sporty charm.",
    longDescription:
      "Lacoste Red radiates youthful confidence and vitality. This energetic fragrance opens with crisp green apple and fresh ginger, creating an invigorating burst that feels both playful and bold.\n\nThe heart features cedarwood and black pepper, adding a spicy, woody dimension that brings depth and character. The base of patchouli and vetiver creates a modern, masculine finish that's perfect for day-to-day wear.\n\nDesigned for the young, active man who lives life to the fullest. Lacoste Red is your go-to fragrance for casual confidence and sporty sophistication.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteRed_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteRed_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteRed_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Lacoste Red.jpg",
    ],
    newArrival: true,
  },
  {
    id: "eros",
    name: "Eros",
    category: "MEN",
    description:
      "Seductive and passionate, combining mint, green apple, and tonka bean. A fragrance that celebrates desire and strength.",
    longDescription:
      "Eros embodies passion, love, and desire. This seductive fragrance opens with fresh mint, Italian lemon, and green apple, creating a bright, invigorating introduction that captivates immediately.\n\nThe heart features tonka bean, geranium, and ambroxan, adding a warm, aromatic complexity that builds intrigue. The base of vanilla, vetiver, and cedarwood creates a sweet, woody finish that's utterly addictive.\n\nInspired by Greek mythology, Eros is for the man who isn't afraid to express his passionate side. This fragrance celebrates strength, masculinity, and the power of attraction.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/Eros_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/Eros_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/Eros_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Eros.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Eros.jpg",
    ],
  },
  {
    id: "acqua-di-gio",
    name: "Acqua Di Gio",
    category: "MEN",
    description:
      "A timeless classic featuring marine accords, jasmine, and cedarwood. Fresh, elegant, and effortlessly masculine.",
    longDescription:
      "Acqua Di Gio is the epitome of Mediterranean freshness. This iconic fragrance opens with calabrian bergamot, neroli, and green tangerine, creating a bright citrus introduction that feels like sunshine on water.\n\nThe heart features jasmine, rosemary, and persimmon, adding a romantic yet masculine floral-fruity character. The base of cedarwood, white musk, and patchouli provides a clean, lasting finish that remains timeless.\n\nPerfect for the man who appreciates classic elegance with modern appeal. Acqua Di Gio is your signature for effortless sophistication, from casual days to evening occasions.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/AcquaDiGio_2.png",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/AcquaDiGio_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/AcquaDiGio_2.png",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/adg.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Adg.jpg",
    ],
  },
  {
    id: "bvlgari-extreme",
    name: "Bvlgari Extreme",
    category: "MEN",
    description:
      "Sophisticated citrus and woods with notes of grapefruit, cardamom, and musk. A refined scent for the modern gentleman.",
    longDescription:
      "Bvlgari Extreme epitomizes refined masculinity. This sophisticated fragrance opens with vibrant grapefruit and neroli, creating a fresh, citrusy introduction that feels luxurious and invigorating.\n\nThe heart features green tea, cardamom, and guaiac wood, adding an exotic, spicy dimension that brings complexity and character. The base of amber and musk creates a warm, sensual finish that's perfectly balanced.\n\nCrafted for the discerning gentleman who values quality and sophistication. Bvlgari Extreme is your signature for business meetings, formal events, and moments when you want to make a lasting impression.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/BvlgariExtreme_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/BvlgariExtreme_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/BvlgariExtreme_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Bvlgari Extreme.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Bvlgari Extreme.jpg",
    ],
    featured: true,
    bestSeller: true,
  },
  {
    id: "lacoste-black",
    name: "Lacoste Black",
    category: "MEN",
    description:
      "Smooth and mysterious, blending lavender, patchouli, and sandalwood. Perfect for evening wear and confident style.",
    longDescription:
      "Lacoste Black exudes mysterious sophistication. This elegant fragrance opens with watermelon, black pepper, and basil, creating a unique, unexpected introduction that intrigues from the first moment.\n\nThe heart features lavender and patchouli, adding an aromatic, slightly earthy quality that feels both modern and classic. The base of sandalwood, cedarwood, and dark chocolate creates a smooth, sensual finish that's perfect for evening.\n\nDesigned for the confident man who embraces his darker, more mysterious side. Lacoste Black is your signature for night outs, dates, and moments when you want to leave a memorable impression.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteBlack_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteBlack_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteBlack_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Lacoste Black.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Lacoste Black.jpg",
    ],
    featured: true,
    bestSeller: true,
  },
  {
    id: "ck-one",
    name: "CK One",
    category: "MEN",
    description:
      "A clean, unisex fragrance with green tea, papaya, and musk. Simple, fresh, and universally appealing.",
    longDescription:
      "CK One revolutionized the fragrance world with its clean, unisex appeal. This refreshing fragrance opens with bergamot, lemon, and papaya, creating a bright, fruity-citrus introduction that feels effortlessly fresh.\n\nThe heart features green tea, jasmine, and violet, adding a clean, slightly floral character that's universally appealing. The base of musk, amber, and cedarwood provides a soft, comforting finish that works beautifully on anyone.\n\nPerfect for those who appreciate simplicity and versatility. CK One is your signature for casual confidence, everyday wear, and moments when you want a fresh, clean presence.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/CKOne_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/CKOne_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/CKOne_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/CK One.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/CK One.jpg",
    ],
  },
  {
    id: "sauvage",
    name: "Sauvage",
    category: "MEN",
    description:
      "Raw yet refined — featuring bergamot, pepper, and ambroxan. A statement of modern masculinity and wilderness.",
    longDescription:
      "Sauvage embodies raw, untamed masculinity. This powerful fragrance opens with an explosion of fresh Calabrian bergamot, immediately awakening the senses with its bright, citrusy energy that feels wild and free.\n\nThe heart features Sichuan pepper and lavender, adding a spicy, aromatic twist that feels both modern and primal. The base of ambroxan, cedar, and labdanum creates a warm, woody trail that radiates strength and magnetism.\n\nSauvage is for the man who lives by his own rules — authentic, bold, and impossibly charismatic. This fragrance is your signature for making a powerful statement wherever you go.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/Sauvage_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/Sauvage_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men_s/Sauvage_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Men Label AS/Sauvage.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Mens Without BG/Sauvage.jpg",
    ],
  },

  // WOMEN'S FRAGRANCES
  {
    id: "ysl-libre",
    name: "YSL Libre",
    category: "WOMEN",
    description:
      "A bold floral fusion of lavender, orange blossom, and vanilla. Feminine freedom captured in a bottle.",
    longDescription:
      "YSL Libre celebrates freedom and femininity. This bold fragrance opens with lavender essence, mandarin, and blackcurrant, creating a fresh, sparkling introduction that feels liberating and modern.\n\nThe heart features orange blossom and jasmine, adding a rich, white floral character that's both sensual and sophisticated. The base of vanilla, musk, and cedarwood creates a warm, addictive finish that lingers beautifully.\n\nLibre is for the woman who lives by her own rules — strong, independent, and unapologetically feminine. This fragrance is your signature for expressing your authentic self with confidence.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/YSLLibre_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/YSLLibre_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/YSLLibre_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/YSL Libre.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/YSL Libre.jpg",
    ],
    featured: true,
  },
  {
    id: "bombshell",
    name: "Bombshell",
    category: "WOMEN",
    description:
      "Playful and glamorous with passionfruit, peony, and vanilla orchid. A confident scent for the modern woman.",
    longDescription:
      "Bombshell radiates glamorous confidence. This playful fragrance opens with passionfruit, grapefruit, and pineapple, creating a bright, fruity introduction that feels fun and sophisticated at once.\n\nThe heart features peony, red berry, and jasmine, adding a romantic, floral dimension that's utterly captivating. The base of vanilla orchid, musk, and woody notes creates a warm, sensual finish that's perfect for day or night.\n\nBombshell is for the modern woman who embraces her femininity with confidence and style. This fragrance is your signature for making a memorable impression wherever you go.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/Bombshell_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Bombshell_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Bombshell_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Bombshell.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Bombshell.jpg",
    ],
  },
  {
    id: "miss-dior",
    name: "Miss Dior",
    category: "WOMEN",
    description:
      "Romantic and elegant, featuring rose, bergamot, and patchouli. A timeless symbol of femininity and grace.",
    longDescription:
      "Miss Dior embodies timeless elegance and romance. This sophisticated fragrance opens with blood orange and pink pepper, creating a bright, slightly spicy introduction that feels fresh and modern.\n\nThe heart features Grasse rose, jasmine, and peony, creating a magnificent floral bouquet that's both romantic and refined. The base of patchouli and musk adds depth and lasting power, creating a beautiful trail.\n\nMiss Dior is for the woman who appreciates classic beauty and timeless sophistication. This fragrance is your signature for elegant occasions, romantic moments, and everyday grace.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/MissDior_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/MissDior_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/MissDior_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Miss Dior.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Miss Dior.jpg",
    ],
  },
  {
    id: "pure-seduction",
    name: "Pure Seduction",
    category: "WOMEN",
    description:
      "Juicy plum and freesia blend for a sweet, seductive scent. Perfect for everyday allure.",
    longDescription:
      "Pure Seduction is irresistibly sweet and flirty. This captivating fragrance opens with juicy plum and red apple, creating a fruity introduction that's fresh, playful, and instantly appealing.\n\nThe heart features freesia, cassia, and jasmine, adding a delicate floral dimension that brings romance and femininity. The base of vanilla and musk creates a soft, sweet finish that's absolutely addictive.\n\nPure Seduction is for the woman who loves to feel flirty and feminine. This fragrance is your signature for casual dates, everyday confidence, and moments when you want to feel irresistibly attractive.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/PureSeduction_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/PureSeduction_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/PureSeduction_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Pure Seduction.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Pure Seduction.jpg",
    ],
  },
  {
    id: "bright-crystal",
    name: "Bright Crystal",
    category: "WOMEN",
    description:
      "Delicate and luminous with pomegranate, peony, and musk. A radiant fragrance that exudes femininity and freshness.",
    longDescription:
      "Bright Crystal shines with feminine radiance. This luminous fragrance opens with pomegranate and yuzu, creating a bright, fruity introduction that sparkles with freshness and joy.\n\nThe heart features peony, magnolia, and lotus flower, creating a delicate floral bouquet that's both elegant and uplifting. The base of musk, mahogany, and amber adds warmth and subtle sensuality.\n\nBright Crystal is for the woman who radiates natural beauty and grace. This fragrance is your signature for daytime elegance, spring and summer wear, and moments when you want to feel fresh and radiant.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/BrightCrystal_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/BrightCrystal_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/BrightCrystal_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Bright Crystal.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Bright Crystal.jpg",
    ],
  },
  {
    id: "incanto-shine",
    name: "Incanto Shine",
    category: "WOMEN",
    description:
      "A fruity-floral delight with pineapple, passionfruit, and peach. Cheerful and enchanting, like sunshine in a bottle.",
    longDescription:
      "Incanto Shine captures pure joy and happiness. This cheerful fragrance opens with pineapple, passionfruit, and pear, creating a tropical fruity introduction that feels like sunshine and summer days.\n\nThe heart features peach, peony, and freesia, adding a soft floral dimension that brings romance and sweetness. The base of musk and cedarwood provides a gentle, lasting finish.\n\nIncanto Shine is for the woman who loves to embrace life's happy moments. This fragrance is your signature for sunny days, beach vacations, and anytime you want to feel cheerful and carefree.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/IncantoShine_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/IncantoShine_1.jpeg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/IncantoShine_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Incanto Shine.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Incanto Shine.jpg",
    ],
  },
  {
    id: "cucumber-melon",
    name: "Cucumber Melon",
    category: "WOMEN",
    description:
      "Cool cucumber and sweet melon create a refreshing, light scent. Crisp and uplifting — perfect for daily wear.",
    longDescription:
      "Cucumber Melon is the essence of fresh simplicity. This refreshing fragrance opens with crisp cucumber and juicy cantaloupe melon, creating a clean, watery introduction that feels incredibly fresh and light.\n\nThe heart features green notes and violet, adding a subtle floral-green dimension that keeps the scent natural and airy. The base of musk and sandalwood provides a soft, clean finish.\n\nCucumber Melon is for the woman who appreciates clean, uncomplicated freshness. This fragrance is your signature for everyday wear, gym sessions, and moments when you want to feel refreshed and revitalized.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/CucumberMelon_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/CucumberMelon_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/CucumberMelon_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Cucumber Melon.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Cucumber Melon.jpg",
    ],
    featured: true,
  },
  {
    id: "rush",
    name: "Rush",
    category: "WOMEN",
    description:
      "A daring, sensual blend of peach, gardenia, and vanilla. Designed for confident, unforgettable women.",
    longDescription:
      "Rush embodies bold sensuality. This daring fragrance opens with peach, freesia, and vetiver, creating a unique fruit-woody introduction that immediately captivates and intrigues.\n\nThe heart features gardenia, jasmine, and coriander, adding a rich, exotic floral character that's both sophisticated and sensual. The base of vanilla, patchouli, and incense creates a warm, oriental finish that's absolutely memorable.\n\nRush is for the confident woman who isn't afraid to stand out. This fragrance is your signature for evening events, special occasions, and moments when you want to make a powerful, unforgettable impression.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/Rush_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Rush_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Rush_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Rush.jpg",
    ],
    newArrival: true,
  },
  {
    id: "meow",
    name: "Meow",
    category: "WOMEN",
    description:
      "Playful and sweet with pear, jasmine, and creamy vanilla. A fun, flirty scent full of charm.",
    longDescription:
      "Meow is playfully irresistible. This charming fragrance opens with honeydew melon, pear, and tangerine, creating a sweet, fruity introduction that's fun, youthful, and utterly delightful.\n\nThe heart features jasmine and lily of the valley, adding a delicate floral sweetness that's both romantic and fresh. The base of vanilla, musk, and sandalwood creates a creamy, comforting finish.\n\nMeow is for the woman who embraces her playful side. This fragrance is your signature for casual fun, girls' nights out, and moments when you want to feel flirty and carefree.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/Meow_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Meow_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Meow_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Meow.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Meow.jpg",
    ],
  },
  {
    id: "sweet-like-candy",
    name: "Sweet Like Candy",
    category: "WOMEN",
    description:
      "Sugary berries and marshmallow blend into a youthful, irresistible scent. Perfect for playful, romantic moods.",
    longDescription:
      "Sweet Like Candy is pure sugary delight. This youthful fragrance opens with blackcurrant, bergamot, and pear, creating a bright, fruity introduction that's sweet, fun, and incredibly appealing.\n\nThe heart features marshmallow, jasmine, and frangipani, adding a unique sweet-floral character that feels both playful and romantic. The base of vanilla, cashmere wood, and musk creates a soft, comforting finish.\n\nSweet Like Candy is for the young woman who loves sweet, gourmand scents. This fragrance is your signature for casual dates, fun outings, and moments when you want to feel sweet and irresistible.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/SweetLikeCandy_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/SweetLikeCandy_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/SweetLikeCandy_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Sweet Like Candy.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Sweet Like Candy.jpg",
    ],
  },
  {
    id: "amethyst",
    name: "Amethyst",
    category: "WOMEN",
    description:
      "Elegant and mysterious, featuring blackcurrant, rose, and musk. A luxurious fragrance with depth and sophistication.",
    longDescription:
      "Amethyst radiates mysterious elegance. This luxurious fragrance opens with blackcurrant, pink pepper, and Bulgarian rose, creating a rich, fruity-floral introduction that feels sophisticated and intriguing.\n\nThe heart features iris, peony, and geranium, adding layers of refined floral beauty that create depth and complexity. The base of musk, heliotrope, and woody notes provides a warm, sensual finish that lingers beautifully.\n\nAmethyst is for the woman who appreciates luxury and sophistication. This fragrance is your signature for elegant evenings, special occasions, and moments when you want to feel truly refined and mysterious.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/Amethyst_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Amethyst_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Amethyst_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Amethyst.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Amethyst.jpg",
    ],
  },
  {
    id: "vanilla-lace",
    name: "Vanilla Lace",
    category: "WOMEN",
    description:
      "Warm and sensual vanilla with soft musk undertones. Cozy, comforting, and endlessly alluring.",
    longDescription:
      "Vanilla Lace is pure comfort and sensuality. This warm fragrance opens with whipped vanilla and almond, creating a sweet, gourmand introduction that feels like a warm embrace on a cold day.\n\nThe heart features sandalwood and tonka bean, adding depth and richness to the vanilla sweetness. The base of musk and amber creates a soft, sensual finish that's incredibly cozy and alluring.\n\nVanilla Lace is for the woman who loves warm, comforting scents. This fragrance is your signature for cozy evenings, intimate moments, and anytime you want to feel wrapped in comforting warmth.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/VanillaLace_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/VanillaLace_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/VanillaLace_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Vanilla Lace.jpg",
    ],
    featured: true,
    newArrival: true,
  },
  {
    id: "cloud",
    name: "Cloud",
    category: "WOMEN",
    description:
      "Dreamy and soft, with lavender, pear, coconut, and praline. A comforting yet sophisticated scent that feels like floating.",
    longDescription:
      "Cloud is a dreamy, ethereal experience. This comforting fragrance opens with lavender blossom, juicy pear, and bergamot, creating a fresh, slightly sweet introduction that feels light and airy like clouds.\n\nThe heart features coconut, praline, and vanilla orchid, adding a gourmand sweetness that's both comforting and sophisticated. The base of creamy musk and woody notes provides a soft, lasting embrace.\n\nCloud is for the woman who loves soft, comforting scents with a touch of sweetness. This fragrance is your signature for everyday comfort, cozy moments, and feeling like you're floating on air.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/Cloud_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Cloud_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Cloud_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Cloud.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Cloud.jpg",
    ],
    bestSeller: true,
  },
  {
    id: "black-opium",
    name: "Black Opium",
    category: "WOMEN",
    description:
      "Addictive and bold — coffee, vanilla, and white flowers merge for ultimate sensuality.",
    longDescription:
      "Black Opium is dangerously addictive. This bold fragrance opens with black coffee, pink pepper, and orange blossom, creating a unique coffee-floral introduction that immediately intrigues and captivates.\n\nThe heart features jasmine, orange blossom, and licorice, adding a rich, white floral dimension with an unexpected twist. The base of vanilla, patchouli, and cedarwood creates a warm, seductive finish that's utterly intoxicating.\n\nBlack Opium is for the bold woman who embraces her dark, mysterious side. This fragrance is your signature for night outs, parties, and moments when you want to be absolutely unforgettable.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/BlackOpium_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/BlackOpium_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/BlackOpium_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Black Opium.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Black Opium.jpg",
    ],
    featured: true,
    bestSeller: true,
  },
  {
    id: "baccarat-rouge",
    name: "Baccarat Rouge",
    category: "WOMEN",
    description:
      "Exquisite and luminous, featuring saffron, amberwood, and jasmine. A luxurious blend that leaves a lasting, unforgettable trail.",
    longDescription:
      "Baccarat Rouge is the epitome of luxury. This exquisite fragrance opens with saffron and jasmine, creating a unique spicy-floral introduction that feels instantly sophisticated and rare.\n\nThe heart features amberwood and ambergris, adding a rich, woody-amber dimension that brings warmth and depth. The base of cedarwood and fir resin creates a luminous, lasting trail that's absolutely unforgettable.\n\nBaccarat Rouge is for the woman who appreciates true luxury and exclusivity. This fragrance is your signature for making a statement, attending prestigious events, and leaving a trail of admiration wherever you go.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/BaccaratRouge_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/BaccaratRouge_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/BaccaratRouge_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Baccarat.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Baccarat Rouge.jpg",
    ],
  },
  {
    id: "eclat",
    name: "Éclat",
    category: "WOMEN",
    description:
      "Elegant and airy, with lilac, peach blossom, and cedar. A graceful scent that radiates sophistication and joy.",
    longDescription:
      "Éclat captures pure elegance and joy. This graceful fragrance opens with lemon, lilac, and peach blossom, creating a bright, fresh introduction that feels sophisticated yet approachable.\n\nThe heart features magnolia, red peony, and jasmine, adding a delicate floral bouquet that radiates femininity and grace. The base of cedar, amber, and musk provides a soft, elegant finish.\n\nÉclat is for the woman who radiates natural grace and sophistication. This fragrance is your signature for elegant daytime wear, professional settings, and moments when you want to shine with understated beauty.",
    image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/Eclat_2.jpg",
    images: [
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Eclat_1.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Women_s/Eclat_2.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Woemn Label AS/Eclat.jpg",
      "/Pic-20251026T075228Z-1-001/Pic/Womens Without BG/Eclat.jpg",
    ],
  },
];
