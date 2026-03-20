
// import { useState } from "react";
// import { FaIdCard, FaHome } from "react-icons/fa";
// import { HiDocumentText } from "react-icons/hi";
// import { SectionTitle, CardSection } from "../../LoanUi";

// /* ---------------- NEW LOAN DOCUMENT DATA ---------------- */

// const homeDecore_loanDocsData = {
//   General: [
//     {
//       cat: "KYC Documents",
//       icon: FaIdCard,
//      items: [
//         { name: "Photographs – 3 Copies (Borrower & Guarantor)", note: "Mandatory" },
//         { name: "PAN Card", note: "Mandatory" },
//         { name: "Aadhaar Card", note: "Mandatory" },
//         { name: "Address Proof", note: "Required" },
//         { name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
//       ],

//     },
//     {
//       cat: "Financial Documents",
//       items: [
//         { name: "Last 3 Years IT Returns / Balance Sheet with Audit Report", note: "Mandatory" },
//         { name: "Last 12 Months Bank Statement", note: "Mandatory" },
//         { name: "Property Documents (Original & Xerox)", note: "Mandatory" },
//         { name: "Property Valuation by panel valuer", note: "Mandatory" },
//         { name: "Title & Search Report by panel advocate", note: "Mandatory" },
//         { name: "CERSAI Search Report", note: "Mandatory" },
//         { name: "Details of Insurance cover on Property", note: "Mandatory" },
//         { name: "Proof of Source of Margin Money", note: "Mandatory" },
//       ],

//     },
//   ],
// };

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function SaralDoc() {
//   const [docTab] = useState("General");

//   return (
//     <CardSection>
//       <SectionTitle>Documents </SectionTitle>

//       {homeDecore_loanDocsData[docTab].map((cat) => {
//         const Icon = cat.icon;

//         return (
//           <div key={cat.cat} className="mb-5">

//             {/* Category Title */}
//             <div className="flex items-center gap-2 text-base font-bold text-black uppercase tracking-wide mb-2.5 pb-1.5 border-b border-[#dce3f0]">
//               <Icon className="text-[#f47012]" />
//               {cat.cat}
//             </div>

//             {/* Document List */}
//             <div className="flex flex-col gap-1.5">
//               {cat.items.map((item) => (
//                 <div
//                   key={item.name}
//                   className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-gray-50 text-[#1a2340]"
//                 >
//                   <span className="text-lg shrink-0 text-[#f47012]">
//                     <Icon />
//                   </span>

//                   <span className="flex-1 text-sm">{item.name}</span>

//                   <span className="text-sm text-gray-400 italic ml-auto">
//                     {item.note}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         );
//       })}
//     </CardSection>
//   );
// }










import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { SectionTitle, CardSection } from "../../LoanUi";
import { useLang } from "../../ImpFolder/LangContext";
/* ---------------- TRANSLATIONS ---------------- */

const translations = {
  en: {
    sectionTitle: "Documents",
    categories: {
      kyc: {
        cat: "KYC Documents",
        icon: FaIdCard,
        items: [
          { name: "Photographs – 3 Copies (Borrower & Guarantor)", note: "Mandatory" },
          { name: "PAN Card", note: "Mandatory" },
          { name: "Aadhaar Card", note: "Mandatory" },
          { name: "Address Proof", note: "Required" },
          { name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
        ],
      },
      financial: {
        cat: "Financial Documents",
        icon: FaIdCard,
        items: [
          { name: "Last 3 Years IT Returns / Balance Sheet with Audit Report", note: "Mandatory" },
          { name: "Last 12 Months Bank Statement", note: "Mandatory" },
          { name: "Property Documents (Original & Xerox)", note: "Mandatory" },
          { name: "Property Valuation by panel valuer", note: "Mandatory" },
          { name: "Title & Search Report by panel advocate", note: "Mandatory" },
          { name: "CERSAI Search Report", note: "Mandatory" },
          { name: "Details of Insurance cover on Property", note: "Mandatory" },
          { name: "Proof of Source of Margin Money", note: "Mandatory" },
        ],
      },
    },
  },
  mr: {
    sectionTitle: "कागदपत्रे",
    categories: {
      kyc: {
        cat: "केवायसी कागदपत्रे",
        icon: FaIdCard,
        items: [
          { name: "फोटो – ३ प्रती (कर्जदार आणि जामीनदार)", note: "अनिवार्य" },
          { name: "पॅन कार्ड", note: "अनिवार्य" },
          { name: "आधार कार्ड", note: "अनिवार्य" },
          { name: "पत्त्याचा पुरावा", note: "आवश्यक" },
          { name: "सिबिल व इतर क्रेडिट अहवाल", note: "बँक पडताळणी" },
        ],
      },
      financial: {
        cat: "आर्थिक कागदपत्रे",
        icon: FaIdCard,
        items: [
          { name: "मागील ३ वर्षांचे आयटी रिटर्न / लेखापरीक्षण अहवालासह ताळेबंद", note: "अनिवार्य" },
          { name: "मागील १२ महिन्यांचे बँक स्टेटमेंट", note: "अनिवार्य" },
          { name: "मालमत्ता कागदपत्रे (मूळ आणि झेरॉक्स)", note: "अनिवार्य" },
          { name: "पॅनेल मूल्यांकनकर्त्याद्वारे मालमत्ता मूल्यांकन", note: "अनिवार्य" },
          { name: "पॅनेल वकिलाद्वारे मालकी हक्क व शोध अहवाल", note: "अनिवार्य" },
          { name: "सीईआरएसएआय शोध अहवाल", note: "अनिवार्य" },
          { name: "मालमत्तेवरील विमा संरक्षणाचा तपशील", note: "अनिवार्य" },
          { name: "मार्जिन मनीच्या स्त्रोताचा पुरावा", note: "अनिवार्य" },
        ],
      },
    },
  },
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function SaralDoc() {
  const [docTab] = useState("General");
  const { lang } = useLang();
  const t = translations[lang];
  const categories = Object.values(t.categories);

  return (
    <CardSection>
      <SectionTitle>{t.sectionTitle}</SectionTitle>

      {categories.map((cat) => {
        const Icon = cat.icon;

        return (
          <div key={cat.cat} className="mb-5">

            {/* Category Title */}
            <div className="flex items-center gap-2 text-base font-bold text-black uppercase tracking-wide mb-2.5 pb-1.5 border-b border-[#dce3f0]">
              <Icon className="text-[#f47012]" />
              {cat.cat}
            </div>

            {/* Document List with Numbers */}
            <div className="flex flex-col gap-1.5">
              {cat.items.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-gray-50 text-[#1a2340]"
                >
                  {/* Number Badge */}
                  <span className="w-6 h-6 rounded-full bg-[#1e3163] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>

                  <span className="flex-1 text-sm">{item.name}</span>

                  <span className="text-sm text-gray-400 italic ml-auto whitespace-nowrap">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>

          </div>
        );
      })}
    </CardSection>
  );
}