import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BarChart3, TrendingUp, 
  FileText, Target, Award
} from 'lucide-react';

const ManagerDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Buyers', value: '12', change: '+2', color: 'bg-blue-500' },
    { label: 'Active Deals', value: '45', change: '+15%', color: 'bg-green-500' },
    { label: 'Revenue This Month', value: '$125K', change: '+18%', color: 'bg-purple-500' },
    { label: 'Team Performance', value: '92%', change: '+5%', color: 'bg-orange-500' },
  ];

  const menuItems = [
    { icon: Users, label: 'Team Management', path: '/manager/team', description: 'Manage your team members and roles' },
    { icon: BarChart3, label: 'Reports', path: '/manager/reports', description: 'View detailed reports and analytics' },
    { icon: TrendingUp, label: 'Performance', path: '/manager/performance', description: 'Track team and individual performance' },
    { icon: Target, label: 'Goals', path: '/manager/goals', description: 'Set and track team goals' },
    { icon: Award, label: 'Appraisals', path: '/manager/appraisals', description: 'Review and manage appraisals' },
    { icon: FileText, label: 'Templates', path: '/manager/templates', description: 'Manage document templates' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manager Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of team performance and operations.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Access Menu */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <item.icon size={20} className="text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
