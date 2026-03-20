import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const eligibilityData = {
  hypothecationConditions: {
    title: "Hypothecation Loan Eligibility",
    icon: FaBuilding,
    items: [
      ["Applicant Type", "Any Person, Business, Trader / Legal Constitution"],
      ["Income Requirement", "Regular source of income required"],
      ["Loan Purpose", "Purchase of furniture for business use & working capital"],
      ["Maximum Loan", "Up to Exposure Limit"],
      ["Interest Rate", "11.50% per annum"],
      ["Margin", "25% on Stock / 40% on Debtors"],
      ["Loan Period", "Up to 84 Months"],
      ["Guarantor", "Minimum 1 required"],
      ["Shares", "2.50% of loan amount required"],
      ["Processing Fee", "1% of loan amount"],
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

export default function HypothecationEligibility() {
  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-1 gap-6">
        <EligibilityCard {...eligibilityData.hypothecationConditions} />
      </div>
    </section>
  );
}