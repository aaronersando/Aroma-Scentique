"use client";

import React from "react";
import { colors } from "@/lib/colors";

const AboutHeroSection = () => {
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
          About <span style={{ color: colors.goldDark }}>Us</span>
        </h1>
        <p
          className="text-base md:text-lg font-inter max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.mutedForeground }}
        >
          Discover the story behind Aroma Scentique, our journey, founder, and
          commitment to creating exceptional artisanal fragrances.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
