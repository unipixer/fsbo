import React, { useState } from 'react';
import { Calendar, ChevronDown, X } from 'lucide-react';
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
import { motion, AnimatePresence } from 'framer-motion';

const BuyerDashboard: React.FC = () => {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showSourceDropdown, setShowSourceDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState('May 12, 2025');
  const [selectedSource, setSelectedSource] = useState('All sources');

  const dateOptions = [
    'Today',
    'Yesterday',
    'Last 7 days',
    'Last 30 days',
    'This month',
    'Last month',
    'Custom range'
  ];

  const sourceOptions = [
    'All sources',
    'Facebook Marketplace',
    'OfferUp',
    'Craigslist',
    'Autotrader',
    'Cars.com'
  ];

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
            <div className="relative">
              <div 
                className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:border-gray-300 transition"
                onClick={() => setShowDateDropdown(!showDateDropdown)}
              >
                <span className="text-xs text-gray-700 font-medium">{selectedDate}</span>
                <Calendar size={14} color="#6b7280" />
              </div>
              <AnimatePresence>
                {showDateDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                  >
                    <div className="p-1">
                      {dateOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedDate(option);
                            setShowDateDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <div 
                className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:border-gray-300 transition"
                onClick={() => setShowSourceDropdown(!showSourceDropdown)}
              >
                <span className="text-xs text-gray-700 font-medium">{selectedSource}</span>
                <ChevronDown size={14} color="#6b7280" />
              </div>
              <AnimatePresence>
                {showSourceDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                  >
                    <div className="p-1">
                      {sourceOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedSource(option);
                            setShowSourceDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg transition"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Stat Cards Row */}
        <div className="grid grid-cols-5 gap-3 mb-4.5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('Total Opportunities clicked')}
            className="cursor-pointer"
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('New This Week clicked')}
            className="cursor-pointer"
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('Follow Ups Due Today clicked')}
            className="cursor-pointer"
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('Appointments This Week clicked')}
            className="cursor-pointer"
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('Vehicles Appraised clicked')}
            className="cursor-pointer"
          >
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
          </motion.div>
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
