

import { useState } from "react";
import { SectionTitle, CardSection } from "../../LoanUi";

/* ---------------- NEW LOAN DOCUMENT DATA ---------------- */

import { FaIdCard, FaHome, FaFileInvoiceDollar } from "react-icons/fa";

const cre_loanDocsData = {
    General: [
        {
            cat: "KYC Documents",
            icon: FaIdCard,
            items: [
                { name: "Photographs – 3 Copies (Borrower, Co-borrower & Guarantors)", note: "Mandatory" },
                { name: "PAN Card of Borrower & CO-borrower", note: "Mandatory" },
                { name: "Aadhaar Card", note: "Mandatory" },
                { name: "Driving License / Passport / Electoral Id Card (any one)", note: "Mandatory" },
                { name: "Latest Utility Bill (not older than 3 months)", note: "Required" },
                { name: "CIBIL & Other Credit Reports", note: "Bank Verification" },
            ],
        },
        {
            cat: "Property & Financial Documents",
            icon: FaHome,
            items: [
                { name: "Sale Deed / Agreement to Sale / Allotment Certificate", note: "Mandatory" },
                { name: "Approved Building Plan & RERA Registration", note: "Mandatory" },
                { name: "Property Valuation by panel valuer", note: "Mandatory" },
                { name: "Title & Search Report by panel advocate", note: "Mandatory" },
                { name: "Last 3 Years IT Returns", note: "Required" },
                { name: "Last 12 Months Bank Statement", note: "Mandatory" },
                { name: "Proof of existing housing units owned", note: "Mandatory" },
                { name: "Proof of Source of Margin Money", note: "Mandatory" },
            ],
        },
    ],
};


/* ---------------- MAIN COMPONENT ---------------- */
export default function CreDoc() {
    const [docTab] = useState("General");

    return (
        <CardSection>
            <SectionTitle>Documents & Requirements for Hypothecation Loan</SectionTitle>

            {cre_loanDocsData[docTab].map((cat) => {
                const Icon = cat.icon;

                return (
                    <div key={cat.cat} className="mb-4">
                        <div className="flex items-center gap-2 text-base font-bold text-black uppercase tracking-wide mb-2.5 pb-1.5 border-b border-[#dce3f0]">
                            <Icon className="text-[#f47012]" />
                            {cat.cat}
                        </div>

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
