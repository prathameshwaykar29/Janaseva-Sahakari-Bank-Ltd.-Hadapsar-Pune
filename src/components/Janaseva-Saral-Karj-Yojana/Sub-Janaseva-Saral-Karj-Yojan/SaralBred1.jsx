// import React from "react";
// import bikeImg from "../../../assets/images/Loan/Hypothecation-Loan.png";

// const SaralBred = () => {

//     const scrollToCalculator = () => {
//         const section = document.getElementById("calculator");
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#ffe7d4] to-[#fef3e8] pt-10">
//             <div className="max-w-[1200px] mx-auto px-4 lg:px-10">

//                 <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

//                     {/* LEFT SIDE */}
//                     <div>
//                         <h1 className="text-3xl lg:text-6xl font-bold text-[#1e3163] leading-tight mb-4">
//     Janaseva Saral Karj Yojana
//     <span className="block text-[#c9a84c] text-4xl">
//         Loan Against Property
//     </span>
// </h1>

// <p className="text-gray-600 text-lg leading-relaxed mb-4">
//     Quick and convenient loans against your property with simple documentation and flexible repayment options.
// </p>
//                         {/* <div className="bg-white shadow-xl rounded-lg px-4 py-3 flex flex-col sm:flex-row items-center justify-between mb-6">
//               <div>
//                 <p className="text-sm text-gray-500">Interest Rate</p>
//                 <h3 className="text-3xl font-bold text-[#1e3163]">10% – 10.50%</h3>
//               </div>

//               <div className="text-right mt-2 sm:mt-0">
//                 <p className="text-sm text-gray-500">Loan Tenure</p>
//                 <h3 className="text-xl font-semibold text-[#1e3163]">Up to 48 Months</h3>
//               </div>
//             </div> */}

//                         <div className="flex flex-wrap gap-4 mb-4">

//                             <button className="bg-[#1e3163] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
//                                 Apply Now
//                             </button>

//                             <button
//                                 onClick={scrollToCalculator}
//                                 className="border bg-white border-[#1e3163] text-[#1e3163] px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition duration-300"
//                             >
//                                 Calculate EMI
//                             </button>

//                         </div>
//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="relative flex justify-center -mb-0 lg:-mb-16">
//                         <img
//                             src={bikeImg}
//                             alt="Janaseva-Saral-Karj-Yojana"
//                             className="w-[280px] sm:w-[350px] lg:w-[550px] object-contain"
//                         />
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default SaralBred;



import React from "react";
import bikeImg from "../../../assets/images/Loan/Hypothecation-Loan.png";
import { useLang } from "../../ImpFolder/LangContext";

const translations = {
  en: {
    title: "Janaseva Saral Karj Yojana",
    subtitle: "Loan Against Property",
    desc: "Quick and convenient loans against your property with simple documentation and flexible repayment options.",
    applyBtn: "Apply Now",
    calcBtn: "Calculate EMI",
  },
  mr: {
    title: "जनसेवा सरल कर्ज योजना",
    subtitle: "मालमत्तेवर कर्ज",
    desc: "साध्या कागदपत्रांसह आणि लवचिक परतफेड पर्यायांसह आपल्या मालमत्तेवर जलद आणि सोयीस्कर कर्ज.",
    applyBtn: "अर्ज करा",
    calcBtn: "ईएमआय मोजा",
  },
};

const SaralBred = () => {
  const { lang } = useLang();
  const t = translations[lang];

  const scrollToCalculator = () => {
    const section = document.getElementById("calculator");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#ffe7d4] to-[#fef3e8] pt-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-3xl lg:text-6xl font-bold text-[#1e3163] leading-tight mb-4">
              {t.title}
              <span className="block text-[#c9a84c] text-4xl">{t.subtitle}</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">{t.desc}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="bg-[#1e3163] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                {t.applyBtn}
              </button>
              <button
                onClick={scrollToCalculator}
                className="border bg-white border-[#1e3163] text-[#1e3163] px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition duration-300"
              >
                {t.calcBtn}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center -mb-0 lg:-mb-16">
            <img
              src={bikeImg}
              alt="Janaseva-Saral-Karj-Yojana"
              className="w-[280px] sm:w-[350px] lg:w-[550px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SaralBred;