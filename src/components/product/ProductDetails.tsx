import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logos/logo.png";
import { IoCartOutline } from "react-icons/io5";

export default function ProductDetails() {
  return (
    <section id="product-details" className="w-full py-10">
      <div className="container flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] ">
          <Image
            src={logo}
            alt="productimage"
            height={1000}
            width={1000}
            quality={100}
            className="object-cover object-center"
          />
        </div>
        <div>
          <h2>Category</h2>

          <h1>Heading</h1>
          <h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, rerum?
          </p>
          <div className="flex justify-between my-3">
            <div className="flex gap-1">
              <button className="bg-red-400 px-2 rounded-md text-white">
                -
              </button>
              <p>0</p>
              <button className="bg-green-400 px-2 rounded-md text-white">
                +
              </button>
            </div>
            <div className="price">Rs.105</div>
          </div>

          <button className="w-full bg-blue-500 rounded-lg text-center text-white py-1 flex justify-center items-center gap-2 ">
            <IoCartOutline size={20} /> Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}
