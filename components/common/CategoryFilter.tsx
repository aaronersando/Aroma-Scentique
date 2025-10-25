"use client";

import React from "react";
import { colors } from "@/lib/colors";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    { id: "all", label: "ALL CATEGORIES" },
    { id: "MEN", label: "MEN" },
    { id: "WOMEN", label: "WOMEN" },
  ];

  return (
    <Card
      className="border-2"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.gold,
      }}
    >
      <CardContent className="p-6">
        <h3
          className="text-lg font-playfair font-bold mb-4"
          style={{ color: colors.primary }}
        >
          Filter by <span style={{ color: colors.goldDark }}>Category</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="px-5 py-2.5 font-montserrat text-xs font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor:
                  selectedCategory === category.id
                    ? colors.goldDark
                    : colors.secondary,
                color:
                  selectedCategory === category.id
                    ? colors.primaryForeground
                    : colors.primary,
                border: `1px solid ${
                  selectedCategory === category.id
                    ? colors.goldDark
                    : colors.border
                }`,
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
