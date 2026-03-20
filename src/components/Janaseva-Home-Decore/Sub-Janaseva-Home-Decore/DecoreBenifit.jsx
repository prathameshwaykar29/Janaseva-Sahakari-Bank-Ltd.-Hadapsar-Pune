
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const homeDecore_features = [
  { title: "Home Renovation Support", desc: "Specially designed for repairs, renovation, additions, alterations, and furniture purchase for your home." },
  { title: "Loan up to Rs. 10 Lakh", desc: "Get funding up to Rs. 10 lakh to beautify and improve your living space." },
  { title: "Linked to Housing Loan Tenure", desc: "Repayment period can extend up to 120 months, limited to the existing housing loan tenure." },
  { title: "Low Processing Fee", desc: "Processing fee of only 0.75% of the loan amount." },
  { title: "Single Guarantor Needed", desc: "Only one guarantor is required to process this loan." },
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

export default function DecoreBenifit() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {homeDecore_features.map((feature, index) => (
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
