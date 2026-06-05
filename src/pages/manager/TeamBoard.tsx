import React from 'react';
import { Users, LayoutGrid, AlertCircle, Clock } from 'lucide-react';

const TeamBoard: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Team Board</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            View opportunities by buyer and pipeline stage
          </p>
        </div>
      </div>

      {/* Team Board Grid */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="grid grid-cols-8 gap-3">
          {/* Buyer Column */}
          <div className="col-span-1">
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">James W.</div>
                  <div className="text-xs text-gray-500">12 active</div>
                </div>
              </div>
            </div>
            
            {/* Pipeline Stages */}
            <div className="space-y-2">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <div className="text-xs font-medium text-blue-700 mb-1">Claimed (3)</div>
                <div className="text-xs text-gray-600">2019 Ford F-150</div>
                <div className="text-xs text-gray-600">2020 Honda CR-V</div>
                <div className="text-xs text-gray-600">2018 Toyota Camry</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <div className="text-xs font-medium text-green-700 mb-1">Contacted (4)</div>
                <div className="text-xs text-gray-600">2021 Chevy Silverado</div>
                <div className="text-xs text-gray-600">2019 Nissan Rogue</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
                <div className="text-xs font-medium text-purple-700 mb-1">Replied (3)</div>
                <div className="text-xs text-gray-600">2020 Ford Explorer</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                <div className="text-xs font-medium text-orange-700 mb-1">Offer Sent (2)</div>
                <div className="text-xs text-gray-600">2018 Ram 1500</div>
              </div>
            </div>
          </div>

          {/* Buyer Column */}
          <div className="col-span-1">
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Sarah M.</div>
                  <div className="text-xs text-gray-500">8 active</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <div className="text-xs font-medium text-blue-700 mb-1">Claimed (2)</div>
                <div className="text-xs text-gray-600">2022 Tesla Model 3</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <div className="text-xs font-medium text-green-700 mb-1">Contacted (3)</div>
                <div className="text-xs text-gray-600">2019 BMW X5</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                <div className="text-xs font-medium text-yellow-700 mb-1">Appraisal Requested (2)</div>
                <div className="text-xs text-gray-600">2020 Audi Q7</div>
              </div>
            </div>
          </div>

          {/* Buyer Column */}
          <div className="col-span-1">
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Mike D.</div>
                  <div className="text-xs text-gray-500">15 active</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <div className="text-xs font-medium text-blue-700 mb-1">Claimed (4)</div>
                <div className="text-xs text-gray-600">2021 GMC Sierra</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <div className="text-xs font-medium text-green-700 mb-1">Contacted (5)</div>
                <div className="text-xs text-gray-600">2019 Lexus RX</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
                <div className="text-xs font-medium text-purple-700 mb-1">Replied (4)</div>
                <div className="text-xs text-gray-600">2020 Cadillac Escalade</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                <div className="text-xs font-medium text-red-700 mb-1">Appointment Set (2)</div>
                <div className="text-xs text-gray-600">2018 Mercedes GLE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBoard;
