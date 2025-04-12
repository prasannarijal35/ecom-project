"use client";

import React, { useEffect, useState } from "react";
import { createKhaltiPayment, getAllOrders } from "@/services/orderService";
import { Order } from "@/types/order";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response.data);
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            "Failed to fetch orders. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const calculateOrderTotal = (order: Order) =>
    order.orderItems.reduce((sum, item) => sum + item.totalAmount, 0);

  const handlePayment = async (orderId: number) => {
    try {
      const response = await createKhaltiPayment({ orderId });
      window.location.href = response.data.payment_url;
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to create payment. Please try again."
      );
    }
  };

  return (
    <section className="w-full py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading your orders...</p>
        ) : orders.length === 0 ? (
          <div className="text-center py-10 bg-red-100/50 text-red-700 rounded-lg">
            <p className="text-lg italic">
              You haven&apos;t placed any orders yet.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-lg rounded-xl p-6 space-y-6"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="font-semibold text-xl">Order #{order.id}</h2>
                    <p className="text-gray-500">
                      Placed on:{" "}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-1 rounded-full text-sm capitalize ${
                      order.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "approved"
                        ? "bg-blue-100 text-blue-700"
                        : ""
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <hr />

                {/* Order Items */}
                <div className="space-y-4">
                  {order.orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 border-b pb-4 last:border-none"
                    >
                      <Image
                        src={
                          item.product.url || "/images/placeholder-image.png"
                        }
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Category: {item.product.category.name}
                        </p>
                        <div className="mt-2 space-y-1">
                          <p className="text-primary font-semibold">
                            Rs. {item.price.toFixed(2)}{" "}
                            {item.discountPercent > 0 && (
                              <span className="text-gray-400 line-through ml-2 text-sm">
                                Rs.{" "}
                                {(
                                  item.price +
                                  (item.price * item.discountPercent) / 100
                                ).toFixed(2)}
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-sm font-medium">
                            Total: Rs. {item.totalAmount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                  <div className="text-lg font-bold">
                    Order Total:{" "}
                    <span className="text-primary">
                      Rs. {calculateOrderTotal(order).toFixed(2)}
                    </span>
                  </div>

                  {order.status === "pending" && (
                    <button
                      onClick={() => handlePayment(order.id)}
                      className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
                    >
                      Create Payment
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
