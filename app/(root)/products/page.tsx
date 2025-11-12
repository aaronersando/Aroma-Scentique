"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import ProductsHeroSection from "@/components/sections/products/ProductsHeroSection";
import GeneralFilterTabs from "@/components/common/GeneralFilterTabs";
import ProductSearch from "@/components/common/ProductSearch";
import CategoryFilter from "@/components/common/CategoryFilter";
import ProductSort from "@/components/common/ProductSort";
import ProductsList from "@/components/common/ProductsList";
import { products } from "@/lib/products";
import { colors } from "@/lib/colors";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (activeTab === "newarrivals") {
      filtered = filtered.filter((product) => product.newArrival);
    } else if (activeTab === "bestsellers") {
      filtered = filtered.filter((product) => product.bestSeller);
    } else if (activeTab === "featured") {
      filtered = filtered.filter((product) => product.featured);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeTab, selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <ProductsHeroSection />

      {/* Filters & Products Section */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: colors.background }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* General Filter Tabs */}
          <motion.div variants={itemVariants}>
            <GeneralFilterTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </motion.div>

          {/* Search Bar */}
          <motion.div className="mb-6" variants={itemVariants}>
            <ProductSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>

          {/* Mobile Filter & Sort Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-6 lg:hidden"
            variants={itemVariants}
          >
            <motion.div className="flex-1" whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full font-montserrat text-sm py-6 border-2"
                style={{
                  borderColor: colors.brown,
                  color: colors.brown,
                }}
              >
                <SlidersHorizontal className="mr-2" size={18} />
                Filter by Category
              </Button>
            </motion.div>

            <div className="flex-1 relative">
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="w-full font-montserrat text-sm py-6 border-2"
                  style={{
                    borderColor: colors.brown,
                    color: colors.brown,
                  }}
                >
                  Sort
                  <motion.div
                    animate={{ rotate: showSortDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-2" size={18} />
                  </motion.div>
                </Button>
              </motion.div>

              <AnimatePresence>
                {showSortDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg z-10 border-2"
                    style={{
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                    }}
                  >
                    <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Mobile Category Filter (Collapsible) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 lg:hidden overflow-hidden"
              >
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Layout */}
          <div className="flex gap-8">
            {/* Sidebar Filters (Desktop) */}
            <motion.aside
              className="hidden lg:block w-64 shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="sticky top-24 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3
                    className="text-lg font-playfair font-bold mb-4"
                    style={{ color: colors.primary }}
                  >
                    Category
                  </h3>
                  <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3
                    className="text-lg font-playfair font-bold mb-4"
                    style={{ color: colors.primary }}
                  >
                    Sort By
                  </h3>
                  <div
                    className="rounded-lg border-2"
                    style={{
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                    }}
                  >
                    <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
                  </div>
                </motion.div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProductsList products={filteredAndSortedProducts} />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Page;
