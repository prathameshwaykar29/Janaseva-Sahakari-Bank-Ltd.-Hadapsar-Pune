import { useState } from "react";

const tradePack_faqs = [
  { q: "What is Property Loan / Builder Finance?", a: "It is a loan facility provided for purchase of property, construction, or financing of residential and commercial building projects." },
  { q: "Who is eligible for this loan?", a: "Any individual, builder, developer, or business entity having a regular source of income and clear property title is eligible." },
  { q: "What is the maximum loan amount?", a: "Loan amount is sanctioned based on project cost, repayment capacity, and bank norms." },
  { q: "What is the rate of interest?", a: "Interest rate is applicable as per the latest bank policy and may vary depending on borrower profile." },
  { q: "What margin is required?", a: "Generally, 20% to 30% margin of the total project or property cost is required." },
  { q: "What is the repayment period?", a: "Loan tenure can go up to 120 months depending on the loan type and repayment capacity." },
  { q: "Is guarantor required?", a: "Yes, minimum one guarantor may be required as per bank policy." },
  { q: "What are the processing charges?", a: "Processing charges are applicable as per bank rules along with required share contribution." },
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

export default function Propertyloanfaq() {
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













