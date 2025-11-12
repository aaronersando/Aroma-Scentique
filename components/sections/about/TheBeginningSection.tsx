"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";

const TheBeginningSection = () => {
  return (
    <section
      className="pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/Pic-20251026T075228Z-1-001/Pic/Men_s/LacosteBlack_2.jpg"
                alt="The Beginning - Crafting perfumes"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-12 rounded-2xl"
              style={{
                backgroundColor: colors.card,
              }}
            >
              <h2
                className="text-4xl md:text-5xl font-playfair font-bold mb-6"
                style={{ color: colors.primary }}
              >
                The <span style={{ color: colors.goldDark }}>Beginning</span>
              </h2>
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  It all started with a simple idea: to create perfumes that
                  capture the essence of luxury without the luxury price tag.
                  Inspired by world-class scents, I began experimenting with
                  premium oils and fragrance formulations in small batches —
                  learning through trial, passion, and persistence.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base font-inter leading-relaxed"
                  style={{ color: colors.foreground }}
                >
                  What began as a personal hobby quickly grew into something
                  bigger. Friends and family loved the scents, and soon, word
                  spread. That&apos;s when I realized this wasn&apos;t just
                  about making perfume — it was about crafting experiences and
                  giving people confidence through fragrance.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheBeginningSection;
