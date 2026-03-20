import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const fdtl_features = [
  { title: "Term Loan Against FD", desc: "Get a term loan by pledging your Fixed Deposit as collateral security." },
  { title: "No Guarantor Required", desc: "FD acts as the security — no guarantor needed." },
  { title: "No Processing Fee", desc: "Zero processing charges." },
  { title: "FD Remains Active", desc: "Your Fixed Deposit continues to earn interest during the loan tenure." },
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

export default function FdtlBenefits() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits
            </h2>

            <div className="flex flex-col gap-3">
                {fdtl_features.map((feature, index) => (
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
