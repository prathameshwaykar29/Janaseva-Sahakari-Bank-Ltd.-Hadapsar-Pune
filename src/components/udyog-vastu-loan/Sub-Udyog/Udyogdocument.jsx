
import { useState } from "react";
import { FaIdCard, FaPassport, FaBuilding } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SectionTitle, CardSection} from "../../LoanUi";

const loanDocsData = {
  General: [
    {
      cat: "KYC Documents",
      items: [
        { icon: <HiDocumentText />, name: "Photographs – 3 Copies (Borrower / Guarantor)", note: "Mandatory" },
        { icon: <FaIdCard />, name: "PAN Card", note: "Mandatory" },
        { icon: <FaIdCard />, name: "Aadhaar Card", note: "Mandatory" },
        { icon: <FaPassport />, name: "Passport / Voter ID / Driving License", note: "Any One" },
        { icon: <HiDocumentText />, name: "Latest Utility Bill / Address Proof", note: "Required" },
        { icon: <HiDocumentText />, name: "CIBIL / Credit Report", note: "Bank Verification" },
      ],
    },
    {
      cat: "Business Documents",
      items: [
        { icon: <FaBuilding />, name: "Udyog Aadhaar / MSME Certificate", note: "If Applicable" },
        { icon: <HiDocumentText />, name: "Shop Act License / Business Registration", note: "Mandatory" },
        { icon: <HiDocumentText />, name: "GST Registration Certificate", note: "If Applicable" },
        { icon: <HiDocumentText />, name: "Business Profile / Bio Data", note: "Optional" },
      ],
    },
    {
      cat: "Financial Documents",
      items: [
        { icon: <HiDocumentText />, name: "Last 3 Years Income Tax Returns", note: "Required" },
        { icon: <HiDocumentText />, name: "Last 12 Months Bank Statement", note: "Mandatory" },
        { icon: <HiDocumentText />, name: "Balance Sheet & Profit / Loss Statement", note: "If Available" },
        { icon: <HiDocumentText />, name: "Stock Statement & Debtors List", note: "Required for Cash Credit" },
      ],
    },
  ],
};

export default function Udyogdocument() {
  const [docTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents Required for Cash Credit Secured (General)</SectionTitle>

      {loanDocsData[docTab].map((cat) => (
        <div key={cat.cat} className="mb-4">
          <div className="text-base font-bold text-black uppercase tracking-wide mb-2.5 pb-1.5 border-b border-[#dce3f0]">
            {cat.cat}
          </div>

          <div className="flex flex-col gap-1.5">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-gray-50 text-[12px] text-[#1a2340]"
              >
                <span className="text-base shrink-0 text-[#f47012]">{item.icon}</span>
                <span className="flex-1 text-sm">{item.name}</span>
                <span className="text-sm text-gray-400 italic ml-auto">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </CardSection>
  );
}