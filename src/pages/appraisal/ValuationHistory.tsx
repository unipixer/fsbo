import React from 'react';
import { History, CheckCircle, XCircle, Clock } from 'lucide-react';

const ValuationHistory: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Valuation History</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Track all appraisal decisions and actions
          </p>
        </div>
      </div>

      {/* History Timeline */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="space-y-6">
          {/* History Item */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={20} color="#10b981" />
              </div>
              <div className="w-0.5 h-full bg-gray-200"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">2019 Ford F-150 - Approved</h3>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Appraised at $13,800. Recommended for purchase.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>By: Robert Johnson</span>
                <span>•</span>
                <span>Buyer: James Wilson</span>
              </div>
            </div>
          </div>

          {/* History Item */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle size={20} color="#ef4444" />
              </div>
              <div className="w-0.5 h-full bg-gray-200"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">2018 BMW X5 - Rejected</h3>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Rejected due to pricing $5,000 above market value.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>By: Emily Wang</span>
                <span>•</span>
                <span>Buyer: Sarah Mitchell</span>
              </div>
            </div>
          </div>

          {/* History Item */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock size={20} color="#f97316" />
              </div>
              <div className="w-0.5 h-full bg-gray-200"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">2020 Audi Q7 - Info Requested</h3>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Requested VIN, mileage, and title status from buyer.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>By: David Park</span>
                <span>•</span>
                <span>Buyer: Sarah Mitchell</span>
              </div>
            </div>
          </div>

          {/* History Item */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={20} color="#10b981" />
              </div>
              <div className="w-0.5 h-full bg-gray-200"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">2021 GMC Sierra - Approved</h3>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Appraised at $21,500. Excellent condition, low mileage.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>By: Robert Johnson</span>
                <span>•</span>
                <span>Buyer: Mike Davis</span>
              </div>
            </div>
          </div>

          {/* History Item */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle size={20} color="#ef4444" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">2017 Dodge Ram - Rejected</h3>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Rejected due to transmission issues and salvage title history.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>By: Emily Wang</span>
                <span>•</span>
                <span>Buyer: James Wilson</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationHistory;
