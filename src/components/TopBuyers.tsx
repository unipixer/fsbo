import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Buyer {
  rank: number;
  initials: string;
  name: string;
  count: number;
  percentage: number;
  gradient: string;
}

const TopBuyers: React.FC = () => {
  const buyers: Buyer[] = [
    { rank: 1, initials: 'JD', name: 'James Dalton', count: 24, percentage: 100, gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
    { rank: 2, initials: 'CM', name: 'Chris Morgan', count: 18, percentage: 75, gradient: 'linear-gradient(135deg,#10b981,#059669)' },
    { rank: 3, initials: 'TR', name: 'Taylor Rivera', count: 15, percentage: 62, gradient: 'linear-gradient(135deg,#f59e0b,#d97706)' },
    { rank: 4, initials: 'JK', name: 'Jordan Kim', count: 12, percentage: 50, gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' },
    { rank: 5, initials: 'AP', name: 'Alex Patel', count: 9, percentage: 37, gradient: 'linear-gradient(135deg,#ef4444,#dc2626)' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg border border-gray-200 p-0"
    >
      <div className="flex items-center justify-between px-4 py-3.5 pb-2.5">
        <div className="text-sm font-semibold text-gray-900">Top Buyers (This Week)</div>
        <Link to="/reports" className="text-blue-600 text-xs font-medium cursor-pointer hover:underline">View full report</Link>
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      <div className="py-2">
        {buyers.map((buyer, index) => (
          <React.Fragment key={index}>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="flex items-center gap-2.5 px-4 py-2"
            >
              <span className="text-gray-400 text-xs w-2.5 text-center flex-shrink-0">{buyer.rank}</span>
              <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0" style={{ background: buyer.gradient }}>{buyer.initials}</div>
              <span className="text-xs text-gray-900 font-medium flex-1">{buyer.name}</span>
              <div className="flex items-center gap-1.5 flex-1.2">
                <div className="h-1.5 bg-gray-200 rounded-md overflow-hidden flex-1">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${buyer.percentage}%` }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.5 }}
                    className="h-full rounded-md bg-blue-600"
                  />
                </div>
                <span className="text-xs text-gray-700 font-medium w-4 text-right">{buyer.count}</span>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default TopBuyers;
