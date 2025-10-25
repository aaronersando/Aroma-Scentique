"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
    <div className="relative w-full">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        size={20}
        style={{ color: colors.muted }}
      />
      <Input
        type="text"
        placeholder="Search fragrances..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-12 h-14 text-base font-inter rounded-xl w-full"
        style={{
          borderColor: colors.border,
          backgroundColor: colors.card,
          border: `2px solid ${colors.border}`,
        }}
      />
    </div>
  );
};

export default ProductSearch;
