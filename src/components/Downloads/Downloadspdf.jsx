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

















import React from "react";
import { FiDownload, FiFileText } from "react-icons/fi";

const pdfData = [
    {
        id: 1,
        title: "Willful Defaulters List (Borrowers and Guarantors)",
        file: "assets/pdf/Downloads/WD_list_for_Web_Site_202508251622599233.pdf"
    },
    {
        id: 2,
        title: "Empanelment as Concurrent Auditors",
        file: "assets/pdf/Downloads/empanelment-as-Concurrent-Auditors_202505221522074457.pdf"
    },
    {
        id: 3,
        title: "Eligibility Criteria For Application",
        file: "assets/pdf/Downloads/Eligibility-criteria-for-application_202404081942567645.pdf"
    },
    {
        id: 4,
        title: "Application for Empanelment of Valuer & Advocate",
        file: "assets/pdf/Downloads/Application-Format-for-Valuer---Advocate_202404081943477689.pdf"
    },

    {
        id: 5,
        title: "Application for Opening Bank Accoun",
        file: "assets/pdf/Downloads/ACCOUNT_OPENING_202210031538329879.pdf"
    },
    {
        id: 6,
        title: "Application For ATM / Debit Card Facility ",
        file: "assets/pdf/Downloads/ATM_202210031539085810.pdf"
    },
    {
        id: 7,
        title: "Cheque Book Issue Application Form",
        file: "assets/pdf/Downloads/CHEQUE_BOOK_REQUEST_202210031539357883.pdf"
    },
    {
        id: 8,
        title: "Application for Internet Banking (View Mode)l Mobile Banking",
        file: "assets/pdf/Downloads/Internet-Banking_202210031540153903.pdf"
    },
    {
        id: 9,
        title: "Short Message Services (SMS) Banking Facility",
        file: "assets/pdf/Downloads/SMS_202210031540452058.pdf"
    },
    {
        id: 10,
        title: "Safe Deposit Locker Agreement Form",
        file: "assets/pdf/Downloads/Locker_Agreement_Form-1.pdf"
    },

    {
        id: 11,
        title: "Escalation Matrix",
        file: "assets/pdf/Downloads/Janaseva-Bank-Complaint-Escalation-Flowchart_202603121756484706.pdf"
    },
    {
        id: 12,
        title: "SMA & NPA Notice",
        file: "assets/pdf/Downloads/JSB-Notice-(1)_merged_202309121509026748 (1).pdf"
    },
    {
        id: 13,
        title: "Application For -Unclaimed Deposits /Inoperative Accounts ",
        file: "assets/pdf/Downloads/Unclaim-Deposit-claim-form_202408021525356308.pdf"
    },
    {
        id: 14,
        title: "Resolution Framework ",
        file: "assets/pdf/Downloads/Resolution-Framework_202301311153565822.pdf"
    },
    {
        id: 15,
        title: "Deceased Claim From",
        file: "assets/pdf/Downloads/DEATH_CLAIM_FORMAT_202512101739449197.pdf"
    },
    {
        id: 16,
        title: "Fraud Risk Management Policy ",
        file: "assets/pdf/Downloads/Fraud-Risk-Management-Policy-2025-26_202603121846184900.pdf"
    },
    {
        id: 17,
        title: "Compensation Policy ",
        file: "assets/pdf/Downloads/Customer-Compensation-Policy-2025-26_202603121812404425.pdf"
    },
    {
        id: 18,
        title: "Customer Service Policy",
        file: "assets/pdf/Downloads/Customer-Service-Policy-2025-26_202603121843198029.pdf"
    },
    {
        id: 19,
        title: "Customer Grivances Redressal Policy ",
        file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-2025-26_202603121815257847.pdf"
    },
    {
        id: 20,
        title: "Customer Grivances Redressal Policy Unauthorised",
        file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-Unauthorised-Electronic-Banking-Txn_202407301214385963.pdf"
    },

    {
        id: 21,
        title: "OutSourcing Policy",
        file: "assets/pdf/Downloads/IT-Outsourcing-Policy_202407301217292135.pdf"
    }, {
        id: 22,
        title: "Customer Right Policy",
        file: "assets/pdf/Downloads/Customer-Right-and-Grievances-Policy-2025-26_202603121841509047.pdf"
    },
    {
        id: 23,
        title: "Restructuring Loans",
        file: "assets/pdf/Downloads/Restructuring_Loans_Policy_202301311153075290.pdf"
    },
    {
        id: 24,
        title: "Mobile Banking Terms and Conditions",
        file: "assets/pdf/Downloads/MB-Terms-Conditions_202501031346403820.pdf"
    },
    {
        id: 25,
        title: "Statutory Audit Policy ",
        file: "assets/pdf/Downloads/Statutory-Audit-Policy-and-Appointment-Procedure_202301311141113978.pdf"
    },
    {
        id: 26,
        title: "Banking Charges & Fees ",
        file: "assets/pdf/Downloads/updated_service_charges_202512051708249171.pdf"
    },
    {
        id: 27,
        title: "Internet Banking",
        file: "assets/pdf/Downloads/Internet-Baking-View-Mode-Policy_202407301159469936.pdf"
    },
{
        id: 28,
        title: "Careers",
        file: "assets/pdf/Downloads/IT-Application_202504111231092683.pdf"
    },];


const Downloadspdf = () => {
    return (
        <div className="bg-gray-200 py-10 px-3 sm:px-6">

            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

                {/* ================= DESKTOP TABLE ================= */}
                <div className="hidden md:block">
                    <table className="w-full text-left">
                        <thead className="bg-[#1e3163] text-white text-sm">
                            <tr>
                                <th className="p-3">Document</th>
                                <th className="p-3 text-center">Download</th>
                            </tr>
                        </thead>

                        <tbody>
                            {pdfData.map((pdf) => (
                                <tr
                                    key={pdf.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-2 flex items-center gap-2 text-gray-800 font-medium">
                                        <FiFileText className="text-[#f47012]" />
                                        {pdf.title}
                                    </td>

                                    <td className="text-center">
                                        <a
                                            href={`${pdf.file}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-black hover:bg-[#f47012] hover:text-white transition"
                                        >
                                            <FiDownload />
                                            PDF
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ================= MOBILE CARDS ================= */}
                <div className="md:hidden p-2 space-y-3">
                    {pdfData.map((pdf) => (
                        <div
                            key={pdf.id}
                            className="border rounded-lg p-3 flex items-center justify-between shadow-sm"
                        >
                            {/* Left */}
                            <div className="flex items-center gap-2">
                                <FiFileText className="text-[#f47012] text-lg" />
                                <p className="text-sm font-medium text-gray-800 leading-tight">
                                    {pdf.title}
                                </p>
                            </div>

                            {/* Right */}
                            <a
                                href={`${pdf.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#1e3163] hover:bg-[#f47012] transition"
                            >
                                <FiDownload />
                                PDF
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Downloadspdf;