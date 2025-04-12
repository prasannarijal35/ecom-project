"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "@/components/common";
import { SingleProductItem } from "@/components/product";
import { Product } from "@/types/product";
import { getAllProducts } from "@/services/productServices";

export default function NewArrivals() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const itemData = await getAllProducts({});
        setItems(itemData.data);
        const sortedProducts = itemData.data.sort(
          (a: Product, b: Product) => b.id - a.id
        );
        setItems(sortedProducts);
      } catch (error: any) {
        setErrorMessage(
          error.response?.data?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-primary ">Loading Products</p>;
  }
  if (errorMessage) {
    return <p className="text-center text-secondary ">{errorMessage}</p>;
  }

  return (
    <section id="deal-of-the-day" className="w-full py-20 bg-gray-50">
      <div className="container">
        <SectionTitle
          normaltitle="New"
          highlightedtitle="Arrivals"
          description="Unbeatable Savings, Limited Time Only! Grab Yours Now!"
          text="text-start"
          items="items-start"
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item: Product, index: number) => (
            <SingleProductItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
