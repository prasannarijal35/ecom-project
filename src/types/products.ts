export type items = {
  id: number;
  colors: number;
  title: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  category: {
    id: number;
    name: string;
  };
};
