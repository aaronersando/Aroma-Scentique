"use client";

import React from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { colors } from "@/lib/colors";

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <motion.div
      className="relative max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <motion.input
          type="text"
          placeholder="Search fragrances..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border-2 font-montserrat text-sm md:text-base focus:outline-none transition-all"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
            color: colors.primary,
          }}
          whileFocus={{
            borderColor: colors.goldDark,
          }}
        />
      </motion.div>

      {searchQuery && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => onSearchChange("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
      )}
    </motion.div>
  );
};

export default ProductSearch;
