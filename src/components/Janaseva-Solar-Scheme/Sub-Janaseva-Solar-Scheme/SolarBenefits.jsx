import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */
const solar_features = [
  { title: "Go Solar, Save on Electricity", desc: "Finance the installation of solar power systems for your home or business and reduce electricity bills." },
  { title: "High Loan for Businesses", desc: "Business borrowers can avail up to Rs. 50 lakh for large-scale solar installations." },
  { title: "Lowest Interest Rate", desc: "Attractive rate of 9.50% per annum — one of the lowest in our product range." },
  { title: "Low Margin", desc: "Only 15% down payment required." },
  { title: "6-Year Repayment", desc: "Repay comfortably over 72 months." },
  { title: "Eco-Friendly Investment", desc: "Contribute to green energy while benefitting from government solar subsidies." },
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

export default function SolarBenefits() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits
            </h2>

            <div className="flex flex-col gap-3">
                {solar_features.map((feature, index) => (
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
