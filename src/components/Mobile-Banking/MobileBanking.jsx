// import React from "react";

// const features = [
//     {
//         icon: "⚡",
//         title: "Instant Transfers",
//         desc: "Send money via UPI, NEFT or IMPS to anyone instantly.",
//     },
//     {
//         icon: "🧾",
//         title: "Bill Payments",
//         desc: "Pay utilities, mobile recharges, and OTT subscriptions.",
//     },
//     {
//         icon: "📈",
//         title: "Investments",
//         desc: "Invest in Fixed Deposits, Mutual Funds and RDs on the go.",
//     },
//     {
//         icon: "🛡️",
//         title: "Biometric Login",
//         desc: "Fingerprint and Face ID unlock for lightning-fast secure access.",
//     },
//     {
//         icon: "📍",
//         title: "Branch Locator",
//         desc: "Find the nearest branch or ATM using your GPS location.",
//     },
//     {
//         icon: "💳",
//         title: "Card Controls",
//         desc: "Instantly block, unblock, or set limits on your debit/credit cards.",
//     },
// ];

// const steps = [
//     "Download our app from Play Store or App Store",
//     "Register using your account number & mobile number",
//     "Set a secure 6-digit MPIN of your choice",
//     "Enjoy 200+ banking features from your phone",
// ];

// export default function MobileBanking() {
//     return (
//         <div className="min-h-screen bg-white text-gray-900">
//             {/* Hero */}
//             <div className="relative overflow-hidden px-6 pt-20 pb-24 md:px-16">
//                 <div className="absolute top-[20px] right-[-40px] w-[450px] h-[450px] rounded-full bg-[#000] opacity-10 blur-[120px] pointer-events-none" />
//                 <div className="absolute bottom-[-30px] left-[5%] w-[300px] h-[300px] rounded-full bg-[#000] opacity-5 blur-[100px] pointer-events-none" />

//                 <div className="relative z-10 max-w-3xl">
//                     <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#000]/10 border border-[#000]/30 text-[#000] mb-8">
//                         📱 Mobile Banking
//                     </span>

//                     <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
//                         <span className="text-white">Your Bank</span>
//                         <br />
//                         <span className="bg-gradient-to-r from-[#000] to-[#B197FC] bg-clip-text text-transparent">
//                             In Your Pocket
//                         </span>
//                     </h1>

//                     <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
//                         Pay bills, invest, apply for loans, and chat with support — all from
//                         one beautifully designed app that works as hard as you do.
//                     </p>

//                     {/* App Store Buttons */}
//                     <div className="mt-8 flex gap-3 flex-wrap">
//                         <button className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#000] text-white font-bold text-sm hover:bg-[#9775fa] transition-colors">
//                             <span>▶</span> Download Play Store App
//                         </button>
//                         <button className="px-7 py-3.5 rounded-2xl border border-white/10 text-white/60 font-semibold text-sm hover:bg-white/5 transition-colors">
//                             <span>▶</span> Download Apple Store App
//                         </button>
//                     </div>

//                     {/* App Store badges */}
//                     <div className="mt-6 flex gap-3 flex-wrap">
//                         {["⭐ 4.8 on Play Store", "⭐ 4.7 on App Store", "🔒 RBI Approved"].map((b) => (
//                             <span key={b} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs">
//                                 {b}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Features — 3 col grid */}
//             <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
//                 <p className="text-[11px] uppercase tracking-[0.35em] text-[#000] font-bold mb-6">
//                     App Features
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {features.map((f) => (
//                         <div
//                             key={f.title}
//                             className="group rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#000]/30 hover:-translate-y-0.5 transition-all duration-300"
//                         >
//                             <div className="w-11 h-11 rounded-xl bg-[#000]/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
//                                 {f.icon}
//                             </div>
//                             <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
//                             <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Security highlight */}
//             <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
//                 <div className="rounded-2xl p-8 bg-gradient-to-br from-[#000]/10 to-transparent border border-[#000]/20 flex flex-col md:flex-row items-start md:items-center gap-6">
//                     <div className="w-16 h-16 rounded-2xl bg-[#000]/15 flex items-center justify-center text-3xl shrink-0">
//                         🔐
//                     </div>
//                     <div>
//                         <h3 className="text-white font-bold text-lg mb-1">Bank-Grade Security</h3>
//                         <p className="text-white/45 text-sm leading-relaxed max-w-xl">
//                             256-bit AES encryption, two-factor authentication, biometric login, and real-time
//                             fraud monitoring keep your money and data safe at all times.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* How it works */}
//             <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
//                 <p className="text-[11px] uppercase tracking-[0.35em] text-[#000] font-bold mb-6">
//                     Getting Started
//                 </p>
//                 <div className="rounded-2xl p-8 bg-white/[0.025] border border-white/[0.07] flex flex-col gap-5">
//                     {steps.map((s, i) => (
//                         <div key={i} className="flex items-start gap-4">
//                             <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold bg-[#000]/15 text-[#000] border border-[#000]/25">
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
    FaBolt,
    FaFileInvoice,
    FaChartLine,
    FaFingerprint,
    FaMapMarkerAlt,
    FaCreditCard,
} from "react-icons/fa";
import {  FaLock } from "react-icons/fa";
import { SiAppstore } from "react-icons/si"; // App Store icon
import { SiGoogleplay } from "react-icons/si"; // Google Play icon
import { IoIosLock } from "react-icons/io";
const features = [
    {
        icon: FaBolt,
        title: "Instant Transfers",
        desc: "Send money via UPI, NEFT or IMPS to anyone instantly.",
    },
    {
        icon: FaFileInvoice,
        title: "Bill Payments",
        desc: "Pay utilities, mobile recharges, and OTT subscriptions.",
    },
    {
        icon: FaChartLine,
        title: "Investments",
        desc: "Invest in Fixed Deposits, Mutual Funds and RDs on the go.",
    },
    {
        icon: FaFingerprint,
        title: "Biometric Login",
        desc: "Fingerprint and Face ID unlock for secure access.",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Branch Locator",
        desc: "Find nearest branch or ATM using GPS location.",
    },
    {
        icon: FaCreditCard,
        title: "Card Controls",
        desc: "Block, unblock, or set limits on your cards instantly.",
    },
];

const steps = [
    "Download our app from Play Store or App Store",
    "Register using your account number & mobile number",
    "Set a secure 6-digit MPIN of your choice",
    "Enjoy 200+ banking features from your phone",
];

export default function MobileBanking() {
    return (
        <div className="bg-gray-200 py-14">
            <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
                {/* Hero */}
                <div className="relative overflow-hidden px-3 pt-4 pb-4 md:px-10 ">

                    <div className="relative z-10 ">

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            <span className="">Banking Made </span>

                            <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
                                Fast & Effortless
                            </span>
                        </h1>
                        {/* Description */}
                        <p className="mt-4 text-lg  max-w-xl leading-relaxed">
                            Experience seamless banking with instant payments, smart investments,
                            and secure transactions — all designed for your everyday needs.
                        </p>

                        {/* Buttons */}
                        <div className="mt-4 flex gap-4 flex-wrap">

  {/* Android Button */}
  <button className="flex items-center gap-3 px-7 py-3.5 rounded-md bg-gradient-to-r from-[#F47012] to-orange-500 text-white font-semibold text-sm hover:scale-105 transition-all duration-300">
    <SiGoogleplay className="text-lg" />
    Download for Android
  </button>

  {/* iOS Button */}
  <button className="flex items-center gap-3 px-7 py-3.5 rounded-md bg-gradient-to-r from-[#1e3163] to-[#5F7ECE] text-white font-semibold text-sm hover:scale-105 transition-all duration-300">
    <SiAppstore className="text-lg" />
    Download for iOS
  </button>

</div>

                        {/* Ratings */}
                        {/* <div className="mt-4 flex gap-3 flex-wrap">
                            {[
                                "⭐ 4.8 Play Store",
                                "⭐ 4.7 App Store",
                                "🔒 RBI Secured",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 rounded-md bg-gray-200 border border-black text-sm "
                                >
                                    {item}
                                </span>
                            ))}
                        </div> */}
                        {/* <div className="mt-4 flex gap-3 flex-wrap">
  {[
    { icon: <SiGoogleplay className="text-yellow-500" />, text: "4.8 Play Store" },
    { icon: <SiAppstore className="text-blue-500" />, text: "4.7 App Store" },
    { icon: <FaLock className="text-gray-700" />, text: "RBI Secured" },
  ].map((item, index) => (
    <span
      key={index}
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 border border-black text-sm font-medium"
    >
      {item.icon} {item.text}
    </span>
  ))}
</div> */}

                        <div className="mt-4 flex items-center justify-between flex-wrap gap-4 p-3 rounded-md border ">

                            {/* Left */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#F47012]/10 flex items-center justify-center">
                                    <FiFileText className="text-[#F47012] text-xl" />
                                </div>

                                <div className="flex flex-col leading-tight">

                                    <p className=" font-semibold text-base tracking-tight">
                                        Mobile Banking Service – Terms & Conditions
                                    </p>

                                    <p className="text-xs  italic">
                                        Size • 120 kb
                                    </p>

                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">

                                <a
                                    href="assets/pdf/Downloads/MB-Terms-Conditions_202501031346403820.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#1e3163] to-[#5F7ECE] text-white text-sm font-semibold hover:scale-105 transition"
                                >
                                    <FiDownload className="text-sm" />
                                    Download
                                </a>
                            </div>

                        </div>


                    </div>
                </div>

                {/* Features — 3 col grid */}
                <section className="  pb-16 ">
                    <div className="flex items-center justify-center mb-2 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            App Features
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

                {/* Security highlight */}
                <section className="">
                    <div className="rounded-md p-6 bg-gradient-to-br from-[#eef8ff] to-transparent border border-[#000]/20 flex flex-col md:flex-row items-start md:items-center gap-5  ">
                        <div className="w-16 h-16 rounded-md bg-[#000]/15 flex items-center justify-center shrink-0">
                            <IoIosLock className="text-3xl text-[#f47012]" />
                        </div>
                        <div>
                            <h3 className="text-black font-bold text-lg mb-1">Bank-Grade Security</h3>
                            <p className="text-black text-sm leading-relaxed max-w-xl">
                                256-bit AES encryption, two-factor authentication, biometric login, and real-time
                                fraud monitoring keep your money and data safe at all times.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How it works */}


                <section className=" ">
                    <div className="flex items-center justify-center mb-2 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            Getting Started
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



                {/* <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#000] font-bold mb-6">
                    
                </p>
                <div className="rounded-2xl p-8 bg-white/[0.025] border border-white/[0.07] flex flex-col gap-5">
                    {steps.map((s, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold bg-[#000]/15 text-[#000] border border-[#000]/25">
                                {i + 1}
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed pt-1">{s}</p>
                        </div>
                    ))}
                </div>
            </section> */}
            </div>
        </div>
    );
}






