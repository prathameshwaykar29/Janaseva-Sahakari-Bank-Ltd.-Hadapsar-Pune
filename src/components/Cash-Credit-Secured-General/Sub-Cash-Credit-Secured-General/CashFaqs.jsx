
import { useState } from "react";

const faqs = [
  {
    q: "What is Cash Credit Secured (General)?",
    a: "Cash Credit is a working capital facility provided to businesses to manage day-to-day expenses like purchasing stock and managing receivables."
  },
  {
    q: "What is the interest rate for Cash Credit Secured (General)?",
    a: "The interest rate starts from 11.50% per annum as per bank policy."
  },
  {
    q: "What is the maximum loan limit for Cash Credit?",
    a: "The loan limit is sanctioned based on the exposure and financial strength of the business."
  },
  {
    q: "What margin is required for Cash Credit?",
    a: "The margin requirement is 25% on stock and 40% on debtors as per bank norms."
  },
  {
    q: "What is the validity period of the Cash Credit facility?",
    a: "The Cash Credit facility is generally sanctioned for 12 months and can be renewed annually based on account performance."
  },
  {
    q: "Is a guarantor required for Cash Credit Secured loan?",
    a: "Yes, at least one guarantor is required for processing the Cash Credit facility."
  },
  {
    q: "What is the processing fee for Cash Credit?",
    a: "A processing fee of 0.75% of the sanctioned loan amount is applicable."
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

export default function CashFaqs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className=" p-6">
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