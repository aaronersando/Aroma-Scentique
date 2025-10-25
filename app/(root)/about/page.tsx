import React from "react";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import OurStorySection from "@/components/sections/about/OurStorySection";
import TheBeginningSection from "@/components/sections/about/TheBeginningSection";
import OurJourneySection from "@/components/sections/about/OurJourneySection";
import MeetFounderSection from "@/components/sections/about/MeetFounderSection";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import ExperienceSection from "@/components/sections/about/ExperienceSection";

export const metadata = {
  title: "About Us - Aroma Scentique",
  description:
    "Discover the story behind Aroma Scentique, our journey, founder, and commitment to creating exceptional artisanal fragrances.",
};

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <TheBeginningSection />
      <OurJourneySection />
      <MeetFounderSection />
      <VisionMissionSection />
      <ExperienceSection />
    </>
  );
};

export default AboutPage;
