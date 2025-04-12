"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { SingleProductItem } from "@/components/product";
import { getAllProducts } from "@/services/productServices";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts({ page: 1, size: 10 });
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="products" className="w-full py-20 bg-gray-50">
      <div className="container">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item: Product, index: number) => (
            <SingleProductItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
