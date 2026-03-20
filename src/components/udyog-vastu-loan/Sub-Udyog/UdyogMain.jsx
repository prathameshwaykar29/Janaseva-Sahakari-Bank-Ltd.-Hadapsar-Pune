

import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import UdyogOverveiw from "./UdyogOverveiw.jsx";
import UdyogBenifits from "./UdyogBenifits.jsx";
import UdyogEligibilty from "./UdyogEligibilty.jsx";
import Udyogdocument from "./Udyogdocument.jsx";
import UdyogFaq from "./UdyogFaq.jsx";


const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <UdyogOverveiw />,
  "Features & Benefits": <UdyogBenifits />,
  "Eligibility": <UdyogEligibilty />,
  "Documents": <Udyogdocument />,
  "FAQs": <UdyogFaq />
};

export default function UdyogMain() {
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
            maxAmount={5000000}       // Maximum loan amount: ₹50 Lakh
            defaultAmount={1000000}   // Default selected amount: ₹10 Lakh
            tenures={[12, 24, 36, 60, 84, 120]} // Tenures in months
            rate={9.5}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}