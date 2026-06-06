import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Plus, Calendar, Bell, ChevronDown, LogOut, Settings, User, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface TopbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const notifications = [
    { id: 1, message: 'New opportunity assigned: 2018 Honda Accord', time: '2 min ago', unread: true },
    { id: 2, message: 'Follow-up reminder: Call Sarah Williams', time: '15 min ago', unread: true },
    { id: 3, message: 'Appraisal completed for Ford F-150', time: '1 hour ago', unread: false },
    { id: 4, message: 'Offer accepted on BMW 328i', time: '2 hours ago', unread: false },
    { id: 5, message: 'New message from Mike Johnson', time: '3 hours ago', unread: false },
    { id: 6, message: 'Pipeline update: 3 opportunities moved to closed', time: '5 hours ago', unread: false },
    { id: 7, message: 'Team meeting scheduled for tomorrow', time: '1 day ago', unread: false },
    { id: 8, message: 'Monthly report available', time: '2 days ago', unread: false },
  ];

  const appointments = [
    { id: 1, title: 'Vehicle Inspection', time: 'Today, 2:00 PM', location: '123 Main St' },
    { id: 2, title: 'Seller Meeting', time: 'Today, 4:30 PM', location: '456 Oak Ave' },
    { id: 3, title: 'Appraisal Review', time: 'Tomorrow, 10:00 AM', location: 'Office' },
    { id: 4, title: 'Team Standup', time: 'Tomorrow, 9:00 AM', location: 'Conference Room' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 h-14 flex items-center px-5 gap-3 sticky top-0 z-10">
      <button onClick={onToggleSidebar} className="bg-transparent border-none cursor-pointer text-gray-500 p-1">
        <Menu size={18} />
      </button>
      <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg flex items-center gap-2 px-3 h-8.5 max-w-[360px]">
        <Search size={14} color="#9ca3af" />
        <input
          type="text"
          placeholder="Search opportunities, vehicles, sellers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-xs flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600">
            <X size={12} />
          </button>
        )}
      </div>
      <div className="flex-1" />
      <div 
        className="w-7.5 h-7.5 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
        onClick={() => setShowAddModal(true)}
        title="Add Opportunity"
      >
        <Plus size={16} color="#fff" strokeWidth={2.5} />
      </div>
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 bg-gray-100 hover:bg-gray-200 transition"
        onClick={() => setShowCalendar(!showCalendar)}
        title="Calendar"
      >
        <Calendar size={17} color="#6b7280" />
      </div>
      <div className="relative">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 bg-gray-100 hover:bg-gray-200 transition"
          onClick={() => setShowNotifications(!showNotifications)}
          title="Notifications"
        >
          <Bell size={17} color="#6b7280" />
          <span className="absolute -top-0.25 -right-0.25 w-3.5 h-3.5 bg-red-500 rounded-full text-[8.5px] text-white flex items-center justify-center font-semibold">8</span>
        </div>
        
        <AnimatePresence>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-10 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
            >
              <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">Notifications</span>
                <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notif, index) => (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-blue-50' : ''}`}
                  >
                    <div className="text-xs text-gray-900 mb-1">{notif.message}</div>
                    <div className="text-[10px] text-gray-500">{notif.time}</div>
                  </motion.div>
                ))}
              </div>
              <div className="p-2 border-t border-gray-200">
                <button className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Mark all as read
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition"
          onClick={() => setShowProfile(!showProfile)}
        >
          <div className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-xs font-semibold bg-gradient-to-br from-blue-500 to-blue-700">
            {user ? getInitials(user.name) : 'JD'}
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-900 leading-tight">{user ? user.name : 'James Dalton'}</div>
            <div className="text-[11px] text-gray-500 capitalize">{user ? user.role : 'Buyer'}</div>
          </div>
          <ChevronDown size={13} color="#6b7280" />
        </div>
        
        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-10 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
            >
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br from-blue-500 to-blue-700"
                  >
                    {user ? getInitials(user.name) : 'JD'}
                  </motion.div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{user ? user.name : 'James Dalton'}</div>
                    <div className="text-xs text-gray-500 capitalize">{user ? user.role : 'Buyer'}</div>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition"
                >
                  <User size={14} color="#6b7280" />
                  <span>My Profile</span>
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition"
                >
                  <Settings size={14} color="#6b7280" />
                  <span>Settings</span>
                </motion.button>
              </div>
              <div className="p-1 border-t border-gray-200">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <LogOut size={14} />
                  <span>Logout</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md"
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">Add New Opportunity</span>
                <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              </div>
              <div className="p-4 space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Vehicle</label>
                  <input type="text" placeholder="e.g., 2018 Honda Accord" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Seller Name</label>
                  <input type="text" placeholder="Seller name" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Price</label>
                  <input type="number" placeholder="Asking price" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Source</label>
                  <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Facebook Marketplace</option>
                    <option>OfferUp</option>
                    <option>Craigslist</option>
                  </select>
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-200 flex justify-end gap-2">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition"
                >
                  Cancel
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  Add Opportunity
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 top-10 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          >
            <div className="p-3 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Upcoming Appointments</span>
              <button onClick={() => setShowCalendar(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {appointments.map((apt, index) => (
                <motion.div
                  key={apt.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="text-xs font-semibold text-gray-900 mb-1">{apt.title}</div>
                  <div className="text-[10px] text-gray-500">{apt.time}</div>
                  <div className="text-[10px] text-gray-400">{apt.location}</div>
                </motion.div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-200">
              <button className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium">
                View All Appointments
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Topbar;
