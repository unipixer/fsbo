import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, Search, Plus, MoreVertical, User, Calendar, 
  MessageSquare, Phone, ArrowUpDown, XCircle,
  Clock, AlertCircle, CheckSquare, Square
} from 'lucide-react';

interface Opportunity {
  id: string;
  vehicle: string;
  year: string;
  make: string;
  model: string;
  price: number;
  mileage: string;
  seller: string;
  sellerType: 'private' | 'dealer';
  source: 'facebook' | 'offerup' | 'craigslist';
  assignedTo: string;
  stage: 'new' | 'contacted' | 'negotiating' | 'appraisal' | 'offer_made' | 'closed';
  lastActivity: string;
  followUpDate?: string;
  priority: 'high' | 'medium' | 'low';
  notes: string;
  image: string;
  createdAt: string;
}

const Opportunities: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedBuyer, setSelectedBuyer] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [sortField, setSortField] = useState<'createdAt' | 'price' | 'lastActivity'>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const opportunities: Opportunity[] = [
    {
      id: '1',
      vehicle: '2018 Honda Accord EX',
      year: '2018',
      make: 'Honda',
      model: 'Accord EX',
      price: 18500,
      mileage: '45,000',
      seller: 'Mike Johnson',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'new',
      lastActivity: '2 hours ago',
      priority: 'high',
      notes: 'Seller motivated, needs quick sale',
      image: '/images/car1.jpg',
      createdAt: '2025-05-12'
    },
    {
      id: '2',
      vehicle: '2017 Ford F-150 XLT',
      year: '2017',
      make: 'Ford',
      model: 'F-150 XLT',
      price: 32000,
      mileage: '62,000',
      seller: 'Sarah Williams',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'contacted',
      lastActivity: '5 hours ago',
      followUpDate: 'Today, 3:00 PM',
      priority: 'high',
      notes: 'Discussing price, willing to negotiate',
      image: '/images/car2.jpg',
      createdAt: '2025-05-11'
    },
    {
      id: '3',
      vehicle: '2020 Toyota Camry LE',
      year: '2020',
      make: 'Toyota',
      model: 'Camry LE',
      price: 21500,
      mileage: '38,000',
      seller: 'David Chen',
      sellerType: 'dealer',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'negotiating',
      lastActivity: '1 day ago',
      followUpDate: 'Tomorrow, 10:00 AM',
      priority: 'medium',
      notes: 'Waiting on appraisal results',
      image: '/images/car3.jpg',
      createdAt: '2025-05-10'
    },
    {
      id: '4',
      vehicle: '2019 Nissan Altima SR',
      year: '2019',
      make: 'Nissan',
      model: 'Altima SR',
      price: 17800,
      mileage: '52,000',
      seller: 'Luis Martinez',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'appraisal',
      lastActivity: '3 hours ago',
      priority: 'medium',
      notes: 'Appraiser assigned',
      image: '/images/car4.jpg',
      createdAt: '2025-05-09'
    },
    {
      id: '5',
      vehicle: '2016 BMW 328i',
      year: '2016',
      make: 'BMW',
      model: '328i',
      price: 24500,
      mileage: '58,000',
      seller: 'Jason Brown',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'offer_made',
      lastActivity: '2 days ago',
      followUpDate: 'May 15, 2025',
      priority: 'high',
      notes: 'Offer $22,500 submitted',
      image: '/images/car5.jpg',
      createdAt: '2025-05-08'
    },
    {
      id: '6',
      vehicle: '2018 Chevrolet Silverado',
      year: '2018',
      make: 'Chevrolet',
      model: 'Silverado',
      price: 35000,
      mileage: '48,000',
      seller: 'Emily Davis',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'closed',
      lastActivity: '1 week ago',
      priority: 'low',
      notes: 'Purchased for $33,500',
      image: '/images/car6.jpg',
      createdAt: '2025-05-01'
    },
    {
      id: '7',
      vehicle: '2019 Hyundai Sonata',
      year: '2019',
      make: 'Hyundai',
      model: 'Sonata',
      price: 16500,
      mileage: '41,000',
      seller: 'Robert Kim',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'new',
      lastActivity: '30 minutes ago',
      priority: 'medium',
      notes: 'Fresh listing, just contacted',
      image: '/images/car7.jpg',
      createdAt: '2025-05-12'
    },
    {
      id: '8',
      vehicle: '2020 Mazda CX-5',
      year: '2020',
      make: 'Mazda',
      model: 'CX-5',
      price: 26500,
      mileage: '35,000',
      seller: 'Amanda White',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'contacted',
      lastActivity: '4 hours ago',
      followUpDate: 'Today, 5:00 PM',
      priority: 'high',
      notes: 'Seller asking for more time',
      image: '/images/car8.jpg',
      createdAt: '2025-05-11'
    },
    {
      id: '9',
      vehicle: '2021 Tesla Model 3',
      year: '2021',
      make: 'Tesla',
      model: 'Model 3',
      price: 38000,
      mileage: '25,000',
      seller: 'Chris Taylor',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'Alex Thompson',
      stage: 'new',
      lastActivity: '1 hour ago',
      priority: 'high',
      notes: 'Electric vehicle, good condition',
      image: '/images/car9.jpg',
      createdAt: '2025-05-12'
    },
    {
      id: '10',
      vehicle: '2017 Subaru Outback',
      year: '2017',
      make: 'Subaru',
      model: 'Outback',
      price: 19500,
      mileage: '55,000',
      seller: 'Lisa Anderson',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'contacted',
      lastActivity: '6 hours ago',
      followUpDate: 'Tomorrow, 2:00 PM',
      priority: 'medium',
      notes: 'Family car, well maintained',
      image: '/images/car10.jpg',
      createdAt: '2025-05-10'
    }
  ];

  const stages = [
    { id: 'new', name: 'New', color: '#3b82f6' },
    { id: 'contacted', name: 'Contacted', color: '#8b5cf6' },
    { id: 'negotiating', name: 'Negotiating', color: '#f59e0b' },
    { id: 'appraisal', name: 'Appraisal', color: '#f97316' },
    { id: 'offer_made', name: 'Offer Made', color: '#06b6d4' },
    { id: 'closed', name: 'Closed', color: '#10b981' }
  ];

  const buyers = ['James Wilson', 'Maria Garcia', 'Alex Thompson'];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'medium': return 'bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'low': return 'bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const getSourceBadge = (source: string) => {
    switch (source) {
      case 'facebook': return 'bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'offerup': return 'bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'craigslist': return 'bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };


  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSource = selectedSource === 'all' || opp.source === selectedSource;
    const matchesStage = selectedStage === 'all' || opp.stage === selectedStage;
    const matchesBuyer = selectedBuyer === 'all' || opp.assignedTo === selectedBuyer;
    const matchesPriority = selectedPriority === 'all' || opp.priority === selectedPriority;
    const matchesSearch = searchQuery === '' || 
      opp.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSource && matchesStage && matchesBuyer && matchesPriority && matchesSearch;
  });

  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'price') {
      comparison = a.price - b.price;
    } else if (sortField === 'createdAt') {
      comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortField === 'lastActivity') {
      comparison = a.lastActivity.localeCompare(b.lastActivity);
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleSort = (field: 'createdAt' | 'price' | 'lastActivity') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === sortedOpportunities.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(sortedOpportunities.map(opp => opp.id)));
    }
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Opportunities View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Opportunities</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              View and manage all vehicle acquisition opportunities
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Add Opportunity</span>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-[10.5px] text-gray-500">Total Opportunities</div>
                <div className="text-lg font-bold text-gray-900">{opportunities.length}</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-[10.5px] text-gray-500">Total Value</div>
                <div className="text-lg font-bold text-gray-900">${opportunities.reduce((sum, opp) => sum + opp.price, 0).toLocaleString()}</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-[10.5px] text-gray-500">High Priority</div>
                <div className="text-lg font-bold text-red-600">{opportunities.filter(o => o.priority === 'high').length}</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-[10.5px] text-gray-500">Follow-ups Due</div>
                <div className="text-lg font-bold text-orange-600">{opportunities.filter(o => o.followUpDate).length}</div>
              </div>
            </div>
            {selectedIds.size > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">{selectedIds.size} selected</span>
                <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-blue-700">
                  Bulk Action
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vehicles, sellers..."
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Filter size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
              >
                <option value="all">All Sources</option>
                <option value="facebook">Facebook</option>
                <option value="offerup">OfferUp</option>
                <option value="craigslist">Craigslist</option>
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <User size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedBuyer}
                onChange={(e) => setSelectedBuyer(e.target.value)}
              >
                <option value="all">All Buyers</option>
                {buyers.map(buyer => (
                  <option key={buyer} value={buyer}>{buyer}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <AlertCircle size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
              >
                <option value="all">All Stages</option>
                {stages.map(stage => (
                  <option key={stage.id} value={stage.id}>{stage.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Clock size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Opportunities Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
            <div className="col-span-0.5 flex items-center">
              <button onClick={toggleSelectAll} className="hover:bg-gray-200 rounded p-0.5">
                {selectedIds.size === sortedOpportunities.length && sortedOpportunities.length > 0 ? (
                  <CheckSquare size={14} color="#6b7280" />
                ) : (
                  <Square size={14} color="#9ca3af" />
                )}
              </button>
            </div>
            <div className="col-span-3">Vehicle</div>
            <div 
              className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-gray-900"
              onClick={() => handleSort('price')}
            >
              Price
              <ArrowUpDown size={12} color={sortField === 'price' ? '#2563eb' : '#9ca3af'} />
            </div>
            <div className="col-span-2">Seller</div>
            <div className="col-span-1.5">Stage</div>
            <div className="col-span-1.5">Assigned To</div>
            <div 
              className="col-span-1 flex items-center gap-1 cursor-pointer hover:text-gray-900"
              onClick={() => handleSort('lastActivity')}
            >
              Activity
              <ArrowUpDown size={12} color={sortField === 'lastActivity' ? '#2563eb' : '#9ca3af'} />
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {sortedOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedOpportunity(opp)}
              >
                <div className="col-span-0.5 flex items-center" onClick={(e) => { e.stopPropagation(); toggleSelect(opp.id); }}>
                  <button className="hover:bg-gray-200 rounded p-0.5">
                    {selectedIds.has(opp.id) ? (
                      <CheckSquare size={14} color="#2563eb" />
                    ) : (
                      <Square size={14} color="#d1d5db" />
                    )}
                  </button>
                </div>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="w-12 h-9 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={opp.image} alt={opp.vehicle} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900 truncate">{opp.vehicle}</div>
                    <div className="text-[10.5px] text-gray-500">{opp.mileage} mi</div>
                  </div>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-xs font-semibold text-gray-900">${opp.price.toLocaleString()}</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <div className="min-w-0">
                    <div className="text-xs text-gray-900 truncate">{opp.seller}</div>
                    <span className={getSourceBadge(opp.source)}>{opp.source}</span>
                  </div>
                </div>
                <div className="col-span-1.5 flex items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stages.find(s => s.id === opp.stage)?.color }} />
                    <span className="text-xs text-gray-700">{stages.find(s => s.id === opp.stage)?.name}</span>
                  </div>
                </div>
                <div className="col-span-1.5 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-medium text-blue-600">
                      {opp.assignedTo.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-[10.5px] text-gray-600 truncate">{opp.assignedTo}</span>
                </div>
                <div className="col-span-1 flex items-center gap-1">
                  <span className={getPriorityBadge(opp.priority)}>
                    {opp.priority.charAt(0).toUpperCase() + opp.priority.slice(1)}
                  </span>
                  {opp.followUpDate && (
                    <div className="flex items-center gap-0.5 text-[10px] text-orange-600">
                      <Clock size={9} />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {sortedOpportunities.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No opportunities found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-gray-500">
            Showing {sortedOpportunities.length} of {opportunities.length} opportunities
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-xs text-gray-600 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-2 py-1 text-xs text-gray-600 border border-gray-200 rounded hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Opportunity Detail Panel */}
      {selectedOpportunity && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Opportunity Details</h2>
              <button 
                onClick={() => setSelectedOpportunity(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Vehicle Image */}
            <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100 mb-4">
              <img src={selectedOpportunity.image} alt={selectedOpportunity.vehicle} className="w-full h-full object-cover" />
            </div>

            {/* Vehicle Info */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedOpportunity.vehicle}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span>{selectedOpportunity.mileage} mi</span>
                <span className={getSourceBadge(selectedOpportunity.source)}>{selectedOpportunity.source}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">${selectedOpportunity.price.toLocaleString()}</div>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Seller Information</div>
              <div className="flex items-center gap-2 mb-1">
                <User size={14} color="#6b7280" />
                <span className="text-sm text-gray-900">{selectedOpportunity.seller}</span>
              </div>
              <div className="text-xs text-gray-500">
                {selectedOpportunity.sellerType === 'private' ? 'Private Seller' : 'Dealer'}
              </div>
            </div>

            {/* Assignment */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Assigned To</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">
                    {selectedOpportunity.assignedTo.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-gray-900">{selectedOpportunity.assignedTo}</div>
                  <div className="text-xs text-gray-500">Buyer</div>
                </div>
              </div>
            </div>

            {/* Stage */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Current Stage</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stages.find(s => s.id === selectedOpportunity.stage)?.color }} />
                <span className="text-sm text-gray-900">{stages.find(s => s.id === selectedOpportunity.stage)?.name}</span>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedOpportunity.notes}</p>
            </div>

            {/* Activity */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Activity</div>
              <div className="text-xs text-gray-500">Last activity: {selectedOpportunity.lastActivity}</div>
              <div className="text-xs text-gray-500">Created: {selectedOpportunity.createdAt}</div>
              {selectedOpportunity.followUpDate && (
                <div className="flex items-center gap-1 text-xs text-orange-600 mt-1">
                  <Clock size={12} />
                  <span>Follow-up: {selectedOpportunity.followUpDate}</span>
                </div>
              )}
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
              <Link to="/appointments" className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Calendar size={14} />
                Schedule Appointment
              </Link>
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

export default Opportunities;
