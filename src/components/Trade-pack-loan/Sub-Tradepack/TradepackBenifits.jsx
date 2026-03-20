
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const tradePack_features = [
  { title: "All-in-One Loan for Traders", desc: "A comprehensive loan facility covering both term loan for asset purchase and cash credit for working capital." },
  { title: "Loan up to Rs. 50 Lakh", desc: "Avail up to Rs. 50 lakh for purchase of land, shop, godown, furniture, or business assets." },
  { title: "Attractive Interest Rate", desc: "Competitive rate of 10.00% per annum on both term loan and cash credit." },
  { title: "Long Repayment Tenure", desc: "Term loan repayable over 60 to 120 months; Cash Credit renewable annually." },
  { title: "Low Margin Requirement", desc: "Only 20% margin for term loan and 25% for cash credit." },
  { title: "Minimal Guarantor Requirement", desc: "Only one guarantor is required for processing the loan." },
  { title: "Low Processing Fee", desc: "Processing fee of only 1.00% of the sanctioned loan amount." },
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

export default function TradepackBenifits() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {tradePack_features.map((feature, index) => (
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