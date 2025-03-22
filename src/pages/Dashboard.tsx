import React from 'react';
import { DollarSign, ShoppingBag, Users, Package } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import SalesChart from '../components/dashboard/SalesChart';
import Card from '../components/ui/Card';
import { formatCurrency } from '../lib/utils';

// Mock data - in a real app, this would come from an API
const mockStats = {
  totalSales: 24500,
  totalOrders: 156,
  totalCustomers: 89,
  totalProducts: 45,
  salesByDay: [
    { date: '2023-05-01', amount: 1200 },
    { date: '2023-05-02', amount: 1800 },
    { date: '2023-05-03', amount: 2200 },
    { date: '2023-05-04', amount: 1600 },
    { date: '2023-05-05', amount: 2400 },
    { date: '2023-05-06', amount: 3200 },
    { date: '2023-05-07', amount: 2800 },
  ],
  recentOrders: [
    { id: 1, userId: 5, status: 'completed', totalAmount: 125.99, createdAt: '2023-05-07T14:30:00Z', updatedAt: '2023-05-07T14:35:00Z', items: [] },
    { id: 2, userId: 8, status: 'processing', totalAmount: 89.50, createdAt: '2023-05-07T12:15:00Z', updatedAt: '2023-05-07T12:20:00Z', items: [] },
    { id: 3, userId: 12, status: 'pending', totalAmount: 245.00, createdAt: '2023-05-06T18:45:00Z', updatedAt: '2023-05-06T18:50:00Z', items: [] },
    { id: 4, userId: 3, status: 'completed', totalAmount: 65.75, createdAt: '2023-05-06T10:30:00Z', updatedAt: '2023-05-06T10:35:00Z', items: [] },
    { id: 5, userId: 7, status: 'cancelled', totalAmount: 120.25, createdAt: '2023-05-05T16:20:00Z', updatedAt: '2023-05-05T16:25:00Z', items: [] },
  ]
};

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sales"
          value={formatCurrency(mockStats.totalSales)}
          icon={<DollarSign />}
          change={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Total Orders"
          value={mockStats.totalOrders}
          icon={<ShoppingBag />}
          change={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="Total Customers"
          value={mockStats.totalCustomers}
          icon={<Users />}
          change={{ value: 5.1, isPositive: true }}
        />
        <StatCard
          title="Total Products"
          value={mockStats.totalProducts}
          icon={<Package />}
          change={{ value: 2.3, isPositive: false }}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesChart data={mockStats.salesByDay} />
        
        <Card title="Recent Orders">
          <RecentOrdersTable orders={mockStats.recentOrders} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
