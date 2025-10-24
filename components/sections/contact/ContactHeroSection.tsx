"use client";

import React from "react";
import { colors } from "@/lib/colors";

const ContactHeroSection = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          style={{ color: colors.primary }}
        >
          Contact <span style={{ color: colors.goldDark }}>Us</span>
        </h1>
        <div
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl"
          style={{
            backgroundColor: colors.gold,
          }}
        >
          <p
            className="text-base md:text-lg font-inter mb-6 leading-relaxed"
            style={{ color: colors.primary }}
          >
            We’d love to hear from you! Whether you’re curious about our scents,
            need help with your order, or want to collaborate, our small yet
            passionate team is always ready to assist.
          </p>
          <p
            className="text-base md:text-lg font-inter leading-relaxed"
            style={{ color: colors.primary }}
          >
            At Aroma Scentique, every message matters — we give each customer
            the same care and attention we pour into every bottle of perfume.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
