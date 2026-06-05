import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const AllOpportunities: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">All Opportunities</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            View and manage all opportunities across the team
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50">
            <Filter size={14} />
            Filter
          </button>
          <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50">
            <Search size={14} />
            Search
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-sm text-gray-700">Total: 35</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <span className="text-sm text-gray-700">Active: 28</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
          <span className="text-sm text-gray-700">Pending: 5</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="text-sm text-gray-700">Lost: 2</span>
        </div>
      </div>

      {/* Opportunities Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">35 opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Sort by:</span>
              <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
                <span>Last Activity</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Vehicle</th>
              <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Owner</th>
              <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Stage</th>
              <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Appraisal</th>
              <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Last Activity</th>
              <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="text-sm font-medium text-gray-900">2019 Ford F-150</div>
                <div className="text-xs text-gray-500">$14,500 • 45k miles</div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                  <span className="text-sm text-gray-700">James W.</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Contacted</span>
              </td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Approved</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">2 hours ago</td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
              </td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="text-sm font-medium text-gray-900">2020 Honda CR-V</div>
                <div className="text-xs text-gray-500">$18,200 • 38k miles</div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                  <span className="text-sm text-gray-700">Sarah M.</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Replied</span>
              </td>
              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Requested</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">5 hours ago</td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="text-sm font-medium text-gray-900">2021 GMC Sierra</div>
                <div className="text-xs text-gray-500">$22,000 • 32k miles</div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
                  <span className="text-sm text-gray-700">Mike D.</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">Offer Sent</span>
              </td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Approved</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">1 day ago</td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOpportunities;
