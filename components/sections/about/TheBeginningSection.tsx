"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";

const TheBeginningSection = () => {
  return (
    <section
      className="pb-16 md:pb-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteBlack_2.jpg"
                alt="The Beginning - Crafting perfumes"
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
              }}
            >
              <h2
                className="text-4xl md:text-5xl font-playfair font-bold mb-6"
                style={{ color: colors.primary }}
              >
                The <span style={{ color: colors.goldDark }}>Beginning</span>
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  It all started with a simple idea: to create perfumes that
                  capture the essence of luxury without the luxury price tag.
                  Inspired by world-class scents, I began experimenting with
                  premium oils and fragrance formulations in small batches —
                  learning through trial, passion, and persistence.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  What began as a personal hobby quickly grew into something
                  bigger. Friends and family loved the scents, and soon, word
                  spread. That&apos;s when I realized this wasn&apos;t just
                  about making perfume — it was about crafting experiences and
                  giving people confidence through fragrance.
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
