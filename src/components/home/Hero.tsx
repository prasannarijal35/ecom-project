"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { BannerData } from "@/data/banner";
import { Banner } from "@/types/banner";
import { SingleSliderItem } from "@/components/home";

export default function Hero() {
  return (
    <section className="h-[80vh] ">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className=" h-full"
      >
        {BannerData.map((banner: Banner, index: number) => (
          <SwiperSlide key={index}>
            <SingleSliderItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
