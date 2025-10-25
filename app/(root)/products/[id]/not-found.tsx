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
          Fragrance Not Found
        </h2>
        <p
          className="text-base md:text-lg font-inter mb-8 leading-relaxed"
          style={{ color: colors.mutedForeground }}
        >
          The fragrance you&apos;re looking for doesn&apos;t exist or has been
          discontinued. Explore our collection to discover other captivating
          scents.
        </p>
        <Link href="/products">
          <Button
            size="lg"
            className="font-montserrat uppercase tracking-wide text-sm px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: colors.brown,
              color: colors.primaryForeground,
            }}
          >
            Browse Collection
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
