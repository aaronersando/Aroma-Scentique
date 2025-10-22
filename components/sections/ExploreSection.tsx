"use client";

import React from "react";
import CollectionCard from "@/components/cards/CollectionCard";
import { colors } from "@/lib/colors";

const ExploreSection = () => {
  const collections = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&h=900&fit=crop",
      title: "MEN",
      description:
        "Rich and sophisticated fragrances for the modern gentleman.",
      href: "/products?category=men",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=900&fit=crop",
      title: "WOMEN",
      description: "Elegant and captivating scents for the contemporary woman.",
      href: "/products?category=women",
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Explore <span style={{ color: colors.goldDark }}>Collections</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            Browse our collections by fragrance families to find your perfect
            scent match.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
