"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";
import { motion, Variants } from "motion/react";

const TheArtSection = () => {
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

  const textContentVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
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

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const imageGridVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
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

  const imageHoverVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="lg:col-span-5 xl:col-span-5"
            variants={textContentVariants}
          >
            <div className="space-y-8">
              <motion.h2
                className="text-4xl md:text-5xl font-playfair font-bold"
                style={{ color: colors.primary }}
                variants={titleVariants}
              >
                The Art of{" "}
                <span style={{ color: colors.goldDark }}>Perfumery</span>
              </motion.h2>
              <div className="space-y-5 mb-8">
                <motion.p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                  variants={paragraphVariants}
                >
                  At Aroma Scentique, we see fragrance as more than just a scent
                  — it&apos;s an art form. Every bottle is carefully
                  handcrafted, inspired by luxury designer perfumes, and made
                  with premium local oils and long-lasting formulations.
                </motion.p>
                <motion.p
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                  variants={paragraphVariants}
                >
                  Our small business began with a passion to make
                  luxury-inspired perfumes affordable and accessible, blending
                  global inspiration with Filipino craftsmanship.
                </motion.p>
              </div>
              <Link href="/about">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 border-2 rounded-md transition-all"
                    style={{
                      borderColor: colors.brown,
                      color: colors.brown,
                      backgroundColor: "transparent",
                    }}
                  >
                    Discover Our Story
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Image Grid Layout */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7"
            variants={imageGridVariants}
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Main Large Image - Perfume Bottle */}
              <motion.div
                className="col-span-7 row-span-2"
                variants={imageVariants}
              >
                <motion.div
                  className="relative aspect-3/4 w-full overflow-hidden rounded-2xl shadow-xl"
                  initial="rest"
                  whileHover="hover"
                  variants={imageHoverVariants}
                >
                  <Image
                    src="/Pic-20251026T075228Z-1-001/Pic/Women_s/MissDior_2.jpg"
                    alt="Main perfume bottle"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Top Right Small Image */}
              <motion.div className="col-span-5" variants={imageVariants}>
                <motion.div
                  className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg"
                  initial="rest"
                  whileHover="hover"
                  variants={imageHoverVariants}
                >
                  <Image
                    src="/Pic-20251026T075228Z-1-001/Pic/Men_s/Sauvage_2.jpg"
                    alt="Small perfume bottle"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Right Small Image */}
              <motion.div className="col-span-5" variants={imageVariants}>
                <motion.div
                  className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg"
                  initial="rest"
                  whileHover="hover"
                  variants={imageHoverVariants}
                >
                  <Image
                    src="/Pic-20251026T075228Z-1-001/Pic/Women_s/BrightCrystal_2.jpg"
                    alt="Small perfume bottle with white flowers"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TheArtSection;
