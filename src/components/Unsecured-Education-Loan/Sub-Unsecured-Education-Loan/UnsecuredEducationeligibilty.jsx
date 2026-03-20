
import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const gharkul_eligibilityData = {
  conditions: {
    icon: FaBuilding,
      title: "Unsecured Education Loan Eligibility",
    items: [
      ["Applicant Type", "Any Person having regular source of income"],
      ["Loan Purpose", "For higher education in India & abroad"],
      ["Maximum Loan", "Rs. 5 Lakh"],
      ["Interest Rate", "10.00% per annum"],
      ["Margin", "10%"],
      ["Loan Period", "120 Months (Course Period + 6 Months + 5 Years)"],
      ["Guarantor", "1 Required"],
      ["Shares", "5%"],
      ["Processing Fee", "Nil"],
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

export default function UnsecuredEducationeligibilty() {
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


