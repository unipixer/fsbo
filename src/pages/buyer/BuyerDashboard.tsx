import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import StatCard from '../../components/StatCard';
import FollowUps from '../../components/FollowUps';
import PipelineOverview from '../../components/PipelineOverview';
import OpportunitiesBySource from '../../components/OpportunitiesBySource';
import TopBuyers from '../../components/TopBuyers';
import OpportunitiesByStage from '../../components/OpportunitiesByStage';
import StaleOpportunities from '../../components/StaleOpportunities';
import RightPanel from '../../components/RightPanel';
import { 
  List, Plus, Clock, Calendar as CalendarIcon, DollarSign 
} from 'lucide-react';

const BuyerDashboard: React.FC = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Dashboard</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Welcome back, James. Here's what's happening with your pipeline today.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer">
              <span className="text-xs text-gray-700 font-medium">May 12, 2025</span>
              <Calendar size={14} color="#6b7280" />
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer">
              <span className="text-xs text-gray-700 font-medium">All sources</span>
              <ChevronDown size={14} color="#6b7280" />
            </div>
          </div>
        </div>

        {/* Stat Cards Row */}
        <div className="grid grid-cols-5 gap-3 mb-4.5">
          <StatCard 
            title="Total Opportunities"
            value="234"
            change="↑ 18%"
            changeColor="#10b981"
            subtitle="vs last 7 days"
            icon={List}
            iconBg="#eff6ff"
            iconColor="#2563eb"
          />
          <StatCard 
            title="New This Week"
            value="42"
            change="↑ 12%"
            changeColor="#10b981"
            subtitle="vs last 7 days"
            icon={Plus}
            iconBg="#f0fdf4"
            iconColor="#10b981"
          />
          <StatCard 
            title="Follow Ups Due Today"
            value="18"
            change="↑ 5"
            changeColor="#ef4444"
            subtitle="Requires your attention"
            icon={Clock}
            iconBg="#fff7ed"
            iconColor="#f97316"
          />
          <StatCard 
            title="Appointments This Week"
            value="7"
            change="↑ 2"
            changeColor="#10b981"
            subtitle="Scheduled"
            icon={CalendarIcon}
            iconBg="#f5f3ff"
            iconColor="#7c3aed"
          />
          <StatCard 
            title="Vehicles Appraised"
            value="11"
            change="↑ 7%"
            changeColor="#10b981"
            subtitle="vs last 7 days"
            icon={DollarSign}
            iconBg="#fef2f2"
            iconColor="#ef4444"
          />
        </div>

        {/* Row 2: Follow Ups + Pipeline Overview */}
        <div className="grid grid-cols-[1fr_1.35fr] gap-3.5 mb-3.5">
          <FollowUps />
          <PipelineOverview />
        </div>

        {/* Row 3: Opp by Source + Top Buyers + Opp by Stage */}
        <div className="grid grid-cols-3 gap-3.5 mb-3.5">
          <OpportunitiesBySource />
          <TopBuyers />
          <OpportunitiesByStage />
        </div>

        {/* Row 4: Stale Opportunities */}
        <StaleOpportunities />
      </div>

      <RightPanel />
    </div>
  );
};

export default BuyerDashboard;
