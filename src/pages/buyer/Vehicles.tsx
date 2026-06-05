import React, { useState } from 'react';
import { 
  Filter, Search, Plus, MoreVertical, XCircle, AlertCircle,
  Calendar, MapPin, DollarSign, Car
} from 'lucide-react';

interface Vehicle {
  id: string;
  vin: string;
  year: string;
  make: string;
  model: string;
  trim: string;
  mileage: string;
  color: string;
  status: 'in_inventory' | 'sold' | 'pending' | 'transit';
  purchasePrice: number;
  salePrice?: number;
  location: string;
  acquiredDate: string;
  soldDate?: string;
  notes: string;
  image: string;
}

const Vehicles: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const vehicles: Vehicle[] = [
    {
      id: '1',
      vin: '1HGCM82633A123456',
      year: '2018',
      make: 'Honda',
      model: 'Accord',
      trim: 'EX',
      mileage: '45,000',
      color: 'Silver',
      status: 'in_inventory',
      purchasePrice: 16000,
      location: 'Main Lot',
      acquiredDate: '2025-05-01',
      notes: 'Clean title, single owner',
      image: '/images/car1.jpg'
    },
    {
      id: '2',
      vin: '1F1F15F5XHA123456',
      year: '2017',
      make: 'Ford',
      model: 'F-150',
      trim: 'XLT',
      mileage: '62,000',
      color: 'White',
      status: 'in_inventory',
      purchasePrice: 26000,
      location: 'Main Lot',
      acquiredDate: '2025-04-28',
      notes: '4x4, towing package',
      image: '/images/car2.jpg'
    },
    {
      id: '3',
      vin: '4T1BF1FK5GU123456',
      year: '2020',
      make: 'Toyota',
      model: 'Camry',
      trim: 'LE',
      mileage: '38,000',
      color: 'Blue',
      status: 'sold',
      purchasePrice: 18500,
      salePrice: 22500,
      location: 'Sold',
      acquiredDate: '2025-04-20',
      soldDate: '2025-05-10',
      notes: 'Sold to repeat customer',
      image: '/images/car3.jpg'
    },
    {
      id: '4',
      vin: '1N4AL3AP4HN123456',
      year: '2019',
      make: 'Nissan',
      model: 'Altima',
      trim: 'SR',
      mileage: '52,000',
      color: 'Black',
      status: 'in_inventory',
      purchasePrice: 15500,
      location: 'Main Lot',
      acquiredDate: '2025-05-05',
      notes: 'Sunroof, navigation',
      image: '/images/car4.jpg'
    },
    {
      id: '5',
      vin: 'WBA8E9C58GK123456',
      year: '2016',
      make: 'BMW',
      model: '328i',
      trim: 'xDrive',
      mileage: '58,000',
      color: 'Gray',
      status: 'pending',
      purchasePrice: 20000,
      location: 'In Transit',
      acquiredDate: '2025-05-12',
      notes: 'Awaiting delivery',
      image: '/images/car5.jpg'
    },
    {
      id: '6',
      vin: '3GCUYDEDXJG123456',
      year: '2018',
      make: 'Chevrolet',
      model: 'Silverado',
      trim: '1500 LT',
      mileage: '48,000',
      color: 'Red',
      status: 'sold',
      purchasePrice: 32000,
      salePrice: 38000,
      location: 'Sold',
      acquiredDate: '2025-04-15',
      soldDate: '2025-05-01',
      notes: 'Quick turnaround',
      image: '/images/car6.jpg'
    },
    {
      id: '7',
      vin: 'KM8J12A66GU123456',
      year: '2019',
      make: 'Hyundai',
      model: 'Sonata',
      trim: 'SEL',
      mileage: '41,000',
      color: 'White',
      status: 'in_inventory',
      purchasePrice: 14000,
      location: 'Main Lot',
      acquiredDate: '2025-05-10',
      notes: 'Certified pre-owned',
      image: '/images/car7.jpg'
    },
    {
      id: '8',
      vin: 'JM3KFBCM3K0123456',
      year: '2020',
      make: 'Mazda',
      model: 'CX-5',
      trim: 'Touring',
      mileage: '35,000',
      color: 'Silver',
      status: 'in_inventory',
      purchasePrice: 23000,
      location: 'Main Lot',
      acquiredDate: '2025-05-08',
      notes: 'AWD, premium package',
      image: '/images/car8.jpg'
    }
  ];

  const statuses = [
    { id: 'in_inventory', name: 'In Inventory', color: '#10b981' },
    { id: 'sold', name: 'Sold', color: '#6b7280' },
    { id: 'pending', name: 'Pending', color: '#f59e0b' },
    { id: 'transit', name: 'In Transit', color: '#3b82f6' }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = statuses.find(s => s.id === status);
    if (!statusConfig) return '';
    return `bg-[${statusConfig.color}]/10 text-[${statusConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesStatus = selectedStatus === 'all' || vehicle.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      vehicle.vin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${vehicle.year} ${vehicle.make} ${vehicle.model}`.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const inventoryCount = vehicles.filter(v => v.status === 'in_inventory').length;
  const soldCount = vehicles.filter(v => v.status === 'sold').length;
  const pendingCount = vehicles.filter(v => v.status === 'pending').length;
  const totalValue = vehicles.filter(v => v.status === 'in_inventory').reduce((sum, v) => sum + v.purchasePrice, 0);

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Vehicles View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Vehicles</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage your vehicle inventory
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Add Vehicle</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">In Inventory</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{inventoryCount}</div>
                <div className="text-xs text-gray-400">Total vehicles</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
                <Car size={20} color="#10b981" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Sold This Month</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{soldCount}</div>
                <div className="text-xs text-gray-400">Total sales</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-gray-100">
                <DollarSign size={20} color="#6b7280" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Pending</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{pendingCount}</div>
                <div className="text-xs text-gray-400">Awaiting action</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
                <Calendar size={20} color="#f59e0b" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Inventory Value</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">${totalValue.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Total value</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-blue-100">
                <DollarSign size={20} color="#3b82f6" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by VIN, make, model..."
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
                {statuses.map(status => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vehicles List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div className="flex items-start gap-3">
                  {/* Vehicle Image */}
                  <div className="w-16 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} className="w-full h-full object-cover" />
                  </div>

                  {/* Vehicle Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h3>
                      <span className={getStatusBadge(vehicle.status)}>
                        {statuses.find(s => s.id === vehicle.status)?.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <span className="font-mono">{vehicle.vin}</span>
                      <span>{vehicle.mileage} mi</span>
                      <span>{vehicle.color}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <DollarSign size={11} />
                        <span>Purchase: ${vehicle.purchasePrice.toLocaleString()}</span>
                      </div>
                      {vehicle.salePrice && (
                        <div className="flex items-center gap-1">
                          <span>Sale: ${vehicle.salePrice.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <MapPin size={11} />
                        <span>{vehicle.location}</span>
                      </div>
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

            {filteredVehicles.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No vehicles found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vehicle Detail Panel */}
      {selectedVehicle && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Vehicle Details</h2>
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Vehicle Image */}
            <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100 mb-4">
              <img src={selectedVehicle.image} alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`} className="w-full h-full object-cover" />
            </div>

            {/* Vehicle Info */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}</h3>
              <div className="text-xs text-gray-500 mb-2">{selectedVehicle.trim}</div>
              <span className={getStatusBadge(selectedVehicle.status)}>
                {statuses.find(s => s.id === selectedVehicle.status)?.name}
              </span>
            </div>

            {/* VIN */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-1">VIN</div>
              <div className="text-sm font-mono text-gray-900">{selectedVehicle.vin}</div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Vehicle Details</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Mileage</span>
                  <span className="text-xs text-gray-900">{selectedVehicle.mileage} mi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Color</span>
                  <span className="text-xs text-gray-900">{selectedVehicle.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Location</span>
                  <span className="text-xs text-gray-900">{selectedVehicle.location}</span>
                </div>
              </div>
            </div>

            {/* Financials */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Financials</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Purchase Price</span>
                  <span className="text-sm font-semibold text-gray-900">${selectedVehicle.purchasePrice.toLocaleString()}</span>
                </div>
                {selectedVehicle.salePrice && (
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Sale Price</span>
                    <span className="text-sm font-semibold text-green-600">${selectedVehicle.salePrice.toLocaleString()}</span>
                  </div>
                )}
                {selectedVehicle.salePrice && (
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Profit</span>
                      <span className="text-xs font-semibold text-green-600">
                        ${(selectedVehicle.salePrice - selectedVehicle.purchasePrice).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Timeline</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar size={12} color="#6b7280" />
                  <span className="text-xs text-gray-500">Acquired: {selectedVehicle.acquiredDate}</span>
                </div>
                {selectedVehicle.soldDate && (
                  <div className="flex items-center gap-2">
                    <Calendar size={12} color="#6b7280" />
                    <span className="text-xs text-gray-500">Sold: {selectedVehicle.soldDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedVehicle.notes}</p>
            </div>

            {/* Actions */}
            <div className="space-y-2">
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

export default Vehicles;
