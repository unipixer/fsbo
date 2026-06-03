import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PipelineOverview: React.FC = () => {
  const stages = [
    { name: 'New', count: 24, value: '$283,400', color: '#3b82f6' },
    { name: 'Contacted', count: 37, value: '$412,650', color: '#8b5cf6' },
    { name: 'Negotiating', count: 28, value: '$517,300', color: '#f59e0b' },
    { name: 'Appraisal', count: 15, value: '$275,000', color: '#f97316' },
    { name: 'Offer Made', count: 22, value: '$380,900', color: '#06b6d4' },
    { name: 'Closed', count: 18, value: '$610,200', color: '#10b981' },
  ];

  const chartData = {
    labels: ['Apr 12', 'Apr 19', 'Apr 26', 'May 3', 'May 10', 'May 17', 'May 24', 'May 31'],
    datasets: [{
      label: 'Pipeline Value',
      data: [1200000, 1400000, 1600000, 1800000, 2000000, 2100000, 2200000, 2479450],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#2563eb',
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
        displayColors: false,
        titleFont: { size: 13, weight: 'bold' as const },
        bodyFont: { size: 12 },
        cornerRadius: 6,
        callbacks: {
          title: (context: any) => {
            return context[0].label;
          },
          label: (context: any) => {
            const value = context.raw;
            return `Value: $${(value / 1000000).toFixed(2)}M`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { font: { size: 9 }, color: '#9ca3af' },
        grid: { display: false },
        border: { display: false }
      },
      y: {
        ticks: {
          font: { size: 9 }, 
          color: '#9ca3af',
          callback: (value: number) => value >= 1000000 ? '$' + (value/1000000).toFixed(1) + 'M' : '$' + (value/1000) + 'k'
        },
        grid: { color: '#f3f4f6' },
        border: { display: false }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-0">
      <div className="flex items-center justify-between px-4 py-3.5 pb-2.5">
        <div className="text-sm font-semibold text-gray-900">Pipeline Overview</div>
        <Link to="/pipeline" className="text-blue-600 text-xs font-medium cursor-pointer hover:underline">View full pipeline</Link>
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      {/* Stage Headers */}
      <div className="grid grid-cols-6 px-3.5 pt-3 pb-0 gap-0.5">
        {stages.map((stage, index) => (
          <div key={index} className="text-center flex-1">
            <div className="text-xs text-gray-500 font-medium">{stage.name}</div>
            <div className="text-xl font-bold text-gray-900 my-0.5">{stage.count}</div>
            <div className="h-0.75 rounded-md mt-1" style={{ background: stage.color }} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6 px-3.5 py-1 pb-2 gap-0.5">
        {stages.map((stage, index) => (
          <div key={index} className="text-center text-[10.5px] text-gray-400">{stage.value}</div>
        ))}
      </div>
      <div className="grid grid-cols-6 px-3.5 pb-2.5 gap-0.5">
        {stages.map((stage, index) => (
          <div key={index} className="text-center text-xs text-gray-400">{stage.count} vehicles</div>
        ))}
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      {/* Pipeline Value Chart */}
      <div className="px-4 py-3 pb-2.5">
        <div className="text-xs font-semibold text-gray-700 mb-2">Pipeline Value</div>
        <div className="flex items-end gap-3.5">
          <div className="flex-1 h-[100px] relative">
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-xs text-gray-500 mb-0.5">Total Pipeline Value</div>
            <div className="text-xl font-bold text-gray-900">$2,479,450</div>
            <div className="text-emerald-500 text-xs font-semibold mt-0.5">↑ 14%</div>
            <div className="text-gray-400 text-[10.5px]">vs last 7 days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineOverview;
