import Image from "next/image";
import banner from "@/assets/images/sliderimages/sliderThree.jpg";
export default function Ads() {
  return (
    <section id="ads" className="w-full">
      <div className="container">
        <div className="w-full">
          <Image
            src={banner}
            alt="banner"
            height={1000}
            width={1000}
            quality={100}
            className="w-full h-auto object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
