import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";

export default function SingleSliderItem({ banner }: { banner: Banner }) {
  return (
    <div className="relative w-full h-full ">
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <Image
          src={banner.image}
          alt={banner.title}
          quality={100}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[0] bg-black opacity-35"></div>
      <div className="relative h-full w-full z-[1] text-white">
        <div className="container h-full flex flex-col justify-center items-center md:items-start  ">
          <div className="w-full max-w-[650px] px-8 md:px-0 shadow-custom bg-transparent rounded-md ">
            <div className="flex items-center justify-center md:justify-start">
              <span className="uppercase font-medium bg-secondary/50 rounded-md px-2 py-1 text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[30px]">
                {banner.badgeText}
              </span>
            </div>
            <h1 className="text-center md:text-start text-gray-100 font-bold my-6 text-[32px] md:text-[40px] lg:text-[50px] lg:leading-[52px]">
              {banner.title}
            </h1>
            <p className="text-center md:text-start  text-gray-300 text-[16px] lg-[18px] lg:leading-[30px] font-normal">
              {banner.description}
            </p>
            <div className="flex justify-center md:justify-start mt-6 ">
              <Link
                href={banner.buttonLink}
                className="bg-primary py-2 px-6 rounded-sm font-semibold hover:bg-secondary transition-all duration-200"
              >
                {banner.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
