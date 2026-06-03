import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const OpportunitiesBySource: React.FC = () => {
  const sources = [
    { name: 'Facebook Marketplace', count: 234, percentage: '100%', color: '#2563eb' },
    { name: 'OfferUp', count: 0, percentage: '0%', color: '#93c5fd' },
    { name: 'Craigslist', count: 0, percentage: '0%', color: '#bfdbfe' },
    { name: 'Inbound Forms', count: 0, percentage: '0%', color: '#e0e7ff' },
  ];

  const chartData = {
    labels: ['Facebook Marketplace', 'OfferUp', 'Craigslist', 'Inbound Forms'],
    datasets: [{
      data: [234, 0, 0, 0],
      backgroundColor: ['#2563eb', '#93c5fd', '#bfdbfe', '#e0e7ff'],
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
            const percentage = sources[context.dataIndex].percentage;
            return `${label}: ${value} (${percentage})`;
          }
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-0">
      <div className="px-4 py-3.5 pb-2.5 text-sm font-semibold text-gray-900">
        Opportunities by Source
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      <div className="px-4 py-3.5 flex items-center gap-3.5">
        <div className="relative w-[110px] h-[110px] flex-shrink-0">
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-gray-900">234</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </div>
        <div className="flex-1">
          {sources.map((source, index) => (
            <div key={index} className="flex items-center gap-1.5 mb-1.5">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: source.color }} />
              <span className="text-xs text-gray-700 flex-1">{source.name}</span>
              <span className="text-xs font-medium text-gray-900">
                {source.count} ({source.percentage})
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pb-3 text-gray-400 text-[11.5px]">
        More sources coming soon
      </div>
    </div>
  );
};

export default OpportunitiesBySource;
