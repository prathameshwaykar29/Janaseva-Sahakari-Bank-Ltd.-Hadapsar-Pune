

import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import DecoreOver from "./DecoreOver.jsx";
import DecoreBenifit from "./DecoreBenifit.jsx";
import DecoreEligibilty from "./DecoreEligibilty.jsx";
import DecoreDoc from "./DecoreDoc.jsx";
import Decorefaq from "./Decorefaq.jsx";

const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <DecoreOver />,
  "Features & Benefits": <DecoreBenifit />,
  "Eligibility": <DecoreEligibilty />,
  "Documents": <DecoreDoc />,
  "FAQs": <Decorefaq />
};

export default function MainHomeDecore() {
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
            minAmount={10000}        // Minimum loan amount: ₹1 Lakh
            maxAmount={1000000}       // Maximum loan amount: ₹50 Lakh
            defaultAmount={50000}   // Default selected amount: ₹10 Lakh
            tenures={[24, 48, 72, 96, 120]} // Tenures in months
            rate={10.50}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}