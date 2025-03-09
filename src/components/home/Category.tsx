"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SingleCategoryItem from "./SingleCategoryItem";
import { useEffect, useState } from "react";
import { Category as Cat } from "@/types/category";
import { getAllCategories } from "@/services/admin/addCategoryServices";

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

  const [items, setItems] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const itemData = await getAllCategories({});
        setItems(itemData.data);
      } catch (error: any) {
        setErrorMessage(
          error.response?.data?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);
  if (loading) {
    return <p className="text-center text-gray-400"> loading categories</p>;
  }
  if (errorMessage) {
    return <p className="text-center text-red-400">{errorMessage}</p>;
  }

  return (
    <section id="category" className="w-full h-full py-20">
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
          {items.map((category, index) => (
            <SwiperSlide
              key={category.id}
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
