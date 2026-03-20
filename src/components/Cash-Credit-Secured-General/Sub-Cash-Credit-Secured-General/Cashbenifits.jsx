

import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const features = [
  {
    title: "Loan up to ₹50.00 Lakh",
    desc: "Finance your new commercial vehicle with loan amounts up to ₹50.00 lakh depending on eligibility and vehicle cost."
  },
  {
    title: "Competitive Interest Rate",
    desc: "Attractive interest rate starting from 10% per annum as per bank policy."
  },
  {
    title: "Flexible Repayment Tenure",
    desc: "Repay comfortably with tenure up to 60 months for loans up to ₹25 lakh and up to 84 months for loans above ₹25 lakh."
  },
  {
    title: "Low Margin Requirement",
    desc: "Only 15% margin required on the total on-road cost of the vehicle."
  },
  {
    title: "Quick Loan Processing",
    desc: "Simple documentation and faster approval process for quick loan disbursement."
  },
  {
    title: "Minimal Guarantor Requirement",
    desc: "Only 1 guarantor required for processing the commercial vehicle loan."
  },
  {
    title: "Low Processing Fee",
    desc: "Processing fee of only 1.00% of the loan amount."
  }
];

/* ---------------- REUSABLE FEATURE ITEM ---------------- */

function FeatureItem({ title, desc }) {
  return (
    <div
      className="
        flex items-start gap-3 px-3.5 py-3 rounded-md
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

export default function Cashbenifits() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Features & Benefits of New Commercial Vehicle Loan
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