"use client";

import React from "react";
import { colors } from "@/lib/colors";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Heart, Leaf } from "lucide-react";

const VisionMissionSection = () => {
  const values = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries while respecting traditional perfumery techniques.",
    },
    {
      id: 2,
      icon: Heart,
      title: "Passion",
      description:
        "Every fragrance is crafted with love and dedication to the art.",
    },
    {
      id: 3,
      icon: Target,
      title: "Excellence",
      description: "Uncompromising quality in every aspect of our creations.",
    },
    {
      id: 4,
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to ethical sourcing and environmental responsibility.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Core Values */}
        <div className="text-center mb-12">
          <h3
            className="text-3xl md:text-4xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Our Core <span style={{ color: colors.goldDark }}>Values</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card
              key={value.id}
              className="border hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: colors.card,
                borderColor: colors.border,
              }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: colors.goldLight }}
                >
                  <value.icon size={32} style={{ color: colors.goldDark }} />
                </div>
                <h4
                  className="text-xl font-playfair font-bold mb-3"
                  style={{ color: colors.primary }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-sm font-inter leading-relaxed"
                  style={{ color: colors.mutedForeground }}
                >
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Vision */}
          <Card
            className="border-2"
            style={{
              backgroundColor: colors.card,
              borderColor: colors.gold,
            }}
          >
            <CardContent className="p-8 md:p-10">
              <div
                className="w-20 h-1 mb-6"
                style={{ backgroundColor: colors.gold }}
              />
              <h3
                className="text-3xl md:text-4xl font-playfair font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Our <span style={{ color: colors.goldDark }}>Vision</span>
              </h3>
              <p
                className="text-base font-inter leading-relaxed"
                style={{ color: colors.foreground }}
              >
                To be recognized globally as the premier boutique perfume house
                that elevates fragrance to an art form, inspiring people to
                express their individuality and create lasting memories through
                scent. We envision a world where every person discovers their
                perfect fragrance that becomes an integral part of their
                identity.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card
            className="border-2"
            style={{
              backgroundColor: colors.card,
              borderColor: colors.gold,
            }}
          >
            <CardContent className="p-8 md:p-10">
              <div
                className="w-20 h-1 mb-6"
                style={{ backgroundColor: colors.gold }}
              />
              <h3
                className="text-3xl md:text-4xl font-playfair font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Our <span style={{ color: colors.goldDark }}>Mission</span>
              </h3>
              <p
                className="text-base font-inter leading-relaxed"
                style={{ color: colors.foreground }}
              >
                To create exceptional, artisanal fragrances that evoke emotions
                and tell stories, using only the finest ingredients sourced
                ethically from around the world. We are committed to maintaining
                the highest standards of quality while preserving traditional
                perfumery techniques and embracing sustainable practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
