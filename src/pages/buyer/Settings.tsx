import React from 'react';
import { Settings, User, Bell, Shield, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const BuyerSettings: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start justify-between mb-5"
      >
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Settings</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage your account preferences
          </p>
        </div>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {/* Profile Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-lg border border-gray-200"
        >
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
                defaultValue="James Wilson"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                defaultValue="james@turnermotors.com"
              />
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-lg border border-gray-200"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Bell size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Email notifications</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Push notifications</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Follow-up reminders</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
            </div>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-lg border border-gray-200"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Shield size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Security</h3>
            </div>
          </div>
          <div className="p-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Change Password
            </motion.button>
          </div>
        </motion.div>

        {/* Appearance Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-lg border border-gray-200"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Palette size={18} color="#2563eb" />
              <h3 className="text-sm font-medium text-gray-700">Appearance</h3>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Theme</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyerSettings;
