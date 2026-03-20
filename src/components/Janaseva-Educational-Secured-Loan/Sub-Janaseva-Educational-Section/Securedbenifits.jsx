import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const eduSecured_features = [
  { title: "Study in India & Abroad", desc: "Loan available for higher education both within India and abroad at recognized institutions." },
  { title: "High Loan Amount", desc: "Avail up to Rs. 50 lakh to cover tuition fees and other education-related expenses." },
  { title: "Moratorium Period", desc: "Repayment begins after completion of the course plus 6 months — no EMI burden during studies." },
  { title: "Low Interest Rate", desc: "Rate as low as 8.90% per annum for loan amounts up to Rs. 20 lakh." },
  { title: "Long Repayment Period", desc: "Up to 144 months (Course Period + 6 Months + 7 Years) for comfortable repayment." },
  { title: "Low Processing Fee", desc: "Only Rs. 1,000 as processing fee." },
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

export default function Securedbenifits() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {eduSecured_features.map((feature, index) => (
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
