import React from 'react';
import { Settings, User, Bell, Shield, Palette } from 'lucide-react';

const AppraisalSettings: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Settings</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage your appraiser account preferences
          </p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {/* Profile Settings */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Profile Settings</h3>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                defaultValue="Robert Johnson"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                defaultValue="robert@turnermotors.com"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Bell size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">New appraisal requests</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Buyer responses to info requests</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Daily summary emails</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Appraisal Settings */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Shield size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Appraisal Preferences</h3>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Default appraisal threshold</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Market value ± 10%</option>
                <option>Market value ± 15%</option>
                <option>Market value ± 20%</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Required fields for approval</label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm text-gray-700">VIN</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm text-gray-700">Mileage</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm text-gray-700">Price</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Shield size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Security</h3>
            </div>
          </div>
          <div className="p-4">
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalSettings;
