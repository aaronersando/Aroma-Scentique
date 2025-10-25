"use client";

import React from "react";
import { colors } from "@/lib/colors";

const ProductsHeroSection = () => {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          style={{ color: colors.primary }}
        >
          Our <span style={{ color: colors.goldDark }}>Collection</span>
        </h1>
        <p
          className="text-base md:text-lg font-inter max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.mutedForeground }}
        >
          Discover our exquisite range of artisanal fragrances, each crafted to
          evoke emotions and create lasting impressions.
        </p>
      </div>
    </section>
  );
};

export default ProductsHeroSection;
