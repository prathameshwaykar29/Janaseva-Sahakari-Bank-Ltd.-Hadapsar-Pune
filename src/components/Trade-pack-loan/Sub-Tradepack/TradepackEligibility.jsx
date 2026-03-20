import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const eligibilityData = {
  tradePackConditions: {
    title: "Trade Pack Loan Eligibility",
    icon: FaBuilding,
    items: [
      ["Applicant Type", "Any Person, Business, Trader / Legal Constitution having regular source of income"],
      ["Loan Purpose", "Purchase of Land, Shop, Godown, Furniture etc. for business; CC for Working Capital"],
      ["Maximum Loan", "Upto Rs. 50.00 Lakh"],
      ["Interest Rate", "10.00% per annum"],
      ["Margin", "Term Loan – 20% | Cash Credit – 25%"],
      ["Loan Period", "TL – 60 to 120 Months | CC – 12 Months"],
      ["Guarantor", "1 Required"],
      ["Shares", "2.50%"],
      ["Processing Fee", "1.00%"],
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

export default function TradepackEligibility() {
  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-1 gap-6">
        <EligibilityCard {...eligibilityData.tradePackConditions} />
      </div>
    </section>
  );
}