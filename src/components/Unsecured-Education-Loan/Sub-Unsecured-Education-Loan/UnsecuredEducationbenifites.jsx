import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */
const eduUnsecured_features = [
  { title: "No Security Required", desc: "Avail education loan without pledging any property or collateral." },
  { title: "Loan up to Rs. 5 Lakh", desc: "Get up to Rs. 5 lakh for higher education in India or abroad." },
  { title: "Moratorium Period", desc: "Repayment starts after course completion plus 6 months." },
  { title: "Zero Processing Fee", desc: "No processing fee charged." },
  { title: "10% Rate of Interest", desc: "Competitive rate of 10.00% per annum for unsecured education loan." },
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

export default function UnsecuredEducationbenifites() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {eduUnsecured_features.map((feature, index) => (
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
