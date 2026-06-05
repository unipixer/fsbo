import React from 'react';
import { AlertCircle, Clock, UserCheck, ClipboardList, RefreshCw } from 'lucide-react';

const StuckWork: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Stuck Work</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Identify and resolve bottlenecks in the pipeline
          </p>
        </div>
      </div>

      {/* Stuck Work Categories */}
      <div className="space-y-4">
        {/* Claimed but not contacted */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} color="#f97316" />
              <h3 className="text-sm font-medium text-gray-700">Claimed but not contacted</h3>
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">5 items</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">2019 Ford F-150</div>
                  <div className="text-xs text-gray-500">James W. • Claimed 2 days ago</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Remind</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">2022 Tesla Model 3</div>
                  <div className="text-xs text-gray-500">Sarah M. • Claimed 1 day ago</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Remind</button>
            </div>
          </div>
        </div>

        {/* Contacted but no reply */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} color="#ef4444" />
              <h3 className="text-sm font-medium text-gray-700">Contacted but no reply marked</h3>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">8 items</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">2021 GMC Sierra</div>
                  <div className="text-xs text-gray-500">Mike D. • Contacted 3 days ago</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Nudge</button>
            </div>
          </div>
        </div>

        {/* Replied but missing VIN */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ClipboardList size={18} color="#7c3aed" />
              <h3 className="text-sm font-medium text-gray-700">Replied but missing VIN</h3>
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">4 items</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">2020 Ford Explorer</div>
                  <div className="text-xs text-gray-500">James W. • Replied yesterday</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Request VIN</button>
            </div>
          </div>
        </div>

        {/* Appraiser needs info */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck size={18} color="#10b981" />
              <h3 className="text-sm font-medium text-gray-700">Appraiser needs info</h3>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">3 items</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">2020 Audi Q7</div>
                  <div className="text-xs text-gray-500">Sarah M. • Needs: VIN, mileage</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
            </div>
          </div>
        </div>

        {/* Duplicate candidates */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Duplicate candidates</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">2 items</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">2019 Ford F-150</div>
                  <div className="text-xs text-gray-500">Also claimed by Mike D.</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Resolve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuckWork;
