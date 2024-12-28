import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <section id="topheader" className="bg-primary w-full ">
      <div className="container">
        <div className="w-full flex justify-center md:justify-between items-center py-1 ">
          <div className="flex justify-center items-center text-slate-100">
            <div className="flex justify-center items-center gap-4">
              <div className="hidden min-[500px]:flex justify-start items-center gap-2">
                <div className="icon">
                  <FaEnvelope className="text-[14px]" />
                </div>
                <div className="text-[14px]">example35@gmail.com</div>
              </div>
              <div className="w-full flex justify-start items-center gap-2 ">
                <div className="icon">
                  <FaPhoneAlt className="text-[14px]" />
                </div>
                <div className="text-[14px] ">(+977) 9876543210</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
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
    </section>
  );
}
