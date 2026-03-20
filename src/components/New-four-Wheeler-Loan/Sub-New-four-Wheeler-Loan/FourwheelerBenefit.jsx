
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const fourWheeler_features = [
  { title: "High Loan Limit", desc: "Finance up to Rs. 50 lakh for the purchase of a brand-new four-wheeler car." },
  { title: "Low Interest Rate", desc: "Interest rate starts as low as 8.25% per annum for CIBIL 800+ borrowers." },
  { title: "E-Vehicle Discount", desc: "Additional 0.25% concession on interest rate for electric vehicle purchases." },
  { title: "Zero Processing Fee", desc: "No processing fee is charged for this vehicle loan." },
  { title: "Flexible Tenure", desc: "Repayment period of up to 60 months, extendable to 84 months on a case to case basis." },
  { title: "Minimal Down Payment", desc: "Only 10% of on-road cost (Ex-Showroom + RTO + Insurance) required as margin." },
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

export default function FourwheelerBenefit() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {fourWheeler_features.map((feature, index) => (
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
