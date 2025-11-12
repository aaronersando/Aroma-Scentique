"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { colors } from "@/lib/colors";

interface ProductImagesSectionProps {
  images: string[];
  productName: string;
}

const ProductImagesSection: React.FC<ProductImagesSectionProps> = ({
  images,
  productName,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Determine grid layout based on number of images
  const getGridColumns = () => {
    if (images.length === 2) return "grid-cols-2";
    if (images.length === 3) return "grid-cols-3";
    return "grid-cols-4"; // 4 images
  };

  return (
    <motion.div
      className="lg:col-span-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main Image */}
      <motion.div
        className="relative aspect-square w-full overflow-hidden rounded-2xl mb-6 border-2"
        style={{ borderColor: colors.border }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <Image
              src={images[selectedImage]}
              alt={`${productName} - View ${selectedImage + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Thumbnail Images - Responsive grid based on image count */}
      <motion.div
        className={`grid ${getGridColumns()} gap-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              selectedImage === index
                ? "ring-4 ring-opacity-50"
                : "hover:opacity-80"
            }`}
            style={{
              borderColor:
                selectedImage === index ? colors.gold : colors.border,
              ...(selectedImage === index &&
                ({
                  "--tw-ring-color": colors.gold,
                } as React.CSSProperties)),
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductImagesSection;
