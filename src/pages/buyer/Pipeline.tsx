import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, Search, Plus, MoreVertical, User, Calendar, 
  MessageSquare, Phone, Clock, AlertCircle, XCircle, GripVertical
} from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion, AnimatePresence } from 'framer-motion';

interface SortableOpportunityCardProps {
  opportunity: Opportunity;
  stages: any[];
  getPriorityBadge: (priority: string) => string;
  getSourceBadge: (source: string) => string;
  onClick: (opp: Opportunity) => void;
}

function SortableOpportunityCard({ opportunity, stages, getPriorityBadge, getSourceBadge, onClick }: SortableOpportunityCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: opportunity.id,
    animateLayoutChanges: () => true,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? 'transform 200ms cubic-bezier(0.2, 0, 0, 1)' : transition,
    opacity: isDragging ? 0.9 : 1,
    boxShadow: isDragging ? '0 20px 40px rgba(0,0,0,0.25)' : 'none',
    zIndex: isDragging ? 9999 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-lg border p-2 cursor-pointer transition-all ${
        isDragging 
          ? 'border-blue-500 shadow-2xl' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
      }`}
      onClick={(e) => {
        if (!isDragging) onClick(opportunity);
      }}
    >
      {/* Drag Handle */}
      <div className={`flex items-center justify-between mb-1.5 ${isDragging ? 'text-blue-500' : ''}`}>
        <GripVertical size={12} color={isDragging ? '#3b82f6' : '#9ca3af'} className="cursor-grab hover:cursor-grabbing" />
      </div>

      {/* Vehicle Image & Basic Info */}
      <div className="flex gap-1.5 mb-1.5">
        <div className="w-14 h-10 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
          <img src={opportunity.image} alt={opportunity.vehicle} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-gray-900 truncate">{opportunity.vehicle}</div>
          <div className="text-[10px] text-gray-500 truncate">{opportunity.mileage} mi</div>
          <div className="text-[11px] font-bold text-gray-900">${opportunity.price.toLocaleString()}</div>
        </div>
      </div>

      {/* Seller & Assignment */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1">
          <User size={10} color="#9ca3af" />
          <span className="text-[10px] text-gray-600">{opportunity.seller}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className={getSourceBadge(opportunity.source)}>{opportunity.source}</span>
        </div>
      </div>

      {/* Assigned Buyer */}
      <div className="flex items-center gap-1 mb-1.5">
        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-[8px] font-medium text-blue-600">
            {opportunity.assignedTo.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <span className="text-[10px] text-gray-600">{opportunity.assignedTo}</span>
      </div>

      {/* Priority & Follow-up */}
      <div className="flex items-center justify-between">
        <span className={getPriorityBadge(opportunity.priority)}>
          {opportunity.priority.charAt(0).toUpperCase() + opportunity.priority.slice(1)}
        </span>
        {opportunity.followUpDate && (
          <div className="flex items-center gap-0.5 text-[9px] text-orange-600">
            <Clock size={9} />
            <span>{opportunity.followUpDate}</span>
          </div>
        )}
      </div>

      {/* Last Activity */}
      <div className="mt-1.5 pt-1.5 border-t border-gray-100">
        <div className="text-[9px] text-gray-400">
          Last activity: {opportunity.lastActivity}
        </div>
      </div>
    </motion.div>
  );
}

interface DroppableStageProps {
  stage: any;
  stageOpportunities: Opportunity[];
  stages: any[];
  getPriorityBadge: (priority: string) => string;
  getSourceBadge: (source: string) => string;
  getStageValue: (stageId: string) => number;
  getStageCount: (stageId: string) => number;
  onOpportunityClick: (opp: Opportunity) => void;
}

function DroppableStage({ stage, stageOpportunities, stages, getPriorityBadge, getSourceBadge, getStageValue, getStageCount, onOpportunityClick }: DroppableStageProps) {
  const { setNodeRef, isOver } = useDroppable({ id: stage.id });

  return (
    <motion.div
      ref={setNodeRef}
      key={stage.id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: stages.indexOf(stage) * 0.1 }}
      className={`flex-shrink-0 w-60 bg-gray-50 rounded-lg border overflow-hidden transition-all duration-200 ${
        isOver 
          ? 'border-blue-500 bg-blue-100 scale-[1.02] shadow-lg' 
          : 'border-gray-200'
      }`}
    >
      {/* Stage Header */}
      <div className="px-2.5 py-2 border-b border-gray-200 transition-colors" style={{ backgroundColor: stage.bgColor }}>
        <div className="flex items-center justify-between mb-0.5">
          <div className="text-xs font-semibold text-gray-900">{stage.name}</div>
          <motion.div 
            className="text-[10px] font-medium px-1.5 py-0.5 rounded-full transition-all"
            style={{ backgroundColor: stage.color, color: 'white' }}
            animate={{ scale: isOver ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {getStageCount(stage.id)}
          </motion.div>
        </div>
        <div className="text-[9.5px] text-gray-500">
          ${getStageValue(stage.id).toLocaleString()} total value
        </div>
      </div>

      {/* Opportunities List */}
      <div className="p-1.5 space-y-1.5 max-h-[calc(100vh-320px)] overflow-y-auto">
        <SortableContext items={stageOpportunities.map(opp => opp.id)} strategy={verticalListSortingStrategy}>
          {stageOpportunities.map((opp, index) => (
            <SortableOpportunityCard
              key={opp.id}
              opportunity={opp}
              stages={stages}
              getPriorityBadge={getPriorityBadge}
              getSourceBadge={getSourceBadge}
              onClick={onOpportunityClick}
            />
          ))}
        </SortableContext>

        {stageOpportunities.length === 0 && (
          <motion.div 
            className={`text-center py-4 transition-colors ${isOver ? 'text-blue-500' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-1">
              <AlertCircle size={20} />
            </div>
            <div className="text-[10px]">{isOver ? 'Drop here' : 'No opportunities'}</div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

interface Opportunity {
  id: string;
  vehicle: string;
  year: string;
  make: string;
  model: string;
  price: number;
  mileage: string;
  seller: string;
  sellerType: 'private' | 'dealer';
  source: 'facebook' | 'offerup' | 'craigslist';
  assignedTo: string;
  stage: 'new' | 'contacted' | 'negotiating' | 'appraisal' | 'offer_made' | 'closed';
  lastActivity: string;
  followUpDate?: string;
  priority: 'high' | 'medium' | 'low';
  notes: string;
  image: string;
}

const Pipeline: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedBuyer, setSelectedBuyer] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const pipelineRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!pipelineRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - pipelineRef.current.offsetLeft);
    setScrollLeft(pipelineRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !pipelineRef.current) return;
    e.preventDefault();
    const x = e.pageX - pipelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    pipelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const [opportunities, setOpportunities] = useState<Opportunity[]>([
    {
      id: '1',
      vehicle: '2018 Honda Accord EX',
      year: '2018',
      make: 'Honda',
      model: 'Accord EX',
      price: 18500,
      mileage: '45,000',
      seller: 'Mike Johnson',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'new',
      lastActivity: '2 hours ago',
      priority: 'high',
      notes: 'Seller motivated, needs quick sale',
      image: '/images/car1.jpg'
    },
    {
      id: '2',
      vehicle: '2017 Ford F-150 XLT',
      year: '2017',
      make: 'Ford',
      model: 'F-150 XLT',
      price: 32000,
      mileage: '62,000',
      seller: 'Sarah Williams',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'contacted',
      lastActivity: '5 hours ago',
      followUpDate: 'Today, 3:00 PM',
      priority: 'high',
      notes: 'Discussing price, willing to negotiate',
      image: '/images/car2.jpg'
    },
    {
      id: '3',
      vehicle: '2020 Toyota Camry LE',
      year: '2020',
      make: 'Toyota',
      model: 'Camry LE',
      price: 21500,
      mileage: '38,000',
      seller: 'David Chen',
      sellerType: 'dealer',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'negotiating',
      lastActivity: '1 day ago',
      followUpDate: 'Tomorrow, 10:00 AM',
      priority: 'medium',
      notes: 'Waiting on appraisal results',
      image: '/images/car3.jpg'
    },
    {
      id: '4',
      vehicle: '2019 Nissan Altima SR',
      year: '2019',
      make: 'Nissan',
      model: 'Altima SR',
      price: 17800,
      mileage: '52,000',
      seller: 'Luis Martinez',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'appraisal',
      lastActivity: '3 hours ago',
      priority: 'medium',
      notes: 'Appraiser assigned',
      image: '/images/car4.jpg'
    },
    {
      id: '5',
      vehicle: '2016 BMW 328i',
      year: '2016',
      make: 'BMW',
      model: '328i',
      price: 24500,
      mileage: '58,000',
      seller: 'Jason Brown',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'offer_made',
      lastActivity: '2 days ago',
      followUpDate: 'May 15, 2025',
      priority: 'high',
      notes: 'Offer $22,500 submitted',
      image: '/images/car5.jpg'
    },
    {
      id: '6',
      vehicle: '2018 Chevrolet Silverado',
      year: '2018',
      make: 'Chevrolet',
      model: 'Silverado',
      price: 35000,
      mileage: '48,000',
      seller: 'Emily Davis',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'closed',
      lastActivity: '1 week ago',
      priority: 'low',
      notes: 'Purchased for $33,500',
      image: '/images/car6.jpg'
    },
    {
      id: '7',
      vehicle: '2019 Hyundai Sonata',
      year: '2019',
      make: 'Hyundai',
      model: 'Sonata',
      price: 16500,
      mileage: '41,000',
      seller: 'Robert Kim',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'Maria Garcia',
      stage: 'new',
      lastActivity: '30 minutes ago',
      priority: 'medium',
      notes: 'Fresh listing, just contacted',
      image: '/images/car1.jpg'
    },
    {
      id: '8',
      vehicle: '2020 Mazda CX-5',
      year: '2020',
      make: 'Mazda',
      model: 'CX-5',
      price: 26500,
      mileage: '35,000',
      seller: 'Amanda White',
      sellerType: 'private',
      source: 'facebook',
      assignedTo: 'James Wilson',
      stage: 'contacted',
      lastActivity: '4 hours ago',
      followUpDate: 'Today, 5:00 PM',
      priority: 'high',
      notes: 'Seller asking for more time',
      image: '/images/car3.jpg'
    }
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const opportunityId = active.id as string;
      const targetStageId = over.id as string;
      
      setOpportunities((opps) =>
        opps.map((opp) =>
          opp.id === opportunityId ? { ...opp, stage: targetStageId as any } : opp
        )
      );
    }
    
    setActiveId(null);
  };

  const stages = [
    { id: 'new', name: 'New', color: '#3b82f6', bgColor: '#eff6ff' },
    { id: 'contacted', name: 'Contacted', color: '#8b5cf6', bgColor: '#f5f3ff' },
    { id: 'negotiating', name: 'Negotiating', color: '#f59e0b', bgColor: '#fffbeb' },
    { id: 'appraisal', name: 'Appraisal', color: '#f97316', bgColor: '#fff7ed' },
    { id: 'offer_made', name: 'Offer Made', color: '#06b6d4', bgColor: '#ecfeff' },
    { id: 'closed', name: 'Closed', color: '#10b981', bgColor: '#f0fdf4' }
  ];

  const buyers = ['James Wilson', 'Maria Garcia', 'Alex Thompson'];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'medium': return 'bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'low': return 'bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const getSourceBadge = (source: string) => {
    switch (source) {
      case 'facebook': return 'bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'offerup': return 'bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'craigslist': return 'bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSource = selectedSource === 'all' || opp.source === selectedSource;
    const matchesBuyer = selectedBuyer === 'all' || opp.assignedTo === selectedBuyer;
    const matchesSearch = searchQuery === '' || 
      opp.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSource && matchesBuyer && matchesSearch;
  });

  const getOpportunitiesByStage = (stageId: string) => {
    return filteredOpportunities.filter(opp => opp.stage === stageId);
  };

  const getStageCount = (stageId: string) => {
    return getOpportunitiesByStage(stageId).length;
  };

  const getStageValue = (stageId: string) => {
    return getOpportunitiesByStage(stageId).reduce((sum, opp) => sum + opp.price, 0);
  };

  return (
    <div className="flex overflow-hidden h-full">
      {/* Main Pipeline View */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Pipeline</h1>
            <p className="text-gray-500 text-xs mt-0.5">
              Manage your vehicle acquisition pipeline across all stages
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Link to="/opportunities" className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
              <Plus size={14} color="#6b7280" />
              <span className="text-xs text-gray-700 font-medium">Add Opportunity</span>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search size={14} color="#9ca3af" className="absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vehicles, sellers..."
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <Filter size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
              >
                <option value="all">All Sources</option>
                <option value="facebook">Facebook</option>
                <option value="offerup">OfferUp</option>
                <option value="craigslist">Craigslist</option>
              </select>
            </div>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1">
              <User size={13} color="#6b7280" />
              <select 
                className="text-xs text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                value={selectedBuyer}
                onChange={(e) => setSelectedBuyer(e.target.value)}
              >
                <option value="all">All Buyers</option>
                {buyers.map(buyer => (
                  <option key={buyer} value={buyer}>{buyer}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pipeline Kanban Board */}
        <div 
          className="flex gap-3 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
          ref={pipelineRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <DndContext 
            sensors={sensors} 
            collisionDetection={closestCenter} 
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="flex gap-3">
              {stages.map((stage) => {
                const stageOpportunities = getOpportunitiesByStage(stage.id);
                
                return (
                  <DroppableStage
                    key={stage.id}
                    stage={stage}
                    stageOpportunities={stageOpportunities}
                    stages={stages}
                    getPriorityBadge={getPriorityBadge}
                    getSourceBadge={getSourceBadge}
                    getStageValue={getStageValue}
                    getStageCount={getStageCount}
                    onOpportunityClick={setSelectedOpportunity}
                  />
                );
              })}
            </div>
            <DragOverlay>
              {activeId ? (
                <div className="bg-white rounded-lg border-2 border-blue-500 p-2 shadow-2xl rotate-3 scale-105">
                  {(() => {
                    const opp = opportunities.find(o => o.id === activeId);
                    if (!opp) return null;
                    return (
                      <>
                        <div className="flex items-center justify-between mb-1.5 text-blue-500">
                          <GripVertical size={12} color="#3b82f6" />
                        </div>
                        <div className="flex gap-1.5 mb-1.5">
                          <div className="w-14 h-10 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                            <img src={opp.image} alt={opp.vehicle} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-semibold text-gray-900 truncate">{opp.vehicle}</div>
                            <div className="text-[10px] text-gray-500 truncate">{opp.mileage} mi</div>
                            <div className="text-[11px] font-bold text-gray-900">${opp.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      {/* Opportunity Detail Panel */}
      {selectedOpportunity && (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Opportunity Details</h2>
              <button 
                onClick={() => setSelectedOpportunity(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={18} />
              </button>
            </div>

            {/* Vehicle Image */}
            <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100 mb-4">
              <img src={selectedOpportunity.image} alt={selectedOpportunity.vehicle} className="w-full h-full object-cover" />
            </div>

            {/* Vehicle Info */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">{selectedOpportunity.vehicle}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span>{selectedOpportunity.mileage} mi</span>
                <span className={getSourceBadge(selectedOpportunity.source)}>{selectedOpportunity.source}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">${selectedOpportunity.price.toLocaleString()}</div>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Seller Information</div>
              <div className="flex items-center gap-2 mb-1">
                <User size={14} color="#6b7280" />
                <span className="text-sm text-gray-900">{selectedOpportunity.seller}</span>
              </div>
              <div className="text-xs text-gray-500">
                {selectedOpportunity.sellerType === 'private' ? 'Private Seller' : 'Dealer'}
              </div>
            </div>

            {/* Assignment */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Assigned To</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">
                    {selectedOpportunity.assignedTo.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-gray-900">{selectedOpportunity.assignedTo}</div>
                  <div className="text-xs text-gray-500">Buyer</div>
                </div>
              </div>
            </div>

            {/* Stage */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Current Stage</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stages.find(s => s.id === selectedOpportunity.stage)?.color }} />
                <span className="text-sm text-gray-900">{stages.find(s => s.id === selectedOpportunity.stage)?.name}</span>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Notes</div>
              <p className="text-xs text-gray-600">{selectedOpportunity.notes}</p>
            </div>

            {/* Activity */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-700 mb-2">Activity</div>
              <div className="text-xs text-gray-500">Last activity: {selectedOpportunity.lastActivity}</div>
              {selectedOpportunity.followUpDate && (
                <div className="flex items-center gap-1 text-xs text-orange-600 mt-1">
                  <Clock size={12} />
                  <span>Follow-up: {selectedOpportunity.followUpDate}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1.5">
                <MessageSquare size={14} />
                Send Message
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Phone size={14} />
                Call Seller
              </button>
              <Link to="/appointments" className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5">
                <Calendar size={14} />
                Schedule Appointment
              </Link>
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

export default Pipeline;
