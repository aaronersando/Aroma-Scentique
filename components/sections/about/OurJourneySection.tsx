"use client";

import React from "react";
import JourneyCard from "@/components/cards/JourneyCard";
import { colors } from "@/lib/colors";

const OurJourneySection = () => {
  const journeyMilestones = [
    {
      id: 1,
      year: "2010",
      title: "The Beginning",
      description:
        "Claire Laurent establishes Aroma Scentique in a small Parisian atelier, launching the first collection of three signature scents. Her vision was to create fragrances that tell stories, evoke emotions, and transport the wearer to different times and places.",
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      year: "2013",
      title: "International Recognition",
      description:
        "Our signature scent 'Rose Velvet' wins the prestigious FiFi Award, bringing international recognition to the brand. This accolade solidified our reputation in the fragrance industry and opened doors to new markets and collaborations with renowned artisans and designers.",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      year: "2016",
      title: "Expansion",
      description:
        "Aroma Scentique opens its flagship boutique in the heart of Paris, featuring an in-store perfume laboratory where customers can witness the creation process. This innovative approach to retail allowed clients to experience the art of perfumery firsthand and even participate in custom scent creation workshops led by our master perfumers.",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      year: "2019",
      title: "Sustainability Initiative",
      description:
        "Launch of our sustainability initiative, committing to ethical sourcing, eco-friendly packaging, and supporting communities where our ingredients are grown. We established direct partnerships with farmers in regions known for their exceptional botanical ingredients, ensuring fair compensation and sustainable cultivation practices while preserving traditional harvesting methods.",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      year: "2022",
      title: "Global Presence",
      description:
        "Expansion to 15 countries worldwide with boutiques in major fashion capitals including New York, London, Milan, Tokyo, and Dubai. Our global presence allows us to share our artisanal approach to perfumery with fragrance enthusiasts around the world while maintaining our commitment to quality and authenticity.",
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
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
            From our humble beginnings to international recognition, our journey
            has been defined by passion, craftsmanship, and a commitment to
            excellence.
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
