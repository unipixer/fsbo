import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Plus, Calendar, Bell, ChevronDown, LogOut, Settings, User, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

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
        
        {showNotifications && (
          <div className="absolute right-0 top-10 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
            <div className="p-3 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Notifications</span>
              <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-blue-50' : ''}`}>
                  <div className="text-xs text-gray-900 mb-1">{notif.message}</div>
                  <div className="text-[10px] text-gray-500">{notif.time}</div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-200">
              <button className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium">
                Mark all as read
              </button>
            </div>
          </div>
        )}
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
        
        {showProfile && (
          <div className="absolute right-0 top-10 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
            <div className="p-3 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br from-blue-500 to-blue-700">
                  {user ? getInitials(user.name) : 'JD'}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{user ? user.name : 'James Dalton'}</div>
                  <div className="text-xs text-gray-500 capitalize">{user ? user.role : 'Buyer'}</div>
                </div>
              </div>
            </div>
            <div className="p-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition">
                <User size={14} color="#6b7280" />
                <span>My Profile</span>
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition">
                <Settings size={14} color="#6b7280" />
                <span>Settings</span>
              </button>
            </div>
            <div className="p-1 border-t border-gray-200">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Add New Opportunity</span>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1 block">Vehicle</label>
                <input type="text" placeholder="e.g., 2018 Honda Accord" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1 block">Seller Name</label>
                <input type="text" placeholder="Seller name" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1 block">Price</label>
                <input type="number" placeholder="Asking price" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1 block">Source</label>
                <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Facebook Marketplace</option>
                  <option>OfferUp</option>
                  <option>Craigslist</option>
                </select>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end gap-2">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition">
                Cancel
              </button>
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                Add Opportunity
              </button>
            </div>
          </div>
        </div>
      )}

      {showCalendar && (
        <div className="absolute right-16 top-10 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-3 border-b border-gray-200 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Upcoming Appointments</span>
            <button onClick={() => setShowCalendar(false)} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {appointments.map((apt) => (
              <div key={apt.id} className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                <div className="text-xs font-semibold text-gray-900 mb-1">{apt.title}</div>
                <div className="text-[10px] text-gray-500">{apt.time}</div>
                <div className="text-[10px] text-gray-400">{apt.location}</div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200">
            <button className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium">
              View All Appointments
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
