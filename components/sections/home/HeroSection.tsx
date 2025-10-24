"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image - Full Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&h=1080&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#3D2E24]/70" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Text Content with White Background Card  */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div
              className="p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl shadow-2xl max-w-2xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.97)",
              }}
            >
              {/* Gold Accent Line */}
              <div
                className="w-32 h-1 mb-8"
                style={{ backgroundColor: colors.gold }}
              />

              {/* Heading */}
              <h1 className="font-playfair font-bold mb-6">
                <span
                  className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
                  style={{ color: colors.primary }}
                >
                  Discover the Art of
                </span>
                <span
                  className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
                  style={{ color: colors.goldDark }}
                >
                  Fragrance
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-base md:text-lg font-inter mb-10 leading-relaxed"
                style={{ color: colors.foreground }}
              >
                Inspired by world-class luxury scents, Aroma Scentique creates
                handcrafted perfumes made with passion, precision, and purpose.
                Each scent captures individuality and turns everyday moments
                into something unforgettable.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: colors.brown,
                      color: colors.primaryForeground,
                    }}
                  >
                    Explore Collection
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 border-2 rounded-md bg-transparent hover:bg-transparent transition-all"
                    style={{
                      borderColor: colors.brown,
                      color: colors.brown,
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Empty space for image to show through */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
