"use client";

import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "MEN", label: "Men's Fragrances" },
  { id: "WOMEN", label: "Women's Fragrances" },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="space-y-2">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className="w-full text-left px-4 py-3 rounded-lg font-montserrat text-sm md:text-base transition-all"
          style={{
            backgroundColor:
              selectedCategory === category.id ? colors.goldLight : colors.card,
            color:
              selectedCategory === category.id
                ? colors.goldDark
                : colors.primary,
            border: `2px solid ${
              selectedCategory === category.id ? colors.goldDark : colors.border
            }`,
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.02,
            x: 4,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            initial={false}
            animate={{
              fontWeight: selectedCategory === category.id ? 600 : 400,
            }}
          >
            {category.label}
          </motion.span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
