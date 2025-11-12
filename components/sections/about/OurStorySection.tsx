"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";

const OurStorySection = () => {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-playfair font-bold"
                style={{ color: colors.primary }}
              >
                Our <span style={{ color: colors.goldDark }}>Story</span>
              </motion.h2>
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Aroma Scentique began as a small passion project with one goal
                  — to make high-quality, handcrafted perfumes inspired by
                  iconic fragrances from around the world accessible to
                  everyone. What started from curiosity and creativity has grown
                  into a local brand that celebrates individuality through
                  scent.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  Each perfume is thoughtfully blended to capture confidence,
                  elegance, and self-expression. At Aroma Scentique, we believe
                  perfume isn&apos;t just about smelling good — it&apos;s about
                  expressing who you are.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/Pic-20251026T075228Z-1-001/Pic/Women_s/YSLLibre_2.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
