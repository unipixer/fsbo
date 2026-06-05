import React from 'react';
import { Clock, User, Calendar, FileText, CheckCircle } from 'lucide-react';

const Requested: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Requested Appraisals</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Appraisal requests awaiting your review
          </p>
        </div>
      </div>

      {/* Requested List */}
      <div className="space-y-4">
        {/* Request Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2019 Ford F-150</h3>
                <p className="text-xs text-gray-500">James W. • Requested 2 hours ago</p>
              </div>
            </div>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Pending</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500">Price</div>
              <div className="text-sm font-medium text-gray-900">$14,500</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Mileage</div>
              <div className="text-sm font-medium text-gray-900">45,000</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">VIN</div>
              <div className="text-sm font-medium text-gray-900">1FTEW1E54K...</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2">
              <CheckCircle size={16} />
              Approve
            </button>
            <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
              Reject
            </button>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Request Info
            </button>
          </div>
        </div>

        {/* Request Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2020 Honda CR-V</h3>
                <p className="text-xs text-gray-500">Sarah M. • Requested 5 hours ago</p>
              </div>
            </div>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Pending</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500">Price</div>
              <div className="text-sm font-medium text-gray-900">$18,200</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Mileage</div>
              <div className="text-sm font-medium text-gray-900">38,000</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">VIN</div>
              <div className="text-sm font-medium text-gray-900">2HKRW2H87L...</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2">
              <CheckCircle size={16} />
              Approve
            </button>
            <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
              Reject
            </button>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Request Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requested;
