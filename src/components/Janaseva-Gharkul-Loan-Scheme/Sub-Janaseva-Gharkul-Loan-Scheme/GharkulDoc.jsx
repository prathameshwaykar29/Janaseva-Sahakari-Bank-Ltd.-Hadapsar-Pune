


import { useState } from "react";
import { FaIdCard, FaFileAlt, FaHome, FaShieldAlt } from "react-icons/fa";
import { SectionTitle, CardSection } from "../../LoanUi";

/* ---------------- NEW LOAN DOCUMENT DATA ---------------- */

const gharkul_loanDocsData = {
    General: [
        {
            cat: "KYC Documents",
            items: [
                { icon: <FaIdCard />, name: "Photographs – 3 Copies (Borrower, Co-borrower & Guarantors)", note: "Mandatory" },
                { icon: <FaIdCard />, name: "PAN Card of Borrower & CO-borrower", note: "Mandatory" },
                { icon: <FaIdCard />, name: "Aadhaar Card", note: "Mandatory" },
                { icon: <FaIdCard />, name: "Driving License / Passport / Electoral Id Card (any one)", note: "Mandatory" },
                { icon: <FaFileAlt />, name: "Latest Utility Bill (not older than 3 months) / Leave & License Agreement", note: "Required" },
                { icon: <FaFileAlt />, name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
            ],
        },
        {
            cat: "Financial Documents",
            items: [
                { icon: <FaFileAlt />, name: "Last 3 Years Income Tax Returns", note: "Required" },
                { icon: <FaFileAlt />, name: "Last 12 Months Salary A/c Bank Statement", note: "Mandatory" },
                { icon: <FaFileAlt />, name: "Form No. 16 & IT Return (Last 3 years)", note: "Required" },
                { icon: <FaFileAlt />, name: "Original Certified Salary Slip (Last 3 months)", note: "Mandatory" },
            ],
        },
        {
            cat: "Property Documents",
            items: [
                { icon: <FaHome />, name: "Sale Deed / Agreement to Sale", note: "Mandatory" },
                { icon: <FaHome />, name: "Copies of previous Sale Deeds", note: "If Applicable" },
                { icon: <FaHome />, name: "Corporation Tax paid receipts", note: "Required" },
                { icon: <FaHome />, name: "Possession Letter from Builder", note: "Required" },
            ],
        },
        {
            cat: "Security Details",
            items: [
                { icon: <FaShieldAlt />, name: "Property Documents (Original & Xerox)", note: "Mandatory" },
                { icon: <FaShieldAlt />, name: "Property Valuation by panel valuer", note: "Mandatory" },
                { icon: <FaShieldAlt />, name: "Title & Search Report by panel advocate", note: "Mandatory" },
            ],
        },
    ],
};


/* ---------------- MAIN COMPONENT ---------------- */
export default function GharkulDoc() {
    const [docTab] = useState("General");

    return (
        <CardSection>
            <SectionTitle>Documents & Requirements for Hypothecation Loan</SectionTitle>

            {gharkul_loanDocsData[docTab].map((cat) => (
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


