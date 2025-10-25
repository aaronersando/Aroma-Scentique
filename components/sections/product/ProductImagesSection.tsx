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

      {/* Thumbnail Images - Now 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        {images.slice(0, 3).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              selectedImage === index
                ? "ring-4 ring-offset-2"
                : "hover:opacity-75"
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
