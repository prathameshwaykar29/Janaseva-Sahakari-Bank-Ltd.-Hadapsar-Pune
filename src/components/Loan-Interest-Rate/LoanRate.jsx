// import React, { useState } from 'react';
// import { FiSearch, FiChevronDown, FiChevronUp, FiPercent, FiInfo } from 'react-icons/fi';
// import { BsCircleFill, BsHouseDoor, BsCarFront  , BsBook, BsBriefcase, BsCashCoin, BsShieldCheck } from 'react-icons/bs';
// import { MdFactory } from 'react-icons/md';

// // ── Data (from sheet 05.03.2026) ──────────────────────────────────────────────

// const retailLoans = [
//   {
//     id: 1,
//     name: 'Janaseva Gharkul Loan Scheme',
//     gl: '183',
//     maxLimit: '₹200.00 Lakh',
//     period: '240 Months',
//     margin: '10% (Agreement / Realisable Value – lower)',
//     processing: '1% (Max ₹20,000 upto ₹50L / Max ₹40,000 above ₹50L)',
//     purpose: 'Purchase of New Flat / Resale House / Construction',
//     roi: [
//       { label: 'CIBIL 800 & Above', rateUpto50: '7.50%', rateAbove50: '7.75%' },
//       { label: 'CIBIL 700 to 799',  rateUpto50: '7.95%', rateAbove50: '8.20%' },
//       { label: 'CIBIL 650 to 699',  rateUpto50: '8.75%', rateAbove50: '9.00%' },
//       { label: 'CIBIL -1 to 5 & 100–200', rateUpto50: '7.95%', rateAbove50: '8.20%' },
//     ],
//     roiNote: 'Rates: Upto ₹50 Lakh | Above ₹50 Lakh',
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 2,
//     name: 'Housing Loan under CRE',
//     gl: '183',
//     maxLimit: '₹140.00 Lakh',
//     period: '240 Months',
//     margin: '10% (Agreement Value)',
//     processing: 'Upto ₹70L – 1% | Above ₹70L – 2.50%',
//     purpose: 'Purchase of New Flat / Resale House / Construction',
//     roi: [{ label: 'Flat Rate', rate: '10.50%' }],
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 3,
//     name: 'Janaseva Home Decore (Repairs/Addition/Alteration)',
//     gl: '183',
//     maxLimit: '₹10 Lakh',
//     period: '120 Months',
//     margin: '30% of estimated cost',
//     processing: '0.75%',
//     purpose: 'Repair of House, Renovation, Furniture',
//     roi: [{ label: 'Flat Rate', rate: '10.50%' }],
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 4,
//     name: 'Janaseva Gharkul Top Up',
//     gl: '183',
//     maxLimit: '₹75 Lakh',
//     period: '120 Months',
//     margin: '15% Valuation',
//     processing: '0.75%',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 5,
//     name: 'Vehicle Loan – New Four Wheeler',
//     gl: '173',
//     maxLimit: '₹50.00 Lakh',
//     period: '60 Months (84M case to case)',
//     margin: '10% of On Road (Ex-showroom + RTO + Ins)',
//     processing: '1.00% (Max ₹25,000)',
//     purpose: 'Purchase of New 4 Wheeler Car for Personal Use',
//     roi: [
//       { label: 'CIBIL 800 & Above', rate: '8.25%' },
//       { label: 'CIBIL 700 to 799',  rate: '8.50%' },
//       { label: 'CIBIL 650 to 699',  rate: '9.00%' },
//       { label: 'CIBIL -1 to 5 & 100–200', rate: '8.50%' },
//     ],
//     roiNote: '*0.25% Concession for E-Vehicle',
//     icon: BsCarFront ,
//     category: 'Vehicle',
//   },
//   {
//     id: 6,
//     name: 'Vehicle Loan – Two Wheeler',
//     gl: '173',
//     maxLimit: '₹5.00 Lakh',
//     period: '60 Months',
//     margin: '10% of On Road (Ex-showroom + RTO + Ins)',
//     processing: '2.50% (Max ₹3,000) + ₹500+GST',
//     purpose: 'Purchase of New 2 Wheeler',
//     roi: [
//       { label: 'CIBIL above 750', rate: '9.85%' },
//       { label: 'CIBIL 700 to 750', rate: '10.00%' },
//       { label: 'CIBIL 650 to 699', rate: '10.15%' },
//       { label: 'CIBIL -1 to 5',    rate: '10.00%' },
//     ],
//     roiNote: '*0.25% Concession for E-Bike / 2 Wheeler',
//     icon: BsCarFront ,
//     category: 'Vehicle',
//   },
//   {
//     id: 7,
//     name: 'Resale 4 Wheeler',
//     gl: '173',
//     maxLimit: '₹50 Lakh',
//     period: '36 to 60 Months',
//     margin: '50% of Valuation (Max 3 years old vehicle)',
//     processing: '2.50%',
//     purpose: 'Purchase of Resale 4 Wheeler Vehicle',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsCarFront  ,
//     category: 'Vehicle',
//   },
//   {
//     id: 8,
//     name: 'Janaseva Educational Secured Loan',
//     gl: '186',
//     maxLimit: '₹50 Lakh',
//     period: '144 Months (Course + 6M + 7 Yrs)',
//     margin: 'Upto ₹20L – 10% | Above ₹20L – 15%',
//     processing: '1% (Max ₹50,000) + ₹1,000 Documentation',
//     purpose: 'Higher Education in India & Abroad',
//     roi: [
//       { label: 'Upto ₹20 Lakh',  rate: '8.90%' },
//       { label: 'Above ₹20 Lakh', rate: '9.25%' },
//     ],
//     icon: BsBook,
//     category: 'Education',
//   },
//   {
//     id: 9,
//     name: 'Education Loan for Coaching / Tuition Classes (Unsecured)',
//     gl: '185',
//     maxLimit: '₹5 Lakh',
//     period: '48 Months',
//     margin: '10%',
//     processing: '5%',
//     purpose: 'Payment of Coaching / Tuition Fees',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsBook,
//     category: 'Education',
//   },
//   {
//     id: 10,
//     name: 'Unsecured Education Loan',
//     gl: '185',
//     maxLimit: '₹5 Lakh',
//     period: '120 Months (Course + 6M + 5 Yrs)',
//     margin: '10%',
//     processing: '5%',
//     purpose: 'Higher Education in India & Abroad',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsBook,
//     category: 'Education',
//   },
//   {
//     id: 11,
//     name: 'Personal Loan Scheme',
//     gl: '189',
//     maxLimit: '₹5 Lakh',
//     period: '60 Months',
//     margin: '—',
//     processing: '5%',
//     purpose: 'Personal Reason / Repayment of Debt',
//     roi: [
//       { label: 'CIBIL 700 & Above', rate: '12.00%' },
//       { label: 'CIBIL 650 to 699',  rate: '13.00%' },
//     ],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 12,
//     name: 'Consumer Loan (Consumer Durable / Furniture)',
//     gl: '188',
//     maxLimit: '₹5 Lakh',
//     period: '60 Months',
//     margin: '10%',
//     processing: '2.50%',
//     purpose: 'Purchase of Consumer Durable / Equipment / Furniture',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 13,
//     name: 'Consumer Loan (Housing Furniture)',
//     gl: '188',
//     maxLimit: '₹50 Lakh',
//     period: '120 Months',
//     margin: '25%',
//     processing: '0.75%',
//     purpose: 'Purchase of House Furniture',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 14,
//     name: 'Group Loan',
//     gl: '189',
//     maxLimit: '₹5 Lakh',
//     period: '60 Months',
//     margin: 'Min 10 Members required',
//     processing: '5%',
//     purpose: 'Personal Reason / Repayment of Debt',
//     roi: [{ label: 'Flat Rate', rate: '9.75%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 15,
//     name: 'Janvikas Loan Scheme',
//     gl: '236',
//     maxLimit: '₹1 Lakh',
//     period: '48 Months',
//     margin: '—',
//     processing: '5%',
//     purpose: 'Personal Reason / Repayment of Debt',
//     roi: [{ label: 'Flat Rate', rate: '12.00%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 16,
//     name: 'Gold Loan (Upto ₹2.50 Lakh – Bullet)',
//     gl: '230',
//     maxLimit: '₹2.50 Lakh',
//     period: '12 Months',
//     margin: '25%',
//     processing: '₹2,000',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '9.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 17,
//     name: 'Gold Loan (₹2.50L to ₹5L – EMI)',
//     gl: '230',
//     maxLimit: '₹5.00 Lakh',
//     period: '36 Months',
//     margin: '30%',
//     processing: '₹5,000',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '9.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 18,
//     name: 'Gold Loan (₹5L to ₹25L – EMI)',
//     gl: '230',
//     maxLimit: '₹25 Lakh',
//     period: '48 Months',
//     margin: '35%',
//     processing: '₹10,000',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '9.50%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 19,
//     name: 'Loan Against Life Insurance Policies',
//     gl: '246',
//     maxLimit: 'Upto Exposure Limit',
//     period: '36 Months / Due Date of Policy',
//     margin: '10%',
//     processing: '2.50% + ₹200',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 20,
//     name: 'Government Secured Loan',
//     gl: '178',
//     maxLimit: '—',
//     period: 'Due Date of Security',
//     margin: '10%',
//     processing: '—',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 21,
//     name: 'Cash Credit Against FD (FDCC)',
//     gl: '170',
//     maxLimit: '—',
//     period: 'Due Date of Security',
//     margin: '10%',
//     processing: '—',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: 'FD Rate + 2% (0.50% extra for Third Party FD)' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 22,
//     name: 'Loan Against FD (FDTL)',
//     gl: '177',
//     maxLimit: '—',
//     period: 'Due Date of Security',
//     margin: '10%',
//     processing: '—',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: 'FD Rate + 2%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
// ];

// const commercialLoans = [
//   {
//     id: 23,
//     name: '3 Wheeler (Auto / Tempo / E-Auto)',
//     gl: '173',
//     maxLimit: '₹3.00 Lakh',
//     period: '48 Months',
//     margin: '25% (Ex-Showroom, Tax, Ins)',
//     processing: '2.50%',
//     purpose: 'Purchase of New 3 Wheeler Vehicle',
//     roi: [{ label: '10% (ITR) / 10.50% (Declaration)', rate: '10.00% / 10.50%' }],
//     icon: BsCarFront  ,
//   },
//   {
//     id: 24,
//     name: 'New Commercial Vehicle (Car/Jeep/Transport)',
//     gl: '173',
//     maxLimit: '₹50 Lakh',
//     period: 'Upto 25L – 60M | Above 25L – 84M',
//     margin: '15% (On Road Cost)',
//     processing: '2.50%',
//     purpose: 'Purchase of New / Resale Vehicle',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsCarFront  ,
//   },
//   {
//     id: 25,
//     name: 'Janaseva Udyog Vastu Karj Yojana',
//     gl: '166',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months (incl. 18M moratorium)',
//     margin: '15% Purchase / 20% Construction',
//     processing: '2.50%',
//     purpose: 'Purchase of Shop / Godown / Office for Business',
//     roi: [
//       { label: 'A Rating', rate: '9.50%' },
//       { label: 'Other',    rate: '10.00%' },
//     ],
//     icon: MdFactory,
//   },
//   {
//     id: 26,
//     name: 'Cash Credit Secured General',
//     gl: '167',
//     maxLimit: 'Upto Exposure',
//     period: '12 Months',
//     margin: 'Stock – 25% | Debtors – 40%',
//     processing: '0.75%',
//     purpose: 'Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '11.50%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 27,
//     name: 'Loan Against Warehouse Receipt / Pledge',
//     gl: '168',
//     maxLimit: 'Upto Exposure',
//     period: '—',
//     margin: '—',
//     processing: '1.00%',
//     purpose: '—',
//     roi: [{ label: 'Flat Rate', rate: '11.50%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 28,
//     name: 'Machinery Loan',
//     gl: '172',
//     maxLimit: 'Upto Exposure',
//     period: '60 to 120 Months',
//     margin: 'New – 25% | Old – 40%',
//     processing: '1.00%',
//     purpose: 'Purchase of New / Old Machinery',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: MdFactory,
//   },
//   {
//     id: 29,
//     name: 'Hypothecation Loan',
//     gl: '174',
//     maxLimit: 'Upto Exposure',
//     period: '84 Months',
//     margin: '25% – 40%',
//     processing: '1.00%',
//     purpose: 'Purchase of Furniture for Business & Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '11.50%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 30,
//     name: 'Trade Pack Loan (for Traders)',
//     gl: '228/167',
//     maxLimit: '₹50.00 Lakh',
//     period: 'TL – 60 to 120M | CC – 12M',
//     margin: 'TL – 20% | CC – 25%',
//     processing: '1.00%',
//     purpose: 'Land, Shop, Godown, Furniture for Business / Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 31,
//     name: 'ProSelf Loan',
//     gl: '228/167',
//     maxLimit: 'TL ₹10L | CC ₹2.00L',
//     period: 'TL – 60 to 120M | CC – 12M',
//     margin: 'TL – 20% | CC – 25%',
//     processing: '2.50%',
//     purpose: 'Office / Godown / Furniture for Business & Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 32,
//     name: 'Hospital / Educational Institute Loan',
//     gl: '229',
//     maxLimit: 'Upto Exposure',
//     period: 'Property – 120M | Other – 84M',
//     margin: '25%',
//     processing: '1.00%',
//     purpose: 'Hospital / School / College Construction, Medical Equipment',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: MdFactory,
//   },
//   {
//     id: 33,
//     name: 'Janaseva Start Up (MSME) Finance',
//     gl: '166/167/172',
//     maxLimit: 'Upto Exposure',
//     period: 'CC – 12M | TL – 84M | Shed – 120M',
//     margin: '15%',
//     processing: '1.00%',
//     purpose: 'Working Capital, Machinery, Industrial Plot / Shed Construction',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: MdFactory,
//   },
//   {
//     id: 34,
//     name: 'Janaseva Solar Scheme',
//     gl: '299',
//     maxLimit: 'Personal ₹25L | Business ₹50L',
//     period: '72 Months',
//     margin: '15%',
//     processing: '2.50%',
//     purpose: 'Solar System Installation for Personal / Business Purpose',
//     roi: [{ label: 'Flat Rate', rate: '9.50%' }],
//     icon: MdFactory,
//   },
//   {
//     id: 35,
//     name: 'Property Loan / Builder Finance',
//     gl: '175',
//     maxLimit: 'Upto Exposure',
//     period: '36 to 60 Months',
//     margin: '50% of Construction Cost',
//     processing: '2.50%',
//     purpose: 'Construction of Commercial / Residential Project',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsHouseDoor,
//   },
//   {
//     id: 36,
//     name: 'Janaseva Saral Karj Yojana (Loan Against Property)',
//     gl: '212',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months',
//     margin: 'Upto ₹25L – 40% | Above ₹25L – 50%',
//     processing: '2.50%',
//     purpose: 'Any Reason other than Financial Speculation',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsHouseDoor,
//   },
//   {
//     id: 37,
//     name: 'Rent Discounting',
//     gl: '219',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months',
//     margin: '15%',
//     processing: '2.50%',
//     purpose: 'Any Reason other than Financial Speculation',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 38,
//     name: 'Janaseva Saral Overdraft Loan Scheme',
//     gl: '231',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months',
//     margin: '35% of Property Value',
//     processing: '2.50%',
//     purpose: 'Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsBriefcase,
//   },
// ];

// const CATEGORIES = ['All', 'Housing', 'Vehicle', 'Education', 'Personal', 'Secured'];

// const catColor = {
//   Housing:   { pill: 'bg-blue-50 text-blue-700 border-blue-100',    dot: 'bg-blue-500'   },
//   Vehicle:   { pill: 'bg-orange-50 text-orange-700 border-orange-100', dot: 'bg-orange-500' },
//   Education: { pill: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500' },
//   Personal:  { pill: 'bg-violet-50 text-violet-700 border-violet-100', dot: 'bg-violet-500' },
//   Secured:   { pill: 'bg-amber-50 text-amber-700 border-amber-100',  dot: 'bg-amber-500'  },
// };

// // ── Loan Card ─────────────────────────────────────────────────────────────────

// const LoanCard = ({ loan, isCommercial }) => {
//   const [open, setOpen] = useState(false);
//   const Icon = loan.icon;
//   const cfg = catColor[loan.category] || { pill: 'bg-slate-50 text-slate-600 border-slate-100', dot: 'bg-slate-400' };
//   const lowestRate = loan.roi.reduce((min, r) => {
//     const num = parseFloat(r.rate);
//     return !isNaN(num) && num < min ? num : min;
//   }, 999);

//   return (
//     <div className={`bg-white rounded-md border shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden
//       ${open ? 'border-[#1e3163]/30' : 'border-slate-100 hover:border-[#1e3163]/20'}`}
//     >
//       {/* Top bar */}
//       <div className={`h-1 w-full ${isCommercial ? 'bg-[#1e3163]' : 'bg-[#f47012]'}`} />

//       {/* Header row — always visible */}
//       <button
//         onClick={() => setOpen(o => !o)}
//         className="w-full text-left px-4 sm:px-5 py-4 flex items-center gap-3 sm:gap-4 group"
//       >
//         {/* Icon */}
//         <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg
//           ${isCommercial ? 'bg-[#1e3163]/8 text-[#1e3163]' : 'bg-[#f47012]/8 text-[#f47012]'}
//           group-hover:scale-110 transition-transform duration-200`}
//         >
//           <Icon />
//         </div>

//         {/* Name + GL */}
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center gap-2 flex-wrap mb-0.5">
//             <h3 className="text-sm font-bold text-[#1e3163] leading-snug line-clamp-1">
//               {loan.name}
//             </h3>
//             {loan.category && (
//               <span className={`hidden sm:inline-flex items-center gap-1 text-sm font-bold px-2 py-0.5 rounded-full border shrink-0 ${cfg.pill}`}>
//                 <BsCircleFill className={`text-[5px] ${cfg.dot}`} />
//                 {loan.category}
//               </span>
//             )}
//           </div>
//           <p className="text-[10px] text-slate-400 font-medium">GL: {loan.gl} · Max: {loan.maxLimit}</p>
//         </div>

//         {/* ROI badge */}
//         <div className="shrink-0 text-right">
//           {lowestRate < 999 ? (
//             <div>
//               <p className={`text-base sm:text-lg font-extrabold ${isCommercial ? 'text-[#1e3163]' : 'text-[#f47012]'}`}>
//                 {lowestRate.toFixed(2)}%
//               </p>
//               <p className="text-sm text-slate-400 font-medium">p.a. onwards</p>
//             </div>
//           ) : (
//             <p className="text-xs font-bold text-slate-500">{loan.roi[0]?.rate}</p>
//           )}
//         </div>

//         {/* Toggle icon */}
//         <div className="shrink-0 text-slate-400 ml-1">
//           {open ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
//         </div>
//       </button>

//       {/* Expanded detail */}
//       {open && (
//         <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-slate-100">

//           {/* ROI table */}
//           <div className="mt-4">
//             <p className="text-sm font-bold text-[#f47012] uppercase tracking-widest mb-2">Interest Rate (ROI)</p>
//             {loan.roi.map((r, i) => (
//               <div key={i} className={`flex items-center justify-between py-2 px-3 rounded-xl mb-1
//                 ${i === 0 ? (isCommercial ? 'bg-[#1e3163]/5' : 'bg-[#f47012]/5') : 'bg-slate-50'}`}
//               >
//                 <span className="text-xs font-medium text-slate-600">{r.label}</span>
//                 {r.rateUpto50 ? (
//                   <div className="flex gap-3 text-right">
//                     <div>
//                       <p className="text-sm text-slate-400">Upto ₹50L</p>
//                       <p className="text-sm font-extrabold text-[#1e3163]">{r.rateUpto50}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-400">Above ₹50L</p>
//                       <p className="text-sm font-extrabold text-[#1e3163]">{r.rateAbove50}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <span className={`text-sm font-extrabold ${isCommercial ? 'text-[#1e3163]' : 'text-[#f47012]'}`}>
//                     {r.rate}
//                   </span>
//                 )}
//               </div>
//             ))}
//             {loan.roiNote && (
//               <p className="text-[10px] text-emerald-600 font-semibold mt-1.5">* {loan.roiNote}</p>
//             )}
//           </div>

//           {/* Info grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//             {[
//               { label: 'Period',     value: loan.period     },
//               { label: 'Margin',     value: loan.margin     },
//               { label: 'Processing', value: loan.processing },
//             ].map((item, i) => (
//               <div key={i} className="bg-[#eef8ff] rounded-xl px-3 py-2.5 border border-[#1e3163]/8">
//                 <p className="text-sm font-bold text-[#1e3163]/50 uppercase tracking-wider mb-0.5">{item.label}</p>
//                 <p className="text-xs font-semibold text-[#1e3163] leading-snug">{item.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* Purpose */}
//           {loan.purpose && loan.purpose !== '—' && (
//             <div className="flex items-start gap-2 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
//               <FiInfo className="text-[#f47012] text-sm shrink-0 mt-0.5" />
//               <p className="text-xs text-slate-500 leading-relaxed">
//                 <span className="font-bold text-slate-600">Purpose: </span>{loan.purpose}
//               </p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // ── Main Component ─────────────────────────────────────────────────────────────

// const LoanRate = () => {
//   const [search, setSearch]     = useState('');
//   const [category, setCategory] = useState('All');
//   const [tab, setTab]           = useState('retail');

//   const filterFn = (loan) => {
//     const matchSearch = loan.name.toLowerCase().includes(search.toLowerCase());
//     const matchCat = category === 'All' || loan.category === category;
//     return matchSearch && matchCat;
//   };

//   const filteredRetail     = retailLoans.filter(filterFn);
//   const filteredCommercial = commercialLoans.filter(l =>
//     l.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-[#eef8ff] min-h-screen py-10 sm:py-14 px-4">
//       <div className="max-w-[1200px] mx-auto">

//         {/* ══ HEADER BANNER ══ */}
//         <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] rounded-md px-5 sm:px-10 py-7 sm:py-9 mb-8 overflow-hidden shadow-xl">
//           <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
//           <div className="absolute right-16 bottom-0 w-36 h-36 rounded-full bg-[#f47012]/15" />

//           <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div>
//               <div className="inline-flex items-center gap-1.5 bg-[#f47012]/20 text-[#f47012] text-sm sm:text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3">
//                 <FiPercent size={9} />
//                 Interest Rate Chart
//               </div>
//               <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
//                 Loan Interest Rates
//               </h1>
//               <p className="text-white/55 text-xs sm:text-sm">
//                 Janaseva Sahakari Bank Ltd. · Effective 05 March 2026
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="flex gap-2 sm:gap-3 shrink-0 flex-wrap">
//               {[
//                 { label: 'Retail Loans',     value: retailLoans.length     },
//                 { label: 'Commercial Loans', value: commercialLoans.length },
//               ].map((s, i) => (
//                 <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-center min-w-[90px]">
//                   <p className="text-white font-extrabold text-xl sm:text-2xl leading-none">{s.value}</p>
//                   <p className="text-white/50 text-[8px] sm:text-sm uppercase font-semibold tracking-wide mt-1">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ══ FILTERS ══ */}
//         <div className="bg-white rounded-md border border-slate-100 shadow-sm px-4 sm:px-5 py-4 mb-6 flex flex-col sm:flex-row sm:items-center gap-3">

//           {/* Search */}
//           <div className="relative flex-1 max-w-xs">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
//             <input
//               type="text"
//               placeholder="Search loan scheme..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-[#eef8ff] text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1e3163] transition-colors"
//             />
//           </div>

//           <div className="hidden sm:block h-7 w-px bg-slate-100" />

//           {/* Category filter — only for retail tab */}
//           {tab === 'retail' && (
//             <div className="flex items-center gap-1.5 flex-wrap">
//               {CATEGORIES.map(c => (
//                 <button
//                   key={c}
//                   onClick={() => setCategory(c)}
//                   className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold border transition-all duration-150
//                     ${category === c
//                       ? 'bg-[#1e3163] border-[#1e3163] text-white'
//                       : 'border-slate-100 text-slate-500 hover:border-[#1e3163]/30 hover:text-[#1e3163]'
//                     }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           )}

//           <span className="text-xs text-slate-400 sm:ml-auto">
//             {tab === 'retail' ? filteredRetail.length : filteredCommercial.length} scheme{(tab === 'retail' ? filteredRetail.length : filteredCommercial.length) !== 1 ? 's' : ''}
//           </span>
//         </div>

//         {/* ══ TABS ══ */}
//         <div className="flex gap-2 mb-6">
//           {[
//             { key: 'retail',     label: '🏠 Retail Loans',      count: filteredRetail.length     },
//             { key: 'commercial', label: '🏭 Commercial Loans',   count: filteredCommercial.length },
//           ].map(t => (
//             <button
//               key={t.key}
//               onClick={() => { setTab(t.key); setCategory('All'); }}
//               className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-150
//                 ${tab === t.key
//                   ? 'bg-[#1e3163] border-[#1e3163] text-white shadow-md'
//                   : 'bg-white border-slate-200 text-slate-500 hover:border-[#1e3163]/30 hover:text-[#1e3163]'
//                 }`}
//             >
//               <span>{t.label}</span>
//               <span className={`text-sm font-bold px-1.5 py-0.5 rounded-full ${tab === t.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
//                 {t.count}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* ══ CARDS LIST ══ */}
//         <div className="flex flex-col gap-3">
//           {tab === 'retail'
//             ? filteredRetail.length === 0
//               ? <EmptyState />
//               : filteredRetail.map(loan => <LoanCard key={loan.id} loan={loan} isCommercial={false} />)
//             : filteredCommercial.length === 0
//               ? <EmptyState />
//               : filteredCommercial.map(loan => <LoanCard key={loan.id} loan={loan} isCommercial={true} />)
//           }
//         </div>

//         {/* ══ NOTE ══ */}
//         <div className="mt-8 bg-white rounded-md border border-[#f47012]/15 px-5 py-4 flex items-start gap-3 shadow-sm">
//           <FiInfo className="text-[#f47012] text-base shrink-0 mt-0.5" />
//           <p className="text-xs text-slate-500 leading-relaxed">
//             <span className="font-bold text-[#1e3163]">Note: </span>
//             ROI applicable 9% to 11% subject to Credit Rating of Borrower. Rates are subject to change as per RBI / Board directives.
//             For the latest rates, please contact your nearest Janaseva Sahakari Bank branch.
//             Effective date: <strong>05 March 2026</strong>.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// const EmptyState = () => (
//   <div className="bg-white rounded-md border border-slate-100 py-14 text-center shadow-sm">
//     <p className="text-slate-300 text-4xl mb-3">💳</p>
//     <p className="text-slate-400 font-semibold text-sm">No loan schemes found.</p>
//     <p className="text-slate-300 text-xs mt-1">Try adjusting your search or filter.</p>
//   </div>
// );

// export default LoanRate;



// import React, { useState } from 'react';
// import { FiSearch, FiChevronDown, FiChevronUp, FiPercent, FiInfo } from 'react-icons/fi';
// import { BsCircleFill, BsHouseDoor, BsCarFrontFill, BsBook, BsBriefcase, BsCashCoin, BsShieldCheck } from 'react-icons/bs';
// import { MdPrecisionManufacturing } from 'react-icons/md';

// // ── Data (from sheet 05.03.2026) ──────────────────────────────────────────────

// const retailLoans = [
//   {
//     id: 1,
//     name: 'Janaseva Gharkul Loan Scheme',
//     gl: '183',
//     maxLimit: '₹200.00 Lakh',
//     period: '240 Months',
//     margin: '10% (Agreement / Realisable Value – lower)',
//     processing: '1% (Max ₹20,000 upto ₹50L / Max ₹40,000 above ₹50L)',
//     purpose: 'Purchase of New Flat / Resale House / Construction',
//     roi: [
//       { label: 'CIBIL 800 & Above', rateUpto50: '7.50%', rateAbove50: '7.75%' },
//       { label: 'CIBIL 700 to 799',  rateUpto50: '7.95%', rateAbove50: '8.20%' },
//       { label: 'CIBIL 650 to 699',  rateUpto50: '8.75%', rateAbove50: '9.00%' },
//       { label: 'CIBIL -1 to 5 & 100–200', rateUpto50: '7.95%', rateAbove50: '8.20%' },
//     ],
//     roiNote: 'Rates: Upto ₹50 Lakh | Above ₹50 Lakh',
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 2,
//     name: 'Housing Loan under CRE',
//     gl: '183',
//     maxLimit: '₹140.00 Lakh',
//     period: '240 Months',
//     margin: '10% (Agreement Value)',
//     processing: 'Upto ₹70L – 1% | Above ₹70L – 2.50%',
//     purpose: 'Purchase of New Flat / Resale House / Construction',
//     roi: [{ label: 'Flat Rate', rate: '10.50%' }],
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 3,
//     name: 'Janaseva Home Decore (Repairs/Addition/Alteration)',
//     gl: '183',
//     maxLimit: '₹10 Lakh',
//     period: '120 Months',
//     margin: '30% of estimated cost',
//     processing: '0.75%',
//     purpose: 'Repair of House, Renovation, Furniture',
//     roi: [{ label: 'Flat Rate', rate: '10.50%' }],
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 4,
//     name: 'Janaseva Gharkul Top Up',
//     gl: '183',
//     maxLimit: '₹75 Lakh',
//     period: '120 Months',
//     margin: '15% Valuation',
//     processing: '0.75%',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsHouseDoor,
//     category: 'Housing',
//   },
//   {
//     id: 5,
//     name: 'Vehicle Loan – New Four Wheeler',
//     gl: '173',
//     maxLimit: '₹50.00 Lakh',
//     period: '60 Months (84M case to case)',
//     margin: '10% of On Road (Ex-showroom + RTO + Ins)',
//     processing: '1.00% (Max ₹25,000)',
//     purpose: 'Purchase of New 4 Wheeler Car for Personal Use',
//     roi: [
//       { label: 'CIBIL 800 & Above', rate: '8.25%' },
//       { label: 'CIBIL 700 to 799',  rate: '8.50%' },
//       { label: 'CIBIL 650 to 699',  rate: '9.00%' },
//       { label: 'CIBIL -1 to 5 & 100–200', rate: '8.50%' },
//     ],
//     roiNote: '*0.25% Concession for E-Vehicle',
//     icon: BsCarFrontFill,
//     category: 'Vehicle',
//   },
//   {
//     id: 6,
//     name: 'Vehicle Loan – Two Wheeler',
//     gl: '173',
//     maxLimit: '₹5.00 Lakh',
//     period: '60 Months',
//     margin: '10% of On Road (Ex-showroom + RTO + Ins)',
//     processing: '2.50% (Max ₹3,000) + ₹500+GST',
//     purpose: 'Purchase of New 2 Wheeler',
//     roi: [
//       { label: 'CIBIL above 750', rate: '9.85%' },
//       { label: 'CIBIL 700 to 750', rate: '10.00%' },
//       { label: 'CIBIL 650 to 699', rate: '10.15%' },
//       { label: 'CIBIL -1 to 5',    rate: '10.00%' },
//     ],
//     roiNote: '*0.25% Concession for E-Bike / 2 Wheeler',
//     icon: BsCarFrontFill,
//     category: 'Vehicle',
//   },
//   {
//     id: 7,
//     name: 'Resale 4 Wheeler',
//     gl: '173',
//     maxLimit: '₹50 Lakh',
//     period: '36 to 60 Months',
//     margin: '50% of Valuation (Max 3 years old vehicle)',
//     processing: '2.50%',
//     purpose: 'Purchase of Resale 4 Wheeler Vehicle',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsCarFrontFill,
//     category: 'Vehicle',
//   },
//   {
//     id: 8,
//     name: 'Janaseva Educational Secured Loan',
//     gl: '186',
//     maxLimit: '₹50 Lakh',
//     period: '144 Months (Course + 6M + 7 Yrs)',
//     margin: 'Upto ₹20L – 10% | Above ₹20L – 15%',
//     processing: '1% (Max ₹50,000) + ₹1,000 Documentation',
//     purpose: 'Higher Education in India & Abroad',
//     roi: [
//       { label: 'Upto ₹20 Lakh',  rate: '8.90%' },
//       { label: 'Above ₹20 Lakh', rate: '9.25%' },
//     ],
//     icon: BsBook,
//     category: 'Education',
//   },
//   {
//     id: 9,
//     name: 'Education Loan for Coaching / Tuition Classes (Unsecured)',
//     gl: '185',
//     maxLimit: '₹5 Lakh',
//     period: '48 Months',
//     margin: '10%',
//     processing: '5%',
//     purpose: 'Payment of Coaching / Tuition Fees',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsBook,
//     category: 'Education',
//   },
//   {
//     id: 10,
//     name: 'Unsecured Education Loan',
//     gl: '185',
//     maxLimit: '₹5 Lakh',
//     period: '120 Months (Course + 6M + 5 Yrs)',
//     margin: '10%',
//     processing: '5%',
//     purpose: 'Higher Education in India & Abroad',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsBook,
//     category: 'Education',
//   },
//   {
//     id: 11,
//     name: 'Personal Loan Scheme',
//     gl: '189',
//     maxLimit: '₹5 Lakh',
//     period: '60 Months',
//     margin: '—',
//     processing: '5%',
//     purpose: 'Personal Reason / Repayment of Debt',
//     roi: [
//       { label: 'CIBIL 700 & Above', rate: '12.00%' },
//       { label: 'CIBIL 650 to 699',  rate: '13.00%' },
//     ],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 12,
//     name: 'Consumer Loan (Consumer Durable / Furniture)',
//     gl: '188',
//     maxLimit: '₹5 Lakh',
//     period: '60 Months',
//     margin: '10%',
//     processing: '2.50%',
//     purpose: 'Purchase of Consumer Durable / Equipment / Furniture',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 13,
//     name: 'Consumer Loan (Housing Furniture)',
//     gl: '188',
//     maxLimit: '₹50 Lakh',
//     period: '120 Months',
//     margin: '25%',
//     processing: '0.75%',
//     purpose: 'Purchase of House Furniture',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 14,
//     name: 'Group Loan',
//     gl: '189',
//     maxLimit: '₹5 Lakh',
//     period: '60 Months',
//     margin: 'Min 10 Members required',
//     processing: '5%',
//     purpose: 'Personal Reason / Repayment of Debt',
//     roi: [{ label: 'Flat Rate', rate: '9.75%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 15,
//     name: 'Janvikas Loan Scheme',
//     gl: '236',
//     maxLimit: '₹1 Lakh',
//     period: '48 Months',
//     margin: '—',
//     processing: '5%',
//     purpose: 'Personal Reason / Repayment of Debt',
//     roi: [{ label: 'Flat Rate', rate: '12.00%' }],
//     icon: BsCashCoin,
//     category: 'Personal',
//   },
//   {
//     id: 16,
//     name: 'Gold Loan (Upto ₹2.50 Lakh – Bullet)',
//     gl: '230',
//     maxLimit: '₹2.50 Lakh',
//     period: '12 Months',
//     margin: '25%',
//     processing: '₹2,000',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '9.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 17,
//     name: 'Gold Loan (₹2.50L to ₹5L – EMI)',
//     gl: '230',
//     maxLimit: '₹5.00 Lakh',
//     period: '36 Months',
//     margin: '30%',
//     processing: '₹5,000',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '9.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 18,
//     name: 'Gold Loan (₹5L to ₹25L – EMI)',
//     gl: '230',
//     maxLimit: '₹25 Lakh',
//     period: '48 Months',
//     margin: '35%',
//     processing: '₹10,000',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '9.50%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 19,
//     name: 'Loan Against Life Insurance Policies',
//     gl: '246',
//     maxLimit: 'Upto Exposure Limit',
//     period: '36 Months / Due Date of Policy',
//     margin: '10%',
//     processing: '2.50% + ₹200',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 20,
//     name: 'Government Secured Loan',
//     gl: '178',
//     maxLimit: '—',
//     period: 'Due Date of Security',
//     margin: '10%',
//     processing: '—',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: '11.00%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 21,
//     name: 'Cash Credit Against FD (FDCC)',
//     gl: '170',
//     maxLimit: '—',
//     period: 'Due Date of Security',
//     margin: '10%',
//     processing: '—',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: 'FD Rate + 2% (0.50% extra for Third Party FD)' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
//   {
//     id: 22,
//     name: 'Loan Against FD (FDTL)',
//     gl: '177',
//     maxLimit: '—',
//     period: 'Due Date of Security',
//     margin: '10%',
//     processing: '—',
//     purpose: 'Any reason other than financial speculation',
//     roi: [{ label: 'Flat Rate', rate: 'FD Rate + 2%' }],
//     icon: BsShieldCheck,
//     category: 'Secured',
//   },
// ];

// const commercialLoans = [
//   {
//     id: 23,
//     name: '3 Wheeler (Auto / Tempo / E-Auto)',
//     gl: '173',
//     maxLimit: '₹3.00 Lakh',
//     period: '48 Months',
//     margin: '25% (Ex-Showroom, Tax, Ins)',
//     processing: '2.50%',
//     purpose: 'Purchase of New 3 Wheeler Vehicle',
//     roi: [{ label: '10% (ITR) / 10.50% (Declaration)', rate: '10.00% / 10.50%' }],
//     icon: BsCarFrontFill,
//   },
//   {
//     id: 24,
//     name: 'New Commercial Vehicle (Car/Jeep/Transport)',
//     gl: '173',
//     maxLimit: '₹50 Lakh',
//     period: 'Upto 25L – 60M | Above 25L – 84M',
//     margin: '15% (On Road Cost)',
//     processing: '2.50%',
//     purpose: 'Purchase of New / Resale Vehicle',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsCarFrontFill,
//   },
//   {
//     id: 25,
//     name: 'Janaseva Udyog Vastu Karj Yojana',
//     gl: '166',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months (incl. 18M moratorium)',
//     margin: '15% Purchase / 20% Construction',
//     processing: '2.50%',
//     purpose: 'Purchase of Shop / Godown / Office for Business',
//     roi: [
//       { label: 'A Rating', rate: '9.50%' },
//       { label: 'Other',    rate: '10.00%' },
//     ],
//     icon: MdPrecisionManufacturing,
//   },
//   {
//     id: 26,
//     name: 'Cash Credit Secured General',
//     gl: '167',
//     maxLimit: 'Upto Exposure',
//     period: '12 Months',
//     margin: 'Stock – 25% | Debtors – 40%',
//     processing: '0.75%',
//     purpose: 'Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '11.50%' }],
//     icon: BsBriefcase,
//   },
// //   {
// //     id: 27,
// //     name: 'Loan Against Warehouse Receipt / Pledge',
// //     gl: '168',
// //     maxLimit: 'Upto Exposure',
// //     period: '—',
// //     margin: '—',
// //     processing: '1.00%',
// //     purpose: '—',
// //     roi: [{ label: 'Flat Rate', rate: '11.50%' }],
// //     icon: BsBriefcase,
// //   },
//   {
//     id: 28,
//     name: 'Machinery Loan',
//     gl: '172',
//     maxLimit: 'Upto Exposure',
//     period: '60 to 120 Months',
//     margin: 'New – 25% | Old – 40%',
//     processing: '1.00%',
//     purpose: 'Purchase of New / Old Machinery',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: MdPrecisionManufacturing,
//   },
//   {
//     id: 29,
//     name: 'Hypothecation Loan',
//     gl: '174',
//     maxLimit: 'Upto Exposure',
//     period: '84 Months',
//     margin: '25% – 40%',
//     processing: '1.00%',
//     purpose: 'Purchase of Furniture for Business & Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '11.50%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 30,
//     name: 'Trade Pack Loan (for Traders)',
//     gl: '228/167',
//     maxLimit: '₹50.00 Lakh',
//     period: 'TL – 60 to 120M | CC – 12M',
//     margin: 'TL – 20% | CC – 25%',
//     processing: '1.00%',
//     purpose: 'Land, Shop, Godown, Furniture for Business / Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 31,
//     name: 'ProSelf Loan',
//     gl: '228/167',
//     maxLimit: 'TL ₹10L | CC ₹2.00L',
//     period: 'TL – 60 to 120M | CC – 12M',
//     margin: 'TL – 20% | CC – 25%',
//     processing: '2.50%',
//     purpose: 'Office / Godown / Furniture for Business & Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 32,
//     name: 'Hospital / Educational Institute Loan',
//     gl: '229',
//     maxLimit: 'Upto Exposure',
//     period: 'Property – 120M | Other – 84M',
//     margin: '25%',
//     processing: '1.00%',
//     purpose: 'Hospital / School / College Construction, Medical Equipment',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: MdPrecisionManufacturing,
//   },
//   {
//     id: 33,
//     name: 'Janaseva Start Up (MSME) Finance',
//     gl: '166/167/172',
//     maxLimit: 'Upto Exposure',
//     period: 'CC – 12M | TL – 84M | Shed – 120M',
//     margin: '15%',
//     processing: '1.00%',
//     purpose: 'Working Capital, Machinery, Industrial Plot / Shed Construction',
//     roi: [{ label: 'Flat Rate', rate: '10.00%' }],
//     icon: MdPrecisionManufacturing,
//   },
//   {
//     id: 34,
//     name: 'Janaseva Solar Scheme',
//     gl: '299',
//     maxLimit: 'Personal ₹25L | Business ₹50L',
//     period: '72 Months',
//     margin: '15%',
//     processing: '2.50%',
//     purpose: 'Solar System Installation for Personal / Business Purpose',
//     roi: [{ label: 'Flat Rate', rate: '9.50%' }],
//     icon: MdPrecisionManufacturing,
//   },
//   {
//     id: 35,
//     name: 'Property Loan / Builder Finance',
//     gl: '175',
//     maxLimit: 'Upto Exposure',
//     period: '36 to 60 Months',
//     margin: '50% of Construction Cost',
//     processing: '2.50%',
//     purpose: 'Construction of Commercial / Residential Project',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsHouseDoor,
//   },
//   {
//     id: 36,
//     name: 'Janaseva Saral Karj Yojana (Loan Against Property)',
//     gl: '212',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months',
//     margin: 'Upto ₹25L – 40% | Above ₹25L – 50%',
//     processing: '2.50%',
//     purpose: 'Any Reason other than Financial Speculation',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsHouseDoor,
//   },
//   {
//     id: 37,
//     name: 'Rent Discounting',
//     gl: '219',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months',
//     margin: '15%',
//     processing: '2.50%',
//     purpose: 'Any Reason other than Financial Speculation',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsBriefcase,
//   },
//   {
//     id: 38,
//     name: 'Janaseva Saral Overdraft Loan Scheme',
//     gl: '231',
//     maxLimit: 'Upto Exposure',
//     period: '120 Months',
//     margin: '35% of Property Value',
//     processing: '2.50%',
//     purpose: 'Working Capital',
//     roi: [{ label: 'Flat Rate', rate: '12.50%' }],
//     icon: BsBriefcase,
//   },
// ];

// const CATEGORIES = ['All', 'Housing', 'Vehicle', 'Education', 'Personal', 'Secured'];

// const catColor = {
//   Housing:   { pill: 'bg-blue-50 text-blue-700 border-blue-100',    dot: 'bg-blue-500'   },
//   Vehicle:   { pill: 'bg-orange-50 text-orange-700 border-orange-100', dot: 'bg-orange-500' },
//   Education: { pill: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500' },
//   Personal:  { pill: 'bg-violet-50 text-violet-700 border-violet-100', dot: 'bg-violet-500' },
//   Secured:   { pill: 'bg-amber-50 text-amber-700 border-amber-100',  dot: 'bg-amber-500'  },
// };

// // ── Loan Card ─────────────────────────────────────────────────────────────────

// const LoanCard = ({ loan, isCommercial }) => {
//   const [open, setOpen] = useState(false);
//   const Icon = loan.icon;
//   const cfg = catColor[loan.category] || { pill: 'bg-slate-50 text-slate-600 border-slate-100', dot: 'bg-slate-400' };
//   const lowestRate = loan.roi.reduce((min, r) => {
//     const num = parseFloat(r.rate);
//     return !isNaN(num) && num < min ? num : min;
//   }, 999);

//   return (
//     <div className={`bg-white rounded-md border shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden
//       ${open ? 'border-[#1e3163]/30' : 'border-slate-100 hover:border-[#1e3163]/20'}`}
//     >
//       {/* Top bar */}
//       <div className={`h-1 w-full ${isCommercial ? 'bg-[#1e3163]' : 'bg-[#f47012]'}`} />

//       {/* Header row — always visible */}
//       <button
//         onClick={() => setOpen(o => !o)}
//         className="w-full text-left px-4 sm:px-5 py-4 flex items-center gap-3 sm:gap-4 group"
//       >
//         {/* Icon */}
//         <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg
//           ${isCommercial ? 'bg-[#1e3163]/8 text-[#1e3163]' : 'bg-[#f47012]/8 text-[#f47012]'}
//           group-hover:scale-110 transition-transform duration-200`}
//         >
//           <Icon />
//         </div>

//         {/* Name + GL */}
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center gap-2 flex-wrap mb-0.5">
//             <h3 className="text-sm font-bold text-[#1e3163] leading-snug line-clamp-1">
//               {loan.name}
//             </h3>
//             {loan.category && (
//               <span className={`hidden sm:inline-flex items-center gap-1 text-sm font-bold px-2 py-0.5 rounded-full border shrink-0 ${cfg.pill}`}>
//                 <BsCircleFill className={`text-[5px] ${cfg.dot}`} />
//                 {loan.category}
//               </span>
//             )}
//           </div>
//           <p className="text-[10px] text-slate-400 font-medium">GL: {loan.gl} · Max: {loan.maxLimit}</p>
//         </div>

//         {/* ROI badge */}
//         <div className="shrink-0 text-right">
//           {lowestRate < 999 ? (
//             <div>
//               <p className={`text-base sm:text-lg font-extrabold ${isCommercial ? 'text-[#1e3163]' : 'text-[#f47012]'}`}>
//                 {lowestRate.toFixed(2)}%
//               </p>
//               <p className="text-sm text-slate-400 font-medium">p.a. onwards</p>
//             </div>
//           ) : (
//             <p className="text-xs font-bold text-slate-500">{loan.roi[0]?.rate}</p>
//           )}
//         </div>

//         {/* Toggle icon */}
//         <div className="shrink-0 text-slate-400 ml-1">
//           {open ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
//         </div>
//       </button>

//       {/* Expanded detail */}
//       {open && (
//         <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-slate-100">

//           {/* ROI table */}
//           <div className="mt-4">
//             <p className="text-sm font-bold text-[#f47012] uppercase tracking-widest mb-2">Interest Rate (ROI)</p>
//             {loan.roi.map((r, i) => (
//               <div key={i} className={`flex items-center justify-between py-2 px-3 rounded-xl mb-1
//                 ${i === 0 ? (isCommercial ? 'bg-[#1e3163]/5' : 'bg-[#f47012]/5') : 'bg-slate-50'}`}
//               >
//                 <span className="text-xs font-medium text-slate-600">{r.label}</span>
//                 {r.rateUpto50 ? (
//                   <div className="flex gap-3 text-right">
//                     <div>
//                       <p className="text-sm text-slate-400">Upto ₹50L</p>
//                       <p className="text-sm font-extrabold text-[#1e3163]">{r.rateUpto50}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-400">Above ₹50L</p>
//                       <p className="text-sm font-extrabold text-[#1e3163]">{r.rateAbove50}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <span className={`text-sm font-extrabold ${isCommercial ? 'text-[#1e3163]' : 'text-[#f47012]'}`}>
//                     {r.rate}
//                   </span>
//                 )}
//               </div>
//             ))}
//             {loan.roiNote && (
//               <p className="text-[10px] text-emerald-600 font-semibold mt-1.5">* {loan.roiNote}</p>
//             )}
//           </div>

//           {/* Info grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//             {[
//               { label: 'Period',     value: loan.period     },
//               { label: 'Margin',     value: loan.margin     },
//               { label: 'Processing', value: loan.processing },
//             ].map((item, i) => (
//               <div key={i} className="bg-[#eef8ff] rounded-xl px-3 py-2.5 border border-[#1e3163]/8">
//                 <p className="text-sm font-bold text-[#1e3163]/50 uppercase tracking-wider mb-0.5">{item.label}</p>
//                 <p className="text-xs font-semibold text-[#1e3163] leading-snug">{item.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* Purpose */}
//           {loan.purpose && loan.purpose !== '—' && (
//             <div className="flex items-start gap-2 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
//               <FiInfo className="text-[#f47012] text-sm shrink-0 mt-0.5" />
//               <p className="text-xs text-slate-500 leading-relaxed">
//                 <span className="font-bold text-slate-600">Purpose: </span>{loan.purpose}
//               </p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // ── Main Component ─────────────────────────────────────────────────────────────

// const LoanRate = () => {
//   const [search, setSearch]     = useState('');
//   const [category, setCategory] = useState('All');
//   const [tab, setTab]           = useState('retail');

//   const filterFn = (loan) => {
//     const matchSearch = loan.name.toLowerCase().includes(search.toLowerCase());
//     const matchCat = category === 'All' || loan.category === category;
//     return matchSearch && matchCat;
//   };

//   const filteredRetail     = retailLoans.filter(filterFn);
//   const filteredCommercial = commercialLoans.filter(l =>
//     l.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-[#eef8ff] min-h-screen py-10 sm:py-14 px-4">
//       <div className="max-w-[1200px] mx-auto">

//         {/* ══ HEADER BANNER ══ */}
//         <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] rounded-md px-5 sm:px-10 py-7 sm:py-9 mb-8 overflow-hidden shadow-xl">
//           <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
//           <div className="absolute right-16 bottom-0 w-36 h-36 rounded-full bg-[#f47012]/15" />

//           <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div>
//               <div className="inline-flex items-center gap-1.5 bg-[#f47012]/20 text-[#f47012] text-sm sm:text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3">
//                 <FiPercent size={9} />
//                 Interest Rate Chart
//               </div>
//               <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
//                 Loan Interest Rates
//               </h1>
//               <p className="text-white/55 text-xs sm:text-sm">
//                 Janaseva Sahakari Bank Ltd. · Effective 05 March 2026
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="flex gap-2 sm:gap-3 shrink-0 flex-wrap">
//               {[
//                 { label: 'Retail Loans',     value: retailLoans.length     },
//                 { label: 'Commercial Loans', value: commercialLoans.length },
//               ].map((s, i) => (
//                 <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-center min-w-[90px]">
//                   <p className="text-white font-extrabold text-xl sm:text-2xl leading-none">{s.value}</p>
//                   <p className="text-white/50 text-[8px] sm:text-sm uppercase font-semibold tracking-wide mt-1">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ══ FILTERS ══ */}
//         <div className="bg-white rounded-md border border-slate-100 shadow-sm px-4 sm:px-5 py-4 mb-6 flex flex-col sm:flex-row sm:items-center gap-3">

//           {/* Search */}
//           <div className="relative flex-1 max-w-xs">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
//             <input
//               type="text"
//               placeholder="Search loan scheme..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-[#eef8ff] text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1e3163] transition-colors"
//             />
//           </div>

//           <div className="hidden sm:block h-7 w-px bg-slate-100" />

//           {/* Category filter — only for retail tab */}
//           {tab === 'retail' && (
//             <div className="flex items-center gap-1.5 flex-wrap">
//               {CATEGORIES.map(c => (
//                 <button
//                   key={c}
//                   onClick={() => setCategory(c)}
//                   className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold border transition-all duration-150
//                     ${category === c
//                       ? 'bg-[#1e3163] border-[#1e3163] text-white'
//                       : 'border-slate-100 text-slate-500 hover:border-[#1e3163]/30 hover:text-[#1e3163]'
//                     }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           )}

//           <span className="text-xs text-slate-400 sm:ml-auto">
//             {tab === 'retail' ? filteredRetail.length : filteredCommercial.length} scheme{(tab === 'retail' ? filteredRetail.length : filteredCommercial.length) !== 1 ? 's' : ''}
//           </span>
//         </div>

//         {/* ══ TABS ══ */}
//         <div className="flex gap-2 mb-6">
//           {[
//             { key: 'retail',     label: '🏠 Retail Loans',      count: filteredRetail.length     },
//             { key: 'commercial', label: '🏭 Commercial Loans',   count: filteredCommercial.length },
//           ].map(t => (
//             <button
//               key={t.key}
//               onClick={() => { setTab(t.key); setCategory('All'); }}
//               className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-150
//                 ${tab === t.key
//                   ? 'bg-[#1e3163] border-[#1e3163] text-white shadow-md'
//                   : 'bg-white border-slate-200 text-slate-500 hover:border-[#1e3163]/30 hover:text-[#1e3163]'
//                 }`}
//             >
//               <span>{t.label}</span>
//               <span className={`text-sm font-bold px-1.5 py-0.5 rounded-full ${tab === t.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
//                 {t.count}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* ══ CARDS LIST ══ */}
//         <div className="flex flex-col gap-3">
//           {tab === 'retail'
//             ? filteredRetail.length === 0
//               ? <EmptyState />
//               : filteredRetail.map(loan => <LoanCard key={loan.id} loan={loan} isCommercial={false} />)
//             : filteredCommercial.length === 0
//               ? <EmptyState />
//               : filteredCommercial.map(loan => <LoanCard key={loan.id} loan={loan} isCommercial={true} />)
//           }
//         </div>

//         {/* ══ NOTE ══ */}
//         <div className="mt-8 bg-white rounded-md border border-[#f47012]/15 px-5 py-4 flex items-start gap-3 shadow-sm">
//           <FiInfo className="text-[#f47012] text-base shrink-0 mt-0.5" />
//           <p className="text-xs text-slate-500 leading-relaxed">
//             <span className="font-bold text-[#1e3163]">Note: </span>
//             ROI applicable 9% to 11% subject to Credit Rating of Borrower. Rates are subject to change as per RBI / Board directives.
//             For the latest rates, please contact your nearest Janaseva Sahakari Bank branch.
//             Effective date: <strong>05 March 2026</strong>.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// const EmptyState = () => (
//   <div className="bg-white rounded-md border border-slate-100 py-14 text-center shadow-sm">
//     <p className="text-slate-300 text-4xl mb-3">💳</p>
//     <p className="text-slate-400 font-semibold text-sm">No loan schemes found.</p>
//     <p className="text-slate-300 text-xs mt-1">Try adjusting your search or filter.</p>
//   </div>
// );

// export default LoanRate;







// import React, { useState } from 'react';
// import { FiSearch, FiInfo, FiChevronDown, FiChevronUp } from 'react-icons/fi';

// // ─── All Loan Data ────────────────────────────────────────────────────────────

// const allLoans = [
//   // ── Housing ──
//   {
//     id: 1,
//     category: 'Housing',
//     name: 'Janaseva Gharkul Loan Scheme',
//     emoji: '🏠',
//     maxLimit: '₹200 Lakh',
//     period: 'Up to 20 Years',
//     processing: '1%',
//     startingRate: '7.50',
//     rateDisplay: 'From 7.50% to 9.00% p.a.',
//     rateDetails: [
//       { label: 'CIBIL 800+         (Upto ₹50L)',   rate: '7.50%' },
//       { label: 'CIBIL 800+         (Above ₹50L)',  rate: '7.75%' },
//       { label: 'CIBIL 700–799   (Upto ₹50L)',   rate: '7.95%' },
//       { label: 'CIBIL 700–799   (Above ₹50L)',  rate: '8.20%' },
//       { label: 'CIBIL 650–699   (Upto ₹50L)',   rate: '8.75%' },
//       { label: 'CIBIL 650–699   (Above ₹50L)',  rate: '9.00%' },
//       { label: 'CIBIL -1 to 5       (Upto ₹50L)',   rate: '7.95%' },
//     ],
//     purpose: 'Buy a new flat, resale house, or construct your home',
//   },
//   {
//     id: 2,
//     category: 'Housing',
//     name: 'Housing Loan under CRE',
//     emoji: '🏢',
//     maxLimit: '₹140 Lakh',
//     period: 'Up to 20 Years',
//     processing: 'Upto ₹70L: 1% / Above: 2.5%',
//     startingRate: '10.50',
//     rateDisplay: '10.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.50%' }],
//     purpose: 'For borrowers with 2 or more existing housing units',
//   },
//   {
//     id: 3,
//     category: 'Housing',
//     name: 'Janaseva Home Decore',
//     emoji: '🛋️',
//     maxLimit: '₹10 Lakh',
//     period: 'Up to 10 Years',
//     processing: '0.75%',
//     startingRate: '10.50',
//     rateDisplay: '10.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.50%' }],
//     purpose: 'Home repair, renovation, furniture, addition or alteration',
//   },
//   {
//     id: 4,
//     category: 'Housing',
//     name: 'Janaseva Gharkul Top Up',
//     emoji: '🔝',
//     maxLimit: '₹75 Lakh',
//     period: 'Up to 10 Years',
//     processing: '0.75%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Additional loan on top of existing Gharkul home loan',
//   },

//   // ── Vehicle ──
//   {
//     id: 5,
//     category: 'Vehicle',
//     name: 'New Four Wheeler Loan',
//     emoji: '🚗',
//     maxLimit: '₹50 Lakh',
//     period: 'Up to 5 Years',
//     processing: '1% (Max ₹25,000)',
//     startingRate: '8.25',
//     rateDisplay: 'From 8.25% to 9.00% p.a.',
//     rateDetails: [
//       { label: 'CIBIL 800+',    rate: '8.25%' },
//       { label: 'CIBIL 700–799', rate: '8.50%' },
//       { label: 'CIBIL 650–699', rate: '9.00%' },
//       { label: 'CIBIL -1 to 5', rate: '8.50%' },
//     ],
//     note: '0.25% discount for Electric Vehicles',
//     purpose: 'Purchase of a new 4-wheeler car for personal use',
//   },
//   {
//     id: 6,
//     category: 'Vehicle',
//     name: 'Two Wheeler Loan',
//     emoji: '🏍️',
//     maxLimit: '₹5 Lakh',
//     period: 'Up to 5 Years',
//     processing: '2.5% (Max ₹3,000) + ₹500',
//     startingRate: '9.85',
//     rateDisplay: 'From 9.85% to 10.15% p.a.',
//     rateDetails: [
//       { label: 'CIBIL above 750', rate: '9.85%' },
//       { label: 'CIBIL 700–750',   rate: '10.00%' },
//       { label: 'CIBIL 650–699',   rate: '10.15%' },
//       { label: 'CIBIL -1 to 5',   rate: '10.00%' },
//     ],
//     note: '0.25% discount for E-Bike',
//     purpose: 'Purchase of a new 2-wheeler or electric bike',
//   },
//   {
//     id: 7,
//     category: 'Vehicle',
//     name: 'Resale 4 Wheeler',
//     emoji: '🚙',
//     maxLimit: '₹50 Lakh',
//     period: '3 to 5 Years',
//     processing: '2.50%',
//     startingRate: '11.00',
//     rateDisplay: '11.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '11.00%' }],
//     purpose: 'Purchase of a used / resale 4-wheeler (max 3 years old)',
//   },

//   // ── Education ──
//   {
//     id: 8,
//     category: 'Education',
//     name: 'Janaseva Educational Secured Loan',
//     emoji: '🎓',
//     maxLimit: '₹50 Lakh',
//     period: 'Up to 12 Years',
//     processing: '1% + ₹1,000',
//     startingRate: '8.90',
//     rateDisplay: 'From 8.90% to 9.25% p.a.',
//     rateDetails: [
//       { label: 'Upto ₹20 Lakh',  rate: '8.90%' },
//       { label: 'Above ₹20 Lakh', rate: '9.25%' },
//     ],
//     purpose: 'Higher education in India and abroad with security',
//   },
//   {
//     id: 9,
//     category: 'Education',
//     name: 'Education Loan for Coaching (Unsecured)',
//     emoji: '📚',
//     maxLimit: '₹5 Lakh',
//     period: 'Up to 4 Years',
//     processing: '5%',
//     startingRate: '11.00',
//     rateDisplay: '11.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '11.00%' }],
//     purpose: 'Fees for coaching classes or tuition',
//   },
//   {
//     id: 10,
//     category: 'Education',
//     name: 'Unsecured Education Loan',
//     emoji: '🏫',
//     maxLimit: '₹5 Lakh',
//     period: 'Up to 10 Years',
//     processing: '5%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Higher education in India and abroad (no security required)',
//   },

//   // ── Personal ──
//   {
//     id: 11,
//     category: 'Personal',
//     name: 'Personal Loan Scheme',
//     emoji: '💼',
//     maxLimit: '₹5 Lakh',
//     period: 'Up to 5 Years',
//     processing: '5%',
//     startingRate: '12.00',
//     rateDisplay: 'From 12.00% to 13.00% p.a.',
//     rateDetails: [
//       { label: 'CIBIL 700+',    rate: '12.00%' },
//       { label: 'CIBIL 650–699', rate: '13.00%' },
//     ],
//     purpose: 'Personal expenses, debt repayment or any purpose',
//   },
//   {
//     id: 12,
//     category: 'Personal',
//     name: 'Consumer Loan (Durable / Furniture)',
//     emoji: '📺',
//     maxLimit: '₹5 Lakh',
//     period: 'Up to 5 Years',
//     processing: '2.50%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Buy consumer electronics, appliances or furniture',
//   },
//   {
//     id: 13,
//     category: 'Personal',
//     name: 'Consumer Loan (Housing Furniture)',
//     emoji: '🛏️',
//     maxLimit: '₹50 Lakh',
//     period: 'Up to 10 Years',
//     processing: '0.75%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Purchase of furniture for your house',
//   },
//   {
//     id: 14,
//     category: 'Personal',
//     name: 'Group Loan',
//     emoji: '👥',
//     maxLimit: '₹5 Lakh',
//     period: 'Up to 5 Years',
//     processing: '5%',
//     startingRate: '9.75',
//     rateDisplay: '9.75% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '9.75%' }],
//     purpose: 'For group of permanent employees (min. 10 members)',
//   },
//   {
//     id: 15,
//     category: 'Personal',
//     name: 'Janvikas Loan Scheme',
//     emoji: '💰',
//     maxLimit: '₹1 Lakh',
//     period: 'Up to 4 Years',
//     processing: '5%',
//     startingRate: '12.00',
//     rateDisplay: '12.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '12.00%' }],
//     purpose: 'Small personal loan for immediate needs',
//   },

//   // ── Gold / Secured ──
//   {
//     id: 16,
//     category: 'Gold & Secured',
//     name: 'Gold Loan Upto ₹2.50 Lakh (Bullet)',
//     emoji: '🪙',
//     maxLimit: '₹2.50 Lakh',
//     period: '12 Months',
//     processing: '₹2,000',
//     startingRate: '9.00',
//     rateDisplay: '9.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '9.00%' }],
//     purpose: 'Loan against gold jewellery, bullet repayment',
//   },
//   {
//     id: 17,
//     category: 'Gold & Secured',
//     name: 'Gold Loan ₹2.50L – ₹5L (EMI)',
//     emoji: '🥇',
//     maxLimit: '₹5 Lakh',
//     period: '36 Months',
//     processing: '₹5,000',
//     startingRate: '9.00',
//     rateDisplay: '9.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '9.00%' }],
//     purpose: 'Loan against gold jewellery, repay in EMI',
//   },
//   {
//     id: 18,
//     category: 'Gold & Secured',
//     name: 'Gold Loan ₹5L – ₹25L (EMI)',
//     emoji: '🏅',
//     maxLimit: '₹25 Lakh',
//     period: '48 Months',
//     processing: '₹10,000',
//     startingRate: '9.50',
//     rateDisplay: '9.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '9.50%' }],
//     purpose: 'Higher gold loan amount, repay in EMI',
//   },
//   {
//     id: 19,
//     category: 'Gold & Secured',
//     name: 'Loan Against Life Insurance',
//     emoji: '🛡️',
//     maxLimit: 'Upto Exposure',
//     period: '36 Months',
//     processing: '2.5% + ₹200',
//     startingRate: '11.00',
//     rateDisplay: '11.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '11.00%' }],
//     purpose: 'Loan against life insurance policy',
//   },
//   {
//     id: 20,
//     category: 'Gold & Secured',
//     name: 'Cash Credit Against FD',
//     emoji: '🏦',
//     maxLimit: 'Upto Exposure',
//     period: 'FD Due Date',
//     processing: '—',
//     startingRate: null,
//     rateDisplay: 'FD Rate + 2% p.a.',
//     rateDetails: [{ label: 'Rate', rate: 'FD Rate + 2%' }],
//     purpose: 'Overdraft / credit against your fixed deposit',
//   },
//   {
//     id: 21,
//     category: 'Gold & Secured',
//     name: 'Loan Against FD (Term Loan)',
//     emoji: '📋',
//     maxLimit: 'Upto Exposure',
//     period: 'FD Due Date',
//     processing: '—',
//     startingRate: null,
//     rateDisplay: 'FD Rate + 2% p.a.',
//     rateDetails: [{ label: 'Rate', rate: 'FD Rate + 2%' }],
//     purpose: 'Term loan against your fixed deposit',
//   },

//   // ── Commercial ──
//   {
//     id: 22,
//     category: 'Commercial',
//     name: '3 Wheeler (Auto / Tempo / E-Auto)',
//     emoji: '🛺',
//     maxLimit: '₹3 Lakh',
//     period: '48 Months',
//     processing: '2.50%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% (ITR) / 10.50% (Declaration)',
//     rateDetails: [
//       { label: 'With ITR',         rate: '10.00%' },
//       { label: 'With Declaration', rate: '10.50%' },
//     ],
//     purpose: 'Purchase of new 3-wheeler commercial vehicle',
//   },
//   {
//     id: 23,
//     category: 'Commercial',
//     name: 'New Commercial Vehicle',
//     emoji: '🚛',
//     maxLimit: '₹50 Lakh',
//     period: '5 to 7 Years',
//     processing: '2.50%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Purchase new commercial car, jeep or transport vehicle',
//   },
//   {
//     id: 24,
//     category: 'Commercial',
//     name: 'Janaseva Udyog Vastu Karj Yojana',
//     emoji: '🏪',
//     maxLimit: 'Upto Exposure',
//     period: 'Up to 10 Years',
//     processing: '2.50%',
//     startingRate: '9.50',
//     rateDisplay: '9.50% (A Rating) / 10.00% (Others)',
//     rateDetails: [
//       { label: 'A Rating', rate: '9.50%' },
//       { label: 'Others',   rate: '10.00%' },
//     ],
//     purpose: 'Buy shop, godown or office space for your business',
//   },
//   {
//     id: 25,
//     category: 'Commercial',
//     name: 'Cash Credit Secured General',
//     emoji: '💳',
//     maxLimit: 'Upto Exposure',
//     period: '12 Months (renewable)',
//     processing: '0.75%',
//     startingRate: '11.50',
//     rateDisplay: '11.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '11.50%' }],
//     purpose: 'Working capital for your business (cash credit)',
//   },
//   {
//     id: 26,
//     category: 'Commercial',
//     name: 'Machinery Loan',
//     emoji: '⚙️',
//     maxLimit: 'Upto Exposure',
//     period: '5 to 10 Years',
//     processing: '1.00%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Purchase new or used machinery for your business',
//   },
//   {
//     id: 27,
//     category: 'Commercial',
//     name: 'Trade Pack Loan (for Traders)',
//     emoji: '🏬',
//     maxLimit: '₹50 Lakh',
//     period: 'TL: 5–10Y / CC: 12M',
//     processing: '1.00%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'For traders to buy land, shop, godown & working capital',
//   },
//   {
//     id: 28,
//     category: 'Commercial',
//     name: 'ProSelf Loan',
//     emoji: '👨‍💼',
//     maxLimit: 'TL ₹10L / CC ₹2L',
//     period: 'TL: 5–10Y / CC: 12M',
//     processing: '2.50%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'For professionals – doctors, lawyers, engineers, etc.',
//   },
//   {
//     id: 29,
//     category: 'Commercial',
//     name: 'Janaseva Start Up (MSME) Finance',
//     emoji: '🚀',
//     maxLimit: 'Upto Exposure',
//     period: 'CC: 12M / TL: 7Y / Shed: 10Y',
//     processing: '1.00%',
//     startingRate: '10.00',
//     rateDisplay: '10.00% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '10.00%' }],
//     purpose: 'Working capital, machinery, shed for new MSME business',
//   },
//   {
//     id: 30,
//     category: 'Commercial',
//     name: 'Janaseva Solar Scheme',
//     emoji: '☀️',
//     maxLimit: 'Personal ₹25L / Business ₹50L',
//     period: '6 Years',
//     processing: '2.50%',
//     startingRate: '9.50',
//     rateDisplay: '9.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '9.50%' }],
//     purpose: 'Install solar panels at home or business premises',
//   },
//   {
//     id: 31,
//     category: 'Commercial',
//     name: 'Property Loan / Builder Finance',
//     emoji: '🏗️',
//     maxLimit: 'Upto Exposure',
//     period: '3 to 5 Years',
//     processing: '2.50%',
//     startingRate: '12.50',
//     rateDisplay: '12.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '12.50%' }],
//     purpose: 'Construction of commercial or residential project',
//   },
//   {
//     id: 32,
//     category: 'Commercial',
//     name: 'Janaseva Saral Karj Yojana (LAP)',
//     emoji: '🏡',
//     maxLimit: 'Upto Exposure',
//     period: 'Up to 10 Years',
//     processing: '2.50%',
//     startingRate: '12.50',
//     rateDisplay: '12.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '12.50%' }],
//     purpose: 'Loan against your property for any purpose',
//   },
//   {
//     id: 33,
//     category: 'Commercial',
//     name: 'Rent Discounting',
//     emoji: '🔑',
//     maxLimit: 'Upto Exposure',
//     period: 'Up to 10 Years',
//     processing: '2.50%',
//     startingRate: '12.50',
//     rateDisplay: '12.50% p.a.',
//     rateDetails: [{ label: 'Flat Rate', rate: '12.50%' }],
//     purpose: 'Loan against future rental income of your property',
//   },
// ];

// const CATEGORIES = ['All', 'Housing', 'Vehicle', 'Education', 'Personal', 'Gold & Secured', 'Commercial'];

// const CAT_COLORS = {
//   'Housing':      { pill: 'bg-blue-100 text-blue-700',    dot: 'bg-blue-500',    light: 'bg-blue-50'    },
//   'Vehicle':      { pill: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500', light: 'bg-orange-50'  },
//   'Education':    { pill: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500', light: 'bg-emerald-50' },
//   'Personal':     { pill: 'bg-violet-100 text-violet-700', dot: 'bg-violet-500', light: 'bg-violet-50'  },
//   'Gold & Secured': { pill: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500', light: 'bg-amber-50'    },
//   'Commercial':   { pill: 'bg-[#1e3163]/10 text-[#1e3163]', dot: 'bg-[#1e3163]', light: 'bg-[#eef8ff]' },
// };

// const getRateColor = (rate) => {
//   const n = parseFloat(rate);
//   if (isNaN(n)) return 'text-slate-600 bg-slate-100';
//   if (n < 9)    return 'text-blue-700 bg-blue-100';
//   if (n < 10)   return 'text-emerald-700 bg-emerald-100';
//   if (n < 12)   return 'text-amber-700 bg-amber-100';
//   return 'text-red-700 bg-red-100';
// };

// // ── Loan Card ─────────────────────────────────────────────────────────────────

// const LoanCard = ({ loan }) => {
//   const [open, setOpen] = useState(false);
//   const cat = CAT_COLORS[loan.category] || CAT_COLORS['Commercial'];

//   return (
//     <div className="bg-white rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">

//       {/* Main visible row */}
//       <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4">

//         {/* Emoji icon */}
//         <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-md ${cat.light} flex items-center justify-center text-2xl sm:text-3xl`}>
//           {loan.emoji}
//         </div>

//         {/* Name + category + purpose */}
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center gap-2 mb-0.5 flex-wrap">
//             <h3 className="text-sm sm:text-base font-bold text-[#1e3163] leading-snug">
//               {loan.name}
//             </h3>
//             <span className={`hidden sm:inline-block text-sm font-bold px-2 py-0.5 rounded-full shrink-0 ${cat.pill}`}>
//               {loan.category}
//             </span>
//           </div>
//           <p className="text-xs text-slate-400 leading-snug line-clamp-1">{loan.purpose}</p>

//           {/* Key info pills — mobile friendly */}
//           <div className="flex flex-wrap gap-2 mt-2">
//             <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg">
//               💰 Max: {loan.maxLimit}
//             </span>
//             <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg">
//               ⏱ {loan.period}
//             </span>
//             <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg">
//               🏷 Processing: {loan.processing}
//             </span>
//           </div>
//         </div>

//         {/* Rate + toggle */}
//         <div className="shrink-0 flex flex-col items-end gap-2">
//           <div className="text-right">
//             <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Interest Rate</p>
//             <p className={`text-base sm:text-lg font-extrabold ${loan.startingRate ? getRateColor(loan.startingRate).split(' ')[0] : 'text-slate-600'}`}>
//               {loan.startingRate ? `${loan.startingRate}%` : 'FD+2%'}
//             </p>
//             <p className="text-sm text-slate-400">p.a. onwards</p>
//           </div>
//           <button
//             onClick={() => setOpen(o => !o)}
//             className="flex items-center gap-1 text-[10px] font-bold text-[#1e3163] bg-[#eef8ff] hover:bg-[#1e3163] hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-150"
//           >
//             {open ? 'Hide' : 'Details'}
//             {open ? <FiChevronUp size={11} /> : <FiChevronDown size={11} />}
//           </button>
//         </div>
//       </div>

//       {/* Expanded detail panel */}
//       {open && (
//         <div className="border-t border-slate-100 bg-slate-50 px-4 sm:px-5 py-4">

//           {/* Rate breakdown table */}
//           <p className="text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-2">
//             📊 Interest Rate Breakdown
//           </p>
//           <div className="space-y-1.5 mb-4">
//             {loan.rateDetails.map((r, i) => (
//               <div key={i} className="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-slate-100">
//                 <span className="text-xs sm:text-sm text-slate-600 font-medium">{r.label}</span>
//                 <span className={`text-sm sm:text-base font-extrabold px-3 py-1 rounded-xl ${getRateColor(r.rate)}`}>
//                   {r.rate}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Extra note */}
//           {loan.note && (
//             <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 mb-3">
//               <span className="text-base">✦</span>
//               <p className="text-xs text-emerald-700 font-semibold">{loan.note}</p>
//             </div>
//           )}

//           {/* Purpose */}
//           <div className="flex items-start gap-2 bg-[#eef8ff] border border-[#1e3163]/10 rounded-xl px-3 py-2.5">
//             <FiInfo className="text-[#1e3163] text-sm shrink-0 mt-0.5" />
//             <p className="text-xs text-[#1e3163]/70 leading-relaxed">
//               <span className="font-bold text-[#1e3163]">Purpose: </span>
//               {loan.purpose}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ── Main Component ─────────────────────────────────────────────────────────────

// const LoanRate = () => {
//   const [search,   setSearch]   = useState('');
//   const [category, setCategory] = useState('All');

//   const filtered = allLoans.filter(l => {
//     const matchCat    = category === 'All' || l.category === category;
//     const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
//                         l.purpose.toLowerCase().includes(search.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <div className="bg-[#eef8ff] min-h-screen py-10 sm:py-12 px-4">
//       <div className="max-w-[1200px] mx-auto">

//         {/* ══ HEADER ══ */}
//         <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] rounded-md px-6 sm:px-10 py-8 mb-8 overflow-hidden shadow-xl">
//           <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
//           <div className="absolute right-16 bottom-0 w-32 h-32 rounded-full bg-[#f47012]/15" />

//           <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
//             <div>
//               <div className="inline-flex items-center gap-1.5 bg-[#f47012]/25 text-[#f47012] text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3">
//                 📋 Official Rate Chart
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
//                 Loan Interest Rates
//               </h1>
//               <p className="text-white/60 text-sm">
//                 Janaseva Sahakari Bank Ltd. · Effective <strong className="text-white/80">05 March 2026</strong>
//               </p>
//             </div>
//             <div className="flex gap-3 flex-wrap">
//               {[
//                 { v: allLoans.length, l: 'Total Loans'   },
//                 { v: '7.50%',        l: 'Lowest Rate'   },
//                 { v: '6',            l: 'Categories'    },
//               ].map((s, i) => (
//                 <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-center min-w-[72px]">
//                   <p className="text-white font-extrabold text-lg leading-none">{s.v}</p>
//                   <p className="text-white/50 text-sm uppercase font-semibold mt-1">{s.l}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ══ SEARCH + FILTER ══ */}
//         <div className="bg-white rounded-md border border-slate-100 shadow-sm px-4 sm:px-5 py-4 mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center gap-3">

//             {/* Search */}
//             <div className="relative w-full sm:w-72 shrink-0">
//               <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
//               <input
//                 type="text"
//                 placeholder="Search by loan name or purpose..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-[#eef8ff] text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1e3163] transition-colors"
//               />
//             </div>

//             {/* Category tabs */}
//             <div className="flex gap-2 overflow-x-auto pb-0.5 flex-1">
//               {CATEGORIES.map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setCategory(cat)}
//                   className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-150
//                     ${category === cat
//                       ? 'bg-[#1e3163] border-[#1e3163] text-white shadow-sm'
//                       : 'bg-white border-slate-200 text-slate-500 hover:border-[#1e3163]/30 hover:text-[#1e3163]'
//                     }`}
//                 >
//                   {cat === 'Gold & Secured' ? '🪙 Gold' : cat}
//                 </button>
//               ))}
//             </div>

//             <span className="text-xs text-slate-400 shrink-0 sm:ml-auto">
//               {filtered.length} loan{filtered.length !== 1 ? 's' : ''}
//             </span>
//           </div>
//         </div>

//         {/* ══ RATE LEGEND ══ */}
//         <div className="flex flex-wrap items-center gap-2 mb-5">
//           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rate colour guide:</span>
//           {[
//             { label: 'Below 9%', cls: 'bg-blue-100 text-blue-700'       },
//             { label: '9%–10%',   cls: 'bg-emerald-100 text-emerald-700' },
//             { label: '10%–12%',  cls: 'bg-amber-100 text-amber-700'     },
//             { label: '12%+',     cls: 'bg-red-100 text-red-700'         },
//           ].map((b, i) => (
//             <span key={i} className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${b.cls}`}>
//               {b.label}
//             </span>
//           ))}
//         </div>

//         {/* ══ LOAN CARDS ══ */}
//         {filtered.length === 0 ? (
//           <div className="bg-white rounded-md border border-slate-100 py-16 text-center shadow-sm">
//             <p className="text-4xl mb-3">🔍</p>
//             <p className="text-slate-500 font-semibold">No loans found.</p>
//             <p className="text-slate-400 text-sm mt-1">Try a different search or category.</p>
//           </div>
//         ) : (
//           <div className="flex flex-col gap-3">
//             {filtered.map(loan => (
//               <LoanCard key={loan.id} loan={loan} />
//             ))}
//           </div>
//         )}

//         {/* ══ DISCLAIMER ══ */}
//         <div className="mt-8 bg-white rounded-md border border-[#f47012]/15 px-5 py-4 flex items-start gap-3 shadow-sm">
//           <FiInfo className="text-[#f47012] shrink-0 mt-0.5" size={15} />
//           <p className="text-xs text-slate-500 leading-relaxed">
//             <strong className="text-[#1e3163]">Note: </strong>
//             All interest rates are per annum. Rates are subject to change as per RBI / Board directives.
//             Final rate depends on your CIBIL score, loan amount, and purpose.
//             Contact your nearest branch for exact rates. Effective: <strong>05 March 2026</strong>.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default LoanRate;



// import React, { useState } from 'react';
// import { FiSearch, FiPercent, FiInfo } from 'react-icons/fi';
// import {
//   MdHouse, MdDirectionsCar, MdTwoWheeler, MdSchool, MdPerson,
//   MdBusinessCenter, MdAccountBalance, MdLocalShipping, MdPrecisionManufacturing,
//   MdSolarPower, MdApartment, MdKey, MdGroup, MdVerified, MdStar,
//   MdShield, MdBusiness,
// } from 'react-icons/md';

// // ── Icon map per loan ─────────────────────────────────────────────────────────

// const retailLoans = [
//   { sr: 1,  icon: MdHouse,                  name: 'Janaseva Gharkul Loan Scheme',               rate: '7.50% – 9.00%'   },
//   { sr: 2,  icon: MdApartment,              name: 'Housing Loan under CRE',                     rate: '10.50%'          },
//   { sr: 3,  icon: MdHouse,                  name: 'Janaseva Home Decore',                        rate: '10.50%'          },
//   { sr: 4,  icon: MdHouse,                  name: 'Janaseva Gharkul Top Up',                     rate: '10.00%'          },
//   { sr: 5,  icon: MdDirectionsCar,          name: 'New Four Wheeler Loan',                        rate: '8.25% – 9.00%'  },
//   { sr: 6,  icon: MdTwoWheeler,             name: 'Two Wheeler Loan',                             rate: '9.85% – 10.15%' },
//   { sr: 7,  icon: MdDirectionsCar,          name: 'Resale 4 Wheeler',                             rate: '11.00%'         },
//   { sr: 8,  icon: MdSchool,                 name: 'Janaseva Educational Secured Loan',             rate: '8.90% – 9.25%'  },
//   { sr: 9,  icon: MdSchool,                 name: 'Education Loan for Coaching (Unsecured)',       rate: '11.00%'         },
//   { sr: 10, icon: MdSchool,                 name: 'Unsecured Education Loan',                      rate: '10.00%'         },
//   { sr: 11, icon: MdPerson,                 name: 'Personal Loan Scheme',                          rate: '12.00% – 13.00%'},
//   { sr: 12, icon: MdAccountBalance,         name: 'Consumer Loan (Durable / Furniture)',            rate: '10.00%'         },
//   { sr: 13, icon: MdAccountBalance,         name: 'Consumer Loan (Housing Furniture)',              rate: '10.00%'         },
//   { sr: 14, icon: MdGroup,                  name: 'Group Loan',                                    rate: '9.75%'          },
//   { sr: 15, icon: MdPerson,                 name: 'Janvikas Loan Scheme',                          rate: '12.00%'         },
//   { sr: 16, icon: MdStar,                   name: 'Gold Loan Upto ₹2.50 Lakh (Bullet)',            rate: '9.00%'          },
//   { sr: 17, icon: MdStar,                   name: 'Gold Loan ₹2.50L – ₹5L (EMI)',                rate: '9.00%'          },
//   { sr: 18, icon: MdStar,                   name: 'Gold Loan ₹5L – ₹25L (EMI)',                  rate: '9.50%'          },
//   { sr: 19, icon: MdShield,                 name: 'Loan Against Life Insurance Policies',          rate: '11.00%'         },
//   { sr: 20, icon: MdVerified,               name: 'Government Secured Loan',                       rate: '11.00%'         },
//   { sr: 21, icon: MdAccountBalance,         name: 'Cash Credit Against FD (FDCC)',                 rate: 'FD Rate + 2%'   },
//   { sr: 22, icon: MdAccountBalance,         name: 'Loan Against FD – Term Loan (FDTL)',           rate: 'FD Rate + 2%'   },
// ];

// const commercialLoans = [
//   { sr: 1,  icon: MdLocalShipping,          name: '3 Wheeler (Auto / Tempo / E-Auto)',              rate: '10.00% / 10.50%'},
//   { sr: 2,  icon: MdLocalShipping,          name: 'New Commercial Vehicle (Car / Jeep / Transport)',rate: '10.00%'         },
//   { sr: 3,  icon: MdBusiness,               name: 'Janaseva Udyog Vastu Karj Yojana',               rate: '9.50% – 10.00%' },
//   { sr: 4,  icon: MdBusinessCenter,         name: 'Cash Credit Secured General',                    rate: '11.50%'         },
//   { sr: 6,  icon: MdPrecisionManufacturing, name: 'Machinery Loan',                                  rate: '10.00%'         },
//   { sr: 7,  icon: MdBusinessCenter,         name: 'Hypothecation Loan',                              rate: '11.50%'         },
//   { sr: 8,  icon: MdBusinessCenter,         name: 'Trade Pack Loan (for Traders)',                   rate: '10.00%'         },
//   { sr: 9,  icon: MdPerson,                 name: 'ProSelf Loan',                                    rate: '10.00%'         },
//   { sr: 10, icon: MdApartment,              name: 'Hospital / Educational Institute Loan',           rate: '10.00%'         },
//   { sr: 11, icon: MdPrecisionManufacturing, name: 'Janaseva Start Up (MSME) Finance',                rate: '10.00%'         },
//   { sr: 12, icon: MdSolarPower,             name: 'Janaseva Solar Scheme',                           rate: '9.50%'          },
//   { sr: 13, icon: MdApartment,              name: 'Property Loan / Builder Finance',                 rate: '12.50%'         },
//   { sr: 14, icon: MdKey,                    name: 'Janaseva Saral Karj Yojana (Loan Against Property)', rate: '12.50%'     },
//   { sr: 15, icon: MdKey,                    name: 'Rent Discounting',                                rate: '12.50%'         },
//   { sr: 16, icon: MdBusinessCenter,         name: 'Janaseva Saral Overdraft Loan Scheme',            rate: '12.50%'         },
// ];

// // ── Rate badge colour ─────────────────────────────────────────────────────────

// const getRateStyle = (rate) => {
//   const n = parseFloat(rate);
//   if (isNaN(n))  return { pill: 'bg-slate-100 text-slate-600 border-slate-200',  icon: 'text-slate-400' };
//   if (n < 9)     return { pill: 'bg-blue-50 text-blue-700 border-blue-200',      icon: 'text-blue-400'  };
//   if (n < 10)    return { pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'text-emerald-500' };
//   if (n < 12)    return { pill: 'bg-amber-50 text-amber-700 border-amber-200',   icon: 'text-amber-500' };
//   return          { pill: 'bg-red-50 text-red-700 border-red-200',               icon: 'text-red-400'   };
// };

// // ── Single row ────────────────────────────────────────────────────────────────

// const LoanRow = ({ loan, isEven, accent }) => {
//   const Icon  = loan.icon;
//   const style = getRateStyle(loan.rate);
//   const iconBg = accent === 'orange'
//     ? 'bg-[#f47012]/10 text-[#f47012]'
//     : 'bg-[#1e3163]/8 text-[#1e3163]';

//   return (
//     <div className={`flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-3.5 border-b border-slate-100 last:border-none transition-colors duration-150 hover:bg-[#eef8ff]
//       ${isEven ? 'bg-white' : 'bg-slate-50/40'}`}
//     >
//       {/* Sr No */}
//       <span className="shrink-0 w-6 sm:w-7 text-center text-[10px] sm:text-xs font-bold text-slate-300 font-mono">
//         {String(loan.sr).padStart(2, '0')}
//       </span>

//       {/* Icon */}
//       <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
//         <Icon size={16} className="sm:text-[18px]" />
//       </div>

//       {/* Name */}
//       <p className="flex-1 text-xs sm:text-sm font-semibold text-slate-800 leading-snug min-w-0 pr-2">
//         {loan.name}
//       </p>

//       {/* Rate badge */}
//       <div className={`shrink-0 flex items-center gap-1 border rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 ${style.pill}`}>
//         <FiPercent size={10} className={`hidden sm:block ${style.icon}`} />
//         <span className="text-xs sm:text-sm font-extrabold whitespace-nowrap">{loan.rate}</span>
//       </div>
//     </div>
//   );
// };

// // ── Table block ───────────────────────────────────────────────────────────────

// const LoanTable = ({ title, subtitle, loans, headerBg, headerIcon, accent, search }) => {
//   const HeaderIcon = headerIcon;
//   const filtered   = loans.filter(l =>
//     l.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-white rounded-md overflow-hidden border border-slate-200 shadow-sm">

//       {/* Header */}
//       <div className={`${headerBg} px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-3`}>
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
//             <HeaderIcon size={20} />
//           </div>
//           <div>
//             <h2 className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-tight">
//               {title}
//             </h2>
//             <p className="text-white/60 text-[10px] sm:text-xs font-medium mt-0.5 hidden sm:block">{subtitle}</p>
//           </div>
//         </div>
//         <span className="shrink-0 bg-white/20 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
//           {filtered.length} Schemes
//         </span>
//       </div>

//       {/* Column labels */}
//       <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-2.5 bg-slate-50 border-b border-slate-200">
//         <span className="w-6 sm:w-7 text-sm font-bold text-slate-400 uppercase tracking-widest text-center shrink-0">Sr.</span>
//         <span className="w-8 sm:w-10 shrink-0" />
//         <span className="flex-1 text-sm font-bold text-slate-400 uppercase tracking-widest">Loan Scheme</span>
//         <span className="shrink-0 text-sm font-bold text-slate-400 uppercase tracking-widest pr-1">Rate p.a.</span>
//       </div>

//       {/* Rows */}
//       {filtered.length === 0 ? (
//         <div className="py-12 text-center text-slate-400 text-sm">No results found.</div>
//       ) : (
//         filtered.map((loan, i) => (
//           <LoanRow key={loan.sr} loan={loan} isEven={i % 2 === 0} accent={accent} />
//         ))
//       )}
//     </div>
//   );
// };

// // ── Main Component ─────────────────────────────────────────────────────────────

// const LoanRate = () => {
//   const [search, setSearch] = useState('');

//   return (
//     <div className="bg-[#eef8ff] min-h-screen py-10 sm:py-12 px-4">
//       <div className="max-w-[1200px] mx-auto">

//         {/* ── Page Header ── */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-2 bg-[#1e3163] text-[#f47012] text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-4">
//             <FiPercent size={11} />
//             Official Rate Chart
//           </div>
//           <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1e3163] tracking-tight mb-2">
//             Loan Interest Rates
//           </h1>
//           <p className="text-slate-500 text-xs sm:text-sm">
//             Janaseva Sahakari Bank Ltd., Hadapsar, Pune
//             &nbsp;·&nbsp;
//             Effective <strong className="text-[#1e3163]">05 March 2026</strong>
//           </p>
//         </div>

//         {/* ── Search ── */}
//         <div className="relative max-w-sm mx-auto mb-7">
//           <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
//           <input
//             type="text"
//             placeholder="Search loan scheme..."
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1e3163] shadow-sm transition-colors"
//           />
//         </div>

//         {/* ── Rate Legend ── */}
//         <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
//           <span className="text-sm sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rate Guide:</span>
//           {[
//             { l: 'Below 9%',  c: 'bg-blue-50 text-blue-700 border-blue-200'           },
//             { l: '9% – 10%',  c: 'bg-emerald-50 text-emerald-700 border-emerald-200'  },
//             { l: '10% – 12%', c: 'bg-amber-50 text-amber-700 border-amber-200'        },
//             { l: '12%+',      c: 'bg-red-50 text-red-700 border-red-200'              },
//             { l: 'Variable',  c: 'bg-slate-100 text-slate-600 border-slate-200'       },
//           ].map((b, i) => (
//             <span key={i} className={`text-sm sm:text-[10px] font-bold px-2.5 py-1 rounded-full border ${b.c}`}>
//               {b.l}
//             </span>
//           ))}
//         </div>

//         {/* ── Tables ── */}
//         <div className="flex flex-col gap-8">
//           <LoanTable
//             title="Retail Loans"
//             subtitle="Personal, housing, vehicle, education & gold loans"
//             loans={retailLoans}
//             headerBg="bg-[#1e3163]"
//             headerIcon={MdPerson}
//             accent="navy"
//             search={search}
//           />
//           <LoanTable
//             title="Commercial Loans"
//             subtitle="Business, commercial vehicle, MSME & property loans"
//             loans={commercialLoans}
//             headerBg="bg-[#f47012]"
//             headerIcon={MdBusinessCenter}
//             accent="orange"
//             search={search}
//           />
//         </div>

//         {/* ── Note ── */}
//         <div className="mt-8 flex items-start gap-2 bg-white border border-[#f47012]/20 rounded-md px-4 sm:px-5 py-3.5 shadow-sm">
//           <FiInfo className="text-[#f47012] shrink-0 mt-0.5" size={14} />
//           <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
//             <strong className="text-[#1e3163]">Note: </strong>
//             Rates are per annum and subject to change as per RBI / Board directives.
//             Final rate depends on CIBIL score and loan amount.
//             Contact your nearest branch for the latest rates.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default LoanRate;














import React, { useState } from 'react';
import { FiPercent, FiInfo } from 'react-icons/fi';
import {
    MdHouse, MdDirectionsCar, MdTwoWheeler, MdSchool, MdPerson,
    MdBusinessCenter, MdAccountBalance, MdLocalShipping, MdPrecisionManufacturing,
    MdSolarPower, MdApartment, MdKey, MdGroup, MdVerified, MdStar,
    MdShield, MdBusiness,
} from 'react-icons/md';

// ── Icon map per loan ─────────────────────────────────────────────────────────

const retailLoans = [
    { sr: 1, icon: MdHouse, name: 'Janaseva Gharkul Loan Scheme', rate: '7.50% – 9.00%' },
    { sr: 2, icon: MdApartment, name: 'Housing Loan under CRE', rate: '10.50%' },
    { sr: 3, icon: MdHouse, name: 'Janaseva Home Decore', rate: '10.50%' },
    { sr: 4, icon: MdHouse, name: 'Janaseva Gharkul Top Up', rate: '10.00%' },
    { sr: 5, icon: MdDirectionsCar, name: 'New Four Wheeler Loan', rate: '8.25% – 9.00%' },
    { sr: 6, icon: MdTwoWheeler, name: 'Two Wheeler Loan', rate: '9.85% – 10.15%' },
    { sr: 7, icon: MdDirectionsCar, name: 'Resale 4 Wheeler', rate: '11.00%' },
    { sr: 8, icon: MdSchool, name: 'Janaseva Educational Secured Loan', rate: '8.90% – 9.25%' },
    { sr: 9, icon: MdSchool, name: 'Education Loan for Coaching (Unsecured)', rate: '11.00%' },
    { sr: 10, icon: MdSchool, name: 'Unsecured Education Loan', rate: '10.00%' },
    { sr: 11, icon: MdPerson, name: 'Personal Loan Scheme', rate: '12.00% – 13.00%' },
    { sr: 12, icon: MdAccountBalance, name: 'Consumer Loan (Durable / Furniture)', rate: '10.00%' },
    { sr: 13, icon: MdAccountBalance, name: 'Consumer Loan (Housing Furniture)', rate: '10.00%' },
    { sr: 14, icon: MdGroup, name: 'Group Loan', rate: '9.75%' },
    { sr: 15, icon: MdPerson, name: 'Janvikas Loan Scheme', rate: '12.00%' },
    { sr: 16, icon: MdStar, name: 'Gold Loan Upto ₹2.50 Lakh (Bullet)', rate: '9.00%' },
    { sr: 17, icon: MdStar, name: 'Gold Loan ₹2.50L – ₹5L (EMI)', rate: '9.00%' },
    { sr: 18, icon: MdStar, name: 'Gold Loan ₹5L – ₹25L (EMI)', rate: '9.50%' },
    { sr: 19, icon: MdShield, name: 'Loan Against Life Insurance Policies', rate: '11.00%' },
    { sr: 20, icon: MdVerified, name: 'Government Secured Loan', rate: '11.00%' },
    { sr: 21, icon: MdAccountBalance, name: 'Cash Credit Against FD (FDCC)', rate: 'FD Rate + 2%' },
    { sr: 22, icon: MdAccountBalance, name: 'Loan Against FD – Term Loan (FDTL)', rate: 'FD Rate + 2%' },
];

const commercialLoans = [
    { sr: 1, icon: MdLocalShipping, name: '3 Wheeler (Auto / Tempo / E-Auto)', rate: '10.00% / 10.50%' },
    { sr: 2, icon: MdLocalShipping, name: 'New Commercial Vehicle (Car / Jeep / Transport)', rate: '10.00%' },
    { sr: 3, icon: MdBusiness, name: 'Janaseva Udyog Vastu Karj Yojana', rate: '9.50% – 10.00%' },
    { sr: 4, icon: MdBusinessCenter, name: 'Cash Credit Secured General', rate: '11.50%' },
    //   { sr: 5,  icon: MdBusinessCenter,         name: 'Loan Against Warehouse Receipt / Pledge',         rate: '11.50%'         },
    { sr: 5, icon: MdPrecisionManufacturing, name: 'Machinery Loan', rate: '10.00%' },
    { sr: 6, icon: MdBusinessCenter, name: 'Hypothecation Loan', rate: '11.50%' },
    { sr: 7, icon: MdBusinessCenter, name: 'Trade Pack Loan (for Traders)', rate: '10.00%' },
    { sr: 8, icon: MdPerson, name: 'ProSelf Loan', rate: '10.00%' },
    { sr: 9, icon: MdApartment, name: 'Hospital / Educational Institute Loan', rate: '10.00%' },
    { sr: 10, icon: MdPrecisionManufacturing, name: 'Janaseva Start Up (MSME) Finance', rate: '10.00%' },
    { sr: 11, icon: MdSolarPower, name: 'Janaseva Solar Scheme', rate: '9.50%' },
    { sr: 12, icon: MdApartment, name: 'Property Loan / Builder Finance', rate: '12.50%' },
    { sr: 13, icon: MdKey, name: 'Janaseva Saral Karj Yojana (Loan Against Property)', rate: '12.50%' },
    { sr: 14, icon: MdKey, name: 'Rent Discounting', rate: '12.50%' },
    { sr: 15, icon: MdBusinessCenter, name: 'Janaseva Saral Overdraft Loan Scheme', rate: '12.50%' },
];

// ── Rate badge colour ─────────────────────────────────────────────────────────

const getRateStyle = (rate) => {
    const n = parseFloat(rate);
    if (isNaN(n)) return { pill: 'bg-slate-100 text-slate-600 border-slate-200', icon: 'text-slate-400' };
    if (n < 9) return { pill: 'bg-blue-50 text-blue-700 border-blue-200', icon: 'text-blue-400' };
    if (n < 10) return { pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'text-emerald-500' };
    if (n < 12) return { pill: 'bg-amber-50 text-amber-700 border-amber-200', icon: 'text-amber-500' };
    return { pill: 'bg-red-50 text-red-700 border-red-200', icon: 'text-red-400' };
};

// ── Single row ────────────────────────────────────────────────────────────────

const LoanRow = ({ loan, isEven, accent }) => {
    const Icon = loan.icon;
    const style = getRateStyle(loan.rate);
    const iconBg = accent === 'orange'
        ? 'bg-[#f47012]/10 text-[#f47012]'
        : 'bg-[#1e3163]/8 text-[#1e3163]';

    return (
        <div className={`flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-3.5 border-b border-slate-100 last:border-none transition-colors duration-150 hover:bg-[#eef8ff]
      ${isEven ? 'bg-white' : 'bg-slate-50/40'}`}
        >
            {/* Sr No */}
            <span className="shrink-0 w-6 sm:w-7 text-center text-[10px] sm:text-xs font-bold text-slate-300 ">
                {String(loan.sr).padStart(2, '0')}
            </span>

            {/* Icon */}
            <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
                <Icon size={16} className="sm:text-[18px]" />
            </div>

            {/* Name */}
            <p className="flex-1 text-xs sm:text-sm font-semibold text-slate-800 leading-snug min-w-0 pr-2">
                {loan.name}
            </p>

            {/* Rate badge */}
            <div className={`shrink-0 flex items-center gap-1 border rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 ${style.pill}`}>
                <FiPercent size={10} className={`hidden sm:block ${style.icon}`} />
                <span className="text-xs sm:text-sm font-extrabold whitespace-nowrap">{loan.rate}</span>
            </div>
        </div>
    );
};

// ── Table block ───────────────────────────────────────────────────────────────

const LoanTable = ({ title, subtitle, loans, headerBg, headerIcon, accent, search }) => {
    const HeaderIcon = headerIcon;
    const filtered = loans.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white rounded-md overflow-hidden border border-slate-200 shadow-sm">

            {/* Header */}
            <div className={`${headerBg} px-4 sm:px-7 py-3 sm:py-5 flex items-center justify-between gap-3`}>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                        <HeaderIcon size={20} />
                    </div>
                    <div>
                        <h2 className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-tight">
                            {title}
                        </h2>
                        <p className="text-white/60 text-[10px] sm:text-xs font-medium mt-0.5 hidden sm:block">{subtitle}</p>
                    </div>
                </div>
                <span className="shrink-0 bg-white/20 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    {filtered.length} Schemes
                </span>
            </div>

            {/* Column labels */}
            <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-2.5 bg-slate-50 border-b border-slate-200">
                <span className="w-6 sm:w-7 text-sm font-bold text-slate-400 uppercase text-center shrink-0">Sr.</span>
                <span className="w-8 sm:w-10 shrink-0" />
                <span className="flex-1 text-sm font-bold text-slate-400 uppercase">Loan Scheme</span>
                <span className="shrink-0 text-sm font-bold text-slate-400 uppercase pr-1">Rate p.a.</span>
            </div>

            {/* Rows */}
            {filtered.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-sm">No results found.</div>
            ) : (
                filtered.map((loan, i) => (
                    <LoanRow key={loan.sr} loan={loan} isEven={i % 2 === 0} accent={accent} />
                ))
            )}
        </div>
    );
};

// ── Main Component ─────────────────────────────────────────────────────────────

const LoanRate = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="bg-[#eef8ff] min-h-screen py-10 sm:py-12 px-4">
            <div className="max-w-[1200px] mx-auto">

                {/* ── Page Header ── */}
                {/* <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1e3163] text-[#f47012] text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-4">
            <FiPercent size={11} />
            Official Rate Chart
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1e3163] tracking-tight mb-2">
            Loan Interest Rates
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Janaseva Sahakari Bank Ltd., Hadapsar, Pune
            &nbsp;·&nbsp;
            Effective <strong className="text-[#1e3163]">05 March 2026</strong>
          </p>
        </div> */}

                {/* ── Search ── */}
                {/* <div className="relative max-w-sm mx-auto mb-7">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            placeholder="Search loan scheme..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1e3163] shadow-sm transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          <span className="text-sm sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rate Guide:</span>
          {[
            { l: 'Below 9%',  c: 'bg-blue-50 text-blue-700 border-blue-200'           },
            { l: '9% – 10%',  c: 'bg-emerald-50 text-emerald-700 border-emerald-200'  },
            { l: '10% – 12%', c: 'bg-amber-50 text-amber-700 border-amber-200'        },
            { l: '12%+',      c: 'bg-red-50 text-red-700 border-red-200'              },
            { l: 'Variable',  c: 'bg-slate-100 text-slate-600 border-slate-200'       },
          ].map((b, i) => (
            <span key={i} className={`text-sm sm:text-[10px] font-bold px-2.5 py-1 rounded-full border ${b.c}`}>
              {b.l}
            </span>
          ))}
        </div> */}

                {/* ── Tables — Left: Retail | Right: Commercial ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <LoanTable
                        title="Retail Loans"
                        subtitle="Personal, housing, vehicle, education & gold loans"
                        loans={retailLoans}
                        headerBg="bg-[#1e3163]"
                        headerIcon={MdPerson}
                        accent="navy"
                        search={search}
                    />
                    <LoanTable
                        title="Commercial Loans"
                        subtitle="Business, commercial vehicle, MSME & property loans"
                        loans={commercialLoans}
                        headerBg="bg-[#f47012]"
                        headerIcon={MdBusinessCenter}
                        accent="orange"
                        search={search}
                    />
                </div>

                {/* ── Note ── */}
                <div className="mt-8 flex items-start gap-2 bg-white border border-[#f47012]/20 rounded-md px-4 sm:px-5 py-3.5 shadow-sm">
                    <FiInfo className="text-[#f47012] shrink-0 mt-0.5" size={14} />
                    <p className="text-sm sm:text-xs text-slate-500 leading-relaxed">
                        <strong className="text-[#1e3163]">Note: </strong>
                        Vehicle and housing loan interest rates depend on your CIBIL score and may vary accordingly.
                        Commercial loan interest rates (ROI) start from 9% and are based on credit rating.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoanRate;