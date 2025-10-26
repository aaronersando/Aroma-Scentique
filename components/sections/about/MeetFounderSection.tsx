"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";

const MeetFounderSection = () => {
  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: colors.gold }}
          />
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Meet Our <span style={{ color: colors.goldDark }}>Founder</span>
          </h2>
          <p
            className="text-lg font-inter max-w-2xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            The visionary behind Aroma Scentique&apos;s artistry
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Professional Photo */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ backgroundColor: colors.gold }}
              />

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Founder_Image.jpg"
                  alt="Joseph Cagara - Founder of Aroma Scentique"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Name Plate */}
              <div
                className="mt-6 p-6 rounded-xl shadow-lg text-center"
                style={{ backgroundColor: colors.card }}
              >
                <h3
                  className="text-2xl font-playfair font-bold mb-1"
                  style={{ color: colors.primary }}
                >
                  Joseph Cagara
                </h3>
                <p
                  className="text-sm font-montserrat uppercase tracking-wider"
                  style={{ color: colors.gold }}
                >
                  Founder & Master Perfumer
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-2 space-y-8">
            {/* Story */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-playfair font-bold mb-4"
                style={{ color: colors.primary }}
              >
                A Journey Through{" "}
                <span style={{ color: colors.goldDark }}>Scent</span>
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Meet Joseph Cagara, the visionary behind Aroma Scentique.
                  Inspired by how scents can express emotion and confidence,
                  Joseph wanted to make the art of perfumery accessible to
                  everyone.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  After studying fragrance composition and collaborating with
                  experts, he created a brand that blends world-class quality
                  with local artistry. Each perfume is crafted with precision,
                  passion, and purpose — a testament to his dedication to the
                  craft.
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div
              className="px-6 py-5 md:px-8 md:py-6 rounded-2xl"
              style={{
                backgroundColor: colors.goldLight,
              }}
            >
              <div
                className="text-2xl font-playfair leading-none mb-3 opacity-80"
                style={{ color: colors.primary }}
              >
                ,,
              </div>
              <p
                className="text-base md:text-lg font-inter italic leading-relaxed mb-3"
                style={{ color: colors.primary }}
              >
                True luxury isn&apos;t about the price — it&apos;s the feeling
                it leaves behind.
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: colors.gold }}
                />
                <p
                  className="text-xs font-montserrat font-medium uppercase tracking-widest"
                  style={{ color: colors.goldDark }}
                >
                  Joseph Cagara
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div
              className="p-6 rounded-xl border-l-4"
              style={{
                backgroundColor: colors.card,
                borderColor: colors.gold,
              }}
            >
              <p
                className="text-base font-inter leading-relaxed"
                style={{ color: colors.foreground }}
              >
                Today, Joseph continues to lead Aroma Scentique with passion and
                purpose, proving that true luxury is not about price, but about
                how it makes you feel. Every bottle tells a story, every scent
                captures a moment, and every customer becomes part of the Aroma
                Scentique family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounderSection;
