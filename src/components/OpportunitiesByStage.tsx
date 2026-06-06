import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const OpportunitiesByStage: React.FC = () => {
  const stages = [
    { name: 'New', count: 24, percentage: '10%', color: '#3b82f6' },
    { name: 'Contacted', count: 37, percentage: '16%', color: '#8b5cf6' },
    { name: 'Negotiating', count: 28, percentage: '12%', color: '#f59e0b' },
    { name: 'Appraisal', count: 15, percentage: '6%', color: '#f97316' },
    { name: 'Offer Made', count: 22, percentage: '9%', color: '#06b6d4' },
    { name: 'Closed', count: 108, percentage: '47%', color: '#10b981' },
  ];

  const chartData = {
    labels: ['New', 'Contacted', 'Negotiating', 'Appraisal', 'Offer Made', 'Closed'],
    datasets: [{
      data: [24, 37, 28, 15, 22, 108],
      backgroundColor: ['#3b82f6', '#8b5cf6', '#f59e0b', '#f97316', '#06b6d4', '#10b981'],
      borderWidth: 0,
      hoverOffset: 8
    }]
  };

  const chartOptions = {
    cutout: '72%',
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart' as const
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: { 
      legend: { display: false }, 
      tooltip: {
        enabled: true,
        backgroundColor: '#1f2937',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        bodyFont: { size: 12 },
        cornerRadius: 6,
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw;
            const percentage = stages[context.dataIndex].percentage;
            return `${label}: ${value} (${percentage})`;
          }
        }
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg border border-gray-200 p-0"
    >
      <div className="px-4 py-3.5 pb-2.5 text-sm font-semibold text-gray-900">
        Opportunities by Stage
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      <div className="px-4 py-3.5 flex items-center gap-3.5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative w-[110px] h-[110px] flex-shrink-0"
        >
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-gray-900">234</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </motion.div>
        <div className="flex-1">
          {stages.map((stage, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              className="flex justify-between mb-1.25"
            >
              <div className="flex items-center gap-1.25">
                <div className="w-1.75 h-1.75 rounded-full" style={{ background: stage.color }} />
                <span className="text-[11.5px] text-gray-700">{stage.name}</span>
              </div>
              <span className="text-[11.5px] text-gray-700">{stage.count} ({stage.percentage})</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunitiesByStage;
