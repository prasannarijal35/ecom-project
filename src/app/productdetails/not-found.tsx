import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import cat from "@/assets/images/others/sleepingcat.png";

export default function NotFound() {
  return (
    <section id="not-found" className="w-full py-20 min-h-[80vh] bg-gray-50">
      <div className="container w-full relative">
        <div className="absolute bottom-[-70px] left-[-10px] z-[0]">
          <Image src={cat} alt="sleepingcat" />
        </div>
        <div className="flex justify-center items-center gap-2 text-center flex-col ">
          <div className="flex justify-center items-center gap-2 ">
            <h1 className="text-4xl text-primary border-r-[2px] border-gray-500 pr-2">
              404
            </h1>

            <h2 className="text-[16px] text-gray-500"> Page not Found</h2>
          </div>
          <p className="text-semibold text-[18px] text-gray-600 mb-10 z-[1]">
            Opps! the page you are looking does not exist or is removed.
          </p>

          <div className="flex justify-center items-center gap-8 pt-4">
            <Link href={"/"}>
              <button className="bg-primary text-white rounded-md font-semibold py-1 px-3 flex justify-center items-center gap-3 hover:bg-secondary transition-all duration-300">
                <AiOutlineHome /> Back to Home
              </button>
            </Link>
            <Link href={"/shop"}>
              <button className="bg-primary text-white rounded-md font-semibold py-1 px-3 flex justify-center items-center gap-3 hover:bg-secondary transition-all duration-300">
                <CiShop /> Go to Shop
              </button>
            </Link>
          </div>

          <div className="mb-2">
            <p className="mt-5 text-gray-500 py-2 ">
              Contact us if you need any help.
            </p>
            <button className="bg-black rounded-md text-white font-normal py-1 px-3 hover:bg-red-500 hover:text-white">
              Need help ?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
