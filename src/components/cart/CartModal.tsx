"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { getAllCarts } from "@/services/cartService";
import { CartItem } from "@/types/cart";
import toast from "react-hot-toast";
import { placeOrder } from "@/services/orderService";

interface Props {
  closeCartModal: () => void;
}

export default function CartModal({ closeCartModal }: Props) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCart, setLoadingCart] = useState<boolean>(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoadingCart(true);
        const response = await getAllCarts();
        setCartItems(response.data.cartItems);
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "Failed to load cart items!"
        );
      } finally {
        setLoadingCart(false);
      }
    };
    fetchCartItems();
  }, []);

  const calculateSubtotal = () =>
    cartItems.reduce(
      (total, item) =>
        total +
        (item.product.price -
          (item.product.price * item.product.discountPercent) / 100) *
          item.quantity,
      0
    );

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      await placeOrder();
      closeCartModal();
      toast.success("Order placed successfully!");
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
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-start overflow-auto p-10">
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
        onClick={closeCartModal}
      ></div>

      {/* Modal Content */}
      <div
        className="z-50 relative w-full max-w-[550px] bg-white rounded-md shadow-lg"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-lg font-bold text-secondary">Shopping Cart</h3>
          <button onClick={closeCartModal}>
            <CgClose className="text-[26px] text-gray-800 font-bold" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="px-5 py-3 max-h-[400px] overflow-y-auto custom-scrollbar">
          {loadingCart ? (
            <div className="text-center py-10 text-gray-500">Loading...</div>
          ) : cartItems.length === 0 ? (
            <div className="text-center text-gray-500 italic py-10">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                className="flex justify-between items-center my-4"
                key={item.id}
              >
                <div className="flex gap-3 items-start">
                  {/* Product Image */}
                  <div className="p-2 bg-gray-100 rounded-md">
                    <Image
                      src={item.product.url ?? "/images/placeholder-image.png"}
                      width={800}
                      height={800}
                      alt={item.product.name}
                      className="object-cover w-20 h-20 rounded-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div>
                    <h4 className="text-[16px] font-medium">
                      {item.product.name}
                    </h4>
                    <p className="text-gray-500 text-[14px] italic">
                      {item.product.category?.name ?? "Uncategorized"}
                    </p>
                    <div className="text-primary font-semibold flex gap-2">
                      <h5 className="text-[16px]">
                        Rs.
                        {(
                          item.product.price -
                          (item.product.price * item.product.discountPercent) /
                            100
                        ).toFixed(2)}
                      </h5>
                      {item.product.discountPercent > 0 && (
                        <span className="text-[14px] text-gray-500 line-through ml-2">
                          Rs.{item.product.price}
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button className="bg-red-500/20 p-2 rounded-md hover:bg-red-500 transition-colors duration-300 group">
                  <TbTrash className="text-[20px] text-red-500 group-hover:text-white" />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between items-center mt-5 border-t border-b border-gray-200 py-3 px-5">
              <h4 className="text-lg font-medium">Total Amount:</h4>
              <h4 className="text-lg font-bold text-primary">
                Rs. {calculateSubtotal().toFixed(2)}
              </h4>
            </div>

            {/* Actions */}
            <div className="flex justify-center flex-col mt-5 gap-3 mb-5 px-5">
              <button
                onClick={loading ? () => {} : handlePlaceOrder}
                className="bg-primary w-full text-white p-3 text-center rounded-md hover:bg-primary/80 transition-colors duration-300"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
              <Link
                href={"/cart"}
                onClick={(e) => {
                  e.preventDefault();
                  closeCartModal();
                  router.push("/cart");
                }}
                className="border-secondary border-2 text-secondary w-full text-center p-3 rounded-md hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                Go to Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
