import { useState } from "react";
import { FaIdCard, FaPassport, FaBuilding, FaTruck } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SectionTitle, CardSection} from "../../LoanUi";

const loanDocsData = {
  General: [
    {
      cat: "KYC Documents",
      items: [
        { icon: <HiDocumentText />, name: "Photographs – 3 Copies (Borrower / Co-Borrower / Guarantor)", note: "Mandatory" },
        { icon: <FaIdCard />, name: "PAN Card", note: "Mandatory" },
        { icon: <FaIdCard />, name: "Aadhaar Card", note: "Mandatory" },
        { icon: <FaPassport />, name: "Driving License / Passport / Voter ID", note: "Any One" },
        { icon: <HiDocumentText />, name: "Latest Utility Bill (within 3 months) / Rent Agreement", note: "Address Proof" },
        { icon: <HiDocumentText />, name: "CIBIL / Credit Report", note: "Bank Verification" },
      ],
    },
    {
      cat: "Employment / Income Proof",
      items: [
        { icon: <FaIdCard />, name: "Employment Identity Card", note: "If Salaried" },
        { icon: <HiDocumentText />, name: "Appointment Letter / Job Certificate", note: "If Salaried" },
        { icon: <HiDocumentText />, name: "Experience Certificate", note: "Optional" },
        { icon: <HiDocumentText />, name: "Latest Salary Slip / Income Proof", note: "If Required" },
      ],
    },
    {
      cat: "Business Documents (If Self-Employed)",
      items: [
        { icon: <FaBuilding />, name: "Udyog Aadhaar / MSME Certificate", note: "If Applicable" },
        { icon: <HiDocumentText />, name: "Shop Act License / Gram Panchayat NOC / Factory License", note: "Business Proof" },
        { icon: <HiDocumentText />, name: "GST / EPF / ESIC / RERA / ISO Registration", note: "If Applicable" },
        { icon: <HiDocumentText />, name: "Rent Agreement for Shop / Factory", note: "If Applicable" },
        { icon: <HiDocumentText />, name: "Business Profile / Bio Data", note: "Optional" },
      ],
    },
    {
      cat: "Vehicle Documents",
      items: [
        { icon: <FaTruck />, name: "Quotation of New Commercial Vehicle", note: "Mandatory" },
        { icon: <HiDocumentText />, name: "Proforma Invoice from Dealer", note: "Required" },
        { icon: <HiDocumentText />, name: "Vehicle Insurance Copy", note: "Required" },
        { icon: <HiDocumentText />, name: "Vehicle Registration (RC) after Purchase", note: "Post Loan" },
      ],
    },
  ],
};

export default function DocumentNew() {
  const [docTab] = useState("General");

  return (
    <CardSection>
      <SectionTitle>Documents Required for New Commercial Vehicle Loan</SectionTitle>

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