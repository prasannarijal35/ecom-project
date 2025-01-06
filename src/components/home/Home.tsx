import { Category, Hero, NewArrival, OurProduct } from "@/components/home";
import { Ads } from "../common";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <OurProduct />
      <Ads />
      <NewArrival />
    </>
  );
}
