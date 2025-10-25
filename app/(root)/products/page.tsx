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
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by general tab
    if (activeTab === "bestsellers") {
      filtered = filtered.filter((p) => p.bestSeller);
    } else if (activeTab === "featured") {
      filtered = filtered.filter((p) => p.featured);
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "bestsellers") {
      filtered.sort((a, b) => {
        if (a.bestSeller && !b.bestSeller) return -1;
        if (!a.bestSeller && b.bestSeller) return 1;
        return 0;
      });
    } else if (sortBy === "featured") {
      filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
    }

    return filtered;
  }, [activeTab, selectedCategory, searchQuery, sortBy]);

  const getSortLabel = () => {
    switch (sortBy) {
      case "featured":
        return "Featured";
      case "name-asc":
        return "Name: A-Z";
      case "name-desc":
        return "Name: Z-A";
      case "bestsellers":
        return "Best Sellers";
      default:
        return "Featured";
    }
  };

  return (
    <>
      <ProductsHeroSection />
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Filter Tabs */}
          <GeneralFilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Search Bar with Filter and Sort Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Search Input */}
            <div className="flex-1">
              <ProductSearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Filter Button */}
            <Button
              onClick={() => {
                setShowFilters(!showFilters);
                setShowSortDropdown(false);
              }}
              className="h-14 px-6 font-montserrat text-sm font-semibold uppercase tracking-wide rounded-xl transition-all duration-300"
              style={{
                backgroundColor: showFilters ? colors.brown : colors.card,
                color: showFilters ? colors.primaryForeground : colors.primary,
                border: `2px solid ${colors.border}`,
              }}
            >
              <SlidersHorizontal className="mr-2" size={20} />
              Filters
            </Button>

            {/* Sort By Button */}
            <div className="relative">
              <Button
                onClick={() => {
                  setShowSortDropdown(!showSortDropdown);
                  setShowFilters(false);
                }}
                className="h-14 px-6 font-montserrat text-sm font-semibold uppercase tracking-wide rounded-xl transition-all duration-300 w-full sm:w-auto"
                style={{
                  backgroundColor: showSortDropdown
                    ? colors.brown
                    : colors.card,
                  color: showSortDropdown
                    ? colors.primaryForeground
                    : colors.primary,
                  border: `2px solid ${colors.border}`,
                }}
              >
                Sort By
                <ChevronDown
                  className="ml-2"
                  size={20}
                  style={{
                    transform: showSortDropdown
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Button>

              {/* Sort Dropdown */}
              {showSortDropdown && (
                <div
                  className="absolute right-0 top-full mt-2 w-64 rounded-xl shadow-2xl z-50 overflow-hidden"
                  style={{
                    backgroundColor: colors.card,
                    border: `2px solid ${colors.border}`,
                  }}
                >
                  <ProductSort
                    sortBy={sortBy}
                    onSortChange={(value) => {
                      setSortBy(value);
                      setShowSortDropdown(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Category Filter - Shows when filter button is clicked */}
          {showFilters && (
            <div className="mb-6 animate-in slide-in-from-top-4 duration-300">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          )}

          {/* Product Count and Current Sort Display */}
          <div className="flex items-center justify-between mb-6">
            <p
              className="text-sm font-inter"
              style={{ color: colors.mutedForeground }}
            >
              Showing{" "}
              <span className="font-semibold" style={{ color: colors.primary }}>
                {filteredAndSortedProducts.length}
              </span>{" "}
              {filteredAndSortedProducts.length === 1 ? "product" : "products"}
            </p>
            <p
              className="text-sm font-inter hidden sm:block"
              style={{ color: colors.mutedForeground }}
            >
              Sorted by:{" "}
              <span className="font-semibold" style={{ color: colors.primary }}>
                {getSortLabel()}
              </span>
            </p>
          </div>

          {/* Products List */}
          <ProductsList products={filteredAndSortedProducts} />
        </div>
      </section>
    </>
  );
};

export default Page;
