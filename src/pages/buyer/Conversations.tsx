import React, { useState } from 'react';
import { 
  Search, MoreVertical, XCircle, Send, Phone, 
  MessageSquare, CheckCircle, Paperclip
} from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: string;
  sellerName: string;
  sellerEmail: string;
  sellerPhone: string;
  vehicle: string;
  relatedOpportunityId: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  status: 'active' | 'archived';
  messages: Message[];
}

const Conversations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      sellerName: 'Mike Johnson',
      sellerEmail: 'mike.johnson@email.com',
      sellerPhone: '(512) 555-1234',
      vehicle: '2018 Honda Accord EX',
      relatedOpportunityId: '1',
      lastMessage: 'That sounds good. When would you like to schedule the inspection?',
      lastMessageTime: '2025-05-12 14:30',
      unreadCount: 2,
      status: 'active',
      messages: [
        {
          id: '1',
          senderId: 'seller',
          content: 'Hi, I saw your message about my Honda Accord. Is it still available?',
          timestamp: '2025-05-12 14:00',
          status: 'read'
        },
        {
          id: '2',
          senderId: 'me',
          content: 'Yes, it is! I\'d love to schedule an inspection. Are you available this week?',
          timestamp: '2025-05-12 14:15',
          status: 'read'
        },
        {
          id: '3',
          senderId: 'seller',
          content: 'That sounds good. When would you like to schedule the inspection?',
          timestamp: '2025-05-12 14:30',
          status: 'read'
        }
      ]
    },
    {
      id: '2',
      sellerName: 'Sarah Williams',
      sellerEmail: 'sarah.williams@email.com',
      sellerPhone: '(512) 555-5678',
      vehicle: '2017 Ford F-150 XLT',
      relatedOpportunityId: '2',
      lastMessage: 'I can meet you tomorrow at 10am',
      lastMessageTime: '2025-05-12 13:45',
      unreadCount: 0,
      status: 'active',
      messages: [
        {
          id: '1',
          senderId: 'me',
          content: 'Hi Sarah, I\'m interested in your F-150. Can we schedule a viewing?',
          timestamp: '2025-05-12 13:30',
          status: 'read'
        },
        {
          id: '2',
          senderId: 'seller',
          content: 'I can meet you tomorrow at 10am',
          timestamp: '2025-05-12 13:45',
          status: 'read'
        }
      ]
    },
    {
      id: '3',
      sellerName: 'David Chen',
      sellerEmail: 'david@chenmotors.com',
      sellerPhone: '(512) 555-9012',
      vehicle: '2020 Toyota Camry LE',
      relatedOpportunityId: '3',
      lastMessage: 'The vehicle is still available for inspection',
      lastMessageTime: '2025-05-12 12:00',
      unreadCount: 0,
      status: 'active',
      messages: [
        {
          id: '1',
          senderId: 'seller',
          content: 'The vehicle is still available for inspection',
          timestamp: '2025-05-12 12:00',
          status: 'read'
        }
      ]
    },
    {
      id: '4',
      sellerName: 'Luis Martinez',
      sellerEmail: 'luis.martinez@email.com',
      sellerPhone: '(512) 555-3456',
      vehicle: '2019 Nissan Altima SR',
      relatedOpportunityId: '4',
      lastMessage: 'Thanks for the offer, I\'ll think about it',
      lastMessageTime: '2025-05-11 16:30',
      unreadCount: 0,
      status: 'active',
      messages: [
        {
          id: '1',
          senderId: 'me',
          content: 'I can offer $15,500 for the Altima',
          timestamp: '2025-05-11 16:00',
          status: 'read'
        },
        {
          id: '2',
          senderId: 'seller',
          content: 'Thanks for the offer, I\'ll think about it',
          timestamp: '2025-05-11 16:30',
          status: 'read'
        }
      ]
    },
    {
      id: '5',
      sellerName: 'Emily Davis',
      sellerEmail: 'emily.davis@email.com',
      sellerPhone: '(512) 555-2345',
      vehicle: '2016 BMW 328i',
      relatedOpportunityId: '5',
      lastMessage: 'Deal completed. Thanks!',
      lastMessageTime: '2025-05-10 15:00',
      unreadCount: 0,
      status: 'archived',
      messages: [
        {
          id: '1',
          senderId: 'seller',
          content: 'Deal completed. Thanks!',
          timestamp: '2025-05-10 15:00',
          status: 'read'
        }
      ]
    }
  ];

  const filteredConversations = conversations.filter(conversation => {
    return searchQuery === '' || 
      conversation.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.vehicle.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const activeCount = conversations.filter(c => c.status === 'active').length;
  const unreadCount = conversations.reduce((sum, c) => sum + c.unreadCount, 0);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      content: newMessage,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };

    selectedConversation.messages.push(newMsg);
    selectedConversation.lastMessage = newMessage;
    selectedConversation.lastMessageTime = new Date().toLocaleString();
    setNewMessage('');
  };

  return (
    <div className="flex overflow-hidden h-full">
      {/* Conversations List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900 mb-3">Conversations</h1>
          <div className="relative">
            <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-4">
          <div className="text-xs">
            <span className="font-semibold text-gray-900">{activeCount}</span>
            <span className="text-gray-500"> active</span>
          </div>
          <div className="text-xs">
            <span className="font-semibold text-gray-900">{unreadCount}</span>
            <span className="text-gray-500"> unread</span>
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation?.id === conversation.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-blue-600">
                    {conversation.sellerName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {conversation.sellerName}
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                      {conversation.lastMessageTime.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1 truncate">
                    {conversation.vehicle}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span className="ml-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full flex-shrink-0">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredConversations.length === 0 && (
            <div className="py-12 text-center">
              <MessageSquare size={32} color="#d1d5db" className="mx-auto mb-2" />
              <div className="text-sm text-gray-500">No conversations found</div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">
                    {selectedConversation.sellerName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    {selectedConversation.sellerName}
                  </h2>
                  <div className="text-xs text-gray-500">
                    {selectedConversation.vehicle}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                  <Phone size={14} color="#6b7280" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                  <MoreVertical size={14} color="#6b7280" />
                </button>
                <button 
                  onClick={() => setSelectedConversation(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.senderId === 'me'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className={`flex items-center gap-1 mt-1 text-xs ${
                    message.senderId === 'me' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    <span>{message.timestamp.split('T')[1]?.split('.')[0] || message.timestamp}</span>
                    {message.senderId === 'me' && (
                      <CheckCircle size={10} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <Paperclip size={16} color="#6b7280" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700"
              >
                <Send size={16} color="white" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <MessageSquare size={48} color="#d1d5db" className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Select a conversation</h3>
            <p className="text-sm text-gray-500">Choose a conversation from the list to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversations;
