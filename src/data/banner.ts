import { Banner } from "@/types/banner";

import sliderThree from "@/assets/images/images/sliderThree.jpg";
import sliderOne from "@/assets/images/images/sliderOne.jpg";
import sliderTwo from "@/assets/images/images/sliderTwo.jpeg";
import sliderFour from "@/assets/images/images/sliderFour.png";
import sliderFive from "@/assets/images/images/sliderFive.jpg";
export const BannerData: Banner[] = [
  {
    id: 1,
    title: "Exclusive Sale on Men's Apparel",
    badgeText: "Men's Clothing",
    image: sliderOne.src,
    description:
      "Unlock exclusive discounts on men's clothing. Refresh your style with the best deals of the season!",
    buttonText: "Explore Deals",
    buttonLink: "/sale",
  },
  {
    id: 2,
    title: "Upgrade Your Look with New Arrivals",
    badgeText: "New Collection",
    image: sliderTwo.src,
    description:
      "Check out the latest arrivals in men's fashion. Elevate your style with fresh new pieces, available now!",
    buttonText: "Shop New Arrivals",
    buttonLink: "/new-arrivals",
  },
  {
    id: 3,
    title: "Seasonal Styles for Every Occasion",
    badgeText: "Seasonal Fashion",
    image: sliderThree.src,
    description:
      "Get ready for any season with our curated selection of men's fashion. From casual to formal, we've got you covered.",
    buttonText: "Browse Styles",
    buttonLink: "/seasonal",
  },
  {
    id: 4,
    title: "Perfect Fit, Premium Quality",
    badgeText: "Tailored Styles",
    image: sliderFour.src,
    description:
      "Discover the perfect fit with our premium tailored men's fashion. Look sharp and feel confident with every outfit!",
    buttonText: "Find Your Fit",
    buttonLink: "/tailored",
  },
  {
    id: 5,
    title: "Classic Elegance, Timeless Appeal",
    badgeText: "Refined Collection",
    image: sliderFive.src,
    description:
      "Elevate your wardrobe with our refined collection of classic styles. Embrace sophistication and timeless elegance every day!",
    buttonText: "Explore the Collection",
    buttonLink: "/refined-collection",
  },
];
