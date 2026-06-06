import React, { useState } from 'react';
import { 
  Download, Calendar, TrendingUp, DollarSign, 
  Car, Users, BarChart3, PieChart
} from 'lucide-react';
import { motion } from 'framer-motion';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reports = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'sales', name: 'Sales Performance', icon: DollarSign },
    { id: 'inventory', name: 'Inventory Report', icon: Car },
    { id: 'team', name: 'Team Performance', icon: Users },
    { id: 'sources', name: 'Source Analysis', icon: PieChart }
  ];

  const stats = {
    totalRevenue: 125000,
    totalSales: 15,
    avgProfit: 3500,
    conversionRate: 23
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start justify-between mb-5"
      >
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Reports</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Analytics and performance insights
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
            <Calendar size={13} color="#6b7280" />
            <select 
              className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="365">Last Year</option>
            </select>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50"
          >
            <Download size={14} color="#6b7280" />
            <span className="text-xs text-gray-700 font-medium">Export</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Report Type Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center gap-1 mb-4 bg-white rounded-lg border border-gray-200 p-1"
      >
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                selectedReport === report.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon size={14} />
              {report.name}
            </button>
          );
        })}
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="grid grid-cols-4 gap-3 mb-4"
      >
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Total Revenue</div>
            <DollarSign size={14} color="#10b981" />
          </div>
          <div className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</div>
          <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp size={10} />
            +12% from last period
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Total Sales</div>
            <Car size={14} color="#3b82f6" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.totalSales}</div>
          <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp size={10} />
            +8% from last period
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Avg Profit</div>
            <DollarSign size={14} color="#f59e0b" />
          </div>
          <div className="text-2xl font-bold text-gray-900">${stats.avgProfit.toLocaleString()}</div>
          <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp size={10} />
            +5% from last period
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Conversion Rate</div>
            <BarChart3 size={14} color="#8b5cf6" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</div>
          <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp size={10} />
            +3% from last period
          </div>
        </div>
      </motion.div>

      {/* Charts Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="grid grid-cols-2 gap-4 mb-4"
      >
        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 size={32} color="#d1d5db" className="mx-auto mb-2" />
              <div className="text-xs text-gray-500">Revenue chart visualization</div>
            </div>
          </div>
        </div>

        {/* Sales by Source Chart Placeholder */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Sales by Source</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart size={32} color="#d1d5db" className="mx-auto mb-2" />
              <div className="text-xs text-gray-500">Source distribution chart</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detailed Table */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
      >
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { vehicle: '2018 Honda Accord EX', salePrice: 22500, profit: 6500, date: 'May 10, 2025', source: 'Facebook' },
            { vehicle: '2018 Chevrolet Silverado', salePrice: 38000, profit: 6000, date: 'May 1, 2025', source: 'OfferUp' },
            { vehicle: '2020 Toyota Camry LE', salePrice: 21500, profit: 3000, date: 'Apr 28, 2025', source: 'Craigslist' },
            { vehicle: '2017 Ford F-150 XLT', salePrice: 34500, profit: 8500, date: 'Apr 22, 2025', source: 'Facebook' },
            { vehicle: '2019 Nissan Altima SR', salePrice: 19800, profit: 4300, date: 'Apr 15, 2025', source: 'OfferUp' }
          ].map((transaction, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div>
                <div className="text-sm font-medium text-gray-900">{transaction.vehicle}</div>
                <div className="text-xs text-gray-500">{transaction.date} • {transaction.source}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">${transaction.salePrice.toLocaleString()}</div>
                <div className="text-xs text-green-600">+${transaction.profit.toLocaleString()} profit</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;
