

// import React, { useState } from 'react'

// const milestones = [
//   {
//     year: "1972",
//     title: "Inaugurated Date",
//     desc: "Bank was inaugurated on 07.11.1972 at the hands of Nilubhau Limaye, the then Mayor of Pune City.",
//   },
//   {
//     year: "1982",
//     title: "Market Yard and Netaji Nagar",
//     desc: "Market Yard and Netaji Nagar Branches were opened in the year 1982. Deposits crossed a landmark figure of Rs. 1 Crore in the year 1982.",
//   },
//   {
//     year: "1992",
//     title: "Saswad Branch",
//     desc: "Saswad Branch was opened in the year 1992. Reserves crossed Rs. 1 Crore in the year 1992. The Bank was awarded as the Best Bank by Pune District Urban Bank's Association in the year 1992.",
//   },
//   {
//     year: "1997",
//     title: "Silver Jubilee",
//     desc: "Manikbaug Branch was opened in the year 1997. Deposits crossed Rs. 100 Crore in the year 1997. Profit crossed Rs. 1 Crore in the year 1997. Silver Jubilee of the Bank was celebrated in the year 1997.",
//   },
//   {
//     year: "2000",
//     title: "Shivaji Nagar-Deccan Branch",
//     desc: "Paid up capital crossed Rs. 5 Crore in the year 2002. Shivaji Nagar-Deccan branch was opened in the year 2002. In 2002 the number of branches were 18.",
//   },
//   {
//     year: "2008",
//     title: "Koregaon People's Co-operative Bank",
//     desc: "Koregaon People's Co-operative Bank was merged with our Bank on 01.01.2008. Deposits crossed Rs. 500 Crore in the year 2008. The Bank entered into an agreement with JJIT for CBS in the year 2008. Ours is only urban co-operative bank to get such merger order.",
//   },
//   {
//     year: "2009",
//     title: "Aundh & Thane Branch",
//     desc: [
//       "Two Branches viz. Aundh & Thane were opened in 2009.",
//       "On-site ATMs were installed at Manikbaug, Thane, Ramwadi & Netaji Nagar Branches in 2009.",
//       "Total Business crossed Rs. 1000 Crore in 2009.",
//       "Kothrud Branch was shifted to Bank's own premises in 2009.",
//       "The Bank received permission for opening ATMs in 2009.",
//       "The Bank introduced RTGS and NEFT schemes at all its branches in 2009."
//     ],
//   },
//   {
//     year: "2011",
//     title: "Kondhawa & Shirwal",
//     desc: [
//       "Two Branches viz. Kondhawa & Shirwal were opened in 2011.",
//       "On-site ATMs were installed at Kothrud, Shirwal, Bhosari & Shikrapur Branches in 2011.",
//       "Advances crossed Rs. 500 Crore in 2011.",
//       "Total Business crossed Rs. 1500 Crore in 2011.",
//       "Profit crossed Rs. 10 Crore in 2011.",
//       "The bank achieved zero net NPA percentage for the first time in 2011.",
//       "The Bank acquired corporate agency for bank assurance through Associate Max Life.",
//       "Mutual fund activity in collaboration with Reliance Mutual Fund also started in 2011."
//     ],
//   },
//   {
//     year: "2012",
//     title: "Reserves crossed Rs. 100 Cr.",
//     desc: [
//       "In the year 2012, on-site ATMs were installed at Satara, Mundhawa, Aundh & Chakan Branches.",
//       "Paid-up capital crossed Rs. 25 Crore in 2012.",
//       "Reserves crossed Rs. 100 Crore in 2012.",
//       "The Bank procured a spacious plot for its Head Office in 2012.",
//       "The Bank became a member of BANCS and NPCI in 2012.",
//       "The Bank received permission to open a current account with RBI in 2012.",
//       "The Bank received its IFSC code in 2012."
//     ],
//   },
//   {
//     year: "2013",
//     title: "Chakan and Nashik Branch",
//     desc: "Two Branches viz. Chakan and Nashik were opened in the year 2013. In the year 2013 on site ATM was installed at Nashik Branch. Investments Crossed Rs. 500 Crore in the year 2013.Total Business cross Rs. 2000 Crore in the year 2013.Profit crossed Rs. 20 Crore in the year 2013.",
//   },
//   {
//     year: "2015",
//     title: "crossed Rs. 2500 Cr.",
//     desc: "Total Business crossed in Rs. 2500 Crore in the year 2015.",
//   },
//   {
//     year: "2016–2017",
//     title: "crossed Rs. 3000 Cr",
//     desc: [
//       "Total business crossed Rs. 3000 Crores.",
//       "Bank registered trading profit of Rs. 19.05 Crores during financial year.",
//       "Five new ATM machines installed at branches.",
//       "IT Department secured ISO 9001:2015 and PADSS certification for ATM Switch.",
//       "Auspicious 'Bhoomi Poojan' ceremony of proposed 62000 sq.ft. Head Office building was performed on 15th August 2016 by Hon. Shri Bhayyaji Joshi, Sarkaryawah RSS."
//     ],
//   },
//   {
//     year: "2017–2018",
//     title: "CASA raised to 31%",
//     desc: [
//       "CASA has marginally raised to 31%.",
//       "Centralized Account Opening Department started.",
//       "Centralized Credit Appraisal started.",
//       "Implementation of e-com, Green PIN, VAS and Missed Call Alert.",
//       "Issuance of EMV RuPay Platinum Card started."
//     ],
//   },
//   {
//     year: "2018–2019",
//     title: "Kondhawa & Shirwal Branch",
//     desc: [
//       "Bank has crossed mixed business of Rs 3100 Cr of which deposits 2000.21 Cr and L and A of Rs. 1129.69 Cr.",
//       "Lanunched mobile banking app with endanced features.",
//       "Head office shifted to well-equipped, green building in own premises.",

//     ],
//   },
//   {
//     year: "2019–2020",
//     title: "CBS FinCore & Digital Channel",
//     desc: "Implementation of new CBS FinCore and Digital Channel Services.",
//   },
//   {
//     year: "2020–2021",
//     title: "Mobile & Internet Banking",
//     desc: [
//       "According to directives of GOI, bank has credited Ex-gratia amount of Rs 54 Lakhs in the accounts of eligible borrowers.",
//       "Organised blood donation camp at Hadapsar and Market yard amid pandemic situation of Covid-19.",
//       "Amid pandemic situation of Covid-19, launched various loan schemes with lowest interest rates.",
//       "Donated 1011 PPE kits to Hospitals.",
//       "Bank and Staff contributed to PM Care and CM Care Funds.",
//       "Launched Mobile banking with innovative features like ATM Card Control, BBPS.",
//       "Launched Internet banking view mode facility."

//     ],
//   },
// ]

// const ProfileData = () => {
//   const [activeTab, setActiveTab] = useState("history");

//   const tabs = [
//     { id: "history", label: "Our History" },
//     { id: "milestones", label: "Milestones" },
//     { id: "csr", label: "CSR" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-200 text-white py-8  md:px-8">

//       {/* Tabs */}
//       <div className="sticky top-0 z-20 bg-gray-200 backdrop-blur-sm border-b border-gray-700 mb-8">
//         <div className="max-w-5xl mx-auto flex justify-start md:justify-center gap-4 px-4 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-800">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 font-semibold uppercase text-sm tracking-wider rounded-md transition-all ${activeTab === tab.id
//                 ? "bg-[#f47012] text-white shadow-lg"
//                 : "bg-[#1e3163] text-white hover:bg-[#f47012] hover:text-white"
//                 }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="max-w-5xl mx-auto space-y-8">

//         {/* History Tab */}
//         {activeTab === "history" && (
//           <div className="space-y-6">
//             {[
//               "The period of 1970-71 was favourable for opening Urban Co-operative Banks.This was a very conducive ground for these veterans to bring their dream of establishing the bank to reality.",
//               "After various discussions among various social activists from Hadapsar (such as Hon. (Late) Shri. D.A. alias Mama Hajare, Hon. (Late) Shri. Devramji Abnave, Hon. Shri. Madhukarraoji Temgire etc.) and the then Prant Pracharak Hon.(Late) Shri. Babarao Bhide, it was decided to establish the Bank in co-operative sector.",
//               "After rigorous compliance,Reserve Bank of India, granted permission to open the Bank. The name 'Janaseva' was arrived at after considering various names such as Hadapsar Janata Bank, Janalaxmi Bank, Bhagyalaxmi Bank, etc. The Bank was formally established with the name 'Janaseva Sahakari Bank Ltd. Pune' on auspicious day of Dussera on 24th October 1972 (with initial paid up capital of Rs. 56,000/-) and later inaugurated on 7th November 1972 by the auspicious hands of the then Mayor of Pune City Shri. Nilubhau Limaye. The bank started working from, Gandhi Chowk, Hadapsar in a very small premises owned by Shri. Laxminarayan Mundada with office area of only 160 feet.",
//             ].map((text, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <p className="text-black leading-relaxed">{text}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Milestones Tab */}
//         {activeTab === "milestones" && (
//           <div className="relative">
//             <div className="space-y-8">
//               {milestones.map((m, i) => (
//                 <div key={i} className="relative flex items-start gap-4 group">
//                   {/* Year */}
//                   <div className="text-right pt-1 flex-shrink-0 w-24">
//                     <span className="text-[#f47012] font-bold text-base">{m.year}</span>
//                   </div>

//                   {/* Timeline Dot */}
//                   <div className="relative z-10 flex-shrink-0 pt-1">
//                     <div className="w-4 h-4 rounded-full bg-[#1e3163] border-2 border-white group-hover:bg-[#f47012] transition-colors" />
//                   </div>

//                   {/* Content Box */}
//                   <div className="flex-1">
//                     <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg transition-colors">
//                       <h4 className="text-[#1e3163] font-semibold text-base mb-2">{m.title}</h4>
//                       {Array.isArray(m.desc) ? (
//                         <ul className="list-disc list-inside text-black text-sm space-y-1">
//                           {m.desc.map((item, idx) => (
//                             <li key={idx}>{item}</li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <p className="text-black text-sm leading-relaxed">{m.desc}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}


//         {/* CSR Tab */}
//         {activeTab === "csr" && (
//           <div className="space-y-6">
//             {[
//               "Bank is always involved in social activities. The bank has created Member Welfare Fund. Additional amount is transferred to this fund every year. Bank provides financial aid to its members and their relatives in the event of accident or for treatment for chronic diseases.",
//               "The Bank has taken up the responsibility of meeting educational expenses of certain students at Gopal Navjeevan Kendra, hostel for students from Purvanchal, Prakash Jyot Vidyalaya, Karna Badhir Vidyalaya. Bank has also extended financial aid to Senapati Hambirrao Mohite Goshala at Wadki.",
//               "The Bank has adopted Ekhatpur village near Saswad for its overall development. The bank solved the problem of drinking water faced by the villagers, necessary arrangements were made for seepage of water in the soil. Every year sweets are distributed to the varkaris during the pious reception of Holy Palkhis of Saint Shri. Dnyaneshwar Maharaj and Shri. Tukaram Maharaj. Bank organizes free medical check up camps for its shareholders, especially for those who are senior citizens. Bank also participates Ganesha Festival and Ambedkar Jayanti activities.",
//             ].map((text, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white  rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <p className="text-black leading-relaxed">{text}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileData;


// import React, { useState, useEffect } from "react";
// import HistoryTab from "./Historytab";
// import MilestonesTab from "./Milestonestab";
// import CSRTab from "./Csrtab";

// const ProfileData = () => {
//   const [activeTab, setActiveTab] = useState("history");
//   const [isSticky, setIsSticky] = useState(false);

//   const tabs = [
//     { id: "history", label: "Our History" },
//     { id: "milestones", label: "Milestones" },
//     { id: "csr", label: "CSR" },
//   ];

//   // Sticky tab bar effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 350); // change 150px as needed
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className=" bg-gray-200 text-white pt-8 md:px-8">
//       {/* Tabs */}
//       <div
//         className={`w-full ${
//           isSticky
//             ? "lg:fixed lg:top-[80px] lg:left-0 lg:z-50"
//             : "relative"
//         }`}
//       >
//         <div className="mx-auto max-w-[1200px]">
//           <nav className="flex lg:justify-center gap-8 px-4 py-3 rounded-lg bg-gradient-to-br from-[#48527E] to-[#3151A0] shadow-xl border border-white/20 overflow-x-auto whitespace-nowrap">
//             {tabs.map((t) => (
//               <button
//                 key={t.id}
//                 onClick={() => setActiveTab(t.id)}
//                 className={`px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
//                   activeTab === t.id
//                     ? "bg-[#f47012] text-white shadow-md"
//                     : "text-white/90 hover:bg-white/10 hover:text-white"
//                 }`}
//               >
//                 {t.label}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="max-w-[1200px] mx-auto  py-10 ">
//         {activeTab === "history" && <HistoryTab />}
//         {activeTab === "milestones" && <MilestonesTab />}
//         {activeTab === "csr" && <CSRTab />}
//       </div>
//     </div>
//   );
// };

// export default ProfileData;



import React, { useState, useEffect } from "react";
import { useLang } from "../ImpFolder/LangContext";
import HistoryTab from "./Historytab";
import MilestonesTab from "./Milestonestab";
import CSRTab from "./Csrtab";

const ProfileData = () => {
  const { lang } = useLang();

  const tabLabels = {
    en: {
      history: "Our History",
      milestones: "Milestones",
      csr: "CSR",
    },
    mr: {
      history: "आमचा इतिहास",
      milestones: "महत्त्वाचे टप्पे",
      csr: "सामाजिक जबाबदारी",
    },
  };

  const [activeTab, setActiveTab] = useState("history");
  const [isSticky, setIsSticky] = useState(false);

  const tabs = [
    { id: "history", label: tabLabels[lang].history },
    { id: "milestones", label: tabLabels[lang].milestones },
    { id: "csr", label: tabLabels[lang].csr },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-200 text-white pt-8 md:px-8">
      <div
        className={`w-full ${
          isSticky ? "lg:fixed lg:top-[80px] lg:left-0 lg:z-50" : "relative"
        }`}
      >
        <div className="mx-auto max-w-[1200px]">
          <nav className="flex lg:justify-center gap-8 px-4 py-3 rounded-lg bg-gradient-to-br from-[#48527E] to-[#3151A0] shadow-xl border border-white/20 overflow-x-auto whitespace-nowrap">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-2 text-base font-medium rounded-lg transition-all ${
                  activeTab === t.id
                    ? "bg-[#f47012] text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-10">
        {activeTab === "history" && <HistoryTab />}
        {activeTab === "milestones" && <MilestonesTab />}
        {activeTab === "csr" && <CSRTab />}
      </div>
    </div>
  );
};

export default ProfileData;