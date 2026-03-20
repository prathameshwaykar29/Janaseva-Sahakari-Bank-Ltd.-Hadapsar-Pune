// import { useState } from "react";
// import CalculatorSidebar from "../../CalculatorSidebar.jsx";
// import AllTabs from "../../AllTabs.jsx";
// import Saralover from "./Saralover.jsx";
// import SaralBenefit from "./SaralBenefit.jsx";
// import SaralEiligibitly from "./SaralEiligibitly.jsx";
// import SaralDoc from "./SaralDoc.jsx";
// import Saralfaq from "./Saralfaq.jsx";

// const TABS = [
//   { label: "Overview" },
//   { label: "Features & Benefits" },
//   { label: "Eligibility" },
//   { label: "Documents" },
//   { label: "FAQs" }
// ];

// const TAB_COMPONENTS = {
//   "Overview": <Saralover />,
//   "Features & Benefits": <SaralBenefit />,
//   "Eligibility": <SaralEiligibitly />,
//   "Documents": <SaralDoc />,
//   "FAQs": <Saralfaq />
// };

// export default function MainSaral() {
//   const [tab, setTab] = useState("Overview"); // Correct initial tab

//   return (
//     <div className="bg-gray-200 text-[#1a2340] py-10">
//       <AllTabs tabs={TABS} activeTab={tab} onChange={setTab} />

//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 py-10 max-w-[1200px] mx-auto">
//         <div className="bg-white rounded-xl border border-[#dce3f0] shadow-sm overflow-hidden">
//           {TAB_COMPONENTS[tab]}
//         </div>

//         <div className="w-full lg:w-auto">
//           <CalculatorSidebar
//             title="Loan Calculator"
//             minAmount={10000}        // Minimum loan amount: ₹1 Lakh
//             maxAmount={1000000}       // Maximum loan amount: ₹50 Lakh
//             defaultAmount={50000}   // Default selected amount: ₹10 Lakh
//             tenures={[12, 40, 60 ,80,120]} // Tenures in months
//             rate={12.50}                // Interest rate: 9.50% for A-rated borrowers
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






import React from "react";
import { useState } from "react";
import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import Saralover from "./Saralover.jsx";
import SaralBenefit from "./SaralBenefit.jsx";
import SaralEiligibitly from "./SaralEiligibitly.jsx";
import SaralDoc from "./SaralDoc.jsx";
import Saralfaq from "./Saralfaq.jsx";
import { useLang } from "../../ImpFolder/LangContext.js";

const tabTranslations = {
  en: {
    Overview: "Overview",
    Features: "Features & Benefits",
    Eligibility: "Eligibility",
    Documents: "Documents",
    FAQs: "FAQs",
    calcTitle: "Loan Calculator",
  },
  mr: {
    Overview: "आढावा",
    Features: "वैशिष्ट्ये आणि फायदे",
    Eligibility: "पात्रता",
    Documents: "कागदपत्रे",
    FAQs: "वारंवार विचारले जाणारे प्रश्न",
    calcTitle: "कर्ज कॅल्क्युलेटर",
  },
};

export default function MainSaral() {
  const { lang } = useLang();
  const tl = tabTranslations[lang];

  const TABS = [
    { label: tl.Overview },
    { label: tl.Features },
    { label: tl.Eligibility },
    { label: tl.Documents },
    { label: tl.FAQs },
  ];

  const TAB_COMPONENTS = {
    [tl.Overview]: <Saralover />,
    [tl.Features]: <SaralBenefit />,
    [tl.Eligibility]: <SaralEiligibitly />,
    [tl.Documents]: <SaralDoc />,
    [tl.FAQs]: <Saralfaq />,
  };

  const [tab, setTab] = useState(tl.Overview);

  // Keep tab in sync when language switches
  const tabKeys = ["Overview", "Features", "Eligibility", "Documents", "FAQs"];
  const currentKey = tabKeys.find((k) => tl[k] === tab) ?? "Overview";

  const handleLangAwareTab = (newTab) => setTab(newTab);

  // Re-map tab when lang changes
  React.useEffect(() => {
    setTab(tl[currentKey]);
  }, [lang]);

  return (
    <div className="bg-gray-200 text-[#1a2340] py-10">
      <AllTabs tabs={TABS} activeTab={tab} onChange={handleLangAwareTab} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 py-10 max-w-[1200px] mx-auto">
        <div className="bg-white rounded-xl border border-[#dce3f0] shadow-sm overflow-hidden">
          {TAB_COMPONENTS[tab]}
        </div>

        <div className="w-full lg:w-auto">
          <CalculatorSidebar
            title={tl.calcTitle}
            loanName="Saral Karj Yojana"     // ← add this
            minAmount={10000}
            maxAmount={1000000}
            defaultAmount={50000}
            tenures={[12, 40, 60, 80, 120]}
            rate={12.50}
          />
        </div>
      </div>
    </div>
  );
}