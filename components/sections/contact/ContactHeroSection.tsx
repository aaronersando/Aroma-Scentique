"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { colors } from "@/lib/colors";

const ContactHeroSection = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const highlightVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
          Contact{" "}
          <motion.span
            style={{ color: colors.goldDark }}
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
          >
            Us
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-base md:text-lg font-inter max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.mutedForeground }}
          variants={itemVariants}
        >
          We&apos;d love to hear from you! Whether you&apos;re curious about our
          scents, need help with your order, or want to collaborate, our
          passionate team is here to assist.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHeroSection;
