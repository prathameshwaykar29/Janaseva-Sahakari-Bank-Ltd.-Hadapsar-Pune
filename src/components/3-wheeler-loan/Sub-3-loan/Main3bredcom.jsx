import React from "react";
import bikeImg from "../../../assets/images/Loan/3-wheeler-loan1.png";
import { useLang } from "../../ImpFolder/LangContext";
import { Link } from "react-router-dom";
const Main3bredcom = () => {

  const translations = {
  en: {
    title: "Finance Your Vehicle with",
    subtitle: "Loan Against Property",
    desc: "Get quick financing for your 3-wheeler vehicle with affordable interest rates and flexible repayment options.",
    applyBtn: "Apply Now",
    calcBtn: "Calculate EMI",
  },
  mr: {
    title: "आपल्या वाहनासाठी ३-चाकी ",
    subtitle: "कर्जाद्वारे वित्तपुरवठा करा",
    desc: "तुमच्या तीनचाकी वाहनासाठी परवडणाऱ्या व्याजदरांनी आणि लवचिक परतफेडीच्या पर्यायांसह त्वरित वित्तपुरवठा मिळवा.",
    applyBtn: "अर्ज करा",
    calcBtn: "ईएमआय मोजा",
  },
};
  const scrollToCalculator = () => {
    const section = document.getElementById("calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
const { lang } = useLang();
const t = translations[lang];
  return (
    <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#ffe7d4] to-[#fef3e8] pt-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1e3163] leading-tight mb-4">
              {t.title}
              <span className="block text-[#c9a84c] text-5xl">
                {t.subtitle}
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 mb-4">

              <Link
                to="/Apply-Now"
                state={{ loanName: "3-Wheeler Loan" }}    // ← pass loan name
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
          <div className="relative flex justify-center -mb-0 lg:-mb-5">
            <img
              src={bikeImg}
              alt="3 Wheeler Loan"
              className="w-[280px] sm:w-[350px] lg:w-[450px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Main3bredcom;






// import React from "react";
// import { Link } from "react-router-dom";        
// import bikeImg from "../../../assets/images/Loan/3-wheeler-loan1.png";
// import { useLang } from "../../ImpFolder/LangContext";

// const translations = {
//   en: {
//     title: "Finance Your Vehicle with",
//     subtitle: "Loan Against Property",
//     desc: "Get quick financing for your 3-wheeler vehicle with affordable interest rates and flexible repayment options.",
//     applyBtn: "Apply Now",
//     calcBtn: "Calculate EMI",
//   },
//   mr: {
//     title: "आपल्या वाहनासाठी ३-चाकी ",
//     subtitle: "कर्जाद्वारे वित्तपुरवठा करा",
//     desc: "तुमच्या तीनचाकी वाहनासाठी परवडणाऱ्या व्याजदरांनी आणि लवचिक परतफेडीच्या पर्यायांसह त्वरित वित्तपुरवठा मिळवा.",
//     applyBtn: "अर्ज करा",
//     calcBtn: "ईएमआय मोजा",
//   },
// };

// const Main3bredcom = () => {
//   const { lang } = useLang();
//   const t = translations[lang];

//   const scrollToCalculator = () => {
//     const section = document.getElementById("calculator");
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#ffe7d4] to-[#fef3e8] pt-10">
//       <div className="max-w-[1200px] mx-auto px-4 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

//           {/* LEFT SIDE */}
//           <div>
//             <h1 className="text-3xl lg:text-6xl font-bold text-[#1e3163] leading-tight mb-4">
//               {t.title}
//               <span className="block text-[#c9a84c] text-4xl">{t.subtitle}</span>
//             </h1>
//             <p className="text-gray-600 text-lg leading-relaxed mb-4">{t.desc}</p>
//             <div className="flex flex-wrap gap-4 mb-4">

//               {/* Apply Now → goes to apply page with loan name in URL state */}
//               <Link
//                 to="/Apply-Now"
//                 state={{ loanName: "Janaseva Saral Karj Yojana" }}    // ← pass loan name
//                 className="bg-[#1e3163] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
//               >
//                 {t.applyBtn}
//               </Link>

//               <button
//                 onClick={scrollToCalculator}
//                 className="border bg-white border-[#1e3163] text-[#1e3163] px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition duration-300"
//               >
//                 {t.calcBtn}
//               </button>

//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative flex justify-center -mb-0 lg:-mb-16">
//             <img
//               src={bikeImg}
//               alt="Janaseva-Saral-Karj-Yojana"
//               className="w-[280px] sm:w-[350px] lg:w-[550px] object-contain"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main3bredcom;    