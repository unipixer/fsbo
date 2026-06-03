import React, { useState } from 'react';
import { 
  CreditCard, Download, AlertCircle, CheckCircle, Calendar, 
  DollarSign, TrendingUp, FileText, Plus
} from 'lucide-react';

const Billing: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'invoices', name: 'Invoices' },
    { id: 'payment', name: 'Payment Method' },
    { id: 'plans', name: 'Plans' }
  ];

  const currentPlan = {
    name: 'Professional',
    price: 99,
    interval: 'month',
    features: ['Unlimited opportunities', 'Up to 10 team members', 'Advanced analytics', 'Priority support', 'API access'],
    nextBilling: 'June 12, 2025'
  };

  const invoices = [
    { id: 'INV-2025-001', date: 'May 12, 2025', amount: 99, status: 'paid' },
    { id: 'INV-2025-002', date: 'April 12, 2025', amount: 99, status: 'paid' },
    { id: 'INV-2025-003', date: 'March 12, 2025', amount: 99, status: 'paid' },
    { id: 'INV-2025-004', date: 'February 12, 2025', amount: 99, status: 'paid' },
    { id: 'INV-2025-005', date: 'January 12, 2025', amount: 99, status: 'paid' }
  ];

  const paymentMethods = [
    { id: '1', type: 'visa', last4: '4242', expiry: '12/26', default: true },
    { id: '2', type: 'mastercard', last4: '5555', expiry: '08/25', default: false }
  ];

  const plans = [
    {
      name: 'Starter',
      price: 29,
      interval: 'month',
      features: ['Up to 50 opportunities', '2 team members', 'Basic analytics', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 99,
      interval: 'month',
      features: ['Unlimited opportunities', '10 team members', 'Advanced analytics', 'Priority support', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 299,
      interval: 'month',
      features: ['Unlimited everything', 'Unlimited team members', 'Custom integrations', 'Dedicated support', 'SLA guarantee'],
      popular: false
    }
  ];

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Billing</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage your subscription and payments
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4 bg-white rounded-lg border border-gray-200 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${
              selectedTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {selectedTab === 'overview' && (
        <div className="space-y-4">
          {/* Current Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Current Plan</h2>
                <p className="text-xs text-gray-500 mt-0.5">You're on the {currentPlan.name} plan</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">${currentPlan.price}</div>
                <div className="text-xs text-gray-500">/{currentPlan.interval}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle size={12} color="#10b981" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                Next billing: {currentPlan.nextBilling}
              </div>
              <button className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
                Upgrade Plan
              </button>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">Opportunities</div>
                <FileText size={14} color="#3b82f6" />
              </div>
              <div className="text-xl font-bold text-gray-900">124</div>
              <div className="text-xs text-gray-500 mt-1">Unlimited</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">Team Members</div>
                <CheckCircle size={14} color="#10b981" />
              </div>
              <div className="text-xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-500 mt-1">of 10</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">API Calls</div>
                <TrendingUp size={14} color="#f59e0b" />
              </div>
              <div className="text-xl font-bold text-gray-900">2,450</div>
              <div className="text-xs text-gray-500 mt-1">this month</div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Payment Method</h3>
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                Change
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <CreditCard size={16} color="white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Visa ending in 4242</div>
                <div className="text-xs text-gray-500">Expires 12/26</div>
              </div>
              <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                Default
              </span>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'invoices' && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FileText size={18} color="#6b7280" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{invoice.id}</div>
                    <div className="text-xs text-gray-500">{invoice.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">${invoice.amount}</div>
                    <div className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle size={10} />
                      {invoice.status}
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    <Download size={14} color="#6b7280" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'payment' && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Payment Methods</h3>
              <button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-blue-700 flex items-center gap-1">
                <Plus size={12} />
                Add New
              </button>
            </div>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <CreditCard size={16} color="white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900 capitalize">
                      {method.type} ending in {method.last4}
                    </div>
                    <div className="text-xs text-gray-500">Expires {method.expiry}</div>
                  </div>
                  {method.default && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                      Default
                    </span>
                  )}
                  <button className="text-xs text-gray-500 hover:text-gray-700">Edit</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={16} color="#f59e0b" className="mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">Billing Address</div>
                <div className="text-xs text-gray-600 mt-1">
                  123 Business Ave, Austin, TX 78701
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-2">
                  Update Address
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'plans' && (
        <div className="grid grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-white rounded-lg border p-4 ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-sm text-gray-500">/{plan.interval}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={12} color="#10b981" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full text-xs font-medium py-2 rounded-lg ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.name === currentPlan.name ? 'Current Plan' : 'Upgrade'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Billing;
