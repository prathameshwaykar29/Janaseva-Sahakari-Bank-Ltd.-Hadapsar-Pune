

import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const tradePack_features = [
   {
    title: "Quick Loan Against Gold",
    desc: "Get instant loan by pledging your gold ornaments with minimal documentation."
  },
  {
    title: "Loan up to Rs. 25 Lakh",
    desc: "Avail gold loan ranging from Rs. 2.50 lakh to Rs. 25 lakh based on gold valuation."
  },
  {
    title: "Attractive Interest Rate",
    desc: "Interest rate starting from 9.00% per annum depending on the loan amount."
  },
  {
    title: "Flexible Repayment Options",
    desc: "Choose Bullet repayment for small loans or EMI repayment for larger loan amounts."
  },
  {
    title: "Long Repayment Tenure",
    desc: "Repayment period available from 12 months to 48 months depending on the scheme."
  },
  {
    title: "Safe Gold Storage",
    desc: "Your pledged gold is kept securely in the bank's safe vault."
  },
  {
    title: "Simple Eligibility",
    desc: "Any person having a regular source of income can apply for this loan."
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

export default function GoldloanBenefits() {
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


