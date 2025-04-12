"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { SingleProductItem } from "@/components/product";
import Link from "next/link";
import { Category } from "@/types/category";
import { getProductsByCategory } from "@/services/productServices";

export default function CategoryProducts({ category }: { category: Category }) {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchRelatedProducts = async () => {
    try {
      const response = await getProductsByCategory({
        page: 1,
        size: 4,
        slug: category.slug,
      });
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRelatedProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <section id="related-product" className="w-full py-20 bg-gray-50">
      <div className="container">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <div className="col-span-full text-center py-10 bg-gray-100 rounded-lg">
              <div className="text-lg font-semibold text-gray-700">
                No Products Found!
              </div>
              <div className="text-sm text-gray-500 mb-6 italic">
                Sorry, there are no products in this category that match your
                selection.
              </div>
              <Link
                href={"/"}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            products.map((item: Product) => (
              <SingleProductItem key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
