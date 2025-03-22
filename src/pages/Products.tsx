import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formatCurrency } from '../lib/utils';

// Mock data - in a real app, this would come from an API
const mockProducts = [
  { id: 1, name: 'Premium T-Shirt', description: 'High-quality cotton t-shirt with logo', price: 29.99, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', category: 'Apparel', stock: 45, createdAt: '2023-04-15T10:30:00Z', updatedAt: '2023-05-01T14:20:00Z' },
  { id: 2, name: 'Coffee Mug', description: 'Ceramic mug with logo', price: 14.99, imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', category: 'Accessories', stock: 78, createdAt: '2023-04-10T09:15:00Z', updatedAt: '2023-04-28T11:45:00Z' },
  { id: 3, name: 'Sticker Pack', description: 'Set of 5 vinyl stickers', price: 9.99, imageUrl: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', category: 'Accessories', stock: 120, createdAt: '2023-04-05T14:45:00Z', updatedAt: '2023-04-25T16:30:00Z' },
  { id: 4, name: 'Hoodie', description: 'Warm hoodie with embroidered logo', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', category: 'Apparel', stock: 32, createdAt: '2023-03-28T11:20:00Z', updatedAt: '2023-04-20T13:10:00Z' },
  { id: 5, name: 'Water Bottle', description: 'Stainless steel water bottle', price: 24.99, imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', category: 'Accessories', stock: 54, createdAt: '2023-03-20T16:35:00Z', updatedAt: '2023-04-18T09:55:00Z' },
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = mockProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <Button leftIcon={<Plus size={16} />}>Add Product</Button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" leftIcon={<Filter size={16} />}>Filter</Button>
      </div>

      {/* Products table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={product.imageUrl} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description.substring(0, 30)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(product.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={18} />
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

export default Products;
