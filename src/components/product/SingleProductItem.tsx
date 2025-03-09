"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { Product } from "@/types/product";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function SingleProductItem({ product }: { product: Product }) {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercent) / 100
  );
  const originalPrice = Math.round(product.price);

  return (
    <div className="w-full bg-white rounded-md shadow-custom mb-6 overflow-hidden group ">
      <div className="relative w-full flex justify-center items-center p-4">
        <Image
          src={product.imagePath}
          alt={product.title}
          quality={100}
          height={220}
          width={220}
          className="rounded-t-md object-cover object-center h-[220px] w-auto group-hover:scale-105 transition-transform duration-300"
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 flex justify-center items-end gap-3 p-2 text-white bg-black/10
          transition-opacity duration-300"
        >
          <div className="flex gap-4 pb-3">
            <Link href="#">
              <IoCartOutline
                size={20}
                className="bg-primary/60 rounded-md hover:bg-primary hover:scale-105 transition-all duration-300"
              />
            </Link>
            <Link href={`/productdetails/${product.slug}`}>
              <MdOutlineRemoveRedEye
                size={20}
                className="bg-primary/60 rounded-md hover:bg-primary hover:scale-105 transition-all duration-300 "
              />
            </Link>
          </div>
        </div>

        <div className="absolute top-0 flex justify-between items-center w-full p-2">
          <button aria-label="Add to Favorites">
            <CiHeart className="text-[20px] text-primary bg-transparent rounded-full hover:text-white hover:bg-primary" />
          </button>
          {product.discountPercent > 0 && (
            <div className="text-xs text-white bg-red-500 rounded-md p-1">
              {product.discountPercent}% Off
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="border-b-[1px] border-gray-300 py-2 pl-2">
          <h5 className="text-xs text-gray-400 uppercase italic mb-2">
            {product.category.name}
          </h5>
        </div>

        <Link href={`/productdetails/${product.slug}`}>
          <div className="font-semibold text-[15px] line-clamp-1 py-1 pl-2 hover:text-primary transition-colors duration-300">
            <h1>{product.title}</h1>
          </div>
        </Link>

        <div className="text-[10px] text-gray-500 mb-2 px-2">
          <p className="line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center">
            <h5 className="text-md font-semibold text-primary">
              Rs. {discountedPrice}
            </h5>

            {product.discountPercent > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2">
                Rs. {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
