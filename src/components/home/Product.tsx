import { ProductData } from "@/data/products";
import SingleProductItem from "./SingleProductItem";

export default function Product() {
  return (
    <section id="product" className=" container w-full  pb-10">
      <h1 className="py-4  font-semibold text-2xl md:text-3xl">Our Items:</h1>
      <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 gap-2 md:gap-8 lg:gap-8">
        {ProductData.map((product, index) => (
          <SingleProductItem product={product} key={index} />
        ))}
      </div>
    </section>
  );
}
