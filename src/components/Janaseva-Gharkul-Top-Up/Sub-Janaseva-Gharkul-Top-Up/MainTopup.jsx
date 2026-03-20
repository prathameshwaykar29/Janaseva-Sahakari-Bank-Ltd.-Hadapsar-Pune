
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import TopupOver from "./TopupOver.jsx";
import Topupbenifits from "./Topupbenifits.jsx";
import TopupEligibilty from "./TopupEligibilty.jsx";
import TopupDoc from "./TopupDoc.jsx";
import Topupfaq from "./Topupfaq.jsx";


const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <TopupOver />,
  "Features & Benefits": <Topupbenifits />,
  "Eligibility": <TopupEligibilty />,
  "Documents": <TopupDoc />,
  "FAQs": <Topupfaq />
};

export default function MainTopup() {
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
            minAmount={100000}        // Minimum loan amount: ₹1 Lakh
            maxAmount={7500000}       // Maximum loan amount: ₹50 Lakh
            defaultAmount={1000000}   // Default selected amount: ₹10 Lakh
            tenures={[24, 48, 72, 96, 120]} // Tenures in months
            rate={10.00}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}