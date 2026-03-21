
// import React from "react";
// import bikeImg from "../../../assets/images/Loan/Udyog-Vastu-Karj-Yojana.png";

// const UdyogBred = () => {

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
//                             Janaseva Udyog Vastu Karj Yojana
//                             <span className="block text-[#c9a84c] text-4xl mt-1">
//                                 for Business
//                             </span>
//                         </h1>

//                         <p className="text-gray-600 text-lg leading-relaxed mb-4">
//                             Financial support for Shop, construction of Godown /shop/ office for business purpose.
//                         </p>
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
//                     <div className="relative flex justify-center -mb-0 lg:-mb-4">
//                         <img
//                             src={bikeImg}
//                             alt="udyog-vastu-loan"
//                             className="w-[280px] sm:w-[350px] lg:w-[480px] object-contain"
//                         />
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default UdyogBred;



import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../ImpFolder/LangContext";
import bikeImg from "../../../assets/images/Loan/Udyog-Vastu-Karj-Yojana.png";

const translations = {
  en: {
    title: "Janaseva Udyog Vastu Karj Yojana",
    subtitle: "For Business Infrastructure",
    desc: "Financial support for shop purchase, construction of godown, shop, or office for business purposes.",
    applyBtn: "Apply Now",
    calcBtn: "Calculate EMI",
    loanName: "Janaseva Udyog Vastu Karj Yojana",
  },
  mr: {
    title: "जनसेवा उद्योग वस्तू कर्ज योजना",
    subtitle: "व्यवसायासाठी पायाभूत सुविधा",
    desc: "दुकान खरेदी, गोदाम / दुकान / कार्यालय बांधकामासाठी आर्थिक मदत.",
    applyBtn: "अर्ज करा",
    calcBtn: "ईएमआय मोजा",
    loanName: "Janaseva Udyog Vastu Karj Yojana",
  },
};

const UdyogBred = () => {
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

          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center ">
            <img
              src={bikeImg}
              alt="udyog-vastu-loan"
              className="w-[280px] sm:w-[350px] lg:w-[480px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default UdyogBred;