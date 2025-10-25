import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const NotFound = () => {
  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-6xl md:text-7xl font-playfair font-bold mb-6"
          style={{ color: colors.primary }}
        >
          404
        </h1>
        <h2
          className="text-3xl md:text-4xl font-playfair font-bold mb-6"
          style={{ color: colors.goldDark }}
        >
          Page Not Found
        </h2>
        <p
          className="text-base md:text-lg font-inter mb-8 leading-relaxed"
          style={{ color: colors.mutedForeground }}
        >
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to discovering beautiful fragrances.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: colors.brown,
                color: colors.primaryForeground,
              }}
            >
              Go Home
            </Button>
          </Link>
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 border-2 rounded-md transition-all"
              style={{
                borderColor: colors.brown,
                color: colors.brown,
              }}
            >
              Browse Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
