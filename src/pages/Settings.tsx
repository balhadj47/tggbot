import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      
      {/* Bot Settings */}
      <Card title="Telegram Bot Settings">
        <div className="space-y-4">
          <div>
            <label htmlFor="bot-token" className="block text-sm font-medium text-gray-700">
              Bot Token
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="bot-token"
                id="bot-token"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="6615525711:AAGaOATovYXdzdi0xtu4p-WjOMAv5qEcahs"
                defaultValue="6615525711:AAGaOATovYXdzdi0xtu4p-WjOMAv5qEcahs"
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Your Telegram bot token from BotFather
            </p>
          </div>
          
          <div>
            <label htmlFor="bot-name" className="block text-sm font-medium text-gray-700">
              Bot Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="bot-name"
                id="bot-name"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="My Store Bot"
                defaultValue="TeleStore Bot"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="welcome-message" className="block text-sm font-medium text-gray-700">
              Welcome Message
            </label>
            <div className="mt-1">
              <textarea
                id="welcome-message"
                name="welcome-message"
                rows={3}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                defaultValue="Welcome to our store! Type /start to begin shopping."
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Message sent to users when they first interact with your bot
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button leftIcon={<Save size={16} />}>Save Bot Settings</Button>
        </div>
      </Card>
      
      {/* Store Settings */}
      <Card title="Store Settings">
        <div className="space-y-4">
          <div>
            <label htmlFor="store-name" className="block text-sm font-medium text-gray-700">
              Store Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="store-name"
                id="store-name"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                defaultValue="TeleStore"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
              Currency
            </label>
            <div className="mt-1">
              <select
                id="currency"
                name="currency"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                defaultValue="USD"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Methods
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="payment-crypto"
                  name="payment-methods"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="payment-crypto" className="ml-2 block text-sm text-gray-700">
                  Cryptocurrency
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="payment-card"
                  name="payment-methods"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="payment-card" className="ml-2 block text-sm text-gray-700">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="payment-bank"
                  name="payment-methods"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment-bank" className="ml-2 block text-sm text-gray-700">
                  Bank Transfer
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button leftIcon={<Save size={16} />}>Save Store Settings</Button>
        </div>
      </Card>
      
      {/* Database Settings */}
      <Card title="Database Settings">
        <div className="space-y-4">
          <div>
            <label htmlFor="db-host" className="block text-sm font-medium text-gray-700">
              Host
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="db-host"
                id="db-host"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                defaultValue="127.0.0.1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="db-user" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="db-user"
                  id="db-user"
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  defaultValue="bolt"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="db-password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="db-password"
                  id="db-password"
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  defaultValue="bolt"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="db-name" className="block text-sm font-medium text-gray-700">
              Database Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="db-name"
                id="db-name"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                defaultValue="bolt"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button leftIcon={<Save size={16} />}>Save Database Settings</Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
