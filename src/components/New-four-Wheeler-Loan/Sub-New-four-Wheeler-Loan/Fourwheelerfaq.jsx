
import { useState } from "react";

const fourWheeler_faqs = [
  { q: "What is the New Four Wheeler Loan?", a: "A loan to finance the purchase of a brand-new 4-wheeler car for personal use." },
  { q: "What is the maximum loan amount?", a: "Up to Rs. 50 lakh." },
  { q: "What is the interest rate?", a: "8.25% to 9.00% per annum depending on CIBIL score. E-vehicle buyers get an additional 0.25% discount." },
  { q: "What margin is required?", a: "10% of on-road cost (Ex-Showroom + RTO + Insurance)." },
  { q: "What is the repayment period?", a: "Up to 60 months, extendable to 84 months on case to case basis." },
  { q: "Is a guarantor required?", a: "1 guarantor required only for loans above Rs. 25 lakh." },
  { q: "What is the processing fee?", a: "Nil — no processing fee is charged." },
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

export default function Fourwheelerfaq() {
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
        {fourWheeler_faqs.map((faq, index) => (
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













