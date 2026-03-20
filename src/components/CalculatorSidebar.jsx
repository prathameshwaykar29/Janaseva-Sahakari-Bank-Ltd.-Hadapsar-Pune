
// import { useState } from "react";
// import { MdCalculate } from "react-icons/md";

// const TENURES = [12, 24, 36, 48, 60];
// const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

// export default function CalculatorSidebar() {
//     const [amount, setAmount] = useState(80000);
//     const [tenure, setTenure] = useState(36);
//     const rate = 7.25;

//     const maturity = amount * Math.pow((1 + rate / (4 * 100)), (4 * tenure / 12));
//     const interest = maturity - amount;

//     return (
//         <div id="calculator" className="flex flex-col gap-4.5">

//             {/* ── EMI Calculator Card ── */}
//             <div className="bg-white rounded-md border border-[#dce3f0] overflow-hidden">
//                 {/* Header */}
//                 <div className="bg-gray-100 px-4 py-3.5 font-poppins text-base font-semibold text-black flex items-center gap-2">
//                     <MdCalculate className="text-xl" />
//                     FD Calculator
//                 </div>

//                 <div className="p-4">
//                     {/* Loan Amount */}
//                     <div className="mb-4">
//                         <label className="flex justify-between text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
//                             <span>Loan Amount</span>
//                             <strong className="text-[#48527E] text-sm normal-case tracking-normal">{fmt(amount)}</strong>
//                         </label>
//                         <input
//                             type="range" min={10000} max={50000000} step={5000}
//                             value={amount} onChange={(e) => setAmount(+e.target.value)}
//                             className="w-full h-1 rounded bg-[#dce3f0] appearance-none cursor-pointer accent-red-600"
//                         />
//                     </div>

//                     {/* Tenure */}
//                     <div className="mb-0">
//                         <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
//                             Tenure (months)
//                         </label>
//                         <div className="flex gap-1.5">
//                             {TENURES.map((t) => (
//                                 <button
//                                     key={t}
//                                     onClick={() => setTenure(t)}
//                                     className={`
//                     flex-1 py-1.5 rounded text-sm font-semibold border-[1.5px]
//                     font-poppins transition-all cursor-pointer
//                     ${tenure === t
//                                             ? "bg-[#1e3163] text-white border-[#002d72]"
//                                             : "bg-white text-gray-500 border-[#dce3f0] hover:border-blue-400"
//                                         }
//                   `}
//                                 >
//                                     {t}m
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Result box */}
//                     <div className="bg-gradient-to-br bg-blue-50 rounded-md px-4 py-3.5 my-4">
//                         <div className="text-sm text-black uppercase tracking-wide mb-2">Maturity Amount</div>
//                         <div className="font-poppins text-2xl font-bold text-[#f47012] mb-2">{fmt(maturity)}</div>
//                         <div className="text-xs text-black">@ {rate}% p.a. for {tenure} months (Quarterly Compounding)</div>
//                     </div>


//                     <div className={`grid ${amount >= 10000000 ? "grid-cols-2" : "grid-cols-3"} gap-1.5 mb-3.5`}>
//                         {[["Principal", amount], ["Interest Earned", interest], ["Maturity", maturity]].map(([lbl, val]) => (
//                             <div key={lbl} className="bg-gray-50 rounded p-2 text-center">
//                                 <div className="text-sm font-bold text-[#002d72]">{fmt(val)}</div>
//                                 <div className="text-xs text-gray-400 mt-1">{lbl}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <button className="
//             w-full py-2.5 bg-blue-50  text-black rounded
//             font-poppins text-sm font-semibold cursor-pointer transition-colors
//           ">
//                         Apply Now →
//                     </button>
//                 </div>
//             </div>


//         </div>
//     );
// }





// import { useState } from "react";
// import { MdCalculate } from "react-icons/md";

// const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

// export default function CalculatorSidebar({
//   minAmount = 10000,
//   maxAmount = 500000,
//   defaultAmount = 80000,
//   tenures = [12, 24, 36, 48],
//   rate = 7.25,
//   title = "Loan Calculator"
// }) {

//   const [amount, setAmount] = useState(defaultAmount);
//   const [tenure, setTenure] = useState(tenures[0]);

//   const maturity =
//     amount * Math.pow((1 + rate / (4 * 100)), (4 * tenure / 12));

//   const interest = maturity - amount;

//   return (
//     <div id="calculator" className="flex flex-col gap-4.5">

//       <div className="bg-white rounded-xl border border-[#dce3f0] overflow-hidden">

//         {/* Header */}
//         <div className="bg-gray-100 px-4 py-3.5 font-semibold flex items-center gap-2">
//           <MdCalculate className="text-xl" />
//           {title}
//         </div>

//         <div className="p-4">

//           {/* Amount */}
//           <div className="mb-4">
//             <label className="flex justify-between text-sm font-semibold text-gray-400 uppercase mb-2">
//               <span>Amount</span>
//               <strong className="text-[#48527E]">{fmt(amount)}</strong>
//             </label>

//             <input
//               type="range"
//               min={minAmount}
//               max={maxAmount}
//               step={5000}
//               value={amount}
//               onChange={(e) => setAmount(+e.target.value)}
//               className="w-full h-1 rounded bg-[#dce3f0] cursor-pointer accent-red-600"
//             />
//           </div>

//           {/* Tenure */}
//           <div className="mb-4">
//             <label className="block text-sm font-semibold text-gray-400 uppercase mb-3">
//               Tenure (months)
//             </label>

//             <div className="flex gap-1.5">
//               {tenures.map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setTenure(t)}
//                   className={`flex-1 py-1.5 rounded text-sm font-semibold border
//                     ${tenure === t
//                       ? "bg-[#1e3163] text-white"
//                       : "bg-white text-gray-500 border-[#dce3f0]"
//                     }`}
//                 >
//                   {t}m
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Result */}
//           <div className="bg-blue-50 rounded-md px-4 py-3.5 mb-4">
//             <div className="text-sm uppercase mb-2">Maturity Amount</div>

//             <div className="text-2xl font-bold text-[#f47012] mb-2">
//               {fmt(maturity)}
//             </div>

//             <div className="text-xs text-black">
//               {/* @ {rate}% p.a. for {tenure} months */}
//               @ {rate}% p.a.
//             </div>
//           </div>

//           {/* Summary */}
//           <div className="grid grid-cols-3 gap-2 mb-3">
//             {[["Principal", amount], ["Interest", interest], ["Total", maturity]].map(([lbl, val]) => (
//               <div key={lbl} className="bg-gray-50 rounded p-2 text-center">
//                 <div className="text-sm font-bold text-[#002d72]">
//                   {fmt(val)}
//                 </div>
//                 <div className="text-xs text-gray-400 mt-1">
//                   {lbl}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="w-full py-2.5 bg-blue-50 text-black rounded text-sm font-semibold">
//             Apply Now →
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { MdCalculate } from "react-icons/md";
import { Link } from "react-router-dom";        // ← add this
import { useLang } from "./ImpFolder/LangContext";

const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

const translations = {
  en: {
    amount: "Amount",
    tenure: "Tenure (months)",
    maturityAmount: "Maturity Amount",
    principal: "Principal",
    interest: "Interest",
    total: "Total",
    applyNow: "Apply Now →",
    months: "m",
  },
  mr: {
    amount: "रक्कम",
    tenure: "कालावधी (महिने)",
    maturityAmount: "परिपक्वता रक्कम",
    principal: "मुद्दल",
    interest: "व्याज",
    total: "एकूण",
    applyNow: "अर्ज करा →",
    months: "म",
  },
};

export default function CalculatorSidebar({
  minAmount = 10000,
  maxAmount = 500000,
  defaultAmount = 80000,
  tenures = [12, 24, 36, 48],
  rate = 7.25,
  title = "Loan Calculator",
  loanName = "General Loan",       // ← add this prop
}) {
  const [amount, setAmount] = useState(defaultAmount);
  const [tenure, setTenure] = useState(tenures[0]);
  const { lang } = useLang();
  const t = translations[lang];

  const maturity = amount * Math.pow((1 + rate / (4 * 100)), (4 * tenure / 12));
  const interest = maturity - amount;

  return (
    <div id="calculator" className="flex flex-col gap-4.5">
      <div className="bg-white rounded-xl border border-[#dce3f0] overflow-hidden">

        {/* Header */}
        <div className="bg-gray-100 px-4 py-3.5 font-semibold flex items-center gap-2">
          <MdCalculate className="text-xl" />
          {title}
        </div>

        <div className="p-4">

          {/* Amount */}
          <div className="mb-4">
            <label className="flex justify-between text-sm font-semibold text-gray-400 uppercase mb-2">
              <span>{t.amount}</span>
              <strong className="text-[#48527E]">{fmt(amount)}</strong>
            </label>
            <input
              type="range"
              min={minAmount}
              max={maxAmount}
              step={5000}
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className="w-full h-1 rounded bg-[#dce3f0] cursor-pointer accent-red-600"
            />
          </div>

          {/* Tenure */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-400 uppercase mb-3">
              {t.tenure}
            </label>
            <div className="flex gap-1.5">
              {tenures.map((ten) => (
                <button
                  key={ten}
                  onClick={() => setTenure(ten)}
                  className={`flex-1 py-1.5 rounded text-sm font-semibold border
                    ${tenure === ten
                      ? "bg-[#1e3163] text-white"
                      : "bg-white text-gray-500 border-[#dce3f0]"
                    }`}
                >
                  {ten}{t.months}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="bg-blue-50 rounded-md px-4 py-3.5 mb-4">
            <div className="text-sm uppercase mb-2">{t.maturityAmount}</div>
            <div className="text-2xl font-bold text-[#f47012] mb-2">
              {fmt(maturity)}
            </div>
            <div className="text-xs text-black">@ {rate}% p.a.</div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              [t.principal, amount],
              [t.interest, interest],
              [t.total, maturity],
            ].map(([lbl, val]) => (
              <div key={lbl} className="bg-gray-50 rounded p-2 text-center">
                <div className="text-sm font-bold text-[#002d72]">{fmt(val)}</div>
                <div className="text-xs text-gray-400 mt-1">{lbl}</div>
              </div>
            ))}
          </div>

          {/* Apply Now → navigates to apply page with loan name */}
          <Link
            to="/Apply-Now"
            state={{ loanName }}                              // ← passes loan name
            className="block w-full py-2.5 bg-[#1e3163] text-white text-center rounded text-sm font-semibold hover:bg-[#f47012] transition-colors duration-200"
          >
            {t.applyNow}
          </Link>

        </div>
      </div>
    </div>
  );
}