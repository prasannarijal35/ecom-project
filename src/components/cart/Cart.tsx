"use client";
import { ProductData } from "@/data/products";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbTrash } from "react-icons/tb";
// import { MdDeleteOutline } from "react-icons/md";

export default function Cart() {
  // const [quantity, setQuantity] = useState<number>(1);
  // const increaseQuantity = () => {
  //   if (quantity >= 10) return;
  //   setQuantity(quantity + 1);
  // };
  // const decreaseQuantity = () => {
  //   if (quantity <= 1) return;
  //   setQuantity(quantity - 1);
  // };
  const [cartItem, setCartItem] = useState(
    ProductData.slice(0, 4).map((item) => ({ ...item, quantity: 1 }))
  );
  const removeItem = (id: number) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

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
          // <div className="relative overflow-x-auto">
          //   <div className="overflow-x-auto">
          //     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          //         <tr>
          //           <th scope="col" className="px-6 py-3">
          //             SN
          //           </th>
          //           <th scope="col" className="px-6 py-3">
          //             Image
          //           </th>
          //           <th scope="col" className="px-6 py-3">
          //             Product
          //           </th>
          //           <th scope="col" className="px-6 py-3">
          //             Price
          //           </th>
          //           <th scope="col" className="px-6 py-3">
          //             Quantity
          //           </th>
          //           <th scope="col" className="px-6 py-3">
          //             Total
          //           </th>
          //           <th scope="col" className="px-6 py-3">
          //             Action
          //           </th>
          //         </tr>
          //       </thead>
          //       <tbody>
          //         {cartItem.map((item) => (
          //           <tr
          //             className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b"
          //             key={item.id}
          //           >
          //             <td
          //               scope="row"
          //               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          //             >
          //               {item.id}
          //             </td>
          //             <td className="px-6 py-4">
          //               <div className="flex justify-start items-center">
          //                 <Image
          //                   src={item.image}
          //                   alt={item.title}
          //                   height={1000}
          //                   width={1000}
          //                   quality={100}
          //                   className="h-16 w-auto object-cover object-center"
          //                 />
          //               </div>
          //             </td>
          //             <td className="px-6 py-4">{item.title}</td>
          //             <td className="px-6 py-4">{item.price}</td>
          //             <td className="px-6 py-4">
          //               <div className="flex justify-start items-start">
          //                 <button
          //                   className={`bg-primary h-[40px] w-[40px]  text-white rounded-tl-md rounded-bl-md ${
          //                     quantity === 1 && "opacity-50 cursor-not-allowed"
          //                   }`}
          //                   onClick={decreaseQuantity}
          //                 >
          //                   -
          //                 </button>
          //                 <span className="h-[40px] text-center min-w-[50px] flex justify-center items-center bg-gray-100">
          //                   {quantity}
          //                 </span>
          //                 <button
          //                   className={`bg-primary h-[40px] w-[40px]  text-white rounded-tr-md rounded-br-md ${
          //                     quantity === 10 && "opacity-50 cursor-not-allowed"
          //                   }`}
          //                   onClick={increaseQuantity}
          //                 >
          //                   +
          //                 </button>
          //               </div>
          //             </td>
          //             <td className="px-6 py-4">
          //               <div>
          //                 {(item.price - (item.price * item.discount) / 100) *
          //                   quantity}
          //               </div>
          //             </td>
          //             <td className="px-6 py-4">
          //               <button
          //                 className="font-medium text-red-500 hover:scale-105"
          //                 onClick={() => removeItem(item.id)}
          //               >
          //                 <MdDeleteOutline size={20} />
          //               </button>
          //             </td>
          //           </tr>
          //         ))}
          //       </tbody>
          //     </table>
          //   </div>

          //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
          //     {/* Left Column: Cost Summary */}
          //     <div className="border-[1px] border-gray-300 w-full p-6 rounded-lg shadow-md hover:shadow-2xl">
          //       <h1 className="text-xl font-bold text-gray-800">
          //         Cost Summary
          //       </h1>
          //       <div className="border-t-[1px] border-gray-500 mt-4">
          //         {/* Subtotal */}
          //         <div className="flex justify-between py-2 text-gray-700">
          //           <span>Subtotal</span>
          //           <span>Rs. 500.00</span> {/* Replace with dynamic value */}
          //         </div>
          //         {/* Discount */}
          //         <div className="flex justify-between py-2 text-gray-700">
          //           <span>Discount</span>
          //           <span>- Rs. 50.00</span> {/* Replace with dynamic value */}
          //         </div>
          //       </div>
          //       {/* Total */}
          //       <div className="flex justify-between py-4 text-lg font-semibold text-gray-900 border-t-[1px] border-gray-500 mt-4">
          //         <span>Total</span>
          //         <span>Rs. 450.00</span> {/* Replace with dynamic value */}
          //       </div>
          //       <div className="w-full flex justify-center items-center mt-4">
          //         <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-200">
          //           Continue Shopping
          //         </button>
          //       </div>
          //     </div>

          //     {/* Right Column: Shipping Details */}
          //     <div className="border-[1px] border-gray-300 w-full p-6 rounded-lg shadow-lg mt-6 sm:mt-0">
          //       <h1 className="text-xl font-bold text-gray-800">
          //         Shipping Details
          //       </h1>
          //       <div className="border-t-[1px] border-gray-500 mt-4">
          //         {/* Shipping Method */}
          //         <div className="flex justify-between py-2 text-gray-700">
          //           <span>Shipping Method</span>
          //           <span>Standard Delivery</span>
          //         </div>
          //         {/* Estimated Delivery */}
          //         <div className="flex justify-between py-2 text-gray-700">
          //           <span>Estimated Delivery</span>
          //           <span>3-5 Business days</span>
          //         </div>
          //         {/* Shipping Cost */}
          //         <div className="flex justify-between py-2 text-gray-700">
          //           <span>Shipping Cost</span>
          //           <span>Rs.50</span>
          //         </div>
          //       </div>
          //       <div className="flex justify-between py-4 text-lg font-semibold text-gray-900 border-t-[1px] border-gray-500 mt-4">
          //         <span>Total (incl. Shipping)</span>
          //         <span>Rs.450.00</span>
          //       </div>
          //       <div className="w-full flex justify-center items-center mt-4">
          //         <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-200">
          //           Checkout
          //         </button>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
            <div className="space-y-6">
              {cartItem.map((product) => (
                <div
                  key={product.id}
                  className=" flex flex-wrap justify-between items-center p-4 bg-gray-50 rounded-md shadow-custom"
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
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-auto gap-4 mt-4 md:mt-0">
                    <div className="flex items-center border rounded-md">
                      <button
                        // onClick={() => updateQuantity(product.id, false)}
                        className={`h-[40px] w-[40px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-l-md ${
                          product.quantity === 1 && "cursor-not-allowed"
                        }`}
                        disabled={product.quantity === 1}
                      >
                        -
                      </button>
                      <span className="h-[40px] w-[60px] flex justify-center items-center">
                        {product.quantity}
                      </span>
                      <button
                        // onClick={() => updateQuantity(product.id, true)}
                        className={`h-[40px] w-[40px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-r-md ${
                          product.quantity === 10 && "cursor-not-allowed"
                        }`}
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
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
