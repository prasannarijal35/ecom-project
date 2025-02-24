import React from "react";
import logo from "@/assets/images/logos/logo2.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaTachometerAlt,
  FaBox,
  FaUsers,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

interface Props {
  toogleSideBar: () => void;
  sideBarOpen: boolean;
}

export default function AdminLeftSide({ toogleSideBar, sideBarOpen }: Props) {
  return (
    <aside
      className={`fixed xl:static z-[20] ${
        sideBarOpen ? "w-60" : "w-0"
      } bg-white h-screen flex flex-col xl:w-60 overflow-hidden border-r-[1px] border-gray-300 transition-all duration-300`}
    >
      <div className="border-b-[2px] border-dashed border-gray-300 flex justify-center items-center px-4 relative">
        <div className="flex justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            height={100}
            width={100}
            quality={100}
            className="h-14 w-auto"
          />
        </div>
        <button
          className="text-xl p-2 hover:bg-gray-300 rounded-full xl:hidden block absolute top-2 right-2 transition-colors"
          onClick={toogleSideBar}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="mt-3">
        <ul className="flex flex-col gap-4 text-left pl-4 text-[14px]">
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaTachometerAlt className="text-sm" />
            <Link href={"/admin/dashboard"}>Dashboard</Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaBox className="text-sm" />
            <Link href={"/admin/order"}>Orders</Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaUsers className="text-sm" />
            <Link href={"/admin/users"}>Users</Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaCogs className="text-sm" />
            <Link href={"/admin/settings"}>Settings</Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaBox className="text-sm" />
            <Link href={"/admin/products"}>Products</Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaBox className="text-sm" />
            <Link href={"/admin/categories"}>Category</Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md transition-colors">
            <FaSignOutAlt className="text-sm" />
            <Link href={"/admin/logout"}>Logout</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
