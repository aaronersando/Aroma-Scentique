"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import ProductCard from "@/components/cards/ProductCard";
import { Product } from "@/lib/products";
import { colors } from "@/lib/colors";

interface YouMayAlsoLikeSectionProps {
  relatedProducts: Product[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const YouMayAlsoLikeSection: React.FC<YouMayAlsoLikeSectionProps> = ({
  relatedProducts,
}) => {
  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12"
          style={{ color: colors.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          You May Also <span style={{ color: colors.goldDark }}>Like</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {relatedProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default YouMayAlsoLikeSection;
