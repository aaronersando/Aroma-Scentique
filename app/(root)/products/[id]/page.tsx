import React from "react";
import { notFound } from "next/navigation";
import ProductImagesSection from "@/components/sections/product/ProductImagesSection";
import ProductDetailsSection from "@/components/sections/product/ProductDetailsSection";
import YouMayAlsoLikeSection from "@/components/sections/product/YouMayAlsoLikeSection";
import { products } from "@/lib/products";
import { colors } from "@/lib/colors";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found - Aroma Scentique",
    };
  }

  return {
    title: `${product.name} - Aroma Scentique`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Aroma Scentique`,
      description: product.description,
      images: [product.image],
    },
  };
}

const Page = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  // Find the product
  const product = products.find((p) => p.id === id);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  // Get related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough related products, add from other categories
  if (relatedProducts.length < 4) {
    const additionalProducts = products
      .filter((p) => p.id !== product.id && !relatedProducts.includes(p))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additionalProducts);
  }

  return (
    <>
      {/* Product Details Section */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: colors.secondary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ProductImagesSection
              images={product.images}
              productName={product.name}
            />
            <ProductDetailsSection
              category={product.category}
              name={product.name}
              description={product.description}
              longDescription={product.longDescription}
              featured={product.featured}
              bestSeller={product.bestSeller}
              productUrl={`/products/${product.id}`}
            />
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <YouMayAlsoLikeSection products={relatedProducts} />
    </>
  );
};

export default Page;
