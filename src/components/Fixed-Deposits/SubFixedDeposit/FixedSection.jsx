


// import { useState, useEffect } from "react";
// import { CashDetails } from "./DataFixed.jsx";
// import DocumentsTabF from "./DocumentstabF.jsx";

// import InterestRatesTabF from "./InterestratestabF.jsx";
// import FeaturesTabF from "./FeaturestabF.jsx";
// import SidebarF from "./SidebarF.jsx";
// import FixedTab from "./FixedTab.jsx";
// import Monthlyfixed from "./Monthlyfixed.jsx";
// import ShortFixed from "./ShortFixed.jsx";
// import Cashfixed from "./Cashfixed.jsx";

// const TAB_COMPONENTS = {
//     "Features & Benefits": <FeaturesTabF />,
//     "Quarterly Interest Deposits": <InterestRatesTabF />,
//     "Monthly Interest Deposits": <Monthlyfixed />,
//     "Short Term Deposits": <ShortFixed />,
//     "Cash Certificate Deposits": <Cashfixed />,
//     "Documents": <DocumentsTabF />,

// };

// export default function FixedSection() {
//     const [tab, setTab] = useState("Overview");
//     const [isSticky, setIsSticky] = useState(false);

//     /* Sticky detection */
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsSticky(window.scrollY > 200);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div className="bg-gray-200 text-[#1a2340] py-10">

//             {/* ── Premium Gradient Sticky Tabs ── */}
//             <FixedTab tabs={TABS} activeTab={tab} onChange={setTab} />

//             {/* ── Content Layout ── */}
//             {/* <div className="grid grid-cols-[1fr_320px] gap-6  py-6 max-w-[1200px] mx-auto"> */}
//             <div className="
//   grid 
//   grid-cols-1 
//   lg:grid-cols-[1fr_320px] 
//   gap-6 
//   py-6 
   
//   max-w-[1200px] 
//   mx-auto
// ">

//                 {/* Left content */}
//                 <div className="bg-white rounded-xl border border-[#dce3f0] shadow-sm overflow-hidden">
//                     {TAB_COMPONENTS[tab]}
//                 </div>

//                 {/* Right sidebar */}
//                 <div className="w-full lg:w-auto">
//                     <SidebarF />
//                 </div>

//             </div>
//         </div>

//     );
// }






import { useState } from "react";
import DocumentsTabF from "./DocumentstabF.jsx";
import InterestRatesTabF from "./InterestratestabF.jsx";
import FeaturesTabF from "./FeaturestabF.jsx";
import SidebarF from "./SidebarF.jsx";
import FixedTab from "./FixedTab.jsx";
import Monthlyfixed from "./Monthlyfixed.jsx";
import ShortFixed from "./ShortFixed.jsx";
import Cashfixed from "./Cashfixed.jsx";

const TABS = [
  { label: "Features & Benefits" },
  { label: "Quarterly Interest Deposits" },
  { label: "Monthly Interest Deposits" },
  { label: "Short Term Deposits" },
  { label: "Cash Certificate Deposits" },
  { label: "Documents" },
];

const TAB_COMPONENTS = {
  "Features & Benefits": <FeaturesTabF />,
  "Quarterly Interest Deposits": <InterestRatesTabF />,
  "Monthly Interest Deposits": <Monthlyfixed />,
  "Short Term Deposits": <ShortFixed />,
  "Cash Certificate Deposits": <Cashfixed />,
  "Documents": <DocumentsTabF />,
};

export default function FixedSection() {
  const [tab, setTab] = useState("Features & Benefits"); // Correct initial tab

  return (
    <div className="bg-gray-200 text-[#1a2340] py-10">
      <FixedTab tabs={TABS} activeTab={tab} onChange={setTab} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 py-6 max-w-[1200px] mx-auto">
        <div className="bg-white rounded-xl border border-[#dce3f0] shadow-sm overflow-hidden">
          {TAB_COMPONENTS[tab]}
        </div>

        <div className="w-full lg:w-auto">
          <SidebarF />
        </div>
      </div>
    </div>
  );
}