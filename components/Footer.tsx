"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

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
              Artisanal perfumes inspired by nature. Discover our top picks and
              signature scents.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D2E24] hover:text-[#4A3426] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D2E24] hover:text-[#4A3426] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D2E24] hover:text-[#4A3426] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={1.5} />
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
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=women"
                  className="text-[#5C5049] text-sm font-inter hover:text-[#3D2E24] transition-colors"
                >
                  Women
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-[#4A3426] font-playfair text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-[#5C5049] text-sm mb-4 font-inter leading-relaxed">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 bg-white border border-[#C2B8AE] text-[#3D2E24] text-sm font-inter placeholder:text-[#75695E] focus:outline-none focus:border-[#4A3426] transition-colors rounded-xl"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#6B4A2F] text-[#FAF8F6] font-montserrat text-sm font-medium hover:bg-[#4D3321] transition-colors whitespace-nowrap rounded-xl"
              >
                Subscribe
              </button>
            </form>
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
