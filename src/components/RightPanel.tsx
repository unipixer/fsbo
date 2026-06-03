import React, { useState } from 'react';
import { ArrowRight, Image } from 'lucide-react';

const RightPanel: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const toggleTask = (index: number) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedTasks(newCompleted);
  };

  const sources = [
    { name: 'Facebook Marketplace', count: 234, active: true, color: '#1877f2' },
    { name: 'OfferUp', count: 0, active: false, color: '#6b7280', initial: 'O' },
    { name: 'Craigslist', count: 0, active: false, color: '#9ca3af', initial: 'C' },
    { name: 'Inbound Forms', count: 0, active: false, color: '#d1d5db', hasIcon: true },
  ];

  const tasks = [
    { task: 'Follow up with Mike Johnson', vehicle: '2018 Honda Accord EX', time: '10:30 AM', badge: 'high', timeColor: '#ef4444' },
    { task: 'Send offer to Sarah Williams', vehicle: '2017 Ford F-150 XLT', time: '11:00 AM', badge: 'medium', timeColor: '#f97316' },
    { task: 'Check in with David Chen', vehicle: '2020 Toyota Camry LE', time: '12:30 PM', badge: 'medium', timeColor: '#f97316' },
    { task: 'Confirm appointment', vehicle: 'Luis Martinez', time: '2:00 PM', badge: 'low', timeColor: '#6b7280' },
    { task: 'Review appraisal', vehicle: '2016 BMW 328i', time: '3:30 PM', badge: 'low', timeColor: '#6b7280' },
  ];

  const activities = [
    { user: 'Chris M.', initials: 'CM', gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)', action: 'claimed 2019 Ford F-150 XLT', time: '2m ago' },
    { user: 'Taylor R.', initials: 'TR', gradient: 'linear-gradient(135deg,#f59e0b,#d97706)', action: 'added a note to 2017 Honda Accord', time: '15m ago' },
    { user: 'Jordan K.', initials: 'JK', gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)', action: 'booked appointment for 2018 BMW 328i', time: '45m ago' },
    { user: 'You', initials: 'You', gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)', action: 'logged an offer for 2016 Toyota Camry', time: '1h ago' },
    { user: 'Alex P.', initials: 'AP', gradient: 'linear-gradient(135deg,#10b981,#059669)', action: 'updated appraisal for 2020 Jeep Grand Cherokee', time: '2h ago' },
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
    <div className="w-[280px] min-w-[280px] bg-white border-l border-gray-200 h-screen overflow-y-auto flex-shrink-0">
      {/* Sources Section */}
      <div className="px-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-gray-900">Sources</div>
          <a className="text-blue-600 text-xs font-medium cursor-pointer hover:underline">Manage</a>
        </div>
        {sources.map((source, index) => (
          <div key={index} className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: source.color }}>
                {source.hasIcon ? (
                  <Image size={13} color="#9ca3af" />
                ) : source.initial ? (
                  <span className="text-white text-xs font-bold">{source.initial}</span>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
              </div>
              <span className="text-xs text-gray-700 font-medium">{source.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {source.active ? (
                <span className="bg-[#d1fae5] text-[#059669] text-xs px-2.5 py-0.5 rounded-full font-medium">Active</span>
              ) : (
                <span className="bg-[#f3f4f6] text-[#9ca3af] text-xs px-2.5 py-0.5 rounded-full font-medium">Coming soon</span>
              )}
              <span className="text-xs font-semibold" style={{ color: source.active ? '#111827' : '#9ca3af' }}>{source.count}</span>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-none border-t border-gray-100 my-3.5" />

      {/* Tasks Due Today */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-gray-900">Tasks Due Today</div>
          <a className="text-blue-600 text-xs font-medium cursor-pointer hover:underline">View all (18)</a>
        </div>
        <div className="flex flex-col gap-2.5">
          {tasks.map((task, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={completedTasks.has(index)}
                  onChange={() => toggleTask(index)}
                  className="w-3.75 h-3.75 border-1.5 border-gray-300 rounded-md flex-shrink-0 mt-0.25 cursor-pointer accent-blue-600"
                />
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium ${completedTasks.has(index) ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{task.task}</div>
                  <div className="text-[11.5px] text-gray-500">{task.vehicle}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-[11.5px] font-medium mb-0.5" style={{ color: task.timeColor }}>{task.time}</div>
                  <span className={getBadgeClass(task.badge)}>{task.badge.charAt(0).toUpperCase() + task.badge.slice(1)}</span>
                </div>
              </div>
              {index < tasks.length - 1 && <hr className="border-none border-t border-gray-100 m-0" />}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-2.5">
          <a className="text-blue-600 text-xs font-medium cursor-pointer hover:underline flex items-center gap-1">
            View all tasks <ArrowRight size={13} color="#2563eb" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      <hr className="border-none border-t border-gray-100 my-3.5" />

      {/* Recent Activity */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-gray-900">Recent Activity</div>
          <a className="text-blue-600 text-xs font-medium cursor-pointer hover:underline">View all</a>
        </div>
        <div className="flex flex-col gap-2.5">
          {activities.map((activity, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start gap-2">
                <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0" style={{ background: activity.gradient }}>{activity.initials}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-900 font-medium">{activity.user}</span>
                  <span className="text-xs text-gray-500"> {activity.action}</span>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{activity.time}</span>
              </div>
              {index < activities.length - 1 && <hr className="border-none border-t border-gray-100 m-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
