import { Product } from "@/types/product";
import jacket from "@/assets/images/categoryimages/jacket.png";
import pants from "@/assets/images/productimages/chino-pants.png";
import danimJacket from "@/assets/images/productimages/denim-jacket.png";
import casualBlazer from "@/assets/images/productimages/casualBlazer.png";
import backpack from "@/assets/images/productimages/backpack.png";
import sneaker from "@/assets/images/categoryimages/sneakers.png";
import overcoat from "@/assets/images/productimages/wool-overcoat.png";

export const ProductData: Product[] = [
  {
    id: 1,
    colors: 3,
    title: "Classic Leather Jacket",
    slug: "classic-leather-jacket",
    description:
      "A timeless, high-quality leather jacket with a vintage design, perfect for any season. Crafted from premium leather, it offers durability and a sleek, stylish appearance that improves with age. Its classic cut and attention to detail ensure a flattering fit, while the versatile design makes it suitable for both casual and formal outfits. Whether layered over a sweater or paired with a shirt, this jacket remains a wardrobe staple, adding a touch of sophistication and rugged charm to any look",
    price: 200,
    image: jacket.src,
    discount: 10,
    category: {
      id: 1,
      name: "clothes",
    },
  },
  {
    id: 2,
    colors: 2,
    title: "Slim Fit Chino Pants",
    slug: "slim-fit-chino-pants",
    description:
      "Comfortable and stylish chinos made for the modern man. Perfect for both casual and formal occasions.",
    price: 60,
    image: pants.src,
    discount: 10,
    category: {
      id: 2,
      name: "clothes", // Category: Clothes
    },
  },
  {
    id: 3,
    colors: 4,
    title: "Classic Denim Jacket",
    slug: "classic-denim-jacket",
    description:
      "A versatile, rugged denim jacket that pairs well with any outfit. The perfect outerwear for any season.",
    price: 110,
    image: danimJacket.src,
    discount: 5,
    category: {
      id: 3,
      name: "clothes", // Category: Clothes
    },
  },
  {
    id: 4,
    colors: 5,
    title: "Smart Casual Blazer",
    slug: "smart-casual-blazer",
    description:
      "This slim-fit blazer combines style and comfort, perfect for both office and evening wear.",
    price: 200,
    image: casualBlazer.src,
    discount: 7,
    category: {
      id: 4,
      name: "clothes", // Category: Clothes
    },
  },
  {
    id: 5,
    colors: 3,
    title: "Canvas Travel Backpack",
    slug: "canvas-travel-backpack",
    description:
      "Spacious, durable, and stylish, this canvas backpack is perfect for your next adventure.",
    price: 60,
    image: backpack.src,
    discount: 14,
    category: {
      id: 5,
      name: "accessories", // Category: Accessories
    },
  },
  {
    id: 6,
    colors: 3,
    title: "Classic Leather Jacket",
    slug: "classic-leather-jacket-2",
    description:
      "A timeless, high-quality leather jacket with a vintage design, perfect for any season.",
    price: 200,
    image: jacket.src,
    discount: 15,
    category: {
      id: 6,
      name: "clothes", // Category: Clothes
    },
  },
  {
    id: 7,
    colors: 2,
    title: "Men's Casual Sneakers",
    slug: "mens-casual-sneakers",
    description:
      "Stylish and comfortable sneakers, designed for everyday wear and perfect for casual outings.",
    price: 80,
    image: sneaker.src,
    discount: 4,
    category: {
      id: 7,
      name: "accessories", // Category: Accessories
    },
  },
  {
    id: 8,
    colors: 4,
    title: "Wool Overcoat",
    slug: "wool-overcoat",
    description:
      "A premium wool overcoat that offers warmth and style during colder months, perfect for layering over your best outfits.",
    price: 170,
    image: overcoat.src,
    discount: 9,
    category: {
      id: 8,
      name: "clothes", // Category: Clothes
    },
  },
];
