// import { useState } from "react";
// import { FiPhone, FiCopy, FiCheck, FiMapPin, FiInfo } from "react-icons/fi";
// import { FaUniversity } from "react-icons/fa";
// const contactItems = [
//   { id: "phone1", label: "Branch No", value: "(020) 26704300", raw: "02026704300" },
//   { id: "phone2", label: "Branch No", value: "(020) 26704304", raw: "02026704304" },
//   { id: "tollfree", label: "Toll Free", value: "1800 1200 304", raw: "18001200304", badge: "" },
//   { id: "atm", label: "ATM Operations", value: "1800 2201 99", raw: "1800220199", badge: "24×7" },
//   { id: "imps", label: "IMPS Operations", value: "1800 1200 304", raw: "18001200304" },
// ];

// export default function JanContact() {
//   const [copied, setCopied] = useState(null);

//   const handleCopy = (raw, id) => {
//     navigator.clipboard.writeText(raw);
//     setCopied(id);
//     setTimeout(() => setCopied(null), 2000);
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-200 py-14">

//       {/* MAIN CARD */}
//       <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white flex flex-col lg:flex-row">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="lg:w-80 bg-gradient-to-b from-[#1e3163] to-[#16254d] text-white flex flex-col items-center justify-center px-8 py-10 text-center relative">

//           {/* Logo circle */}
//         <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f47012] to-[#ff9a4d] flex items-center justify-center text-3xl shadow-lg mb-5">
//   <FaUniversity className="text-white" />
// </div>

//           <h1 className="text-lg font-semibold tracking-wide">
//             Janaseva Sahakari Bank Ltd.
//           </h1>
//           <p className="text-xs text-gray-300 tracking-widest uppercase mt-1">
//             Hadapsar, Pune
//           </p>

//           {/* Divider */}
//           <div className="w-12 h-[2px] bg-[#f47012] my-6 rounded"></div>

//           {/* Address */}
//           <div className="flex flex-col items-center gap-1">
//             <FiMapPin className="text-[#f47012]" />
//             <p className="text-xs uppercase tracking-wider text-gray-300">
//               Head Office
//             </p>
//             <p className="text-sm leading-relaxed text-gray-100">
//               Plot No. 14, Hadapsar <br />
//               Industrial Estate <br />
//               Pune — 411013
//             </p>
//           </div>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="flex-1 px-5 sm:px-8 py-8">

//           <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">
//             Contact Numbers
//           </p>

//           {/* GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//             {contactItems.map((item) => (
//               <div
//                 key={item.id}
//                 className={`flex items-center justify-between p-2 rounded-xl border transition-all duration-300
//                 ${copied === item.id
//                     ? "bg-[#f47012]/10 border-[#f47012]"
//                     : "bg-gray-50 hover:bg-white hover:shadow-md border-gray-200"
//                   }`}
//               >

//                 {/* LEFT */}
//                 <a
//                   href={`tel:${item.raw}`}
//                   className="flex items-center gap-3"
//                 >
//                   <div className="p-2 rounded-lg bg-[#1e3163]/10 text-[#1e3163]">
//                     <FiPhone />
//                   </div>

//                   <div>
//                     <p className="text-sm text-[#f47012]">{item.label}</p>
//                     <p className="text-sm font-semibold text-gray-800 tracking-wide">
//                       {item.value}
//                     </p>
//                   </div>
//                 </a>

//                 {/* RIGHT */}
//                 <div className="flex items-center gap-2">

//                   {item.badge && (
//                     <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f47012]/10 text-[#f47012] font-semibold">
//                       {item.badge}
//                     </span>
//                   )}

//                   <button
//                     onClick={() => handleCopy(item.raw, item.id)}
//                     className="p-2 rounded-md hover:bg-gray-100 transition"
//                   >
//                     {copied === item.id ? (
//                       <FiCheck className="text-green-600" />
//                     ) : (
//                       <FiCopy className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* INFO CARD */}
//             <div className="sm:col-span-2 flex items-start gap-3 p-2 rounded-xl bg-[#1e3163]/5 border border-[#1e3163]/20">
//               <FiInfo className="text-[#1e3163] ml-4" />
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 ATM helpline available <span className="text-[#f47012] font-semibold">24 × 7</span> · 
//                 Toll-free numbers are <span className="text-[#f47012] font-semibold">free of charge</span>
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }




import { useLang } from "../ImpFolder/LangContext";
import { useState } from "react";
import { FiPhone, FiCopy, FiCheck, FiMapPin, FiInfo } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
const contactItems = [
  { id: "phone1", label: "Branch No", value: "(020) 26704300", raw: "02026704300" },
  { id: "phone2", label: "Branch No", value: "(020) 26704304", raw: "02026704304" },
  { id: "tollfree", label: "Toll Free", value: "1800 1200 304", raw: "18001200304", badge: "" },
  { id: "atm", label: "ATM Operations", value: "1800 2201 99", raw: "1800220199", badge: "24×7" },
  { id: "imps", label: "IMPS Operations", value: "1800 1200 304", raw: "18001200304" },
]
const translations = {
    en: {
        contactNumbers: "Contact Numbers",
        headOffice: "Head Office",
        address: ["Plot No. 14, Hadapsar", "Industrial Estate", "Pune — 411013"],
        bankName: "Janaseva Sahakari Bank Ltd.",
        location: "Hadapsar, Pune",
        labels: {
            phone1: "Branch No",
            phone2: "Branch No",
            tollfree: "Toll Free",
            atm: "ATM Operations",
            imps: "IMPS Operations",
        },
        infoText: ["ATM helpline available ", "24 × 7", " · Toll-free numbers are ", "free of charge"],
    },
    mr: {
        contactNumbers: "संपर्क क्रमांक",
        headOffice: "मुख्य कार्यालय",
        address: ["प्लॉट नं. १४, हडपसर", "औद्योगिक वसाहत", "पुणे — ४११०१३"],
        bankName: "जनसेवा सहकारी बँक लि.",
        location: "हडपसर, पुणे",
        labels: {
            phone1: "शाखा क्र.",
            phone2: "शाखा क्र.",
            tollfree: "टोल फ्री",
            atm: "एटीएम सेवा",
            imps: "आयएमपीएस सेवा",
        },
        infoText: ["एटीएम हेल्पलाइन उपलब्ध ", "२४ × ७", " · टोल-फ्री क्रमांक ", "विनामूल्य आहेत"],
    }
}

export default function JanContact() {
    const [copied, setCopied] = useState(null)
    const { lang } = useLang()
    const t = translations[lang]

    const handleCopy = (raw, id) => {
        navigator.clipboard.writeText(raw)
        setCopied(id)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <div className="flex items-center justify-center bg-gray-200 py-14">
            <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white flex flex-col lg:flex-row">

                {/* LEFT PANEL */}
                <div className="lg:w-80 bg-gradient-to-b from-[#1e3163] to-[#16254d] text-white flex flex-col items-center justify-center px-8 py-10 text-center relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f47012] to-[#ff9a4d] flex items-center justify-center text-3xl shadow-lg mb-5">
                        <FaUniversity className="text-white" />
                    </div>
                    <h1 className="text-lg font-semibold tracking-wide">{t.bankName}</h1>
                    <p className="text-xs text-gray-300 tracking-widest uppercase mt-1">{t.location}</p>
                    <div className="w-12 h-[2px] bg-[#f47012] my-6 rounded"></div>
                    <div className="flex flex-col items-center gap-1">
                        <FiMapPin className="text-[#f47012]" />
                        <p className="text-xs uppercase tracking-wider text-gray-300">{t.headOffice}</p>
                        <p className="text-sm leading-relaxed text-gray-100">
                            {t.address[0]}<br />{t.address[1]}<br />{t.address[2]}
                        </p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="flex-1 px-5 sm:px-8 py-8">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">{t.contactNumbers}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactItems.map((item) => (
                            <div key={item.id}
                                className={`flex items-center justify-between p-2 rounded-xl border transition-all duration-300
                                ${copied === item.id ? "bg-[#f47012]/10 border-[#f47012]" : "bg-gray-50 hover:bg-white hover:shadow-md border-gray-200"}`}
                            >
                                <a href={`tel:${item.raw}`} className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-[#1e3163]/10 text-[#1e3163]"><FiPhone /></div>
                                    <div>
                                        <p className="text-sm text-[#f47012]">{t.labels[item.id]}</p>
                                        <p className="text-sm font-semibold text-gray-800 tracking-wide">{item.value}</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-2">
                                    {item.badge && (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f47012]/10 text-[#f47012] font-semibold">{item.badge}</span>
                                    )}
                                    <button onClick={() => handleCopy(item.raw, item.id)} className="p-2 rounded-md hover:bg-gray-100 transition">
                                        {copied === item.id ? <FiCheck className="text-green-600" /> : <FiCopy className="text-gray-500" />}
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="sm:col-span-2 flex items-start gap-3 p-2 rounded-xl bg-[#1e3163]/5 border border-[#1e3163]/20">
                            <FiInfo className="text-[#1e3163] ml-4" />
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {t.infoText[0]}<span className="text-[#f47012] font-semibold">{t.infoText[1]}</span>{t.infoText[2]}<span className="text-[#f47012] font-semibold">{t.infoText[3]}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}