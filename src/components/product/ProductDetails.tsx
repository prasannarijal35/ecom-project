"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCartOutline, IoHeart } from "react-icons/io5";
import { items } from "@/types/products";
import Link from "next/link";

export default function ProductDetails({ product }: { product: items }) {
  const [quantity, setQuantity] = useState<number>(1);
  const increaseQuantity = () => {
    if (quantity >= 10) return;
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const TotalPrice =
    (product.price - (product.price * product.discount) / 100) * quantity;
  return (
    <section id="product-details" className="w-full py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <div className="w-full overflow-hidden bg-gray-100 rounded-md p-5 ">
              <Image
                src={product.image}
                alt={product.title}
                height={1000}
                width={1000}
                quality={100}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-[14px] font-normal text-gray-600 italic mb-1">
              {product.category.name}
            </h2>
            <h1 className="text-3xl font-medium text-gray-800">
              {product.title}
            </h1>
            <h2 className="text-[12px] font-normal text-gray-600 mb-1">
              Availavle in <span>{product.colors} colors</span>
            </h2>
            <div className="flex items-end gap-2 border-b-[1px] border-gray-300 ">
              <h5 className="text-xl font-bold text-primary">
                Rs.
                {product.price - (product.price * product.discount) / 100}
              </h5>
              {product.discount > 0 && (
                <span className="text-md text-gray-500 line-through ml-2">
                  Rs.{product.price}
                </span>
              )}
            </div>
            <p className="text-[14px] font-normal text-gray-600 my-2">
              {product.description}
            </p>
            <div className="flex justify-between my-4">
              <div className="flex justify-center items-center">
                <button
                  className={`bg-primary h-[40px] w-[40px]  text-white rounded-tl-md rounded-bl-md ${
                    quantity === 1 && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="h-[40px] text-center min-w-[50px] flex justify-center items-center bg-gray-100">
                  {quantity}
                </span>
                <button
                  className={`bg-primary h-[40px] w-[40px]  text-white rounded-tr-md rounded-br-md ${
                    quantity === 10 && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <div className="flex items-end gap-2">
                <h5 className="text-xl font-bold text-primary">
                  Rs.
                  {TotalPrice}
                </h5>
              </div>
            </div>

            <button className="w-full bg-primary rounded-lg text-center text-white py-2 mb-3">
              <Link href={"/cart"}>
                <span className="flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300">
                  <IoCartOutline size={20} />
                  Add To Cart
                </span>
              </Link>
            </button>
            <button className="w-full bg-secondary rounded-lg text-center text-white py-2">
              <span className="flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300">
                <IoHeart size={20} /> Add To WishList
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
