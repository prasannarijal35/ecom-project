import React, { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";
import violet from "@/assets/images/others/violet.jpg";

interface Props {
  toogleSideBar: () => void;
  sideBarOpen: boolean;
}

export default function AdminHeader({ toogleSideBar, sideBarOpen }: Props) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between py-3 px-2 bg-white w-full shadow-lg">
      <div className="flex items-center gap-3 px-1">
        <button className="block md:hidden">
          <IoMenu
            onClick={toogleSideBar}
            size={26}
            className={`block md:hidden ${sideBarOpen ? "hidden" : ""}`}
          />
        </button>
        <button className="bg-red-300 text-red-800 text-sm py-1 px-1 rounded-md">
          RESET APP
        </button>
      </div>

      <div className="relative flex items-center">
        <button className=" cursor-pointer" onClick={toggleMenu}>
          <div className="w-full flex items-center justify-center ">
            <Image
              src={violet}
              alt="logo"
              height={100}
              width={100}
              quality={100}
              className="h-8 w-auto rounded-full"
            />
          </div>
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-11 mt-2 bg-slate-200  rounded-lg shadow-lg w-48">
            <div className="flex flex-col justify-center items-center py-2 bg-slate-300  rounded-t-md">
              <div className="flex justify-center items-center">
                <Image
                  src={violet}
                  alt="violet"
                  height={100}
                  width={100}
                  quality={100}
                  className="h-16 w-auto rounded-full"
                />
              </div>
              <h1 className="text-[12px]">Violet</h1>
              <p className="text-[12px] font-normal">admin@lamo.com</p>
            </div>
            <ul>
              <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <FaUser className="mr-2" /> Profile
              </li>
              <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <FaCog className="mr-2" /> Settings
              </li>

              <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <FaSignOutAlt className="mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
