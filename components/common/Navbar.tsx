"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "motion/react";

const navVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      when: "beforeChildren",
      ease: "easeOut",
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const linksContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, ease: "easeOut" },
  },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: "easeOut" },
  },
  hover: {
    y: -3,
    scale: 1.01,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  closed: { rotate: 0, scale: 1 },
  open: { rotate: 90, scale: 1.02 },
  press: { scale: 0.98 },
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <motion.nav
      className="bg-[#EBE5E0] border-b border-[#C2B8AE] sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <motion.span
              variants={logoVariants}
              className="text-[#4A3426] font-playfair text-2xl sm:text-3xl font-bold "
            >
              Aroma
            </motion.span>
            <motion.span
              variants={logoVariants}
              className="text-[#A68A5E] pt-3 font-great-vibes text-3xl sm:text-4xl md:text-5xl"
              aria-hidden
            >
              Scentique
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-10 xl:gap-12"
            variants={linksContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={linkItem}
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/"
                className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#51361F] transition-colors relative group ${
                  isActive("/") ? "text-[#4A3426]" : ""
                }`}
              >
                HOME
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left"
                  style={{ transformOrigin: "left" }}
                  initial={false}
                  animate={{ scaleX: isActive("/") ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={linkItem}
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/products"
                className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#51361F] transition-colors relative group ${
                  isActive("/products") ? "text-[#4A3426]" : ""
                }`}
              >
                PRODUCTS
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left"
                  style={{ transformOrigin: "left" }}
                  initial={false}
                  animate={{ scaleX: isActive("/products") ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={linkItem}
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/about"
                className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#4A3426] transition-colors relative group ${
                  isActive("/about") ? "text-[#4A3426]" : ""
                }`}
              >
                ABOUT
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left"
                  style={{ transformOrigin: "left" }}
                  initial={false}
                  animate={{ scaleX: isActive("/about") ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={linkItem}
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/contact"
                className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#51361F] transition-colors relative group ${
                  isActive("/contact") ? "text-[#4A3426]" : ""
                }`}
              >
                CONTACT
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left"
                  style={{ transformOrigin: "left" }}
                  initial={false}
                  animate={{ scaleX: isActive("/contact") ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-[#6B4A2F] text-[#6B4A2F] font-montserrat text-sm font-medium uppercase tracking-wide rounded-xl hover:bg-[#3D2E24] hover:text-[#FAF8F6] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#3D2E24]"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            variants={buttonVariants}
            animate={isMenuOpen ? "open" : "closed"}
            whileTap="press"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.16 }}
                />
              ) : (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.16 }}
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-[#C2B8AE] -mx-4 sm:-mx-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col">
              <motion.div
                variants={linkItem}
                initial="hidden"
                animate="visible"
                whileHover={{ backgroundColor: "#D6CEC6" }}
                className={`transition-colors ${
                  isActive("/") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide py-3 block text-center w-full"
                >
                  HOME
                </Link>
              </motion.div>

              <motion.div
                variants={linkItem}
                initial="hidden"
                animate="visible"
                whileHover={{ backgroundColor: "#D6CEC6" }}
                className={`transition-colors ${
                  isActive("/products") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide py-3 block text-center w-full"
                >
                  PRODUCTS
                </Link>
              </motion.div>

              <motion.div
                variants={linkItem}
                initial="hidden"
                animate="visible"
                whileHover={{ backgroundColor: "#D6CEC6" }}
                className={`transition-colors ${
                  isActive("/about") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide py-3 block text-center w-full"
                >
                  ABOUT
                </Link>
              </motion.div>

              <motion.div
                variants={linkItem}
                initial="hidden"
                animate="visible"
                whileHover={{ backgroundColor: "#D6CEC6" }}
                className={`transition-colors ${
                  isActive("/contact") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide py-3 block text-center w-full"
                >
                  CONTACT
                </Link>
              </motion.div>

              <motion.div
                variants={linkItem}
                initial="hidden"
                animate="visible"
                className="px-4 sm:px-6 mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-5 py-2.5 border border-[#6B4A2F] text-[#6B4A2F] font-montserrat text-sm font-medium uppercase tracking-wide rounded-xl text-center hover:bg-[#6B4A2F] hover:text-[#FAF8F6] transition-all duration-300 block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
