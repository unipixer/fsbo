import React from 'react';
import { Clock, Check, Calendar, MessageSquare } from 'lucide-react';

const FollowUps: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Follow Ups</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Track and manage your follow-up tasks
          </p>
        </div>
      </div>

      {/* Follow Up Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Overdue</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">5</div>
              <div className="text-xs text-gray-500">Requires attention</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-red-100">
              <Clock size={20} color="#ef4444" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Due Today</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">12</div>
              <div className="text-xs text-gray-500">Scheduled</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
              <Calendar size={20} color="#f97316" strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Upcoming</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-2">28</div>
              <div className="text-xs text-gray-500">Future tasks</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-blue-100">
              <MessageSquare size={20} color="#2563eb" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Follow Up List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">Today's Follow Ups</h3>
        </div>
        
        {/* Follow Up Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock size={20} color="#f97316" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2019 Ford F-150</h3>
                <p className="text-xs text-gray-500">Seller: John Smith • Due: 2:00 PM</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              <Check size={20} />
            </button>
          </div>
        </div>

        {/* Follow Up Item */}
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock size={20} color="#f97316" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2020 Honda CR-V</h3>
                <p className="text-xs text-gray-500">Seller: Sarah Johnson • Due: 4:30 PM</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              <Check size={20} />
            </button>
          </div>
        </div>

        {/* Follow Up Item */}
        <div className="p-4 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock size={20} color="#f97316" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2018 Toyota Camry</h3>
                <p className="text-xs text-gray-500">Seller: Mike Davis • Due: 5:00 PM</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              <Check size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUps;
