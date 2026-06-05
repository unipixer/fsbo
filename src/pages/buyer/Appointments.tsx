import React, { useState } from 'react';
import { 
  Filter, Search, Plus, MoreVertical, User, 
  MessageSquare, Phone, CheckCircle, XCircle, Clock, AlertCircle,
  MapPin, ChevronRight, Calendar as CalendarIcon
} from 'lucide-react';

interface Appointment {
  id: string;
  title: string;
  type: 'inspection' | 'test_drive' | 'pickup' | 'delivery' | 'meeting';
  relatedVehicle: string;
  relatedOpportunityId: string;
  seller: string;
  assignedTo: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  address?: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
  priority: 'high' | 'medium' | 'low';
  notes: string;
  createdAt: string;
}

const Appointments: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const appointments: Appointment[] = [
    {
      id: '1',
      title: 'Vehicle Inspection',
      type: 'inspection',
      relatedVehicle: '2018 Honda Accord EX',
      relatedOpportunityId: '1',
      seller: 'Mike Johnson',
      assignedTo: 'James Wilson',
      date: 'Today',
      time: '3:00 PM',
      duration: '1 hour',
      location: 'Seller Location',
      address: '123 Main St, Austin, TX 78701',
      status: 'confirmed',
      priority: 'high',
      notes: 'Bring inspection checklist',
      createdAt: '2025-05-12'
    },
    {
      id: '2',
      title: 'Test Drive',
      type: 'test_drive',
      relatedVehicle: '2017 Ford F-150 XLT',
      relatedOpportunityId: '2',
      seller: 'Sarah Williams',
      assignedTo: 'James Wilson',
      date: 'Today',
      time: '5:00 PM',
      duration: '30 min',
      location: 'Dealership',
      address: '456 Commerce Dr, Austin, TX 78702',
      status: 'scheduled',
      priority: 'high',
      notes: 'Buyer wants to test drive the truck',
      createdAt: '2025-05-12'
    },
    {
      id: '3',
      title: 'Vehicle Pickup',
      type: 'pickup',
      relatedVehicle: '2020 Toyota Camry LE',
      relatedOpportunityId: '3',
      seller: 'David Chen',
      assignedTo: 'Maria Garcia',
      date: 'Tomorrow',
      time: '10:00 AM',
      duration: '1 hour',
      location: 'Seller Location',
      address: '789 Oak Ln, Austin, TX 78703',
      status: 'confirmed',
      priority: 'medium',
      notes: 'Have payment ready',
      createdAt: '2025-05-11'
    },
    {
      id: '4',
      title: 'Seller Meeting',
      type: 'meeting',
      relatedVehicle: '2019 Nissan Altima SR',
      relatedOpportunityId: '4',
      seller: 'Luis Martinez',
      assignedTo: 'James Wilson',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '45 min',
      location: 'Coffee Shop',
      address: '321 Congress Ave, Austin, TX 78701',
      status: 'scheduled',
      priority: 'medium',
      notes: 'Discuss price negotiation',
      createdAt: '2025-05-11'
    },
    {
      id: '5',
      title: 'Vehicle Delivery',
      type: 'delivery',
      relatedVehicle: '2016 BMW 328i',
      relatedOpportunityId: '5',
      seller: 'Jason Brown',
      assignedTo: 'Maria Garcia',
      date: 'May 15, 2025',
      time: '12:00 PM',
      duration: '1 hour',
      location: 'Dealership',
      address: '456 Commerce Dr, Austin, TX 78702',
      status: 'scheduled',
      priority: 'high',
      notes: 'Coordinate with logistics team',
      createdAt: '2025-05-10'
    },
    {
      id: '6',
      title: 'Vehicle Inspection',
      type: 'inspection',
      relatedVehicle: '2018 Chevrolet Silverado',
      relatedOpportunityId: '6',
      seller: 'Emily Davis',
      assignedTo: 'James Wilson',
      date: 'Yesterday',
      time: '4:00 PM',
      duration: '1 hour',
      location: 'Seller Location',
      address: '567 River Rd, Austin, TX 78704',
      status: 'completed',
      priority: 'high',
      notes: 'Inspection completed, vehicle in good condition',
      createdAt: '2025-05-11'
    },
    {
      id: '7',
      title: 'Test Drive',
      type: 'test_drive',
      relatedVehicle: '2019 Hyundai Sonata',
      relatedOpportunityId: '7',
      seller: 'Robert Kim',
      assignedTo: 'Maria Garcia',
      date: 'Today',
      time: '6:00 PM',
      duration: '30 min',
      location: 'Dealership',
      address: '456 Commerce Dr, Austin, TX 78702',
      status: 'scheduled',
      priority: 'low',
      notes: 'Buyer interested in test drive',
      createdAt: '2025-05-12'
    },
    {
      id: '8',
      title: 'Vehicle Inspection',
      type: 'inspection',
      relatedVehicle: '2020 Mazda CX-5',
      relatedOpportunityId: '8',
      seller: 'Amanda White',
      assignedTo: 'James Wilson',
      date: 'Tomorrow',
      time: '11:00 AM',
      duration: '1 hour',
      location: 'Seller Location',
      address: '890 Lakeview Dr, Austin, TX 78705',
      status: 'confirmed',
      priority: 'medium',
      notes: 'Check for any mechanical issues',
      createdAt: '2025-05-11'
    }
  ];

  const appointmentTypes = [
    { id: 'inspection', name: 'Inspection', icon: CheckCircle, color: '#06b6d4' },
    { id: 'test_drive', name: 'Test Drive', icon: CalendarIcon, color: '#8b5cf6' },
    { id: 'pickup', name: 'Pickup', icon: MapPin, color: '#10b981' },
    { id: 'delivery', name: 'Delivery', icon: MapPin, color: '#f59e0b' },
    { id: 'meeting', name: 'Meeting', icon: User, color: '#3b82f6' }
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
      case 'scheduled': return 'bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'confirmed': return 'bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'completed': return 'bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'cancelled': return 'bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'no_show': return 'bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesType = selectedType === 'all' || appointment.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || appointment.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      appointment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.relatedVehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const todayCount = appointments.filter(a => a.date === 'Today' && a.status !== 'completed' && a.status !== 'cancelled').length;
  const upcomingCount = appointments.filter(a => a.date !== 'Today' && a.status !== 'completed' && a.status !== 'cancelled').length;
  const completedCount = appointments.filter(a => a.status === 'completed').length;
  const cancelledCount = appointments.filter(a => a.status === 'cancelled').length;

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Appointments View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Appointments</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage vehicle inspections, test drives, and meetings
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Schedule Appointment</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Today</div>
              <CalendarIcon size={14} color="#8b5cf6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{todayCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Upcoming</div>
              <Clock size={14} color="#3b82f6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{upcomingCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Completed</div>
              <CheckCircle size={14} color="#10b981" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{completedCount}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10.5px] text-gray-500">Cancelled</div>
              <XCircle size={14} color="#ef4444" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{cancelledCount}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search appointments..."
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
                {appointmentTypes.map(type => (
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
                <option value="scheduled">Scheduled</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="no_show">No Show</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredAppointments.map((appointment) => {
              const typeConfig = appointmentTypes.find(t => t.id === appointment.type);
              const TypeIcon = typeConfig?.icon || CalendarIcon;
              
              return (
                <div
                  key={appointment.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${appointment.status === 'completed' || appointment.status === 'cancelled' ? 'opacity-60' : ''}`}
                  onClick={() => setSelectedAppointment(appointment)}
                >
                  <div className="flex items-start gap-3">
                    {/* Appointment Type Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${typeConfig?.color}20` }}
                    >
                      <TypeIcon size={18} color={typeConfig?.color} />
                    </div>

                    {/* Appointment Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className={`text-sm font-semibold text-gray-900 ${appointment.status === 'completed' || appointment.status === 'cancelled' ? 'line-through' : ''}`}>
                          {appointment.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={getPriorityBadge(appointment.priority)}>
                            {appointment.priority.charAt(0).toUpperCase() + appointment.priority.slice(1)}
                          </span>
                          <span className={getStatusBadge(appointment.status)}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">{appointment.relatedVehicle}</span>
                        <ChevronRight size={12} color="#d1d5db" />
                        <span className="text-xs text-gray-400">{appointment.seller}</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarIcon size={12} />
                          <span className={appointment.date === 'Today' ? 'text-purple-600 font-medium' : ''}>
                            {appointment.date}
                          </span>
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{appointment.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{appointment.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <User size={11} />
                          <span className="text-[10.5px] text-gray-500">{appointment.assignedTo}</span>
                        </div>
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

            {filteredAppointments.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle size={32} color="#d1d5db" className="mx-auto mb-2" />
                <div className="text-sm text-gray-500">No appointments found</div>
                <div className="text-xs text-gray-400 mt-1">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Appointment Detail Panel */}
      {selectedAppointment && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Appointment Details</h2>
              <button 
                onClick={() => setSelectedAppointment(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Appointment Type & Status */}
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${appointmentTypes.find(t => t.id === selectedAppointment.type)?.color}20` }}
              >
                {React.createElement(appointmentTypes.find(t => t.id === selectedAppointment.type)?.icon || CalendarIcon, {
                  size: 18,
                  color: appointmentTypes.find(t => t.id === selectedAppointment.type)?.color
                })}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {appointmentTypes.find(t => t.id === selectedAppointment.type)?.name}
                </div>
                <span className={getStatusBadge(selectedAppointment.status)}>
                  {selectedAppointment.status.charAt(0).toUpperCase() + selectedAppointment.status.slice(1).replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* Appointment Title */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedAppointment.title}</h3>
              <div className="flex items-center gap-2">
                <span className={getPriorityBadge(selectedAppointment.priority)}>
                  {selectedAppointment.priority.charAt(0).toUpperCase() + selectedAppointment.priority.slice(1)} Priority
                </span>
              </div>
            </div>

            {/* Related Vehicle */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Related Vehicle</div>
              <div className="text-sm text-gray-900">{selectedAppointment.relatedVehicle}</div>
              <div className="text-xs text-gray-500 mt-1">Opportunity #{selectedAppointment.relatedOpportunityId}</div>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Seller</div>
              <div className="text-sm text-gray-900">{selectedAppointment.seller}</div>
            </div>

            {/* Date & Time */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Date & Time</div>
              <div className="flex items-center gap-2 mb-1">
                <CalendarIcon size={14} color="#6b7280" />
                <span className={`text-sm ${selectedAppointment.date === 'Today' ? 'text-purple-600 font-medium' : 'text-gray-900'}`}>
                  {selectedAppointment.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} color="#6b7280" />
                <span className="text-sm text-gray-900">{selectedAppointment.time}</span>
                <span className="text-xs text-gray-500">({selectedAppointment.duration})</span>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Location</div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={14} color="#6b7280" />
                <span className="text-sm text-gray-900">{selectedAppointment.location}</span>
              </div>
              {selectedAppointment.address && (
                <div className="text-xs text-gray-500">{selectedAppointment.address}</div>
              )}
            </div>

            {/* Assignment */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Assigned To</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">
                    {selectedAppointment.assignedTo.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-gray-900">{selectedAppointment.assignedTo}</div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedAppointment.notes}</p>
            </div>

            {/* Created At */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Created</div>
              <div className="text-xs text-gray-500">{selectedAppointment.createdAt}</div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {selectedAppointment.status === 'scheduled' && (
                <button className="w-full bg-green-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-1.5">
                  <CheckCircle size={14} />
                  Confirm Appointment
                </button>
              )}
              {selectedAppointment.status === 'confirmed' && (
                <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1.5">
                  <CheckCircle size={14} />
                  Mark as Completed
                </button>
              )}
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Phone size={14} />
                Call Seller
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <MessageSquare size={14} />
                Send Message
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <MapPin size={14} />
                Get Directions
              </button>
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

export default Appointments;
