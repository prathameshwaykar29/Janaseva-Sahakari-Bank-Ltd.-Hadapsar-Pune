// import React from "react";
// import { FaUserShield, FaMobileAlt } from "react-icons/fa";
// import { HiArrowRight } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const Commoncard = () => {
//   const complaintTypes = [
//     {
//       id: 1,
//       title: "General Banking Complaint",
//       description:
//         "Submit complaints related to branch services, staff behaviour, deposits, loans or other banking services.",
//       icon: <FaUserShield />,
//       btn: "Add Complaint",
//       link: "/ConsumerComplaint",
//     },
//     {
//       id: 2,
//       title: "Digital Banking Complaint",
//       description:
//         "Report issues related to Internet Banking, Mobile Banking, ATM transactions, UPI or debit card services.",
//       icon: <FaMobileAlt />,
//       btn: "Report Issue",
//       link: "/DigiComplaint",
//     },
//   ];

//   return (
//     <div className="max-w-[1200px] mx-auto py-16 px-4">

//       {/* Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold text-[#1e3163] mb-3">
//           Lodge Your Complaint
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Select the appropriate category below to submit your complaint.
//           Our team will review and resolve your issue as soon as possible.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="space-y-6">
//         {complaintTypes.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group"
//           >

//             {/* Left section */}
//             <div className="flex items-center gap-6">
//               <div className="w-16 h-16 flex items-center justify-center bg-[#f47012]/10 text-[#f47012] text-3xl rounded-xl">
//                 {item.icon}
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold text-[#1e3163] mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm max-w-lg">
//                   {item.description}
//                 </p>
//               </div>
//             </div>

//             {/* Link Button */}
//             <Link
//               to={item.link}
//               className="flex items-center gap-2 bg-[#1e3163] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#162552] transition"
//             >
//               {item.btn}
//               <HiArrowRight className="text-lg group-hover:translate-x-1 transition" />
//             </Link>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Commoncard;


import React from "react";
import { FaUserShield, FaMobileAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

const Commoncard = () => {

  const complaintTypes = [
    {
      id: 1,
      title: "General Banking Complaint",
      description:
        "Submit complaints related to branch services, staff behaviour, deposits, loans or other banking services.",
      icon: <FaUserShield />,
      btn: "Add Complaint",
      link: "/ConsumerComplaint",
    },
    {
      id: 2,
      title: "Digital Banking Complaint",
      description:
        "Report issues related to Internet Banking, Mobile Banking, ATM transactions, UPI or debit card services.",
      icon: <FaMobileAlt />,
      btn: "Report Issue",
      link: "/DigiComplaint",
    },
  ];

  // ✅ NEW POLICY DATA
  const policyDocs = [
    {
      id: 15,
      title: "Deceased Claim Form",
      file: "assets/pdf/Downloads/DEATH_CLAIM_FORMAT_202512101739449197.pdf",
    },
    {
      id: 16,
      title: "Fraud Risk Management Policy",
      file: "assets/pdf/Downloads/Fraud-Risk-Management-Policy-2025-26_202603121846184900.pdf",
    },
    {
      id: 17,
      title: "Compensation Policy",
      file: "assets/pdf/Downloads/Customer-Compensation-Policy-2025-26_202603121812404425.pdf",
    },
    {
      id: 18,
      title: "Customer Service Policy",
      file: "assets/pdf/Downloads/Customer-Service-Policy-2025-26_202603121843198029.pdf",
    },
    {
      id: 19,
      title: "Customer Grievance Redressal Policy",
      file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-2025-26_202603121815257847.pdf",
    },
    {
      id: 20,
      title: "Unauthorised Transaction Policy",
      file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-Unauthorised-Electronic-Banking-Txn_202407301214385963.pdf",
    },
    {
      id: 21,
      title: "IT Outsourcing Policy",
      file: "assets/pdf/Downloads/IT-Outsourcing-Policy_202407301217292135.pdf",
    },
    {
      id: 22,
      title: "Customer Rights Policy",
      file: "assets/pdf/Downloads/Customer-Right-and-Grievances-Policy-2025-26_202603121841509047.pdf",
    },
    {
      id: 23,
      title: "Restructuring Loans Policy",
      file: "assets/pdf/Downloads/Restructuring_Loans_Policy_202301311153075290.pdf",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4">

      {/* ================= TITLE ================= */}
      {/* <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#1e3163] mb-3">
          Lodge Your Complaint
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the appropriate category below to submit your complaint.
          Our team will review and resolve your issue as soon as possible.
        </p>
      </div> */}

      {/* ================= COMPLAINT CARDS ================= */}
      <div className="space-y-6">
        {complaintTypes.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-[#f47012]/10 text-[#f47012] text-3xl rounded-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1e3163] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  {item.description}
                </p>
              </div>
            </div>

            <Link
              to={item.link}
              className="flex items-center gap-2 bg-[#1e3163] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#162552] transition"
            >
              {item.btn}
              <HiArrowRight className="text-lg group-hover:translate-x-1 transition" />
            </Link>
          </div>
        ))}
      </div>

      {/* ================= POLICY SECTION ================= */}
      <div className="">
        <div className="flex items-center justify-center mb-6 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                              Important Policies & Forms
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>

    
        <div className="grid md:grid-cols-2 gap-3">
          {policyDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#f47012]/10 text-[#f47012] text-xl rounded-lg">
                  <FiFileText />
                </div>

                <p className="text-sm font-medium text-gray-800">
                  {doc.title}
                </p>
              </div>

              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-md bg-[#1e3163] text-white hover:bg-[#f47012] transition"
              >
                View
                <HiArrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Commoncard;