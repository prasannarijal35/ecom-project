import { ProductData } from "@/data/products";
import { SectionTitle } from "@/components/common";
import { SingleProductItem } from "../product";

export default function OurProduct() {
  return (
    <section id="NewArrival" className="w-full py-20 bg-gray-50">
      <div className="container">
        <SectionTitle
          normaltitle="Our New "
          highlightedtitle="Arrivals"
          description="Check out out Newest Arrivals"
          items="items-start"
          text="text-start"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ProductData.map((product, index) => (
            <SingleProductItem product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
