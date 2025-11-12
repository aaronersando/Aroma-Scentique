"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { motion, type Variants } from "motion/react";

const Footer = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants: Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const linkVariants: Variants = {
    rest: { x: 0, color: "#5C5049" },
    hover: {
      x: 3,
      color: "#3D2E24",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const disclaimerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 0.4,
      },
    },
  };

  const dividerVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 0.6,
      },
    },
  };

  return (
    <footer className="bg-[#DDD5CE] border-t border-[#C2B8AE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <motion.span
                className="text-[#4A3426] font-playfair text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Aroma
              </motion.span>
              <motion.span
                className="text-[#A68A5E] pt-3 font-great-vibes text-3xl sm:text-4xl md:text-5xl"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                Scentique
              </motion.span>
            </Link>
            <motion.p
              className="text-[#5C5049] text-sm mb-6 font-inter leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Inspired by the world&apos;s most captivating perfumes, Aroma
              Scentique brings you artisanal scents that tell a story.
            </motion.p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <motion.div
                variants={socialIconVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="https://www.facebook.com/share/19nQfuAtBG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3D2E24] hover:text-[#4A3426] transition-colors block"
                  aria-label="Facebook"
                >
                  <Facebook size={20} strokeWidth={1.5} />
                </Link>
              </motion.div>
              <motion.div
                variants={socialIconVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="https://www.instagram.com/aroma_scentique?igsh=dmxsbnMzZ2M1OTIw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3D2E24] hover:text-[#4A3426] transition-colors block"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </Link>
              </motion.div>
              <motion.div
                variants={socialIconVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="https://www.linkedin.com/in/josh-lendl-cagara-230020365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3D2E24] hover:text-[#4A3426] transition-colors block"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contact Us", isLink: true },
                { href: "/contact#faq", label: "FAQs", isLink: true },
                {
                  href: "mailto:aromascentiqueph@gmail.com",
                  label: "Email Support",
                  isLink: false,
                },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {link.isLink ? (
                      <Link
                        href={link.href}
                        className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors inline-block"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Fragrances */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Our Fragrances
            </h3>
            <motion.p
              className="text-[#5C5049] text-sm font-inter leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Handcrafted interpretations of luxury perfumes available in{" "}
              <span className="font-semibold text-[#3D2E24]">10ml & 50ml</span>{" "}
              bottles. Artisanal fragrances for both men and women, inspired by
              iconic scents.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Horizontal Disclaimer Section */}
        <motion.div
          variants={disclaimerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.div
            className="bg-[#C2B8AE] bg-opacity-30 rounded-lg px-6 py-4 border border-[#A68A5E]"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#5C5049] text-xs font-inter leading-relaxed text-center max-w-5xl mx-auto">
              <strong className="text-[#3D2E24]">Disclaimer:</strong> Aroma
              Scentique perfumes are inspired interpretations of designer
              fragrances and are not affiliated with original brands. Product
              images shown are for inspiration only; actual bottles are small{" "}
              <span className="font-semibold text-[#3D2E24]">
                10ml and 50ml
              </span>{" "}
              sizes, not the original packaging. All trademarks belong to their
              respective owners.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-[#C2B8AE] flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ originX: 0 }}
        >
          <motion.p
            className="text-[#5C5049] text-sm font-inter text-center sm:text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            © 2025 Aroma Scentique. All rights reserved.
          </motion.p>
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
