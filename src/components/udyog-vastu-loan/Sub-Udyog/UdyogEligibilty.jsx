import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const eligibilityData = {
  udyogConditions: {
    title: "Janaseva Udyog Vastu Karj Yojana Conditions",
    icon: FaBuilding,
    items: [
      ["Loan Purpose", "Purchase or Construction of Industrial / Commercial Property"],
      ["Maximum Loan", "Up to Exposure Limit"],
      ["Interest Rate", "A Rating – 9.50% / Others – 10.00%"],
      ["Margin", "15% for Purchase / 20% for Construction"],
      ["Loan Period", "Up to 120 Months (Including 18 Months Moratorium)"],
      ["Guarantor", "Minimum 1 Guarantor required"],
      ["Shares", "2.50% share amount required"],
      ["Processing Fee", "1.00% of Loan Amount"],
    ],
  },
};

/* ------------------ UI COMPONENTS ------------------ */

function EligibilityCard({ title, icon: Icon, items }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 text-black px-5 py-3 font-semibold text-base flex items-center gap-2">
        <Icon className="text-lg" />
        {title}
      </div>

      <div className="px-4 py-4">
        {items.map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between gap-4 py-3 border-b last:border-none border-gray-100 text-sm"
          >
            <span className="text-gray-500">{k}</span>
            <span className="text-[#002d72] font-semibold text-right">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */

export default function UdyogEligibility() {
  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-1 gap-6">
        {/* Only one card since borrower data is now merged into udyogConditions */}
        <EligibilityCard {...eligibilityData.udyogConditions} />
      </div>
    </section>
  );
}