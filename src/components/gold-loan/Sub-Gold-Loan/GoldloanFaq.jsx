import { useState } from "react";

const goldLoan_faqs = [
  {
    q: "What is a Gold Loan?",
    a: "Gold Loan is a loan provided against pledge of gold jewellery. The loan amount is sanctioned based on the value and purity of the gold."
  },
  {
    q: "Who is eligible for a Gold Loan?",
    a: "Any person having a regular source of income and valid KYC documents can apply for a Gold Loan."
  },
  {
    q: "What is the maximum loan amount?",
    a: "You can avail a Gold Loan from Rs. 2.50 Lakh up to Rs. 25.00 Lakh depending on the value of gold pledged."
  },
  {
    q: "What is the interest rate for Gold Loan?",
    a: "Interest rate starts from 9.00% per annum and may go up to 9.50% depending on the loan scheme."
  },
  {
    q: "What is the repayment period?",
    a: "Repayment period ranges from 12 months to 48 months depending on the loan amount and repayment option."
  },
  {
    q: "Is a guarantor required for Gold Loan?",
    a: "No, generally guarantor is not required for Gold Loan as the loan is secured against gold jewellery."
  },
  {
    q: "What documents are required for Gold Loan?",
    a: "Basic KYC documents such as PAN Card, Aadhaar Card, photographs, address proof, and gold jewellery for pledge are required."
  },
  {
    q: "How is the gold valued?",
    a: "The pledged gold is evaluated by the bank's approved appraiser based on its purity and weight."
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
      <div
        onClick={onToggle}
        className={`
          flex justify-between items-center px-4 py-3 cursor-pointer
          text-base font-semibold transition-colors duration-200
          ${
            isOpen
              ? "bg-[#002d72] text-white"
              : "bg-white text-[#002d72] hover:bg-blue-50"
          }
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

      {isOpen && (
        <div className="px-4 py-3.5 text-sm text-gray-500 leading-relaxed bg-gray-50">
          {faq.a}
        </div>
      )}
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function GoldloanFaq() {
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
        {goldLoan_faqs.map((faq, index) => (
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