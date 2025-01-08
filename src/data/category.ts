import { category } from "@/types/category";
import tshirt from "@/assets/images/categoryimages/tshirt.png";
import jacket from "@/assets/images/categoryimages/jacket.png";
import sweater from "@/assets/images/categoryimages/sweater.png";
import sneaker from "@/assets/images/categoryimages/sneakers.png";
import hoodie from "@/assets/images/categoryimages/hoodie.png";
import shirt from "@/assets/images/categoryimages/shirt.png";
import blazer from "@/assets/images/categoryimages/blazer.png";
import sweatpants from "@/assets/images/categoryimages/sweatpants.png";
import tracksuit from "@/assets/images/categoryimages/tracksuit.png";
import cap from "@/assets/images/categoryimages/cap.png";

export const CategoryData: category[] = [
  {
    id: 1,
    title: "T-Shirt",
    productCount: 320,
    image: tshirt.src,
  },
  {
    id: 2,
    title: "Jacket",
    productCount: 180,
    image: jacket.src,
  },
  {
    id: 3,
    title: "Sweater",
    productCount: 210,
    image: sweater.src,
  },
  {
    id: 4,
    title: "Shorts",
    productCount: 500,
    image: sweatpants.src,
  },
  {
    id: 5,
    title: "Sneakers",
    productCount: 375,
    image: sneaker.src,
  },
  {
    id: 6,
    title: "Hoodie",
    productCount: 450,
    image: hoodie.src,
  },
  {
    id: 7,
    title: "Shirt",
    productCount: 380,
    image: shirt.src,
  },
  {
    id: 8,
    title: "Blazer",
    productCount: 120,
    image: blazer.src,
  },

  {
    id: 9,
    title: "Sweatpants",
    productCount: 410,
    image: sweatpants.src,
  },
  {
    id: 10,
    title: "Tracksuit",
    productCount: 230,
    image: tracksuit.src,
  },
  {
    id: 11,
    title: "Cap",
    productCount: 600,
    image: cap.src,
  },
];
