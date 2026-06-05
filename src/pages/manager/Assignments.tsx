import React from 'react';
import { Users2, ArrowRight, RefreshCw } from 'lucide-react';

const Assignments: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Assignments</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Reassign opportunities and manage workload distribution
          </p>
        </div>
      </div>

      {/* Assignment Actions */}
      <div className="space-y-4">
        {/* Reassign Section */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Users2 size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Reassign Opportunities</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2019 Ford F-150</div>
                    <div className="text-xs text-gray-500">Currently: James W.</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                    <option>James W.</option>
                    <option>Sarah M.</option>
                    <option>Mike D.</option>
                  </select>
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700">
                    Reassign
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2022 Tesla Model 3</div>
                    <div className="text-xs text-gray-500">Currently: Sarah M.</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                    <option>Sarah M.</option>
                    <option>James W.</option>
                    <option>Mike D.</option>
                  </select>
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700">
                    Reassign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Release Claims */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <RefreshCw size={18} color="#10b981" />
              <h3 className="text-sm font-medium text-gray-700">Release Stale Claims</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2021 GMC Sierra</div>
                    <div className="text-xs text-gray-500">Mike D. • No activity for 7 days</div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-700">
                  Release
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2020 Ford Explorer</div>
                    <div className="text-xs text-gray-500">James W. • No activity for 5 days</div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-700">
                  Release
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Workload Overview */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <ArrowRight size={18} color="#7c3aed" />
              <h3 className="text-sm font-medium text-gray-700">Current Workload</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JW</div>
                  <span className="text-sm text-gray-700">James W.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">12/16</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                  <span className="text-sm text-gray-700">Sarah M.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">8/16</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
                  <span className="text-sm text-gray-700">Mike D.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">15/16</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
