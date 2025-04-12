"use client";
import { useEffect, useState } from "react";
import { SingleProductItem } from "@/components/product";
import { SectionTitle } from "@/components/common";
import { Product } from "@/types/product";
import { getDiscountedProducts } from "@/services/productServices";

export default function DealOfTheDay() {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getDiscountedProducts();
        setProducts(productData.data);
        const sortedProducts = productData.data.sort(
          (a: Product, b: Product) =>
            (b.discountPercent || 0) - (a.discountPercent || 0)
        );
        setProducts(sortedProducts);
      } catch (error: any) {
        setErrorMessage(
          error.response?.data?.message ||
            "Something went wrong while fetching products"
        );
      }
    };

    fetchProducts();
  }, []);

  if (errorMessage) {
    return <p className="text-center text-red-400">{errorMessage}</p>;
  }

  return (
    <section id="OurProduct" className="w-full py-20 bg-gray-50">
      <div className="container">
        <SectionTitle
          normaltitle="Deal Of "
          highlightedtitle="The Day"
          description="Check out today's greatest deals"
          items="items-start"
          text="text-start"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item: Product, index: number) => (
            <SingleProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
