import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, CheckCircle, DollarSign } from 'lucide-react';

const Performance: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Performance</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Track your daily performance metrics
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer">
          <span className="text-xs text-gray-700 font-medium">Today</span>
        </div>
      </div>

      {/* KPI Counters */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Listings Reviewed</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">47</div>
              <div className="text-xs text-green-600">↑ 12% vs yesterday</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-blue-100">
              <BarChart3 size={20} color="#2563eb" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Claims</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">12</div>
              <div className="text-xs text-green-600">↑ 8% vs yesterday</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
              <Users size={20} color="#10b981" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">First Messages</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">9</div>
              <div className="text-xs text-green-600">↑ 15% vs yesterday</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-purple-100">
              <CheckCircle size={20} color="#7c3aed" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">VINs Collected</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">7</div>
              <div className="text-xs text-green-600">↑ 20% vs yesterday</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
              <Clock size={20} color="#f97316" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Appraisals Requested</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">5</div>
              <div className="text-xs text-green-600">↑ 10% vs yesterday</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-red-100">
              <DollarSign size={20} color="#ef4444" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Replies Received</div>
          <div className="text-2xl font-bold text-gray-900">6</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Offers Sent</div>
          <div className="text-2xl font-bold text-gray-900">3</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Appointments Set</div>
          <div className="text-2xl font-bold text-gray-900">2</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Purchases</div>
          <div className="text-2xl font-bold text-gray-900">1</div>
        </div>
      </div>

      {/* Performance Trend */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700">Weekly Performance Trend</h3>
          <TrendingUp size={16} color="#10b981" />
        </div>
        <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Performance chart placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
