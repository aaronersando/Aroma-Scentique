"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { colors } from "@/lib/colors";

interface ProductDetailsSectionProps {
  category: string;
  name: string;
  description: string;
  longDescription: string;
  featured?: boolean;
  bestSeller?: boolean;
  productUrl: string;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  category,
  name,
  description,
  longDescription,
  featured = false,
  bestSeller = false,
  productUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const sizes = [
    { label: "25ml", price: "₱50" },
    { label: "50ml", price: "₱100" },
  ];

  const handleShare = async () => {
    const fullUrl = `${window.location.origin}${productUrl}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="lg:col-span-6 space-y-6">
      {/* Category Badge */}
      <div>
        <Badge
          variant="secondary"
          className="font-montserrat uppercase tracking-wider text-xs px-4 py-1.5"
          style={{
            backgroundColor: colors.goldLight,
            color: colors.goldDark,
          }}
        >
          {category}
        </Badge>
      </div>

      {/* Product Name */}
      <div>
        <h1
          className="text-4xl md:text-5xl font-playfair font-bold mb-4"
          style={{ color: colors.primary }}
        >
          {name}
        </h1>
        {(featured || bestSeller) && (
          <div className="flex gap-2">
            {featured && (
              <Badge
                className="font-montserrat text-xs px-3 py-1"
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
                className="font-montserrat text-xs px-3 py-1"
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

      {/* Short Description */}
      <p
        className="text-base md:text-lg font-inter leading-relaxed"
        style={{ color: colors.foreground }}
      >
        {description}
      </p>

      {/* Share Button - Moved below description */}
      <Button
        onClick={handleShare}
        variant="outline"
        size="lg"
        className="w-full font-montserrat uppercase tracking-wide text-sm px-6 py-5 border-2 rounded-xl transition-all"
        style={{
          borderColor: colors.gold,
          color: colors.primary,
          backgroundColor: copied ? colors.goldLight : "transparent",
        }}
      >
        {copied ? (
          <>
            <Check className="mr-2" size={18} />
            Link Copied!
          </>
        ) : (
          <>
            <Share2 className="mr-2" size={18} />
            Share This Fragrance
          </>
        )}
      </Button>

      {/* Available Sizes Display - Compact Design */}
      <div
        className="p-4 rounded-xl border"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
      >
        <h3
          className="text-sm font-playfair font-semibold mb-3"
          style={{ color: colors.primary }}
        >
          Available Sizes
        </h3>
        <div className="space-y-2">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-3 rounded-lg"
              style={{
                backgroundColor: colors.background,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: colors.gold }}
                />
                <span
                  className="text-xl font-playfair font-medium"
                  style={{ color: colors.primary }}
                >
                  {size.label}
                </span>
              </div>
              <span
                className="text-sm font-bold font-montserrat"
                style={{ color: colors.goldDark }}
              >
                {size.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Long Description */}
      <div
        className="p-6 rounded-2xl border-2"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
      >
        <h3
          className="text-xl font-playfair font-bold mb-4"
          style={{ color: colors.primary }}
        >
          About This <span style={{ color: colors.goldDark }}>Fragrance</span>
        </h3>
        <p
          className="text-base font-inter leading-relaxed whitespace-pre-line"
          style={{ color: colors.foreground }}
        >
          {longDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
