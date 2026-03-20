// import React from "react";

// const features = [
//     {
//         icon: "📂",
//         title: "Account Management",
//         desc: "View, manage, and switch between all your linked accounts in one place.",
//     },
//     {
//         icon: "🧮",
//         title: "Tax Payments",
//         desc: "Pay direct and indirect taxes — income tax, GST, TDS — with ease.",
//     },
//     {
//         icon: "📑",
//         title: "e-Statements",
//         desc: "Download account statements for up to 10 years in PDF or Excel.",
//     },
//     {
//         icon: "🔐",
//         title: "Two-Factor Auth",
//         desc: "OTP + password protection for every session and transaction.",
//     },
// ];

// const capabilities = [
//     "Loan application & EMI management",
//     "Fixed & recurring deposit booking",
//     "Cheque book request & status",
//     "Nominee management",
//     "NEFT / RTGS / IMPS transfers",
//     "Credit card bill payment",
//     "Insurance premium payment",
//     "Stop cheque requests",
// ];

// const steps = [
//     "Visit netbanking.yourbank.com from any browser",
//     "Login with your Customer ID & Password",
//     "Verify identity via OTP sent to registered mobile",
//     "Access all 150+ services securely",
// ];

// export default function InternetBanking() {
//     return (
//         <div className="min-h-screen bg-white text-gray-900">


//             {/* Features */}
//             <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
//                 <p className="text-[11px] uppercase tracking-[0.35em] text-[#339AF0] font-bold mb-6">
//                     Core Features
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {features.map((f) => (
//                         <div
//                             key={f.title}
//                             className="group rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#339AF0]/30 hover:-translate-y-0.5 transition-all duration-300"
//                         >
//                             <div className="w-11 h-11 rounded-md bg-[#339AF0]/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
//                                 {f.icon}
//                             </div>
//                             <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
//                             <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Full capabilities list */}
//             <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
//                 <p className="text-[11px] uppercase tracking-[0.35em] text-[#339AF0] font-bold mb-6">
//                     150+ Things You Can Do
//                 </p>
//                 <div className="rounded-2xl p-8 bg-white/[0.025] border border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {capabilities.map((c) => (
//                         <div key={c} className="flex items-center gap-3">
//                             <div className="w-5 h-5 rounded-full bg-[#339AF0]/15 flex items-center justify-center shrink-0">
//                                 <div className="w-1.5 h-1.5 rounded-full bg-[#339AF0]" />
//                             </div>
//                             <span className="text-white/55 text-sm">{c}</span>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* How it works */}
//             <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
//                 <p className="text-[11px] uppercase tracking-[0.35em] text-[#339AF0] font-bold mb-6">
//                     Getting Started
//                 </p>
//                 <div className="rounded-2xl p-8 bg-white/[0.025] border border-white/[0.07] flex flex-col gap-5">
//                     {steps.map((s, i) => (
//                         <div key={i} className="flex items-start gap-4">
//                             <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold bg-[#339AF0]/15 text-[#339AF0] border border-[#339AF0]/25">
//                                 {i + 1}
//                             </div>
//                             <p className="text-white/60 text-sm leading-relaxed pt-1">{s}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }




import React from "react";
import { FiFileText, FiDownload } from "react-icons/fi";
import {
    FaUserCircle,
    FaFileInvoiceDollar,
    FaFileAlt,
    FaLock,
    FaCheckCircle,
} from "react-icons/fa";

const features = [
    {
        icon: FaUserCircle,
        title: "Account Management",
        desc: "View, manage, and switch between all your linked accounts in one place.",
    },
    {
        icon: FaFileInvoiceDollar,
        title: "Tax Payments",
        desc: "Pay income tax, GST, and other taxes quickly and securely.",
    },
    {
        icon: FaFileAlt,
        title: "e-Statements",
        desc: "Download account statements for up to 10 years in PDF or Excel.",
    },
    {
        icon: FaLock,
        title: "Two-Factor Authentication",
        desc: "Secure login with OTP verification for every transaction.",
    },
];

const capabilities = [
    "Loan application & EMI management",
    "Fixed & recurring deposit booking",
    "Cheque book request & tracking",
    "Nominee management",
    "IMPS / NEFT / RTGS transfers",
    "Credit card bill payments",
    "Insurance premium payments",
    "Stop cheque requests",
];

const steps = [
    "Visit the official internet banking portal",
    "Login using your Customer ID & Password",
    "Verify OTP sent to your registered mobile number",
    "Access all banking services securely",
];

export default function InternetBanking() {
    return (
        <div className="bg-gray-200 py-14">
            <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
                <div className="relative overflow-hidden px-3 pt-4 pb-4 md:px-10 ">

                    <div className="relative z-10 ">

                        {/* Heading */}
                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                            <span className="">Secure Internet </span>

                            <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
                                Banking Experience
                            </span>
                        </h1>
                        {/* Description */}
                        <p className="mt-4 text-lg  max-w-xl leading-relaxed">
                            Perform all your banking activities online with advanced security,
                            fast transactions, and 24×7 access — no branch visits required.
                        </p>
                        <div className="mt-4 flex items-center justify-between flex-wrap gap-4 p-3 rounded-md border ">

                            {/* Left */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#F47012]/10 flex items-center justify-center">
                                    <FiFileText className="text-[#F47012] text-xl" />
                                </div>

                                <div className="flex flex-col leading-tight">

                                    <p className=" font-semibold text-base tracking-tight">
                                        Internet Banking View Mode Policy
                                    </p>

                                    <p className="text-xs  italic">
                                        Size • 3.2 MB
                                    </p>

                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">

                                <a
                                    href="assets/pdf/Downloads/Internet-Baking-View-Mode-Policy_202407301159469936.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-md 
    bg-gradient-to-r from-[#1e3163] to-[#5F7ECE] text-white text-sm font-semibold hover:scale-105 transition"
                                >
                                    <FiDownload className="text-sm" />
                                    Download
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* CAPABILITIES */}
                <section className=" py-6">
                    <div className="flex items-center justify-center mb-4 mt-2">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            Banking Services Available
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>

                    <div className="bg-white border border-[#1e3163]/10 rounded-md p-6 grid md:grid-cols-2 gap-4">
                        {capabilities.map((c, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#f47012] text-base" />
                                <span className="text-base">{c}</span>
                            </div>
                        ))}
                    </div>
                </section>
                {/* FEATURES */}
                <section className="">

                    <div className="flex items-center justify-center mb-4 ">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>

                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            Core Features
                        </h2>

                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>


                    {/* <div className="grid md:grid-cols-2 gap-6">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-[#1e3163]/10 rounded-md p-3 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="w-12 h-12 bg-[#eef8ff] flex items-center justify-center rounded-lg mb-3">
                                        <Icon className="text-[#f47012] text-xl" />
                                    </div>

                                    <h4 className="font-semibold text-[#1e3163] mb-1">
                                        {f.title}
                                    </h4>
                                    <p className="text-sm">{f.desc}</p>
                                </div>
                            );
                        })}
                    </div> */}
                    <div className="grid md:grid-cols-2 gap-6">
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
                                    <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#f47012]">
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



                {/* STEPS */}
                <section className=" ">
                    <div className="flex items-center justify-center mb-2 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            How to Get Started
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