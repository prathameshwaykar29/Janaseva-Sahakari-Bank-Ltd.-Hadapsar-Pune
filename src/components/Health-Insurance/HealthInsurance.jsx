
import React from 'react';
import { FaShieldAlt } from "react-icons/fa";

const insurancePlans = [
    {
        id: 1,
        name: "Care Health Insurance",
        tagline: "Health Protection Simplified",
        icon: FaShieldAlt,
        iconColor: "text-[#f47012]",
        description:
            "Care Health Insurance offers comprehensive health coverage with cashless hospitalization, wellness benefits, and high sum insured options for individuals and families.",
        features: [
            "Cashless treatment at 21000+ network hospitals",
            "Coverage up to ₹6 Crore",
            "No claim bonus up to 150%",
            "Pre & post hospitalization expenses covered",
        ],
        accentColor: "from-[#f47012] to-[#ff9a4d]",
        iconBg: "bg-orange-50",
        dotColor: "bg-[#f47012]",
        btnLabel: "View Plan",
        link: "https://www.careinsurance.com/",
    },
];

const InsuranceCard = ({ plan }) => {
    const Icon = plan.icon;

    return (
        <div className="relative rounded-xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 group">

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

const HealthInsurance = () => {
    return (
        <div className=" bg-gray-200">

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-10 py-12 max-w-7xl mx-auto">
                {insurancePlans.map((plan) => (
                    <InsuranceCard key={plan.id} plan={plan} />
                ))}
            </div>

        </div>
    );
};

export default HealthInsurance;