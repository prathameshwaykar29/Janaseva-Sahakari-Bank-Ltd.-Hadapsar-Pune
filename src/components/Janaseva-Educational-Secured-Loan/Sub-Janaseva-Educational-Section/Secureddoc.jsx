import { useState } from "react";
import { FaIdCard, FaGraduationCap, FaFileInvoiceDollar } from "react-icons/fa";
import { SectionTitle, CardSection } from "../../LoanUi";

/* ---------------- NEW LOAN DOCUMENT DATA ---------------- */

const eduSecured_loanDocsData = {
  General: [
    {
      cat: "KYC Documents",
      icon: FaIdCard,
      items: [
        { name: "Photographs – 3 Copies (Borrower & Guarantor)", note: "Mandatory" },
        { name: "PAN Card", note: "Mandatory" },
        { name: "Aadhaar Card", note: "Mandatory" },
        { name: "Address Proof / Latest Utility Bill", note: "Required" },
        { name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
      ],
    },
    {
      cat: "Education Documents",
      icon: FaGraduationCap,
      items: [
        { name: "Copy of Admission Letter from Institute along with Fees Schedule", note: "Mandatory" },
        { name: "Mark Sheets / Pass Certificates (S.S.C., H.S.C., Degree courses)", note: "Mandatory" },
        { name: "Recognition of Institute / College / University by competent Authority", note: "Mandatory" },
        { name: "Prospectus of Institute / College / University", note: "Required" },
        { name: "Receipt of payment already done", note: "If Applicable" },
        { name: "Campus Placement track record & average package (last 3 years)", note: "Required" },
      ],
    },
    {
      cat: "Financial & Security Documents",
      icon: FaFileInvoiceDollar,
      items: [
        { name: "Last 3 Years IT Returns of Parent / Guardian", note: "Required" },
        { name: "Last 12 Months Bank Statement", note: "Mandatory" },
        { name: "Property Documents (if security is offered)", note: "Mandatory" },
        { name: "Property Valuation by panel valuer", note: "Mandatory" },
        { name: "Proof of Source of Margin Money", note: "Mandatory" },
      ],
    },
  ],
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function SecuredDoc() {
  const [docTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents</SectionTitle>

      {eduSecured_loanDocsData[docTab].map((cat) => {
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