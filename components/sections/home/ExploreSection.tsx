"use client";

import React from "react";
import CollectionCard from "@/components/cards/CollectionCard";
import { colors } from "@/lib/colors";
import { motion, Variants } from "motion/react";

const ExploreSection = () => {
  const collections = [
    {
      id: 1,
      image: "/Pic-20251026T075228Z-1-001/Pic/Men_s/Invictus_1.jpg",
      title: "MEN",
      description:
        "Rich, modern, and long-lasting scents inspired by iconic masculine fragrances — perfect for daily wear or special occasions.",
      href: "/products?category=men",
    },
    {
      id: 2,
      image: "/Pic-20251026T075228Z-1-001/Pic/Women_s/BlackOpium_1.jpg",
      title: "WOMEN",
      description:
        "Elegant, alluring, and timeless perfumes inspired by world-renowned feminine fragrances — made to captivate and empower",
      href: "/products?category=women",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
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
            Explore Our{" "}
            <span style={{ color: colors.goldDark }}>Collections</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
            variants={descriptionVariants}
          >
            From bold and confident to soft and elegant — discover perfumes
            crafted for every personality and occasion.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridVariants}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={cardVariants}
              custom={index}
            >
              <CollectionCard
                image={collection.image}
                title={collection.title}
                description={collection.description}
                href={collection.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExploreSection;
