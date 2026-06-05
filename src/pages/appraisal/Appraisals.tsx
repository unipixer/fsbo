import React, { useState } from 'react';
import { 
  Filter, Search, Plus, MoreVertical, DollarSign, 
  AlertTriangle, CheckCircle, XCircle, Clock, AlertCircle,
  ChevronRight, TrendingUp, TrendingDown
} from 'lucide-react';

interface Appraisal {
  id: string;
  vehicle: string;
  year: string;
  make: string;
  model: string;
  mileage: string;
  askingPrice: number;
  appraisedValue: number;
  maxBid: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  riskFlags: string[];
  assignedTo: string;
  relatedOpportunityId: string;
  status: 'pending' | 'in_progress' | 'completed' | 'review';
  notes: string;
  image: string;
  createdAt: string;
  completedAt?: string;
}

const Appraisals: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppraisal, setSelectedAppraisal] = useState<Appraisal | null>(null);

  const appraisals: Appraisal[] = [
    {
      id: '1',
      vehicle: '2018 Honda Accord EX',
      year: '2018',
      make: 'Honda',
      model: 'Accord EX',
      mileage: '45,000',
      askingPrice: 18500,
      appraisedValue: 17500,
      maxBid: 16000,
      condition: 'good',
      riskFlags: ['High mileage', 'Previous accident reported'],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '1',
      status: 'completed',
      notes: 'Vehicle in good condition overall, minor wear on interior',
      image: '/images/car1.jpg',
      createdAt: '2025-05-12',
      completedAt: '2025-05-12 2:30 PM'
    },
    {
      id: '2',
      vehicle: '2017 Ford F-150 XLT',
      year: '2017',
      make: 'Ford',
      model: 'F-150 XLT',
      mileage: '62,000',
      askingPrice: 32000,
      appraisedValue: 28000,
      maxBid: 26000,
      condition: 'good',
      riskFlags: ['Towing package needed verification'],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '2',
      status: 'completed',
      notes: 'Truck well maintained, good tires',
      image: '/images/car2.jpg',
      createdAt: '2025-05-11',
      completedAt: '2025-05-11 4:00 PM'
    },
    {
      id: '3',
      vehicle: '2020 Toyota Camry LE',
      year: '2020',
      make: 'Toyota',
      model: 'Camry LE',
      mileage: '38,000',
      askingPrice: 21500,
      appraisedValue: 0,
      maxBid: 0,
      condition: 'good',
      riskFlags: [],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '3',
      status: 'in_progress',
      notes: 'Currently inspecting vehicle',
      image: '/images/car3.jpg',
      createdAt: '2025-05-10'
    },
    {
      id: '4',
      vehicle: '2019 Nissan Altima SR',
      year: '2019',
      make: 'Nissan',
      model: 'Altima SR',
      mileage: '52,000',
      askingPrice: 17800,
      appraisedValue: 0,
      maxBid: 0,
      condition: 'fair',
      riskFlags: ['CVT transmission concerns'],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '4',
      status: 'pending',
      notes: 'Needs inspection',
      image: '/images/car4.jpg',
      createdAt: '2025-05-09'
    },
    {
      id: '5',
      vehicle: '2016 BMW 328i',
      year: '2016',
      make: 'BMW',
      model: '328i',
      mileage: '58,000',
      askingPrice: 24500,
      appraisedValue: 22000,
      maxBid: 20000,
      condition: 'fair',
      riskFlags: ['Maintenance records incomplete', 'Potential oil leak'],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '5',
      status: 'review',
      notes: 'Requires additional verification',
      image: '/images/car5.jpg',
      createdAt: '2025-05-08'
    },
    {
      id: '6',
      vehicle: '2018 Chevrolet Silverado',
      year: '2018',
      make: 'Chevrolet',
      model: 'Silverado',
      mileage: '48,000',
      askingPrice: 35000,
      appraisedValue: 33500,
      maxBid: 32000,
      condition: 'excellent',
      riskFlags: [],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '6',
      status: 'completed',
      notes: 'Excellent condition, all service records available',
      image: '/images/car6.jpg',
      createdAt: '2025-05-01',
      completedAt: '2025-05-01 3:00 PM'
    },
    {
      id: '7',
      vehicle: '2019 Hyundai Sonata',
      year: '2019',
      make: 'Hyundai',
      model: 'Sonata',
      mileage: '41,000',
      askingPrice: 16500,
      appraisedValue: 0,
      maxBid: 0,
      condition: 'good',
      riskFlags: [],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '7',
      status: 'pending',
      notes: 'Fresh listing, needs appraisal',
      image: '/images/car7.jpg',
      createdAt: '2025-05-12'
    },
    {
      id: '8',
      vehicle: '2020 Mazda CX-5',
      year: '2020',
      make: 'Mazda',
      model: 'CX-5',
      mileage: '35,000',
      askingPrice: 26500,
      appraisedValue: 0,
      maxBid: 0,
      condition: 'good',
      riskFlags: [],
      assignedTo: 'Alex Thompson',
      relatedOpportunityId: '8',
      status: 'pending',
      notes: 'Awaiting inspection',
      image: '/images/car8.jpg',
      createdAt: '2025-05-11'
    }
  ];

  const conditions = [
    { id: 'excellent', name: 'Excellent', color: '#10b981' },
    { id: 'good', name: 'Good', color: '#3b82f6' },
    { id: 'fair', name: 'Fair', color: '#f59e0b' },
    { id: 'poor', name: 'Poor', color: '#ef4444' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'in_progress': return 'bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'completed': return 'bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'review': return 'bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const filteredAppraisals = appraisals.filter(appraisal => {
    const matchesStatus = selectedStatus === 'all' || appraisal.status === selectedStatus;
    const matchesCondition = selectedCondition === 'all' || appraisal.condition === selectedCondition;
    const matchesSearch = searchQuery === '' || 
      appraisal.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appraisal.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appraisal.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesCondition && matchesSearch;
  });

  const pendingCount = appraisals.filter(a => a.status === 'pending').length;
  const inProgressCount = appraisals.filter(a => a.status === 'in_progress').length;
  const completedCount = appraisals.filter(a => a.status === 'completed').length;
  const reviewCount = appraisals.filter(a => a.status === 'review').length;

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Appraisals View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Appraisals</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Vehicle valuations and risk assessments
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">New Appraisal</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Pending</div>
              <Clock size={14} color="#6b7280" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{pendingCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">In Progress</div>
              <AlertCircle size={14} color="#3b82f6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{inProgressCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Completed</div>
              <CheckCircle size={14} color="#10b981" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{completedCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Under Review</div>
              <AlertTriangle size={14} color="#f59e0b" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{reviewCount}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Filter size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="review">Under Review</option>
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <AlertTriangle size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
              >
                <option value="all">All Conditions</option>
                {conditions.map(condition => (
                  <option key={condition.id} value={condition.id}>{condition.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Appraisals List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredAppraisals.map((appraisal) => {
              const conditionConfig = conditions.find(c => c.id === appraisal.condition);
              const priceDiff = appraisal.apraisedValue > 0 ? appraisal.askingPrice - appraisal.apraisedValue : 0;
              const isOverpriced = priceDiff > 0;
              
              return (
                <div
                  key={appraisal.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedAppraisal(appraisal)}
                >
                  <div className="flex items-start gap-3">
                    {/* Vehicle Image */}
                    <div className="w-16 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                      <img src={appraisal.image} alt={appraisal.vehicle} className="w-full h-full object-cover" />
                    </div>

                    {/* Appraisal Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900">{appraisal.vehicle}</h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={getStatusBadge(appraisal.status)}>
                            {appraisal.status === 'in_progress' ? 'In Progress' : 
                             appraisal.status === 'review' ? 'Under Review' :
                             appraisal.status.charAt(0).toUpperCase() + appraisal.status.slice(1)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <span>{appraisal.mileage} mi</span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: conditionConfig?.color }} />
                          {conditionConfig?.name}
                        </span>
                        <span>Opportunity #{appraisal.relatedOpportunityId}</span>
                      </div>

                      {/* Price Comparison */}
                      {appraisal.apraisedValue > 0 ? (
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-1">
                            <DollarSign size={11} color="#6b7280" />
                            <span className="text-xs text-gray-500">Asking:</span>
                            <span className="text-xs font-semibold text-gray-900">${appraisal.askingPrice.toLocaleString()}</span>
                          </div>
                          <ChevronRight size={12} color="#d1d5db" />
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">Appraised:</span>
                            <span className="text-xs font-semibold text-gray-900">${appraisal.apraisedValue.toLocaleString()}</span>
                          </div>
                          {isOverpriced ? (
                            <div className="flex items-center gap-1 text-red-600">
                              <TrendingUp size={11} />
                              <span className="text-xs font-medium">${priceDiff.toLocaleString()} over</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-green-600">
                              <TrendingDown size={11} />
                              <span className="text-xs font-medium">${Math.abs(priceDiff).toLocaleString()} under</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-xs text-gray-400 mb-2">Appraisal pending</div>
                      )}

                      {/* Risk Flags */}
                      {appraisal.riskFlags.length > 0 && (
                        <div className="flex items-center gap-1 mb-2">
                          <AlertTriangle size={11} color="#f59e0b" />
                          <span className="text-[10.5px] text-orange-600">{appraisal.riskFlags[0]}</span>
                          {appraisal.riskFlags.length > 1 && (
                            <span className="text-[10.5px] text-gray-400">+{appraisal.riskFlags.length - 1} more</span>
                          )}
                        </div>
                      )}

                      {/* Assignment */}
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-[9px] font-medium text-blue-600">
                            {appraisal.assignedTo.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-[10.5px] text-gray-500">{appraisal.assignedTo}</span>
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
              );
            })}

            {filteredAppraisals.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No appraisals found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Appraisal Detail Panel */}
      {selectedAppraisal && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Appraisal Details</h2>
              <button 
                onClick={() => setSelectedAppraisal(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Vehicle Image */}
            <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100 mb-4">
              <img src={selectedAppraisal.image} alt={selectedAppraisal.vehicle} className="w-full h-full object-cover" />
            </div>

            {/* Vehicle Info */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedAppraisal.vehicle}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span>{selectedAppraisal.mileage} mi</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: conditions.find(c => c.id === selectedAppraisal.condition)?.color }} />
                  {conditions.find(c => c.id === selectedAppraisal.condition)?.name}
                </span>
              </div>
              <span className={getStatusBadge(selectedAppraisal.status)}>
                {selectedAppraisal.status === 'in_progress' ? 'In Progress' : 
                 selectedAppraisal.status === 'review' ? 'Under Review' :
                 selectedAppraisal.status.charAt(0).toUpperCase() + selectedAppraisal.status.slice(1)}
              </span>
            </div>

            {/* Price Comparison */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Valuation</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Asking Price</span>
                  <span className="text-sm font-semibold text-gray-900">${selectedAppraisal.askingPrice.toLocaleString()}</span>
                </div>
                {selectedAppraisal.apraisedValue > 0 && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Appraised Value</span>
                      <span className="text-sm font-semibold text-gray-900">${selectedAppraisal.apraisedValue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Max Bid</span>
                      <span className="text-sm font-semibold text-blue-600">${selectedAppraisal.maxBid.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      {selectedAppraisal.askingPrice > selectedAppraisal.apraisedValue ? (
                        <div className="flex items-center gap-1 text-red-600">
                          <TrendingUp size={12} />
                          <span className="text-xs font-medium">${(selectedAppraisal.askingPrice - selectedAppraisal.apraisedValue).toLocaleString()} over appraised value</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingDown size={12} />
                          <span className="text-xs font-medium">${(selectedAppraisal.apraisedValue - selectedAppraisal.askingPrice).toLocaleString()} under appraised value</span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Risk Flags */}
            {selectedAppraisal.riskFlags.length > 0 && (
              <div className="bg-orange-50 rounded-lg p-3 mb-4">
                <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <AlertTriangle size={12} color="#f59e0b" />
                  Risk Flags
                </div>
                <ul className="space-y-1">
                  {selectedAppraisal.riskFlags.map((flag, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-orange-500">•</span>
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Assignment */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Assigned To</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">
                    {selectedAppraisal.assignedTo.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-gray-900">{selectedAppraisal.assignedTo}</div>
                  <div className="text-xs text-gray-500">Appraiser</div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedAppraisal.notes}</p>
            </div>

            {/* Created/Completed At */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Timeline</div>
              <div className="text-xs text-gray-500">Created: {selectedAppraisal.createdAt}</div>
              {selectedAppraisal.completedAt && (
                <div className="text-xs text-green-600 mt-1">Completed: {selectedAppraisal.completedAt}</div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {selectedAppraisal.status === 'pending' && (
                <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1.5">
                  <AlertCircle size={14} />
                  Start Appraisal
                </button>
              )}
              {selectedAppraisal.status === 'in_progress' && (
                <button className="w-full bg-green-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-1.5">
                  <CheckCircle size={14} />
                  Complete Appraisal
                </button>
              )}
              {selectedAppraisal.status === 'review' && (
                <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1.5">
                  <CheckCircle size={14} />
                  Approve Appraisal
                </button>
              )}
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <DollarSign size={14} />
                Update Valuation
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <AlertTriangle size={14} />
                Add Risk Flag
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

export default Appraisals;
