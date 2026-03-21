// import React from 'react';
// import { FaShieldAlt } from "react-icons/fa";
// import { GiIndiaGate } from "react-icons/gi";
// import { MdAccountBalance } from "react-icons/md";

// const insurancePlans = [
//     {
//         id: 1,
//         name: "Axis Max Life Insurance",
//         tagline: "Smart Life Cover",
//         icon: FaShieldAlt,
//         iconColor: "text-[#1e3163]",
//         description:
//             "Comprehensive life and health coverage with flexible premium options designed for every life stage.",
//         features: [
//             "Term life cover up to ₹10 Cr",
//             "Critical illness add-on rider",
//             "Waiver of premium benefit",
//             "Online claim settlement",
//         ],
//         accentColor: "from-[#1e3163] to-[#3a4f8f]",
//         iconBg: "bg-blue-50",
//         dotColor: "bg-[#1e3163]",
//         btnLabel: "View Plan",
//         link: "https://www.maxlifeinsurance.com/",
//     },
//     {
//         id: 2,
//         name: "Pradhan Mantri Jeevan Jyoti Yojana",
//         tagline: "Government Life Insurance",
//         icon: GiIndiaGate,
//         iconColor: "text-[#1e3163]",
//         description:
//             "India's flagship government scheme providing life insurance coverage to all citizens.",
//         features: [
//             "₹2 lakh life cover",
//             "Age group: 18–50 years",
//             "Auto-debit from bank account",
//             "Renewable annually",
//         ],
//         accentColor: "from-[#1e3163] to-[#3a4f8f]",
//         iconBg: "bg-blue-50",
//         dotColor: "bg-[#1e3163]",
//         btnLabel: "View Plan",
//         link: "https://www.myscheme.gov.in/schemes/pmjjby",
//     },
//     {
//         id: 3,
//         name: "HDFC Life Insurance",
//         tagline: "Premium Coverage",
//         icon: MdAccountBalance,
//         iconColor: "text-[#1e3163]",
//         description:
//             "Trusted by millions with strong insurance and investment solutions.",
//         features: [
//             "99.5% claim settlement ratio",
//             "ULIPs & savings plans",
//             "Retirement solutions",
//             "Child planning",
//         ],
//         accentColor: "from-[#1e3163] to-[#3a4f8f]",
//         iconBg: "bg-blue-50",
//         dotColor: "bg-[#1e3163]",
//         btnLabel: "View Plan",
//         link: "https://www.hdfclife.com/",
//     },
// ];

// const InsuranceCard = ({ plan }) => {
//     const Icon = plan.icon;

//     return (
//         <div className="relative rounded-xl  bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 group">

//             <div className="bg-white/90 rounded-xl p-6 flex flex-col h-full border border-gray-100 group-hover:scale-[1.02] transition-all duration-500">

//                 {/* Icon + Title */}
//                 <div className="flex items-center gap-4 mb-4">
//                     <div className={`p-3 rounded-xl text-xl shadow-sm ${plan.iconBg}`}>
//                         <Icon className={`${plan.iconColor} text-xl`} />
//                     </div>

//                     <div>
//                         <h3 className="font-semibold text-gray-900 text-lg">{plan.name}</h3>
//                         <p className="text-xs text-gray-400 uppercase tracking-wider">
//                             {plan.tagline}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                     {plan.description}
//                 </p>

//                 {/* Features */}
//                 <ul className="space-y-2 mb-5 flex-1">
//                     {plan.features.map((f, i) => (
//                         <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                             <span className={`w-2 h-2 rounded-full ${plan.dotColor}`} />
//                             {f}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Button */}
//                 <a
//                     href={plan.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`block text-center w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${plan.accentColor} hover:opacity-90 transition`}
//                 >
//                     {plan.btnLabel}
//                 </a>

//             </div>
//         </div>
//     );
// };

// const GenInsurance = () => {
//     return (
//         <div className=" bg-gray-200">

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 py-12 max-w-7xl mx-auto">
//                 {insurancePlans.map((plan) => (
//                     <InsuranceCard key={plan.id} plan={plan} />
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default GenInsurance;





















// import React, { useState } from 'react';

// const insurancePlans = [
//     {
//         id: 1,
//         name: "Axis Max Life Insurance",
//         tagline: "Smart Life Cover",
//         logo: "assets/images/insurance/axis.svg",
//         description:
//             "Comprehensive life insurance plans with flexible premium options, tax benefits, and guaranteed claim settlement — available exclusively to Janaseva Bank customers.",
//         plans: [
//             { label: "Term Insurance",       detail: "Pure protection up to ₹10 Cr" },
//             { label: "Child Insurance Plan", detail: "Secure your child's future" },
//             { label: "Retirement Plan",      detail: "Regular income post-retirement" },
//             { label: "Money Back Plan",      detail: "Periodic payouts + life cover" },
//             { label: "Unit Link Plan (ULIP)",detail: "Market-linked wealth creation" },
//             { label: "Protection Plans",     detail: "Flexible coverage options" },
//             { label: "Saving Plans",         detail: "Disciplined wealth building" },
//             { label: "Participating Plans",  detail: "Bonuses + life protection" },
//         ],
//         highlight: "99.51% Claim Settlement Ratio",
//         highlightIcon: "🏆",
//         accentFrom: "#97144D",
//         accentTo: "#c9184a",
//         badgeColor: "bg-rose-50 text-rose-700 border-rose-100",
//         link: "https://www.maxlifeinsurance.com/",
//         bankNote: "Available at all Janaseva Bank branches",
//     },
//     {
//         id: 2,
//         name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
//         tagline: "Government Life Scheme",
//         logo: "assets/images/insurance/gover.jpg",
       
//         description:
//             "India's flagship government life insurance scheme — auto-debited directly from your Janaseva Sahakari Bank savings account every year at just ₹436/year.",
//         plans: [
//             { label: "Pradhan Mantri Jeevan Jyoti", detail: "₹2 lakh life cover at ₹436/yr" },
//             { label: "Pradhan Mantri Suraksha",      detail: "₹2 lakh accident cover at ₹20/yr" },
//         ],
//         highlight: "Premium: Only ₹436 / Year",
//         highlightIcon: "🇮🇳",
//         accentFrom: "#1a5276",
//         accentTo: "#2471a3",
//         badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
//         link: "https://www.myscheme.gov.in/schemes/pmjjby",
//         bankNote: "Auto-debit from your Janaseva Bank account",
//     },
//     {
//         id: 3,
//         name: "HDFC Life Insurance",
//         tagline: "Premium Coverage",
//         logo: "assets/images/insurance/hdfc.png",
       
//         description:
//             "Trusted by millions of Indians — HDFC Life offers market-linked ULIPs, guaranteed savings, and comprehensive term & retirement plans with a 99.5% claim ratio.",
//         plans: [
//             { label: "Term Insurance",          detail: "Pure protection at low cost" },
//             { label: "Sampoorna Jeevan Plan",   detail: "Whole life + limited pay" },
//             { label: "Guaranteed Wealth Plan",  detail: "Assured returns + bonus" },
//             { label: "Money Back Plan",         detail: "Periodic survival benefits" },
//             { label: "Unit Link Plan (ULIP)",   detail: "Equity-linked wealth growth" },
//         ],
//         highlight: "99.5% Claim Settlement Ratio",
//         highlightIcon: "⭐",
//         accentFrom: "#e31837",
//         accentTo: "#b71c1c",
//         badgeColor: "bg-red-50 text-red-700 border-red-100",
//         link: "https://www.hdfclife.com/",
//         bankNote: "Apply instantly via Janaseva Bank",
//     },
// ];

// // ─── Logo Block — shows image if available, else a styled brand fallback ──────
// const LogoBlock = ({ plan }) => {
//     const [imgError, setImgError] = useState(false);

//     if (!imgError) {
//         return (
//             <div className="w-full h-[80px] rounded-xl flex items-center justify-center overflow-hidden mb-5 bg-white shadow-sm border border-slate-100">
//                 <img
//                     src={plan.logo}
//                     alt={plan.name}
//                     className="max-h-[56px] max-w-[170px] object-contain"
//                     onError={() => setImgError(true)}
//                 />
//             </div>
//         );
//     }

// };

// // ─── Insurance Card ────────────────────────────────────────────────────────────
// const InsuranceCard = ({ plan, isActive, onClick }) => (
//     <div
//         onClick={onClick}
//         className={`relative bg-white rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col
//             ${isActive
//                 ? "border-[#1e3163] shadow-xl shadow-[#1e3163]/10"
//                 : "border-slate-100 shadow-md hover:border-slate-300"
//             }`}
//     >
//         {/* Top accent bar */}
//         <div
//             className="h-1.5 w-full shrink-0"
//             style={{ background: `linear-gradient(90deg, ${plan.accentFrom}, ${plan.accentTo})` }}
//         />

//         <div className="p-6 flex flex-col flex-1">

//             {/* Logo */}
//             <LogoBlock plan={plan} />

//             {/* Name + tagline */}
//             <div className="mb-3">
//                 <h3 className="font-bold text-slate-800 text-base leading-snug mb-1.5">{plan.name}</h3>
//                 <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${plan.badgeColor}`}>
//                     {plan.tagline}
//                 </span>
//             </div>

//             {/* Description */}
//             <p className="text-sm text-slate-500 mb-4 leading-relaxed">{plan.description}</p>

//             {/* Highlight badge */}
//             <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 mb-4">
//                 <span className="text-base">{plan.highlightIcon}</span>
//                 <span className="text-xs font-semibold text-slate-700">{plan.highlight}</span>
//             </div>

//             {/* Plans list */}
//             <div className="mb-4 flex-1">
//                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Available Plans</p>
//                 <ul className="space-y-2">
//                     {plan.plans.map((p, i) => (
//                         <li key={i} className="flex items-start gap-2">
//                             <span
//                                 className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full"
//                                 style={{ background: plan.accentFrom }}
//                             />
//                             <div className="min-w-0">
//                                 <span className="text-sm font-medium text-slate-700">{p.label}</span>
//                                 {isActive && (
//                                     <p className="text-xs text-slate-400 mt-0.5">{p.detail}</p>
//                                 )}
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Bank note */}
//             <div className="flex items-center gap-1.5 mb-4">
//                 <span className="text-[11px] text-slate-400 italic">📍 {plan.bankNote}</span>
//             </div>

//             {/* CTA Button */}
//             <a
//                 href={plan.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={(e) => e.stopPropagation()}
//                 className="block text-center w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
//                 style={{ background: `linear-gradient(135deg, ${plan.accentFrom}, ${plan.accentTo})` }}
//             >
//                 View Plan →
//             </a>
//         </div>
//     </div>
// );

// // ─── Main Component ────────────────────────────────────────────────────────────
// const LifeInsurance = () => {
//     const [activeId, setActiveId] = useState(null);
//     const handleClick = (id) => setActiveId(activeId === id ? null : id);

//     return (
//         <div className="bg-slate-100 min-h-screen py-14 px-4">
//             <div className="max-w-[1200px] mx-auto">

//                 {/* ── Header ── */}
//                 <div className="text-center mb-12">
//                     <div className="inline-flex items-center gap-2 bg-[#1e3163] text-[#c9a84c] text-[11px] font-bold tracking-[2.5px] uppercase px-5 py-2 rounded-full mb-4">
//                         🛡️ Life Insurance Plans
//                     </div>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f47] tracking-tight mb-3">
//                         Protect Your Family's Future
//                     </h1>
//                     <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
//                         Janaseva Sahakari Bank, Hadapsar Pune is partnered with India's leading life insurance providers.
//                         Get covered through your trusted local bank — established since <strong>24th October 1972</strong>.
//                     </p>
//                     <div className="flex items-center justify-center gap-3 mt-5">
//                         <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a84c]" />
//                         <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
//                         <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a84c]" />
//                     </div>
//                 </div>

//                 {/* ── Tip banner ── */}
//                 <div className="bg-[#1e3163]/5 border border-[#1e3163]/15 rounded-xl px-5 py-3 flex items-center gap-2 mb-8 max-w-2xl mx-auto">
//                     <span className="text-lg">💡</span>
//                     <p className="text-sm text-slate-600">
//                         <span className="font-semibold text-[#1e3163]">Tip:</span> Click any card to expand plan details. Toll-free helpline:&nbsp;
//                         <a href="tel:18001200304" className="font-bold text-[#f47012] hover:underline">1800 1200 304</a>
//                     </p>
//                 </div>

//                 {/* ── Cards Grid ── */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//                     {insurancePlans.map((plan) => (
//                         <InsuranceCard
//                             key={plan.id}
//                             plan={plan}
//                             isActive={activeId === plan.id}
//                             onClick={() => handleClick(plan.id)}
//                         />
//                     ))}
//                 </div>

//                 {/* ── Trust Stats ── */}
//                 <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {[
//                         { icon: "🏛️", value: "Since 1972",       label: "Janaseva Bank Est." },
//                         { icon: "🔒", value: "DICGC",             label: "Insured Deposits" },
//                         { icon: "📞", value: "1800 1200 304",     label: "Toll-Free Support" },
//                         { icon: "🌐", value: "Internet Banking",  label: "24×7 Digital Access" },
//                     ].map((stat, i) => (
//                         <div key={i} className="bg-white rounded-md p-5 text-center border border-slate-200 shadow-sm hover:shadow-md transition">
//                             <div className="text-2xl mb-2">{stat.icon}</div>
//                             <div className="text-sm font-extrabold text-[#1e3163]">{stat.value}</div>
//                             <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* ── Footer ── */}
//                 <p className="text-center text-xs text-slate-400 mt-8">
//                     Insurance is subject to market / regulatory risks. Please read all policy documents carefully before purchasing.
//                     Janaseva Sahakari Bank Ltd., Hadapsar, Pune — DICGC Registered.
//                 </p>

//             </div>
//         </div>
//     );
// };

// export default LifeInsurance;

import React, { useState } from 'react';

const insurancePlans = [
    {
        id: 1,
        name: "ICICI Lombard General Insurance",
        tagline: "Complete Protection Solutions",
        logo: "assets/images/insurance/icici-lombard.png",
        description: "ICICI Lombard offers a wide range of general insurance products including health, motor, travel, and business insurance with quick claim settlement.",
        plans: [
            { label: "Two Wheeler Insurance",     detail: "Comprehensive bike protection" },
            { label: "Car Insurance",             detail: "Own damage + third party cover" },
            { label: "Overseas Travel Insurance", detail: "Coverage for international travel" },
            { label: "House Property Insurance",  detail: "Home structure & content cover" },
            { label: "Machinery Insurance",       detail: "Industrial equipment protection" },
        ],
        features: [
            { label: "Network Hospitals", value: "6,500+",  icon: "🏥" },
            { label: "Claim Settlement",  value: "Quick",   icon: "⚡" },
            { label: "Policy Issuance",   value: "Instant", icon: "📄" },
            { label: "Support",           value: "24×7",    icon: "📞" },
        ],
        highlight: "Quick Claim Settlement",
        highlightIcon: "⚡",
        accentBar:    "bg-gradient-to-b from-[#c0392b] to-[#e74c3c]",
        accentBtn:    "bg-gradient-to-r from-[#c0392b] to-[#e74c3c]",
        accentMobile: "bg-gradient-to-r from-[#c0392b] to-[#e74c3c]",
        accentStrip:  "bg-[#c0392b]/5",
        accentDot:    "bg-[#c0392b]",
        accentBorder: "border-[#c0392b]",
        accentShadow: "shadow-[#c0392b]/10",
        fallbackBg:   "bg-gradient-to-br from-[#c0392b] to-[#e74c3c]",
        fallbackLine1: "iCICI Lombard",
        fallbackLine2: "Nibhaye Vaade",
        badgeColor:   "bg-red-50 text-red-700 border-red-100",
        pillBg:       "bg-red-50 border-red-100",
        link: "https://www.icicilombard.com/",
        bankNote: "Available at all Janaseva Bank branches",
    },
    {
        id: 2,
        name: "United India Insurance Co. Ltd.",
        tagline: "Trusted Public Sector Insurer",
        logo: "assets/images/insurance/united-india.png",
        description: "United India Insurance provides reliable and affordable general insurance solutions backed by government trust and a strong nationwide presence.",
        plans: [
            { label: "Car Insurance",                detail: "Comprehensive vehicle cover" },
            { label: "Commercial Vehicle Insurance", detail: "Fleet & goods vehicle cover" },
            { label: "House Property Insurance",     detail: "Residential property protection" },
            { label: "Stock Insurance",              detail: "Business inventory coverage" },
        ],
        features: [
            { label: "Backed By",      value: "Govt. of India", icon: "🇮🇳" },
            { label: "Branch Network", value: "Pan India",      icon: "🏛️" },
            { label: "Premium",        value: "Affordable",     icon: "💰" },
            { label: "Support",        value: "24×7",           icon: "📞" },
        ],
        highlight: "Government of India Undertaking",
        highlightIcon: "🇮🇳",
        accentBar:    "bg-gradient-to-b from-[#1a5276] to-[#2980b9]",
        accentBtn:    "bg-gradient-to-r from-[#1a5276] to-[#2980b9]",
        accentMobile: "bg-gradient-to-r from-[#1a5276] to-[#2980b9]",
        accentStrip:  "bg-[#1a5276]/5",
        accentDot:    "bg-[#1a5276]",
        accentBorder: "border-[#1a5276]",
        accentShadow: "shadow-[#1a5276]/10",
        fallbackBg:   "bg-gradient-to-br from-[#1a5276] to-[#2980b9]",
        fallbackLine1: "United India",
        fallbackLine2: "Insurance Co. Ltd.",
        badgeColor:   "bg-blue-50 text-blue-700 border-blue-100",
        pillBg:       "bg-blue-50 border-blue-100",
        link: "https://uiic.co.in/",
        bankNote: "Government-backed plans via Janaseva Bank",
    },
];

// ── Logo Block ──────────────────────────────────────────────────────────────
const LogoBlock = ({ plan }) => {
    const [imgError, setImgError] = useState(false);

    const handleError = () => setImgError(true);

    if (!imgError) {
        return (
            <div className="w-[200px] h-[100px] rounded-md flex items-center justify-center overflow-hidden bg-white shadow-sm shrink-0">
                <img
                    src={plan.logo}
                    alt={plan.name}
                    className="max-h-[80px] max-w-[150px] object-contain"
                    onError={handleError}
                />
            </div>
        );
    }

    return (
        <div className={`w-[120px] h-[70px] rounded-xl flex flex-col items-center justify-center overflow-hidden relative shrink-0 ${plan.fallbackBg}`}>
            <div className="absolute -right-3 -top-3 w-10 h-10 rounded-full bg-white/10" />
            <div className="absolute -left-2 -bottom-2 w-8 h-8 rounded-full bg-white/10" />
            <span className="text-white font-black text-[11px] leading-tight tracking-wide z-10 text-center px-2">
                {plan.fallbackLine1}
            </span>
            <span className="text-white/70 font-semibold text-[8px] uppercase tracking-[1.5px] mt-0.5 z-10 text-center px-2">
                {plan.fallbackLine2}
            </span>
        </div>
    );
};

// ── Insurance Card ──────────────────────────────────────────────────────────
const InsuranceCard = ({ plan, isActive, onCardClick, onLinkClick }) => (
    <div
        onClick={onCardClick}
        className={`relative bg-white rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5
            ${isActive
                ? `${plan.accentBorder} shadow-xl ${plan.accentShadow}`
                : "border-slate-100 shadow-md hover:border-slate-200"
            }`}
    >
        {/* Left accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${plan.accentBar}`} />

        {/* TOP ROW */}
        <div className="flex items-center gap-5 px-7 py-5 border-b border-slate-100">

            <LogoBlock plan={plan} />

            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#1e3163] text-base leading-snug">{plan.name}</h3>
                <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border mt-1 ${plan.badgeColor}`}>
                    {plan.tagline}
                </span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                    {plan.description}
                </p>
            </div>

            {/* Feature pills grid — desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-2 shrink-0">
                {plan.features.map((f, i) => (
                    <div key={i} className={`flex items-center gap-2 rounded-xl px-3 py-2 border ${plan.pillBg}`}>
                        <span className="text-base">{f.icon}</span>
                        <div>
                            <p className="text-[9px] text-slate-400 uppercase font-semibold tracking-wide">{f.label}</p>
                            <p className="text-xs font-bold text-slate-700 whitespace-nowrap">{f.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className={`hidden md:inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-md whitespace-nowrap ${plan.accentBtn}`}
            >
                View Plan →
            </a>
        </div>

        {/* Mobile feature pills */}
        <div className="lg:hidden flex flex-wrap gap-2 px-7 py-3 border-b border-slate-100">
            {plan.features.map((f, i) => (
                <div key={i} className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 border ${plan.pillBg}`}>
                    <span className="text-sm">{f.icon}</span>
                    <span className="text-xs font-semibold text-slate-700">{f.value}</span>
                    <span className="text-[10px] text-slate-400">({f.label})</span>
                </div>
            ))}
        </div>

        {/* PLANS ROW */}
        <div className="px-7 py-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0 mr-2">
                Available Plans:
            </p>
            {plan.plans.map((p, i) => (
                <div key={i} className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${plan.accentDot}`} />
                    <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{p.label}</span>
                    {isActive && (
                        <span className="text-xs text-slate-400 hidden sm:inline">— {p.detail}</span>
                    )}
                    {i < plan.plans.length - 1 && (
                        <span className="text-slate-200 ml-4 text-sm hidden sm:inline">|</span>
                    )}
                </div>
            ))}

            <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className={`md:hidden ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white hover:opacity-90 shadow-sm ${plan.accentMobile}`}
            >
                View →
            </a>
        </div>

        {/* BANK NOTE STRIP */}
        <div className={`px-7 py-2 flex items-center gap-1.5 ${plan.accentStrip}`}>
            <span className="text-[11px]">📍</span>
            <span className="text-[11px] text-slate-400 italic">{plan.bankNote}</span>
            <span className="ml-auto text-[11px] text-slate-400">
                {isActive ? "▲ Click to collapse" : "▼ Click to expand details"}
            </span>
        </div>
    </div>
);

// ── Main Component ──────────────────────────────────────────────────────────
const GenInsurance = () => {
    const [activeId, setActiveId] = useState(null);

    const handleCardClick = (id) => setActiveId(activeId === id ? null : id);
    const handleLinkClick = (e) => e.stopPropagation();

    return (
        <div className="bg-gray-200 min-h-screen py-14 px-4">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-[#1e3163] text-[#c9a84c] text-xs font-bold tracking-[2.5px] uppercase px-5 py-2 rounded-full mb-4">
                        🛡️ General Insurance Plans
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e3163] tracking-tight mb-3">
                        Protect What Matters Most
                    </h1>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                        Janaseva Sahakari Bank, Hadapsar Pune is partnered with India's leading general insurance providers.
                        Motor, travel, property & commercial coverage — all under one roof.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-5">
                    {insurancePlans.map((plan) => (
                        <InsuranceCard
                            key={plan.id}
                            plan={plan}
                            isActive={activeId === plan.id}
                            onCardClick={() => handleCardClick(plan.id)}
                            onLinkClick={handleLinkClick}
                        />
                    ))}
                </div>

                {/* Trust Stats */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: "🏆", value: "IRDAI",          label: "Regulated & Compliant" },
                        { icon: "⚡", value: "Instant Policy",  label: "In 2 Minutes" },
                        { icon: "🤝", value: "Cashless",        label: "Claim Settlement" },
                        { icon: "📞", value: "1800 1200 304",   label: "Toll-Free Support" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 text-center border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-sm font-extrabold text-[#1e3163]">{stat.value}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-slate-400 mt-8">
                    General insurance is subject to policy terms and conditions. Please read all documents carefully before purchasing.
                    Janaseva Sahakari Bank Ltd., Hadapsar, Pune — DICGC Registered.
                </p>

            </div>
        </div>
    );
};

export default GenInsurance;