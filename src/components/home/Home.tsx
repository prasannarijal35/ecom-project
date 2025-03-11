import { Category, Hero, NewArrival, DealOfTheDay } from "@/components/home";
import { Ads } from "../common";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <DealOfTheDay />
      <Ads />
      <NewArrival />
    </>
  );
}
