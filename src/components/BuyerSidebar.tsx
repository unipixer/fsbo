import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Search, List, LayoutGrid, Clock, 
  FileText, Calendar, BarChart3, Settings, 
  LogOut, Truck 
} from 'lucide-react';
import { motion } from 'framer-motion';

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
        {[
          { to: '/buyer', icon: Home, label: 'Home' },
          { to: '/buyer/marketplace-searches', icon: Search, label: 'Marketplace Searches' },
          { to: '/buyer/opportunities', icon: List, label: 'My Opportunities' },
          { to: '/buyer/pipeline', icon: LayoutGrid, label: 'My Pipeline' },
          { to: '/buyer/follow-ups', icon: Clock, label: 'Follow Ups' },
          { to: '/buyer/templates', icon: FileText, label: 'Templates' },
          { to: '/buyer/appointments', icon: Calendar, label: 'Appointments' },
          { to: '/buyer/performance', icon: BarChart3, label: 'Performance' },
          { to: '/buyer/settings', icon: Settings, label: 'Settings' },
        ].map((item, index) => (
          <div key={item.to}>
            <Link 
              to={item.to} 
              className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${
                isActive(item.to) 
                  ? 'bg-[#2563eb] text-white' 
                  : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'
              }`}
            >
              <item.icon size={16} className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          </div>
        ))}
      </nav>

      {/* Collapse */}
      <div className="border-t border-white/8 px-4 py-3">
        <div 
          onClick={onToggle} 
          className="flex items-center gap-2.5 px-4 py-2 text-[#9ca3af] cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-0 hover:bg-white/7 hover:text-white"
        >
          <LogOut size={16} className="w-4 h-4 flex-shrink-0" />
          <span className="text-[13px]">Collapse</span>
        </div>
      </div>
    </div>
  );
};

export default BuyerSidebar;
