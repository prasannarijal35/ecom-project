"use client";
import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { ProductData } from "@/data/products";
import Link from "next/link";

export default function CartModal({ closeModal }: { closeModal: () => void }) {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-start p-12 overflow-auto  z-[1]">
      <div
        className="fixed top-0 w-screen h-screen left-0 bg-black bg-opacity-50 backdrop-blur-sm z-[0]"
        onClick={closeModal}
      ></div>
      <div className="relative bg-white shadow-custom w-full max-w-[550px] z-[1]">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-md font-medium text-gray-700">Shopping Cart</h3>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <IoMdClose size={32} />
          </button>
        </div>

        <div className="px-5 py-3  border-b-[1px] border-gray-300 ">
          {ProductData.slice(0, 4).map((product) => (
            <div
              className="flex items-center justify-between my-4 bg-gray-50 "
              key={product.id}
            >
              <div className="flex justify-start items-start gap-2">
                <div className="p-4 rounded-md bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={800}
                    className="object-cover w-20 h-20"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-[14px] font-medium text-gray-800 mt-2">
                    {product.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 italic mb-1">
                    {product.category.name}
                  </p>
                  <div className="text-primary font-sm flex items-center gap-2 mt-2">
                    <h5 className="text-[12px] font-medium text-primary">
                      Rs.
                      {product.price - (product.price * product.discount) / 100}
                    </h5>
                    {product.discount > 0 && (
                      <span className="text-[12px] text-gray-500 line-through ml-2">
                        Rs.{product.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <button className="text-gray-600 hover:text-red-600 transition-colors">
                  <MdDeleteOutline size={32} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 flex justify-between items-center border-b border-gray-200 py-4 ">
          <h3 className="text-[16px] font-medium text-gray-800">Total:</h3>
          <h3 className="text-[16px] font-medium text-gray-900">Rs. 300.00</h3>
        </div>

        <div className="p-6 flex text-center justify-between items-center gap-4">
          <Link
            href={"/cart"}
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault();
              closeModal();
              router.push("/cart");
            }}
            className=" py-3 px-4 w-[50%] bg-primary text-white text-[16px]  hover:bg-secondary transition-colors"
          >
            Go To Cart
          </Link>
          <Link
            href={"/checkout"}
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault();
              closeModal();
              router.push("/checkout");
            }}
            className=" w-[50%] py-3 px-4 bg-white text-primary border-[1px] border-primary text-[16px]  hover:bg-primary hover:text-white transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
