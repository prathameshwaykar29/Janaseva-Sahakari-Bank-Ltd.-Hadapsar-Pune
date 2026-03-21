// import React from 'react';
// import { FaShieldAlt } from "react-icons/fa";
// import { MdAccountBalance } from "react-icons/md";

// const insurancePlans = [
//     {
//         id: 1,
//         name: "ICICI Lombard General Insurance",
//         tagline: "Complete Protection Solutions",
//         icon: FaShieldAlt,
//         iconColor: "text-[#f47012]",
//         description:
//             "ICICI Lombard offers a wide range of general insurance products including health, motor, travel, and business insurance with quick claim settlement.",
//         features: [
//             "Cashless claims at 6500+ hospitals",
//             "Health & motor insurance coverage",
//             "Instant policy issuance online",
//             "24x7 customer support",
//         ],
//         accentColor: "from-[#f47012] to-[#ff9a4d]",
//         iconBg: "bg-orange-50",
//         dotColor: "bg-[#f47012]",
//         btnLabel: "View Plan",
//         link: "https://www.icicilombard.com/",
//     },

//     {
//         id: 2,
//         name: "United India Insurance",
//         tagline: "Trusted Public Sector Insurer",
//         icon: MdAccountBalance,
//         iconColor: "text-[#1e3163]",
//         description:
//             "United India Insurance provides reliable and affordable general insurance solutions backed by government trust and a strong nationwide presence.",
//         features: [
//             "Government-backed insurance provider",
//             "Health, motor & crop insurance",
//             "Wide branch network across India",
//             "Affordable premium plans",
//         ],
//         accentColor: "from-[#1e3163] to-[#3a4f8f]",
//         iconBg: "bg-blue-50",
//         dotColor: "bg-[#1e3163]",
//         btnLabel: "View Plan",
//         link: "https://uiic.co.in/",
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

// const Lifeinsurance = () => {
//     return (
//         <div className=" bg-gray-200">

//             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-10 py-12 max-w-7xl mx-auto">
//                 {insurancePlans.map((plan) => (
//                     <InsuranceCard key={plan.id} plan={plan} />
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Lifeinsurance;



import React, { useState } from 'react';

const insurancePlans = [
    {
        id: 1,
        name: "Axis Max Life Insurance",
        tagline: "Smart Life Cover",
        logo: "assets/images/insurance/axis.svg",
        description: "Comprehensive life insurance plans with flexible premium options, tax benefits, and guaranteed claim settlement — available exclusively to Janaseva Bank customers.",
        plans: [
            { label: "Term Insurance",        detail: "Pure protection up to ₹10 Cr" },
            { label: "Child Insurance Plan",  detail: "Secure your child's future" },
            { label: "Retirement Plan",       detail: "Regular income post-retirement" },
            { label: "Money Back Plan",       detail: "Periodic payouts + life cover" },
            { label: "Unit Link Plan (ULIP)", detail: "Market-linked wealth creation" },
            { label: "Protection Plans",      detail: "Flexible coverage options" },
            { label: "Saving Plans",          detail: "Disciplined wealth building" },
            { label: "Participating Plans",   detail: "Bonuses + life protection" },
        ],
        highlight: "99.51% Claim Settlement Ratio",
        highlightIcon: "🏆",
        // Tailwind classes — no inline style needed
        accentBar:    "bg-gradient-to-b from-[#97144D] to-[#c9184a]",
        accentBtn:    "bg-gradient-to-r from-[#97144D] to-[#c9184a]",
        accentMobile: "bg-gradient-to-r from-[#97144D] to-[#c9184a]",
        accentStrip:  "bg-[#97144D]/5",
        accentDot:    "bg-[#97144D]",
        accentBorder: "border-[#97144D]",
        accentShadow: "shadow-[#97144D]/10",
        fallbackBg:   "bg-gradient-to-br from-[#97144D] to-[#c9184a]",
        fallbackLine1: "AXIS MAX",
        fallbackLine2: "Life Insurance",
        badgeColor:   "bg-rose-50 text-rose-700 border-rose-100",
        pillBg:       "bg-rose-50 border-rose-100",
        link: "https://www.maxlifeinsurance.com/",
        bankNote: "Available at all branches",
    },
    {
        id: 2,
        name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
        tagline: "Government Life Scheme",
        logo: "assets/images/insurance/gover.jpg",
        description: "India's flagship government life insurance scheme — auto-debited directly from your Janaseva Sahakari Bank savings account every year at just ₹436/year.",
        plans: [
            { label: "Pradhan Mantri Jeevan Jyoti", detail: "₹2 lakh life cover at ₹436/yr" },
            { label: "Pradhan Mantri Suraksha",      detail: "₹2 lakh accident cover at ₹20/yr" },
        ],
        highlight: "Premium: Only ₹436 / Year",
        highlightIcon: "🇮🇳",
        accentBar:    "bg-gradient-to-b from-[#1a5276] to-[#2471a3]",
        accentBtn:    "bg-gradient-to-r from-[#1a5276] to-[#2471a3]",
        accentMobile: "bg-gradient-to-r from-[#1a5276] to-[#2471a3]",
        accentStrip:  "bg-[#1a5276]/5",
        accentDot:    "bg-[#1a5276]",
        accentBorder: "border-[#1a5276]",
        accentShadow: "shadow-[#1a5276]/10",
        fallbackBg:   "bg-gradient-to-br from-[#1a5276] to-[#2471a3]",
        fallbackLine1: "PM Jeevan Jyoti",
        fallbackLine2: "Bima Yojana",
        badgeColor:   "bg-blue-50 text-blue-700 border-blue-100",
        pillBg:       "bg-blue-50 border-blue-100",
        link: "https://www.myscheme.gov.in/schemes/pmjjby",
        bankNote: "Auto-debit from your Bank account",
    },
    {
        id: 3,
        name: "HDFC Life Insurance",
        tagline: "Premium Coverage",
        logo: "assets/images/insurance/hdfc.png",
        description: "Trusted by millions of Indians — HDFC Life offers market-linked ULIPs, guaranteed savings, and comprehensive term & retirement plans with a 99.5% claim ratio.",
        plans: [
            { label: "Term Insurance",         detail: "Pure protection at low cost" },
            { label: "Sampoorna Jeevan Plan",  detail: "Whole life + limited pay" },
            { label: "Guaranteed Wealth Plan", detail: "Assured returns + bonus" },
            { label: "Money Back Plan",        detail: "Periodic survival benefits" },
            { label: "Unit Link Plan (ULIP)",  detail: "Equity-linked wealth growth" },
        ],
        highlight: "99.5% Claim Settlement Ratio",
        highlightIcon: "⭐",
        accentBar:    "bg-gradient-to-b from-[#e31837] to-[#b71c1c]",
        accentBtn:    "bg-gradient-to-r from-[#e31837] to-[#b71c1c]",
        accentMobile: "bg-gradient-to-r from-[#e31837] to-[#b71c1c]",
        accentStrip:  "bg-[#e31837]/5",
        accentDot:    "bg-[#e31837]",
        accentBorder: "border-[#e31837]",
        accentShadow: "shadow-[#e31837]/10",
        fallbackBg:   "bg-gradient-to-br from-[#e31837] to-[#b71c1c]",
        fallbackLine1: "HDFC Life",
        fallbackLine2: "Insurance",
        badgeColor:   "bg-red-50 text-red-700 border-red-100",
        pillBg:       "bg-red-50 border-red-100",
        link: "https://www.hdfclife.com/",
        bankNote: "Apply instantly via Bank",
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

            {/* Highlight pill */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 shrink-0">
                <span className="text-lg">{plan.highlightIcon}</span>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Highlight</p>
                    <p className="text-xs font-bold text-slate-700 whitespace-nowrap">{plan.highlight}</p>
                </div>
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

        {/* PLANS ROW */}
        <div className="px-7 py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
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
const LifeInsurance = () => {
    const [activeId, setActiveId] = useState(null);

    const handleCardClick = (id) => setActiveId(activeId === id ? null : id);
    const handleLinkClick = (e) => e.stopPropagation();

    return (
        <div className="bg-gray-200 min-h-screen py-14 px-4">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-[#1e3163] text-white text-xs font-bold tracking-[2.5px] uppercase px-5 py-2 rounded-full mb-4">
                        🛡️ Life Insurance Plans
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e3163] tracking-tight mb-3">
                        Protect Your Family's Future
                    </h1>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                        Janaseva Sahakari Bank, Hadapsar Pune is partnered with India's leading life insurance providers.
                        Get covered through your trusted local bank — established since <strong>24th October 1972</strong>.
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
                        { icon: "🏛️", value: "Since 1972",      label: "Janaseva Bank Est." },
                        { icon: "🔒", value: "DICGC",            label: "Insured Deposits" },
                        { icon: "📞", value: "1800 1200 304",    label: "Toll-Free Support" },
                        { icon: "🌐", value: "Internet Banking", label: "24×7 Digital Access" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 text-center border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-sm font-extrabold text-[#1e3163]">{stat.value}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default LifeInsurance;