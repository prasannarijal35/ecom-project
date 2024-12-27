"use client";
import Image from "next/image";
import logo from "@/assets/images/logos/logo.png";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toogleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div>
      <section
        id="navbar"
        className="bg-white w-full sticky top-0 z-20 shadow-md border-b border-gray-200 "
      >
        <div className="container">
          <nav className=" w-full relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse "
              >
                <Image
                  src={logo}
                  alt="Logo"
                  height={800}
                  width={800}
                  quality={100}
                  className="h-auto w-[80px]"
                />
              </Link>
              <div className="flex md:order-2 space-x-reverse ">
                <div className="flex justify-center items-center md:gap-2">
                  <Link
                    href={"/login"}
                    className="flex gap-1 justify-center items-center font-medium hover:text-primary hover:bg-primary/10 p-2 rounded-md"
                  >
                    <FaRegUserCircle />
                    <span className="hidden md:block">Login</span>
                  </Link>
                  <Link
                    href={"/cart"}
                    className="flex gap-1 justify-center items-center font-medium hover:text-primary hover:bg-primary/10 p-2 rounded-md"
                  >
                    <IoCartOutline />
                    <span className="hidden md:block">Cart</span>
                  </Link>
                </div>
                <button
                  type="button"
                  className=" flex md:hidden gap-1 justify-center items-center font-medium hover:text-primary hover:bg-primary/10 p-2 rounded-md"
                  onClick={toogleNav}
                >
                  <IoMenu />
                </button>
              </div>
              <div
                className={`items-center justify-between ${
                  openNav ? "absolute w-full top-[100%] md:static" : "hidden"
                }  w-full md:flex md:w-auto md:order-1`}
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 bg-primary text-white md:bg-transparent md:text-primary md:p-0"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                    >
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
