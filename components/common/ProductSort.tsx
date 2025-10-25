"use client";

import React from "react";
import { colors } from "@/lib/colors";
import { Check } from "lucide-react";

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const ProductSort: React.FC<ProductSortProps> = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "name-asc", label: "Name: A-Z" },
    { value: "name-desc", label: "Name: Z-A" },
    { value: "bestsellers", label: "Best Sellers" },
  ];

  return (
    <div className="py-2">
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onSortChange(option.value)}
          className="w-full px-4 py-3 text-left font-inter text-sm hover:bg-opacity-10 transition-colors duration-200 flex items-center justify-between"
          style={{
            backgroundColor:
              sortBy === option.value ? `${colors.gold}20` : "transparent",
            color: sortBy === option.value ? colors.primary : colors.foreground,
          }}
        >
          <span className={sortBy === option.value ? "font-semibold" : ""}>
            {option.label}
          </span>
          {sortBy === option.value && (
            <Check size={18} style={{ color: colors.goldDark }} />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProductSort;
