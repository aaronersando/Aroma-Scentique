"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";

const OurStorySection = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h2
                className="text-4xl md:text-5xl font-playfair font-bold"
                style={{ color: colors.primary }}
              >
                Our <span style={{ color: colors.goldDark }}>Story</span>
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Aroma Scentique began as a small passion project with one goal
                  — to make high-quality, handcrafted perfumes inspired by
                  iconic fragrances from around the world accessible to
                  everyone. What started from curiosity and creativity has grown
                  into a local brand that celebrates individuality through
                  scent.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Each perfume is thoughtfully blended to capture confidence,
                  elegance, and self-expression. At Aroma Scentique, we believe
                  perfume isn&apos;t just about smelling good — it&apos;s about
                  expressing who you are.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Pic-20251026T075228Z-1-001/Pic/Women_s/YSLLibre_2.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
