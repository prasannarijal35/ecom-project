"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

interface Props {
  title: string;
  link: string;
  dropdowns?: {
    title: string;
    link: string;
  }[];
}
export default function NavLink({ title, link, dropdowns }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <Link
        href={link}
        className={`flex justify-center items-center py-2 px-3 w-full ${
          dropdownOpen ? "text-primary" : "text-gray-900"
        } } text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-01 md:hover:text-[17px] transition-all duration-300`}
      >
        <span>{title}</span>
        {dropdowns && dropdowns.length > 0 && <IoChevronDownOutline />}
      </Link>

      {dropdowns && dropdowns.length > 0 && dropdownOpen && (
        <div
          id="dropdownNavbar"
          className="z-10 md:absolute top-[100%] font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-md w-full md:w-[120px]"
        >
          <ul className="py-2 text-[16px] text-gray-700 ">
            {dropdowns.map((dropdown, index) => (
              <li key={index} className="text-center md:text-left">
                <Link
                  href={dropdown.link}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-all duration-300 hover:pl-6"
                >
                  {dropdown.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
