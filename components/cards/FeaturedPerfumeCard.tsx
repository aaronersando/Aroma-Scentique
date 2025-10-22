import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/lib/colors";

interface FeaturedPerfumeCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  featured?: boolean;
  bestSeller?: boolean;
  href?: string;
}

const FeaturedPerfumeCard: React.FC<FeaturedPerfumeCardProps> = ({
  image,
  category,
  title,
  description,
  featured = false,
  bestSeller = false,
  href = "#",
}) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg border"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <CardContent className="p-0">
        <Link href={href} className="block">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {featured && (
                <Badge
                  className="font-montserrat text-xs uppercase"
                  style={{
                    backgroundColor: colors.brown,
                    color: colors.primaryForeground,
                  }}
                >
                  Featured
                </Badge>
              )}
              {bestSeller && (
                <Badge
                  className="font-montserrat text-xs uppercase"
                  style={{
                    backgroundColor: colors.gold,
                    color: colors.primary,
                  }}
                >
                  Best Seller
                </Badge>
              )}
            </div>
          </div>
          <div className="p-6">
            <p
              className="text-xs font-montserrat uppercase tracking-wider mb-2"
              style={{ color: colors.muted }}
            >
              {category}
            </p>
            <h3
              className="text-xl font-playfair font-bold mb-2"
              style={{ color: colors.primary }}
            >
              {title}
            </h3>
            <p
              className="text-sm font-inter leading-relaxed"
              style={{ color: colors.mutedForeground }}
            >
              {description}
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FeaturedPerfumeCard;
