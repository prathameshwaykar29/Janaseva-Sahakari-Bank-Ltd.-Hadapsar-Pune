import { useState } from "react";

const tradePack_faqs = [
  { q: "What is the Janaseva Saral Overdraft Loan Scheme?", a: "It is an overdraft loan facility provided against property where borrowers can withdraw funds as needed up to the sanctioned limit." },
  { q: "Who is eligible for this loan?", a: "Any individual, business owner, or legal entity having a regular source of income and eligible property security can apply." },
  { q: "What is the maximum loan amount?", a: "Loan is sanctioned up to the eligible exposure limit based on property valuation and borrower repayment capacity." },
  { q: "What is the interest rate?", a: "The interest rate is 12.50% per annum as per the current bank policy." },
  { q: "What margin is required?", a: "Margin requirement is 35% of the property value as per bank norms." },
  { q: "What is the loan period?", a: "The loan facility can be sanctioned for a tenure up to 120 months." },
  { q: "Are guarantors required?", a: "Yes, a minimum of two guarantors are required for this loan scheme." },
  { q: "What are the processing charges?", a: "Processing fee of 1.00% of the sanctioned loan amount along with 2.50% share contribution is required." },
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

export default function OverDraftfaq() {
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













