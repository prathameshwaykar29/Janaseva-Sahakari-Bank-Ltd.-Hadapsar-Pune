
import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import Securedover from "./Securedover.jsx";
import Securedbenifits from "./Securedbenifits.jsx";
import SecuredEligibility from "./SecuredEligibility.jsx";
import SecuredDoc from "./Secureddoc.jsx";
import Securedfaq from "./Securedfaq.jsx";

const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <Securedover />,
  "Features & Benefits": <Securedbenifits />,
  "Eligibility": <SecuredEligibility />,
  "Documents": <SecuredDoc />,
  "FAQs": <Securedfaq />
};

export default function MainSecured() {
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
            defaultAmount={2000000}   // Default selected amount: ₹10 Lakh
            tenures={[6, 36, 72, 108, 144]} // Tenures in months
            rate={8.90}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}