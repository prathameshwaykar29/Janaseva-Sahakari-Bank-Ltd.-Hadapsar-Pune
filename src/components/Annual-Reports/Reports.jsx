// import React, { useState } from 'react'

// const reports = [
//     { year: 2025, size: "4.2 MB", pages: 128, theme: "Growth & Digital Transformation" },
//     { year: 2024, size: "3.9 MB", pages: 118, theme: "Community Banking Excellence" },
//     { year: 2023, size: "3.7 MB", pages: 112, theme: "Resilience & Member Trust" },
//     { year: 2022, size: "3.5 MB", pages: 108, theme: "Post-Pandemic Recovery" },
//     { year: 2021, size: "3.3 MB", pages: 104, theme: "Digital Banking Milestone" },
//     { year: 2020, size: "3.1 MB", pages: 98, theme: "Serving Members Through Crisis" },
//     { year: 2019, size: "2.9 MB", pages: 96, theme: "Expanding Branch Network" },
//     { year: 2018, size: "2.7 MB", pages: 90, theme: "Financial Inclusion Drive" },
//     { year: 2017, size: "2.4 MB", pages: 84, theme: "Strengthening Member Base" },
//     { year: 2016, size: "2.1 MB", pages: 78, theme: "Foundation of Jana Seva" },
// ]

// const ACCENT = "#1B4F72"
// const ACCENT_LIGHT = "#D6EAF8"

// const DownloadIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
//         <polyline points="7 10 12 15 17 10" />
//         <line x1="12" y1="15" x2="12" y2="3" />
//     </svg>
// )

// const EyeIcon = () => (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//         <circle cx="12" cy="12" r="3" />
//     </svg>
// )

// const FileIcon = () => (
//     <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
//         <path d="M0 4C0 1.79 1.79 0 4 0H20L32 12V36C32 38.21 30.21 40 28 40H4C1.79 40 0 38.21 0 36V4Z" fill={ACCENT} />
//         <path d="M20 0L32 12H24C21.79 12 20 10.21 20 8V0Z" fill="rgba(255,255,255,0.3)" />
//         <text x="16" y="30" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif">PDF</text>
//     </svg>
// )

// const Reports = () => {
//     const [hovered, setHovered] = useState(null)

//     return (
//         <section style={{
//             minHeight: "100vh",
//             background: "linear-gradient(160deg, #F7F3EE 0%, #EDE5D8 60%, #E8DDD0 100%)",
//             fontFamily: "'Georgia', 'Times New Roman', serif",
//             padding: "60px 24px 80px",
//             position: "relative",
//             overflow: "hidden",
//         }}>
//             {/* Dot texture */}
//             <div style={{
//                 position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.15,
//                 backgroundImage: "radial-gradient(circle, #A08060 1px, transparent 1px)",
//                 backgroundSize: "32px 32px",
//             }} />

//             <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>



//                 {/* Grid */}
//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
//                     gap: "20px",
//                 }}>
//                     {reports.map((r, i) => (
//                         <div
//                             key={r.year}
//                             onMouseEnter={() => setHovered(r.year)}
//                             onMouseLeave={() => setHovered(null)}
//                             style={{
//                                 background: hovered === r.year ? "#fff" : "rgba(255,255,255,0.65)",
//                                 border: `1.5px solid ${hovered === r.year ? ACCENT : "#DDD0BC"}`,
//                                 borderRadius: "14px",
//                                 padding: "26px 22px",
//                                 transition: "all 0.3s ease",
//                                 boxShadow: hovered === r.year
//                                     ? "0 12px 36px rgba(27,79,114,0.13)"
//                                     : "0 2px 10px rgba(0,0,0,0.05)",
//                                 transform: hovered === r.year ? "translateY(-4px)" : "translateY(0)",
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 animation: `fadeUp 0.4s ease ${i * 0.05}s both`,
//                             }}
//                         >
//                             {/* Top accent bar */}
//                             <div style={{
//                                 position: "absolute", top: 0, left: 0, right: 0, height: "3px",
//                                 background: ACCENT, borderRadius: "14px 14px 0 0",
//                                 opacity: hovered === r.year ? 1 : 0.3, transition: "opacity 0.3s",
//                             }} />

//                             {/* File icon + year badge */}
//                             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
//                                 <FileIcon />
//                                 <span style={{
//                                     fontSize: "12px", fontFamily: "'Helvetica Neue', sans-serif",
//                                     background: ACCENT_LIGHT, color: ACCENT,
//                                     borderRadius: "999px", padding: "4px 14px",
//                                     fontWeight: 700, letterSpacing: "0.04em",
//                                 }}>
//                                     {r.year}
//                                 </span>
//                             </div>

//                             {/* Title */}
//                             <h3 style={{
//                                 fontSize: "1rem", color: "#1C1408", fontWeight: "normal",
//                                 marginBottom: "5px", lineHeight: 1.3,
//                             }}>
//                                 Annual Report <strong>{r.year}</strong>
//                             </h3>
//                             <p style={{
//                                 fontSize: "12px", color: "#8A7560",
//                                 fontFamily: "'Helvetica Neue', sans-serif",
//                                 marginBottom: "18px", lineHeight: 1.5, fontStyle: "italic",
//                             }}>
//                                 {r.theme}
//                             </p>

//                             {/* Meta */}
//                             <div style={{
//                                 display: "flex", gap: "14px", marginBottom: "18px",
//                                 fontFamily: "'Helvetica Neue', sans-serif", fontSize: "12px", color: "#9E8E78",
//                             }}>
//                                 <span>📄 {r.pages} pages</span>
//                                 <span>💾 {r.size}</span>
//                             </div>

//                             {/* Buttons */}
//                             <div style={{ display: "flex", gap: "10px" }}>
//                                 <button
//                                     style={{
//                                         flex: 1, padding: "9px 0", borderRadius: "8px",
//                                         background: ACCENT, color: "#fff", border: "none",
//                                         display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
//                                         fontFamily: "'Helvetica Neue', sans-serif", fontSize: "13px", fontWeight: 600,
//                                         cursor: "pointer", transition: "opacity 0.2s",
//                                     }}
//                                     onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
//                                     onMouseLeave={e => e.currentTarget.style.opacity = "1"}
//                                 >
//                                     <DownloadIcon /> Download
//                                 </button>
//                                 <button
//                                     style={{
//                                         padding: "9px 14px", borderRadius: "8px",
//                                         border: `1.5px solid ${ACCENT}`,
//                                         background: "transparent", color: ACCENT,
//                                         display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
//                                         fontFamily: "'Helvetica Neue', sans-serif", fontSize: "13px",
//                                         cursor: "pointer", transition: "background 0.2s",
//                                     }}
//                                     onMouseEnter={e => e.currentTarget.style.background = ACCENT_LIGHT}
//                                     onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//                                 >
//                                     <EyeIcon /> View
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//             </div>

//             <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//         </section>
//     )
// }

// export default Reports







import React, { useState } from "react";
import { BsFilePdf } from "react-icons/bs";
import { Link } from "react-router-dom";

const reports = [
    { year: "2024-2025", theme: "Community Banking Excellence", image: "assets/images/Annual-Report/1.jpg", pdf: "assets/images/Annual-Report/2024-2025.pdf", },
    { year: "2023-2024", theme: "Resilience & Member Trust", image: "assets/images/Annual-Report/2.jpg", pdf: "assets/images/Annual-Report/2023-24.pdf" },
    { year: "2022-2023", theme: "Post-Pandemic Recovery", image: "assets/images/Annual-Report/3.png", pdf: "assets/images/Annual-Report/2022-23.pdf" },
    { year: "2021-2022", theme: "Digital Banking Milestone", image: "assets/images/Annual-Report/4.png", pdf: "assets/images/Annual-Report/2021-22.pdf" },
    { year: "2020-2021", theme: "Serving Members Through Crisis", image: "assets/images/Annual-Report/5.png", pdf: "assets/images/Annual-Report/2020-21.pdf" },
    { year: "2019-2020", theme: "Expanding Branch Network", image: "assets/images/Annual-Report/6.png", pdf: "assets/images/Annual-Report/2019-20.pdf" },
    { year: "2018-2019", theme: "Financial Inclusion Drive", image: "assets/images/Annual-Report/7.png", pdf: "assets/images/Annual-Report/2018-19.pdf" },
    { year: "2017-2018", theme: "Strengthening Member Base", image: "assets/images/Annual-Report/8.png", pdf: "assets/images/Annual-Report/2017-18.pdf" },
    { year: "2016-2017", theme: "Foundation of Jana Seva", image: "assets/images/Annual-Report/9.png", pdf: "assets/images/Annual-Report/2016-17.pdf" },
];



export default function Reports() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="relative  overflow-hidden py-14 bg-gray-100">

            <div className="relative max-w-[1200px] mx-auto">

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {reports.map((r) => (
                        <div
                            key={r.year}
                            onMouseEnter={() => setHovered(r.year)}
                            onMouseLeave={() => setHovered(null)}
                            className={`relative overflow-hidden rounded-lg p-4 transition-all duration-300 animate-fadeUp
              ${hovered === r.year
                                    ? "bg-white/60 border border-[#1e3163] shadow-xl -translate-y-1"
                                    : "bg-white border border-[#DDD0BC] shadow-sm"
                                }`}
                        >

                            {/* accent bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-[#1e3163] rounded-t-lg transition-opacity ${hovered === r.year ? "opacity-100" : "opacity-30"
                                    }`}
                            />

                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-base font-semibold text-[#1C1408]">
                                    Annual Report
                                </h3>

                                <span className="text-xs px-3 py-2 rounded-full bg-[#D6EAF8] text-[#1e3163] font-bold">
                                    {r.year}
                                </span>
                            </div>
                            <img
                                src={r.image}
                                alt={`Annual Report ${r.year}`}
                                className="w-full h-70 object-cover rounded-md mb-2"
                            />

                            {/* 

                            <p className="text-[12px] text-[#8A7560] italic mb-[18px] leading-[1.5]">
                                {r.theme}
                            </p> */}

                            {/* <div className="flex items-center gap-4 text-sm text-[#f47012] mb-3">
  <span className="flex items-center gap-1">
    <FiFileText className="text-black"/>
    {r.pages} pages
  </span>

  <span className="flex items-center gap-1">
    <FiHardDrive  className="text-black"/>
    {r.size}
  </span>
</div> */}

                            <a
                                href={r.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-[#1e3163] text-white py-2 rounded-lg hover:opacity-80 transition"
                            >
                                <BsFilePdf className="text-lg" />
                                Download
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}