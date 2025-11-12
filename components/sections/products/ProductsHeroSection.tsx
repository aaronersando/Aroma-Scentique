"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { colors } from "@/lib/colors";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const goldTextVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProductsHeroSection = () => {
  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: colors.secondary }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          style={{ color: colors.primary }}
          variants={titleVariants}
        >
          Our{" "}
          <motion.span
            style={{ color: colors.goldDark }}
            variants={goldTextVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="inline-block"
          >
            Collection
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-base md:text-lg font-inter max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.mutedForeground }}
          variants={subtitleVariants}
        >
          Discover our exquisite range of artisanal fragrances, each crafted to
          evoke emotions and create lasting impressions.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProductsHeroSection;
