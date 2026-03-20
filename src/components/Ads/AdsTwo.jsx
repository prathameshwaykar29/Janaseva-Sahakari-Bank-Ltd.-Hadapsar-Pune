// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import threeWheelerImg from "./../../assets/images/Ads/3-wheeler-loan1.png";
// import commercialImg from "./../../assets/images/Ads/Commercial.png";
// import tradePackImg from "./../../assets/images/Ads/trade.png";

// const related = [
//     {
//         h: "3 Wheeler Loan",
//         p: "From 10% p.a.",
//         img: threeWheelerImg,
//         desc: "Get your 3-wheeler with easy EMIs and fast approval.",
//         accent: "bg-[#F8A163] text-[#f47012]",
//         dot: "bg-[#f47012]",
//         rate: "text-[#f47012]",
//         border: "hover:border-[#f47012]",
//         bar: "from-[#f47012] to-[#F68737]",
//         link: "/3-wheeler-loan",
//     },
//     {
//         h: "Commercial Vehicle Loan",
//         p: "From 10% p.a.",
//         img: commercialImg,
//         desc: "Easy finance for commercial vehicles.",
//         accent: "bg-[#3C62C3] text-[#1e3163]",
//         dot: "bg-[#1e3163]",
//         rate: "text-[#1e3163]",
//         border: "hover:border-[#1e3163]",
//         bar: "from-[#1e3163] to-[#263F7D]",
//         link: "/New-commercial-vehicle",
//     },
//     {
//         h: "Trade Pack Loan",
//         p: "From 10.00% p.a.",
//         img: tradePackImg,
//         desc: "Quick funds for traders and businesses.",
//         accent: "bg-emerald-100 text-emerald-600",
//         dot: "bg-emerald-500",
//         rate: "text-emerald-600",
//         border: "hover:border-emerald-400",
//         bar: "from-emerald-400 to-teal-400",
//         link: "/trade-pack-loan",
//     },
// ];

// const AdsTwo = () => {
//     const [visible, setVisible] = useState([]);

//     useEffect(() => {
//         related.forEach((_, i) => {
//             setTimeout(() => setVisible((p) => [...p, i]), 150 + i * 120);
//         });
//     }, []);

//     return (
//         <section id="Explore" className="w-full py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden flex justify-center">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//                         {/* ── Section Header ── */}
//                         <div className="flex items-center justify-center mb-10">
//                             <div className="h-px bg-[#1e3163] flex-1 max-w-xs"></div>
        
//                             <h2 className="px-6 text-3xl font-semibold text-[#000] whitespace-nowrap">
//                                 Explore More
//                             </h2>
        
//                             <div className="h-px bg-[#1e3163] flex-1 max-w-xs"></div>
//                         </div>
        
//                         {/* ── Cards Grid ── */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
//                             {related.map((r, idx) => (
//                                 <Link to={r.link} key={r.h}>
//                                     <div
//                                         style={{ transitionDelay: `${idx * 80}ms` }}
//                                         className={[
//                                             "group relative flex flex-col rounded-lg overflow-hidden cursor-pointer",
//                                             "bg-gray-100 border border-gray-100",
//                                             r.border,
//                                             "shadow-md hover:shadow-2xl hover:-translate-y-2",
//                                             "transition-all duration-500 ease-out",
//                                         ].join(" ")}
//                                     >
//                                         {/* Image */}
//                                         <div className="relative h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px]">
//                                             {r.img && (
//                                                 <img
//                                                     src={r.img}
//                                                     alt={r.h}
//                                                     className="w-full h-full object-cover "
//                                                 />
//                                             )}
        
        
        
//                                         </div>
        
//                                         {/* Card Body */}
//                                         <div className="flex flex-col flex-1 p-3 sm:p-4 lg:p-5 bg-[#eef8ff]">
        
//                                             {/* Title */}
//                                             <h5     className="text-base sm:text-lg lg:text-xl font-bold  mb-1 group-hover:text-[#f47012] transition-colors duration-200">
//                                                 {r.h}
//                                             </h5>
        
//                                             {/* Description */}
//                                             <p className="text-xs sm:text-sm text-black font-normal mb-2 leading-relaxed">
//                                                 {r.desc}
//                                             </p>
        
//                                             {/* Rate */}
//                                             <div className={`text-xl sm:text-2xl font-extrabold ${r.rate}`}>
//                                                 {r.p}
//                                             </div>
        
//                                             {/* Divider */}
//                                             <div className="h-px bg-gray-200 mb-2" />
        
//                                             {/* CTA row */}
//                                             <div className="flex items-center justify-between mt-auto">
//                                                 <span className="text-xs text-black tracking-widest uppercase font-medium">
//                                                     Learn More
//                                                 </span>
        
//                                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
//                             ${r.accent} border-transparent
//                             group-hover:translate-x-1`}>
//                                                     <svg
//                                                         className="w-3.5 h-3.5"
//                                                         fill="none"
//                                                         viewBox="0 0 24 24"
//                                                         stroke="currentColor"
//                                                         strokeWidth={2.5}
//                                                     >
//                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         </div>
        
//                                         {/* Bottom sweep accent line */}
//                                         <div
//                                             className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${r.bar} group-hover:w-full transition-all duration-500 rounded-b-2xl`}
//                                         />
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
        
        
//                     </div>
//                 </section>
//     );
// };

// export default AdsTwo;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../ImpFolder/LangContext";

import threeWheelerImg from "./../../assets/images/Ads/3-wheeler-loan1.png";
import commercialImg from "./../../assets/images/Ads/Commercial.png";
import tradePackImg from "./../../assets/images/Ads/trade.png";

const translations = {
  en: {
    heading: "Explore More",
    learnMore: "Learn More",
    cards: [
      { h: "3 Wheeler Loan", p: "From 10% p.a.", desc: "Get your 3-wheeler with easy EMIs and fast approval." },
      { h: "Commercial Vehicle Loan", p: "From 10% p.a.", desc: "Easy finance for commercial vehicles." },
      { h: "Trade Pack Loan", p: "From 10.00% p.a.", desc: "Quick funds for traders and businesses." },
    ],
  },
  mr: {
    heading: "आणखी पाहा",
    learnMore: "अधिक जाणून घ्या",
    cards: [
      { h: "३ चाकी कर्ज", p: "१०% प्रतिवर्षापासून", desc: "सोप्या ईएमआय आणि जलद मंजुरीसह आपले ३ चाकी वाहन घ्या." },
      { h: "व्यावसायिक वाहन कर्ज", p: "१०% प्रतिवर्षापासून", desc: "व्यावसायिक वाहनांसाठी सोपा वित्तपुरवठा." },
      { h: "ट्रेड पॅक कर्ज", p: "१०.००% प्रतिवर्षापासून", desc: "व्यापारी आणि व्यवसायांसाठी त्वरित निधी." },
    ],
  },
}

const relatedStatic = [
  { img: threeWheelerImg, accent: "bg-[#F8A163] text-[#f47012]", rate: "text-[#f47012]", border: "hover:border-[#f47012]", bar: "from-[#f47012] to-[#F68737]", link: "/3-wheeler-loan" },
  { img: commercialImg, accent: "bg-[#3C62C3] text-[#1e3163]", rate: "text-[#1e3163]", border: "hover:border-[#1e3163]", bar: "from-[#1e3163] to-[#263F7D]", link: "/New-commercial-vehicle" },
  { img: tradePackImg, accent: "bg-emerald-100 text-emerald-600", rate: "text-emerald-600", border: "hover:border-emerald-400", bar: "from-emerald-400 to-teal-400", link: "/trade-pack-loan" },
]

const AdsTwo = () => {
  const [visible, setVisible] = useState([])
  const { lang } = useLang()
  const tr = translations[lang]

  useEffect(() => {
    relatedStatic.forEach((_, i) => {
      setTimeout(() => setVisible((p) => [...p, i]), 150 + i * 120)
    })
  }, [])

  return (
    <section id="Explore" className="w-full py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-[#1e3163] flex-1 max-w-xs"></div>
          <h2 className="px-6 text-3xl font-semibold text-[#000] whitespace-nowrap">
            {tr.heading}
          </h2>
          <div className="h-px bg-[#1e3163] flex-1 max-w-xs"></div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {relatedStatic.map((r, idx) => {
            const card = tr.cards[idx]
            return (
              <Link to={r.link} key={idx}>
                <div
                  style={{ transitionDelay: `${idx * 80}ms` }}
                  className={[
                    "group relative flex flex-col rounded-lg overflow-hidden cursor-pointer",
                    "bg-gray-100 border border-gray-100",
                    r.border,
                    "shadow-md hover:shadow-2xl hover:-translate-y-2",
                    "transition-all duration-500 ease-out",
                  ].join(" ")}
                >
                  {/* Image */}
                  <div className="relative h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px]">
                    {r.img && (
                      <img src={r.img} alt={card.h} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col flex-1 p-3 sm:p-4 lg:p-5 bg-[#eef8ff]">

                    <h5 className="text-base sm:text-lg lg:text-xl font-bold mb-1 group-hover:text-[#f47012] transition-colors duration-200">
                      {card.h}
                    </h5>

                    <p className="text-xs sm:text-sm text-black font-normal mb-2 leading-relaxed">
                      {card.desc}
                    </p>

                    <div className={`text-xl sm:text-2xl font-extrabold ${r.rate}`}>
                      {card.p}
                    </div>

                    <div className="h-px bg-gray-200 mb-2" />

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-black tracking-widest uppercase font-medium">
                        {tr.learnMore}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${r.accent} border-transparent group-hover:translate-x-1`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom sweep accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${r.bar} group-hover:w-full transition-all duration-500 rounded-b-2xl`} />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AdsTwo