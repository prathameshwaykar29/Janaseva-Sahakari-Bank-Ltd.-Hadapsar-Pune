import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const gharkul_eligibilityData = {
  conditions: {
    title: "Property Loan/Builder Finance",
    icon: FaBuilding,

    items: [
      ["Applicant Type", "Any individual with regular source of income"],
      ["Loan Purpose", "House repair, renovation, interior work, furniture purchase"],
      ["Maximum Loan Amount", "Up to Rs. 10 Lakh"],
      ["Rate of Interest", "10.50% per annum"],
      ["Margin Requirement", "30% of estimated project cost"],
      ["Repayment Period", "Up to 120 Months (subject to housing loan tenure)"],
      ["Guarantor Requirement", "1 Guarantor required"],
      ["Share Contribution", "1% of loan amount"],
      ["Processing Charges", "0.75% of sanctioned loan amount"],
    ],
  },
};
/* ------------------ UI COMPONENTS ------------------ */

function EligibilityCard({ title, icon: Icon, items }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      
      <div className="bg-gray-100 text-black px-5 py-3 font-semibold text-base flex items-center gap-2">
        {Icon && <Icon className="text-lg text-blue-700" />}
        {title}
      </div>

      <div className="px-4 py-4">
        {items.map(([k, v], index) => (
          <div
            key={index}
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

export default function PropertyloanEligibity() {
  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-1 gap-6">
        <EligibilityCard {...gharkul_eligibilityData.conditions} />
      </div>
    </section>
  );
}
