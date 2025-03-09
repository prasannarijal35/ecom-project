import { Category } from "@/types/category";
import Image from "next/image";
import logo from "@/assets/images/logos/logo2.png";

export default function SingleCategoryItem({
  category,
}: {
  category: Category;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-50  hover:scale-105 trasnsition-all duration-200 rounded-lg px-2 py-5 shadow-lg ">
      <Image
        src={category.url ? category.url : logo}
        alt={category.name}
        priority
        height={1000}
        width={1000}
        className="h-[80px] w-[80px] object-cover object-center"
      />
      <h3 className="text-[15px] font-semibold text-primary text-center line-clamp-1">
        {category.name}
      </h3>
    </div>
  );
}
