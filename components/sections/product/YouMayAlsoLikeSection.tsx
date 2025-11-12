"use client";

import React from "react";
import { motion } from "motion/react";
import ProductCard from "@/components/cards/ProductCard";
import { Product } from "@/lib/products";
import { colors } from "@/lib/colors";

interface YouMayAlsoLikeSectionProps {
  products: Product[];
}

const YouMayAlsoLikeSection: React.FC<YouMayAlsoLikeSectionProps> = ({
  products,
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-16" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12"
          style={{ color: colors.primary }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          You May Also <span style={{ color: colors.goldDark }}>Like</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLikeSection;
