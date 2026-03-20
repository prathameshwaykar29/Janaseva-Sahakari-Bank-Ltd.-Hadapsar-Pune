import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */
const hospital_features = [
  { title: "For Healthcare & Education Sector", desc: "Loan for hospitals, nursing homes, clinics, diagnostic centers, schools, colleges, and research institutes." },
  { title: "Infrastructure & Equipment", desc: "Finance construction, land purchase, medical equipment, and educational materials." },
  { title: "High Loan Limit", desc: "Loan up to exposure limit based on project cost and eligibility." },
  { title: "Long Repayment for Property", desc: "Up to 120 months for property purchase and construction." },
  { title: "Low Interest Rate", desc: "10.00% per annum." },
  { title: "2 Guarantors Required", desc: "Two guarantors needed for this specialized loan." },
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

export default function HeilBenefits() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits
            </h2>

            <div className="flex flex-col gap-3">
                {hospital_features.map((feature, index) => (
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

