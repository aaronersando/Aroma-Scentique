"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactInfoCard from "@/components/cards/ContactInfoCard";
import ContactForm from "@/components/forms/ContactForm";
import { colors } from "@/lib/colors";

const ContactDetailsSection = () => {
  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      title: "Email",
      subtitle: "For general inquiries:",
      content: "aromascentiqueph@gmail.com",
      link: "mailto:aromascentiqueph@gmail.com",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      subtitle: "Customer Service:",
      content: "09696410409",
      link: "tel:09696410409",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      subtitle: "Visit Us:",
      content: "Rufina Golden Village, Malolos \nCity, Bulacan",
      link: null,
    },
    {
      id: 4,
      icon: Clock,
      title: "Hours",
      subtitle: "Business Hours:",
      content: "8:00 AM - 5:00 PM \n Everyday",
      link: null,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const infoBoxVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactInfo.map((info) => (
            <motion.div key={info.id} variants={cardVariants}>
              <ContactInfoCard {...info} />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ContactForm />
          </motion.div>

          {/* Map and Boutique Info */}
          <div>
            <motion.div
              className="rounded-2xl overflow-hidden mb-8 border-2"
              style={{ borderColor: colors.gold }}
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.864355603947!2d120.81494977487743!3d14.832869085681436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396523069434785%3A0xf9ae9c0c6c2e9aa5!2sRufina%20Golden%20Village!5e0!3m2!1sen!2sph!4v1761227197067!5m2!1sen!2sph"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80"
              />
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl border-2"
              style={{
                backgroundColor: colors.card,
                borderColor: colors.gold,
              }}
              variants={infoBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="text-2xl font-playfair font-bold mb-4"
                style={{ color: colors.primary }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Visit Our{" "}
                <span style={{ color: colors.goldDark }}>Boutique</span>
              </motion.h3>
              <motion.p
                className="text-base font-inter mb-6 leading-relaxed"
                style={{ color: colors.foreground }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Discover our handcrafted perfumes inspired by world-class
                fragrances. Experience them in person through meetups or local
                pop-ups, where we&apos;ll help you find the scent that truly
                defines you.
              </motion.p>
              <motion.p
                className="text-base font-inter mb-4 leading-relaxed"
                style={{ color: colors.foreground }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                For collaborations, custom scent requests, or upcoming events,
                feel free to reach out — we&apos;d love to connect!
              </motion.p>
              <div className="mt-6">
                <motion.h4
                  className="text-lg font-playfair font-semibold mb-3"
                  style={{ color: colors.primary }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Special Services
                </motion.h4>
                <ul className="space-y-2">
                  {[
                    "Personalized scent matching and recommendations",
                    "Custom perfume blends (limited availability)",
                    "Pop-up sampling events and brand collaborations",
                  ].map((service, index) => (
                    <motion.li
                      key={index}
                      className="text-sm font-inter flex items-start"
                      style={{ color: colors.mutedForeground }}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <span className="mr-2" style={{ color: colors.goldDark }}>
                        •
                      </span>
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
