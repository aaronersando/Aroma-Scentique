import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import ExploreSection from "@/components/sections/ExploreSection";
import TheArtSection from "@/components/sections/TheArtSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <ExploreSection />
      <TheArtSection />
      <TestimonialsSection />
    </>
  );
}
