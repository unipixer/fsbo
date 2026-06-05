import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, Users, Users2, FileText, Settings, 
  Plug2, CreditCard, LogOut, Truck 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ManagerSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
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
            <div className="text-white font-bold text-sm leading-tight">SourcePilot</div>
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
        <Link to="/manager" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <LayoutGrid size={16} className="w-4 h-4 flex-shrink-0" />
          Dashboard
        </Link>
        <Link to="/manager/reports" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager/reports') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Users size={16} className="w-4 h-4 flex-shrink-0" />
          Reports
        </Link>

        <div className="text-[#6b7280] text-[10px] font-semibold tracking-[0.08em] px-4 pt-4 pb-1 uppercase">Management</div>
        <Link to="/manager/team" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager/team') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Users2 size={16} className="w-4 h-4 flex-shrink-0" />
          Team
        </Link>
        <Link to="/manager/templates" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager/templates') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <FileText size={16} className="w-4 h-4 flex-shrink-0" />
          Templates
        </Link>
        <Link to="/manager/settings" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager/settings') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Settings size={16} className="w-4 h-4 flex-shrink-0" />
          Settings
        </Link>
        <Link to="/manager/integrations" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager/integrations') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Plug2 size={16} className="w-4 h-4 flex-shrink-0" />
          Integrations
        </Link>
        <Link to="/manager/billing" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/manager/billing') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <CreditCard size={16} className="w-4 h-4 flex-shrink-0" />
          Billing
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

export default ManagerSidebar;
