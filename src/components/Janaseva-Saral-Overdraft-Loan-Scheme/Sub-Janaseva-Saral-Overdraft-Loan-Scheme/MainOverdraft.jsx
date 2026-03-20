import { useState } from "react";
import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import OverDraftover from "./OverDraftover.jsx";
import OverDraftEligibilty from "./OverDraftEligibilty.jsx";
import OverDraftBenefiits from "./OverDraftBenefiits.jsx";
import OverDraftDoc from "./OverDraftDoc.jsx";
import OverDraftfaq from "./OverDraftfaq.jsx";


const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <OverDraftover />,
  "Features & Benefits": <OverDraftBenefiits />,
  "Eligibility": <OverDraftEligibilty />,
  "Documents": <OverDraftDoc />,
  "FAQs": <OverDraftfaq />
};

export default function MainOverdraft() {
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
            tenures={[12, 24, 36 ,60,120]} // Tenures in months
            rate={12.50}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}