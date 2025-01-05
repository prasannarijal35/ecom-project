import Link from "next/link";
import { BsCCircle } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import logo from "@/assets/images/logos/logo.png";
import Image from "next/image";
import { IoLocation } from "react-icons/io5";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <section
        id="Footer"
        className="w-full h-full bg-gradient-to-b from-gray-50 to-white py-10 border-y-[1px] border-gray-200"
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="w-full">
              <div className="flex justify-start items-center gap-1">
                <Image
                  src={logo}
                  alt="logo"
                  height={1000}
                  width={1000}
                  quality={100}
                  className="h-[60px] w-auto object-cover object-center"
                />
                <div className="font-semibold text-primary text-[18px] ">
                  The <span className="text-secondary">Prasanna</span> Edit
                </div>
              </div>
              <p className="text-gray-700 text-[14px] line-clamp-5 py-3 ">
                Rijals Fashion Offering modern, stylish clothing that empowers
                the confident man. Discover timeless pieces and bold trends
                designed to elevate your everyday look.
              </p>
              <div className="flex md:flex items-center gap-3 mt-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className=" transition-all duration-300 text-primary rounded-lg border-[1px] border-primary  p-2  hover:text-white hover:bg-primary flex justify-center items-center"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className=" transition-all duration-300 text-primary rounded-lg border-[1px] border-primary  p-2  hover:text-white hover:bg-primary flex justify-center items-center"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://x.com"
                  target="_blank"
                  className=" transition-all duration-300 text-primary rounded-lg border-[1px] border-primary  p-2  hover:text-white hover:bg-primary flex justify-center items-center"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  className=" transition-all duration-300 text-primary rounded-lg border-[1px] border-primary  p-2  hover:text-white hover:bg-primary flex justify-center items-center"
                >
                  <FaTiktok />
                </Link>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[18px] text-secondary border-b-[1px] border-gray-200">
                Company
              </h2>
              <ul className="text-gray-700 text-[14px] mt-3 flex flex-col gap-2">
                <li>
                  <Link href="/" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Private Policiy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Term &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[18px] text-secondary border-b-[1px] border-gray-200">
                Contact
              </h2>
              <ul className="text-gray-700 text-[14px] mt-3 flex flex-col gap-2">
                <li className="flex justify-start items-center gap-2">
                  <FaPhone className="text-primary" />
                  <Link href={"./."}>(+977) 987654321</Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                  <FaPhone className="text-primary" />
                  <Link href={"./."}>(+061) 987654</Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                  <IoLocation className="text-primary" />
                  <Link href={"./."}>Pokhara, Nepal</Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  <Link href={"./."}>example@gmail.com</Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  <Link href={"./."}>example234@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[18px] text-secondary border-b-[1px] border-gray-200">
                Account
              </h2>
              <ul className="text-gray-700 text-[14px] mt-3 flex flex-col gap-2">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Login/Register
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    My Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    View Cart
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    My Order
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full py-4">
        <div className="container">
          <div className="flex justify-center items-center gap-1 font-light text-[12px] py-1">
            <BsCCircle size={12} />
            {year} Rijals fashion. All Rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
