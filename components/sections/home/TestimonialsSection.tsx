"use client";

import React from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { colors } from "@/lib/colors";
import { motion, Variants } from "motion/react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Christian Vargas",
      location: "Manila, PH",
      avatar: "/Client_1.jpeg",
      rating: 5,
      testimonial:
        "Invictus Inspired is my everyday scent now — fresh, powerful, and lasts all day. Totally worth it!",
    },
    {
      id: 2,
      name: "Patrick Jerome Custodio",
      location: "Bulacan, PH",
      avatar: "/Client_2.jpeg",
      rating: 5,
      testimonial:
        "Acqua Di Gio Inspired smells premium and clean. My friends can't even tell it's not the designer one.",
    },
    {
      id: 3,
      name: "Aldrin San Pedro",
      location: "Bulacan, PH",
      avatar: "/Client_3.jpeg",
      rating: 5,
      testimonial:
        "Baccarat Rouge Inspired is intoxicating — it lingers like a whispered caress and draws admiring compliments wherever I go",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
            Client <span style={{ color: colors.goldDark }}>Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
            variants={descriptionVariants}
          >
            Discover what our customers love about their favorite Aroma
            Scentique fragrances.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={gridVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              custom={index}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
