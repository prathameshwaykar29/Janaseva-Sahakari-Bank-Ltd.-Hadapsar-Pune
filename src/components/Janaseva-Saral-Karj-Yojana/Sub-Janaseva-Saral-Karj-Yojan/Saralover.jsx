// import { SectionTitle, CardSection} from "../../LoanUi";
// import { FaPercentage, FaRupeeSign, FaCalendarAlt, FaCoins, FaUserShield } from "react-icons/fa";
// import { AiOutlineFileDone } from "react-icons/ai";

// const saralKarj_loanHighlights = [
//   [<FaPercentage />, "12.50%", "Rate of Interest"],
//   [<FaRupeeSign />, "Upto Exposure Limit", "Maximum Loan Limit"],
//   [<FaPercentage />, "40% – 50%", "Margin"],
//   [<FaCalendarAlt />, "120 Months", "Loan Period"],
//   [<FaCoins />, "2.50%", "Shares"],
//   [<AiOutlineFileDone />, "1.00%", "Processing Fee"],
//   [<FaUserShield />, "1 Required", "Guarantor"],
// ];



// export default function Saralover() {
//   return (
//     <CardSection>
//       <SectionTitle>Loan Glance</SectionTitle>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {saralKarj_loanHighlights.map(([icon, val, lbl]) => (
//           <div
//             key={lbl}
//             className="
//               bg-blue-50 border border-blue-200 rounded-md p-3 text-center
//               transition-all duration-200 cursor-default
//               hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg
//             "
//           >
//             <div className="text-3xl text-[#f47012] mb-2 flex justify-center">
//               {icon}
//             </div>

//             <div className="font-poppins text-[17px] font-bold text-[#002d72] leading-tight">
//               {val}
//             </div>

//             <div className="text-sm text-gray-500 mt-1">
//               {lbl}
//             </div>
//           </div>
//         ))}
//       </div>
//     </CardSection>
//   );
// }




import { SectionTitle, CardSection } from "../../LoanUi";
import { FaPercentage, FaRupeeSign, FaCalendarAlt, FaCoins, FaUserShield } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { useLang } from "../../ImpFolder/LangContext";

const translations = {
  en: {
    heading: "Loan Glance",
    highlights: [
      [<FaPercentage />, "12.50%", "Rate of Interest"],
      [<FaRupeeSign />, "Upto Exposure Limit", "Maximum Loan Limit"],
      [<FaPercentage />, "40% – 50%", "Margin"],
      [<FaCalendarAlt />, "120 Months", "Loan Period"],
      [<FaCoins />, "2.50%", "Shares"],
      [<AiOutlineFileDone />, "1.00%", "Processing Fee"],
      [<FaUserShield />, "1 Required", "Guarantor"],
    ],
  },
  mr: {
    heading: "कर्ज एक नजरेत",
    highlights: [
      [<FaPercentage />, "१२.५०%", "व्याज दर"],
      [<FaRupeeSign />, "एक्सपोजर मर्यादेपर्यंत", "कमाल कर्ज मर्यादा"],
      [<FaPercentage />, "४०% – ५०%", "मार्जिन"],
      [<FaCalendarAlt />, "१२० महिने", "कर्ज कालावधी"],
      [<FaCoins />, "२.५०%", "शेअर्स"],
      [<AiOutlineFileDone />, "१.००%", "प्रक्रिया शुल्क"],
      [<FaUserShield />, "१ आवश्यक", "जामीनदार"],
    ],
  },
};

export default function Saralover() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <CardSection>
      <SectionTitle>{t.heading}</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.highlights.map(([icon, val, lbl]) => (
          <div key={lbl} className="bg-blue-50 border border-blue-200 rounded-md p-3 text-center transition-all duration-200 cursor-default hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg">
            <div className="text-3xl text-[#f47012] mb-2 flex justify-center">{icon}</div>
            <div className="font-poppins text-[17px] font-bold text-[#002d72] leading-tight">{val}</div>
            <div className="text-sm text-gray-500 mt-1">{lbl}</div>
          </div>
        ))}
      </div>
    </CardSection>
  );
}