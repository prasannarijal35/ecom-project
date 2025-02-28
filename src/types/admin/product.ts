import { Category } from "@/types/admin/category";

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPercent: number;
  stockCount: number;
  url: string | null;
  category: Category;
  createdAt: string;
  updatedAt: string;
};

export type ProductForm = {
  name: string;
  image?: File;
  description: string;
  price: number;
  discountPercent: number;
  stockCount: number;
  categoryId: number;
};
