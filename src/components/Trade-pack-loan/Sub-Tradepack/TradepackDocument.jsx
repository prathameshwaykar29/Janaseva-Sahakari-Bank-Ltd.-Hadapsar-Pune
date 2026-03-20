import { useState } from "react";
import { FaIdCard, FaBuilding, FaFileInvoiceDollar } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SectionTitle, CardSection } from "../../LoanUi";

/* ---------------- NEW LOAN DOCUMENT DATA ---------------- */

const tradePack_loanDocsData = {
  General: [
    {
      cat: "KYC Documents",
      icon: FaIdCard,
      items: [
        { name: "Photographs – 3 Copies (Borrower, Co-borrower & Guarantors)", note: "Mandatory" },
        { name: "PAN Card of Borrower & CO-borrower", note: "Mandatory" },
        { name: "Aadhaar Card", note: "Mandatory" },
        { name: "Driving License / Passport / Electoral Id Card", note: "Any One" },
        { name: "Latest Utility Bill / Address Proof", note: "Required" },
        { name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
      ],
    },
    {
      cat: "Business / Unit KYC",
      icon: FaBuilding,
      items: [
        { name: "Udyog Aadhaar / MSME Certificate", note: "Wherever Applicable" },
        { name: "Shop Act License / Business Registration", note: "Mandatory" },
        { name: "GST Registration Certificate", note: "Wherever Applicable" },
        { name: "Business Profile / Bio Data", note: "Required" },
        { name: "MPCB Certificate", note: "Wherever Applicable" },
        { name: "Rent Agreement (shop/factory/house)", note: "Wherever Applicable" },
      ],
    },
    {
      cat: "Financial Documents",
      icon: FaFileInvoiceDollar,
      items: [
        { name: "Last 3 Years Balance Sheet with ITR & Tax Audit Report", note: "Mandatory" },
        { name: "Estimated / Projected Balance Sheet with CMA Data", note: "Required" },
        { name: "GST Paid Challans & GST Returns", note: "Required" },
        { name: "Latest Stock Statement & Debtors / Creditors List", note: "Required" },
        { name: "Month-wise Sales & Purchases Figures", note: "Required" },
        { name: "Last 12 Months Bank Statement", note: "Mandatory" },
        { name: "Proof of Source of Margin Money", note: "Mandatory" },
      ],
    },
    {
      cat: "Security Details",
      icon: HiDocumentText,
      items: [
        { name: "Property Documents (Original & Xerox)", note: "Mandatory" },
        { name: "Property Valuation by panel valuer", note: "Mandatory" },
        { name: "Title & Search Report by panel advocate", note: "Mandatory" },
        { name: "CERSAI Search Report", note: "Mandatory" },
        { name: "Details of Insurance cover – Prime & Collateral Security", note: "Mandatory" },
      ],
    },
  ],
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function TradepackDocument() {
  const [docTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents & Requirements for Trade Pack Loan</SectionTitle>

      {tradePack_loanDocsData[docTab].map((cat) => {
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