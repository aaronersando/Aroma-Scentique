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
                  Founded in 2010 by master perfumer Claire Laurent, Aroma
                  Scentique began as a small passion project in a quaint
                  Parisian workshop. Claire, having trained under some of the
                  most renowned noses in the industry, wanted to create
                  fragrances that weren&apos;t bound by commercial constraints
                  but instead focused on artistry and emotion.
                </p>
                <p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  The first collection, featuring just three signature scents,
                  quickly gained recognition for its unique compositions and
                  exceptional quality. What started as a limited production sold
                  in select boutiques has now grown into an internationally
                  recognized brand, while still maintaining the artisanal
                  approach and attention to detail that defined our beginnings.
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
