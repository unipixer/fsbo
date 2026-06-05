import React from 'react';
import { BarChart3, TrendingUp, CheckCircle, XCircle, Clock, Users } from 'lucide-react';

const Metrics: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Metrics</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Appraisal performance and statistics
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer">
          <span className="text-xs text-gray-700 font-medium">This Month</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Appraisals</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">56</div>
              <div className="text-xs text-green-600">↑ 12% vs last month</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-blue-100">
              <BarChart3 size={20} color="#2563eb" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Approved</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">38</div>
              <div className="text-xs text-green-600">68% approval rate</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
              <CheckCircle size={20} color="#10b981" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Rejected</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">12</div>
              <div className="text-xs text-gray-500">21% rejection rate</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-red-100">
              <XCircle size={20} color="#ef4444" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Pending</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">6</div>
              <div className="text-xs text-gray-500">11% pending</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
              <Clock size={20} color="#f97316" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">Average Turnaround Time</h3>
            <TrendingUp size={16} color="#10b981" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">4.2 hours</div>
          <div className="text-xs text-green-600">↓ 15% improvement</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">Requests per Buyer</h3>
            <Users size={16} color="#7c3aed" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">14</div>
          <div className="text-xs text-gray-500">Average per buyer</div>
        </div>
      </div>

      {/* Appraiser Performance */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Appraiser Performance</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">RJ</div>
              <span className="text-sm text-gray-700">Robert Johnson</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">23</div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-green-600">18</div>
                <div className="text-xs text-gray-500">Approved</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-red-600">4</div>
                <div className="text-xs text-gray-500">Rejected</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-orange-600">1</div>
                <div className="text-xs text-gray-500">Pending</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">EW</div>
              <span className="text-sm text-gray-700">Emily Wang</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">18</div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-green-600">12</div>
                <div className="text-xs text-gray-500">Approved</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-red-600">5</div>
                <div className="text-xs text-gray-500">Rejected</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-orange-600">1</div>
                <div className="text-xs text-gray-500">Pending</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">DP</div>
              <span className="text-sm text-gray-700">David Park</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">15</div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-green-600">8</div>
                <div className="text-xs text-gray-500">Approved</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-red-600">3</div>
                <div className="text-xs text-gray-500">Rejected</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-orange-600">4</div>
                <div className="text-xs text-gray-500">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
