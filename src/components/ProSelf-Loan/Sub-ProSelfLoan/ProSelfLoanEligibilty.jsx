
import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const gharkul_eligibilityData = {
  conditions: {
    icon: FaBuilding,
  title: "ProSelf Loan Eligibility",
    items: [
      ["Applicant Type", "Surveyors, Advocates, Accountants, Animal Doctors, Pilots, Engineers, Librarians, Architects, Physiotherapists, Dentists, Doctors etc."],
      ["Loan Purpose", "Purchase of Office / Godown / Furniture for business & Working Capital"],
      ["Maximum Loan", "Term Loan – Rs. 10 Lakh | Cash Credit – Rs. 2 Lakh"],
      ["Interest Rate", "10.00% per annum"],
      ["Margin", "Term Loan – 20% | Cash Credit – 25%"],
      ["Loan Period", "TL – 60 to 120 Months | CC – 12 Months"],
      ["Guarantor", "1 Required"],
      ["Shares", "2.50%"],
      ["Processing Fee", "1.00%"],
      ["Collateral Security", "50% other than purchase of immovable property"],
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

export default function ProSelfLoanEligibilty() {
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
