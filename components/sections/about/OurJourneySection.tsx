"use client";

import React from "react";
import { motion } from "motion/react";
import JourneyCard from "@/components/cards/JourneyCard";
import { colors } from "@/lib/colors";

const OurJourneySection = () => {
  const journeyMilestones = [
    {
      id: 1,
      year: "2024",
      title: "The Beginning",
      description:
        "Aroma Scentique was born from a dream to bring handcrafted, globally inspired perfumes to local scent lovers. After months of testing and perfecting small batches, our first blends came to life — a mix of creativity, confidence, and artistry.",
      image:
        "https://images.unsplash.com/photo-1611934180042-da791b4091e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZ2lubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 2,
      year: "2024",
      title: "First Collection Launch",
      description:
        "We proudly released our first signature line, inspired by timeless perfumes worldwide. Each scent told a story — crafted to reflect elegance, warmth, and individuality.",
      image:
        "https://images.unsplash.com/photo-1647951681118-f89d0eef3a1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmlyc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 3,
      year: "2024",
      title: "Building Our Brand",
      description:
        "Through social media, word-of-mouth, and pop-up stalls, we began connecting with a growing community of fragrance lovers who shared our belief that luxury can be simple and sincere.",
      image:
        "https://images.unsplash.com/photo-1517768692594-b4295586b7d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 4,
      year: "2025",
      title: "Growing Locally",
      description:
        "By early 2025, our perfumes reached more customers through online sales and local shop collaborations. Every review and returning customer strengthened our mission to make quality scents for all.",
      image:
        "https://images.unsplash.com/photo-1598258710957-db8614c2881e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuaWxhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 5,
      year: "2025",
      title: "Crafting Our Identity",
      description:
        "As we evolve, we continue refining our formulas, improving sustainability, and shaping a clear, authentic brand identity — all while staying true to our roots in craftsmanship and creativity.",
      image:
        "https://images.unsplash.com/photo-1628927124199-a8a2a5394392?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JhZnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 6,
      year: "2025",
      title: "Looking Ahead",
      description:
        "The journey has just begun. We're working to expand our collections, offer customizable fragrances, and reach more perfume lovers across the Philippines — keeping passion, quality, and sincerity at the heart of everything we do.",
      image:
        "https://images.unsplash.com/photo-1528368250370-51fa780d345b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9va2luZyUyMGFoZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Our <span style={{ color: colors.goldDark }}>Journey</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            Aroma Scentique&apos;s story is still unfolding. From humble
            beginnings in 2024 to steady growth in 2025, every step has been
            guided by passion, creativity, and community.
          </p>
        </motion.div>

        <div className="space-y-8">
          {journeyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <JourneyCard {...milestone} isReversed={index % 2 !== 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
