"use client";
import React from "react";
import FeaturedPerfumeCard from "@/components/cards/FeaturedPerfumeCard";
import { colors } from "@/lib/colors";

const FeaturedSection = () => {
  const fragrances = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=800&fit=crop",
      category: "WOMEN",
      title: "Rose Velvet",
      description: "A delicate rose parfum with warm amber base notes.",
      featured: true,
      bestSeller: true,
      href: "/products/rose-velvet",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=800&fit=crop",
      category: "MEN",
      title: "Cedar Noir",
      description:
        "Woody undertones with a hint of spice and citrus top notes.",
      featured: true,
      href: "/products/cedar-noir",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
      category: "MEN",
      title: "Amber Oud",
      description: "Rich and warm with exotic spices and deep resinous notes.",
      featured: true,
      href: "/products/amber-oud",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop",
      category: "MEN",
      title: "Marine Breeze",
      description:
        "Light and airy with oceanic notes and a fresh citrus finish.",
      featured: true,
      bestSeller: true,
      href: "/products/marine-breeze",
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
            Discover our curated selection of signature scents, each crafted
            with precision and passion to evoke unique emotions and memories.
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
