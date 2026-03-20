
import { useState } from "react";
import { FaUserTie, FaBuilding } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const eligibilityData = {
  borrower: {
    title: "Borrower Eligibility",
    icon: FaUserTie,
    items: [
      ["Applicant Type", "Any Individual / Legal Constitution"],
      ["Income Source", "Regular source of income required"],
      ["Age Limit", "21 – 60 years"],
      ["Occupation", "Salaried / Self-Employed / Business"],
      ["CIBIL Score", "650 or above preferred"],
      ["Residence", "Resident Indian"],
    ],
  },

  vehicleConditions: {
    title: "Vehicle Loan Conditions",
    icon: FaBuilding,
    items: [
      ["Loan Purpose", "Purchase of 3-Wheeler Vehicle"],
      ["Maximum Loan", "Up to ₹3.00 Lakh"],
      ["Margin", "25% of Ex-Showroom Price"],
      ["Loan Period", "Up to 48 Months"],
      ["Guarantor", "Minimum 1 Guarantor required"],
      ["Shares", "2.50% share amount required"],
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

export default function Eligibitly3() {
 
  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Eligibility Criteria
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <EligibilityCard {...eligibilityData.borrower} />
        <EligibilityCard {...eligibilityData.vehicleConditions} />
      </div>
    </section>
  );
}