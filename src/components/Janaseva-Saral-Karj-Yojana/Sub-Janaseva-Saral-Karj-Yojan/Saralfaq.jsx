// import { useState } from "react";

// const saralKarj_faqs = [
//   { q: "What is Janaseva Saral Karj Yojana?", a: "A loan against property (mortgage loan) where you pledge your residential or commercial property to get funds." },
//   { q: "What is the interest rate?", a: "12.50% per annum." },
//   { q: "What margin is required?", a: "40% for loans up to Rs. 25 lakh and 50% for loans above Rs. 25 lakh." },
//   { q: "What is the repayment period?", a: "Up to 120 months." },
//   { q: "For what purpose can I use this loan?", a: "Any purpose other than financial speculation." },
//   { q: "Is a guarantor required?", a: "Yes, 1 guarantor is required." },
// ];


// /* ---------------- REUSABLE COMPONENT ---------------- */

// function FaqItem({ faq, isOpen, onToggle }) {
//   return (
//     <div
//       className={`
//         border rounded-md overflow-hidden transition-colors duration-200
//         ${isOpen ? "border-blue-500" : "border-[#dce3f0]"}
//       `}
//     >
//       {/* Question */}
//       <div
//         onClick={onToggle}
//         className={`
//           flex justify-between items-center px-4 py-3 cursor-pointer
//           text-base font-semibold transition-colors duration-200
//           ${isOpen
//             ? "bg-[#002d72] text-white"
//             : "bg-white text-[#002d72] hover:bg-blue-50"}
//         `}
//       >
//         <span>{faq.q}</span>

//         <span
//           className={`
//             text-lg leading-none transition-transform duration-200 ml-3 shrink-0
//             ${isOpen ? "rotate-45 text-white" : "text-[#f47012]"}
//           `}
//         >
//           +
//         </span>
//       </div>

//       {/* Answer */}
//       {isOpen && (
//         <div className="px-4 py-3.5 text-sm text-gray-500 leading-relaxed bg-gray-50">
//           {faq.a}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function Saralfaq() {
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <section className="p-6">
//       <h2 className="text-xl font-semibold text-[#002d72] mb-6">
//         Frequently Asked Questions
//       </h2>

//       <div className="flex flex-col gap-2">
//         {saralKarj_faqs.map((faq, index) => (
//           <FaqItem
//             key={index}
//             faq={faq}
//             isOpen={openFaq === index}
//             onToggle={() => toggleFaq(index)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }













import { useState } from "react";
import { useLang } from "../../ImpFolder/LangContext";

const translations = {
  en: {
    heading: "Frequently Asked Questions",
    faqs: [
      { q: "What is Janaseva Saral Karj Yojana?", a: "A loan against property (mortgage loan) where you pledge your residential or commercial property to get funds." },
      { q: "What is the interest rate?", a: "12.50% per annum." },
      { q: "What margin is required?", a: "40% for loans up to Rs. 25 lakh and 50% for loans above Rs. 25 lakh." },
      { q: "What is the repayment period?", a: "Up to 120 months." },
      { q: "For what purpose can I use this loan?", a: "Any purpose other than financial speculation." },
      { q: "Is a guarantor required?", a: "Yes, 1 guarantor is required." },
    ],
  },
  mr: {
    heading: "वारंवार विचारले जाणारे प्रश्न",
    faqs: [
      { q: "जनसेवा सरल कर्ज योजना म्हणजे काय?", a: "मालमत्तेवर कर्ज (मॉर्गेज कर्ज) जिथे आपण निधी मिळविण्यासाठी आपली निवासी किंवा व्यावसायिक मालमत्ता तारण ठेवता." },
      { q: "व्याज दर किती आहे?", a: "१२.५०% प्रति वर्ष." },
      { q: "किती मार्जिन आवश्यक आहे?", a: "रु. २५ लाखांपर्यंतच्या कर्जासाठी ४०% आणि रु. २५ लाखांवरील कर्जासाठी ५०%." },
      { q: "परतफेड कालावधी किती आहे?", a: "१२० महिन्यांपर्यंत." },
      { q: "या कर्जाचा उपयोग कोणत्या उद्देशासाठी करता येतो?", a: "आर्थिक सट्टेबाजी व्यतिरिक्त कोणत्याही उद्देशासाठी." },
      { q: "जामीनदार आवश्यक आहे का?", a: "होय, १ जामीनदार आवश्यक आहे." },
    ],
  },
};

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border rounded-md overflow-hidden transition-colors duration-200 ${isOpen ? "border-blue-500" : "border-[#dce3f0]"}`}>
      <div
        onClick={onToggle}
        className={`flex justify-between items-center px-4 py-3 cursor-pointer text-base font-semibold transition-colors duration-200 ${isOpen ? "bg-[#002d72] text-white" : "bg-white text-[#002d72] hover:bg-blue-50"}`}
      >
        <span>{faq.q}</span>
        <span className={`text-lg leading-none transition-transform duration-200 ml-3 shrink-0 ${isOpen ? "rotate-45 text-white" : "text-[#f47012]"}`}>+</span>
      </div>
      {isOpen && (
        <div className="px-4 py-3.5 text-sm text-gray-500 leading-relaxed bg-gray-50">{faq.a}</div>
      )}
    </div>
  );
}

export default function Saralfaq() {
  const [openFaq, setOpenFaq] = useState(null);
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">{t.heading}</h2>
      <div className="flex flex-col gap-2">
        {t.faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} isOpen={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? null : index)} />
        ))}
      </div>
    </section>
  );
}