
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import Gharkulfaq from "./Gharkulfaq.jsx";
import GharkulDoc from "./GharkulDoc.jsx";
import GharkulEligilibilty from "./GharkulEligilibilty.jsx";
import GharkulBenifit from "./GharkulBenifit.jsx";
import GharkulOverveiw from "./GharkulOverveiw.jsx";

const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <GharkulOverveiw />,
  "Features & Benefits": <GharkulBenifit />,
  "Eligibility": <GharkulEligilibilty />,
  "Documents": <GharkulDoc />,
  "FAQs": <Gharkulfaq />
};

export default function MainGharkul() {
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
            minAmount={40000}        // Minimum loan amount: ₹1 Lakh
            maxAmount={20000000}       // Maximum loan amount: ₹50 Lakh
            defaultAmount={500000}   // Default selected amount: ₹10 Lakh
            tenures={[48, 96, 144, 192, 240]} // Tenures in months
            rate={7.50}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}