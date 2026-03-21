import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../ImpFolder/LangContext";
import bikeImg from "../../../assets/images/Loan/hypo.png";

const translations = {
  en: {
    title: "Hypothecation Loan",
    subtitle: "for Business",
    desc: "Financial support to purchase business furniture and manage your working capital efficiently.",
    applyBtn: "Apply Now",
    calcBtn: "Calculate EMI",
    loanName: "Hypothecation Loan",
  },
  mr: {
    title: "हायपोथेकशन कर्ज",
    subtitle: "व्यवसायासाठी",
    desc: "व्यवसायासाठी फर्निचर खरेदी व कार्यकारी भांडवल व्यवस्थापनासाठी आर्थिक मदत.",
    applyBtn: "अर्ज करा",
    calcBtn: "ईएमआय मोजा",
    loanName: "Hypothecation Loan",
  },
};

const HypothecationBred = () => {
  const { lang } = useLang();
  const t = translations[lang] || translations.en;
  const loanName = t.loanName;

  const scrollToCalculator = () => {
    const section = document.getElementById("calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#ffe7d4] to-[#fef3e8] pt-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          {/* IMAGE SIDE */}
          <div className="relative flex justify-center">
            <img
              src={bikeImg}
              alt="hypothecation-loan"
              className="w-[280px] sm:w-[350px] lg:w-[550px] object-contain"
            />
          </div>

          {/* TEXT SIDE */}
          <div>
            <h1 className="text-3xl lg:text-6xl font-bold text-[#1e3163] leading-tight mb-4">
              {t.title}
              <span className="block text-[#c9a84c] text-4xl lg:text-5xl mt-1">
                {t.subtitle}
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 mb-4">

              <Link
                to="/Apply-Now"
                state={{ loanName }}
                className="bg-[#1e3163] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {t.applyBtn}
              </Link>

              <button
                onClick={scrollToCalculator}
                className="border bg-white border-[#1e3163] text-[#1e3163] px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition duration-300"
              >
                {t.calcBtn}
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HypothecationBred;