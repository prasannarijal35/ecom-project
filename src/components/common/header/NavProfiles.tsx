"use client";
import { IoMenu } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import CartModal from "../../cart/CartModal";
export default function NavProfiles({ toogleNav }: { toogleNav: () => void }) {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="flex md:order-2 gap-0 md:gap-0 rtl:space-x-reverse ">
      <div className="flex justify-center items-center md:gap-2">
        <Link
          href={"/login"}
          className="flex gap-1 justify-center items-center font-medium hover:text-primary hover:bg-primary/10 p-2 rounded-md"
        >
          <FaUserLarge />
          <span className="hidden md:block">Login</span>
        </Link>
        <button
          className="flex gap-1 justify-center items-center font-medium hover:text-primary hover:bg-primary/10 p-2 rounded-md"
          onClick={openModal}
        >
          <FaShoppingCart />
          <span className="hidden md:block">Cart</span>
        </button>
      </div>
      <button
        type="button"
        className=" flex md:hidden gap-1 justify-center items-center font-medium hover:text-primary hover:bg-primary/10 p-2 rounded-md"
        onClick={toogleNav}
      >
        <IoMenu size={25} />
      </button>
      {modal && <CartModal closeModal={closeModal} />}
    </div>
  );
}
