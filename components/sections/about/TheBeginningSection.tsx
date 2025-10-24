"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";

const TheBeginningSection = () => {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=600&fit=crop"
                alt="The Beginning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div
              className="p-8 md:p-12 rounded-2xl"
              style={{
                backgroundColor: colors.card,
                border: `2px solid ${colors.gold}`,
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
                The Beginning of{" "}
                <span style={{ color: colors.goldDark }}>Aroma Scentique</span>
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  We founded Aroma Scentique to bridge the gap between luxury
                  and affordability. Many people deserve to experience
                  sophistication through scent — without breaking the bank.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Each fragrance we create is made with care, precision, and
                  passion. For us, true luxury isn’t defined by price, but by
                  craftsmanship and how a scent makes you feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBeginningSection;
