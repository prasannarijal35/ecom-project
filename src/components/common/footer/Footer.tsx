import Link from "next/link";
import { BsCCircle } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-gradient-to-b from-violet-900 to-primary pt-10">
      <div className="container text-white">
        <div className="grid md:grid-cols-4 gap-8 p-4">
          <div>
            <h1 className="text-xl mb-3 font-semibold">About us</h1>
            <p className="text-sm">
              Rijals Fashion Offering modern, stylish clothing that empowers the
              confident man. Discover timeless pieces and bold trends designed
              to elevate your everyday look.
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-3 font-semibold">Quick links</h1>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Our items
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl mb-3 font-semibold">Contact Us</h1>
            <ul className="space-y-2 text-sm">
              <li>Email: example@gmail.com</li>
              <li>Phone: (+977) 987654321</li>
              <li>Adress: Pokhara,Nepal</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl mb-3 font-semibold ml-3">Follow us</h1>
            <div className="flex md:flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className=" transition-all duration-300 text-white rounded-full  p-2  hover:text-primary hover:bg-white flex justify-center items-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className=" transition-all duration-300 text-white rounded-full  p-2  hover:text-primary hover:bg-white flex justify-center items-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                className=" transition-all duration-300 text-white rounded-full  p-2  hover:text-primary hover:bg-white flex justify-center items-center"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                className=" transition-all duration-300 text-white rounded-full  p-2  hover:text-primary hover:bg-white flex justify-center items-center"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-center items-center gap-1 border-t border-gray-400 font-light text-[12px]">
          <BsCCircle size={12} />
          Rijals fashion. All Rights reserved.
        </div>
      </div>
    </footer>
  );
}
