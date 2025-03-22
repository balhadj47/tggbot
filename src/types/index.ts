export interface User {
  id: number;
  username: string;
  role: 'admin' | 'manager';
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: number;
  userId: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  totalAmount: number;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface Customer {
  id: number;
  telegramId: string;
  username: string;
  firstName: string;
  lastName?: string;
  orders: number;
  totalSpent: number;
  createdAt: string;
}

export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  recentOrders: Order[];
  salesByDay: { date: string; amount: number }[];
}
