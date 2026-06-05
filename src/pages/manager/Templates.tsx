import React, { useState } from 'react';
import { 
  Plus, MoreVertical, Edit, Trash2, FileText, MessageSquare, 
  Mail, CheckCircle, Clock, AlertCircle
} from 'lucide-react';

interface Template {
  id: string;
  name: string;
  type: 'message' | 'email' | 'follow_up' | 'offer';
  category: string;
  subject?: string;
  content: string;
  variables: string[];
  usageCount: number;
  lastUsed: string;
  createdAt: string;
  status: 'active' | 'archived';
}

const Templates: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const templates: Template[] = [
    {
      id: '1',
      name: 'Initial Contact Message',
      type: 'message',
      category: 'Outreach',
      subject: undefined,
      content: 'Hi {{seller_name}}, I saw your {{vehicle}} listing on {{source}}. I\'m interested in learning more about it. Would you be available for a call?',
      variables: ['seller_name', 'vehicle', 'source'],
      usageCount: 45,
      lastUsed: '2025-05-12',
      createdAt: '2024-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Follow Up After Inspection',
      type: 'email',
      category: 'Follow-up',
      subject: 'Follow up on vehicle inspection',
      content: 'Hi {{seller_name}}, following up on the inspection of your {{vehicle}}. Everything looks good. When would you be available to discuss next steps?',
      variables: ['seller_name', 'vehicle'],
      usageCount: 32,
      lastUsed: '2025-05-10',
      createdAt: '2024-02-20',
      status: 'active'
    },
    {
      id: '3',
      name: 'Price Negotiation Offer',
      type: 'offer',
      category: 'Negotiation',
      subject: 'Offer for {{vehicle}}',
      content: 'Based on our appraisal, we\'d like to offer {{offer_amount}} for your {{vehicle}}. This is a fair market value considering the condition and mileage.',
      variables: ['vehicle', 'offer_amount'],
      usageCount: 28,
      lastUsed: '2025-05-08',
      createdAt: '2024-03-10',
      status: 'active'
    },
    {
      id: '4',
      name: 'Appointment Confirmation',
      type: 'message',
      category: 'Scheduling',
      subject: undefined,
      content: 'Hi {{seller_name}}, confirming our appointment on {{date}} at {{time}} to view your {{vehicle}}. Looking forward to meeting you!',
      variables: ['seller_name', 'date', 'time', 'vehicle'],
      usageCount: 56,
      lastUsed: '2025-05-12',
      createdAt: '2024-01-01',
      status: 'active'
    },
    {
      id: '5',
      name: 'Rejection Response',
      type: 'message',
      category: 'Negotiation',
      subject: undefined,
      content: 'Hi {{seller_name}}, thank you for considering our offer. Unfortunately, we\'re unable to proceed at this time. We appreciate your time.',
      variables: ['seller_name'],
      usageCount: 15,
      lastUsed: '2025-05-05',
      createdAt: '2024-04-15',
      status: 'active'
    },
    {
      id: '6',
      name: 'Welcome Email',
      type: 'email',
      category: 'Onboarding',
      subject: 'Welcome to our team!',
      content: 'Hi {{name}}, welcome to the team! We\'re excited to have you on board. Here are some resources to get you started...',
      variables: ['name'],
      usageCount: 8,
      lastUsed: '2025-05-01',
      createdAt: '2024-05-20',
      status: 'active'
    }
  ];

  const templateTypes = [
    { id: 'message', name: 'Message', icon: MessageSquare, color: '#3b82f6' },
    { id: 'email', name: 'Email', icon: Mail, color: '#8b5cf6' },
    { id: 'follow_up', name: 'Follow Up', icon: Clock, color: '#f59e0b' },
    { id: 'offer', name: 'Offer', icon: FileText, color: '#10b981' }
  ];

  const statuses = [
    { id: 'active', name: 'Active', color: '#10b981' },
    { id: 'archived', name: 'Archived', color: '#6b7280' }
  ];

  const getTypeBadge = (type: string) => {
    const typeConfig = templateTypes.find(t => t.id === type);
    if (!typeConfig) return '';
    return `bg-[${typeConfig.color}]/10 text-[${typeConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = statuses.find(s => s.id === status);
    if (!statusConfig) return '';
    return `bg-[${statusConfig.color}]/10 text-[${statusConfig.color}] text-xs px-2 py-0.5 rounded-full font-medium`;
  };

  const filteredTemplates = templates.filter(template => {
    const matchesType = selectedType === 'all' || template.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || template.status === selectedStatus;
    return matchesType && matchesStatus;
  });

  const totalTemplates = templates.length;
  const activeTemplates = templates.filter(t => t.status === 'active').length;
  const totalUsage = templates.reduce((sum, t) => sum + t.usageCount, 0);

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Templates View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Templates</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage message and email templates
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">New Template</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Templates</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{totalTemplates}</div>
                <div className="text-xs text-gray-400">All templates</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-blue-100">
                <FileText size={20} color="#3b82f6" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Active</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{activeTemplates}</div>
                <div className="text-xs text-gray-400">Currently in use</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
                <CheckCircle size={20} color="#10b981" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Usage</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{totalUsage}</div>
                <div className="text-xs text-gray-400">Messages sent</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-purple-100">
                <MessageSquare size={20} color="#8b5cf6" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Categories</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">4</div>
                <div className="text-xs text-gray-400">Template types</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
                <AlertCircle size={20} color="#f59e0b" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <MessageSquare size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                {templateTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <AlertCircle size={13} color="#6b7280" />
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
        </div>

        {/* Templates List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredTemplates.map((template) => {
              const typeConfig = templateTypes.find(t => t.id === template.type);
              const TypeIcon = typeConfig?.icon || FileText;
              
              return (
                <div
                  key={template.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className="flex items-start gap-3">
                    {/* Type Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${typeConfig?.color}20` }}
                    >
                      <TypeIcon size={18} color={typeConfig?.color} />
                    </div>

                    {/* Template Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900">{template.name}</h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={getTypeBadge(template.type)}>
                            {templateTypes.find(t => t.id === template.type)?.name}
                          </span>
                          <span className={getStatusBadge(template.status)}>
                            {statuses.find(s => s.id === template.status)?.name}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <span>{template.category}</span>
                        {template.subject && <span>{template.subject}</span>}
                      </div>

                      <div className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {template.content}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{template.usageCount} uses</span>
                        <span>Last used: {template.lastUsed}</span>
                        <span>{template.variables.length} variables</span>
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
              );
            })}

            {filteredTemplates.length === 0 && (
              <div className="py-12 text-center">
                <FileText size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No templates found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Template Detail Panel */}
      {selectedTemplate && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Template Details</h2>
              <button 
                onClick={() => setSelectedTemplate(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* Type & Status */}
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${templateTypes.find(t => t.id === selectedTemplate.type)?.color}20` }}
              >
                {React.createElement(templateTypes.find(t => t.id === selectedTemplate.type)?.icon || FileText, {
                  size: 18,
                  color: templateTypes.find(t => t.id === selectedTemplate.type)?.color
                })}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {templateTypes.find(t => t.id === selectedTemplate.type)?.name}
                </div>
                <span className={getStatusBadge(selectedTemplate.status)}>
                  {statuses.find(s => s.id === selectedTemplate.status)?.name}
                </span>
              </div>
            </div>

            {/* Template Name */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedTemplate.name}</h3>
              <div className="text-xs text-gray-500">{selectedTemplate.category}</div>
            </div>

            {/* Subject (if email) */}
            {selectedTemplate.subject && (
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="text-xs font-semibold text-gray-700 mb-2">Subject</div>
                <div className="text-sm text-gray-900">{selectedTemplate.subject}</div>
              </div>
            )}

            {/* Content */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Content</div>
              <p className="text-xs text-gray-600 whitespace-pre-wrap">{selectedTemplate.content}</p>
            </div>

            {/* Variables */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Variables</div>
              <div className="flex flex-wrap gap-1">
                {selectedTemplate.variables.map((variable, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                    {`{{${variable}}}`}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Usage Statistics</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Total Uses</span>
                  <span className="text-xs text-gray-900">{selectedTemplate.usageCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Last Used</span>
                  <span className="text-xs text-gray-900">{selectedTemplate.lastUsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Created</span>
                  <span className="text-xs text-gray-900">{selectedTemplate.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1.5">
                <Edit size={14} />
                Edit Template
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <MessageSquare size={14} />
                Test Template
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <FileText size={14} />
                Duplicate Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;
