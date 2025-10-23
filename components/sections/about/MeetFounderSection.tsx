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
                Claire Laurent, the creative force behind Aroma Scentique,
                brings over two decades of experience in the world of fine
                perfumery. Trained in Grasse, the perfume capital of the world,
                Claire apprenticed under several master perfumers before
                developing her distinctive style that balances tradition with
                innovation.
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
                    &ldquo;I believe that fragrance is one of the most powerful
                    forms of self-expression. A signature scent becomes part of
                    your identity, creating an invisible aura that leaves an
                    impression long after you&apos;ve left a room.&rdquo;
                  </p>
                  <p
                    className="text-sm font-montserrat font-semibold"
                    style={{ color: colors.goldDark }}
                  >
                    — Claire Laurent, Founder
                  </p>
                </CardContent>
              </Card>

              <p
                className="text-base font-inter leading-relaxed"
                style={{ color: colors.foreground }}
              >
                Claire continues to personally oversee the creation of each new
                fragrance, ensuring that every Aroma Scentique perfume meets her
                exacting standards and embodies the brand&apos;s commitment to
                artistry and quality. Her unique approach combines scientific
                precision with artistic intuition, resulting in compositions
                that are both technically perfect and emotionally evocative.
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
