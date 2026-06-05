import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Kanban, Calendar, MessageSquare, 
  Users, Car, FileText
} from 'lucide-react';

const BuyerDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Opportunities', value: '24', change: '+12%', color: 'bg-blue-500' },
    { label: 'Active Pipeline', value: '18', change: '+8%', color: 'bg-green-500' },
    { label: 'Pending Appraisals', value: '6', change: '-2', color: 'bg-orange-500' },
    { label: 'Closed This Month', value: '4', change: '+1', color: 'bg-purple-500' },
  ];

  const menuItems = [
    { icon: Kanban, label: 'Pipeline', path: '/buyer/pipeline', description: 'Manage your vehicle acquisition pipeline' },
    { icon: Car, label: 'Opportunities', path: '/buyer/opportunities', description: 'View and manage all opportunities' },
    { icon: Calendar, label: 'Appointments', path: '/buyer/appointments', description: 'Schedule and manage appointments' },
    { icon: MessageSquare, label: 'Conversations', path: '/buyer/conversations', description: 'Message sellers and track communications' },
    { icon: Users, label: 'Sellers', path: '/buyer/sellers', description: 'Manage seller information' },
    { icon: FileText, label: 'Tasks', path: '/buyer/tasks', description: 'Track your tasks and follow-ups' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Buyer Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back! Here's your overview.</p>
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

export default BuyerDashboard;
