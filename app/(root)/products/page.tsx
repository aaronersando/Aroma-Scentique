"use client";

import React, { useState, useMemo } from "react";
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

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by general tab (all, newarrivals, bestsellers, featured)
    if (activeTab === "newarrivals") {
      filtered = filtered.filter((product) => product.newArrival);
    } else if (activeTab === "bestsellers") {
      filtered = filtered.filter((product) => product.bestSeller);
    } else if (activeTab === "featured") {
      filtered = filtered.filter((product) => product.featured);
    }

    // Filter by category (MEN/WOMEN)
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Sort products
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Filter Tabs */}
          <GeneralFilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Search Bar */}
          <div className="mb-6">
            <ProductSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {/* Mobile Filter & Sort Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex-1 font-montserrat text-sm py-6 border-2"
              style={{
                borderColor: colors.brown,
                color: colors.brown,
              }}
            >
              <SlidersHorizontal className="mr-2" size={18} />
              Filter by Category
            </Button>

            <div className="flex-1 relative">
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
                <ChevronDown className="ml-2" size={18} />
              </Button>

              {showSortDropdown && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg z-10 border-2"
                  style={{
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                  }}
                >
                  <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Category Filter (Collapsible) */}
          {showFilters && (
            <div className="mb-6 lg:hidden">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          )}

          {/* Desktop Layout */}
          <div className="flex gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div>
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
                </div>

                <div>
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
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <ProductsList products={filteredAndSortedProducts} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
