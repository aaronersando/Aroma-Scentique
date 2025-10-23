import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { colors } from "@/lib/colors";

interface JourneyCardProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const JourneyCard: React.FC<JourneyCardProps> = ({
  year,
  title,
  description,
  image,
  isReversed = false,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
        isReversed ? "" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`md:col-span-3 ${isReversed ? "md:order-2" : "md:order-1"}`}
      >
        <div
          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4"
          style={{ borderColor: colors.gold }}
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div
        className={`md:col-span-9 ${isReversed ? "md:order-1" : "md:order-2"}`}
      >
        <Card
          className="border-2"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.gold,
          }}
        >
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="text-3xl md:text-4xl font-playfair font-bold px-4 py-2 rounded"
                style={{
                  color: colors.primary,
                  backgroundColor: colors.goldLight,
                }}
              >
                {year}
              </div>
              <h3
                className="text-2xl md:text-3xl font-playfair font-bold"
                style={{ color: colors.goldDark }}
              >
                {title}
              </h3>
            </div>
            <p
              className="text-base font-inter leading-relaxed"
              style={{ color: colors.foreground }}
            >
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JourneyCard;
