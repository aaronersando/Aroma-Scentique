"use client";

import React from "react";
import FeaturedPerfumeCard from "@/components/cards/FeaturedPerfumeCard";
import { colors } from "@/lib/colors";
import { products, Product } from "@/lib/products";
import { motion, Variants } from "motion/react";

const FeaturedSection = () => {
  // Get featured products from the products data
  const featuredProducts = products.filter((product) => product.featured);

  // Select 4 featured products: 2 men's and 2 women's
  const selectedFeatured = [
    featuredProducts.find((p) => p.id === "bvlgari-extreme"),
    featuredProducts.find((p) => p.id === "lacoste-black"),
    featuredProducts.find((p) => p.id === "ysl-libre"),
    featuredProducts.find((p) => p.id === "black-opium"),
  ].filter((product): product is Product => product !== undefined);

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

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
            variants={titleVariants}
          >
            Featured <span style={{ color: colors.goldDark }}>Fragrances</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
            variants={descriptionVariants}
          >
            Discover our handpicked selection of artisanal perfumes, each
            inspired by world-class luxury scents and crafted to perfection.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={gridVariants}
        >
          {selectedFeatured.map((product, index) => (
            <motion.div key={product.id} variants={cardVariants} custom={index}>
              <FeaturedPerfumeCard
                image={product.image}
                category={product.category}
                title={product.name}
                description={product.description}
                featured={product.featured}
                bestSeller={product.bestSeller}
                href={`/products/${product.id}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedSection;
