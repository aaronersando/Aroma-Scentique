import React from "react";
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";
import ExploreSection from "@/components/sections/home/ExploreSection";
import TheArtSection from "@/components/sections/home/TheArtSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

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
