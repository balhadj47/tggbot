import React from 'react';
import Card from '../components/ui/Card';
import { formatCurrency } from '../lib/utils';

const Analytics: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const salesData = [
    { month: 'Jan', amount: 12500 },
    { month: 'Feb', amount: 15000 },
    { month: 'Mar', amount: 18000 },
    { month: 'Apr', amount: 16500 },
    { month: 'May', amount: 21000 },
    { month: 'Jun', amount: 24500 },
  ];

  const categoryData = [
    { name: 'Apparel', percentage: 45 },
    { name: 'Accessories', percentage: 30 },
    { name: 'Electronics', percentage: 15 },
    { name: 'Other', percentage: 10 },
  ];

  const customerStats = {
    total: 250,
    new: 45,
    returning: 205,
    averageSpend: 175.50,
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
      
      {/* Sales Overview */}
      <Card title="Sales Overview">
        <div className="h-64">
          <div className="h-full flex items-end space-x-2">
            {salesData.map((item, index) => {
              const height = (item.amount / 25000) * 100;
              
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-primary-200 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="mt-2 text-xs text-gray-500">{item.month}</div>
                  <div className="text-xs font-medium">{formatCurrency(item.amount)}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="text-sm text-gray-500">
            Total: {formatCurrency(salesData.reduce((sum, item) => sum + item.amount, 0))}
          </div>
          <div className="text-sm text-green-600 font-medium">
            +18.5% from last period
          </div>
        </div>
      </Card>
      
      {/* Category Distribution */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Sales by Category">
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Customer Stats */}
        <Card title="Customer Insights">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-semibold text-gray-900">{customerStats.total}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">New Customers</p>
              <p className="text-2xl font-semibold text-green-600">{customerStats.new}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Returning Customers</p>
              <p className="text-2xl font-semibold text-gray-900">{customerStats.returning}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Average Spend</p>
              <p className="text-2xl font-semibold text-gray-900">{formatCurrency(customerStats.averageSpend)}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">Customer Retention</span>
              <span className="text-sm text-gray-500">82%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Popular Products */}
      <Card title="Top Selling Products">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Sold
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="T-Shirt" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Premium T-Shirt</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  245
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatCurrency(7347.55)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  8.2%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Hoodie" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Hoodie</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  187
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatCurrency(9348.13)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  7.5%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Mug" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Coffee Mug</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  156
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatCurrency(2338.44)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6.8%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
