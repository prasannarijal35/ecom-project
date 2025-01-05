import { items } from "@/types/products";
import logo from "@/assets/images/logos/logo.png";

export const ProductData: items[] = [
  {
    id: 1,
    colors: 3,
    title: "Classic Leather Jacket",
    description:
      "A timeless, high-quality leather jacket with a vintage design, perfect for any season.",
    price: 199.99,
    image: logo.src,
    discount: 0,
    category: {
      id: 1,
      name: "clothes",
    },
  },
  {
    id: 2,
    colors: 2,
    title: "Wireless Bluetooth Headphones",
    description:
      "Premium sound quality and comfort with noise cancellation, perfect for music lovers on the go.",
    price: 89.99,
    image: logo.src,
    discount: 10,
    category: {
      id: 2,
      name: "electronics", // Category: Electronics
    },
  },
  {
    id: 3,
    colors: 4,
    title: "Stainless Steel Kitchen Set",
    description:
      "Complete your kitchen with this durable, rust-resistant stainless steel set, including pots, pans, and utensils.",
    price: 129.99,
    image: logo.src,
    discount: 5,
    category: {
      id: 3,
      name: "kitchen", // Category: Kitchenware
    },
  },
  {
    id: 4,
    colors: 5,
    title: "Smartwatch Pro",
    description:
      "Stay connected and track your fitness with this feature-packed smartwatch, designed for modern living.",
    price: 249.99,
    image: logo.src,
    discount: 7,
    category: {
      id: 4,
      name: "electronics", // Category: Electronics
    },
  },
  {
    id: 5,
    colors: 3,
    title: "Canvas Travel Backpack",
    description:
      "Spacious, durable, and stylish, this canvas backpack is perfect for your next adventure.",
    price: 59.99,
    image: logo.src,
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
    description:
      "A timeless, high-quality leather jacket with a vintage design, perfect for any season.",
    price: 199.99,
    image: logo.src,
    discount: 15,
    category: {
      id: 6,
      name: "clothes", // Category: Clothes
    },
  },
  {
    id: 7,
    colors: 2,
    title: "Wireless Bluetooth Headphones",
    description:
      "Premium sound quality and comfort with noise cancellation, perfect for music lovers on the go.",
    price: 89.99,
    image: logo.src,
    discount: 4,
    category: {
      id: 7,
      name: "electronics", // Category: Electronics
    },
  },
  {
    id: 8,
    colors: 4,
    title: "Stainless Steel Kitchen Set",
    description:
      "Complete your kitchen with this durable, rust-resistant stainless steel set, including pots, pans, and utensils.",
    price: 129.99,
    image: logo.src,
    discount: 9,
    category: {
      id: 8,
      name: "kitchen", // Category: Kitchenware
    },
  },
];
