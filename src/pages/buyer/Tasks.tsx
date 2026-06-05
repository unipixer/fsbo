import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, Search, Plus, MoreVertical, User, 
  MessageSquare, Phone, CheckCircle, XCircle, Clock, AlertCircle,
  ChevronRight, Calendar as CalendarIcon
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  type: 'follow_up' | 'appointment' | 'appraisal' | 'call' | 'message' | 'other';
  relatedVehicle: string;
  relatedOpportunityId: string;
  assignedTo: string;
  dueDate: string;
  dueTime?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  notes: string;
  completedAt?: string;
  createdAt: string;
}

const Tasks: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Follow up with seller about price negotiation',
      type: 'follow_up',
      relatedVehicle: '2018 Honda Accord EX',
      relatedOpportunityId: '1',
      assignedTo: 'James Wilson',
      dueDate: 'Today',
      dueTime: '3:00 PM',
      priority: 'high',
      status: 'pending',
      notes: 'Seller is willing to negotiate, need to discuss final price',
      createdAt: '2025-05-12'
    },
    {
      id: '2',
      title: 'Schedule vehicle inspection appointment',
      type: 'appointment',
      relatedVehicle: '2017 Ford F-150 XLT',
      relatedOpportunityId: '2',
      assignedTo: 'James Wilson',
      dueDate: 'Today',
      dueTime: '5:00 PM',
      priority: 'high',
      status: 'pending',
      notes: 'Buyer wants to see the truck in person',
      createdAt: '2025-05-12'
    },
    {
      id: '3',
      title: 'Complete vehicle appraisal',
      type: 'appraisal',
      relatedVehicle: '2020 Toyota Camry LE',
      relatedOpportunityId: '3',
      assignedTo: 'Maria Garcia',
      dueDate: 'Tomorrow',
      dueTime: '10:00 AM',
      priority: 'medium',
      status: 'pending',
      notes: 'Waiting on appraisal results from Alex',
      createdAt: '2025-05-11'
    },
    {
      id: '4',
      title: 'Call seller to confirm availability',
      type: 'call',
      relatedVehicle: '2019 Nissan Altima SR',
      relatedOpportunityId: '4',
      assignedTo: 'James Wilson',
      dueDate: 'Today',
      dueTime: '2:00 PM',
      priority: 'medium',
      status: 'in_progress',
      notes: 'Need to confirm vehicle is still available',
      createdAt: '2025-05-12'
    },
    {
      id: '5',
      title: 'Send offer to seller',
      type: 'message',
      relatedVehicle: '2016 BMW 328i',
      relatedOpportunityId: '5',
      assignedTo: 'Maria Garcia',
      dueDate: 'May 15, 2025',
      dueTime: '12:00 PM',
      priority: 'high',
      status: 'pending',
      notes: 'Offer $22,500 ready to send',
      createdAt: '2025-05-10'
    },
    {
      id: '6',
      title: 'Follow up on offer response',
      type: 'follow_up',
      relatedVehicle: '2018 Chevrolet Silverado',
      relatedOpportunityId: '6',
      assignedTo: 'James Wilson',
      dueDate: 'Yesterday',
      dueTime: '4:00 PM',
      priority: 'high',
      status: 'overdue',
      notes: 'Seller hasn\'t responded to offer yet',
      createdAt: '2025-05-11'
    },
    {
      id: '7',
      title: 'Review vehicle photos',
      type: 'other',
      relatedVehicle: '2019 Hyundai Sonata',
      relatedOpportunityId: '7',
      assignedTo: 'Maria Garcia',
      dueDate: 'Today',
      dueTime: '6:00 PM',
      priority: 'low',
      status: 'pending',
      notes: 'Check condition from photos',
      createdAt: '2025-05-12'
    },
    {
      id: '8',
      title: 'Schedule test drive',
      type: 'appointment',
      relatedVehicle: '2020 Mazda CX-5',
      relatedOpportunityId: '8',
      assignedTo: 'James Wilson',
      dueDate: 'Tomorrow',
      dueTime: '11:00 AM',
      priority: 'medium',
      status: 'pending',
      notes: 'Buyer interested in test drive',
      createdAt: '2025-05-11'
    },
    {
      id: '9',
      title: 'Research market value',
      type: 'other',
      relatedVehicle: '2021 Tesla Model 3',
      relatedOpportunityId: '9',
      assignedTo: 'Alex Thompson',
      dueDate: 'Today',
      dueTime: '4:00 PM',
      priority: 'medium',
      status: 'completed',
      notes: 'Market research completed',
      completedAt: '2025-05-12 2:30 PM',
      createdAt: '2025-05-12'
    },
    {
      id: '10',
      title: 'Send follow-up message',
      type: 'message',
      relatedVehicle: '2017 Subaru Outback',
      relatedOpportunityId: '10',
      assignedTo: 'Maria Garcia',
      dueDate: 'Tomorrow',
      dueTime: '2:00 PM',
      priority: 'medium',
      status: 'pending',
      notes: 'Check if seller is still interested',
      createdAt: '2025-05-11'
    }
  ];

  const taskTypes = [
    { id: 'follow_up', name: 'Follow Up', icon: Clock, color: '#f97316' },
    { id: 'appointment', name: 'Appointment', icon: CalendarIcon, color: '#8b5cf6' },
    { id: 'appraisal', name: 'Appraisal', icon: CheckCircle, color: '#06b6d4' },
    { id: 'call', name: 'Call', icon: Phone, color: '#10b981' },
    { id: 'message', name: 'Message', icon: MessageSquare, color: '#3b82f6' },
    { id: 'other', name: 'Other', icon: AlertCircle, color: '#6b7280' }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'medium': return 'bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'low': return 'bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'in_progress': return 'bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'completed': return 'bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'overdue': return 'bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesType = selectedType === 'all' || task.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
    const matchesSearch = searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.relatedVehicle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesPriority && matchesSearch;
  });

  const handleCompleteTask = (taskId: string) => {
    // In a real app, this would update the task status
    console.log('Complete task:', taskId);
  };

  const pendingCount = tasks.filter(t => t.status === 'pending').length;
  const overdueCount = tasks.filter(t => t.status === 'overdue').length;
  const todayCount = tasks.filter(t => t.dueDate === 'Today' && t.status !== 'completed').length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Tasks View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Tasks & Follow Ups</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage your tasks, follow-ups, and appointments
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Add Task</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Pending Tasks</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{pendingCount}</div>
                <div className="text-xs text-gray-400">Awaiting action</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-orange-100">
                <Clock size={20} color="#f97316" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Overdue</div>
                <div className="text-3xl font-bold text-red-600 leading-none mb-2">{overdueCount}</div>
                <div className="text-xs text-gray-400">Past deadline</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-red-100">
                <AlertCircle size={20} color="#ef4444" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Due Today</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{todayCount}</div>
                <div className="text-xs text-gray-400">Today's tasks</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-purple-100">
                <CalendarIcon size={20} color="#8b5cf6" strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Completed</div>
                <div className="text-3xl font-bold text-gray-900 leading-none mb-2">{completedCount}</div>
                <div className="text-xs text-gray-400">Finished tasks</div>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-green-100">
                <CheckCircle size={20} color="#10b981" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Filter size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                {taskTypes.map(type => (
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
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Clock size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredTasks.map((task) => {
              const typeConfig = taskTypes.find(t => t.id === task.type);
              const TypeIcon = typeConfig?.icon || AlertCircle;
              
              return (
                <div
                  key={task.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${task.status === 'completed' ? 'opacity-60' : ''}`}
                  onClick={() => setSelectedTask(task)}
                >
                  <div className="flex items-start gap-3">
                    {/* Task Type Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${typeConfig?.color}20` }}
                    >
                      <TypeIcon size={18} color={typeConfig?.color} />
                    </div>

                    {/* Task Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className={`text-sm font-semibold text-gray-900 ${task.status === 'completed' ? 'line-through' : ''}`}>
                          {task.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={getPriorityBadge(task.priority)}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                          </span>
                          <span className={getStatusBadge(task.status)}>
                            {task.status === 'in_progress' ? 'In Progress' : 
                             task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">{task.relatedVehicle}</span>
                        <ChevronRight size={12} color="#d1d5db" />
                        <span className="text-xs text-gray-400">Opportunity #{task.relatedOpportunityId}</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarIcon size={12} />
                          <span className={task.status === 'overdue' ? 'text-red-600 font-medium' : ''}>
                            {task.dueDate}
                          </span>
                          {task.dueTime && <span>{task.dueTime}</span>}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>{task.assignedTo}</span>
                        </div>
                      </div>

                      {task.status === 'completed' && task.completedAt && (
                        <div className="text-xs text-green-600 mt-1">
                          Completed at {task.completedAt}
                        </div>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {task.status !== 'completed' && (
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleCompleteTask(task.id); }}
                          className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors"
                          title="Mark as complete"
                        >
                          <CheckCircle size={14} color="#10b981" />
                        </button>
                      )}
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <MoreVertical size={14} color="#6b7280" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredTasks.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No tasks found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Task Detail Panel */}
      {selectedTask && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Task Details</h2>
              <button 
                onClick={() => setSelectedTask(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Task Type & Status */}
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${taskTypes.find(t => t.id === selectedTask.type)?.color}20` }}
              >
                {React.createElement(taskTypes.find(t => t.id === selectedTask.type)?.icon || AlertCircle, {
                  size: 18,
                  color: taskTypes.find(t => t.id === selectedTask.type)?.color
                })}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {taskTypes.find(t => t.id === selectedTask.type)?.name}
                </div>
                <span className={getStatusBadge(selectedTask.status)}>
                  {selectedTask.status === 'in_progress' ? 'In Progress' : 
                   selectedTask.status.charAt(0).toUpperCase() + selectedTask.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Task Title */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedTask.title}</h3>
              <div className="flex items-center gap-2">
                <span className={getPriorityBadge(selectedTask.priority)}>
                  {selectedTask.priority.charAt(0).toUpperCase() + selectedTask.priority.slice(1)} Priority
                </span>
              </div>
            </div>

            {/* Related Vehicle */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Related Vehicle</div>
              <div className="text-sm text-gray-900">{selectedTask.relatedVehicle}</div>
              <div className="text-xs text-gray-500 mt-1">Opportunity #{selectedTask.relatedOpportunityId}</div>
            </div>

            {/* Due Date */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Due Date</div>
              <div className="flex items-center gap-2">
                <CalendarIcon size={14} color="#6b7280" />
                <span className={`text-sm ${selectedTask.status === 'overdue' ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                  {selectedTask.dueDate}
                </span>
                {selectedTask.dueTime && <span className="text-sm text-gray-900">{selectedTask.dueTime}</span>}
              </div>
            </div>

            {/* Assignment */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Assigned To</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">
                    {selectedTask.assignedTo.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-gray-900">{selectedTask.assignedTo}</div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedTask.notes}</p>
            </div>

            {/* Created At */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Created</div>
              <div className="text-xs text-gray-500">{selectedTask.createdAt}</div>
              {selectedTask.completedAt && (
                <div className="text-xs text-green-600 mt-1">
                  Completed at {selectedTask.completedAt}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {selectedTask.status !== 'completed' && (
                <button 
                  onClick={() => handleCompleteTask(selectedTask.id)}
                  className="w-full bg-green-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-1.5"
                >
                  <CheckCircle size={14} />
                  Mark as Complete
                </button>
              )}
              {selectedTask.type === 'call' && (
                <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                  <Phone size={14} />
                  Make Call
                </button>
              )}
              {selectedTask.type === 'message' && (
                <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                  <MessageSquare size={14} />
                  Send Message
                </button>
              )}
              {selectedTask.type === 'appointment' && (
                <Link to="/appointments" className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                  <CalendarIcon size={14} />
                  View Appointment
                </Link>
              )}
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <MoreVertical size={14} />
                More Options
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
