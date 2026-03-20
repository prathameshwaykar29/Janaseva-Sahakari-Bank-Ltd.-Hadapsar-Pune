
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const tradePack_features = [
  { 
    title: "Competitive Interest Rate", 
    desc: "Loan available at an attractive interest rate of 12.50% per annum as per bank policy." 
  },
  { 
    title: "Flexible Loan Limit", 
    desc: "Loan amount can be sanctioned up to the eligible exposure limit based on borrower profile." 
  },
  { 
    title: "Low Margin Requirement", 
    desc: "Only 15% margin of the project or property cost is required from the borrower." 
  },
  { 
    title: "Long Repayment Period", 
    desc: "Convenient repayment tenure available up to 120 months." 
  },
  { 
    title: "Share Contribution", 
    desc: "Share contribution of 2.50% of the sanctioned loan amount is required." 
  },
  { 
    title: "Affordable Processing Fee", 
    desc: "Processing fee of only 1.00% of the sanctioned loan amount." 
  },
  { 
    title: "Simple Guarantor Requirement", 
    desc: "Only one guarantor is required for loan processing and approval." 
  },
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

export default function RentBenefits() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits
            </h2>

            <div className="flex flex-col gap-3">
                {tradePack_features.map((feature, index) => (
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
