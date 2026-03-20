

import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const features = [
    {
        title: "Loan up to Exposure Limit",
        desc: "Loan amount sanctioned based on project cost, exposure limit, and financial eligibility of the borrower."
    },
    {
        title: "Attractive Interest Rate",
        desc: "Interest rate starts from 9.50% for A-rated borrowers and 10.00% for others as per bank policy."
    },
    {
        title: "Long Repayment Tenure",
        desc: "Flexible repayment period up to 120 months including a moratorium period of up to 18 months."
    },
    {
        title: "Low Margin Requirement",
        desc: "Margin requirement of 15% for purchase of property and 20% for construction including stamp duty and registration cost."
    },
    {
        title: "Supports Business Infrastructure",
        desc: "Loan facility designed to support purchase or construction of industrial or commercial premises."
    },
    {
        title: "Minimal Guarantor Requirement",
        desc: "Only one guarantor is required for processing the loan under this scheme."
    },
    {
        title: "Low Processing Fee",
        desc: "Processing fee of only 1.00% of the sanctioned loan amount."
    }
];

/* ---------------- REUSABLE FEATURE ITEM ---------------- */

function FeatureItem({ title, desc }) {
    return (
        <div
            className="
        flex items-start gap-3 px-3 py-3 rounded-md
        bg-gray-50 border-l-[3px] border-[#1e3163]
        transition-all duration-200
        hover:bg-blue-50 hover:border-l-[#f47012]
      "
        >
            <div className="text-[#0a7c59] text-lg shrink-0 mt-0.5">
                <FaCheckCircle />
            </div>

            <div>
                <h5 className="text-base font-semibold text-[#002d72] mb-0.5">
                    {title}
                </h5>

                <p className="text-sm text-gray-500 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function HypothecationBenifites() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {features.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        title={feature.title}
                        desc={feature.desc}
                    />
                ))}
            </div>
        </section>
    );
}