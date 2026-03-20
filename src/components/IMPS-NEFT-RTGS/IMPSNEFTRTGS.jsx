
// import React, { useState } from "react";

// const tabs = ["IMPS", "NEFT", "RTGS"];

// const details = {
//   IMPS: {
//     icon: "🚀",
//     color: "#F59F00",
//     full: "Immediate Payment Service",
//     desc: "Instant 24/7 fund transfer between bank accounts. Perfect for urgent and smaller transfers.",
//     limit: "Up to ₹5 Lakh per transaction",
//     time: "Instant (within seconds)",
//     availability: "24 × 7 × 365 including holidays",
//     charges: "₹5 – ₹15 per transaction",
//     best: "Urgent transfers, splitting bills, peer-to-peer payments",
//   },
//   NEFT: {
//     icon: "🕐",
//     color: "#F59F00",
//     full: "National Electronic Funds Transfer",
//     desc: "Batch-based settlement system. Ideal for scheduled and non-urgent payments.",
//     limit: "No upper limit",
//     time: "Processed in 30-minute batches",
//     availability: "24 × 7 × 365 including holidays",
//     charges: "₹2 – ₹25 per transaction",
//     best: "EMI payments, vendor payments, large scheduled transfers",
//   },
//   RTGS: {
//     icon: "💰",
//     color: "#F59F00",
//     full: "Real-Time Gross Settlement",
//     desc: "Real-time settlement for high-value transactions. Each transfer processed individually.",
//     limit: "Minimum ₹2 Lakh, no upper limit",
//     time: "Instant (real-time gross settlement)",
//     availability: "24 × 7 × 365 including holidays",
//     charges: "₹25 – ₹50 per transaction",
//     best: "Business payments, property transactions, high-value transfers",
//   },
// };

// const compare = [
//   { field: "Min Amount", imps: "₹1", neft: "₹1", rtgs: "₹2,00,000" },
//   { field: "Max Amount", imps: "₹5 Lakh", neft: "No Limit", rtgs: "No Limit" },
//   { field: "Settlement", imps: "Instant", neft: "30 min batch", rtgs: "Instant" },
//   { field: "Availability", imps: "24/7/365", neft: "24/7/365", rtgs: "24/7/365" },
//   { field: "Typical Charges", imps: "₹5 – ₹15", neft: "₹2 – ₹25", rtgs: "₹25 – ₹50" },
// ];

// const steps = [
//   "Login to Net Banking or Mobile Banking",
//   "Navigate to Fund Transfer → Add Beneficiary",
//   "Enter beneficiary name, account number & IFSC code",
//   "Select transfer mode: IMPS, NEFT, or RTGS",
//   "Enter the amount and remarks",
//   "Confirm the transaction with your OTP",
// ];

// export default function IMPSNEFTRTGS() {
//   const [activeTab, setActiveTab] = useState("IMPS");
//   const d = details[activeTab];

//   return (
//     <div className=" bg-white text-gray-900">
//       {/* Hero */}
//       <div className="relative overflow-hidden px-6 pt-20 pb-24 md:px-16">
//         <div className="absolute top-[-40px] left-[20%] w-[500px] h-[400px] rounded-full bg-[#F59F00] opacity-8 blur-[140px] pointer-events-none" />

//         <div className="relative z-10 max-w-3xl">
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#F59F00]/10 border border-[#F59F00]/30 text-[#F59F00] mb-8">
//             ⚡ Fund Transfers
//           </span>

//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
//             <span className="text-white">IMPS, NEFT</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#F59F00] to-[#FFD43B] bg-clip-text text-transparent">
//               & RTGS
//             </span>
//           </h1>

//           <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
//             Send money securely across India — from instant micro-transfers to
//             high-value real-time settlements. All three modes, one platform.
//           </p>

//           <div className="mt-8 flex gap-3 flex-wrap">
//             <button className="px-7 py-3.5 rounded-2xl bg-[#F59F00] text-black font-bold text-sm hover:bg-[#ffb900] transition-colors">
//               Transfer Now →
//             </button>
//             <button className="px-7 py-3.5 rounded-2xl border border-white/10 text-white/60 font-semibold text-sm hover:bg-white/5 transition-colors">
//               Add Beneficiary
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tab Explorer */}
//       <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
//         <p className="text-[11px] uppercase tracking-[0.35em] text-[#F59F00] font-bold mb-6">
//           Explore Each Mode
//         </p>

//         {/* Tabs */}
//         <div className="flex gap-2 mb-6">
//           {tabs.map((t) => (
//             <button
//               key={t}
//               onClick={() => setActiveTab(t)}
//               className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-200 ${
//                 activeTab === t
//                   ? "bg-[#F59F00] text-black"
//                   : "bg-white/[0.04] text-white/50 hover:bg-white/[0.07] border border-white/[0.07]"
//               }`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="rounded-2xl p-8 bg-white/[0.03] border border-[#F59F00]/20">
//           <div className="flex items-start gap-4 mb-6">
//             <div className="w-12 h-12 rounded-md bg-[#F59F00]/10 flex items-center justify-center text-2xl shrink-0">
//               {d.icon}
//             </div>
//             <div>
//               <h3 className="text-white font-black text-xl">{activeTab}</h3>
//               <p className="text-[#F59F00] text-xs font-medium">{d.full}</p>
//             </div>
//           </div>
//           <p className="text-white/50 text-sm leading-relaxed mb-6">{d.desc}</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {[
//               { label: "Transfer Limit", value: d.limit },
//               { label: "Processing Time", value: d.time },
//               { label: "Availability", value: d.availability },
//               { label: "Charges", value: d.charges },
//             ].map((row) => (
//               <div key={row.label} className="rounded-md p-4 bg-white/[0.04] border border-white/[0.05]">
//                 <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{row.label}</p>
//                 <p className="text-white text-sm font-semibold">{row.value}</p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 rounded-md p-4 bg-[#F59F00]/08 border border-[#F59F00]/15">
//             <p className="text-[#F59F00] text-[10px] uppercase tracking-widest mb-1 font-bold">Best For</p>
//             <p className="text-white/55 text-sm">{d.best}</p>
//           </div>
//         </div>
//       </section>

//       {/* Comparison table */}
//       <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
//         <p className="text-[11px] uppercase tracking-[0.35em] text-[#F59F00] font-bold mb-6">
//           Quick Comparison
//         </p>
//         <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="bg-[#F59F00]/10">
//                 {["", "IMPS", "NEFT", "RTGS"].map((h) => (
//                   <th key={h} className="px-5 py-4 text-left text-[11px] uppercase tracking-widest text-[#F59F00]">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {compare.map((row, i) => (
//                 <tr key={row.field} className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
//                   <td className="px-5 py-4 text-white/40 text-xs font-semibold uppercase tracking-wider">{row.field}</td>
//                   <td className="px-5 py-4 text-white/65 text-xs">{row.imps}</td>
//                   <td className="px-5 py-4 text-white/65 text-xs">{row.neft}</td>
//                   <td className="px-5 py-4 text-white/65 text-xs">{row.rtgs}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
//         <p className="text-[11px] uppercase tracking-[0.35em] text-[#F59F00] font-bold mb-6">
//           How To Transfer
//         </p>
//         <div className="rounded-2xl p-8 bg-white/[0.025] border border-white/[0.07] flex flex-col gap-5">
//           {steps.map((s, i) => (
//             <div key={i} className="flex items-start gap-4">
//               <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold bg-[#F59F00]/15 text-[#F59F00] border border-[#F59F00]/25">
//                 {i + 1}
//               </div>
//               <p className="text-white/60 text-sm leading-relaxed pt-1">{s}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }





// import React, { useState } from "react";

// const tabs = ["IMPS", "NEFT", "RTGS"];

// const details = {
//     IMPS: {
//         icon: "🚀",
//         full: "Immediate Payment Service",
//         desc: "Instant 24/7 fund transfer between bank accounts. Perfect for urgent and smaller transfers.",
//         limit: "Up to ₹5 Lakh per transaction",
//         time: "Instant (within seconds)",
//         availability: "24 × 7 × 365 including holidays",
//         charges: "₹5 – ₹15 per transaction",
//         best: "Urgent transfers, splitting bills, peer-to-peer payments",
//     },
//     NEFT: {
//         icon: "🕐",
//         full: "National Electronic Funds Transfer",
//         desc: "Batch-based settlement system. Ideal for scheduled and non-urgent payments.",
//         limit: "No upper limit",
//         time: "Processed in 30-minute batches",
//         availability: "24 × 7 × 365 including holidays",
//         charges: "₹2 – ₹25 per transaction",
//         best: "EMI payments, vendor payments, large scheduled transfers",
//     },
//     RTGS: {
//         icon: "💰",
//         full: "Real-Time Gross Settlement",
//         desc: "Real-time settlement for high-value transactions.",
//         limit: "Minimum ₹2 Lakh, no upper limit",
//         time: "Instant (real-time gross settlement)",
//         availability: "24 × 7 × 365 including holidays",
//         charges: "₹25 – ₹50 per transaction",
//         best: "Business payments, property transactions, high-value transfers",
//     },
// };

// const compare = [
//     { field: "Min Amount", imps: "₹1", neft: "₹1", rtgs: "₹2,00,000" },
//     { field: "Max Amount", imps: "₹5 Lakh", neft: "No Limit", rtgs: "No Limit" },
//     { field: "Settlement", imps: "Instant", neft: "30 min batch", rtgs: "Instant" },
//     { field: "Availability", imps: "24/7/365", neft: "24/7/365", rtgs: "24/7/365" },
//     { field: "Typical Charges", imps: "₹5 – ₹15", neft: "₹2 – ₹25", rtgs: "₹25 – ₹50" },
// ];

// const steps = [
//     "Login to Net Banking or Mobile Banking",
//     "Navigate to Fund Transfer → Add Beneficiary",
//     "Enter beneficiary name, account number & IFSC code",
//     "Select transfer mode: IMPS, NEFT, or RTGS",
//     "Enter the amount and remarks",
//     "Confirm the transaction with your OTP",
// ];

// export default function IMPSNEFTRTGS() {
//     const [activeTab, setActiveTab] = useState("IMPS");
//     const d = details[activeTab];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">


//             {/* TABS */}
//             <section className="px-6 pb-16">
//                 <div className="max-w-[1200px] mx-auto">
//                     <p className="text-xs uppercase tracking-widest text-[#F59F00] font-bold mb-4">
//                         Explore Each Mode
//                     </p>

//                     <div className="flex gap-2 mb-6">
//                         {tabs.map((t) => (
//                             <button
//                                 key={t}
//                                 onClick={() => setActiveTab(t)}
//                                 className={`px-5 py-2 rounded-md text-sm font-semibold transition ${activeTab === t
//                                         ? "bg-[#F59F00] text-white"
//                                         : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
//                                     }`}
//                             >
//                                 {t}
//                             </button>
//                         ))}
//                     </div>

//                     {/* CARD */}
//                     <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
//                         <div className="flex items-center gap-4 mb-4">
//                             <div className="w-12 h-12 bg-orange-50 text-2xl flex items-center justify-center rounded-md">
//                                 {d.icon}
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-lg">{activeTab}</h3>
//                                 <p className="text-sm text-[#F59F00]">{d.full}</p>
//                             </div>
//                         </div>

//                         <p className="text-gray-600 mb-4">{d.desc}</p>

//                         <div className="grid md:grid-cols-2 gap-3">
//                             {[
//                                 { label: "Transfer Limit", value: d.limit },
//                                 { label: "Processing Time", value: d.time },
//                                 { label: "Availability", value: d.availability },
//                                 { label: "Charges", value: d.charges },
//                             ].map((row) => (
//                                 <div key={row.label} className="bg-gray-50 border border-gray-200 p-4 rounded-md">
//                                     <p className="text-xs text-gray-500 mb-1">{row.label}</p>
//                                     <p className="font-semibold text-gray-800">{row.value}</p>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="mt-4 bg-orange-50 border border-orange-200 p-4 rounded-md">
//                             <p className="text-xs text-[#F59F00] font-bold mb-1">Best For</p>
//                             <p className="text-gray-700 text-sm">{d.best}</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* TABLE */}
//             <section className="px-6 pb-16">
//                 <div className="max-w-[1200px] mx-auto">
//                     <p className="text-xs uppercase tracking-widest text-[#F59F00] font-bold mb-4">
//                         Quick Comparison
//                     </p>

//                     <div className="border border-gray-200 rounded-md overflow-hidden">
//                         <table className="w-full text-sm">
//                             <thead>
//                                 <tr className="bg-orange-50">
//                                     {["", "IMPS", "NEFT", "RTGS"].map((h) => (
//                                         <th key={h} className="px-4 py-3 text-left text-[#F59F00] text-xs uppercase">
//                                             {h}
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {compare.map((row, i) => (
//                                     <tr key={row.field} className={i % 2 === 0 ? "bg-gray-50" : ""}>
//                                         <td className="px-4 py-3 text-gray-600 font-semibold">{row.field}</td>
//                                         <td className="px-4 py-3">{row.imps}</td>
//                                         <td className="px-4 py-3">{row.neft}</td>
//                                         <td className="px-4 py-3">{row.rtgs}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </section>

//             {/* STEPS */}
// <section className="px-6 pb-20">
//     <div className="max-w-[1200px] mx-auto">
// <p className="text-xs uppercase tracking-widest text-[#F59F00] font-bold mb-4">
//     How To Transfer
// </p>

//         <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm space-y-4">
//             {steps.map((s, i) => (
//                 <div key={i} className="flex gap-3">
//                     <div className="w-8 h-8 bg-orange-100 text-[#F59F00] flex items-center justify-center rounded-full text-sm font-bold">
//                         {i + 1}
//                     </div>
//                     <p className="text-gray-700">{s}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
// </section>

//         </div>
//     );
// }







































import { useState } from "react";
import AllTabs from "../AllTabs.jsx";
import {
    FaBolt,
    FaClock,
    FaMoneyBillWave,
    FaRupeeSign,
    FaGlobe
} from "react-icons/fa";
const TABS = [
    { label: "IMPS" },
    { label: "NEFT" },
    { label: "RTGS" },
];

const details = {
    IMPS: {
        icon: FaBolt,
        full: "Immediate Payment Service",
        desc: "Instant 24/7 fund transfer between bank accounts. Perfect for urgent and smaller transfers.",
        limit: "Up to ₹5 Lakh per transaction",
        time: "Instant (within seconds)",
        availability: "24 × 7 × 365 including holidays",
        charges: "₹5 – ₹15 per transaction",
        best: "Urgent transfers, splitting bills, peer-to-peer payments",
    },
    NEFT: {
        icon: FaClock,
        full: "National Electronic Funds Transfer",
        desc: "Batch-based settlement system. Ideal for scheduled and non-urgent payments.",
        limit: "No upper limit",
        time: "Processed in 30-minute batches",
        availability: "24 × 7 × 365 including holidays",
        charges: "₹2 – ₹25 per transaction",
        best: "EMI payments, vendor payments, large scheduled transfers",
    },
    RTGS: {
        icon: FaMoneyBillWave,
        full: "Real-Time Gross Settlement",
        desc: "Real-time settlement for high-value transactions.",
        limit: "Minimum ₹2 Lakh, no upper limit",
        time: "Instant (real-time gross settlement)",
        availability: "24 × 7 × 365 including holidays",
        charges: "₹25 – ₹50 per transaction",
        best: "Business payments, property transactions, high-value transfers",
    },
};

const compare = [
    { field: "Min Amount", imps: "₹1", neft: "₹1", rtgs: "₹2,00,000" },
    { field: "Max Amount", imps: "₹5 Lakh", neft: "No Limit", rtgs: "No Limit" },
    { field: "Settlement", imps: "Instant", neft: "30 min batch", rtgs: "Instant" },
    { field: "Availability", imps: "24/7/365", neft: "24/7/365", rtgs: "24/7/365" },
    { field: "Typical Charges", imps: "₹5 – ₹15", neft: "₹2 – ₹25", rtgs: "₹25 – ₹50" },
];

const steps = [
    "Login to Net Banking or Mobile Banking",
    "Navigate to Fund Transfer → Add Beneficiary",
    "Enter beneficiary name, account number & IFSC code",
    "Select transfer mode: IMPS, NEFT, or RTGS",
    "Enter the amount and remarks",
    "Confirm the transaction with your OTP",
];

export default function IMPSNEFTRTGS() {
    const [tab, setTab] = useState("IMPS");
    const d = details[tab];
    const Icon = d.icon;
    return (
        <div className="bg-gray-200 py-14">
            

            {/* TOP TABS */}
            <div className="max-w-[1200px] mx-auto px-6 mb-6">
                <AllTabs tabs={TABS} activeTab={tab} onChange={setTab} />
            </div>

            {/* CARD */}
            <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
            <section className="">
                <div className="max-w-[1200px] mx-auto">

                    <div className=" ">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-[#eef8ff] flex items-center justify-center rounded-md">
                                <Icon className="text-[#f47012] text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#1e3163]">{tab}</h3>
                                <p className="text-sm text-[#f47012]">{d.full}</p>
                            </div>
                        </div>

                        <p className=" mb-3">{d.desc}</p>

                        {/* INFO GRID */}
                        <div className="grid md:grid-cols-2 gap-3 mb-3">
                            {[
                                {
                                    label: "Transfer Limit",
                                    value: d.limit,
                                    icon: FaRupeeSign,
                                },
                                {
                                    label: "Processing Time",
                                    value: d.time,
                                    icon: FaClock,
                                },
                                {
                                    label: "Availability",
                                    value: d.availability,
                                    icon: FaGlobe,
                                },
                                {
                                    label: "Charges",
                                    value: d.charges,
                                    icon: FaMoneyBillWave,
                                },
                            ].map((row, i) => {
                                const RowIcon = row.icon; // ✅ IMPORTANT (avoid conflict with main Icon)

                                return (

                                    
                                    <div
                                        key={row.label}
                                    className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    >
                                        
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>

                                    {/* ICON */}
                                    <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-[#f47012]">
                                        <RowIcon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
                                    </div>

                                    {/* TITLE */}
                                    <h4 className="font-semibold text-[#1e3163] mb-1 text-base">
                                      {row.label}
                                    </h4>

                                    {/* DESC */}
                                    <p className="text-sm">
                                        {row.value}
                                    </p>

                                    {/* HOVER LINE */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
                                </div>
                                );
                            })}
                        </div>




                        {/* BEST FOR */}
                        <div className="mt-2 bg-[#eef8ff] border border-[#1e3163]/20 p-3 rounded-md">
                            <p className="text-sm text-[#f47012] font-semibold mb-1">Best For</p>
                            <p className="text-sm">{d.best}</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* TABLE */}
            <section className="py-6">
                <div className="max-w-[1200px] mx-auto">

                    <div className="border border-[#1e3163]/10 rounded-md overflow-hidden bg-white">
                        <table className="w-full text-sm">

                            <thead>
                                <tr className="bg-[#1e3163]">
                                    {["", "IMPS", "NEFT", "RTGS"].map((h) => (
                                        <th key={h} className="px-4 py-3 text-left text-white text-xs uppercase">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {compare.map((row, i) => (
                                    <tr key={row.field} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                        <td className="px-4 py-3 font-semibold text-[#f47012]">{row.field}</td>
                                        <td className="px-4 py-3">{row.imps}</td>
                                        <td className="px-4 py-3">{row.neft}</td>
                                        <td className="px-4 py-3">{row.rtgs}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="">
                <div className="max-w-[1200px] mx-auto bg-white border border-[#1e3163]/10 rounded-md p-4 space-y-4">
                    <p className="text-xs uppercase tracking-widest text-[#F59F00] font-bold mb-4">
                        How To Transfer
                    </p>
                    {steps.map((s, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-[#eef8ff] text-[#f47012] flex items-center justify-center rounded-full text-sm font-bold border border-[#1e3163]/20">
                                {i + 1}
                            </div>
                            <p className=" text-sm">{s}</p>
                        </div>
                    ))}

                </div>
            </section>
</div>
        </div>
    );
}