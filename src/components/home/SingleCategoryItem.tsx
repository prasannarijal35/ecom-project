import { category } from "@/types/category";
import Image from "next/image";

export default function SingleCategoryItem({
  category,
}: {
  category: category;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white hover:scale-105 trasnsition-all duration-200 rounded-lg px-2 py-5 shadow-lg ">
      <Image
        src={category.image}
        alt={category.title}
        height={1000}
        width={1000}
        className="h-[80px] w-[80px] object-cover object-center hover:scale-125"
      />
      <h3 className="text-[15px] font-semibold text-primary text-center line-clamp-1">
        {category.title}
      </h3>

      <p className="text-secondary text-[12px]">
        {category.productCount} Items
      </p>
    </div>
  );
}
