
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";

import FaqsNew from "./FaqsNew.jsx";
import DocumentNew from "./DocumentNew.jsx";
import EligibiltyNew from "./EligibiltyNew.jsx";
import BenefitsNew from "./BenefitsNew.jsx";
import OverveiwNew from "./OverveiwNew.jsx";


const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": < OverveiwNew />,
  "Features & Benefits": <BenefitsNew />,
  "Eligibility": <EligibiltyNew />,
  "Documents": <DocumentNew />,
  "FAQs": <FaqsNew />
};

export default function MainsectionNew() {
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
            title="New Vehicle Loan Calculator"
            minAmount={10000}
            maxAmount={5000000}
            defaultAmount={100000}
            tenures={[12, 28, 56, 84]}
            rate={10}
          />
        </div>
      </div>
    </div>
  );
}