export interface Cart {
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  cartItems: CartItem[];
}
export interface CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

export interface Product {
  url: string;
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPercent: number;
  imagePath: string;
  stockCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  url: string;
  id: number;
  name: string;
  slug: string;
  imagePath: string;
  createdAt: string;
  updatedAt: string;
}
