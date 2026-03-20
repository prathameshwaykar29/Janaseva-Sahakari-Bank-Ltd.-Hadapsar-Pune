
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import threeWheelerImg from "./../../assets/images/Ads/Machinery.png";
import commercialImg from "./../../assets/images/Ads/credit.png";
import tradePackImg from "./../../assets/images/Ads/porperty.png";

const related = [
  {
    h: "Machinery Loan",
    p: "From 10% p.a.",
    img: threeWheelerImg, // Replace with actual machinery loan image
    desc: "Quick finance for machinery.",
    accent: "bg-[#F8A163] text-[#f47012]",
    dot: "bg-[#f47012]",
    rate: "text-[#f47012]",
    border: "hover:border-[#f47012]",
    bar: "from-[#f47012] to-[#F68737]",
    link: "/Machinery-Loan",
  },
  {
    h: "Cash Credit Secured Loan",
    p: "From 11.50% p.a.",
    img: commercialImg, // Replace with actual image
    desc: "Flexible credit for businesses.",
    accent: "bg-[#3C62C3] text-[#1e3163]",
    dot: "bg-[#1e3163]",
    rate: "text-[#1e3163]",
    border: "hover:border-[#1e3163]",
    bar: "from-[#1e3163] to-[#263F7D]",
    link: "/Cash-Credit-Secured-General",
  },
  {
    h: "Property Loan Builder Finance",
    p: "From 12.50% p.a.",
    img: tradePackImg, // Replace with actual image
    desc: "Funding for construction projects.",
    accent: "bg-emerald-100 text-emerald-600",
    dot: "bg-emerald-500",
    rate: "text-emerald-600",
    border: "hover:border-emerald-400",
    bar: "from-emerald-400 to-teal-400",
    link: "/Property-Loan-Builder-Finance",
  },
];
const AdsThree = () => {
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        related.forEach((_, i) => {
            setTimeout(() => setVisible((p) => [...p, i]), 150 + i * 120);
        });
    }, []);

    return (
        <section id="Explore" className="w-full py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden flex justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                        {/* ── Section Header ── */}
                        <div className="flex items-center justify-center mb-10">
                            <div className="h-px bg-[#1e3163] flex-1 max-w-xs"></div>
        
                            <h2 className="px-6 text-3xl font-semibold text-[#000] whitespace-nowrap">
                                Explore More
                            </h2>
        
                            <div className="h-px bg-[#1e3163] flex-1 max-w-xs"></div>
                        </div>
        
                        {/* ── Cards Grid ── */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                            {related.map((r, idx) => (
                                <Link to={r.link} key={r.h}>
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
                                                <img
                                                    src={r.img}
                                                    alt={r.h}
                                                    className="w-full h-full object-cover "
                                                />
                                            )}
        
        
        
                                        </div>
        
                                        {/* Card Body */}
                                        <div className="flex flex-col flex-1 p-3 sm:p-4 lg:p-5 bg-[#eef8ff]">
        
                                            {/* Title */}
                                            <h5     className="text-base sm:text-lg lg:text-xl font-bold  mb-1 group-hover:text-[#f47012] transition-colors duration-200">
                                                {r.h}
                                            </h5>
        
                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-black font-normal mb-2 leading-relaxed">
                                                {r.desc}
                                            </p>
        
                                            {/* Rate */}
                                            <div className={`text-xl sm:text-2xl font-extrabold ${r.rate}`}>
                                                {r.p}
                                            </div>
        
                                            {/* Divider */}
                                            <div className="h-px bg-gray-200 mb-2" />
        
                                            {/* CTA row */}
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-xs text-black tracking-widest uppercase font-medium">
                                                    Learn More
                                                </span>
        
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                            ${r.accent} border-transparent
                            group-hover:translate-x-1`}>
                                                    <svg
                                                        className="w-3.5 h-3.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.5}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
        
                                        {/* Bottom sweep accent line */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${r.bar} group-hover:w-full transition-all duration-500 rounded-b-2xl`}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
        
        
                    </div>
                </section>
    );
};

export default AdsThree;