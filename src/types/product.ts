export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  imagePath: string;
  discountPercent: number;
  category: {
    id: number;
    name: string;
  };
};
