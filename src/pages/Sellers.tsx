import React, { useState } from 'react';
import { 
  Filter, Search, Plus, MoreVertical, XCircle, AlertCircle,
  User, Phone, Mail, MapPin, Star, MessageSquare
} from 'lucide-react';

interface Seller {
  id: string;
  name: string;
  type: 'private' | 'dealer';
  email: string;
  phone: string;
  location: string;
  rating?: number;
  totalTransactions: number;
  successfulTransactions: number;
  status: 'active' | 'inactive' | 'blocked';
  notes: string;
  lastContact: string;
}

const Sellers: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);

  const sellers: Seller[] = [
    {
      id: '1',
      name: 'Mike Johnson',
      type: 'private',
      email: 'mike.johnson@email.com',
      phone: '(512) 555-1234',
      location: 'Austin, TX',
      rating: 4.5,
      totalTransactions: 3,
      successfulTransactions: 3,
      status: 'active',
      notes: 'Reliable seller, quick responses',
      lastContact: '2025-05-12'
    },
    {
      id: '2',
      name: 'Sarah Williams',
      type: 'private',
      email: 'sarah.williams@email.com',
      phone: '(512) 555-5678',
      location: 'Austin, TX',
      rating: 4.8,
      totalTransactions: 5,
      successfulTransactions: 4,
      status: 'active',
      notes: 'Excellent communication',
      lastContact: '2025-05-11'
    },
    {
      id: '3',
      name: 'David Chen',
      type: 'dealer',
      email: 'david@chenmotors.com',
      phone: '(512) 555-9012',
      location: 'Austin, TX',
      rating: 4.2,
      totalTransactions: 12,
      successfulTransactions: 10,
      status: 'active',
      notes: 'Professional dealer, fair pricing',
      lastContact: '2025-05-10'
    },
    {
      id: '4',
      name: 'Luis Martinez',
      type: 'private',
      email: 'luis.martinez@email.com',
      phone: '(512) 555-3456',
      location: 'San Antonio, TX',
      rating: 3.9,
      totalTransactions: 2,
      successfulTransactions: 1,
      status: 'active',
      notes: 'One transaction fell through',
      lastContact: '2025-05-09'
    },
    {
      id: '5',
      name: 'Jason Brown',
      type: 'private',
      email: 'jason.brown@email.com',
      phone: '(512) 555-7890',
      location: 'Dallas, TX',
      rating: 4.0,
      totalTransactions: 4,
      successfulTransactions: 3,
      status: 'active',
      notes: 'Reasonable negotiator',
      lastContact: '2025-05-08'
    },
    {
      id: '6',
      name: 'Emily Davis',
      type: 'private',
      email: 'emily.davis@email.com',
      phone: '(512) 555-2345',
      location: 'Houston, TX',
      rating: 5.0,
      totalTransactions: 2,
      successfulTransactions: 2,
      status: 'active',
      notes: 'Perfect seller, highly recommend',
      lastContact: '2025-05-01'
    },
    {
      id: '7',
      name: 'Robert Kim',
      type: 'private',
      email: 'robert.kim@email.com',
      phone: '(512) 555-6789',
      location: 'Austin, TX',
      rating: 4.3,
      totalTransactions: 3,
      successfulTransactions: 3,
      status: 'active',
      notes: 'Honest about vehicle condition',
      lastContact: '2025-05-12'
    },
    {
      id: '8',
      name: 'Amanda White',
      type: 'private',
      email: 'amanda.white@email.com',
      phone: '(512) 555-8901',
      location: 'Austin, TX',
      rating: 4.6,
      totalTransactions: 4,
      successfulTransactions: 4,
      status: 'active',
      notes: 'Very responsive',
      lastContact: '2025-05-11'
    }
  ];

  const sellerTypes = [
    { id: 'private', name: 'Private Seller', color: '#3b82f6' },
    { id: 'dealer', name: 'Dealer', color: '#8b5cf6' }
  ];

  const statuses = [
    { id: 'active', name: 'Active', color: '#10b981' },
    { id: 'inactive', name: 'Inactive', color: '#6b7280' },
    { id: 'blocked', name: 'Blocked', color: '#ef4444' }
  ];

  const getTypeBadge = (type: string) => {
    const typeConfig = sellerTypes.find(t => t.id === type);
    if (!typeConfig) return '';
    return `bg-[${typeConfig.color}]/10 text-[${typeConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = statuses.find(s => s.id === status);
    if (!statusConfig) return '';
    return `bg-[${statusConfig.color}]/10 text-[${statusConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const filteredSellers = sellers.filter(seller => {
    const matchesType = selectedType === 'all' || seller.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || seller.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const privateCount = sellers.filter(s => s.type === 'private').length;
  const dealerCount = sellers.filter(s => s.type === 'dealer').length;
  const activeCount = sellers.filter(s => s.status === 'active').length;
  const avgRating = (sellers.reduce((sum, s) => sum + (s.rating || 0), 0) / sellers.length).toFixed(1);

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Sellers View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Sellers</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage your seller relationships
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Add Seller</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Private Sellers</div>
              <User size={14} color="#3b82f6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{privateCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Dealers</div>
              <User size={14} color="#8b5cf6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{dealerCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Active</div>
              <Star size={14} color="#10b981" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{activeCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Avg Rating</div>
              <Star size={14} color="#f59e0b" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{avgRating}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search sellers..."
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Filter size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                {sellerTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <AlertCircle size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                {statuses.map(status => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Sellers List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredSellers.map((seller) => (
              <div
                key={seller.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedSeller(seller)}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-blue-600">
                      {seller.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Seller Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{seller.name}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {seller.rating && (
                          <div className="flex items-center gap-0.5">
                            <Star size={12} color="#f59e0b" fill="#f59e0b" />
                            <span className="text-xs text-gray-600">{seller.rating}</span>
                          </div>
                        )}
                        <span className={getStatusBadge(seller.status)}>
                          {statuses.find(s => s.id === seller.status)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <span className={getTypeBadge(seller.type)}>
                        {sellerTypes.find(t => t.id === seller.type)?.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {seller.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Mail size={11} />
                        <span>{seller.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone size={11} />
                        <span>{seller.phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{seller.totalTransactions} transactions</span>
                      <span className="text-green-600">{seller.successfulTransactions} successful</span>
                      <span>Last contact: {seller.lastContact}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <MoreVertical size={14} color="#6b7280" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredSellers.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No sellers found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Seller Detail Panel */}
      {selectedSeller && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Seller Details</h2>
              <button 
                onClick={() => setSelectedSeller(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Avatar & Name */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-medium text-blue-600">
                  {selectedSeller.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">{selectedSeller.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={getTypeBadge(selectedSeller.type)}>
                    {sellerTypes.find(t => t.id === selectedSeller.type)?.name}
                  </span>
                  <span className={getStatusBadge(selectedSeller.status)}>
                    {statuses.find(s => s.id === selectedSeller.status)?.name}
                  </span>
                </div>
                {selectedSeller.rating && (
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={12} color="#f59e0b" fill="#f59e0b" />
                    <span className="text-xs text-gray-600">{selectedSeller.rating} rating</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Contact Information</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={12} color="#6b7280" />
                  <span className="text-xs text-gray-900">{selectedSeller.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} color="#6b7280" />
                  <span className="text-xs text-gray-900">{selectedSeller.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} color="#6b7280" />
                  <span className="text-xs text-gray-900">{selectedSeller.location}</span>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Transaction History</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Total Transactions</span>
                  <span className="text-xs text-gray-900">{selectedSeller.totalTransactions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Successful</span>
                  <span className="text-xs text-green-600">{selectedSeller.successfulTransactions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Success Rate</span>
                  <span className="text-xs text-gray-900">
                    {((selectedSeller.successfulTransactions / selectedSeller.totalTransactions) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedSeller.notes}</p>
            </div>

            {/* Last Contact */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Last Contact</div>
              <div className="text-xs text-gray-500">{selectedSeller.lastContact}</div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1.5">
                <MessageSquare size={14} />
                Send Message
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Phone size={14} />
                Call Seller
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Mail size={14} />
                Send Email
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <MoreVertical size={14} />
                More Options
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sellers;
