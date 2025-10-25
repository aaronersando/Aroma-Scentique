"use client";

import React from "react";
import FeaturedPerfumeCard from "@/components/cards/FeaturedPerfumeCard";
import { colors } from "@/lib/colors";
import { products, Product } from "@/lib/products";

const FeaturedSection = () => {
  // Get featured products from the products data
  const featuredProducts = products.filter((product) => product.featured);

  // Select 4 featured products: 2 men's and 2 women's
  const selectedFeatured = [
    featuredProducts.find((p) => p.id === "bulgari-extreme"),
    featuredProducts.find((p) => p.id === "lacoste-black"),
    featuredProducts.find((p) => p.id === "ysl-libre"),
    featuredProducts.find((p) => p.id === "black-opium"),
  ].filter((product): product is Product => product !== undefined); // Type guard to ensure no undefined values

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
            Discover our handpicked selection of artisanal perfumes, each
            inspired by world-class luxury scents and crafted to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {selectedFeatured.map((product) => (
            <FeaturedPerfumeCard
              key={product.id}
              image={product.image}
              category={product.category}
              title={product.name}
              description={product.description}
              featured={product.featured}
              bestSeller={product.bestSeller}
              href={`/products/${product.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
