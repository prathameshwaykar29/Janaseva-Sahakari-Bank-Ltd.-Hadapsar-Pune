import { useState } from "react";

const tradePack_faqs = [
  { q: "What is Rent Discounting Loan?", a: "Rent Discounting Loan is a loan facility provided against the future rental income generated from a leased property." },
  { q: "Who is eligible for this loan?", a: "Property owners receiving regular rental income from a registered lease or rent agreement are eligible." },
  { q: "What is the maximum loan amount?", a: "Loan amount depends on the rental income, lease agreement period, and property valuation as per bank norms." },
  { q: "What is the interest rate?", a: "Interest rate is applicable as per the latest bank policy and borrower profile." },
  { q: "What margin is required?", a: "Margin requirement is applicable as per bank rules and may vary depending on property value and rental income." },
  { q: "What is the repayment period?", a: "Loan tenure is generally linked to the remaining lease period of the property." },
  { q: "Is a guarantor required?", a: "Yes, at least one guarantor may be required depending on the loan amount and bank policy." },
  { q: "What are the processing fees?", a: "Processing fee is charged as per bank rules along with required share contribution." },
];


/* ---------------- REUSABLE COMPONENT ---------------- */

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`
        border rounded-md overflow-hidden transition-colors duration-200
        ${isOpen ? "border-blue-500" : "border-[#dce3f0]"}
      `}
    >
      {/* Question */}
      <div
        onClick={onToggle}
        className={`
          flex justify-between items-center px-4 py-3 cursor-pointer
          text-base font-semibold transition-colors duration-200
          ${isOpen
            ? "bg-[#002d72] text-white"
            : "bg-white text-[#002d72] hover:bg-blue-50"}
        `}
      >
        <span>{faq.q}</span>

        <span
          className={`
            text-lg leading-none transition-transform duration-200 ml-3 shrink-0
            ${isOpen ? "rotate-45 text-white" : "text-[#f47012]"}
          `}
        >
          +
        </span>
      </div>

      {/* Answer */}
      {isOpen && (
        <div className="px-4 py-3.5 text-sm text-gray-500 leading-relaxed bg-gray-50">
          {faq.a}
        </div>
      )}
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function Rentfaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-2">
        {tradePack_faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={openFaq === index}
            onToggle={() => toggleFaq(index)}
          />
        ))}
      </div>
    </section>
  );
}













