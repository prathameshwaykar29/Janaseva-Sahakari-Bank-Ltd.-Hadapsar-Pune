
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import Twowheelerover from "./Twowheelerover.jsx";
import TwowheelerBenfit from "./TwowheelerBenfit.jsx";
import TwowheelerEiligoibity from "./TwowheelerEiligoibity.jsx";
import TwowheelerDoc from "./TwowheelerDoc.jsx";
import TwowheelerFaq from "./TwowheelerFaq.jsx";

const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <Twowheelerover />,
  "Features & Benefits": <TwowheelerBenfit />,
  "Eligibility": <TwowheelerEiligoibity />,
  "Documents": <TwowheelerDoc />,
  "FAQs": <TwowheelerFaq />
};

export default function MaintwoWheeler() {
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
            minAmount={20000}        // Minimum loan amount: ₹1 Lakh
            maxAmount={500000}       // Maximum loan amount: ₹50 Lakh
            defaultAmount={50000}   // Default selected amount: ₹10 Lakh
            tenures={[12, 24, 36, 48, 60]} // Tenures in months
            rate={9.85}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}