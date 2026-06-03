import React from 'react';
import { Menu, Search, Plus, Calendar, Bell, ChevronDown } from 'lucide-react';

interface TopbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div className="bg-white border-b border-gray-200 h-14 flex items-center px-5 gap-3 sticky top-0 z-10">
      <button onClick={onToggleSidebar} className="bg-transparent border-none cursor-pointer text-gray-500 p-1">
        <Menu size={18} />
      </button>
      <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg flex items-center gap-2 px-3 h-8.5 max-w-[360px]">
        <Search size={14} color="#9ca3af" />
        <span className="text-gray-400 text-xs flex-1">Search opportunities, vehicles, sellers...</span>
        <span className="text-gray-400 text-[11px] bg-gray-200 px-1.5 py-0.5 rounded">⌘ K</span>
      </div>
      <div className="flex-1" />
      <div className="w-7.5 h-7.5 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
        <Plus size={16} color="#fff" strokeWidth={2.5} />
      </div>
      <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 bg-gray-100">
        <Calendar size={17} color="#6b7280" />
      </div>
      <div className="relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 bg-gray-100">
        <Bell size={17} color="#6b7280" />
        <span className="absolute -top-0.25 -right-0.25 w-3.5 h-3.5 bg-red-500 rounded-full text-[8.5px] text-white flex items-center justify-center font-semibold">8</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-xs font-semibold bg-gradient-to-br from-blue-500 to-blue-700">JD</div>
        <div>
          <div className="text-xs font-semibold text-gray-900 leading-tight">James Dalton</div>
          <div className="text-[11px] text-gray-500">Buyer</div>
        </div>
        <ChevronDown size={13} color="#6b7280" />
      </div>
    </div>
  );
};

export default Topbar;
