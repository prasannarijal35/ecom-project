"use client";
import Image from "next/image";
import logo from "@/assets/images/logos/logo2.png";
import { CiHeart } from "react-icons/ci";
import { Product } from "@/types/product";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import { createCart } from "@/services/cartService";

interface Props {
  item: Product;
}

export default function SingleProductItem({ item }: Props) {
  const handleCartClick = async () => {
    try {
      await createCart({ productId: item.id, quantity: 1 });
      toast.success("Product added to cart successfully!");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Something went wrong! Try again."
      );
    }
  };

  return (
    <div className="w-full bg-white rounded-md shadow-custom mb-6 overflow-hidden group">
      <div className="relative w-full flex justify-center items-center p-4">
        <Image
          src={item.url ? item.url : logo}
          alt={item.name}
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
            <button onClick={handleCartClick}>
              <IoCartOutline
                size={20}
                className="bg-primary/60 rounded-md hover:bg-primary hover:scale-105 transition-all duration-300"
              />
            </button>
            <Link href={`/products/${item.slug}`}>
              <MdOutlineRemoveRedEye
                size={20}
                className="bg-primary/60 rounded-md hover:bg-primary hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="absolute top-0 flex justify-between items-center w-full p-2">
          <button aria-label="Add to Favorites">
            <CiHeart className="text-[20px] text-primary bg-transparent rounded-full hover:text-white hover:bg-primary" />
          </button>
          {item.discountPercent > 0 && (
            <div className="text-xs text-white bg-red-500 rounded-md p-1">
              {item.discountPercent}% Off
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="border-b-[1px] border-gray-300 py-2 pl-2">
          <h5 className="text-xs text-gray-400 uppercase italic">
            {item.category.name}
          </h5>
        </div>

        <Link href={`/products/${item.slug}`}>
          <div className="font-semibold text-[15px] line-clamp-1 py-1 pl-2 hover:text-primary transition-colors duration-300">
            <h1>{item.name}</h1>
          </div>
        </Link>

        <div className="text-[10px] text-gray-500 mb-2 px-2">
          <p className="line-clamp-2">{item.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <h5 className="text-lg font-bold text-primary">
              Rs.
              {(item.price - (item.price * item.discountPercent) / 100).toFixed(
                2
              )}
            </h5>
            {item.discountPercent > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2">
                Rs.{item.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
