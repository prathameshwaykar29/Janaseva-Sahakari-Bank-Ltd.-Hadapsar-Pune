
import { useState } from "react";


const faqs = [
  {
    q: "What is the maximum loan amount for a New Commercial Vehicle Loan?",
    a: "You can avail a loan up to ₹50.00 lakh depending on eligibility and the cost of the vehicle."
  },
  {
    q: "What is the interest rate for the New Commercial Vehicle Loan?",
    a: "The interest rate for the loan starts from 10% per annum as per bank policy."
  },
  {
    q: "What is the repayment tenure for the loan?",
    a: "The repayment tenure is up to 60 months for loans up to ₹25 lakh and up to 84 months for loans above ₹25 lakh."
  },
  {
    q: "How much margin is required for the loan?",
    a: "A margin of 15% of the on-road cost of the vehicle is required."
  },
  {
    q: "What are the share requirements for the loan?",
    a: "Members are required to maintain shares equivalent to 2.50% of the loan amount as per bank rules."
  },
  {
    q: "Is there any processing fee for the loan?",
    a: "Yes, a processing fee of 1.00% of the loan amount is applicable."
  },
  {
    q: "Is a guarantor required for the loan?",
    a: "Yes, at least one guarantor is required for processing the loan."
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

export default function FaqsNew() {
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