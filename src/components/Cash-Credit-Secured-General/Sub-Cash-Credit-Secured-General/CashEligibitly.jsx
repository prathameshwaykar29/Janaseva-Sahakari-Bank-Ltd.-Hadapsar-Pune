import { FaUserTie, FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const eligibilityData = {
  borrower: {
    title: "Borrower Eligibility",
    icon: FaUserTie,
    items: [
      ["Applicant Type", "Any Person / Legal Constitution"],
      ["Income Source", "Regular source of income required"],
      ["Age Limit", "21 – 60 years"],
      ["Occupation", "Business / Self-Employed / Professional"],
      ["CIBIL Score", "650 or above preferred"],
      ["Residence", "Resident Indian"],
    ],
  },

  cashCreditConditions: {
    title: "Cash Credit Secured (General) Conditions",
    icon: FaBuilding,
    items: [
      ["Loan Purpose", "Working Capital Requirement for Business"],
      ["Maximum Loan", "Up to Exposure Limit"],
      ["Interest Rate", "11.50% per annum"],
      ["Margin", "Stock – 25% / Debtors – 40%"],
      ["Loan Period", "12 Months (Renewable Annually)"],
      ["Guarantor", "Minimum 1 Guarantor required"],
      ["Shares", "2.50% share amount required"],
      ["Processing Fee", "0.75% of Loan Amount"],
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

export default function CashEligibitly() {
  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <EligibilityCard {...eligibilityData.borrower} />
        <EligibilityCard {...eligibilityData.cashCreditConditions} />
      </div>
    </section>
  );
}