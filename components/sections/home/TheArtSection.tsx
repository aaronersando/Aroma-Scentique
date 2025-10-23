"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { colors } from "@/lib/colors";

const TheArtSection = () => {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content (Same background as section) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div
              className="p-8 md:p-10 lg:p-12 rounded-2xl"
              style={{
                backgroundColor: colors.secondary,
              }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 leading-tight"
                style={{ color: colors.primary }}
              >
                The Art of{" "}
                <span style={{ color: colors.goldDark }}>Perfumery</span>
              </h2>
              <div className="space-y-5 mb-8">
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  At Aroma Scentique, we believe that fragrance is an art form.
                  Each perfume is meticulously crafted by our master perfumers,
                  who blend rare and precious ingredients to create scents that
                  evoke emotions and capture moments.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Our boutique perfume house was established with a passion for
                  creating unique, artisanal fragrances that tell a story. We
                  source the finest ingredients from around the world and
                  combine traditional techniques with innovative approaches.
                </p>
              </div>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 border-2 rounded-md transition-all"
                  style={{
                    borderColor: colors.brown,
                    color: colors.brown,
                    backgroundColor: "transparent",
                  }}
                >
                  Discover Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image Grid Layout */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              {/* Main Large Image - Perfume Bottle */}
              <div className="col-span-7 row-span-2">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop"
                    alt="Main perfume bottle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Top Right Small Image */}
              <div className="col-span-5">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=600&fit=crop"
                    alt="Small perfume bottle with red flowers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Right Small Image */}
              <div className="col-span-5">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=600&fit=crop"
                    alt="Small perfume bottle with white flowers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheArtSection;
