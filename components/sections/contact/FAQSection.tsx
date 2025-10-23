"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FAQCard from "@/components/cards/FAQCard";
import { colors } from "@/lib/colors";

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. We use premium carriers to ensure your fragrances arrive in perfect condition, typically within 7-14 business days depending on the destination. Please view our shipping policy for more details.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of delivery for unopened products in their original packaging. Due to the nature of fragrances, we cannot accept returns of opened or used products unless they are defective. Please contact our customer service team to initiate a return process.",
    },
    {
      id: 3,
      question: "Do you offer samples?",
      answer:
        "Yes, we offer a discovery set that includes samples of our signature fragrances. This curated collection allows you to experience our scents before committing to a full-size bottle. You can also request specific samples with any full-size purchase, and our boutique visitors receive complimentary samples with every visit.",
    },
    {
      id: 4,
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely. We do not test on animals and work only with suppliers who adhere to the same ethical standards. Our commitment to ethical practices extends throughout our supply chain, from ingredient sourcing to manufacturing and packaging. All our products are certified cruelty-free by recognized international organizations.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Frequently Asked{" "}
            <span style={{ color: colors.goldDark }}>Questions</span>
          </h2>
          <p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
          >
            Find answers to our most commonly asked questions. If you don&apos;t
            see what you&apos;re looking for, please don&apos;t hesitate to
            contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq) => (
            <FAQCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center">
          <p
            className="text-base font-inter mb-6"
            style={{ color: colors.foreground }}
          >
            Don&apos;t see your question here? Our customer service team is
            ready to assist you with any inquiries.
          </p>
          <Button
            size="lg"
            className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: colors.brown,
              color: colors.primaryForeground,
            }}
          >
            Email Customer Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
