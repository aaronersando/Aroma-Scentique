"use client";

import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";

const AboutHeroSection = () => {
  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          style={{ color: colors.primary }}
        >
          About <span style={{ color: colors.goldDark }}>Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg font-inter max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.mutedForeground }}
        >
          Discover the story behind Aroma Scentique, our journey, founder, and
          commitment to creating exceptional artisanal fragrances.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
