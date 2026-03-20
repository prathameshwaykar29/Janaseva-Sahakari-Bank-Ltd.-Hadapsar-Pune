
// import { FaBuilding } from "react-icons/fa";

// /* ------------------ DATA ------------------ */

// const gharkul_eligibilityData = {
//   conditions: {
//     icon: FaBuilding,
//   title: "Saral Karj Yojana (LAP) Eligibility",
//     items: [
//       ["Applicant Type", "Any Person / Legal Constitution having regular source of income"],
//       ["Loan Purpose", "Any reason other than financial speculation"],
//       ["Maximum Loan", "Upto Exposure Limit"],
//       ["Interest Rate", "12.50% per annum"],
//       ["Margin", "Upto 25 Lakh – 40% | Above 25 Lakh – 50%"],
//       ["Loan Period", "120 Months"],
//       ["Guarantor", "1 Required"],
//       ["Shares", "2.50%"],
//       ["Processing Fee", "1.00%"],
//     ],

//   },
// };

// /* ------------------ UI COMPONENTS ------------------ */

// function EligibilityCard({ title, icon: Icon, items }) {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      
//       <div className="bg-gray-100 text-black px-5 py-3 font-semibold text-base flex items-center gap-2">
//         {Icon && <Icon className="text-lg text-blue-700" />}
//         {title}
//       </div>

//       <div className="px-4 py-4">
//         {items.map(([k, v], index) => (
//           <div
//             key={index}
//             className="flex justify-between gap-4 py-3 border-b last:border-none border-gray-100 text-sm"
//           >
//             <span className="text-gray-500">{k}</span>
//             <span className="text-[#002d72] font-semibold text-right">{v}</span>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// /* ------------------ MAIN COMPONENT ------------------ */

// export default function SaralEiligibitly() {
//   return (
//     <section className="bg-gray-50 rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-[#002d72] mb-6">
//         Eligibility Criteria
//       </h2>

//       <div className="grid md:grid-cols-1 gap-6">
//         <EligibilityCard {...gharkul_eligibilityData.conditions} />
//       </div>
//     </section>
//   );
// }



import { FaBuilding } from "react-icons/fa";
import { useLang } from "../../ImpFolder/LangContext";

const translations = {
  en: {
    heading: "Eligibility Criteria",
    conditions: {
      icon: FaBuilding,
      title: "Saral Karj Yojana (LAP) Eligibility",
      items: [
        ["Applicant Type", "Any Person / Legal Constitution having regular source of income"],
        ["Loan Purpose", "Any reason other than financial speculation"],
        ["Maximum Loan", "Upto Exposure Limit"],
        ["Interest Rate", "12.50% per annum"],
        ["Margin", "Upto 25 Lakh – 40% | Above 25 Lakh – 50%"],
        ["Loan Period", "120 Months"],
        ["Guarantor", "1 Required"],
        ["Shares", "2.50%"],
        ["Processing Fee", "1.00%"],
      ],
    },
  },
  mr: {
    heading: "पात्रता निकष",
    conditions: {
      icon: FaBuilding,
      title: "सरल कर्ज योजना (LAP) पात्रता",
      items: [
        ["अर्जदाराचा प्रकार", "नियमित उत्पन्न स्त्रोत असलेली कोणतीही व्यक्ती / कायदेशीर संस्था"],
        ["कर्जाचा उद्देश", "आर्थिक सट्टेबाजी व्यतिरिक्त कोणतेही कारण"],
        ["कमाल कर्ज", "एक्सपोजर मर्यादेपर्यंत"],
        ["व्याज दर", "१२.५०% प्रति वर्ष"],
        ["मार्जिन", "२५ लाखांपर्यंत – ४०% | २५ लाखांवर – ५०%"],
        ["कर्ज कालावधी", "१२० महिने"],
        ["जामीनदार", "१ आवश्यक"],
        ["शेअर्स", "२.५०%"],
        ["प्रक्रिया शुल्क", "१.००%"],
      ],
    },
  },
};

function EligibilityCard({ title, icon: Icon, items }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 text-black px-5 py-3 font-semibold text-base flex items-center gap-2">
        {Icon && <Icon className="text-lg text-blue-700" />}
        {title}
      </div>
      <div className="px-4 py-4">
        {items.map(([k, v], index) => (
          <div key={index} className="flex justify-between gap-4 py-3 border-b last:border-none border-gray-100 text-sm">
            <span className="text-gray-500">{k}</span>
            <span className="text-[#002d72] font-semibold text-right">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SaralEiligibitly() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-[#002d72] mb-6">{t.heading}</h2>
      <div className="grid md:grid-cols-1 gap-6">
        <EligibilityCard {...t.conditions} />
      </div>
    </section>
  );
}