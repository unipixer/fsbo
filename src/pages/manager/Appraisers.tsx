import React from 'react';
import { Wrench, Plus, Mail, Phone, Calendar } from 'lucide-react';

const Appraisers: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Appraisers</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage appraiser accounts and permissions
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={16} />
          Add Appraiser
        </button>
      </div>

      {/* Appraisers List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">Appraisal Team</h3>
        </div>
        
        {/* Appraiser Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold">RJ</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Robert Johnson</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    robert@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0987
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">23 appraisals this month</div>
              <div className="text-xs text-gray-500">Lead Appraiser</div>
            </div>
          </div>
        </div>

        {/* Appraiser Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-lg font-bold">EW</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Emily Wang</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    emily@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0654
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">18 appraisals this month</div>
              <div className="text-xs text-gray-500">Senior Appraiser</div>
            </div>
          </div>
        </div>

        {/* Appraiser Item */}
        <div className="p-4 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold">DP</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">David Park</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    david@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0246
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">15 appraisals this month</div>
              <div className="text-xs text-gray-500">Appraiser</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appraisers;
