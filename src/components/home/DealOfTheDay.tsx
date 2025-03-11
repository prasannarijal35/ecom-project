"use client";
import { useEffect, useState } from "react";
import { SingleProductItem } from "@/components/product";
import { getAllProducts } from "@/services/admin/addProductServices";
import { SectionTitle } from "@/components/common";
import { Product } from "@/types/product";

export default function DealOfTheDay() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts({});
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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-400 text-xl py-20">
        Loading Products...
        <div className="min-h-[100px] flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg italic text-sm font-medium">
          <div className="w-4 h-4 border-2 border-y-primary border-x-secondary rounded-full animate-spin" />
        </div>
      </div>
    );
  }

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
          {products.map((product, index: number) => (
            <SingleProductItem product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
