export interface Order {
  id: number;
  status: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  discountPercent: number;
  totalAmount: number;
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
