import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Search, List, LayoutGrid, Clock, 
  FileText, Calendar, BarChart3, Settings, 
  LogOut, Truck 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const BuyerSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  if (!isOpen) {
    return null;
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-[210px] min-w-[210px] bg-[#1a2332] h-screen overflow-y-auto flex-shrink-0 flex flex-col">
      {/* Logo */}
      <div className="px-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8.5 h-8.5 bg-blue-600 rounded-lg flex items-center justify-center">
            <Truck size={18} color="#fff" strokeWidth={2.2} />
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">FSBO Buying Assistant</div>
            <div className="text-gray-400 text-[10.5px]">Vehicle Sourcing Dashboard</div>
          </div>
        </div>
      </div>

      {/* Company Selector */}
      <div className="mx-2.5 my-3 mb-1 bg-white/7 rounded-lg px-3 py-2.5 cursor-pointer flex items-center justify-between">
        <div>
          <div className="text-white font-semibold text-xs">Turner Motors</div>
          <div className="text-gray-400 text-[11px]">Dallas, TX</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Nav */}
      <nav className="flex-1 pt-2">
        <Link to="/buyer" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Home size={16} className="w-4 h-4 flex-shrink-0" />
          Home
        </Link>
        <Link to="/buyer/marketplace-searches" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/marketplace-searches') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Search size={16} className="w-4 h-4 flex-shrink-0" />
          Marketplace Searches
        </Link>
        <Link to="/buyer/opportunities" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/opportunities') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <List size={16} className="w-4 h-4 flex-shrink-0" />
          My Opportunities
        </Link>
        <Link to="/buyer/pipeline" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/pipeline') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <LayoutGrid size={16} className="w-4 h-4 flex-shrink-0" />
          My Pipeline
        </Link>
        <Link to="/buyer/follow-ups" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/follow-ups') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Clock size={16} className="w-4 h-4 flex-shrink-0" />
          Follow Ups
        </Link>
        <Link to="/buyer/templates" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/templates') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <FileText size={16} className="w-4 h-4 flex-shrink-0" />
          Templates
        </Link>
        <Link to="/buyer/appointments" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/appointments') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Calendar size={16} className="w-4 h-4 flex-shrink-0" />
          Appointments
        </Link>
        <Link to="/buyer/performance" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/performance') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <BarChart3 size={16} className="w-4 h-4 flex-shrink-0" />
          Performance
        </Link>
        <Link to="/buyer/settings" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/buyer/settings') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Settings size={16} className="w-4 h-4 flex-shrink-0" />
          Settings
        </Link>
      </nav>

      {/* Collapse */}
      <div className="border-t border-white/8 px-4 py-3">
        <div onClick={onToggle} className="flex items-center gap-2.5 px-4 py-2 text-[#9ca3af] cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-0 hover:bg-white/7 hover:text-white">
          <LogOut size={16} className="w-4 h-4 flex-shrink-0" />
          <span className="text-[13px]">Collapse</span>
        </div>
      </div>
    </div>
  );
};

export default BuyerSidebar;
