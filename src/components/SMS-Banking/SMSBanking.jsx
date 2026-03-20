// import React from "react";

// import { 
//   FaWallet, 
//   FaFileAlt, 
//   FaBell, 
//   FaPaperPlane 
// } from "react-icons/fa";

// const features = [
//   {
//     icon: FaWallet,
//     title: "Balance Enquiry",
//     desc: "Get your account balance instantly via a simple SMS command.",
//   },
//   {
//     icon: FaFileAlt,
//     title: "Mini Statement",
//     desc: "Receive your last 5 transactions directly on your phone.",
//   },
//   {
//     icon: FaBell,
//     title: "Transaction Alerts",
//     desc: "Instant SMS alerts for every debit and credit on your account.",
//   },
//   {
//     icon: FaPaperPlane,
//     title: "Fund Transfer",
//     desc: "Transfer money to registered beneficiaries using SMS commands.",
//   },
// ];
// const steps = [
//     "Register your mobile number at your nearest branch",
//     "SMS the keyword BAL / TXN / TRANS to 9266",
//     "Receive an instant response on your phone",
//     "Confirm transactions using your secure MPIN",
// ];

// const commands = [
//     { cmd: "BAL", action: "Check account balance" },
//     { cmd: "MINI", action: "Mini statement (last 5 txns)" },
//     { cmd: "TRANS <Amount> <MMID>", action: "Transfer funds" },
//     { cmd: "MPIN <OldPIN> <NewPIN>", action: "Change MPIN" },
// ];

// export default function SMSBanking() {
//     return (
//         <div className="bg-gray-200 py-14">
//             <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
//             {/* Hero */}

//             <div className="relative overflow-hidden px-3 pt-4 pb-4 md:px-10 ">

//                     <div className="relative z-10 ">

//                         {/* Heading */}
//                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
//                             <span className="">Bank via </span>

//                             <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
//                                 Simple SMS
//                             </span>
//                         </h1>
//                         {/* Description */}
//                         <p className="mt-4 text-lg  max-w-xl leading-relaxed">
//                              No internet. No app. No problem. Send a text and manage your money
//                         anytime, from any mobile — even a basic phone.
//                         </p>

//                     </div>
//                 </div>

//             {/* Features */}
//             <section >

//                 <div className="flex items-center justify-center mb-4 mt-4">
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                         <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
//                             What You Can Do
//                         </h2>
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                     </div>
//                 {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {features.map((f) => (
//                         <div
//                             key={f.title}
//                             className="group rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#00C9A7]/30 hover:-translate-y-0.5 transition-all duration-300"
//                         >
//                             <div className="w-11 h-11 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-200">
//                                 {f.icon}
//                             </div>
//                             <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
//                             <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
//                         </div>
//                     ))}
//                 </div> */}



//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
//                         {features.map((f, i) => {
//                             const Icon = f.icon;

//                             return (


//                                 <div
//                                     key={i}
//                                     className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                                 >
//                                     {/* TOP ACCENT BAR */}
//                                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>

//                                     {/* ICON */}
//                                     <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#f47012]">
//                                         <Icon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
//                                     </div>

//                                     {/* TITLE */}
//                                     <h4 className="font-semibold text-[#1e3163] mb-1 text-base">
//                                         {f.title}
//                                     </h4>

//                                     {/* DESC */}
//                                     <p className="text-sm">
//                                         {f.desc}
//                                     </p>

//                                     {/* HOVER LINE */}
//                                     <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
//                                 </div>


//                             );
//                         })}
//                     </div>
//             </section>

//             {/* SMS Commands */}
            // {/* <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
            //     <p className="text-[11px] uppercase tracking-[0.35em] text-[#00C9A7] font-bold mb-6">
            //         SMS Commands
            //     </p>
            //     <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
            //         <table className="w-full text-sm">
            //             <thead>
            //                 <tr className="bg-[#00C9A7]/10">
            //                     <th className="px-6 py-4 text-left text-[11px] uppercase tracking-widest text-[#00C9A7]">Command</th>
            //                     <th className="px-6 py-4 text-left text-[11px] uppercase tracking-widest text-[#00C9A7]">Action</th>
            //                 </tr>
            //             </thead>
            //             <tbody>
            //                 {commands.map((c, i) => (
            //                     <tr key={c.cmd} className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
            //                         <td className="px-6 py-4 font-mono text-[#00C9A7] font-medium text-xs">{c.cmd}</td>
            //                         <td className="px-6 py-4  text-xs">{c.action}</td>
            //                     </tr>
            //                 ))}
            //             </tbody>
            //         </table>
            //     </div>
            //     <p className="mt-3 text-xs text-white/25">Send commands to: <span className="text-[#00C9A7] font-mono">9266</span></p>
            // </section> */}

//             {/* How it works */}
//            <section className=" ">
//                     <div className="flex items-center justify-center mb-4 mt-4">
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                         <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
//                             How It Works
//                         </h2>
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                     </div>


//                     <div className="p-6 space-y-3">
//                         {steps.map((s, i) => (
//                             <div key={i} className="flex gap-4 items-start">
//                                 <div className="w-8 h-8 bg-[#eef8ff] text-[#f47012] flex items-center justify-center rounded-full text-sm font-bold border border-[#1e3163]/20">
//                                     {i + 1}
//                                 </div>
//                                 <p className="text-base text-[#1e3163]">{s}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }





// import React from "react";
// import { FiFileText, FiDownload } from "react-icons/fi";
// import { FaWallet, FaFileAlt, FaBell, FaPaperPlane } from "react-icons/fa";

// const features = [
//     { icon: FaWallet, title: "Balance Enquiry", desc: "Get your account balance instantly via a simple SMS command." },
//     { icon: FaFileAlt, title: "Mini Statement", desc: "Receive your last 5 transactions directly on your phone." },
//     { icon: FaBell, title: "Transaction Alerts", desc: "Instant SMS alerts for every debit and credit on your account." },
//     { icon: FaPaperPlane, title: "Fund Transfer", desc: "Transfer money to registered beneficiaries using SMS commands." },
// ];

// const steps = [
//     "Register your mobile number at your nearest branch",
//     "SMS the keyword BAL / TXN / TRANS to 9266",
//     "Receive an instant response on your phone",
//     "Confirm transactions using your secure MPIN",
// ];

// const compare = [
//     { field: "1", imps: "SBAL", neft: "Balance Inquiry", rtgs: "SBAL E.g. SBAL SB 345" },
//     { field: "2", imps: "LST3", neft: "Last 3 Transactions", rtgs: "LST3 E.g. LST3 SB 180" },
//     { field: "3", imps: "FCHQ", neft: "Fate of Cheque", rtgs: "FCHQ SB E.g. FCHQ 123456 SB 345" },
// ];

// export default function SMSBanking() {
//     return (
//         <div className="bg-gray-200 py-14">
//             <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
//                 {/* Hero */}

//                 <div className="relative overflow-hidden px-3 pt-4 pb-4 md:px-10 ">

//                     <div className="relative z-10 ">

//                         {/* Heading */}
//                         <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
//                             <span className="">Bank via </span>

//                             <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
//                                 Simple SMS
//                             </span>
//                         </h1>
//                         {/* Description */}
//                         <p className="mt-4 text-lg  max-w-xl leading-relaxed">
//                             No internet. No app. No problem. Send a text and manage your money
//                             anytime, from any mobile — even a basic phone.
//                         </p>
//                         <div className="mt-4 flex items-center justify-between flex-wrap gap-4 p-3 rounded-md border ">

//                             {/* Left */}
//                             <div className="flex items-center gap-4">
//                                 <div className="w-8 h-8 rounded-lg bg-[#F47012]/10 flex items-center justify-center">
//                                     <FiFileText className="text-[#F47012] text-xl" />
//                                 </div>

//                                 <div className="flex flex-col leading-tight">

//                                     <p className=" font-semibold text-base tracking-tight">
//                                         Banking Charges & Fees
//                                     </p>

//                                     <p className="text-xs  italic">
//                                         Size • 600 kb
//                                     </p>

//                                 </div>
//                             </div>

//                             {/* Actions */}
//                             <div className="flex gap-3">

//                                 <a
//                                     href="assets/pdf/Downloads/updated_service_charges_202512051708249171.pdf"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center gap-2 px-4 py-3 rounded-md bg-gradient-to-r from-[#1e3163] to-[#5F7ECE] text-white text-sm font-semibold hover:scale-105 transition"
//                                 >
//                                     <FiDownload className="text-sm" />
//                                     Download
//                                 </a>
//                             </div>

//                         </div>
//                     </div>

//                 </div>

//                 {/* Features */}
//                 <section >

//                     <div className="flex items-center justify-center mb-4 mt-4">
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                         <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
//                             What You Can Do
//                         </h2>
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
//                         {features.map((f, i) => {
//                             const Icon = f.icon;

//                             return (


//                                 <div
//                                     key={i}
//                                     className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                                 >
//                                     {/* TOP ACCENT BAR */}
//                                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>

//                                     {/* ICON */}
//                                     <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#f47012]">
//                                         <Icon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
//                                     </div>

//                                     {/* TITLE */}
//                                     <h4 className="font-semibold text-[#1e3163] mb-1 text-base">
//                                         {f.title}
//                                     </h4>

//                                     {/* DESC */}
//                                     <p className="text-sm">
//                                         {f.desc}
//                                     </p>

//                                     {/* HOVER LINE */}
//                                     <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
//                                 </div>


//                             );
//                         })}
//                     </div>
//                 </section>

//                 <section className="">

//                     <div className="flex items-center justify-center mb-4 mt-4">
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                         <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
//                             SMS Requests
//                         </h2>
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                     </div>
//                     <div className="border border-[#1e3163]/10 rounded-md overflow-hidden bg-white">
//                         <table className="w-full text-sm">
//                             <tbody>
//                                 {compare.map((row, i) => (
//                                     <tr key={row.field} className={i % 2 === 0 ? "bg-gray-50" : ""}>
//                                         <td className="px-4 py-3 font-semibold text-[#f47012]">{row.field}</td>
//                                         <td className="px-4 py-3">{row.imps}</td>
//                                         <td className="px-4 py-3">{row.neft}</td>
//                                         <td className="px-4 py-3">{row.rtgs}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

                    
//                 </section>

//                 {/* How it works */}
//                 <section className=" ">
//                     <div className="flex items-center justify-center mb-4 mt-4">
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                         <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
//                             How It Works
//                         </h2>
//                         <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
//                     </div>


//                     <div className="p-6 space-y-3">
//                         {steps.map((s, i) => (
//                             <div key={i} className="flex gap-4 items-start">
//                                 <div className="w-8 h-8 bg-[#eef8ff] text-[#f47012] flex items-center justify-center rounded-full text-sm font-bold border border-[#1e3163]/20">
//                                     {i + 1}
//                                 </div>
//                                 <p className="text-base text-[#1e3163]">{s}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }



import React from "react";
import { FiFileText, FiDownload } from "react-icons/fi";
import { FaWallet, FaFileAlt, FaBell, FaPaperPlane } from "react-icons/fa";

const features = [
    { icon: FaWallet, title: "Balance Enquiry", desc: "Get your account balance instantly via a simple SMS command." },
    { icon: FaFileAlt, title: "Mini Statement", desc: "Receive your last 5 transactions directly on your phone." },
    { icon: FaBell, title: "Transaction Alerts", desc: "Instant SMS alerts for every debit and credit on your account." },
    { icon: FaPaperPlane, title: "Fund Transfer", desc: "Transfer money to registered beneficiaries using SMS commands." },
];

const steps = [
    "Register your mobile number at your nearest branch",
    "SMS the keyword BAL / TXN / TRANS to 9266",
    "Receive an instant response on your phone",
    "Confirm transactions using your secure MPIN",
];

const compare = [
    { field: "1", imps: "SBAL", neft: "Balance Inquiry", rtgs: "SBAL  E.g. SBAL SB 345" },
    { field: "2", imps: "LST3", neft: "Last 3 Transactions", rtgs: "LST3  E.g. LST3 SB 180" },
    { field: "3", imps: "FCHQ", neft: "Fate of Cheque", rtgs: "FCHQ SB  E.g. FCHQ 123456 SB 345" },
];

export default function SMSBanking() {
    return (
        <div className="bg-gray-200 py-14">
            <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
                {/* Hero */}
                <div className="relative overflow-hidden px-3 pt-4 pb-4 md:px-10">
                    <div className="relative z-10">
                        {/* Heading */}
                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                            <span className="">Bank via </span>
                            <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
                                Simple SMS
                            </span>
                        </h1>
                        {/* Description */}
                        <p className="mt-4 text-lg max-w-xl leading-relaxed">
                            No internet. No app. No problem. Send a text and manage your money
                            anytime, from any mobile — even a basic phone.
                        </p>
                        <div className="mt-4 flex items-center justify-between flex-wrap gap-4 p-3 rounded-md border">
                            {/* Left */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#F47012]/10 flex items-center justify-center">
                                    <FiFileText className="text-[#F47012] text-xl" />
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <p className="font-semibold text-base tracking-tight">
                                        Banking Charges & Fees
                                    </p>
                                    <p className="text-xs italic">
                                        Size • 600 kb
                                    </p>
                                </div>
                            </div>
                            {/* Actions */}
                            <div className="flex gap-3">
                                <a
                                    href="assets/pdf/Downloads/updated_service_charges_202512051708249171.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-3 rounded-md bg-gradient-to-r from-[#1e3163] to-[#5F7ECE] text-white text-sm font-semibold hover:scale-105 transition"
                                >
                                    <FiDownload className="text-sm" />
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <section>
                    <div className="flex items-center justify-center mb-4 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            What You Can Do
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    {/* TOP ACCENT BAR */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>
                                    {/* ICON */}
                                    <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#f47012]">
                                        <Icon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
                                    </div>
                                    {/* TITLE */}
                                    <h4 className="font-semibold text-[#1e3163] mb-1 text-base">
                                        {f.title}
                                    </h4>
                                    {/* DESC */}
                                    <p className="text-sm">
                                        {f.desc}
                                    </p>
                                    {/* HOVER LINE */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* SMS Requests */}
                <section>
                    <div className="flex items-center justify-center mb-4 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            SMS Requests
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>
                    <div className="border border-[#1e3163]/10 rounded-md overflow-hidden bg-white">
                        <table className="w-full text-sm">
                            <tbody>
                                {compare.map((row, i) => (
                                    <tr key={row.field} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                      
                                        <td className="px-4 py-3">{row.imps}</td>
                                        <td className="px-4 py-3">{row.neft}</td>
                                        <td className="px-4 py-3">{row.rtgs}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* How it works */}
                <section>
                    <div className="flex items-center justify-center mb-4 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            How It Works
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>
                    <div className="p-6 space-y-3">
                        {steps.map((s, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-[#eef8ff] text-[#f47012] flex items-center justify-center rounded-full text-sm font-bold border border-[#1e3163]/20">
                                    {i + 1}
                                </div>
                                <p className="text-base text-[#1e3163]">{s}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}