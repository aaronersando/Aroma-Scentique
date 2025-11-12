"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { motion } from "motion/react";
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
    { label: "10ml", price: "₱50" },
    { label: "50ml", price: "₱300" },
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
    <motion.div
      className="lg:col-span-6 space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>

      {/* Product Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="text-4xl md:text-5xl font-playfair font-bold mb-4"
          style={{ color: colors.primary }}
        >
          {name}
        </h1>
        {(featured || bestSeller) && (
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {featured && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  className="font-montserrat text-xs px-3 py-1"
                  style={{
                    backgroundColor: colors.gold,
                    color: colors.primary,
                  }}
                >
                  Featured
                </Badge>
              </motion.div>
            )}
            {bestSeller && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  className="font-montserrat text-xs px-3 py-1"
                  style={{
                    backgroundColor: colors.brown,
                    color: colors.primaryForeground,
                  }}
                >
                  Best Seller
                </Badge>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Short Description */}
      <motion.p
        className="text-base md:text-lg font-inter leading-relaxed"
        style={{ color: colors.foreground }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {description}
      </motion.p>

      {/* Share Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
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
          asChild
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
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
          </motion.button>
        </Button>
      </motion.div>

      {/* Available Sizes Display */}
      <motion.div
        className="p-4 rounded-xl border"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)" }}
      >
        <motion.h3
          className="text-sm font-playfair font-semibold mb-3"
          style={{ color: colors.primary }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Available Sizes
        </motion.h3>
        <div className="space-y-2">
          {sizes.map((size, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between py-2 px-3 rounded-lg"
              style={{
                backgroundColor: colors.background,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 5, backgroundColor: colors.goldLight }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: colors.gold }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Long Description */}
      <motion.div
        className="p-6 rounded-2xl border-2"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ boxShadow: "0 10px 40px rgba(212, 175, 55, 0.15)" }}
      >
        <motion.h3
          className="text-xl font-playfair font-bold mb-4"
          style={{ color: colors.primary }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          About This <span style={{ color: colors.goldDark }}>Fragrance</span>
        </motion.h3>
        <motion.p
          className="text-base font-inter leading-relaxed whitespace-pre-line"
          style={{ color: colors.foreground }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          {longDescription}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailsSection;
