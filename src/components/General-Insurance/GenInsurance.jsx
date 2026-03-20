// import React from 'react'

// const insurancePlans = [
//     {
//         id: 1,
//         name: "Axis Max Life Insurance",
//         tagline: "Smart Life Cover",
//         icon: "🛡️",
//         description:
//             "Comprehensive life and health coverage with flexible premium options designed for every life stage and financial goal.",
//         features: [
//             "Term life cover up to ₹10 Cr",
//             "Critical illness add-on rider",
//             "Waiver of premium benefit",
//             "Online claim settlement",
//         ],
//         accentColor: "from-red-600 to-red-400",
//         iconBg: "bg-red-50",
//         dotColor: "bg-red-500",
//         btnColor: "bg-red-600 hover:bg-red-700",
//         badge: "",
//         badgeColor: "",
//         btnLabel: "View Plan",
//     },
//     {
//         id: 2,
//         name: "Pradhan Mantri Jeevan Jyoti Yojana",
//         tagline: "Government Life Insurance",
//         icon: "🇮🇳",
//         description:
//             "India's flagship government scheme providing life insurance coverage to all citizens, especially the underprivileged, at minimal cost.",
//         features: [
//             "₹2 lakh life cover",
//             "Age group: 18–50 years",
//             "Auto-debit from bank account",
//             "Renewable annually",
//         ],
//         accentColor: "from-emerald-700 to-green-500",
//         iconBg: "bg-emerald-50",
//         dotColor: "bg-emerald-600",
//         btnColor: "bg-emerald-700 hover:bg-emerald-800",
//         badge: "Govt. Scheme",
//         badgeColor: "bg-emerald-600 text-white",
//         btnLabel: "View Plan",
//     },
//     {
//         id: 3,
//         name: "HDFC Life Insurance",
//         tagline: "Premium Coverage",
//         icon: "🏛️",
//         description:
//             "Trusted by millions, HDFC Life offers robust insurance and investment solutions with one of the highest claim settlement ratios in India.",
//         features: [
//             "99.5% claim settlement ratio",
//             "ULIPs & savings plans",
//             "Retirement & pension solutions",
//             "Child future planning",
//         ],
//         accentColor: "from-blue-700 to-blue-400",
//         iconBg: "bg-blue-50",
//         dotColor: "bg-blue-600",
//         btnColor: "bg-blue-700 hover:bg-blue-800",
//         badge: "",
//         badgeColor: "",
//         btnLabel: "View Plan",
//     },
// ]

// const InsuranceCard = ({ plan }) => (
//     <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 group">

//         {/* Glass Card */}
//         <div className="bg-white/90 rounded-2xl p-6 flex flex-col h-full border border-gray-100 group-hover:scale-[1.02] transition-all duration-500">

//             {/* Badge */}
//             {/* {plan.badge && (
//                 <span className={`absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full font-semibold ${plan.badgeColor}`}>
//                     {plan.badge}
//                 </span>
//             )} */}

//             {/* Icon + Title */}
//             <div className="flex items-center gap-4 mb-4">
//                 <div className={`p-3 rounded-xl text-xl shadow-sm ${plan.iconBg}`}>
//                     {plan.icon}
//                 </div>
//                 <div>
//                     <h3 className="font-semibold text-gray-900 text-lg">{plan.name}</h3>
//                     <p className="text-xs text-gray-400 uppercase tracking-wider">
//                         {plan.tagline}
//                     </p>
//                 </div>
//             </div>

//             {/* Description */}
//             <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                 {plan.description}
//             </p>

//             {/* Features */}
//             <ul className="space-y-2 mb-5 flex-1">
//                 {plan.features.map((f, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                         <span className={`w-2 h-2 rounded-full ${plan.dotColor}`} />
//                         {f}
//                     </li>
//                 ))}
//             </ul>

//             {/* Button */}
//             <button className={`w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${plan.accentColor} hover:opacity-90 transition`}>
//                 {plan.btnLabel}
//             </button>
//         </div>
//     </div>
// );

// const GenInsurance = () => {
//     return (
//         <div className="min-h-screen bg-gray-200">



//             {/* Cards */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 py-12 max-w-7xl mx-auto">
//                 {insurancePlans.map((plan) => (
//                     <InsuranceCard key={plan.id} plan={plan} />
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default GenInsurance;


import React from 'react';
import { FaShieldAlt } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";

const insurancePlans = [
    {
        id: 1,
        name: "Axis Max Life Insurance",
        tagline: "Smart Life Cover",
        icon: FaShieldAlt,
        iconColor: "text-[#1e3163]",
        description:
            "Comprehensive life and health coverage with flexible premium options designed for every life stage.",
        features: [
            "Term life cover up to ₹10 Cr",
            "Critical illness add-on rider",
            "Waiver of premium benefit",
            "Online claim settlement",
        ],
        accentColor: "from-[#1e3163] to-[#3a4f8f]",
        iconBg: "bg-blue-50",
        dotColor: "bg-[#1e3163]",
        btnLabel: "View Plan",
        link: "https://www.maxlifeinsurance.com/",
    },
    {
        id: 2,
        name: "Pradhan Mantri Jeevan Jyoti Yojana",
        tagline: "Government Life Insurance",
        icon: GiIndiaGate,
        iconColor: "text-[#1e3163]",
        description:
            "India's flagship government scheme providing life insurance coverage to all citizens.",
        features: [
            "₹2 lakh life cover",
            "Age group: 18–50 years",
            "Auto-debit from bank account",
            "Renewable annually",
        ],
        accentColor: "from-[#1e3163] to-[#3a4f8f]",
        iconBg: "bg-blue-50",
        dotColor: "bg-[#1e3163]",
        btnLabel: "View Plan",
        link: "https://www.myscheme.gov.in/schemes/pmjjby",
    },
    {
        id: 3,
        name: "HDFC Life Insurance",
        tagline: "Premium Coverage",
        icon: MdAccountBalance,
        iconColor: "text-[#1e3163]",
        description:
            "Trusted by millions with strong insurance and investment solutions.",
        features: [
            "99.5% claim settlement ratio",
            "ULIPs & savings plans",
            "Retirement solutions",
            "Child planning",
        ],
        accentColor: "from-[#1e3163] to-[#3a4f8f]",
        iconBg: "bg-blue-50",
        dotColor: "bg-[#1e3163]",
        btnLabel: "View Plan",
        link: "https://www.hdfclife.com/",
    },
];

const InsuranceCard = ({ plan }) => {
    const Icon = plan.icon;

    return (
        <div className="relative rounded-xl  bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 group">

            <div className="bg-white/90 rounded-xl p-6 flex flex-col h-full border border-gray-100 group-hover:scale-[1.02] transition-all duration-500">

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl text-xl shadow-sm ${plan.iconBg}`}>
                        <Icon className={`${plan.iconColor} text-xl`} />
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{plan.name}</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                            {plan.tagline}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5 flex-1">
                    {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className={`w-2 h-2 rounded-full ${plan.dotColor}`} />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${plan.accentColor} hover:opacity-90 transition`}
                >
                    {plan.btnLabel}
                </a>

            </div>
        </div>
    );
};

const GenInsurance = () => {
    return (
        <div className=" bg-gray-200">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 py-12 max-w-7xl mx-auto">
                {insurancePlans.map((plan) => (
                    <InsuranceCard key={plan.id} plan={plan} />
                ))}
            </div>

        </div>
    );
};

export default GenInsurance;