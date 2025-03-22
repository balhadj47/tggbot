import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Send } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formatDate } from '../lib/utils';

// Mock data - in a real app, this would come from an API
const mockMessages = [
  { id: 1, userId: 5, username: 'john_doe', message: 'How do I place an order?', timestamp: '2023-05-07T14:30:00Z', isRead: true },
  { id: 2, userId: 8, username: 'jane_smith', message: 'When will my order be shipped?', timestamp: '2023-05-07T12:15:00Z', isRead: true },
  { id: 3, userId: 12, username: 'mike_johnson', message: 'Do you have this t-shirt in blue?', timestamp: '2023-05-06T18:45:00Z', isRead: false },
  { id: 4, userId: 3, username: 'sarah_williams', message: 'I need to change my shipping address', timestamp: '2023-05-06T10:30:00Z', isRead: false },
  { id: 5, userId: 7, username: 'david_brown', message: 'Can I get a refund for my order?', timestamp: '2023-05-05T16:20:00Z', isRead: true },
];

const Messages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  
  const filteredMessages = mockMessages.filter(message => 
    message.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedMessageData = mockMessages.find(message => message.id === selectedMessage);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Bot Messages</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <Card>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              {filteredMessages.map((message) => (
                <div 
                  key={message.id}
                  className={`p-3 rounded-md cursor-pointer ${
                    selectedMessage === message.id 
                      ? 'bg-primary-50 border border-primary-200' 
                      : 'hover:bg-gray-50 border border-transparent'
                  } ${!message.isRead && 'bg-blue-50'}`}
                  onClick={() => setSelectedMessage(message.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                        {message.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="ml-2 font-medium text-gray-900">@{message.username}</span>
                    </div>
                    <span className="text-xs text-gray-500">{formatDate(message.timestamp)}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 truncate">{message.message}</p>
                  {!message.isRead && (
                    <div className="mt-1 flex justify-end">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        New
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Message Detail */}
        <div className="lg:col-span-2">
          <Card>
            {selectedMessageData ? (
              <div className="h-full flex flex-col">
                {/* Message header */}
                <div className="pb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                      {selectedMessageData.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">@{selectedMessageData.username}</p>
                      <p className="text-xs text-gray-500">User #{selectedMessageData.userId}</p>
                    </div>
                  </div>
                </div>
                
                {/* Message content */}
                <div className="py-4 flex-grow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                        {selectedMessageData.username.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="ml-3 bg-gray-100 rounded-lg py-2 px-4 max-w-[80%]">
                      <p className="text-sm text-gray-800">{selectedMessageData.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(selectedMessageData.timestamp)}</p>
                    </div>
                  </div>
                  
                  {/* Example bot response - in a real app, this would be from the API */}
                  <div className="flex items-start justify-end mb-4">
                    <div className="mr-3 bg-primary-100 rounded-lg py-2 px-4 max-w-[80%]">
                      <p className="text-sm text-primary-800">Hello! How can I help you today?</p>
                      <p className="text-xs text-primary-600 mt-1">{formatDate(new Date().toISOString())}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                        <MessageSquare size={16} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reply box */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Type your reply..."
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <Button 
                      className="rounded-l-none"
                      leftIcon={<Send size={16} />}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2">Select a message to view details</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
