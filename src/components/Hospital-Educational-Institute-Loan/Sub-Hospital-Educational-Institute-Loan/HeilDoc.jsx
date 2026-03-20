
import { useState } from "react";
import { FaIdCard, FaHome } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SectionTitle, CardSection } from "../../LoanUi";

/* ---------------- NEW LOAN DOCUMENT DATA ---------------- */
const homeDecore_loanDocsData = {
  General: [
    {
      cat: "KYC & Business Documents",
      icon: FaIdCard,
      items: [
        { name: "Photographs – 3 Copies", note: "Mandatory" },
        { name: "PAN Card", note: "Mandatory" },
        { name: "Aadhaar Card", note: "Mandatory" },
        { name: "Registration Certificate (Medical Council / Educational Authority)", note: "Mandatory" },
        { name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
        { name: "FDA License / ISO Certification (wherever applicable)", note: "Wherever Applicable" },
      ],

    },
    {
      icon: HiDocumentText,
      cat: "Financial & Project Documents",
      items: [
        { name: "Last 3 Years Balance Sheet with ITR & Tax Audit Report", note: "Mandatory" },
        { name: "Project Report with detailed cost estimates", note: "Mandatory" },
        { name: "Quotation / Plan / Estimate / Invoices for Equipment", note: "Required" },
        { name: "Property Documents & Valuation Report", note: "Mandatory" },
        { name: "Approved Building Plan & RERA / Education Authority Approval", note: "Mandatory" },
        { name: "Proof of Source of Margin Money", note: "Mandatory" },
      ],
    },
  ],
};


/* ---------------- MAIN COMPONENT ---------------- */

export default function HeilDoc() {
  const [docTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents </SectionTitle>

      {homeDecore_loanDocsData[docTab].map((cat) => {
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
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-gray-50 text-[#1a2340]"
                >
                  <span className="text-lg shrink-0 text-[#f47012]">
                    <Icon />
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



