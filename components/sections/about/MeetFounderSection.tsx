"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { Card, CardContent } from "@/components/ui/card";

const MeetFounderSection = () => {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - Takes 3 columns */}
          <div className="lg:col-span-2">
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
                Meet Our <span style={{ color: colors.goldDark }}>Founder</span>
              </h2>
              <p
                className="text-base font-inter leading-relaxed mb-6"
                style={{ color: colors.foreground }}
              >
                Meet Joseph Cagara, the visionary behind Aroma Scentique.
                Inspired by how scents can express emotion and confidence,
                Joseph wanted to make the art of perfumery accessible to
                everyone. After studying fragrance composition and collaborating
                with experts, he created a brand that blends world-class quality
                with local artistry.
              </p>

              {/* Quote Card */}
              <Card
                className="border-l-4 my-6"
                style={{
                  backgroundColor: colors.goldLight,
                  borderColor: colors.gold,
                }}
              >
                <CardContent className="p-6">
                  <p
                    className="text-base font-inter italic leading-relaxed mb-3"
                    style={{ color: colors.primary }}
                  >
                    “True luxury isn’t about the price — it’s the feeling it
                    leaves behind.”
                  </p>
                  <p
                    className="text-sm font-montserrat font-semibold"
                    style={{ color: colors.goldDark }}
                  >
                    — Josepch Cagara, Founder
                  </p>
                </CardContent>
              </Card>

              <p
                className="text-base font-inter leading-relaxed"
                style={{ color: colors.foreground }}
              >
                Today, Joseph continues to lead Aroma Scentique with passion and
                purpose, proving that true luxury is not about price, but about
                how it makes you feel.
              </p>
            </div>
          </div>

          {/* Image - Takes 2 columns */}
          <div className="lg:col-span-3">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Claire Laurent - Founder"
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

export default MeetFounderSection;
