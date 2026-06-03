import React, { useState } from 'react';
import { 
  CheckCircle, XCircle, Plus, ExternalLink, Settings, 
  Zap, Globe, Database, MessageSquare, Calendar
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: 'connected' | 'disconnected' | 'error';
  category: string;
  lastSync?: string;
  features: string[];
}

const Integrations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const integrations: Integration[] = [
    {
      id: '1',
      name: 'Facebook Marketplace',
      description: 'Import vehicle listings and sync opportunities',
      icon: Globe,
      status: 'connected',
      category: 'marketplace',
      lastSync: '2025-05-12 14:30',
      features: ['Auto-import listings', 'Sync messages', 'Track engagement']
    },
    {
      id: '2',
      name: 'OfferUp',
      description: 'Connect with OfferUp for vehicle sourcing',
      icon: Zap,
      status: 'connected',
      category: 'marketplace',
      lastSync: '2025-05-12 15:00',
      features: ['Real-time alerts', 'Bulk import', 'Auto-response']
    },
    {
      id: '3',
      name: 'Craigslist',
      description: 'Monitor Craigslist for new vehicle listings',
      icon: Globe,
      status: 'connected',
      category: 'marketplace',
      lastSync: '2025-05-12 13:45',
      features: ['Keyword alerts', 'Location filters', 'Price tracking']
    },
    {
      id: '4',
      name: 'Carfax',
      description: 'Access vehicle history reports',
      icon: Database,
      status: 'disconnected',
      category: 'data',
      features: ['Vehicle history', 'Accident reports', 'Service records']
    },
    {
      id: '5',
      name: 'Kelley Blue Book',
      description: 'Get accurate vehicle valuations',
      icon: Database,
      status: 'connected',
      category: 'data',
      lastSync: '2025-05-12 12:00',
      features: ['Market values', 'Trade-in estimates', 'Depreciation data']
    },
    {
      id: '6',
      name: 'Twilio',
      description: 'SMS and voice communication',
      icon: MessageSquare,
      status: 'connected',
      category: 'communication',
      lastSync: '2025-05-12 14:00',
      features: ['SMS messaging', 'Voice calls', 'Number management']
    },
    {
      id: '7',
      name: 'Google Calendar',
      description: 'Sync appointments and schedules',
      icon: Calendar,
      status: 'disconnected',
      category: 'productivity',
      features: ['Calendar sync', 'Meeting reminders', 'Availability']
    },
    {
      id: '8',
      name: 'Slack',
      description: 'Team notifications and updates',
      icon: MessageSquare,
      status: 'connected',
      category: 'communication',
      lastSync: '2025-05-12 14:15',
      features: ['Channel notifications', 'Direct messages', 'Workflow automation']
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'marketplace', name: 'Marketplace' },
    { id: 'data', name: 'Data Services' },
    { id: 'communication', name: 'Communication' },
    { id: 'productivity', name: 'Productivity' }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    return selectedCategory === 'all' || integration.category === selectedCategory;
  });

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const totalCount = integrations.length;

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Integrations</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Connect and manage third-party services
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
            <Plus size={14} color="#6b7280" />
            <span className="text-xs text-gray-700 font-medium">Add Integration</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Total Integrations</div>
            <Database size={14} color="#3b82f6" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalCount}</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Connected</div>
            <CheckCircle size={14} color="#10b981" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{connectedCount}</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Marketplace</div>
            <Globe size={14} color="#8b5cf6" />
          </div>
          <div className="text-2xl font-bold text-gray-900">3</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10.5px] text-gray-500">Data Services</div>
            <Database size={14} color="#f59e0b" />
          </div>
          <div className="text-2xl font-bold text-gray-900">2</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredIntegrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <div key={integration.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon size={20} color="#3b82f6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{integration.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      {integration.status === 'connected' ? (
                        <CheckCircle size={12} color="#10b981" />
                      ) : integration.status === 'error' ? (
                        <XCircle size={12} color="#ef4444" />
                      ) : (
                        <XCircle size={12} color="#6b7280" />
                      )}
                      <span className="text-xs text-gray-500 capitalize">{integration.status}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Settings size={16} />
                </button>
              </div>

              <p className="text-xs text-gray-600 mb-3">{integration.description}</p>

              <div className="mb-3">
                <div className="text-xs font-medium text-gray-700 mb-1">Features</div>
                <div className="flex flex-wrap gap-1">
                  {integration.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {integration.lastSync && (
                <div className="text-xs text-gray-500 mb-3">
                  Last synced: {integration.lastSync}
                </div>
              )}

              <div className="flex items-center gap-2">
                {integration.status === 'connected' ? (
                  <>
                    <button className="flex-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1">
                      <Settings size={12} />
                      Configure
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 text-xs font-medium py-1.5 rounded-lg hover:bg-red-100">
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button className="flex-1 bg-blue-600 text-white text-xs font-medium py-1.5 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1">
                    <Plus size={12} />
                    Connect
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {filteredIntegrations.length === 0 && (
          <div className="col-span-2 py-12 text-center bg-white rounded-lg border border-gray-200">
            <Database size={32} color="#d1d5db" className="mx-auto mb-2" />
            <div className="text-sm text-gray-500">No integrations found</div>
            <div className="text-xs text-gray-400 mt-1">Try selecting a different category</div>
          </div>
        )}
      </div>

      {/* Browse More */}
      <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Need more integrations?</h3>
            <p className="text-xs text-gray-500 mt-0.5">Browse our marketplace for 100+ available integrations</p>
          </div>
          <button className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-1.5">
            <ExternalLink size={14} />
            Browse Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
