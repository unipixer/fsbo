import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, List, Search, MessageSquare, CheckSquare, 
  Calendar, Star, Truck, Users, Users2, 
  FileText, Settings, Plug2, CreditCard, LogOut 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
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
        <Link to="/" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <LayoutGrid size={16} className="w-4 h-4 flex-shrink-0" />
          Dashboard
        </Link>
        <Link to="/pipeline" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/pipeline') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <LayoutGrid size={16} className="w-4 h-4 flex-shrink-0" />
          Pipeline
        </Link>
        <Link to="/opportunities" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/opportunities') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <List size={16} className="w-4 h-4 flex-shrink-0" />
          Opportunities
        </Link>
        <Link to="/conversations" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/conversations') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Search size={16} className="w-4 h-4 flex-shrink-0" />
          Conversations
        </Link>
        <Link to="/tasks" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/tasks') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <MessageSquare size={16} className="w-4 h-4 flex-shrink-0" />
          Tasks & Follow Ups
        </Link>
        <Link to="/appointments" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appointments') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <CheckSquare size={16} className="w-4 h-4 flex-shrink-0" />
          Appointments
        </Link>
        <Link to="/appraisals" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisals') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Calendar size={16} className="w-4 h-4 flex-shrink-0" />
          Appraisals
        </Link>
        <Link to="/vehicles" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/vehicles') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Star size={16} className="w-4 h-4 flex-shrink-0" />
          Vehicles
        </Link>
        <Link to="/sellers" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/sellers') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Truck size={16} className="w-4 h-4 flex-shrink-0" />
          Sellers
        </Link>
        <Link to="/reports" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/reports') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Users size={16} className="w-4 h-4 flex-shrink-0" />
          Reports
        </Link>

        <div className="text-[#6b7280] text-[10px] font-semibold tracking-[0.08em] px-4 pt-4 pb-1 uppercase">Management</div>
        <Link to="/team" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/team') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Users2 size={16} className="w-4 h-4 flex-shrink-0" />
          Team
        </Link>
        <Link to="/templates" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/templates') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <FileText size={16} className="w-4 h-4 flex-shrink-0" />
          Templates
        </Link>
        <Link to="/settings" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/settings') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Settings size={16} className="w-4 h-4 flex-shrink-0" />
          Settings
        </Link>
        <Link to="/integrations" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/integrations') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Plug2 size={16} className="w-4 h-4 flex-shrink-0" />
          Integrations
        </Link>
        <Link to="/billing" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/billing') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <CreditCard size={16} className="w-4 h-4 flex-shrink-0" />
          Billing
        </Link>

        <div className="text-[#6b7280] text-[10px] font-semibold tracking-[0.08em] px-4 pt-4 pb-1 uppercase">Sources</div>
        <div className="flex items-center gap-2.5 px-4 py-2 text-[#9ca3af] cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 hover:bg-white/7 hover:text-white justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 bg-[#1877f2] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <span className="text-[#d1d5db] text-[12.5px]">Facebook Marketplace</span>
          </div>
          <span className="bg-[#d1fae5] text-[#059669] text-[10px] px-1.5 py-0.5 rounded-full font-medium">Active</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2 text-[#9ca3af] cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 hover:bg-white/7 hover:text-white justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 bg-[#6b7280] rounded-full flex-shrink-0" />
            <span className="text-[#6b7280] text-[12.5px]">OfferUp</span>
          </div>
          <span className="bg-[#f3f4f6] text-[#9ca3af] text-[10px] px-1.5 py-0.5 rounded-full font-medium">Coming soon</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2 text-[#9ca3af] cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 hover:bg-white/7 hover:text-white justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 bg-[#6b7280] rounded-full flex-shrink-0" />
            <span className="text-[#6b7280] text-[12.5px]">Craigslist</span>
          </div>
          <span className="bg-[#f3f4f6] text-[#9ca3af] text-[10px] px-1.5 py-0.5 rounded-full font-medium">Coming soon</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2 text-[#9ca3af] cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 hover:bg-white/7 hover:text-white justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 bg-[#6b7280] rounded-full flex-shrink-0" />
            <span className="text-[#6b7280] text-[12.5px]">Inbound Forms</span>
          </div>
          <span className="bg-[#f3f4f6] text-[#9ca3af] text-[10px] px-1.5 py-0.5 rounded-full font-medium">Coming soon</span>
        </div>
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

export default Sidebar;
