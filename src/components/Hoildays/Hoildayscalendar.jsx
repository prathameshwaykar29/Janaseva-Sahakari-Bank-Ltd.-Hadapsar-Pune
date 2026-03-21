import React, { useState } from 'react';
import { FiCalendar, FiInfo } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdHolidayVillage } from 'react-icons/md';

// ── Holiday Data 2025 ─────────────────────────────────────────────────────────

const holidays = [
  { date: '2026-01-26', day: 'Monday',    name: 'Republic Day',                 type: 'National'  },

  { date: '2026-02-19', day: 'Thursday', name: 'Chhatrapati Shivaji Maharaj Jayanti', type: 'Regional' },
  { date: '2026-02-15', day: 'Sunday', name: 'Maha Shivaratri',              type: 'Religious' },

  { date: '2026-03-03', day: 'Tuesday',    name: 'Holi (Second Day)',            type: 'Religious' },
  { date: '2026-03-19', day: 'Thursday',    name: 'Gudhi Padwa',            type: 'Regional' },
  { date: '2026-03-21', day: 'Saturday',    name: 'Id-ul-Fitr (Ramzan Id)',       type: 'Religious' },
  { date: '2026-03-26', day: 'Thursday',    name: 'Ram Navami',       type: 'Religious' },
  { date: '2026-03-31', day: 'Tuesday',    name: 'Mahavir Janmakalyanak',       type: 'Religious' },

  
  { date: '2026-04-01', day: 'Wednesday',  name: 'Yearly Closing of Accounts of Banks',              type: 'National' },
  { date: '2026-04-03', day: 'Friday',    name: 'Good Friday',                  type: 'Religious' },
  { date: '2026-04-14', day: 'Tuesday',    name: 'Dr. Babasaheb Ambedkar Jayanti', type: 'National' },
  
  { date: '2026-05-01', day: 'Friday',  name: 'Maharashtra Day',              type: 'National'  },
  { date: '2026-05-28', day: 'Thursday',  name: 'Id-ul-Zuha (Bakri Id)',        type: 'Religious' },
  
  { date: '2026-06-26', day: 'Friday',    name: 'Moharum',                     type: 'Religious' },
  
  { date: '2026-08-15', day: 'Saturday',    name: 'Independence Day',             type: 'National'  },
  { date: '2026-08-26', day: 'Wednesday',  name: 'Id-E-Milad', type: 'Religious' },

  { date: '2026-09-14', day: 'Monday', name: 'Ganesh Chaturthi',             type: 'Regional'  },
  
  { date: '2026-10-02', day: 'Friday',  name: 'Mahatma Gandhi Jayanti',       type: 'National'  },
  { date: '2026-10-20', day: 'Tuesday',  name: 'Dussehra (Vijayadashami)',     type: 'National' },

  { date: '2026-11-08', day: 'Sunday',    name: 'Diwali (Laxmi Pujan)',         type: 'Religious' },
  { date: '2026-11-10', day: 'Tuesday',   name: 'Diwali (Bhau Beej)',           type: 'Regional'  },
  { date: '2026-11-24', day: 'Tuesday', name: 'Guru Nanak Jayanti',           type: 'Religious' },
  
  { date: '2026-12-25', day: 'Friday',  name: 'Christmas',                    type: 'National'  },
];

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const typeConfig = {
  National:  { color: 'bg-[#1e3163]',   text: 'text-[#1e3163]',   light: 'bg-[#1e3163]/8',  border: 'border-[#1e3163]/20',  dot: 'bg-[#1e3163]'   },
  Regional:  { color: 'bg-[#f47012]',   text: 'text-[#f47012]',   light: 'bg-[#f47012]/8',  border: 'border-[#f47012]/20',  dot: 'bg-[#f47012]'   },
  Religious: { color: 'bg-emerald-600', text: 'text-emerald-700', light: 'bg-emerald-50',    border: 'border-emerald-200',   dot: 'bg-emerald-500' },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return {
    day:   d.getDate(),
    month: months[d.getMonth()].slice(0, 3),
    year:  d.getFullYear(),
    monthIndex: d.getMonth(),
  };
};

const getUpcoming = (list) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return list.find(h => new Date(h.date) >= today) || null;
};

// ── Holiday Row ───────────────────────────────────────────────────────────────

const HolidayRow = ({ holiday, isUpcoming }) => {
  const { day, month } = formatDate(holiday.date);
  const cfg = typeConfig[holiday.type];

  return (
    <div className={`flex items-start sm:items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-md border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
      ${isUpcoming
        ? 'bg-[#1e3163]/5 border-[#1e3163]/20 shadow-sm'
        : 'bg-white border-slate-100 hover:border-slate-200'
      }`}
    >
      {/* Date tile */}
      <div className={`shrink-0 w-14 h-14 rounded-md flex flex-col items-center justify-center shadow-sm
        ${isUpcoming ? 'bg-[#1e3163] text-white' : `${cfg.light} ${cfg.text}`}`}
      >
        <span className="text-xl font-extrabold leading-none">{day}</span>
        <span className="text-[9px] font-bold uppercase tracking-widest mt-0.5">{month}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <h3 className="text-sm font-bold text-[#1e3163] leading-snug truncate">
            {holiday.name}
          </h3>
          {isUpcoming && (
            <span className="shrink-0 text-[9px] font-bold bg-[#f47012] text-white px-2 py-0.5 rounded-">
              UPCOMING
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400 font-medium">{holiday.day}</p>
      </div>

      {/* Type badge */}
      <span className={`shrink-0 hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-xl border ${cfg.light} ${cfg.text} ${cfg.border}`}>
        <BsCircleFill className={`text-[6px] ${cfg.dot}`} />
        {holiday.type}
      </span>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────

const HolidaysCalendar = () => {
  const [activeMonth, setActiveMonth] = useState('All');
  const [activeType,  setActiveType]  = useState('All');

  const usedMonths = [...new Set(holidays.map(h => months[new Date(h.date).getMonth()]))];
  const upcoming   = getUpcoming(holidays);

  const filtered = holidays.filter(h => {
    const matchMonth = activeMonth === 'All' || months[new Date(h.date).getMonth()] === activeMonth;
    const matchType  = activeType  === 'All' || h.type === activeType;
    return matchMonth && matchType;
  });

  // Group by month
  const grouped = filtered.reduce((acc, h) => {
    const m = months[new Date(h.date).getMonth()];
    if (!acc[m]) acc[m] = [];
    acc[m].push(h);
    return acc;
  }, {});

  const handlePrevMonth = () => {
    if (activeMonth === 'All') return;
    const idx = usedMonths.indexOf(activeMonth);
    if (idx > 0) setActiveMonth(usedMonths[idx - 1]);
    else setActiveMonth('All');
  };

  const handleNextMonth = () => {
    if (activeMonth === 'All') {
      setActiveMonth(usedMonths[0]);
      return;
    }
    const idx = usedMonths.indexOf(activeMonth);
    if (idx < usedMonths.length - 1) setActiveMonth(usedMonths[idx + 1]);
  };

  return (
    <div className="bg-gray-200 min-h-screen py-10 sm:py-12 sm:px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* ══ HEADER BANNER ══ */}
        <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] rounded-md px-6 sm:px-10 py-8 mb-10 overflow-hidden shadow-xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-xl bg-white/5" />
          <div className="absolute right-24 bottom-0 w-36 h-36 rounded-xl bg-[#f47012]/15" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-white/5" />

         <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f47012]/20 text-[#f47012] text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-xl mb-3">
                <FiCalendar size={10} />
                Bank Holiday List
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                Holidays Calendar 2026
              </h1>
              <p className="text-white/55 text-base">
  Stay updated with all public and bank holidays
</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              {[
                { label: 'Total Holidays', value: holidays.length },
                { label: 'National',       value: holidays.filter(h => h.type === 'National').length  },
                { label: 'Regional',       value: holidays.filter(h => h.type === 'Regional').length  },
                { label: 'Religious',      value: holidays.filter(h => h.type === 'Religious').length },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-center min-w-[68px]">
                  <p className="text-white font-extrabold text-lg leading-none">{s.value}</p>
                  <p className="text-white/50 text-[9px] uppercase font-semibold tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ UPCOMING BANNER ══ */}
        {upcoming && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white border border-[#f47012]/20 rounded-md px-5 py-4 mb-8 shadow-sm">
            <div className="shrink-0 w-10 h-10 rounded-md bg-[#f47012]/10 flex items-center justify-center">
              <MdHolidayVillage className="text-[#f47012] text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-0.5">Next Bank Holiday</p>
              <p className="text-sm font-extrabold text-[#1e3163] truncate">{upcoming.name}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] text-slate-400 font-medium">{upcoming.day}</p>
              <p className="text-sm font-bold text-[#1e3163]">
                {formatDate(upcoming.date).day} {formatDate(upcoming.date).month} {formatDate(upcoming.date).year}
              </p>
            </div>
          </div>
        )}

        {/* ══ FILTERS ══ */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

          {/* Month nav */}
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md p-1 shadow-sm">
            <button
              onClick={handlePrevMonth}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#1e3163] hover:bg-[#eef8ff] transition-colors"
            >
              <HiChevronLeft size={18} />
            </button>
            <div className="flex gap-1 overflow-x-auto no-scrollbar px-1 py-1 scroll-smooth">
              {['All', ...usedMonths].map(m => (
                <button
                  key={m}
                  onClick={() => setActiveMonth(m)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150
                    ${activeMonth === m
                      ? 'bg-[#1e3163] text-white shadow-sm'
                      : 'text-slate-500 hover:text-[#1e3163] hover:bg-[#eef8ff]'
                    }`}
                >
                  {m === 'All' ? 'All' : m.slice(0, 3)}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextMonth}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#1e3163] hover:bg-[#eef8ff] transition-colors"
            >
              <HiChevronRight size={18} />
            </button>
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-2">
            {['All', 'National', 'Regional', 'Religious'].map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold border transition-all duration-150
                  ${activeType === t
                    ? t === 'All'
                      ? 'bg-[#1e3163] border-[#1e3163] text-white'
                      : `${typeConfig[t]?.color || 'bg-[#1e3163]'} border-transparent text-white`
                    : 'bg-white border-slate-200 text-slate-500 hover:border-[#1e3163] hover:text-[#1e3163]'
                  }`}
              >
                {t}
              </button>
            ))}
            {/* <span className="text-xs text-slate-400 ml-1">{filtered.length} holiday{filtered.length !== 1 ? 's' : ''}</span> */}
          </div>
        </div>

        {/* ══ HOLIDAY LIST ══ */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-md border border-slate-100 py-16 text-center shadow-sm">
            <FiInfo className="text-slate-300 text-4xl mx-auto mb-3" />
            <p className="text-slate-400 font-semibold">No holidays found for this filter.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped).map(([month, list]) => (
              <div key={month}>
                {/* Month heading */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-5 rounded-xl bg-[#f47012]" />
                  <h2 className="text-sm font-extrabold text-[#1e3163] uppercase tracking-widest">
                    {month} 2026
                  </h2>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-xl">
                    {list.length} holiday{list.length !== 1 ? 's' : ''}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* Rows */}
                <div className="flex flex-col gap-2">
                  {list.map((h, i) => (
                    <HolidayRow
                      key={i}
                      holiday={h}
                      isUpcoming={upcoming && h.date === upcoming.date && h.name === upcoming.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ══ LEGEND + NOTE ══ */}
        {/* <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Legend:</p>
            {Object.entries(typeConfig).map(([type, cfg]) => (
              <div key={type} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-xl ${cfg.dot}`} />
                <span className="text-xs font-semibold text-slate-500">{type}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 max-w-xs text-right leading-relaxed">
            Holidays subject to RBI & Maharashtra Govt. notifications.
            Janaseva Sahakari Bank Ltd. — DICGC Registered.
          </p>
        </div> */}

      </div>
    </div>
  );
};

export default HolidaysCalendar;    