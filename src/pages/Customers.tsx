import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formatCurrency, formatDate } from '../lib/utils';

// Mock data - in a real app, this would come from an API
const mockCustomers = [
  { id: 1, telegramId: '123456789', username: 'john_doe', firstName: 'John', lastName: 'Doe', orders: 12, totalSpent: 450.75, createdAt: '2023-04-10T09:15:00Z' },
  { id: 2, telegramId: '987654321', username: 'jane_smith', firstName: 'Jane', lastName: 'Smith', orders: 8, totalSpent: 325.50, createdAt: '2023-04-12T14:30:00Z' },
  { id: 3, telegramId: '456789123', username: 'mike_johnson', firstName: 'Mike', lastName: 'Johnson', orders: 5, totalSpent: 175.25, createdAt: '2023-04-15T11:45:00Z' },
  { id: 4, telegramId: '789123456', username: 'sarah_williams', firstName: 'Sarah', lastName: 'Williams', orders: 15, totalSpent: 620.00, createdAt: '2023-04-05T16:20:00Z' },
  { id: 5, telegramId: '321654987', username: 'david_brown', firstName: 'David', lastName: 'Brown', orders: 3, totalSpent: 95.75, createdAt: '2023-04-18T10:30:00Z' },
  { id: 6, telegramId: '654987321', username: 'emily_davis', firstName: 'Emily', lastName: 'Davis', orders: 7, totalSpent: 280.50, createdAt: '2023-04-08T13:15:00Z' },
  { id: 7, telegramId: '159753468', username: 'alex_miller', firstName: 'Alex', lastName: 'Miller', orders: 10, totalSpent: 410.25, createdAt: '2023-04-03T15:45:00Z' },
  { id: 8, telegramId: '852741963', username: 'olivia_wilson', firstName: 'Olivia', lastName: 'Wilson', orders: 6, totalSpent: 215.00, createdAt: '2023-04-14T12:10:00Z' },
];

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCustomers = mockCustomers.filter(customer => 
    customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (customer.lastName && customer.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    customer.telegramId.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header with title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search customers..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" leftIcon={<Filter size={16} />}>Filter</Button>
      </div>

      {/* Customers table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telegram ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                          {customer.firstName.charAt(0)}{customer.lastName?.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {customer.firstName} {customer.lastName}
                        </div>
                        <div className="text-sm text-gray-500">@{customer.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.telegramId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(customer.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(customer.totalSpent)}
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

export default Customers;
