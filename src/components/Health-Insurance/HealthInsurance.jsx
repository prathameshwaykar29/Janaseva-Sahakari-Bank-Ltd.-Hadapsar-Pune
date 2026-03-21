
// import React from 'react';
// import { FaShieldAlt } from "react-icons/fa";

// const insurancePlans = [
//     {
//         id: 1,
//         name: "Care Health Insurance",
//         tagline: "Health Protection Simplified",
//         icon: FaShieldAlt,
//         iconColor: "text-[#ffd618]",
//         description:
//             "Care Health Insurance offers comprehensive health coverage with cashless hospitalization, wellness benefits, and high sum insured options for individuals and families.",
//         features: [
//             "Cashless treatment at 21000+ network hospitals",
//             "Coverage up to ₹6 Crore",
//             "No claim bonus up to 150%",
//             "Pre & post hospitalization expenses covered",
//         ],
//         accentColor: "from-[#ffd618] to-[#ffd618]",
//         iconBg: "bg[#FFE98A]",
//         dotColor: "bg-[#ffd618]",
//         btnLabel: "View Plan",
//         link: "https://www.careinsurance.com/",
//     },
// ];

// const InsuranceCard = ({ plan }) => {
//     const Icon = plan.icon;

//     return (
//         <div className="relative rounded-md bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 group">

//             <div className="bg-white/90 rounded-md p-6 flex flex-col h-full border border-gray-100 group-hover:scale-[1.02] transition-all duration-500">

//                 {/* Icon + Title */}
//                 <div className="flex items-center gap-4 mb-4">
//                     <div className={`p-3 rounded-md text-xl shadow-sm ${plan.iconBg}`}>
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

// const HealthInsurance = () => {
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

// export default HealthInsurance;



import React, { useState } from 'react';
import { FaHospitalAlt, FaGift } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const insurancePlans = [
    {
        id: 1,
        name: "Care Health Insurance",
        tagline: "Health Protection Simplified",
        logo: "assets/images/insurance/care.svg",
        description: "Care Health Insurance offers comprehensive health coverage with cashless hospitalization, wellness benefits, and high sum insured options for individuals and families.",
        plans: [
            { label: "Jan Swastha Yojana", detail: "Affordable cover for all citizens" },
            { label: "Heart Care", detail: "Dedicated cardiac coverage" },
            { label: "Cancer Care", detail: "Critical illness end-to-end cover" },
            { label: "Family Health Plan", detail: "Floater cover for entire family" },
            { label: "Senior Citizen Plan", detail: "Tailored for 60+ age group" },
        ],
        features: [
            //{ label: "Network Hospitals", value: "21,000+",     icon: FaHospitalAlt },
            { label: "Sum Insured", value: "Up to ₹6 Cr", icon: MdCurrencyRupee },
            { label: "No Claim Bonus", value: "Up to 150%", icon: FaGift },

        ],
        highlight: "Cashless at 21,000+ Hospitals",
        highlightIcon: "🏥",
        accentBar: "bg-gradient-to-b from-[#ffd618] to-[#ffd618]",
        accentBtn: "bg-gradient-to-r from-[#ffd618] to-[#ffd618]",
        accentMobile: "bg-gradient-to-r from-[#ffd618] to-[#ffd618]",
        accentStrip: "bg-[#ffd618]/5",
        accentDot: "bg-[#ffd618]",
        accentBorder: "border-[#ffd618]",
        accentShadow: "shadow-[#ffd618]/10",
        fallbackBg: "bg-gradient-to-br from-[#ffd618] to-[#ffd618]",
        fallbackLine1: "CARE",
        fallbackLine2: "Health Insurance",
        badgeColor: "bg-[#FFE98A] text-black border-orange-100",
        pillBg: " border-orange-100",
        link: "https://www.careinsurance.com/",
        // bankNote: "Available at all Bank branches",
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
        <div className={`w-[120px] h-[70px] rounded-md flex flex-col items-center justify-center overflow-hidden relative shrink-0 ${plan.fallbackBg}`}>
            <div className="absolute -right-3 -top-3 w-10 h-10 rounded-full bg-white/10" />
            <div className="absolute -left-2 -bottom-2 w-8 h-8 rounded-full bg-white/10" />
            <span className="text-white font-black text-[13px] leading-tight tracking-wide z-10 text-center px-2">
                {plan.fallbackLine1}
            </span>
            <span className="text-white/70 font-semibold text-[9px] uppercase tracking-[1.5px] mt-0.5 z-10 text-center px-2">
                {plan.fallbackLine2}
            </span>
        </div>
    );
};

// ── Insurance Card ──────────────────────────────────────────────────────────
const InsuranceCard = ({ plan, isActive, onCardClick, onLinkClick }) => (
    <div
        onClick={onCardClick}
        className={`relative bg-white rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5
            ${isActive
                ? `${plan.accentBorder} shadow-xl ${plan.accentShadow}`
                : "border-slate-100 shadow-md hover:border-orange-200"
            }`}
    >
        {/* Left accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${plan.accentBar}`} />

        {/* TOP ROW */}
        <div className="flex items-center gap-5 px-7 py-5 border-b border-slate-100">

            <LogoBlock plan={plan} />

            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#1e3163] text-base leading-snug">{plan.name}</h3>
                <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border mt-1 ${plan.badgeColor}`}>
                    {plan.tagline}
                </span>
                <p className="text-sm text-black mt-2 leading-relaxed line-clamp-2">
                    {plan.description}
                </p>
            </div>

            {/* Feature pills grid — desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-2 shrink-0">
                {plan.features.map((f, i) => {
                    const Icon = f.icon;

                    return (
                        <div
                            key={i}
                            className={`flex items-center gap-2 rounded-md px-3 py-2 border ${plan.pillBg}`}
                        >
                            <Icon className="text-base text-[#f47012]" />

                            <div>
                                <p className="text-[9px] text-black uppercase font-semibold tracking-wide">
                                    {f.label}
                                </p>
                                <p className="text-xs font-bold text-black whitespace-nowrap">
                                    {f.value}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                className={`hidden md:inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-md text-sm font-bold text-black transition-all hover:opacity-90 active:scale-95 shadow-md whitespace-nowrap ${plan.accentBtn}`}
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
            <p className="text-sm font-bold text-[#1e3163] uppercase tracking-widest shrink-0 mr-2">
                Available Plans:
            </p>
            {plan.plans.map((p, i) => (
                <div key={i} className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${plan.accentDot}`} />
                    <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{p.label}</span>
                    {isActive && (
                        <span className="text-sm text-[#f47012] hidden sm:inline">— {p.detail}</span>
                    )}
                    {i < plan.plans.length - 1 && (
                        <span className="text-[#1e3163] ml-4 text-sm hidden sm:inline">|</span>
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
            {/* <FaMapMarkerAlt className="text-[12px] text-slate-400" /> */}

            {/* <span className="text-[11px] text-slate-400 italic">
                {plan.bankNote}
            </span> */}

            <span className="ml-auto text-xs text-black">
                {isActive ? "▲ Click to collapse" : "▼ Click to expand details"}
            </span>
        </div>
    </div>
);

// ── Main Component ──────────────────────────────────────────────────────────
const HealthInsurance = () => {
    const [activeId, setActiveId] = useState(null);

    const handleCardClick = (id) => setActiveId(activeId === id ? null : id);
    const handleLinkClick = (e) => e.stopPropagation();

    return (
        <div className="bg-gray-200 min-h-screen py-14 px-4">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-[#ffd618] text-black text-xs font-bold tracking-[2.5px] uppercase px-5 py-2 rounded-full mb-4">
                        <FaHeartbeat className="text-sm" />
                        Health Insurance Plans
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e3163] tracking-tight mb-3">
                        Your Health, Our Priority
                    </h1>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                        Janaseva Sahakari Bank, Hadapsar Pune offers health insurance through India's most trusted providers.
                        Get comprehensive health coverage with cashless treatment at 21,000+ hospitals.
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
                {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: FaHospitalAlt, value: "21,000+", label: "Network Hospitals" },
                        { icon: MdCurrencyRupee, value: "Up to ₹6 Cr", label: "Sum Insured" },
                        { icon: FaGift, value: "Up to 150%", label: "No Claim Bonus" },
                        { icon: FaPhoneAlt, value: "1800 1200 304", label: "Toll-Free Support" },
                    ].map((stat, i) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={i}
                                className="bg-white rounded-md p-2 text-center border border-slate-200 shadow-sm hover:shadow-md transition"
                            >
                                <Icon className="text-2xl mb-2 text-black" />

                                <div className="text-sm font-extrabold text-[#ffd618]">
                                    {stat.value}
                                </div>

                                <div className="text-xs text-slate-400 mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div> */}


            </div>
        </div>
    );
};

export default HealthInsurance;