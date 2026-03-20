import { FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const gharkul_eligibilityData = {
  conditions: {
    title: "Janaseva Gharkul Loan Eligibility",
    icon: FaBuilding,
    items: [
      ["Applicant Type", "Any Person having regular source of income"],
      ["Loan Purpose", "Purchase of New Flat / Resale House / Construction"],
      ["Maximum Loan", "Rs. 200.00 Lakh"],
      ["Interest Rate", "CIBIL 800+: 7.50% (upto 50L) / 7.75% (above 50L)"],
      ["Interest Rate", "CIBIL 700-799: 7.95% (upto 50L) / 8.20% (above 50L)"],
      ["Interest Rate", "CIBIL 650-699: 8.75% (upto 50L) / 9.00% (above 50L)"],
      ["Margin", "10% of Agreement Value or Realisable Value (whichever is lower)"],
      ["Loan Period", "240 Months"],
      ["Guarantor", "NA"],
      ["Shares", "1% — Max Rs.20,000 (upto 50L) / Max Rs.40,000 (above 50L)"],
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

export default function GharkulEligibility() {
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