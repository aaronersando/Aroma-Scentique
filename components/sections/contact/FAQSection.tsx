"use client";

import React from "react";
import { motion, Variants } from "motion/react";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      id="faq"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            style={{ color: colors.primary }}
            variants={titleVariants}
          >
            Frequently Asked{" "}
            <motion.span
              style={{ color: colors.goldDark }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Questions
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg font-inter max-w-3xl mx-auto"
            style={{ color: colors.mutedForeground }}
            variants={headerVariants}
          >
            Find answers to our most commonly asked questions. If you don&apos;t
            see what you&apos;re looking for, please don&apos;t hesitate to
            contact us directly.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq) => (
            <motion.div key={faq.id} variants={cardVariants}>
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-base font-inter mb-6"
            style={{ color: colors.foreground }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don&apos;t see your question here? Our customer service team is
            ready to assist you with any inquiries.
          </motion.p>
          <motion.a
            href="mailto:aromascentiqueph@gmail.com?subject=Customer%20Service%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
