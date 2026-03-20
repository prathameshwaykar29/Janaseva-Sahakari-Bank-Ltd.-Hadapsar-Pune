
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- FEATURES DATA ---------------- */

const twoWheeler_features = [
  { title: "Loan up to Rs. 5 Lakh", desc: "Finance the purchase of any new two-wheeler of your choice." },
  { title: "E-Bike Discount", desc: "Get an additional 0.25% discount on interest rate for electric two-wheelers." },
  { title: "No Guarantor Required", desc: "No guarantor is needed to avail this two-wheeler loan." },
  { title: "Low Down Payment", desc: "Only 10% of on-road cost required as margin." },
  { title: "5-Year Repayment", desc: "Repay conveniently over a period of up to 60 months." },
  { title: "Minimal Processing Fee", desc: "Only Rs. 500 + GST as processing fee." },
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

export default function TwowheelerBenfit() {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#002d72] mb-6">
                Features & Benefits of Janaseva Udyog Vastu Karj Yojana
            </h2>

            <div className="flex flex-col gap-3">
                {twoWheeler_features.map((feature, index) => (
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