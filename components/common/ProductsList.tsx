"use client";

import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import { Product } from "@/lib/products";
import { colors } from "@/lib/colors";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p
          className="text-lg font-inter"
          style={{ color: colors.mutedForeground }}
        >
          No products found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
