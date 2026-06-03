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
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-gray-500 text-xs font-medium mb-1.5">{title}</div>
          <div className="text-2xl font-bold text-gray-900 leading-none">{value}</div>
          <div className="flex items-center gap-1 mt-1.25">
            <span className="text-xs font-medium" style={{ color: changeColor }}>{change}</span>
          </div>
          <div className="text-gray-400 text-[10.5px] mt-0.5">{subtitle}</div>
        </div>
        <div className="w-8.5 h-8.5 rounded-lg flex items-center justify-center" style={{ background: iconBg }}>
          <Icon size={17} color={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
