import React from "react";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import ContactDetailsSection from "@/components/sections/contact/ContactDetailsSection";
import FAQSection from "@/components/sections/contact/FAQSection";

export const metadata = {
  title: "Contact Us - Aroma Scentique",
  description:
    "Get in touch with Aroma Scentique. We're here to answer your questions and help you find the perfect fragrance.",
};

const Page = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactDetailsSection />
      <FAQSection />
    </>
  );
};

export default Page;
