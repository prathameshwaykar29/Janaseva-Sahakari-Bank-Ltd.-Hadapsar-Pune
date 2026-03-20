

import { useState } from "react";

const gharkul_faqs = [
  {
    q: "What is the Janaseva Gharkul Loan Scheme?",
    a: "It is a housing loan scheme designed to help individuals purchase a new flat, resale house, or construct their own home.",
  },
  {
    q: "Who is eligible to apply?",
    a: "Any person having a regular source of income is eligible to apply.",
  },
  {
    q: "What is the maximum loan amount?",
    a: "The maximum loan amount is Rs. 200.00 lakh.",
  },
  {
    q: "What is the interest rate?",
    a: "Interest rate ranges from 7.50% to 9.00% per annum depending on CIBIL score and loan amount.",
  },
  {
    q: "What margin is required?",
    a: "10% margin on agreement value or realisable value, whichever is lower.",
  },
  {
    q: "What is the repayment period?",
    a: "The loan can be repaid over a period of up to 240 months (20 years).",
  },
  {
    q: "Is a guarantor required?",
    a: "No guarantor is required for this housing loan scheme.",
  },
  {
    q: "What is the processing fee?",
    a: "There is no processing fee for this loan scheme.",
  },
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

export default function Gharkulfaq() {
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
        {gharkul_faqs.map((faq, index) => (
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













