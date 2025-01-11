"use client";
import { ProductData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbTrash } from "react-icons/tb";

export default function Cart() {
  const [cartItem, setCartItem] = useState(
    ProductData.slice(0, 4).map((item) => ({ ...item, quantity: 1 }))
  );

  // Function to remove item from cart
  const removeItem = (id: number) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  // Function to handle quantity increment
  const increaseQuantity = (id: number) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to handle quantity decrement
  const decreaseQuantity = (id: number) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to calculate the total price
  const calculateMainTotal = () => {
    return cartItem.reduce((total, item) => {
      const itemPrice =
        (item.price - (item.price * item.discount) / 100) * item.quantity;
      return total + itemPrice;
    }, 0);
  };

  // Shipping and Total Calculation
  const shippingCost = 50;
  const mainTotal = calculateMainTotal();
  const totalWithShipping = mainTotal + shippingCost;

  return (
    <section id="cart" className="w-full py-20">
      <div className="container px-4 lg:px-12">
        <h1 className="text-primary text-2xl mb-2">My Cart</h1>
        {cartItem.length === 0 ? (
          <div className="text-center py-10 w-full bg-red-700/20 text-red-700 rounded-lg justify-center items-center flex flex-col">
            <p className="text-[16px] italic">Your cart is empty!</p>
            <Link
              href="/products"
              className="mt-5 inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
            <div className="space-y-6">
              {cartItem.map((product) => {
                const productTotal =
                  (product.price - (product.price * product.discount) / 100) *
                  product.quantity;
                return (
                  <div
                    key={product.id}
                    className="flex flex-wrap justify-between items-center p-4 bg-gray-50 rounded-md shadow-custom"
                  >
                    <div className="w-full flex items-center gap-2 md:w-auto ">
                      <div className="p-2 bg-gray-50 rounded-md">
                        <Image
                          src={product.image}
                          alt={product.title}
                          height={100}
                          width={100}
                          className="h-20 w-20 object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[18px]">
                          {product.title}
                        </h4>
                        <p className="italic text-[14px] text-sm text-gray-600">
                          {product.category.name}
                        </p>
                        <p className="text-primary text-[14px] py-2">
                          Rs.
                          {(
                            product.price -
                            (product.price * product.discount) / 100
                          ).toFixed(2)}
                          {product.discount > 0 && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              Rs.{product.price}
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          Total: Rs. {productTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-4 mt-4 md:mt-0">
                      <div className="flex items-center border rounded-md">
                        <button
                          className={`h-[40px] w-[40px] flex justify-center items-center bg-secondary hover:bg-gray-300 rounded-l-md ${
                            product.quantity === 1 && "cursor-not-allowed"
                          }`}
                          onClick={() => decreaseQuantity(product.id)}
                          disabled={product.quantity === 1}
                        >
                          -
                        </button>
                        <span className="h-[40px] w-[60px] flex justify-center items-center">
                          {product.quantity}
                        </span>
                        <button
                          className={`h-[40px] w-[40px] flex justify-center items-center bg-secondary hover:bg-gray-300 rounded-r-md ${
                            product.quantity === 10 && "cursor-not-allowed"
                          }`}
                          onClick={() => increaseQuantity(product.id)}
                          disabled={product.quantity === 10}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="bg-red-700/30 text-red-700 hover:text-white rounded-md hover:bg-red-700 h-[40px] w-[40px] flex justify-center items-center transition"
                      >
                        <TbTrash className="text-xl" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Product Summary & Shipping */}
            <div className="space-y-8">
              {/* Shipping Part */}
              <div className="border-[1px] border-gray-300 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-800">Shipping</h1>
                <div className="border-t-[1px] border-gray-500 mt-4">
                  {/* Shipping Cost */}
                  <div className="flex justify-between py-2 text-gray-700">
                    <span>Shipping Cost</span>
                    <span>Rs. {shippingCost}</span>
                  </div>
                  <div className="flex justify-between py-2 text-gray-700">
                    <span>Total Shipping Cost</span>
                    <span>Rs. {shippingCost}</span>
                  </div>
                </div>
              </div>

              {/* Main Total Part */}
              <div className="border-[1px] border-gray-300 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-800">
                  Cost Summary
                </h1>
                <div className="border-t-[1px] border-gray-500 mt-4">
                  {/* Main Total */}
                  <div className="flex justify-between py-2 text-gray-700">
                    <span>Main Total</span>
                    <span>Rs. {mainTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 text-gray-700">
                    <span>Total with Shipping</span>
                    <span>Rs. {totalWithShipping.toFixed(2)}</span>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-200">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
