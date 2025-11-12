"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FAQCard from "@/components/cards/FAQCard";
import { colors } from "@/lib/colors";

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "Do you have a physical store?",
      answer:
        "Not yet! We currently sell online and through local pop-ups, partner or you can visit us directly in our subdivision. Follow us on social media for updates on upcoming events and future boutique plans.",
    },
    {
      id: 2,
      question: "Can I return or exchange my order?",
      answer:
        "We accept returns or replacements for damaged or defective products within 7 days of delivery. Due to hygiene reasons, opened perfumes cannot be returned unless there's an issue with the product.",
    },
    {
      id: 3,
      question: "Do you sell perfume testers or samples?",
      answer:
        "Yes! We offer mini or sample bottles so you can try our scents before purchasing a full-sized one. You can also receive free samples with certain orders or during our pop-up events.",
    },
    {
      id: 4,
      question: "Are your perfumes cruelty-free?",
      answer:
        "Absolutely. We do not test on animals and ensure that our ingredients come from trusted, ethical suppliers.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      id="faq"
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
          <a
            href="mailto:aromascentiqueph@gmail.com?subject=Customer%20Service%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
