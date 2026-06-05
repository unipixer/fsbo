import React from 'react';
import { AlertCircle, User, Send, CheckCircle } from 'lucide-react';

const NeedsInfo: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Needs Information</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Appraisals requiring additional information from buyers
          </p>
        </div>
      </div>

      {/* Needs Info List */}
      <div className="space-y-4">
        {/* Needs Info Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2020 Audi Q7</h3>
                <p className="text-xs text-gray-500">Sarah M. • Info requested 1 day ago</p>
              </div>
            </div>
            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">Awaiting Response</span>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} color="#f97316" />
              <span className="text-sm font-medium text-orange-700">Information Needed</span>
            </div>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• VIN number</li>
              <li>• Current mileage</li>
              <li>• Title status</li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
              <Send size={16} />
              Send Reminder
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300">
              View Details
            </button>
          </div>
        </div>

        {/* Needs Info Item */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">MD</div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">2021 GMC Sierra</h3>
                <p className="text-xs text-gray-500">Mike D. • Info requested 2 days ago</p>
              </div>
            </div>
            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">Awaiting Response</span>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} color="#f97316" />
              <span className="text-sm font-medium text-orange-700">Information Needed</span>
            </div>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Vehicle photos</li>
              <li>• Condition report</li>
              <li>• Seller availability</li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
              <Send size={16} />
              Send Reminder
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedsInfo;
