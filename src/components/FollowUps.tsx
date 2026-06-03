import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FollowUpItem {
  vehicle: string;
  seller: string;
  time: string;
  timeColor: string;
  badge: 'high' | 'medium' | 'low';
  actionType: 'call' | 'message';
}

const FollowUps: React.FC = () => {
  const followUps: FollowUpItem[] = [
    { vehicle: '2018 Honda Accord EX', seller: 'Mike Johnson', time: '10:30 AM', timeColor: '#ef4444', badge: 'high', actionType: 'call' },
    { vehicle: '2017 Ford F-150 XLT', seller: 'Sarah Williams', time: '11:00 AM', timeColor: '#f97316', badge: 'medium', actionType: 'message' },
    { vehicle: '2020 Toyota Camry LE', seller: 'David Chen', time: '12:30 PM', timeColor: '#f97316', badge: 'medium', actionType: 'message' },
    { vehicle: '2019 Nissan Altima SR', seller: 'Luis Martinez', time: '2:00 PM', timeColor: '#6b7280', badge: 'low', actionType: 'call' },
    { vehicle: '2016 BMW 328i', seller: 'Jason Brown', time: '3:30 PM', timeColor: '#6b7280', badge: 'low', actionType: 'message' },
  ];

  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case 'high': return 'bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'medium': return 'bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full font-medium';
      case 'low': return 'bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-0">
      <div className="flex items-center justify-between px-4 py-3.5 pb-2.5">
        <div className="text-sm font-semibold text-gray-900">Follow Ups Due Today</div>
        <Link to="/tasks" className="text-blue-600 text-xs font-medium cursor-pointer hover:underline">View all</Link>
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      <div className="py-1.5">
        {followUps.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-2.5 px-4 py-2">
              <motion.div 
                className="w-10 h-7 rounded-md flex-shrink-0 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <img src="/images/car1.jpg" alt="car" className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{item.vehicle}</div>
                <div className="text-[11.5px] text-gray-500">{item.seller}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-medium mb-0.75" style={{ color: item.timeColor }}>{item.time}</div>
                <span className={getBadgeClass(item.badge)}>{item.badge.charAt(0).toUpperCase() + item.badge.slice(1)}</span>
              </div>
              <div className="w-6.5 h-6.5 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer flex-shrink-0">
                {item.actionType === 'call' ? (
                  <Phone size={12} color="#6b7280" strokeWidth={2.2} />
                ) : (
                  <MessageSquare size={12} color="#6b7280" strokeWidth={2.2} />
                )}
              </div>
            </div>
            {index < followUps.length - 1 && <hr className="border-none border-t border-gray-100 m-0" />}
          </React.Fragment>
        ))}
      </div>
      <hr className="border-none border-t border-gray-100 m-0" />
      <div className="px-4 py-2.5">
        <Link to="/tasks" className="text-blue-600 text-xs font-medium cursor-pointer hover:underline flex items-center gap-1">
          View all follow ups <ArrowRight size={13} color="#2563eb" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
};

export default FollowUps;
