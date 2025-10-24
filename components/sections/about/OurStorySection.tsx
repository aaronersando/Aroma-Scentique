"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";

const OurStorySection = () => {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div
              className="p-8 md:p-12 rounded-2xl border-2"
              style={{
                backgroundColor: colors.card,
                borderColor: colors.gold,
              }}
            >
              <div
                className="w-20 h-1 mb-6"
                style={{ backgroundColor: colors.gold }}
              />
              <h2
                className="text-4xl md:text-5xl font-playfair font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Our Story
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
                  perfume isn’t just about smelling good — it’s about expressing
                  who you are.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop"
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
