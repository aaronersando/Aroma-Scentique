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
  href: string;
}

const FeaturedPerfumeCard: React.FC<FeaturedPerfumeCardProps> = ({
  image,
  category,
  title,
  description,
  featured = false,
  bestSeller = false,
  href,
}) => {
  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-2xl border-2"
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
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {(featured || bestSeller) && (
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {featured && (
                  <Badge
                    className="font-montserrat text-xs px-2 py-1"
                    style={{
                      backgroundColor: colors.gold,
                      color: colors.primary,
                    }}
                  >
                    Featured
                  </Badge>
                )}
                {bestSeller && (
                  <Badge
                    className="font-montserrat text-xs px-2 py-1"
                    style={{
                      backgroundColor: colors.brown,
                      color: colors.primaryForeground,
                    }}
                  >
                    Best Seller
                  </Badge>
                )}
              </div>
            )}
          </div>

          <div className="p-6 space-y-3">
            <Badge
              variant="secondary"
              className="font-montserrat uppercase tracking-wider text-xs"
              style={{
                backgroundColor: colors.goldLight,
                color: colors.goldDark,
              }}
            >
              {category}
            </Badge>

            <h3
              className="text-2xl font-playfair font-bold line-clamp-1"
              style={{ color: colors.primary }}
            >
              {title}
            </h3>

            <p
              className="text-sm font-inter line-clamp-2 leading-relaxed"
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
