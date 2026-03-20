
// import { FaCheckCircle } from "react-icons/fa";

// /* ---------------- FEATURES DATA ---------------- */
// const saralKarj_features = [
//   { title: "Loan Against Property", desc: "Mortgage your residential or commercial property to get funds for any purpose other than financial speculation." },
//   { title: "Long Repayment Period", desc: "Repay over a comfortable period of up to 120 months (10 years)." },
//   { title: "High Loan Amount", desc: "Loan amount up to exposure limit based on property valuation." },
//   { title: "Dual Margin Slab", desc: "40% margin for loans up to Rs. 25 lakh; 50% margin for loans above Rs. 25 lakh." },
//   { title: "Any Purpose Funding", desc: "Use the funds for business expansion, debt repayment, or any other legitimate purpose." },
// ];


// /* ---------------- REUSABLE FEATURE ITEM ---------------- */

// function FeatureItem({ title, desc }) {
//     return (
//         <div
//             className="
//         flex items-start gap-3 px-3 py-3 rounded-md
//         bg-gray-50 border-l-[3px] border-[#1e3163]
//         transition-all duration-200
//         hover:bg-blue-50 hover:border-l-[#f47012]
//       "
//         >
//             <div className="text-[#0a7c59] text-lg shrink-0 mt-0.5">
//                 <FaCheckCircle />
//             </div>

//             <div>
//                 <h5 className="text-base font-semibold text-[#002d72] mb-0.5">
//                     {title}
//                 </h5>

//                 <p className="text-sm text-gray-500 leading-relaxed">
//                     {desc}
//                 </p>
//             </div>
//         </div>
//     );
// }

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function SaralBenefit() {
//     return (
//         <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <h2 className="text-xl font-semibold text-[#002d72] mb-6">
//                 Features & Benefits
//             </h2>

//             <div className="flex flex-col gap-3">
//                 {saralKarj_features.map((feature, index) => (
//                     <FeatureItem
//                         key={index}
//                         title={feature.title}
//                         desc={feature.desc}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }  






import { FaCheckCircle } from "react-icons/fa";
import { useLang } from "../../ImpFolder/LangContext";

const translations = {
  en: {
    heading: "Features & Benefits",
    features: [
      { title: "Loan Against Property", desc: "Mortgage your residential or commercial property to get funds for any purpose other than financial speculation." },
      { title: "Long Repayment Period", desc: "Repay over a comfortable period of up to 120 months (10 years)." },
      { title: "High Loan Amount", desc: "Loan amount up to exposure limit based on property valuation." },
      { title: "Dual Margin Slab", desc: "40% margin for loans up to Rs. 25 lakh; 50% margin for loans above Rs. 25 lakh." },
      { title: "Any Purpose Funding", desc: "Use the funds for business expansion, debt repayment, or any other legitimate purpose." },
    ],
  },
  mr: {
    heading: "वैशिष्ट्ये आणि फायदे",
    features: [
      { title: "मालमत्तेवर कर्ज", desc: "आर्थिक सट्टेबाजी व्यतिरिक्त कोणत्याही उद्देशासाठी निधी मिळविण्यासाठी आपली निवासी किंवा व्यावसायिक मालमत्ता गहाण ठेवा." },
      { title: "दीर्घ परतफेड कालावधी", desc: "१२० महिने (१० वर्षे) पर्यंत आरामदायक कालावधीत परतफेड करा." },
      { title: "उच्च कर्ज रक्कम", desc: "मालमत्ता मूल्यांकनावर आधारित एक्सपोजर मर्यादेपर्यंत कर्ज रक्कम." },
      { title: "दुहेरी मार्जिन स्लॅब", desc: "रु. २५ लाखांपर्यंतच्या कर्जासाठी ४०% मार्जिन; रु. २५ लाखांवरील कर्जासाठी ५०% मार्जिन." },
      { title: "कोणत्याही उद्देशासाठी वित्तपुरवठा", desc: "व्यवसाय विस्तार, कर्ज परतफेड किंवा इतर कोणत्याही कायदेशीर उद्देशासाठी निधी वापरा." },
    ],
  },
};

function FeatureItem({ title, desc }) {
  return (
    <div className="flex items-start gap-3 px-3 py-3 rounded-md bg-gray-50 border-l-[3px] border-[#1e3163] transition-all duration-200 hover:bg-blue-50 hover:border-l-[#f47012]">
      <div className="text-[#0a7c59] text-lg shrink-0 mt-0.5"><FaCheckCircle /></div>
      <div>
        <h5 className="text-base font-semibold text-[#002d72] mb-0.5">{title}</h5>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function SaralBenefit() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">{t.heading}</h2>
      <div className="flex flex-col gap-3">
        {t.features.map((feature, index) => (
          <FeatureItem key={index} title={feature.title} desc={feature.desc} />
        ))}
      </div>
    </section>
  );
}