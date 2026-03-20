
import { useState } from "react";

/* ---------------- FAQ DATA ---------------- */

/* ---------------- FAQ DATA ---------------- */

const faqs = [
  {
    q: "What is the maximum loan amount for a 3-Wheeler Loan?",
    a: "You can avail a loan up to ₹3.00 lakh depending on eligibility and the cost of the vehicle."
  },
  {
    q: "What is the interest rate for a 3-Wheeler Loan?",
    a: "The interest rate starts from 10% (ITR) and 10.50% (Declaration) as per bank policy."
  },
  {
    q: "What is the repayment tenure for the loan?",
    a: "The maximum repayment period for a 3-wheeler loan is up to 48 months."
  },
  {
    q: "How much margin is required for the loan?",
    a: "A margin of 25% of the ex-showroom price including tax and insurance is required."
  },
  {
    q: "Is a guarantor required for the loan?",
    a: "Yes, at least one guarantor is required for processing the 3-wheeler loan."
  },
  {
    q: "How long does loan approval take?",
    a: "Loan approval generally takes 3–5 working days after document verification."
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

export default function Faqs3() {
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