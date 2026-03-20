import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const features = [
  {
    title: "Loan up to ₹3.00 Lakh",
    desc: "Finance your 3-wheeler vehicle with loan amounts up to ₹3.00 lakh depending on eligibility."
  },
  {
    title: "Affordable Interest Rate",
    desc: "Competitive ROI starting from 10% (ITR) and 10.50% (Declaration) as per bank policy."
  },
  {
    title: "Flexible Repayment Tenure",
    desc: "Repay your loan comfortably with a tenure of up to 48 months."
  },
  {
    title: "Low Margin Requirement",
    desc: "Only 25% margin required on Ex-Showroom price including tax and insurance."
  },
  {
    title: "Quick Loan Processing",
    desc: "Fast approval and simple documentation for quick loan disbursement."
  },
  {
    title: "Minimal Guarantee Requirement",
    desc: "Only 1 guarantor required to process your 3-wheeler vehicle loan."
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

export default function Benefits3() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Features & Benefits of 3-Wheeler Loan
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