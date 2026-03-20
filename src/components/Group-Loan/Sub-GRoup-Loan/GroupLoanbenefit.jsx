
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const group_features = [
  { title: "Lower Interest Rate for Group", desc: "Enjoy a reduced interest rate of 9.75% per annum when applying as a group." },
  { title: "For Salaried Employees", desc: "Designed for permanent employees of Limited, Private Limited, or Multinational companies." },
  { title: "Group of Minimum 10", desc: "Form a group of minimum 10 eligible members to avail this loan." },
  { title: "Zero Processing Fee", desc: "No processing fee charged for group loan." },
  { title: "5-Year Repayment", desc: "Easy repayment over 60 months." },
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

export default function GroupLoanbenefit() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {group_features.map((feature, index) => (
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
