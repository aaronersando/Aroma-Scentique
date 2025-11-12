"use client";

import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Heart, Leaf } from "lucide-react";

const VisionMissionSection = () => {
  const values = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Innovation",
      description: "Blending creativity with timeless perfumery techniques.",
    },
    {
      id: 2,
      icon: Heart,
      title: "Passion",
      description:
        "Every fragrance is crafted with love and dedication to the art.",
    },
    {
      id: 3,
      icon: Target,
      title: "Excellence",
      description: "Upholding uncompromised quality in every detail.",
    },
    {
      id: 4,
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to ethical sourcing and environmental responsibility.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3
            className="text-3xl md:text-4xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Our Core <span style={{ color: colors.goldDark }}>Values</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className="border hover:shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                        style={{ backgroundColor: colors.goldLight }}
                      >
                        <IconComponent
                          size={32}
                          style={{ color: colors.goldDark }}
                        />
                      </motion.div>
                      <h4
                        className="text-xl font-playfair font-bold mb-3"
                        style={{ color: colors.primary }}
                      >
                        {value.title}
                      </h4>
                      <p
                        className="text-sm font-inter leading-relaxed"
                        style={{ color: colors.mutedForeground }}
                      >
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="border-2"
                style={{
                  backgroundColor: colors.card,
                  borderColor: colors.gold,
                }}
              >
                <CardContent className="p-8 md:p-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 mb-6"
                    style={{ backgroundColor: colors.gold }}
                  />
                  <h3
                    className="text-3xl md:text-4xl font-playfair font-bold mb-6"
                    style={{ color: colors.primary }}
                  >
                    Our <span style={{ color: colors.goldDark }}>Vision</span>
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base font-inter leading-relaxed"
                    style={{ color: colors.foreground }}
                  >
                    To be a trusted Filipino perfume brand that inspires
                    confidence and individuality through scent — proving that
                    quality fragrance can be both luxurious and accessible.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="border-2"
                style={{
                  backgroundColor: colors.card,
                  borderColor: colors.gold,
                }}
              >
                <CardContent className="p-8 md:p-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 mb-6"
                    style={{ backgroundColor: colors.gold }}
                  />
                  <h3
                    className="text-3xl md:text-4xl font-playfair font-bold mb-6"
                    style={{ color: colors.primary }}
                  >
                    Our <span style={{ color: colors.goldDark }}>Mission</span>
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base font-inter leading-relaxed"
                    style={{ color: colors.foreground }}
                  >
                    To craft exceptional perfumes inspired by global luxury
                    fragrances — using fine, ethically sourced ingredients while
                    making every scent accessible, expressive, and enduring.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
