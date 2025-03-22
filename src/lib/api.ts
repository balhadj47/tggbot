import { DashboardStats, Order, Product, Customer, User } from '../types';
import { query } from './db';

// Dashboard
export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const totalSales = await query<{ total: number }[]>('SELECT SUM(totalAmount) as total FROM orders');
    const totalOrders = await query<{ count: number }[]>('SELECT COUNT(*) as count FROM orders');
    const totalCustomers = await query<{ count: number }[]>('SELECT COUNT(*) as count FROM customers');
    const totalProducts = await query<{ count: number }[]>('SELECT COUNT(*) as count FROM products');
    
    const recentOrders = await query<Order[]>(
      'SELECT * FROM orders ORDER BY createdAt DESC LIMIT 5'
    );
    
    const salesByDay = await query<{ date: string; amount: number }[]>(
      `SELECT DATE(createdAt) as date, SUM(totalAmount) as amount 
       FROM orders 
       WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 7 DAY) 
       GROUP BY DATE(createdAt) 
       ORDER BY date ASC`
    );

    return {
      totalSales: totalSales[0]?.total || 0,
      totalOrders: totalOrders[0]?.count || 0,
      totalCustomers: totalCustomers[0]?.count || 0,
      totalProducts: totalProducts[0]?.count || 0,
      recentOrders,
      salesByDay
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
}

// Products
export async function getProducts(): Promise<Product[]> {
  return query<Product[]>('SELECT * FROM products ORDER BY createdAt DESC');
}

export async function getProduct(id: number): Promise<Product> {
  const products = await query<Product[]>('SELECT * FROM products WHERE id = ?', [id]);
  if (products.length === 0) {
    throw new Error('Product not found');
  }
  return products[0];
}

// Orders
export async function getOrders(): Promise<Order[]> {
  return query<Order[]>('SELECT * FROM orders ORDER BY createdAt DESC');
}

export async function getOrder(id: number): Promise<Order> {
  const orders = await query<Order[]>('SELECT * FROM orders WHERE id = ?', [id]);
  if (orders.length === 0) {
    throw new Error('Order not found');
  }
  
  const orderItems = await query<any[]>(
    'SELECT oi.*, p.name as productName FROM order_items oi JOIN products p ON oi.productId = p.id WHERE oi.orderId = ?',
    [id]
  );
  
  return {
    ...orders[0],
    items: orderItems
  };
}

// Customers
export async function getCustomers(): Promise<Customer[]> {
  return query<Customer[]>('SELECT * FROM customers ORDER BY createdAt DESC');
}

export async function getCustomer(id: number): Promise<Customer> {
  const customers = await query<Customer[]>('SELECT * FROM customers WHERE id = ?', [id]);
  if (customers.length === 0) {
    throw new Error('Customer not found');
  }
  return customers[0];
}

// Users (Admin/Staff)
export async function getUsers(): Promise<User[]> {
  return query<User[]>('SELECT * FROM users ORDER BY createdAt DESC');
}

export async function getUser(id: number): Promise<User> {
  const users = await query<User[]>('SELECT * FROM users WHERE id = ?', [id]);
  if (users.length === 0) {
    throw new Error('User not found');
  }
  return users[0];
}
