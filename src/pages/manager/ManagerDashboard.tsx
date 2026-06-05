const avatarColors = ["#6c63ff", "#f59e0b", "#10b981", "#ef4444", "#3b82f6"];

function Avatar({ name, size = 8, index = 0 }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const bg = avatarColors[index % avatarColors.length];
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
      style={{ background: bg, width: `${size * 4}px`, height: `${size * 4}px`, fontSize: size < 8 ? "10px" : "12px" }}
    >
      {initials}
    </div>
  );
}

// Stat card icons — colored to match image exactly
// Listings: blue/indigo document icon
const IconDocument = ({ c }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);
// Claims: teal clipboard
const IconClipboard = ({ c }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
// First Messages: green check circle
const IconCheckCircle = ({ c }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
// Replies: orange message bubble
const IconMessageCircle = ({ c }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
// Appraisals: purple tag/price
const IconTag = ({ c }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);
// Purchases: green shopping bag
const IconShoppingBag = ({ c }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

// Activity icons
const IconMail = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconFileText = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconMessageSquare = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconSearch = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconCalendar = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

// Stuck Work icons
const IconClock = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconSend = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconMailSmall = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconMsgCircle = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconAlertCircle = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

// Header icons
const IconBell = ({ c = "#6b7280" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconRefresh = ({ c = "#6b7280" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>
);
const IconFilter = ({ c = "#6b7280" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);
const IconSearchHeader = ({ c = "#9ca3af" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconCalHeader = ({ c = "#6b7280" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

// Alert icons
const IconWarning = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconAlertBlue = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconAlertRed = ({ c }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

// Follow-ups icons
const IconFollowUp = ({ c }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);
const IconSnoozed = ({ c }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconNeedsInfo = ({ c }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ iconEl, iconBg, label, value, change }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex items-start gap-3 flex-1 min-w-0 shadow-sm border border-gray-100">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconBg }}>
        {iconEl}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 font-medium truncate">{label}</p>
        <p className="text-2xl font-bold text-gray-900 leading-tight">{value}</p>
        <p className="text-xs font-medium mt-0.5" style={{ color: "#10b981" }}>↑ {change} vs last week</p>
      </div>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const buyers = [
  { name: "Shanto",          claimed:8, contacted:4, replied:3, appReq:3, offerSent:2, apptSet:1, purchased:1, lost:2 },
  { name: "Alex Morgan",     claimed:7, contacted:3, replied:3, appReq:2, offerSent:2, apptSet:1, purchased:0, lost:1 },
  { name: "Michael Johnson", claimed:9, contacted:5, replied:4, appReq:3, offerSent:2, apptSet:1, purchased:1, lost:2 },
  { name: "David Brown",     claimed:6, contacted:2, replied:1, appReq:1, offerSent:1, apptSet:1, purchased:1, lost:0 },
  { name: "Sarah Davis",     claimed:2, contacted:1, replied:1, appReq:0, offerSent:0, apptSet:0, purchased:0, lost:0 },
];

const recentActivity = [
  { user:"Alex Morgan",     action:"marked reply received",    detail:"2019 Honda Accord • John D.",    time:"2m ago",  Icon:IconMail,        color:"#3b82f6" },
  { user:"Michael Johnson", action:"requested appraisal",      detail:"2018 Toyota Camry • Sarah K.",  time:"15m ago", Icon:IconFileText,     color:"#8b5cf6" },
  { user:"Shanto",          action:"sent first message",       detail:"2020 BMW 3 Series • Mike T.",   time:"32m ago", Icon:IconMessageSquare,color:"#f59e0b" },
  { user:"David Brown",     action:"added VIN",                detail:"2017 Ford F-150 • Robert L.",   time:"1h ago",  Icon:IconSearch,       color:"#10b981" },
  { user:"Sarah Davis",     action:"scheduled appointment",    detail:"2016 Lexus RX 350 • Kevin P.",  time:"2h ago",  Icon:IconCalendar,     color:"#ef4444" },
];

const stuckWork = [
  { Icon:IconClock,       label:"Claimed but not contacted (24h+)",  count:6, color:"#ef4444" },
  { Icon:IconSend,        label:"Contacted, no reply (5d+)",          count:7, color:"#f59e0b" },
  { Icon:IconMailSmall,   label:"Replied, VIN missing (3d+)",         count:5, color:"#3b82f6" },
  { Icon:IconMsgCircle,   label:"Needs info, waiting on buyer (2d+)", count:3, color:"#6c63ff" },
  { Icon:IconAlertCircle, label:"Stale claims, no activity (14d+)",   count:2, color:"#ef4444" },
];

const topPerformers = [
  { name:"Shanto",          purchases:7, pts:140, pct:100 },
  { name:"Michael Johnson", purchases:5, pts:112, pct:80  },
  { name:"Alex Morgan",     purchases:4, pts:94,  pct:67  },
  { name:"David Brown",     purchases:2, pts:68,  pct:49  },
  { name:"Sarah Davis",     purchases:1, pts:41,  pct:29  },
];

// ── Donut Chart ───────────────────────────────────────────────────────────────

function DonutChart() {
  const data = [
    { value:12, color:"#6c63ff", label:"Requested" },
    { value:6,  color:"#f59e0b", label:"Needs Info" },
    { value:7,  color:"#10b981", label:"Approved"   },
    { value:3,  color:"#ef4444", label:"Rejected"   },
  ];
  const total = data.reduce((s,d)=>s+d.value,0);
  let cumulative = 0;
  const radius = 45, cx = 60, cy = 60;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-shrink-0">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {data.map((d,i)=>{
            const dash = (d.value/total)*circumference;
            const gap  = circumference - dash;
            const rotation = (cumulative/total)*360 - 90;
            cumulative += d.value;
            return (
              <circle key={i} cx={cx} cy={cy} r={radius}
                fill="none" stroke={d.color} strokeWidth="14"
                strokeDasharray={`${dash} ${gap}`} strokeDashoffset={0}
                transform={`rotate(${rotation} ${cx} ${cy})`} strokeLinecap="butt"/>
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-gray-900">28</span>
          <span className="text-xs text-gray-400">Total</span>
        </div>
      </div>
      <div className="space-y-2">
        {data.map((d,i)=>(
          <div key={i} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background:d.color}}/>
            <span className="text-xs text-gray-600">{d.label}</span>
            <span className="text-xs font-semibold text-gray-800 ml-auto pl-2">
              {d.value} ({Math.round(d.value/total*100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

export default function ManagerDashboard() {
  const colHeaders = [
    { label:"Claimed",        sub:"32", color:"#6c63ff" },
    { label:"Contacted",      sub:"18", color:"#3b82f6" },
    { label:"Replied",        sub:"14", color:"#06b6d4" },
    { label:"Appr. Requested",sub:"9",  color:"#10b981" },
    { label:"Offer Sent",     sub:"7",  color:"#84cc16" },
    { label:"Appt. Set",      sub:"4",  color:"#f59e0b" },
    { label:"Purchased",      sub:"3",  color:"#10b981" },
    { label:"Lost ↑",         sub:"6",  color:"#ef4444" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* Header */}
      <header className="flex items-center gap-3 px-6 py-3.5 bg-white border-b border-gray-100 flex-shrink-0">
        <div className="flex-1 max-w-md relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2"><IconSearchHeader/></span>
          <input type="text" placeholder="Search opportunities, sellers, VIN, or buyers..."
            className="w-full pl-9 pr-16 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"/>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">⌘K</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors ml-auto">
          <IconCalHeader c="#6b7280"/>
          <span className="font-medium">This Week: May 26 – Jun 1, 2025</span>
          <span className="text-gray-400">▾</span>
        </div>
        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
          <IconRefresh/>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition-colors">
          <IconFilter/><span className="font-medium">Filters</span><span className="text-gray-400">▾</span>
        </button>
        <div className="relative">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
            <IconBell/>
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
        </div>
        
      </header>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-6">

          {/* Stat Cards */}
          <div className="flex gap-4 mb-6">
            <StatCard iconEl={<IconDocument   c="#6c63ff"/>} iconBg="#ede9fe" label="Listings Reviewed"    value="842" change="18%"/>
            <StatCard iconEl={<IconClipboard  c="#06b6d4"/>} iconBg="#e0f7fa" label="Claims Created"       value="128" change="15%"/>
            <StatCard iconEl={<IconCheckCircle c="#10b981"/>} iconBg="#d1fae5" label="First Messages"       value="96"  change="20%"/>
            <StatCard iconEl={<IconMessageCircle c="#f59e0b"/>} iconBg="#fef3c7" label="Replies Received"   value="41"  change="17%"/>
            <StatCard iconEl={<IconTag        c="#8b5cf6"/>} iconBg="#ede9fe" label="Appraisals Requested"  value="28"  change="12%"/>
            <StatCard iconEl={<IconShoppingBag c="#10b981"/>} iconBg="#d1fae5" label="Purchases"            value="7"   change="40%"/>
          </div>

          {/* Middle Row */}
          <div className="flex gap-5 mb-5">

            {/* Team Pipeline Board */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-gray-900 text-sm">Team Pipeline Board</h2>
                  <span className="text-gray-400"><IconAlertBlue c="#9ca3af"/></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 cursor-pointer">
                    <span>Group by: Buyer</span><span>▾</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{background:"#6c63ff"}}>
                    View Full Pipeline
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-5 py-2 text-gray-500 font-medium w-32">Buyer</th>
                      {colHeaders.map((col)=>(
                        <th key={col.label} className="text-center px-2 py-2 font-semibold" style={{color:col.color}}>
                          <div>{col.label}</div>
                          <div className="font-bold text-sm">{col.sub}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {buyers.map((b,i)=>{
                      const vals=[b.claimed,b.contacted,b.replied,b.appReq,b.offerSent,b.apptSet,b.purchased,b.lost];
                      return (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <Avatar name={b.name} index={i} size={7}/>
                              <div>
                                <p className="font-semibold text-gray-800">{b.name}</p>
                                <p className="text-gray-400">Buyer</p>
                              </div>
                            </div>
                          </td>
                          {vals.map((v,j)=>(
                            <td key={j} className="text-center px-2 py-3">
                              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg font-semibold text-sm"
                                style={{background:v===0?"#f9fafb":`${colHeaders[j].color}18`, color:v===0?"#9ca3af":colHeaders[j].color}}>
                                {v}
                              </span>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                    <tr className="bg-gray-50/50">
                      <td className="px-5 py-3 font-bold text-gray-700 text-xs">Team Total</td>
                      {[32,15,12,9,7,4,3,5].map((v,j)=>(
                        <td key={j} className="text-center px-2 py-3">
                          <span className="font-bold text-gray-700">{v}</span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stuck Work + Top Performers */}
            <div className="w-72 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-gray-900 text-sm">Stuck Work</h2>
                  <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">23</span>
                </div>
                <button className="text-xs font-semibold" style={{color:"#6c63ff"}}>View all</button>
              </div>
              <div className="space-y-3">
                {stuckWork.map((item,i)=>(
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="flex-shrink-0" style={{color:item.color}}><item.Icon c={item.color}/></span>
                    <p className="text-xs text-gray-600 flex-1 leading-tight">{item.label}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{background:`${item.color}18`, color:item.color}}>
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-gray-900 text-sm">Top Performers</h2>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer">
                    <span className="text-xs text-gray-600">This Week</span>
                    <span className="text-gray-400 text-xs">▾</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {topPerformers.map((p,i)=>(
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400 w-4">{i+1}</span>
                      <Avatar name={p.name} index={i} size={7}/>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-800 truncate">{p.name}</p>
                        <p className="text-xs text-gray-400">{p.purchases} purchases</p>
                        <div className="h-1.5 bg-gray-100 rounded-full mt-1">
                          <div className="h-full rounded-full transition-all"
                            style={{width:`${p.pct}%`, background:"linear-gradient(90deg,#7c3aed,#6c63ff)"}}/>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-700 flex-shrink-0">{p.pts} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-5">

            {/* Recent Activity */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-sm">Recent Activity</h2>
                <button className="text-xs font-semibold" style={{color:"#6c63ff"}}>View all</button>
              </div>
              <div className="space-y-3">
                {recentActivity.map((item,i)=>(
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{background:`${item.color}18`}}>
                      <item.Icon c={item.color}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-800">
                        <span className="font-semibold">{item.user}</span>{" "}
                        <span className="text-gray-500">{item.action}</span>
                      </p>
                      <p className="text-xs text-gray-400 truncate">{item.detail}</p>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Appraisal Queue */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-sm">Appraisal Queue</h2>
                <button className="text-xs font-semibold" style={{color:"#6c63ff"}}>View all</button>
              </div>
              <DonutChart/>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-2">Follow-ups Due Today</h3>
                <p className="text-3xl font-bold text-gray-900 mb-3">14</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <IconFollowUp c="#6c63ff"/><span>7 follow-ups</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <IconSnoozed c="#f59e0b"/><span>5 snoozed (reopened)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <IconNeedsInfo c="#8b5cf6"/><span>2 needs info responses</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-gray-900 text-sm">Alerts</h2>
                  <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
                </div>
                <button className="text-xs font-semibold" style={{color:"#6c63ff"}}>View all alerts</button>
              </div>
              <div className="space-y-2">
                {[
                  { Icon:IconWarning,   label:"Alex Morgan has 3 stuck opportunities", color:"#f59e0b", bg:"#fffbeb" },
                  { Icon:IconAlertBlue, label:"2 appraisal requests need attention",    color:"#6c63ff", bg:"#f3f0ff" },
                  { Icon:IconAlertRed,  label:"5 follow-ups are overdue",               color:"#ef4444", bg:"#fef2f2" },
                ].map((alert,i)=>(
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border"
                    style={{background:alert.bg, borderColor:`${alert.color}30`}}>
                    <alert.Icon c={alert.color}/>
                    <span className="text-xs text-gray-700 flex-1">{alert.label}</span>
                    <span className="text-gray-400 text-xs">▾</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}