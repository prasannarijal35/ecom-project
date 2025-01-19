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
    <header className="sticky top-0 z-[1] flex items-center justify-between py-3 px-2 bg-white w-full shadow-lg">
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
          <div className="absolute right-0 top-11 mt-2 bg-white  rounded-md border-[1px] border-gray-200 w-60">
            <div className="flex flex-col justify-center items-center py-2  border-b-[1px] border-gray-200 rounded-t-md">
              <div className="flex justify-center items-center mb-2">
                <Image
                  src={violet}
                  alt="violet"
                  height={100}
                  width={100}
                  quality={100}
                  className="h-16 w-auto rounded-full"
                />
              </div>
              <h1 className="text-[14px] font-medium">Mr. Prasanna Rijal</h1>
              <p className="text-[10px] font-normal text-gray-500">
                admin@lamo.com
              </p>
            </div>
            <ul className="space-y-2">
              <li className=" p-2  cursor-pointer">
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded-md p-2 flex justify-center items-center">
                    <FaUser className="text-primary" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-normal text-[14px] text-gray-700">
                      Profile
                    </div>
                    <span className="font-normal text-gray-500 text-[10px]">
                      View and update your profile.
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center p-2  cursor-pointer">
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded-md p-2 flex justify-center items-center">
                    <FaCog className="text-primary" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-normal text-[14px] text-gray-700">
                      Settings
                    </div>
                    <span className="font-normal text-gray-500 text-[10px]">
                      Adjust your account settings.
                    </span>
                  </div>
                </div>
              </li>
              <div className="p-2">
                <button className="flex items-center justify-center gap-2 p-2 w-full bg-primary text-white text-[14px] text-center rounded-md ">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
