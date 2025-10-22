import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { colors } from "@/lib/colors";

interface TestimonialCardProps {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  avatar,
  rating,
  testimonial,
}) => {
  return (
    <Card
      className="border"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4
              className="font-playfair font-semibold text-base"
              style={{ color: colors.primary }}
            >
              {name}
            </h4>
            <p
              className="text-sm font-inter"
              style={{ color: colors.mutedForeground }}
            >
              {location}
            </p>
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? colors.gold : "none"}
              stroke={i < rating ? colors.gold : colors.border}
            />
          ))}
        </div>
        <p
          className="text-sm font-inter leading-relaxed italic"
          style={{ color: colors.foreground }}
        >
          &ldquo;{testimonial}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
