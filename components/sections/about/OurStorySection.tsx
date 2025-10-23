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
                  Aroma Scentique was born from a passion for creating unique,
                  artisanal fragrances that tell a story and evoke emotions. Our
                  journey began in a small Parisian atelier and has grown into a
                  boutique perfume house known for exceptional quality and
                  artistic expression.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Each fragrance we create is a work of art, carefully composed
                  to capture the essence of precious moments and transport you
                  to different times and places. We believe that perfume is more
                  than just a scent—it&apos;s an invisible signature that
                  becomes part of your identity.
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
