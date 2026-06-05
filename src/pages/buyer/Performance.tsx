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
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={16} color="#2563eb" />
            <span className="text-xs text-gray-500">Listings Reviewed</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">47</div>
          <div className="text-xs text-green-600 mt-1">↑ 12% vs yesterday</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={16} color="#10b981" />
            <span className="text-xs text-gray-500">Claims</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-xs text-green-600 mt-1">↑ 8% vs yesterday</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} color="#7c3aed" />
            <span className="text-xs text-gray-500">First Messages</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">9</div>
          <div className="text-xs text-green-600 mt-1">↑ 15% vs yesterday</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={16} color="#f97316" />
            <span className="text-xs text-gray-500">VINs Collected</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">7</div>
          <div className="text-xs text-green-600 mt-1">↑ 20% vs yesterday</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} color="#ef4444" />
            <span className="text-xs text-gray-500">Appraisals Requested</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">5</div>
          <div className="text-xs text-green-600 mt-1">↑ 10% vs yesterday</div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Replies Received</div>
          <div className="text-xl font-bold text-gray-900">6</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Offers Sent</div>
          <div className="text-xl font-bold text-gray-900">3</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Appointments Set</div>
          <div className="text-xl font-bold text-gray-900">2</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Purchases</div>
          <div className="text-xl font-bold text-gray-900">1</div>
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
