import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../ImpFolder/LangContext";
import bikeImg from "../../../assets/images/Loan/Startup.png";

const translations = {
  en: {
    title: "MSME Start-Up Finance",
    subtitle: "Grow Your Business",
    desc: "Financing for working capital, business assets, industrial plots, factory sheds, machinery, and other equipment.",
    applyBtn: "Apply Now",
    calcBtn: "Calculate EMI",
    loanName: "Janaseva Start Up (MSME) Finance",
  },
  mr: {
    title: "एमएसएमई स्टार्ट-अप वित्त",
    subtitle: "आपला व्यवसाय वाढवा",
    desc: "कार्यकारी भांडवल, व्यवसाय मालमत्ता, औद्योगिक प्लॉट, कारखाना शेड, यंत्रसामग्री आणि इतर उपकरणांसाठी कर्ज सुविधा.",
    applyBtn: "अर्ज करा",
    calcBtn: "ईएमआय मोजा",
    loanName: "Janaseva Start Up (MSME) Finance",
  },
};

const StartupBred = () => {
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
          

          {/* TEXT SIDE */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#1e3163] leading-tight mb-4">
              {t.title}
              <span className="block text-[#c9a84c] text-4xl mt-1">
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
<div className="relative flex justify-center">
            <img
              src={bikeImg}
              alt="Janaseva-Start-Up-(MSME)Finance"
              className="w-[280px] sm:w-[350px] lg:w-[450px] object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartupBred;