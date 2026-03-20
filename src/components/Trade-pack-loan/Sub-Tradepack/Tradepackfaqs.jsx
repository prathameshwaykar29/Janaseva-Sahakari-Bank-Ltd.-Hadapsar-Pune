


import { useState } from "react";

const tradePack_faqs = [
  { q: "What is the Trade Pack Loan?", a: "A comprehensive loan for traders covering purchase of land, shop, godown, furniture, and working capital via cash credit." },
  { q: "Who is eligible?", a: "Any Person, Business, Trader, or Legal Constitution having a regular source of income." },
  { q: "What is the maximum loan amount?", a: "Up to Rs. 50.00 lakh for Term Loan. Cash Credit available based on working capital requirement." },
  { q: "What is the interest rate?", a: "10.00% per annum as per the latest bank policy." },
  { q: "What margin is required?", a: "Term Loan – 20% | Cash Credit – 25% on stocks and debtors." },
  { q: "What is the repayment period?", a: "Term Loan: 60 to 120 months. Cash Credit: 12 months (renewable)." },
  { q: "Is a guarantor required?", a: "Yes, minimum 1 guarantor is required." },
  { q: "What are the processing fees?", a: "Processing fee of 1.00% of the loan amount. Shares of 2.50% required." },
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

export default function Tradepackfaqs() {
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