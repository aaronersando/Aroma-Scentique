"use client";

import React from "react";
import CollectionCard from "@/components/cards/CollectionCard";
import { colors } from "@/lib/colors";

const ExploreSection = () => {
  const collections = [
    {
      id: 1,
      image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/Invictus_1.jpg",
      title: "MEN",
      description:
        "Rich, modern, and long-lasting scents inspired by iconic masculine fragrances — perfect for daily wear or special occasions.",
      href: "/products?category=men",
    },
    {
      id: 2,
      image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/BlackOpium_1.jpg",
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
            Explore Our{" "}
            <span style={{ color: colors.goldDark }}>Collections</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            From bold and confident to soft and elegant — discover perfumes
            crafted for every personality and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              image={collection.image}
              title={collection.title}
              description={collection.description}
              href={collection.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
