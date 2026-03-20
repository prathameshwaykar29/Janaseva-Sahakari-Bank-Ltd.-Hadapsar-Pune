
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const gharkul_features = [
  {
    title: "High Loan Limit",
    desc: "Get a loan of up to Rs. 200 lakh for purchase of a new flat, resale house, or construction of a home.",
  },
  {
    title: "Low Interest Rate",
    desc: "Interest rate as low as 7.50% per annum for borrowers with CIBIL score of 800 and above.",
  },
  {
    title: "Long Repayment Tenure",
    desc: "Repay the loan comfortably over a period of up to 240 months (20 years).",
  },
  {
    title: "Low Margin Requirement",
    desc: "Only 10% margin required on agreement value or realisable value, whichever is lower.",
  },
  {
    title: "Zero Processing Fee",
    desc: "No processing fee is charged for this housing loan scheme.",
  },
  {
    title: "No Guarantor Required",
    desc: "No guarantor is needed for availing this housing loan.",
  },
  {
    title: "CIBIL Based Pricing",
    desc: "Better your credit score, lower your interest rate — designed to reward responsible borrowers.",
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

export default function GharkulBenifit() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {gharkul_features.map((feature, index) => (
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
