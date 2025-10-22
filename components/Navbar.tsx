"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#EBE5E0] border-b border-[#C2B8AE] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-[#4A3426] font-playfair text-2xl sm:text-3xl font-bold ">
              Aroma
            </span>
            <span className="text-[#A68A5E] pt-3 font-great-vibes text-3xl sm:text-4xl md:text-5xl">
              Scentique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12">
            <Link
              href="/"
              className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#51361F] transition-colors relative group ${
                isActive("/") ? "text-[#4A3426]" : ""
              }`}
            >
              HOME
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left ${
                  isActive("/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/products"
              className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#51361F] transition-colors relative group ${
                isActive("/products") ? "text-[#4A3426]" : ""
              }`}
            >
              PRODUCTS
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left ${
                  isActive("/products")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/about"
              className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#4A3426] transition-colors relative group ${
                isActive("/about") ? "text-[#4A3426]" : ""
              }`}
            >
              ABOUT
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left ${
                  isActive("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/contact"
              className={`text-[#3D2E24] font-montserrat text-sm font-semibold uppercase tracking-wide hover:text-[#51361F] transition-colors relative group ${
                isActive("/contact") ? "text-[#4A3426]" : ""
              }`}
            >
              CONTACT
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4B896] transition-transform origin-left ${
                  isActive("/contact")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden lg:block px-5 py-2.5 border border-[#6B4A2F] text-[#6B4A2F] font-montserrat text-sm font-medium uppercase tracking-wide rounded-xl hover:bg-[#3D2E24] hover:text-[#FAF8F6] transition-all duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#3D2E24]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#C2B8AE]">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide px-4 py-2 ${
                  isActive("/") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                HOME
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide px-4 py-2 ${
                  isActive("/products") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                PRODUCTS
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide px-4 py-2 ${
                  isActive("/about") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-[#3D2E24] font-montserrat text-sm font-medium uppercase tracking-wide px-4 py-2 ${
                  isActive("/contact") ? "bg-[#D6CEC6]" : ""
                }`}
              >
                CONTACT
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 px-5 py-2.5 border border-[#6B4A2F] text-[#6B4A2F] font-montserrat text-sm font-medium uppercase tracking-wide rounded-xl text-center hover:bg-[#6B4A2F] hover:text-[#FAF8F6] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
