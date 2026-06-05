import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, LogOut, Truck, Clock, AlertCircle, 
  CheckCircle, XCircle, FileText, History, 
  BarChart3, Settings 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AppraisalSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
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
        <Link to="/appraisal" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Calendar size={16} className="w-4 h-4 flex-shrink-0" />
          Appraisal Queue
        </Link>
        <Link to="/appraisal/requested" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/requested') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <Clock size={16} className="w-4 h-4 flex-shrink-0" />
          Requested
        </Link>
        <Link to="/appraisal/needs-info" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/needs-info') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <AlertCircle size={16} className="w-4 h-4 flex-shrink-0" />
          Needs Info
        </Link>
        <Link to="/appraisal/approved" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/approved') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <CheckCircle size={16} className="w-4 h-4 flex-shrink-0" />
          Approved
        </Link>
        <Link to="/appraisal/rejected" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/rejected') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <XCircle size={16} className="w-4 h-4 flex-shrink-0" />
          Rejected
        </Link>
        <Link to="/appraisal/vehicle-packets" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/vehicle-packets') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <FileText size={16} className="w-4 h-4 flex-shrink-0" />
          Vehicle Packets
        </Link>
        <Link to="/appraisal/valuation-history" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/valuation-history') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <History size={16} className="w-4 h-4 flex-shrink-0" />
          Valuation History
        </Link>
        <Link to="/appraisal/metrics" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/metrics') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
          <BarChart3 size={16} className="w-4 h-4 flex-shrink-0" />
          Metrics
        </Link>
        <Link to="/appraisal/settings" className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-150 text-[13px] font-400 rounded-md mx-2 ${isActive('/appraisal/settings') ? 'bg-[#2563eb] text-white' : 'text-[#9ca3af] hover:bg-white/7 hover:text-white'}`}>
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

export default AppraisalSidebar;
