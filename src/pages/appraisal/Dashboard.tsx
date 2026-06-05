import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Car, Clock, CheckCircle, 
  FileText, Calendar, ClipboardList
} from 'lucide-react';

const AppraisalDashboard: React.FC = () => {
  const stats = [
    { label: 'Pending Appraisals', value: '8', change: '+3', color: 'bg-orange-500' },
    { label: 'Completed Today', value: '5', change: '+2', color: 'bg-green-500' },
    { label: 'In Progress', value: '12', change: '-1', color: 'bg-blue-500' },
    { label: 'Avg. Completion Time', value: '2.5h', change: '-15m', color: 'bg-purple-500' },
  ];

  const menuItems = [
    { icon: Car, label: 'Vehicles', path: '/appraisal/vehicles', description: 'View vehicles awaiting appraisal' },
    { icon: ClipboardList, label: 'Appraisal Queue', path: '/appraisal/queue', description: 'Manage your appraisal queue' },
    { icon: CheckCircle, label: 'Completed', path: '/appraisal/completed', description: 'View completed appraisals' },
    { icon: Clock, label: 'Scheduled', path: '/appraisal/scheduled', description: 'View scheduled appraisals' },
    { icon: Calendar, label: 'Appointments', path: '/appraisal/appointments', description: 'Manage appraisal appointments' },
    { icon: FileText, label: 'Reports', path: '/appraisal/reports', description: 'Generate appraisal reports' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Appraisal Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Manage vehicle appraisals and inspections.</p>
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

export default AppraisalDashboard;
