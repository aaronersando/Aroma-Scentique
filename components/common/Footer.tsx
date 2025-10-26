"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#DDD5CE] border-t border-[#C2B8AE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-[#4A3426] font-playfair text-2xl font-bold">
                Aroma
              </span>
              <span className="text-[#A68A5E] pt-3 font-great-vibes text-3xl sm:text-4xl md:text-5xl">
                Scentique
              </span>
            </Link>
            <p className="text-[#5C5049] text-sm mb-6 font-inter leading-relaxed">
              Inspired by the world&apos;s most captivating perfumes, Aroma
              Scentique brings you artisanal scents that tell a story.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/19nQfuAtBG/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D2E24] hover:text-[#4A3426] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.instagram.com/aroma_scentique?igsh=dmxsbnMzZ2M1OTIw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D2E24] hover:text-[#4A3426] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/josh-lendl-cagara-230020365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D2E24] hover:text-[#4A3426] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=men"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Men&apos;s Fragrances
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=women"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Women&apos;s Fragrances
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#faq"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href="mailto:aromascentiqueph@gmail.com"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Disclaimer Section */}
        <div className="mb-8">
          <div className="bg-[#C2B8AE] bg-opacity-30 rounded-lg p-6 border border-[#A68A5E]">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-3">
              Important Notice
            </h3>
            <p className="text-[#5C5049] text-sm font-inter leading-relaxed mb-2">
              <strong className="text-[#3D2E24]">Disclaimer:</strong> Aroma
              Scentique perfumes are inspired by popular designer fragrances but
              are not affiliated with, manufactured by, or sold by the original
              brand owners. Our products are handcrafted interpretations created
              with high-quality ingredients and are available exclusively in{" "}
              <span className="font-semibold text-[#3D2E24]">
                10ml and 50ml
              </span>{" "}
              bottles.
            </p>
            <p className="text-[#5C5049] text-sm font-inter leading-relaxed">
              We take pride in crafting affordable, artisanal fragrances that
              capture the essence of luxury while remaining accessible to
              everyone. All trademarks and brand names mentioned belong to their
              respective owners.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#C2B8AE] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#5C5049] text-sm font-inter text-center sm:text-left">
            © 2025 Aroma Scentique. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
