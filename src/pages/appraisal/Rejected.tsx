import React from 'react';
import { XCircle, User, AlertTriangle, FileText } from 'lucide-react';

const Rejected: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Rejected Appraisals</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Vehicles not recommended for purchase
          </p>
        </div>
      </div>

      {/* Rejected List */}
      <div className="space-y-4">
        {/* Rejected Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2018 BMW X5</h3>
                <p className="text-xs text-gray-500">Sarah M. • Rejected 2 days ago</p>
              </div>
            </div>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Rejected</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500">Asking Price</div>
              <div className="text-sm font-medium text-gray-900">$28,000</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Reason</div>
              <div className="text-sm font-medium text-red-600">Overpriced</div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <XCircle size={16} color="#ef4444" />
              <span className="text-sm font-medium text-red-700">Rejection Reason</span>
            </div>
            <p className="text-xs text-gray-700">Vehicle priced $5,000 above market value. Similar vehicles with lower mileage available at $23,000. Not recommended at current price.</p>
          </div>

          <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300">
            View Full Report
          </button>
        </div>

        {/* Rejected Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2017 Dodge Ram</h3>
                <p className="text-xs text-gray-500">James W. • Rejected 3 days ago</p>
              </div>
            </div>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Rejected</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500">Asking Price</div>
              <div className="text-sm font-medium text-gray-900">$19,500</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Reason</div>
              <div className="text-sm font-medium text-red-600">Mechanical Issues</div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <XCircle size={16} color="#ef4444" />
              <span className="text-sm font-medium text-red-700">Rejection Reason</span>
            </div>
            <p className="text-xs text-gray-700">Transmission issues reported. Potential repair costs exceed value. Salvage title history found. Not recommended for purchase.</p>
          </div>

          <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300">
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rejected;
