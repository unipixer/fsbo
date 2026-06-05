import React from 'react';
import { Search, Plus, ChevronDown } from 'lucide-react';

const MarketplaceSearches: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Marketplace Searches</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage your saved Facebook Marketplace search filters
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={16} />
          New Search
        </button>
      </div>

      {/* Saved Searches List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">All Searches</span>
            <ChevronDown size={14} color="#6b7280" />
          </div>
        </div>
        
        {/* Search Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search size={20} color="#2563eb" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Trucks under $15k</h3>
                <p className="text-xs text-gray-500">Dallas, TX • 50 miles • Updated 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Search size={20} color="#10b981" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">SUVs 2018+</h3>
                <p className="text-xs text-gray-500">Dallas, TX • 100 miles • Updated 1 day ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Item */}
        <div className="p-4 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Search size={20} color="#7c3aed" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Sedans under $10k</h3>
                <p className="text-xs text-gray-500">Fort Worth, TX • 75 miles • Updated 3 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSearches;
