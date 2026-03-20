import { useState } from "react";
import { FaIdCard, FaCoins } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SectionTitle, CardSection } from "../../LoanUi";

/* ---------------- GOLD LOAN DOCUMENT DATA ---------------- */

const goldLoan_loanDocsData = {
  General: [
    {
      icon: FaIdCard,
      cat: "KYC Documents",
      items: [
        { name: "Photographs – 2 Copies", note: "Mandatory" },
        { name: "PAN Card", note: "Mandatory" },
        { name: "Aadhaar Card", note: "Mandatory" },
        { name: "Address Proof (Aadhaar / Utility Bill)", note: "Required" },
      ],
    },

    {
      icon: FaCoins,
      cat: "Gold Pledge Documents",
      items: [
        { name: "Gold Jewellery for Pledge (physically)", note: "Mandatory" },
        { name: "Gold Valuation by Bank Approved Appraiser", note: "Mandatory" },
        { name: "Loan Application Form", note: "Mandatory" },
        { name: "Loan Agreement Documents", note: "Bank Process" },
      ],
    },
  ],
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function Goldloandoc() {
  const [docTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents Required for Gold Loan</SectionTitle>

      {goldLoan_loanDocsData[docTab].map((cat) => {
        const Icon = cat.icon;

        return (
          <div key={cat.cat} className="mb-5">

            {/* Category Title */}
            <div className="flex items-center gap-2 text-base font-bold text-black uppercase tracking-wide mb-2.5 pb-1.5 border-b border-[#dce3f0]">
              <Icon className="text-[#f47012]" />
              {cat.cat}
            </div>

            {/* Document List */}
            <div className="flex flex-col gap-1.5">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-gray-50 text-[#1a2340] hover:bg-blue-50 transition"
                >
                  <span className="text-lg shrink-0 text-[#f47012]">
                    <HiDocumentText />
                  </span>

                  <span className="flex-1 text-sm">{item.name}</span>

                  <span className="text-sm text-gray-400 italic ml-auto">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>

          </div>
        );
      })}
    </CardSection>
  );
}