import { useState } from "react";
import { FaIdCard, FaPassport } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SectionTitle, CardSection} from "../../LoanUi";

// Fixed Deposit Documents Data
const fdDocsData = {
  General: [
    {
      cat: "Identity & Address Proof (Any One Each)",
      items: [
        { icon: <FaIdCard />, name: "Aadhaar Card", note: "Mandatory" },
        { icon: <FaIdCard />, name: "PAN Card", note: "Mandatory" },
        { icon: <FaPassport />, name: "Passport / Voter ID / Driving Licence", note: "Any one" },
        { icon: <HiDocumentText />, name: "Utility Bill (Electricity/Gas/Water) – within 3 months", note: "Address proof" },
      ],
    },
    {
      cat: "Income Proof (Optional)",
      items: [
        { icon: <HiDocumentText />, name: "Latest Salary Slip / Form 16 / ITR", note: "If required" },
      ],
    },
  ],
};

export default function DocumentsTabF() {
  const [docTab, setDocTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents Required for Fixed Deposit</SectionTitle>

      {/* Document categories */}
      {fdDocsData[docTab].map((cat) => (
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