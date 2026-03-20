import { useState } from "react";

const faqs = [
  {
    q: "What is Hypothecation ",
    a: "It is a loan scheme designed to provide financial support for businesses to purchase furniture or manage working capital requirements."
  },
  {
    q: "Who is eligible to apply for this loan?",
    a: "Any Person, Business, Trader, or Legal Constitution having a regular source of income is eligible."
  },
  {
    q: "What is the maximum loan amount?",
    a: "The loan amount is sanctioned based on the exposure limit and financial standing of the applicant."
  },
  {
    q: "What is the interest rate for the loan?",
    a: "The interest rate for this loan is 11.50% per annum as per bank policy."
  },
  {
    q: "What margin is required?",
    a: "A margin of 25% on stock and 40% on debtors is required."
  },
  {
    q: "What is the loan repayment period?",
    a: "The loan can be repaid over a period of up to 84 months."
  },
  {
    q: "Is a guarantor required?",
    a: "Yes, at least one guarantor is required for processing the loan."
  },
  {
    q: "Are there any processing fees?",
    a: "A processing fee of 1% of the loan amount is applicable."
  }
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

export default function HypothecationFaqs() {
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
        {faqs.map((faq, index) => (
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