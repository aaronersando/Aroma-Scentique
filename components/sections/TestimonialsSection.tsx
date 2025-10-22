"use client";

import React from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { colors } from "@/lib/colors";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Reynolds",
      location: "New York, USA",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      testimonial:
        "The Rose Velvet fragrance is absolutely divine. It lasts all day and I receive compliments every time I wear it. Truly a masterpiece.",
    },
    {
      id: 2,
      name: "James Mitchell",
      location: "London, UK",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      testimonial:
        "Cedar Noir has become my signature scent. The woody notes with hints of spice create a sophisticated fragrance that is perfect for any occasion.",
    },
    {
      id: 3,
      name: "Elena Moretti",
      location: "Milan, Italy",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      testimonial:
        "I've tried many luxury perfumes, but Amber Oud from Aroma Scentique stands out. The blend of exotic spices and resinous notes is unparalleled.",
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
            Discover what our clients have to say about their experience with
            our artisanal fragrances.
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
