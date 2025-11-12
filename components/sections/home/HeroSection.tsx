"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";
import { motion, Variants } from "motion/react";

const HeroSection = () => {
  const containerVariants: Variants = {
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
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const accentLineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingVariants: Variants = {
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

  const textVariants: Variants = {
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

  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
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

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Full Section */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="/Pic-20251026T075228Z-1-001/Pic/Women_s/YSLLibre_2.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#3D2E24]/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content with White Background Card  */}
          <div className="lg:col-span-8 xl:col-span-9">
            <motion.div
              className="p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl shadow-2xl max-w-2xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.97)",
              }}
              variants={cardVariants}
            >
              {/* Gold Accent Line */}
              <motion.div
                className="w-32 h-1 mb-8"
                style={{ backgroundColor: colors.gold, originX: 0 }}
                variants={accentLineVariants}
              />

              {/* Heading */}
              <motion.h1
                className="font-playfair font-bold mb-6"
                variants={headingVariants}
              >
                <motion.span
                  className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
                  style={{ color: colors.primary }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Discover the Art of
                </motion.span>
                <motion.span
                  className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
                  style={{ color: colors.goldDark }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Fragrance
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg font-inter mb-10 leading-relaxed"
                style={{ color: colors.foreground }}
                variants={textVariants}
              >
                Inspired by world-class luxury scents, Aroma Scentique creates
                handcrafted perfumes made with passion, precision, and purpose.
                Each scent captures individuality and turns everyday moments
                into something unforgettable.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                variants={buttonContainerVariants}
              >
                <Link href="/products">
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      size="lg"
                      className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
                      style={{
                        backgroundColor: colors.brown,
                        color: colors.primaryForeground,
                      }}
                    >
                      Explore Collection
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 border-2 rounded-md bg-transparent hover:bg-transparent transition-all"
                      style={{
                        borderColor: colors.brown,
                        color: colors.brown,
                      }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Empty space for image to show through */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
