"use client";
import Image from "next/image";

import { CiHeart } from "react-icons/ci";
// import { IoStar } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { items } from "@/types/products";
import { useState } from "react";

export default function SingleProductItem({ product }: { product: items }) {
  const [count, setCount] = useState<number>(1);

  const countIncrease = () => {
    if (count < 20) setCount(count + 1);
  };
  const countDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="w-[220px] bg-primary/10  rounded-md shadow-custom mb-6 ">
      <div className="flex justify-center items-center relative w-full">
        <Image
          src={product.image}
          alt="logo"
          quality={100}
          height={500}
          width={500}
          className="rounded-t-md"
        />
        <div className="absolute top-0 flex justify-between items-center w-full p-2">
          <button>
            <CiHeart className="text-[20px] text-white bg-transparent rounded-full hover:text-primary hover:bg-white " />
          </button>
          <div className="text-[12px] text-light text-white bg-red-500 rounded-md p-0.5 ">
            -23%
          </div>
        </div>
      </div>
      <div className="text-left  text-secondary">
        <div className=" text-black flex justify-end gap-1 text-[14px] pb-2">
          <button className="flex justify-center items-center bg-secondary rounded-tl-md rounded-b-md px-2 hover:bg-primary text-white">
            More Details
            <span className="flex justify-center items-center">
              <FiMoreHorizontal />
            </span>
          </button>
        </div>
        <div className=" border-gray-300 border-b-[1px] py-2 pl-2">
          <p className="text-light text-[10px]">
            Available in <span>{product.colors}</span> Colors
          </p>
        </div>
        <div className="font-semibold text-[14px] line-clamp-1 py-1 pl-2">
          <h1>{product.title}</h1>
        </div>

        <div className="font-light text-[10px] mb-2 px-2">
          <p className="line-clamp-1">{product.description}</p>
        </div>
        <div className="text-red-600 mb-1 flex justify-between items-center px-2 ">
          <p className="text-[16px]">${product.price}</p>
          <div className="flex gap-2 rounded-md border-2 border-secondary/10 ">
            <button className="bg-primary/10 px-1" onClick={countIncrease}>
              +
            </button>
            <p className="text-gray-800">{count}</p>
            <button className="bg-secondary/10 px-1" onClick={countDecrease}>
              -
            </button>
          </div>
        </div>
        {/* <div className="flex text-black text-[12px] justify-start items-center mb-3 pl-2">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <span>(15)</span>
        </div> */}
        <div className="my-2 flex gap-1 justify-between px-2">
          <button className="bg-primary text-white  font-sm px-2 py-1 rounded-md text-[12px]">
            Buy Now
          </button>
          <button className="bg-secondary text-white  font-sm px-1 py-1 rounded-md text-[12px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
