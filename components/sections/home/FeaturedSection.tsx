"use client";
import React from "react";
import FeaturedPerfumeCard from "@/components/cards/FeaturedPerfumeCard";
import { colors } from "@/lib/colors";

const FeaturedSection = () => {
  const fragrances = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop",
      category: "MEN",
      title: "Invictus Inspired",
      description:
        "Inspired by Paco Rabanne Invictus — bold and energetic with marine notes, grapefruit, and ambergris. Symbolizes victory and strength.",
      featured: true,
      bestSeller: true,
      href: "/products/invictus-inspired",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=800&fit=crop",
      category: "MEN",
      title: "Acqua Di Gio Inspired",
      description:
        "Inspired by Giorgio Armani Acqua Di Gio — fresh marine accords with jasmine and cedarwood for timeless masculine elegance.",
      featured: true,
      href: "/products/acqua-di-gio-inspired",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&h=800&fit=crop",
      category: "WOMEN",
      title: "YSL Libre Inspired",
      description:
        "Inspired by Yves Saint Laurent Libre — a bold floral blend of lavender, orange blossom, and vanilla that radiates feminine freedom.",
      featured: true,
      href: "/products/ysl-libre-inspired",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1616628188599-3b3a2e6c9406?w=800&h=800&fit=crop",
      category: "WOMEN",
      title: "Baccarat Rouge Inspired",
      description:
        "Inspired by Maison Francis Kurkdjian Baccarat Rouge 540 — luxurious and luminous with saffron, amberwood, and jasmine.",
      featured: true,
      bestSeller: true,
      href: "/products/baccarat-rouge-inspired",
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Featured <span style={{ color: colors.goldDark }}>Fragrances</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            Explore our growing collection of handcrafted perfumes —
            thoughtfully inspired by globally loved designer fragrances, made
            locally for every personality and mood.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {fragrances.map((fragrance) => (
            <FeaturedPerfumeCard key={fragrance.id} {...fragrance} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
