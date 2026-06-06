import React, { useState } from 'react';
import { 
  Plus, MoreVertical, XCircle, Mail, Phone, User, 
  Shield, Settings, Calendar, DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'buyer' | 'appraiser' | 'manager';
  status: 'active' | 'inactive' | 'pending';
  assignedOpportunities: number;
  completedDeals: number;
  totalRevenue: number;
  joinedDate: string;
  avatar: string;
}

const Team: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'James Wilson',
      email: 'james.wilson@company.com',
      phone: '(512) 555-1234',
      role: 'buyer',
      status: 'active',
      assignedOpportunities: 12,
      completedDeals: 8,
      totalRevenue: 45000,
      joinedDate: '2024-01-15',
      avatar: '/avatars/james.jpg'
    },
    {
      id: '2',
      name: 'Maria Garcia',
      email: 'maria.garcia@company.com',
      phone: '(512) 555-5678',
      role: 'buyer',
      status: 'active',
      assignedOpportunities: 9,
      completedDeals: 6,
      totalRevenue: 32000,
      joinedDate: '2024-02-20',
      avatar: '/avatars/maria.jpg'
    },
    {
      id: '3',
      name: 'Alex Thompson',
      email: 'alex.thompson@company.com',
      phone: '(512) 555-9012',
      role: 'appraiser',
      status: 'active',
      assignedOpportunities: 15,
      completedDeals: 15,
      totalRevenue: 0,
      joinedDate: '2024-03-10',
      avatar: '/avatars/alex.jpg'
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      phone: '(512) 555-3456',
      role: 'manager',
      status: 'active',
      assignedOpportunities: 0,
      completedDeals: 0,
      totalRevenue: 0,
      joinedDate: '2023-11-01',
      avatar: '/avatars/sarah.jpg'
    },
    {
      id: '5',
      name: 'Michael Chen',
      email: 'michael.chen@company.com',
      phone: '(512) 555-7890',
      role: 'buyer',
      status: 'pending',
      assignedOpportunities: 0,
      completedDeals: 0,
      totalRevenue: 0,
      joinedDate: '2025-05-10',
      avatar: '/avatars/michael.jpg'
    }
  ];

  const roles = [
    { id: 'admin', name: 'Admin', color: '#ef4444' },
    { id: 'manager', name: 'Manager', color: '#8b5cf6' },
    { id: 'buyer', name: 'Buyer', color: '#3b82f6' },
    { id: 'appraiser', name: 'Appraiser', color: '#10b981' }
  ];

  const statuses = [
    { id: 'active', name: 'Active', color: '#10b981' },
    { id: 'inactive', name: 'Inactive', color: '#6b7280' },
    { id: 'pending', name: 'Pending', color: '#f59e0b' }
  ];

  const getRoleBadge = (role: string) => {
    const roleConfig = roles.find(r => r.id === role);
    if (!roleConfig) return '';
    return `bg-[${roleConfig.color}]/10 text-[${roleConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = statuses.find(s => s.id === status);
    if (!statusConfig) return '';
    return `bg-[${statusConfig.color}]/10 text-[${statusConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesRole = selectedRole === 'all' || member.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;
    return matchesRole && matchesStatus;
  });

  const activeCount = teamMembers.filter(m => m.status === 'active').length;
  const totalRevenue = teamMembers.reduce((sum, m) => sum + m.totalRevenue, 0);
  const totalDeals = teamMembers.reduce((sum, m) => sum + m.completedDeals, 0);

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Team View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-start justify-between mb-5"
        >
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Team</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage team members and permissions
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50"
            >
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Add Member</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="grid grid-cols-4 gap-3 mb-4"
        >
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Members</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{teamMembers.length}</div>
                <div className="text-xs text-gray-400">Team size</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-blue-100">
                <User size={20} color="#3b82f6" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Active</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{activeCount}</div>
                <div className="text-xs text-gray-400">Currently active</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
                <Shield size={20} color="#10b981" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Deals</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{totalDeals}</div>
                <div className="text-xs text-gray-400">Completed deals</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
                <DollarSign size={20} color="#f59e0b" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Revenue</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">${totalRevenue.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Revenue generated</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
                <DollarSign size={20} color="#10b981" strokeWidth={2} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="bg-white rounded-lg border border-gray-200 p-3 mb-4"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Shield size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Settings size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                {statuses.map(status => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Team Members List */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          <div className="divide-y divide-gray-100">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedMember(member)}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Member Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{member.name}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={getRoleBadge(member.role)}>
                          {roles.find(r => r.id === member.role)?.name}
                        </span>
                        <span className={getStatusBadge(member.status)}>
                          {statuses.find(s => s.id === member.status)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Mail size={11} />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone size={11} />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{member.assignedOpportunities} opportunities</span>
                      <span className="text-green-600">{member.completedDeals} completed</span>
                      {member.totalRevenue > 0 && (
                        <span className="text-blue-600">${member.totalRevenue.toLocaleString()} revenue</span>
                      )}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <MoreVertical size={14} color="#6b7280" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredMembers.length === 0 && (
              <div className="py-12 text-center">
                <User size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No team members found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Member Detail Panel */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ x: 384 }}
            animate={{ x: 0 }}
            exit={{ x: 384 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-96 bg-white border-l border-gray-200 overflow-y-auto"
          >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Member Details</h2>
              <button 
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Avatar & Name */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-medium text-blue-600">
                  {selectedMember.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">{selectedMember.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={getRoleBadge(selectedMember.role)}>
                    {roles.find(r => r.id === selectedMember.role)?.name}
                  </span>
                  <span className={getStatusBadge(selectedMember.status)}>
                    {statuses.find(s => s.id === selectedMember.status)?.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Contact Information</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={12} color="#6b7280" />
                  <span className="text-xs text-gray-900">{selectedMember.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} color="#6b7280" />
                  <span className="text-xs text-gray-900">{selectedMember.phone}</span>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Performance</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Assigned Opportunities</span>
                  <span className="text-xs text-gray-900">{selectedMember.assignedOpportunities}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Completed Deals</span>
                  <span className="text-xs text-green-600">{selectedMember.completedDeals}</span>
                </div>
                {selectedMember.totalRevenue > 0 && (
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Total Revenue</span>
                    <span className="text-xs text-gray-900">${selectedMember.totalRevenue.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Joined Date */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Joined Date</div>
              <div className="flex items-center gap-2">
                <Calendar size={12} color="#6b7280" />
                <span className="text-xs text-gray-900">{selectedMember.joinedDate}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Settings size={14} />
                Edit Permissions
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Mail size={14} />
                Send Email
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <MoreVertical size={14} />
                More Options
              </button>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
