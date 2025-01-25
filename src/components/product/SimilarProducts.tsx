import { ProductData } from "@/data/products";
import { SectionTitle } from "../common";
import { Product } from "@/types/product";
import SingleProductItem from "./SingleProductItem";

export default function SimilarProducts() {
  return (
    <section id="related-products" className="w-full py-20">
      <div className="container">
        <SectionTitle
          normaltitle="Related"
          highlightedtitle="Products"
          description="More Products like this"
          items="items-start"
          text="text-start"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ProductData.slice(0, 4).map((item: Product, index: number) => (
            <SingleProductItem key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
