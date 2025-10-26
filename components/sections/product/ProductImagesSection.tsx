"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <div className="lg:col-span-6">
      {/* Main Image */}
      <div
        className="relative aspect-square w-full overflow-hidden rounded-2xl mb-6 border-2"
        style={{ borderColor: colors.border }}
      >
        <Image
          src={images[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Images - Responsive grid based on image count */}
      <div className={`grid ${getGridColumns()} gap-4`}>
        {images.map((image, index) => (
          <button
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
          >
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImagesSection;
