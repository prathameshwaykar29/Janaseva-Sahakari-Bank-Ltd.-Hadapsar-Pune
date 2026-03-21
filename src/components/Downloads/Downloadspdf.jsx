// import React from "react";
// import { FiDownload, FiFileText } from "react-icons/fi";

// const pdfData = [
//     {
//         id: 1,
//         title: "Willful Defaulters List (Borrowers and Guarantors)",
//          file: "assets/pdf/Downloads/WD_list_for_Web_Site_202508251622599233.pdf"
//     },
//     {
//         id: 2,
//         title: "Empanelment as Concurrent Auditors",
//          file: "assets/pdf/Downloads/empanelment-as-Concurrent-Auditors_202505221522074457.pdf"
//     },
//     {
//         id: 3,
//         title: "Eligibility Criteria For Application",
//          file: "assets/pdf/Downloads/Eligibility-criteria-for-application_202404081942567645.pdf"
//     },
//     {
//         id: 4,
//         title: "Application Format For Valuer & Advocate",
//          file: "assets/pdf/Downloads/Application-Format-for-Valuer---Advocate_202404081943477689.pdf"
//     },

//     {
//         id: 5,
//         title: "Account Opening",
//          file: "assets/pdf/Downloads/ACCOUNT_OPENING_202210031538329879.pdf"
//     },
//     {
//         id: 6,
//         title: "ATM ",
//          file: "assets/pdf/Downloads/ATM_202210031539085810.pdf"
//     },
//     {
//         id: 7,
//         title: "Cheque Book Request",
//          file: "assets/pdf/Downloads/CHEQUE_BOOK_REQUEST_202210031539357883.pdf"
//     },
//     {
//         id: 8,
//         title: "Internet Banking View Mode Facility",
//          file: "assets/pdf/Downloads/Internet-Banking_202210031540153903.pdf"
//     },
//     {
//         id: 9,
//         title: "SMS",
//          file: "assets/pdf/Downloads/SMS_202210031540452058.pdf"
//     },
//     {
//         id: 10,
//         title: "Locker Agreement Form",
//          file: "assets/pdf/Downloads/Locker_Agreement_Form-1.pdf"
//     },

//     {
//         id: 11,
//         title: "Escalation Matrix",
//          file: "assets/pdf/Downloads/Janaseva-Bank-Complaint-Escalation-Flowchart_202603121756484706.pdf"
//     },
//     {
//         id: 12,
//         title: "SMA & NPA Notice",
//          file: "assets/pdf/Downloads/JSB-Notice-(1)_merged_202309121509026748 (1).pdf"
//     },
//     {
//         id: 13,
//         title: "Unclaimed Deposits ",
//          file: "assets/pdf/Downloads/Unclaim-Deposit-claim-form_202408021525356308.pdf"
//     },
//     {
//         id: 14,
//         title: "Resolution Framework ",
//          file: "assets/pdf/Downloads/Resolution-Framework_202301311153565822.pdf"
//     },
//     {
//         id: 15,
//         title: "Deceased Claim From",
//          file: "assets/pdf/Downloads/DEATH_CLAIM_FORMAT_202512101739449197.pdf"
//     },
//     {
//         id: 16,
//         title: "Fraud Risk Management Policy ",
//          file: "assets/pdf/Downloads/Fraud-Risk-Management-Policy-2025-26_202603121846184900.pdf"
//     },
//     {
//         id: 17,
//         title: "Compensation Policy ",
//          file: "assets/pdf/Downloads/Customer-Compensation-Policy-2025-26_202603121812404425.pdf"
//     },
//     {
//         id: 18,
//         title: "Customer Service Policy",
//          file: "assets/pdf/Downloads/Customer-Service-Policy-2025-26_202603121843198029.pdf"
//     },
//     {
//         id: 19,
//         title: "Customer Grivances Redressal Policy ",
//          file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-2025-26_202603121815257847.pdf"
//     },
//     {
//         id: 20,
//         title: "Customer Grivances Redressal Policy Unauthorised",
//          file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-Unauthorised-Electronic-Banking-Txn_202407301214385963.pdf"
//     },

//     {
//         id: 21,
//         title: "OutSourcing Policy",
//          file: "assets/pdf/Downloads/IT-Outsourcing-Policy_202407301217292135.pdf"
//     }, {
//         id: 22,
//         title: "Customer Right Policy",
//          file: "assets/pdf/Downloads/Customer-Right-and-Grievances-Policy-2025-26_202603121841509047.pdf"
//     },
//     {
//         id: 23,
//         title: "Restructuring Loans",
//          file: "assets/pdf/Downloads/Restructuring_Loans_Policy_202301311153075290.pdf"
//     },
//     {
//         id: 24,
//         title: "Mobile Banking Terms and Conditions",
//          file: "assets/pdf/Downloads/MB-Terms-Conditions_202501031346403820.pdf"
//     },
//     {
//         id: 25,
//         title: "Statutory Audit Policy ",
//          file: "assets/pdf/Downloads/Statutory-Audit-Policy-and-Appointment-Procedure_202301311141113978.pdf"
//     },
//     {
//         id: 26,
//         title: "Banking Charges & Fees ",
//          file: "assets/pdf/Downloads/updated_service_charges_202512051708249171.pdf"
//     },
//    {
//   id: 27,
//   title: "Internet Banking",
//   file: "assets/pdf/Downloads/Internet-Baking-View-Mode-Policy_202407301159469936.pdf"
// }
// ];

// const Downloadspdf = () => {
//     return (
//         <div className=" bg-gray-200 py-14">
//             {/* Table */}
//             <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

//                 <table className="w-full text-left">
//                     <thead className="bg-[#1e3163] text-white text-sm">
//                         <tr>
//                             <th className="p-4">Document</th>
//                             <th className="p-4 text-center">Download</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {pdfData.map((pdf) => (
//                             <tr
//                                 key={pdf.id}
//                                 className="border-b hover:bg-gray-50 transition"
//                             >
//                                 {/* Title */}
//                                 <td className="p-2 flex items-center gap-2 text-gray-800 font-medium">
//                                     <FiFileText className="text-[#f47012]" />
//                                     {pdf.title}
//                                 </td>


//                                 {/* Download */}
//                                 <td className=" text-center">
//                                     <a
//                                         href={pdf.file}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-black  hover:bg-[#f47012] transition"
//                                     >
//                                         <FiDownload />
//                                         PDF
//                                     </a>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     );
// };

// export default Downloadspdf;

















// import React from "react";
// import { FiDownload, FiFileText } from "react-icons/fi";

// const pdfData = [
//     {
//         id: 1,
//         title: "Willful Defaulters List (Borrowers and Guarantors)",
//         file: "assets/pdf/Downloads/WD_list_for_Web_Site_202508251622599233.pdf"
//     },
//     {
//         id: 2,
//         title: "Empanelment as Concurrent Auditors",
//         file: "assets/pdf/Downloads/empanelment-as-Concurrent-Auditors_202505221522074457.pdf"
//     },
//     {
//         id: 3,
//         title: "Eligibility Criteria For Application",
//         file: "assets/pdf/Downloads/Eligibility-criteria-for-application_202404081942567645.pdf"
//     },
//     {
//         id: 4,
//         title: "Application for Empanelment of Valuer & Advocate",
//         file: "assets/pdf/Downloads/Application-Format-for-Valuer---Advocate_202404081943477689.pdf"
//     },

//     {
//         id: 5,
//         title: "Application for Opening Bank Accoun",
//         file: "assets/pdf/Downloads/ACCOUNT_OPENING_202210031538329879.pdf"
//     },
//     {
//         id: 6,
//         title: "Application For ATM / Debit Card Facility ",
//         file: "assets/pdf/Downloads/ATM_202210031539085810.pdf"
//     },
//     {
//         id: 7,
//         title: "Cheque Book Issue Application Form",
//         file: "assets/pdf/Downloads/CHEQUE_BOOK_REQUEST_202210031539357883.pdf"
//     },
//     {
//         id: 8,
//         title: "Application for Internet Banking (View Mode)l Mobile Banking",
//         file: "assets/pdf/Downloads/Internet-Banking_202210031540153903.pdf"
//     },
//     {
//         id: 9,
//         title: "Short Message Services (SMS) Banking Facility",
//         file: "assets/pdf/Downloads/SMS_202210031540452058.pdf"
//     },
//     {
//         id: 10,
//         title: "Safe Deposit Locker Agreement Form",
//         file: "assets/pdf/Downloads/Locker_Agreement_Form-1.pdf"
//     },

//     {   
//         id: 11,
//         title: "Escalation Matrix",
//         file: "assets/pdf/Downloads/Janaseva-Bank-Complaint-Escalation-Flowchart_202603121756484706.pdf"
//     },
//     {
//         id: 12,
//         title: "SMA & NPA Notice",
//         file: "assets/pdf/Downloads/JSB-Notice-(1)_merged_202309121509026748 (1).pdf"
//     },
//     {
//         id: 13,
//         title: "Application For -Unclaimed Deposits /Inoperative Accounts ",
//         file: "assets/pdf/Downloads/Unclaim-Deposit-claim-form_202408021525356308.pdf"
//     },
//     {
//         id: 14,
//         title: "Resolution Framework ",
//         file: "assets/pdf/Downloads/Resolution-Framework_202301311153565822.pdf"
//     },
   
//     {
//         id: 25,
//         title: "Statutory Audit Policy ",
//         file: "assets/pdf/Downloads/Statutory-Audit-Policy-and-Appointment-Procedure_202301311141113978.pdf"
//     },
// {
//         id: 28,
//         title: "Careers",
//         file: "assets/pdf/Downloads/IT-Application_202504111231092683.pdf"
//     },];


// const Downloadspdf = () => {
//     return (
//         <div className="bg-gray-200 py-10 px-3 sm:px-6">

//             <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

//                 {/* ================= DESKTOP TABLE ================= */}
//                 <div className="hidden md:block">
//                     <table className="w-full text-left">
//                         <thead className="bg-[#1e3163] text-white text-sm">
//                             <tr>
//                                 <th className="p-3">Document</th>
//                                 <th className="p-3 text-center">Download</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {pdfData.map((pdf) => (
//                                 <tr
//                                     key={pdf.id}
//                                     className="border-b hover:bg-gray-50 transition"
//                                 >
//                                     <td className="p-2 flex items-center gap-2 text-gray-800 font-medium">
//                                         <FiFileText className="text-[#f47012]" />
//                                         {pdf.title}
//                                     </td>

//                                     <td className="text-center">
//                                         <a
//                                             href={`${pdf.file}`}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-black hover:bg-[#f47012] hover:text-white transition"
//                                         >
//                                             <FiDownload />
//                                             PDF
//                                         </a>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* ================= MOBILE CARDS ================= */}
//                 <div className="md:hidden p-2 space-y-3">
//                     {pdfData.map((pdf) => (
//                         <div
//                             key={pdf.id}
//                             className="border rounded-lg p-3 flex items-center justify-between shadow-sm"
//                         >
//                             {/* Left */}
//                             <div className="flex items-center gap-2">
//                                 <FiFileText className="text-[#f47012] text-lg" />
//                                 <p className="text-sm font-medium text-gray-800 leading-tight">
//                                     {pdf.title}
//                                 </p>
//                             </div>

//                             {/* Right */}
//                             <a
//                                 href={`${pdf.file}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#1e3163] hover:bg-[#f47012] transition"
//                             >
//                                 <FiDownload />
//                                 PDF
//                             </a>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Downloadspdf;



import React, { useState } from "react";
import { FiDownload, FiFileText, FiSearch, FiFilter } from "react-icons/fi";

const pdfData = [
  { id: 1,  category: "Compliance", title: "Willful Defaulters List (Borrowers and Guarantors)",        size: "1.2 MB", file: "assets/pdf/Downloads/WD_list_for_Web_Site_202508251622599233.pdf" },
  { id: 2,  category: "Audit",      title: "Empanelment as Concurrent Auditors",                        size: "845 KB", file: "assets/pdf/Downloads/empanelment-as-Concurrent-Auditors_202505221522074457.pdf" },
  { id: 3,  category: "Audit",      title: "Eligibility Criteria For Application",                      size: "620 KB", file: "assets/pdf/Downloads/Eligibility-criteria-for-application_202404081942567645.pdf" },
  { id: 4,  category: "Audit",      title: "Application for Empanelment of Valuer & Advocate",         size: "730 KB", file: "assets/pdf/Downloads/Application-Format-for-Valuer---Advocate_202404081943477689.pdf" },
  { id: 5,  category: "Account",    title: "Application for Opening Bank Account",                      size: "512 KB", file: "assets/pdf/Downloads/ACCOUNT_OPENING_202210031538329879.pdf" },
  { id: 6,  category: "Account",    title: "Application For ATM / Debit Card Facility",                 size: "480 KB", file: "assets/pdf/Downloads/ATM_202210031539085810.pdf" },
  { id: 7,  category: "Account",    title: "Cheque Book Issue Application Form",                        size: "390 KB", file: "assets/pdf/Downloads/CHEQUE_BOOK_REQUEST_202210031539357883.pdf" },
  { id: 8,  category: "Account",    title: "Application for Internet Banking / Mobile Banking",         size: "560 KB", file: "assets/pdf/Downloads/Internet-Banking_202210031540153903.pdf" },
  { id: 9,  category: "Account",    title: "Short Message Services (SMS) Banking Facility",             size: "420 KB", file: "assets/pdf/Downloads/SMS_202210031540452058.pdf" },
  { id: 10, category: "Account",    title: "Safe Deposit Locker Agreement Form",                        size: "670 KB", file: "assets/pdf/Downloads/Locker_Agreement_Form-1.pdf" },
  { id: 11, category: "Compliance", title: "Escalation Matrix",                                         size: "310 KB", file: "assets/pdf/Downloads/Janaseva-Bank-Complaint-Escalation-Flowchart_202603121756484706.pdf" },
  { id: 12, category: "Compliance", title: "SMA & NPA Notice",                                          size: "2.1 MB", file: "assets/pdf/Downloads/JSB-Notice-(1)_merged_202309121509026748 (1).pdf" },
  { id: 13, category: "Account",    title: "Application For Unclaimed Deposits / Inoperative Accounts", size: "490 KB", file: "assets/pdf/Downloads/Unclaim-Deposit-claim-form_202408021525356308.pdf" },
  { id: 14, category: "Compliance", title: "Resolution Framework",                                      size: "780 KB", file: "assets/pdf/Downloads/Resolution-Framework_202301311153565822.pdf" },
  { id: 25, category: "Audit",      title: "Statutory Audit Policy",                                    size: "920 KB", file: "assets/pdf/Downloads/Statutory-Audit-Policy-and-Appointment-Procedure_202301311141113978.pdf" },
  { id: 28, category: "Careers",    title: "Careers – IT Application",                                 size: "350 KB", file: "assets/pdf/Downloads/IT-Application_202504111231092683.pdf" },
];

const CATEGORIES = ["All", "Account", "Compliance", "Audit", "Careers"];

const categoryStyle = {
  Account:    "bg-blue-50 text-blue-700 border border-blue-100",
  Compliance: "bg-amber-50 text-amber-700 border border-amber-100",
  Audit:      "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Careers:    "bg-pink-50 text-pink-700 border border-pink-100",
};

const categoryDot = {
  Account:    "bg-blue-500",
  Compliance: "bg-amber-500",
  Audit:      "bg-emerald-500",
  Careers:    "bg-pink-500",
};

export default function Downloadspdf() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = pdfData.filter((pdf) => {
    const matchCat = activeCategory === "All" || pdf.category === activeCategory;
    const matchSearch = pdf.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-200 py-14">

      {/* ── Max-width 1200px wrapper ── */}
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        {/* <div className="mb-10 text-center">
          
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3163] tracking-tight mb-2">
            Downloads &amp; Resources
          </h1>
          <p className="text-slate-500 text-sm">
            Official forms, policies and notices — ready to download
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-[#f47012] to-[#f47012] rounded-full mx-auto mt-4" />
        </div> */}

        {/* ── Desktop Table (md+) ── */}
        <div className="hidden md:block bg-white rounded-md shadow-sm border  overflow-hidden">

          {/* Table Head */}
          <div className="grid grid-cols-[50px_1fr_150px_130px_170px] bg-[#1e3163] text-white text-sm font-semibold uppercase tracking-widest">
            <div className="px-5 py-4 text-center">#</div>
            <div className="px-4 py-4">Document Name</div>
            <div className="px-4 py-4">Category</div>
            <div className="px-4 py-4 text-center">File Size</div>
            <div className="px-5 py-4 text-center">Action</div>
          </div>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-4xl mb-3 opacity-30">📄</p>
              <p className="font-medium text-slate-500">No documents found</p>
              <p className="text-sm mt-1 text-slate-400">Try adjusting your search or filter</p>
            </div>
          ) : (
            filtered.map((pdf, idx) => (
              <div
                key={pdf.id}
                className="grid grid-cols-[50px_1fr_150px_130px_170px] items-center border-b border-slate-100 last:border-none group hover:bg-slate-50 transition-colors duration-150"
              >
                {/* Serial No */}
                <div className="px-5 py-4 text-center text-xs text-black">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <div className="px-4 py-4 flex items-center gap-3 min-w-0">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#1e3163] flex items-center justify-center text-[#1e3163] group-hover:text-white transition-colors duration-150">
                    <FiFileText size={15} />
                  </div>
                  <span className="text-sm font-medium text-black leading-snug line-clamp-2">
                    {pdf.title}
                  </span>
                </div>

                {/* Category badge */}
                <div className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-sm font-semibold px-2.5 py-1 rounded-full ${categoryStyle[pdf.category]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${categoryDot[pdf.category]}`} />
                    {pdf.category}
                  </span>
                </div>

                {/* File Size */}
                <div className="px-4 py-4 text-center">
                  <span className="inline-flex items-center justify-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg whitespace-nowrap">
                    PDF &nbsp;·&nbsp; {pdf.size}
                  </span>
                </div>

                {/* Download button */}
                <div className="px-5 py-4 flex justify-center">
                  <a
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-[#1e3163] text-xs font-semibold hover:bg-[#1e3163] hover:text-white transition-all duration-200 whitespace-nowrap"
                  >
                    <FiDownload size={13} />
                    Download PDF
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── Mobile Cards (< md) ── */}
        <div className="md:hidden space-y-3">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <p className="text-3xl mb-2 opacity-30">📄</p>
              <p className="font-medium text-slate-500">No documents found</p>
            </div>
          ) : (
            filtered.map((pdf) => (
              <div
                key={pdf.id}
                className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm"
              >
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1e3163]/10 flex items-center justify-center text-[#1e3163] mt-0.5">
                  <FiFileText size={17} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 leading-snug mb-2">
                    {pdf.title}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryStyle[pdf.category]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${categoryDot[pdf.category]}`} />
                      {pdf.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-full">
                      PDF · {pdf.size}
                    </span>
                  </div>
                </div>

                {/* Download button */}
                <a
                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1e3163] text-[#c9a84c] text-xs font-bold hover:bg-[#162650] transition"
                >
                  <FiDownload size={13} />
                  PDF
                </a>
              </div>
            ))
          )}
        </div>


      </div>
    </div>
  );
}