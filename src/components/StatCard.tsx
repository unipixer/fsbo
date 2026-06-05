import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeColor: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  iconBg: string;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  changeColor, 
  subtitle, 
  icon: Icon, 
  iconBg, 
  iconColor 
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">{title}</div>
          <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{value}</div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${changeColor}15`, color: changeColor }}>{change}</span>
            <span className="text-xs text-gray-400">{subtitle}</span>
          </div>
        </div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ background: iconBg }}>
          <Icon size={20} color={iconColor} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
