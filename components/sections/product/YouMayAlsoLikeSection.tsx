"use client";

import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import { Product } from "@/lib/products";
import { colors } from "@/lib/colors";

interface YouMayAlsoLikeSectionProps {
  products: Product[];
}

const YouMayAlsoLikeSection: React.FC<YouMayAlsoLikeSectionProps> = ({
  products,
}) => {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            You May Also <span style={{ color: colors.goldDark }}>Like</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            Discover more handcrafted fragrances from our collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLikeSection;
