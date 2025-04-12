"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbTrash } from "react-icons/tb";
import { getAllCarts } from "@/services/cartService";
import toast from "react-hot-toast";
import { placeOrder } from "@/services/orderService";
import { useRouter } from "next/navigation";
import { CartItem } from "@/types/cart";

export default function Cart() {
  const calculateSubtotal = () =>
    cartItems.reduce(
      (total, item) =>
        total +
        (item.product.price -
          (item.product.price * item.product.discountPercent) / 100) *
          item.quantity,
      0
    );

  const calculateShipping = () => (calculateSubtotal() > 5000 ? 0 : 0);

  const calculateTotal = () => calculateSubtotal() + calculateShipping();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getAllCarts();

        setCartItems(response.data.cartItems);
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "Something went wrong! Try again."
        );
      }
    };

    fetchCartItems();
  }, []);

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      await placeOrder();
      router.push("/orders");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Something went wrong! Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cart" className="w-full py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-10 w-full bg-red-700/20 text-red-700 rounded-lg justify-center items-center flex flex-col">
            <p className="text-[16px] italic">Your cart is empty!</p>
            <Link
              href="/products"
              className="mt-5 inline-block bg-primary text-white pr-6 py-3 rounded-md hover:bg-primary/80"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-8 w-full">
            {/* Cart Items */}
            <div className="col-span-2 space-y-6">
              {cartItems.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex flex-wrap items-center justify-between bg-white shadow-custom p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <Image
                        src={
                          cartItem.product.url ??
                          "/images/placeholder-image.png"
                        }
                        width={100}
                        height={100}
                        alt={cartItem.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">
                        {cartItem.product.name}
                      </h4>
                      <p className="text-sm text-gray-500 italic">
                        {cartItem.product.category.name}
                      </p>
                      <p className="text-primary font-semibold">
                        Rs.
                        {(
                          cartItem.product.price -
                          (cartItem.product.price *
                            cartItem.product.discountPercent) /
                            100
                        ).toFixed(2)}
                        {cartItem.product.discountPercent > 0 && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            Rs.{cartItem.product.price}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-700">
                        Item Total: Rs.
                        {(
                          (cartItem.product.price -
                            (cartItem.product.price *
                              cartItem.product.discountPercent) /
                              100) *
                          cartItem.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-auto gap-4 mt-4 md:mt-0">
                    <div className="flex items-center border rounded-md">
                      <button
                        // onClick={() => updateQuantity(cartItem.id, false)}
                        onClick={() => {}}
                        className={`h-[40px] w-[40px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-l-md ${
                          cartItem.quantity === 1 && "cursor-not-allowed"
                        }`}
                        disabled={cartItem.quantity === 1}
                      >
                        -
                      </button>
                      <span className="h-[40px] w-[60px] flex justify-center items-center">
                        {cartItem.quantity}
                      </span>
                      <button
                        // onClick={() => updateQuantity(cartItem.id, true)}
                        onClick={() => {}}
                        className={`h-[40px] w-[40px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-r-md ${
                          cartItem.quantity === 10 && "cursor-not-allowed"
                        }`}
                        disabled={cartItem.quantity === 10}
                      >
                        +
                      </button>
                    </div>
                    <button
                      // onClick={() => removeItem(cartItem.id)}
                      onClick={() => {}}
                      className="bg-red-700/30 text-red-700 hover:text-white rounded-md hover:bg-red-700 h-[40px] w-[40px] flex justify-center items-center transition"
                    >
                      <TbTrash className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white shadow-custom rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Shipping Details</h3>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping Cost</span>
                  <span>Rs. {calculateShipping().toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-white shadow-custom rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Cart Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>Rs. {calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span>Rs. {calculateShipping().toFixed(2)}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between font-bold text-primary">
                    <span>Total</span>
                    <span>Rs. {calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <button
                    onClick={loading ? () => {} : handlePlaceOrder}
                    className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-primary/80"
                  >
                    {loading ? "Placing Order..." : "Place Order"}
                  </button>
                  <Link
                    href="/products"
                    className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-md hover:border-primary hover:text-primary"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
