export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  url?: string | null;
  discountPercent: number;
  category: {
    id: number;
    name: string;
    url: string;
    slug: string;
  };
  createdAt: string;
  updatedAt: string;
};
