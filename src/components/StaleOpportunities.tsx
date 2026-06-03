import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StaleOpportunities: React.FC = () => {
  const staleOpportunities = [
    { vehicle: '2015 Chevy Malibu LT', seller: 'Mike Anderson', daysAgo: 8 },
    { vehicle: '2017 Hyundai Elantra SE', seller: 'Jessica Davis', daysAgo: 9 },
    { vehicle: '2016 Ford Escape SE', seller: 'Robert Wilson', daysAgo: 12 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-0">
      <div className="flex items-center gap-3 px-4 py-3.5 pb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={18} color="#f59e0b" strokeWidth={2.2} />
          <span className="text-gray-900 text-xs font-semibold">
            <span className="text-red-500">12</span> opportunities haven't been updated in over 7 days.
          </span>
        </div>
        <div className="flex-1" />
        {/* Stale Cars */}
        <div className="flex gap-3.5 flex-3">
          {staleOpportunities.map((opp, index) => (
            <div key={index} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 flex-1">
              <motion.div 
                className="w-20 h-13 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={`/images/car${index + 1}.jpg`} alt="car" className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <div className="text-xs font-semibold text-gray-900">{opp.vehicle}</div>
                <div className="text-[11.5px] text-gray-500">{opp.seller}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Last activity: {opp.daysAgo} days ago
                </div>
              </div>
              <button className="ml-auto bg-blue-600 text-white border-none rounded-md px-3 py-1 text-xs font-medium cursor-pointer">
                Reassign
              </button>
            </div>
          ))}
        </div>
        <a className="text-blue-600 text-xs font-medium cursor-pointer hover:underline flex-shrink-0 whitespace-nowrap flex items-center gap-0.75">
          View all stale <ArrowRight size={12} color="#2563eb" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};

export default StaleOpportunities;
