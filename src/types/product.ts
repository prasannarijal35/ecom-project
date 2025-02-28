export type Product = {
  id: number;
  colors: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  category: {
    id: number;
    name: string;
  };
};
