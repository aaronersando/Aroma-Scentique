"use client";

import React from "react";
import JourneyCard from "@/components/cards/JourneyCard";
import { colors } from "@/lib/colors";

const OurJourneySection = () => {
  const journeyMilestones = [
    {
      id: 1,
      year: "2024",
      title: "The Beginning",
      description:
        "Aroma Scentique was founded with a dream to create handcrafted perfumes that blend premium quality with affordability. Starting from small batches, we aimed to make every scent a reflection of confidence and individuality.",
      image:
        "https://images.unsplash.com/photo-1611934180042-da791b4091e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZ2lubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 2,
      year: "2024",
      title: "First Collection Launch",
      description:
        "After months of testing and refining, our first signature collection was born — each scent designed to evoke emotion and self-expression for every personality.",
      image:
        "https://images.unsplash.com/photo-1647951681118-f89d0eef3a1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmlyc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 3,
      year: "2024",
      title: "Building Our Brand",
      description:
        "Through social media and pop-up sales, Aroma Scentique found its growing community. Every review and purchase inspired us to keep perfecting our craft.",
      image:
        "https://images.unsplash.com/photo-1517768692594-b4295586b7d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 4,
      year: "2025",
      title: "Growing Locally",
      description:
        "With more customers discovering our scents, we expanded through online sales and local retail partners, bringing artisanal perfumes closer to every Filipino.",
      image:
        "https://images.unsplash.com/photo-1598258710957-db8614c2881e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuaWxhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 5,
      year: "2025",
      title: "Crafting Our Identity",
      description:
        "We focused on improving quality, sustainability, and our brand identity — staying true to our mission of creating scents that represent authenticity and emotion.",
      image:
        "https://images.unsplash.com/photo-1628927124199-a8a2a5394392?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JhZnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      id: 6,
      year: "2025",
      title: "Looking Ahead",
      description:
        "As we continue to grow, we aim to expand our collection and offer customizable fragrances — sharing the art of affordable luxury with more people nationwide.",
      image:
        "https://images.unsplash.com/photo-1528368250370-51fa780d345b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9va2luZyUyMGFoZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            Aroma Scentique’s story is still unfolding. From humble beginnings
            in 2024 to steady growth in 2025, every step has been guided by
            passion, creativity, and community.
          </p>
        </div>

        <div className="space-y-8">
          {journeyMilestones.map((milestone, index) => (
            <JourneyCard
              key={milestone.id}
              {...milestone}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
