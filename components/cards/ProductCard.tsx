"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { colors } from "@/lib/colors";
import { ShoppingCart, Sparkles, TrendingUp } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Safety check
  if (!product || !product.id) {
    return null;
  }

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        style={{ borderColor: colors.border }}
        whileHover={{ y: -8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.newArrival && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: colors.goldDark,
                color: colors.background,
              }}
            >
              <Sparkles size={12} />
              New
            </motion.div>
          )}
          {product.bestSeller && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: colors.brown,
                color: colors.background,
              }}
            >
              <TrendingUp size={12} />
              Bestseller
            </motion.div>
          )}
        </div>

        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-full p-3"
            >
              <ShoppingCart size={24} style={{ color: colors.goldDark }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="font-playfair font-bold text-lg md:text-xl mb-2 line-clamp-1 group-hover:text-opacity-80 transition-opacity"
              style={{ color: colors.primary }}
            >
              {product.name}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-inter mb-3 line-clamp-2"
            style={{ color: colors.mutedForeground }}
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between"
          >
            <span
              className="text-sm font-montserrat px-3 py-1 rounded-full"
              style={{
                backgroundColor: colors.goldLight,
                color: colors.goldDark,
              }}
            >
              {product.category}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
