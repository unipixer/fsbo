import React from 'react';
import { CheckCircle, User, DollarSign, Calendar, FileText } from 'lucide-react';

const Approved: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Approved Appraisals</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Vehicles approved for purchase
          </p>
        </div>
      </div>

      {/* Approved List */}
      <div className="space-y-4">
        {/* Approved Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2019 Ford F-150</h3>
                <p className="text-xs text-gray-500">James W. • Approved 3 hours ago</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Approved</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500">Asking Price</div>
              <div className="text-sm font-medium text-gray-900">$14,500</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Appraised Value</div>
              <div className="text-sm font-medium text-green-600">$13,800</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Recommendation</div>
              <div className="text-sm font-medium text-gray-900">Proceed</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle size={16} color="#10b981" />
              <span className="text-sm font-medium text-green-700">Appraiser Note</span>
            </div>
            <p className="text-xs text-gray-700">Vehicle in good condition. Minor wear on driver seat. Clean title. Recommended purchase at $13,800 or below.</p>
          </div>

          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            View Full Report
          </button>
        </div>

        {/* Approved Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2021 GMC Sierra</h3>
                <p className="text-xs text-gray-500">Mike D. • Approved 1 day ago</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Approved</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500">Asking Price</div>
              <div className="text-sm font-medium text-gray-900">$22,000</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Appraised Value</div>
              <div className="text-sm font-medium text-green-600">$21,500</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Recommendation</div>
              <div className="text-sm font-medium text-gray-900">Proceed</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle size={16} color="#10b981" />
              <span className="text-sm font-medium text-green-700">Appraiser Note</span>
            </div>
            <p className="text-xs text-gray-700">Excellent condition. Low mileage. One owner. Strong candidate for inventory.</p>
          </div>

          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Approved;
