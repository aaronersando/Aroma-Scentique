"use client";

import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";
import { Check } from "lucide-react";

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const sortOptions = [
  { id: "name-asc", label: "Name: A to Z" },
  { id: "name-desc", label: "Name: Z to A" },
];

const ProductSort: React.FC<ProductSortProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="p-2">
      {sortOptions.map((option, index) => (
        <motion.button
          key={option.id}
          onClick={() => onSortChange(option.id)}
          className="w-full text-left px-4 py-3 rounded-lg font-montserrat text-sm transition-all flex items-center justify-between"
          style={{
            backgroundColor:
              sortBy === option.id ? colors.goldLight : "transparent",
            color: sortBy === option.id ? colors.goldDark : colors.primary,
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
          }}
          whileHover={{
            backgroundColor: colors.goldLight,
            x: 4,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{option.label}</span>
          {sortBy === option.id && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Check size={16} style={{ color: colors.goldDark }} />
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default ProductSort;
