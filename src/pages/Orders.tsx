import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formatCurrency, formatDate } from '../lib/utils';

// Mock data - in a real app, this would come from an API
const mockOrders = [
  { id: 1, userId: 5, status: 'completed', totalAmount: 125.99, createdAt: '2023-05-07T14:30:00Z', updatedAt: '2023-05-07T14:35:00Z', items: [] },
  { id: 2, userId: 8, status: 'processing', totalAmount: 89.50, createdAt: '2023-05-07T12:15:00Z', updatedAt: '2023-05-07T12:20:00Z', items: [] },
  { id: 3, userId: 12, status: 'pending', totalAmount: 245.00, createdAt: '2023-05-06T18:45:00Z', updatedAt: '2023-05-06T18:50:00Z', items: [] },
  { id: 4, userId: 3, status: 'completed', totalAmount: 65.75, createdAt: '2023-05-06T10:30:00Z', updatedAt: '2023-05-06T10:35:00Z', items: [] },
  { id: 5, userId: 7, status: 'cancelled', totalAmount: 120.25, createdAt: '2023-05-05T16:20:00Z', updatedAt: '2023-05-05T16:25:00Z', items: [] },
  { id: 6, userId: 9, status: 'completed', totalAmount: 175.50, createdAt: '2023-05-05T09:10:00Z', updatedAt: '2023-05-05T09:15:00Z', items: [] },
  { id: 7, userId: 2, status: 'processing', totalAmount: 95.25, createdAt: '2023-05-04T14:55:00Z', updatedAt: '2023-05-04T15:00:00Z', items: [] },
  { id: 8, userId: 11, status: 'completed', totalAmount: 210.75, createdAt: '2023-05-04T11:40:00Z', updatedAt: '2023-05-04T11:45:00Z', items: [] },
  { id: 9, userId: 6, status: 'pending', totalAmount: 55.99, createdAt: '2023-05-03T17:25:00Z', updatedAt: '2023-05-03T17:30:00Z', items: [] },
  { id: 10, userId: 4, status: 'cancelled', totalAmount: 145.50, createdAt: '2023-05-03T13:15:00Z', updatedAt: '2023-05-03T13:20:00Z', items: [] },
];

const Orders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toString().includes(searchTerm) || 
                          order.userId.toString().includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header with title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search order ID or customer..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <Button variant="outline" leftIcon={<Filter size={16} />}>More Filters</Button>
      </div>

      {/* Orders table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    User #{order.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(order.totalAmount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' : 
                        order.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Orders;
