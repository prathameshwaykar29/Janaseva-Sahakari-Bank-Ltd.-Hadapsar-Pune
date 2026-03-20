
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import CashOverview from "./CashOverview.jsx";
import Cashbenifits from "./Cashbenifits.jsx";
import CashEligibitly from "./CashEligibitly.jsx";
import CashDocument from "./CashDocument.jsx";
import CashFaqs from "./CashFaqs.jsx";


const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <CashOverview />,
  "Features & Benefits": <Cashbenifits />,
  "Eligibility": <CashEligibitly />,
  "Documents": <CashDocument />,
  "FAQs": <CashFaqs />
};

export default function CashMain() {
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
            minAmount={1000}
            maxAmount={50000}
            defaultAmount={100000}
            tenures={[6, 8, 12]}
            rate={11.50}
          />
        </div>
      </div>
    </div>
  );
}