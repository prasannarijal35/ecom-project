"use client";
import Image from "next/image";
import logo from "@/assets/images/logos/logo.png";
import Link from "next/link";
import { useState } from "react";
import { NavbarMenu, NavProfiles } from "@/components/common/header";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toogleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <section
      id="navbar"
      className="bg-white w-full sticky top-0 z-20 shadow-md border-b border-gray-200 "
    >
      <div className="container">
        <nav className=" w-full">
          <div className="flex flex-wrap items-center justify-between w-full">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <div className="flex items-center justify-center gap-0">
                <div>
                  <Image
                    src={logo}
                    alt="Logo"
                    height={800}
                    width={800}
                    quality={100}
                    className="h-auto w-[70px]"
                  />
                </div>
                <div className="font-semibold text-primary text-xl">
                  The <span className="text-secondary">Prasanna</span> Edit
                </div>
              </div>
            </Link>
            <NavProfiles toogleNav={toogleNav} />
            <NavbarMenu openNav={openNav} />
          </div>
        </nav>
      </div>
    </section>
  );
}
