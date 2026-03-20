import { useState } from "react";

import CalculatorSidebar from "../../CalculatorSidebar.jsx";
import AllTabs from "../../AllTabs.jsx";
import LoanAgainstover from "./LoanAgainstover.jsx";
import LoanAgainstBenefit from "./LoanAgainstBenefit.jsx";
import LoanAgainstEligibility from "./LoanAgainstEligibility.jsx";
import LoanAgainstdoc from "./LoanAgainstdoc.jsx";
import LoanAgainstfaq from "./LoanAgainstfaq.jsx";

const TABS = [
  { label: "Overview" },
  { label: "Features & Benefits" },
  { label: "Eligibility" },
  { label: "Documents" },
  { label: "FAQs" }
];

const TAB_COMPONENTS = {
  "Overview": <LoanAgainstover />,
  "Features & Benefits": <LoanAgainstBenefit />,
  "Eligibility": <LoanAgainstEligibility />,
  "Documents": <LoanAgainstdoc />,
  "FAQs": <LoanAgainstfaq />
};

export default function MainLoanAgainst() {
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
            tenures={[12, 24, 36 ]} // Tenures in months
            rate={11}                // Interest rate: 9.50% for A-rated borrowers
          />
        </div>
      </div>
    </div>
  );
}