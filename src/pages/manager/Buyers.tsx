import React from 'react';
import { UserCheck, Plus, Mail, Phone, Calendar } from 'lucide-react';

const Buyers: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Buyers</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage buyer accounts and permissions
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={16} />
          Add Buyer
        </button>
      </div>

      {/* Buyers List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">Team Members</h3>
        </div>
        
        {/* Buyer Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">JW</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">James Wilson</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    james@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0123
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">12 active opportunities</div>
              <div className="text-xs text-gray-500">Joined Jan 2024</div>
            </div>
          </div>
        </div>

        {/* Buyer Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold">SM</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Sarah Mitchell</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    sarah@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0456
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">8 active opportunities</div>
              <div className="text-xs text-gray-500">Joined Feb 2024</div>
            </div>
          </div>
        </div>

        {/* Buyer Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold">MD</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Mike Davis</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    mike@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0789
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">15 active opportunities</div>
              <div className="text-xs text-gray-500">Joined Mar 2024</div>
            </div>
          </div>
        </div>

        {/* Buyer Item */}
        <div className="p-4 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-lg font-bold">AL</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Alex Lee</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Mail size={12} />
                    alex@turnermotors.com
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Phone size={12} />
                    (214) 555-0321
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">5 active opportunities</div>
              <div className="text-xs text-gray-500">Joined Apr 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyers;
