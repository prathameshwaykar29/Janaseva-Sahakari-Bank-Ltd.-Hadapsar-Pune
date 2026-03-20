
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import Document3 from "./Document3.jsx";
import Overveiw3 from "./Overveiw3.jsx";
import Eligibitly3 from "./Eligibitly3.jsx";
import Faqs3 from "./Faqs33.jsx";
import Benefits3 from "./Benefits3.jsx";


const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": < Overveiw3 />,
  "Features & Benefits": <Benefits3 />,
  "Eligibility": <Eligibitly3 />,
  "Documents": <Document3 />,
  "FAQs": <Faqs3 />
};

export default function MainSection3() {
  const [tab, setTab] = useState("Overview"); // Correct initial tab

  return (
    <div className="bg-gray-200 text-[#1a2340] py-10">
      <AllTabs tabs={TABS} activeTab={tab} onChange={setTab} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 py-10 max-w-[1200px] mx-auto">
        <div className="bg-white rounded-xl border border-[#dce3f0] shadow-sm overflow-hidden">
          {TAB_COMPONENTS[tab]}
        </div>

        <div className="w-full lg:w-auto">
          <CalculatorSidebar
            title="Loan Calculator"
            minAmount={10000}
            maxAmount={300000}
            defaultAmount={80000}
            tenures={[12, 24, 36, 48]}
            rate={10.50}
          />
        </div>
      </div>
    </div>
  );
}