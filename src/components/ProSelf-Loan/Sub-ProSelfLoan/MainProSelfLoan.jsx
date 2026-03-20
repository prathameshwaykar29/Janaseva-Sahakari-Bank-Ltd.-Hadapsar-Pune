

import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import ProSelfLoanover from "./ProSelfLoanover.jsx";
import ProSelfLoanBenefit from "./ProSelfLoanBenefit.jsx";
import ProSelfLoanEligibilty from "./ProSelfLoanEligibilty.jsx";
import ProSelfLoanDoc from "./ProSelfLoanDoc.jsx";
import ProSelfLoanfaq from "./ProSelfLoanfaq.jsx";

const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <ProSelfLoanover />,
  "Features & Benefits": <ProSelfLoanBenefit />,
  "Eligibility": <ProSelfLoanEligibilty />,
  "Documents": <ProSelfLoanDoc />,
  "FAQs": <ProSelfLoanfaq />
};

export default function MainProSelfLoan() {
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
            tenures={[12, 24, 36 ,48,60]} // Tenures in months
            rate={11}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}