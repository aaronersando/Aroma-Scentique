"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const ExperienceSection = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: colors.brown }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          style={{ color: colors.primaryForeground }}
        >
          Experience Our Fragrances
        </h2>
        <p
          className="text-base md:text-lg font-inter mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: colors.accentForeground }}
        >
          Explore our growing collection of handcrafted perfumes made to inspire
          confidence and express individuality. Each scent is carefully blended
          to tell a story—ready to become part of yours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/products">
            <Button
              size="lg"
              className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: colors.gold,
                color: colors.primary,
              }}
            >
              Explore Our Collection
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 border-2 rounded-md transition-all"
              style={{
                borderColor: colors.primaryForeground,
                color: colors.primaryForeground,
                backgroundColor: "transparent",
              }}
            >
              Discover the scent that defines you.
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
