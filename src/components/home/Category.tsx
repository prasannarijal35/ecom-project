"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CategoryData } from "@/data/category";
import SingleCategoryItem from "./SingleCategoryItem";

export default function Category() {
  const gradientBg: string[] = [
    "from-[#051937]",
    "from-[#A8EB12]",
    "from-[#D16BA5]",
    "from-[#370519]",
    "from-[#1217EB]",
    "from-[#371D05]",
    "from-[#EB7E12]",
    "from-[#B20000]",
  ];
  return (
    <section id="category" className="w-full pb-20">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {CategoryData.map((category, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "auto" }}
              className={`my-3 min-w-[200px] flex flex-shrink-0 items-center justify-center p-5 rounded-xl bg-gradient-to-b ${
                gradientBg[index % gradientBg.length]
              } hover:bg-primary`}
            >
              <SingleCategoryItem category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
