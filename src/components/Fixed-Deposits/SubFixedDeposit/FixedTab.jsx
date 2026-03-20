




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// export default function FixedTab({ tabs, activeTab, onChange }) {
//   const [isSticky, setIsSticky] = useState(false);
// const TABS = [

//   { label: "Features & Benefits" },
//   // { label: "Interest Rates" },
//   { label: "Quarterly Interest Deposits" },
//   {label : "Monthly Interest Deposits"},
//   {label : "Short Term Deposits"},
//   {label : "Cash Certificate Deposits"},
//   { label: "Documents" },

// ];
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 550);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// return (
//   <div
//     className={`
//       w-full
//       ${isSticky ? "lg:fixed lg:top-[80px] lg:left-0 lg:z-50" : "relative"}
//     `}
//   >
//     <div className="mx-auto max-w-[1220px]">
//       <nav
//         className="
//           flex lg:justify-center gap-2 px-4 py-3 rounded-lg
//           bg-gradient-to-br from-[#48527E] to-[#3151A0]
//           shadow-xl border border-white/20
//           overflow-x-auto whitespace-nowrap
//         "
//       >
//         {tabs.map((t) =>
//           t.link ? (
//             <Link
//               key={t.label}
//               to={t.link}
//               className="
//                 px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap
//                 bg-[#eef8ff] text-black shadow-md hover:opacity-90
//               "
//             >
//               {t.label}
//             </Link>
//           ) : (
//             <button
//               key={t.label}
//               onClick={() => onChange(t.label)}
//               className={`
//                 px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap
//                 transition-all duration-300
//                 ${
//                   activeTab === t.label
//                     ? "bg-[#f47012] text-white shadow-md"
//                     : "text-white/90 hover:bg-white/10 hover:text-white"
//                 }
//               `}
//             >
//               {t.label}
//             </button>
//           )
//         )}
//       </nav>
//     </div>
//   </div>
// );
// }



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FixedTab({ tabs, activeTab, onChange }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full ${isSticky ? "lg:fixed lg:top-[80px] lg:left-0 lg:z-50" : "relative"}`}>
      <div className="mx-auto max-w-[1220px]">
        <nav className="flex lg:justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-br from-[#48527E] to-[#3151A0] shadow-xl border border-white/20 overflow-x-auto whitespace-nowrap">
          {tabs.map((t) =>
            t.link ? (
              <Link
                key={t.label}
                to={t.link}
                className="px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap bg-[#eef8ff] text-black shadow-md hover:opacity-90"
              >
                {t.label}
              </Link>
            ) : (
              <button
                key={t.label}
                onClick={() => onChange(t.label)}
                className={`px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                  activeTab === t.label
                    ? "bg-[#f47012] text-white shadow-md"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            )
          )}
        </nav>
      </div>
    </div>
  );
}