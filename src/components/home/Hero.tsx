"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderThree from "@/assets/images/images/sliderThree.jpg";
import sliderOne from "@/assets/images/images/sliderOne.jpg";
import sliderTwo from "@/assets/images/images/sliderTwo.jpeg";
import sliderFour from "@/assets/images/images/sliderFour.png";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen h-[85vh]">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-[500px]"
      >
        <SwiperSlide>
          <Image
            src={sliderOne}
            alt="heheh"
            height={500}
            width={500}
            quality={100}
            layout="responsive"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sliderTwo}
            alt="heheh"
            height={500}
            width={500}
            quality={100}
            layout="responsive"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sliderThree}
            alt="heheh"
            height={500}
            width={500}
            quality={100}
            layout="responsive"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sliderFour}
            alt="heheh"
            height={500}
            width={500}
            quality={100}
            layout="responsive"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
