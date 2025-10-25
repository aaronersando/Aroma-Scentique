import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/lib/colors";
import { Product } from "@/lib/products";

const ProductCard: React.FC<Product> = ({
  id,
  image,
  category,
  name,
  description,
  featured = false,
  bestSeller = false,
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
        <Link href={`/products/${id}`} className="block">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {featured && (
                <Badge
                  className="font-montserrat text-xs uppercase shadow-lg"
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
                  className="font-montserrat text-xs uppercase shadow-lg"
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
              className="text-xl font-playfair font-bold mb-3 group-hover:text-opacity-80 transition-all"
              style={{ color: colors.primary }}
            >
              {name}
            </h3>
            <p
              className="text-sm font-inter leading-relaxed line-clamp-3"
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

export default ProductCard;
