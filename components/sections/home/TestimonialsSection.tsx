"use client";

import React from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { colors } from "@/lib/colors";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Christian Vargas",
      location: "Bulacan, PH",
      avatar: "https://i.pravatar.cc/150?img=20",
      rating: 5,
      testimonial:
        "Invictus Inspired is my everyday scent now — fresh, powerful, and lasts all day. Totally worth it!",
    },
    {
      id: 2,
      name: "Luis M. Cruz",
      location: "Pampanga, PH",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      testimonial:
        "I love YSL Libre Inspired! It smells luxurious and elegant, just like the original, but more affordable.",
    },
    {
      id: 3,
      name: "Patrick Jerome Custodio",
      location: "Manila, PH",
      avatar: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      testimonial:
        "Acqua Di Gio Inspired smells premium and clean. My friends can’t even tell it’s not the designer one.",
    },
    {
      id: 4,
      name: "Aldrin San Pedro",
      location: "Malolos, Bulacan",
      avatar: "https://i.pravatar.cc/150?img=56",
      rating: 5,
      testimonial:
        "Baccarat Rouge Inspired is stunning — it lingers beautifully and gets me compliments every time.",
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
            Client <span style={{ color: colors.goldDark }}>Testimonials</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            Discover what our customers love about their favorite Aroma
            Scentique fragrances.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
