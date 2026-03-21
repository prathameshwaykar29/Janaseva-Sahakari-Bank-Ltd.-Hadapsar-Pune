// import React from "react";
// import { FaUserShield, FaMobileAlt } from "react-icons/fa";
// import { HiArrowRight } from "react-icons/hi";
// import { FiFileText } from "react-icons/fi";
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

//   // ✅ NEW POLICY DATA
//   const policyDocs = [
//     {
//       id: 15,
//       title: "Deceased Claim Form",
//       file: "assets/pdf/Downloads/DEATH_CLAIM_FORMAT_202512101739449197.pdf",
//     },
//     {
//       id: 16,
//       title: "Fraud Risk Management Policy",
//       file: "assets/pdf/Downloads/Fraud-Risk-Management-Policy-2025-26_202603121846184900.pdf",
//     },
//     {
//       id: 17,
//       title: "Compensation Policy",
//       file: "assets/pdf/Downloads/Customer-Compensation-Policy-2025-26_202603121812404425.pdf",
//     },
//     {
//       id: 18,
//       title: "Customer Service Policy",
//       file: "assets/pdf/Downloads/Customer-Service-Policy-2025-26_202603121843198029.pdf",
//     },
//     {
//       id: 19,
//       title: "Customer Grievance Redressal Policy",
//       file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-2025-26_202603121815257847.pdf",
//     },
//     {
//       id: 20,
//       title: "Unauthorised Transaction Policy",
//       file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-Unauthorised-Electronic-Banking-Txn_202407301214385963.pdf",
//     },
//     {
//       id: 21,
//       title: "IT Outsourcing Policy",
//       file: "assets/pdf/Downloads/IT-Outsourcing-Policy_202407301217292135.pdf",
//     },
//     {
//       id: 22,
//       title: "Customer Rights Policy",
//       file: "assets/pdf/Downloads/Customer-Right-and-Grievances-Policy-2025-26_202603121841509047.pdf",
//     },
//     {
//       id: 23,
//       title: "Restructuring Loans Policy",
//       file: "assets/pdf/Downloads/Restructuring_Loans_Policy_202301311153075290.pdf",
//     },
//   ];

//   return (
//     <div className="max-w-[1200px] mx-auto py-16 px-4">

//       {/* ================= TITLE ================= */}
//       {/* <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold text-[#1e3163] mb-3">
//           Lodge Your Complaint
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Select the appropriate category below to submit your complaint.
//           Our team will review and resolve your issue as soon as possible.
//         </p>
//       </div> */}

//       {/* ================= COMPLAINT CARDS ================= */}
//       <div className="space-y-6">
//         {complaintTypes.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group"
//           >
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

//       {/* ================= POLICY SECTION ================= */}
//       <div className="">
//         <div className="flex items-center justify-center mb-6 mt-4">
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                         <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
//                               Important Policies & Forms
//                         </h2>
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                     </div>

    
//         <div className="grid md:grid-cols-2 gap-3">
//           {policyDocs.map((doc) => (
//             <div
//               key={doc.id}
//               className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition group"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 flex items-center justify-center bg-[#f47012]/10 text-[#f47012] text-xl rounded-lg">
//                   <FiFileText />
//                 </div>

//                 <p className="text-sm font-medium text-gray-800">
//                   {doc.title}
//                 </p>
//               </div>

//               <a
//                 href={doc.file}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-md bg-[#1e3163] text-white hover:bg-[#f47012] transition"
//               >
//                 View
//                 <HiArrowRight className="group-hover:translate-x-1 transition" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Commoncard;





import React, { useState } from "react";
import { FaUserShield, FaMobileAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FiFileText, FiDownload, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// ── Data ──────────────────────────────────────────────────────────────────────

const complaintTypes = [
  {
    id: 1,
    title: "General Banking",
    subtitle: "Complaint",
    description:
      "Branch services, staff behaviour, deposits, loans or any other banking related grievance.",
    icon: FaUserShield,
    btn: "Add Complaint",
    link: "/ConsumerComplaint",
    gradient: "from-[#1e3163] to-[#2d4a8a]",
    hoverGlow: "hover:shadow-[#1e3163]/25",
    tag: "Branch · Deposits · Loans",
  },
  {
    id: 2,
    title: "Digital Banking",
    subtitle: "Complaint",
    description:
      "Internet Banking, Mobile Banking, ATM, UPI or debit card transaction issues.",
    icon: FaMobileAlt,
    btn: "Report Issue",
    link: "/DigiComplaint",
    gradient: "from-[#f47012] to-[#ff9a4d]",
    hoverGlow: "hover:shadow-[#f47012]/25",
    tag: "ATM · UPI · Mobile",
  },
];

const policyDocs = [
  {
    id: 15,
    title: "Deceased Claim Form",
    size: "420 KB",
    file: "assets/pdf/Downloads/DEATH_CLAIM_FORMAT_202512101739449197.pdf",
    category: "Forms",
  },
  {
    id: 16,
    title: "Fraud Risk Management Policy",
    size: "1.1 MB",
    file: "assets/pdf/Downloads/Fraud-Risk-Management-Policy-2025-26_202603121846184900.pdf",
    category: "Policy",
  },
  {
    id: 17,
    title: "Compensation Policy",
    size: "780 KB",
    file: "assets/pdf/Downloads/Customer-Compensation-Policy-2025-26_202603121812404425.pdf",
    category: "Policy",
  },
  {
    id: 18,
    title: "Customer Service Policy",
    size: "850 KB",
    file: "assets/pdf/Downloads/Customer-Service-Policy-2025-26_202603121843198029.pdf",
    category: "Policy",
  },
  {
    id: 19,
    title: "Customer Grievance Redressal Policy",
    size: "920 KB",
    file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-2025-26_202603121815257847.pdf",
    category: "Policy",
  },
  {
    id: 20,
    title: "Unauthorised Transaction Policy",
    size: "640 KB",
    file: "assets/pdf/Downloads/Customer-Grievance-Redressal-Policy-Unauthorised-Electronic-Banking-Txn_202407301214385963.pdf",
    category: "Policy",
  },
  {
    id: 21,
    title: "IT Outsourcing Policy",
    size: "510 KB",
    file: "assets/pdf/Downloads/IT-Outsourcing-Policy_202407301217292135.pdf",
    category: "Policy",
  },
  {
    id: 22,
    title: "Customer Rights Policy",
    size: "730 KB",
    file: "assets/pdf/Downloads/Customer-Right-and-Grievances-Policy-2025-26_202603121841509047.pdf",
    category: "Policy",
  },
  {
    id: 23,
    title: "Restructuring Loans Policy",
    size: "490 KB",
    file: "assets/pdf/Downloads/Restructuring_Loans_Policy_202301311153075290.pdf",
    category: "Policy",
  },
];

const categoryBadge = {
  Forms:  "bg-[#f47012]/10 text-[#f47012]",
  Policy: "bg-[#1e3163]/10 text-[#1e3163]",
};

// ── Complaint Card ─────────────────────────────────────────────────────────────

const ComplaintCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-7 bg-gradient-to-br ${item.gradient} shadow-xl ${item.hoverGlow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]`}
    >
      {/* BG decoration */}
      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
      <div className="absolute -left-5 -bottom-5 w-20 h-20 rounded-full bg-white/5" />

      {/* Top: icon + tag */}
      <div className="flex items-start justify-between relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-white text-2xl backdrop-blur-sm">
          <Icon />
        </div>
        <span className="text-[10px] font-semibold bg-white/15 text-white px-2.5 py-1 rounded-full tracking-wide">
          {item.tag}
        </span>
      </div>

      {/* Middle: title + desc */}
      <div className="mt-5 relative z-10">
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">
          {item.subtitle}
        </p>
        <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
          {item.title}
        </h3>
        <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Bottom: CTA */}
      <div className="mt-6 relative z-10">
        <Link
          to={item.link}
          className="inline-flex items-center gap-2 bg-white text-[#1e3163] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#eef8ff] transition-colors duration-200 shadow-md group"
        >
          {item.btn}
          <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

// ── Policy Card ────────────────────────────────────────────────────────────────

const PolicyCard = ({ doc }) => (
  <div className="bg-white rounded-xl border border-[#1e3163]/10 shadow-sm hover:shadow-lg hover:border-[#f47012]/30 hover:-translate-y-0.5 transition-all duration-200 group overflow-hidden">

    {/* Top colour strip */}
    <div className={`h-1 w-full ${doc.category === "Forms" ? "bg-[#f47012]" : "bg-[#1e3163]"}`} />

    <div className="p-4">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#f47012] shrink-0 shadow-sm group-hover:bg-[#f47012] group-hover:text-black transition-colors duration-200">
          <FiFileText size={16} />
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${categoryBadge[doc.category]}`}>
          {doc.category}
        </span>
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-[#1e3163] leading-snug mb-1 min-h-[36px]">
        {doc.title}
      </p>

      {/* File size badge */}
      <p className="text-[11px] text-[#f47012] font-semibold mb-4">
        📄 PDF &nbsp;·&nbsp; {doc.size}
      </p>

      {/* Download CTA */}
      <a
        href={doc.file}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between bg-white hover:bg-[#1e3163] border border-[#1e3163]/20 hover:border-[#1e3163] rounded-lg px-3 py-2 transition-all duration-200 group/btn"
      >
        <span className="text-xs font-semibold text-[#1e3163] group-hover/btn:text-black transition-colors">
          View Document
        </span>
        <FiDownload size={13} className="text-[#f47012] group-hover/btn:text-[#f47012] transition-colors" />
      </a>
    </div>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────────

const Commoncard = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Forms", "Policy"];

  const filtered =
    activeFilter === "All"
      ? policyDocs
      : policyDocs.filter((d) => d.category === activeFilter);

  return (
    <div className="bg-gray-200 min-h-screen py-14 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* ══ TOP BANNER ══ */}
        {/* <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] rounded-2xl px-8 py-10 mb-12 overflow-hidden shadow-xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute right-32 bottom-0 w-32 h-32 rounded-full bg-[#f47012]/20" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f47012]/20 text-[#f47012] text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3">
                📋 Help Centre
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                Complaints & Policy Documents
              </h1>
              <p className="text-white/60 text-sm max-w-md">
                Lodge a grievance or download official bank policies & forms instantly.
              </p>
            </div>

            <div className="shrink-0 bg-white/10 backdrop-blur rounded-xl px-5 py-4 text-center border border-white/10">
              <p className="text-white/50 text-[10px] uppercase font-semibold tracking-widest mb-1">Toll-Free</p>
              <a
                href="tel:18001200304"
                className="text-[#f47012] font-extrabold text-lg tracking-wide hover:text-white transition-colors"
              >
                1800 1200 304
              </a>
              <p className="text-white/40 text-[10px] mt-0.5">24 × 7 Support</p>
            </div>
          </div>
        </div> */}

        {/* ══ COMPLAINT SECTION ══ */}
        <div className="mb-12">
          {/* <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-6 rounded-full bg-[#f47012]" />
            <h2 className="text-lg font-extrabold text-[#1e3163] tracking-tight">
              Lodge a Complaint
            </h2>
            <FiChevronRight className="text-[#1e3163]/40" size={16} />
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {complaintTypes.map((item) => (
              <ComplaintCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* ══ POLICY SECTION ══ */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded-full bg-[#1e3163]" />
              <h2 className="text-lg font-extrabold text-[#1e3163] tracking-tight">
                Important Policies & Forms
              </h2>
              <FiChevronRight className="text-[#1e3163]/40" size={16} />
            </div>

            {/* Filter + count */}
            {/* <div className="flex items-center gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all duration-150
                    ${activeFilter === f
                      ? "bg-[#1e3163] border-[#1e3163] text-white"
                      : "bg-white border-[#1e3163]/20 text-[#1e3163] hover:border-[#f47012] hover:text-[#f47012]"
                    }`}
                >
                  {f}
                  <span className="ml-1 opacity-60">
                    ({f === "All"
                      ? policyDocs.length
                      : policyDocs.filter((d) => d.category === f).length})
                  </span>
                </button>
              ))}
              <span className="text-xs text-[#1e3163]/40 ml-1">
                {filtered.length} doc{filtered.length !== 1 ? "s" : ""}
              </span>
            </div> */}
          </div>

          {/* Policy cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc) => (
              <PolicyCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>

        {/* ══ FOOTER ══ */}
        {/* <p className="text-center text-xs text-[#1e3163]/40 mt-12">
          All documents are in PDF format. You may need Adobe Acrobat Reader to open them. &nbsp;·&nbsp;
          Janaseva Sahakari Bank Ltd., Hadapsar, Pune — DICGC Registered.
        </p> */}

      </div>
    </div>
  );
};

export default Commoncard;