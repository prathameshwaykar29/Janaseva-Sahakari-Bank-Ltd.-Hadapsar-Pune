import { FaCoins } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const goldLoan_eligibilityData = {
  conditions: {
    title: "Gold Loan Eligibility",
    icon: FaCoins,

    items: [
      ["Applicant Type", "Any Person having regular source of income"],
      ["Loan Purpose", "Any reason other than financial speculation"],
      ["Loan Amount", "Rs. 2.50 Lakh – Rs. 25 Lakh"],
      ["Interest Rate", "9.00% – 9.50% per annum"],
      ["Margin", "25% – 35% depending on scheme"],
      ["Loan Period", "12 Months – 48 Months"],
      ["Guarantor", "Not Required"],
      ["Shares", "Rs. 2000 – Rs. 10000 (depending on loan amount)"],
      ["Processing Fee", "NA"],
    ],
  },
};

/* ------------------ UI COMPONENTS ------------------ */

function EligibilityCard({ title, icon: Icon, items }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

      <div className="bg-gray-100 text-black px-5 py-3 font-semibold text-base flex items-center gap-2">
        {Icon && <Icon className="text-lg text-[#f47012]" />}
        {title}
      </div>

      <div className="px-4 py-4">
        {items.map(([k, v], index) => (
          <div
            key={index}
            className="flex justify-between gap-4 py-3 border-b last:border-none border-gray-100 text-sm"
          >
            <span className="text-gray-500">{k}</span>

            <span className="text-[#002d72] font-semibold text-right">
              {v}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */

export default function GoldEligibility() {
  return (
    <section className="bg-gray-50 rounded-xl p-6">

      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-1 gap-6">
        <EligibilityCard {...goldLoan_eligibilityData.conditions} />
      </div>

    </section>
  );
}