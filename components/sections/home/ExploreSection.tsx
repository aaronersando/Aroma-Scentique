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
        "Rich, modern, and long-lasting scents inspired by iconic masculine fragrances — perfect for daily wear or special occasions.",
      href: "/products?category=men",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=900&fit=crop",
      title: "WOMEN",
      description:
        "Elegant, alluring, and timeless perfumes inspired by world-renowned feminine fragrances — made to captivate and empower",
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
            Browse our inspired collections and find the scent that truly
            defines you.
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
