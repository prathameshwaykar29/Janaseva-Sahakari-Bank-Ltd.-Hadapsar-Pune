// import React from 'react'
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
//       "The Bank introduced RTGS and NEFT schemes at all its branches in 2009.",
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
//       "Mutual fund activity in collaboration with Reliance Mutual Fund also started in 2011.",
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
//       "The Bank received its IFSC code in 2012.",
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
//       "Auspicious 'Bhoomi Poojan' ceremony of proposed 62000 sq.ft. Head Office building was performed on 15th August 2016 by Hon. Shri Bhayyaji Joshi, Sarkaryawah RSS.",
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
//       "Issuance of EMV RuPay Platinum Card started.",
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
//       "Launched Internet banking view mode facility.",
//     ],
//   },
// ];

// const MilestonesTab = () => {
//   return (
//     <div className="relative">
//       {/* <div className="flex flex-col gap-6 pb-6">
//         {milestones.map((m, i) => (
//           <div key={i} className="relative flex items-start gap-4 group">

//             <div className="text-right pt-1 flex-shrink-0 w-24">
//               <span className="text-[#f47012] font-bold text-base">{m.year}</span>
//             </div>

//             <div className="relative z-10 flex-shrink-0 pt-1">
//               <div className="w-4 h-4 rounded-full bg-[#1e3163] border-2 border-white group-hover:bg-[#f47012] transition-colors" />
//             </div>

//             <div className="flex-1">
//               <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg transition-colors">
//                 <h4 className="text-[#1e3163] font-semibold text-base mb-2">{m.title}</h4>
//                 {Array.isArray(m.desc) ? (
//                   <ul className="list-disc list-inside text-black text-sm space-y-1">
//                     {m.desc.map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-black text-sm leading-relaxed">{m.desc}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}




//       <div className="relative max-w-[1200px] mx-auto">
//   {/* Vertical line */}
//   <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-300"></div>

//   <div className="flex flex-col gap-8 pb-8">
//     {milestones.map((m, i) => (
//       <div key={i} className="relative flex items-start gap-4 group">
//         {/* Year */}
//         {/* <div className="flex-shrink-0 w-24 text-right">
//           <span className="bg-[#f47012] text-white px-3 py-1 rounded-full font-bold text-sm">
//             {m.year}
//           </span>
//         </div> */}
//           <div className="flex-shrink-0 min-w-[80px] text-right">
//   <span className="inline-block bg-[#f47012] text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap">
//     {m.year}
//   </span>
// </div>

//         {/* Dot */}
//         <div className="relative z-10 flex-shrink-0">
//           <div className="w-4 h-4 rounded-full bg-[#1e3163] border-2 border-white group-hover:bg-[#f47012] transition-colors" />
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
//             <h4 className="text-[#1e3163] font-semibold text-base md:text-lg mb-2">
//               {m.title}
//             </h4>
//             {Array.isArray(m.desc) ? (
//               <ul className="list-disc list-inside text-black text-sm space-y-1">
//                 {m.desc.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-black text-sm leading-relaxed">{m.desc}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>
//   );
// };

// export default MilestonesTab;










// import React from 'react'
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
//       "The Bank introduced RTGS and NEFT schemes at all its branches in 2009.",
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
//       "Mutual fund activity in collaboration with Reliance Mutual Fund also started in 2011.",
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
//       "The Bank received its IFSC code in 2012.",
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
//       "Auspicious 'Bhoomi Poojan' ceremony of proposed 62000 sq.ft. Head Office building was performed on 15th August 2016 by Hon. Shri Bhayyaji Joshi, Sarkaryawah RSS.",
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
//       "Issuance of EMV RuPay Platinum Card started.",
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
//       "Launched Internet banking view mode facility.",
//     ],
//   },
// ];

// const MilestonesTab = () => {
//   return (
//     <div className="relative max-w-[1200px] mx-auto">
//       {/* Vertical line */}
//       <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-300"></div>

//       <div className="flex flex-col gap-8 pb-8">
//         {milestones.map((m, i) => (
//           <div
//             key={i}
//             className="relative flex items-start gap-4 group transition-all duration-300 hover:scale-[1.02]"
//           >
//             {/* Year */}
//             <div className="flex-shrink-0 min-w-[90px] text-right">
//               <span className="inline-block bg-[#f47012] text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap transform transition-transform duration-300 group-hover:scale-110">
//                 {m.year}
//               </span>
//             </div>

//             {/* Dot */}
//             <div className="relative z-10 flex-shrink-0">
//               <div className="w-4 h-4 rounded-full bg-[#1e3163] border-2 border-white group-hover:bg-[#f47012] transition-colors duration-300 relative">
//                 <span className="absolute inset-0 rounded-full bg-[#f47012] opacity-30 animate-ping"></span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="flex-1">
//               <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
//                 <h4 className="text-[#1e3163] font-semibold text-base md:text-lg mb-2">
//                   {m.title}
//                 </h4>
//                 {Array.isArray(m.desc) ? (
//                   <ul className="list-disc list-inside text-black text-sm space-y-1">
//                     {m.desc.map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-black text-sm leading-relaxed">{m.desc}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

// };

// export default MilestonesTab;







import React from 'react'
import { useLang } from '../ImpFolder/LangContext' 
const milestonesTranslations = {
  en: [
    {
      year: "1972",
      title: "Inaugurated Date",
      desc: "Bank was inaugurated on 07.11.1972 at the hands of Nilubhau Limaye, the then Mayor of Pune City.",
    },
    {
      year: "1982",
      title: "Market Yard and Netaji Nagar",
      desc: "Market Yard and Netaji Nagar Branches were opened in the year 1982. Deposits crossed a landmark figure of Rs. 1 Crore in the year 1982.",
    },
    {
      year: "1992",
      title: "Saswad Branch",
      desc: "Saswad Branch was opened in the year 1992. Reserves crossed Rs. 1 Crore in the year 1992. The Bank was awarded as the Best Bank by Pune District Urban Bank's Association in the year 1992.",
    },
    {
      year: "1997",
      title: "Silver Jubilee",
      desc: "Manikbaug Branch was opened in the year 1997. Deposits crossed Rs. 100 Crore in the year 1997. Profit crossed Rs. 1 Crore in the year 1997. Silver Jubilee of the Bank was celebrated in the year 1997.",
    },
    {
      year: "2000",
      title: "Shivaji Nagar-Deccan Branch",
      desc: "Paid up capital crossed Rs. 5 Crore in the year 2002. Shivaji Nagar-Deccan branch was opened in the year 2002. In 2002 the number of branches were 18.",
    },
    {
      year: "2008",
      title: "Koregaon People's Co-operative Bank",
      desc: "Koregaon People's Co-operative Bank was merged with our Bank on 01.01.2008. Deposits crossed Rs. 500 Crore in the year 2008. The Bank entered into an agreement with JJIT for CBS in the year 2008. Ours is only urban co-operative bank to get such merger order.",
    },
    {
      year: "2009",
      title: "Aundh & Thane Branch",
      desc: [
        "Two Branches viz. Aundh & Thane were opened in 2009.",
        "On-site ATMs were installed at Manikbaug, Thane, Ramwadi & Netaji Nagar Branches in 2009.",
        "Total Business crossed Rs. 1000 Crore in 2009.",
        "Kothrud Branch was shifted to Bank's own premises in 2009.",
        "The Bank received permission for opening ATMs in 2009.",
        "The Bank introduced RTGS and NEFT schemes at all its branches in 2009.",
      ],
    },
    {
      year: "2011",
      title: "Kondhawa & Shirwal",
      desc: [
        "Two Branches viz. Kondhawa & Shirwal were opened in 2011.",
        "On-site ATMs were installed at Kothrud, Shirwal, Bhosari & Shikrapur Branches in 2011.",
        "Advances crossed Rs. 500 Crore in 2011.",
        "Total Business crossed Rs. 1500 Crore in 2011.",
        "Profit crossed Rs. 10 Crore in 2011.",
        "The bank achieved zero net NPA percentage for the first time in 2011.",
        "The Bank acquired corporate agency for bank assurance through Associate Max Life.",
        "Mutual fund activity in collaboration with Reliance Mutual Fund also started in 2011.",
      ],
    },
    {
      year: "2012",
      title: "Reserves crossed Rs. 100 Cr.",
      desc: [
        "In the year 2012, on-site ATMs were installed at Satara, Mundhawa, Aundh & Chakan Branches.",
        "Paid-up capital crossed Rs. 25 Crore in 2012.",
        "Reserves crossed Rs. 100 Crore in 2012.",
        "The Bank procured a spacious plot for its Head Office in 2012.",
        "The Bank became a member of BANCS and NPCI in 2012.",
        "The Bank received permission to open a current account with RBI in 2012.",
        "The Bank received its IFSC code in 2012.",
      ],
    },
    {
      year: "2013",
      title: "Chakan and Nashik Branch",
      desc: "Two Branches viz. Chakan and Nashik were opened in the year 2013. In the year 2013 on site ATM was installed at Nashik Branch. Investments Crossed Rs. 500 Crore in the year 2013. Total Business cross Rs. 2000 Crore in the year 2013. Profit crossed Rs. 20 Crore in the year 2013.",
    },
    {
      year: "2015",
      title: "crossed Rs. 2500 Cr.",
      desc: "Total Business crossed in Rs. 2500 Crore in the year 2015.",
    },
    {
      year: "2016–2017",
      title: "crossed Rs. 3000 Cr",
      desc: [
        "Total business crossed Rs. 3000 Crores.",
        "Bank registered trading profit of Rs. 19.05 Crores during financial year.",
        "Five new ATM machines installed at branches.",
        "IT Department secured ISO 9001:2015 and PADSS certification for ATM Switch.",
        "Auspicious 'Bhoomi Poojan' ceremony of proposed 62000 sq.ft. Head Office building was performed on 15th August 2016 by Hon. Shri Bhayyaji Joshi, Sarkaryawah RSS.",
      ],
    },
    {
      year: "2017–2018",
      title: "CASA raised to 31%",
      desc: [
        "CASA has marginally raised to 31%.",
        "Centralized Account Opening Department started.",
        "Centralized Credit Appraisal started.",
        "Implementation of e-com, Green PIN, VAS and Missed Call Alert.",
        "Issuance of EMV RuPay Platinum Card started.",
      ],
    },
    {
      year: "2018–2019",
      title: "Kondhawa & Shirwal Branch",
      desc: [
        "Bank has crossed mixed business of Rs 3100 Cr of which deposits 2000.21 Cr and L and A of Rs. 1129.69 Cr.",
        "Launched mobile banking app with enhanced features.",
        "Head office shifted to well-equipped, green building in own premises.",
      ],
    },
    {
      year: "2019–2020",
      title: "CBS FinCore & Digital Channel",
      desc: "Implementation of new CBS FinCore and Digital Channel Services.",
    },
    {
      year: "2020–2021",
      title: "Mobile & Internet Banking",
      desc: [
        "According to directives of GOI, bank has credited Ex-gratia amount of Rs 54 Lakhs in the accounts of eligible borrowers.",
        "Organised blood donation camp at Hadapsar and Market yard amid pandemic situation of Covid-19.",
        "Amid pandemic situation of Covid-19, launched various loan schemes with lowest interest rates.",
        "Donated 1011 PPE kits to Hospitals.",
        "Bank and Staff contributed to PM Care and CM Care Funds.",
        "Launched Mobile banking with innovative features like ATM Card Control, BBPS.",
        "Launched Internet banking view mode facility.",
      ],
    },
  ],

  mr: [
    {
      year: "१९७२",
      title: "उद्घाटन दिनांक",
      desc: "बँकेचे उद्घाटन ०७.११.१९७२ रोजी तत्कालीन पुणे महापौर निलुभाऊ लिमये यांच्या हस्ते झाले.",
    },
    {
      year: "१९८२",
      title: "मार्केट यार्ड आणि नेताजीनगर",
      desc: "मार्केट यार्ड आणि नेताजीनगर शाखा १९८२ साली सुरू झाल्या. ठेवी १९८२ साली रु. १ कोटींचा टप्पा ओलांडला.",
    },
    {
      year: "१९९२",
      title: "सासवड शाखा",
      desc: "सासवड शाखा १९९२ साली सुरू झाली. राखीव निधी १९९२ साली रु. १ कोटींवर गेला. पुणे जिल्हा नागरी बँक संघाने बँकेला १९९२ साली सर्वोत्कृष्ट बँक पुरस्कार दिला.",
    },
    {
      year: "१९९७",
      title: "रौप्य महोत्सव",
      desc: "माणिकबाग शाखा १९९७ साली सुरू झाली. ठेवी रु. १०० कोटींवर गेल्या. नफा रु. १ कोटींवर गेला. बँकेचा रौप्य महोत्सव १९९७ साली साजरा झाला.",
    },
    {
      year: "२०००",
      title: "शिवाजीनगर-डेक्कन शाखा",
      desc: "भरणा भांडवल २००२ साली रु. ५ कोटींवर गेले. शिवाजीनगर-डेक्कन शाखा २००२ साली सुरू झाली. २००२ मध्ये शाखांची संख्या १८ होती.",
    },
    {
      year: "२००८",
      title: "कोरेगाव पीपल्स को-ऑपरेटिव्ह बँक",
      desc: "कोरेगाव पीपल्स को-ऑपरेटिव्ह बँक ०१.०१.२००८ रोजी आमच्या बँकेत विलीन झाली. ठेवी रु. ५०० कोटींवर गेल्या. बँकेने २००८ साली CBS साठी JJIT शी करार केला. असा विलीनीकरण आदेश मिळवणारी आमची एकमेव नागरी सहकारी बँक आहे.",
    },
    {
      year: "२००९",
      title: "औंध आणि ठाणे शाखा",
      desc: [
        "२००९ साली औंध आणि ठाणे या दोन शाखा सुरू झाल्या.",
        "२००९ साली माणिकबाग, ठाणे, रामवाडी आणि नेताजीनगर शाखांमध्ये ऑन-साईट एटीएम बसवले.",
        "२००९ साली एकूण व्यवसाय रु. १००० कोटींवर गेला.",
        "२००९ साली कोथरूड शाखा बँकेच्या स्वतःच्या जागेत हलवली.",
        "२००९ साली बँकेला एटीएम सुरू करण्याची परवानगी मिळाली.",
        "२००९ साली बँकेने सर्व शाखांमध्ये RTGS आणि NEFT सेवा सुरू केल्या.",
      ],
    },
    {
      year: "२०११",
      title: "कोंढवा आणि शिरवळ",
      desc: [
        "२०११ साली कोंढवा आणि शिरवळ या दोन शाखा सुरू झाल्या.",
        "२०११ साली कोथरूड, शिरवळ, भोसरी आणि शिक्रापूर शाखांमध्ये ऑन-साईट एटीएम बसवले.",
        "२०११ साली अग्रिम रु. ५०० कोटींवर गेले.",
        "२०११ साली एकूण व्यवसाय रु. १५०० कोटींवर गेला.",
        "२०११ साली नफा रु. १० कोटींवर गेला.",
        "२०११ साली बँकेने प्रथमच शून्य निव्वळ NPA टक्केवारी साध्य केली.",
        "बँकेने असोसिएट मॅक्स लाईफद्वारे बँक अॅश्युरन्ससाठी कॉर्पोरेट एजन्सी मिळवली.",
        "२०११ साली रिलायन्स म्युच्युअल फंडाच्या सहकार्याने म्युच्युअल फंड क्रियाकलाप सुरू झाला.",
      ],
    },
    {
      year: "२०१२",
      title: "राखीव निधी रु. १०० कोटी ओलांडला",
      desc: [
        "२०१२ साली सातारा, मुंढवा, औंध आणि चाकण शाखांमध्ये ऑन-साईट एटीएम बसवले.",
        "२०१२ साली भरणा भांडवल रु. २५ कोटींवर गेले.",
        "२०१२ साली राखीव निधी रु. १०० कोटींवर गेला.",
        "२०१२ साली बँकेने मुख्यालयासाठी प्रशस्त भूखंड खरेदी केला.",
        "२०१२ साली बँक BANCS आणि NPCI चे सदस्य झाली.",
        "२०१२ साली बँकेला RBI कडे चालू खाते उघडण्याची परवानगी मिळाली.",
        "२०१२ साली बँकेला IFSC कोड मिळाला.",
      ],
    },
    {
      year: "२०१३",
      title: "चाकण आणि नाशिक शाखा",
      desc: "२०१३ साली चाकण आणि नाशिक या दोन शाखा सुरू झाल्या. २०१३ साली नाशिक शाखेत ऑन-साईट एटीएम बसवले. गुंतवणूक रु. ५०० कोटींवर गेली. एकूण व्यवसाय रु. २००० कोटींवर गेला. नफा रु. २० कोटींवर गेला.",
    },
    {
      year: "२०१५",
      title: "रु. २५०० कोटी ओलांडले",
      desc: "२०१५ साली एकूण व्यवसाय रु. २५०० कोटींवर गेला.",
    },
    {
      year: "२०१६–२०१७",
      title: "रु. ३००० कोटी ओलांडले",
      desc: [
        "एकूण व्यवसाय रु. ३००० कोटींवर गेला.",
        "बँकेने आर्थिक वर्षात रु. १९.०५ कोटींचा व्यापार नफा नोंदवला.",
        "शाखांमध्ये पाच नवीन एटीएम मशीन बसवल्या.",
        "आयटी विभागाने ATM Switch साठी ISO 9001:2015 आणि PADSS प्रमाणपत्र मिळवले.",
        "१५ ऑगस्ट २०१६ रोजी मा. श्री. भय्याजी जोशी, सरकार्यवाह RSS यांच्या हस्ते ६२००० चौ.फू. मुख्यालय इमारतीचे भूमिपूजन झाले.",
      ],
    },
    {
      year: "२०१७–२०१८",
      title: "CASA ३१% वर गेले",
      desc: [
        "CASA किंचित वाढून ३१% झाले.",
        "केंद्रीकृत खाते उघडणे विभाग सुरू झाला.",
        "केंद्रीकृत पत मूल्यांकन सुरू झाले.",
        "ई-कॉम, ग्रीन पिन, VAS आणि मिस्ड कॉल अलर्ट लागू केले.",
        "EMV RuPay प्लॅटिनम कार्ड जारी करणे सुरू झाले.",
      ],
    },
    {
      year: "२०१८–२०१९",
      title: "कोंढवा आणि शिरवळ शाखा",
      desc: [
        "बँकेने रु. ३१०० कोटींचा एकत्रित व्यवसाय ओलांडला, ज्यात ठेवी रु. २०००.२१ कोटी आणि कर्ज रु. ११२९.६९ कोटी आहे.",
        "सुधारित वैशिष्ट्यांसह मोबाईल बँकिंग अॅप लॉन्च केले.",
        "मुख्यालय स्वतःच्या सुसज्ज हरित इमारतीत हलवले.",
      ],
    },
    {
      year: "२०१९–२०२०",
      title: "CBS FinCore आणि डिजिटल चॅनेल",
      desc: "नवीन CBS FinCore आणि डिजिटल चॅनेल सेवांची अंमलबजावणी.",
    },
    {
      year: "२०२०–२०२१",
      title: "मोबाईल आणि इंटरनेट बँकिंग",
      desc: [
        "केंद्र सरकारच्या निर्देशानुसार, बँकेने पात्र कर्जदारांच्या खात्यात रु. ५४ लाखांची एक्स-ग्रेशिया रक्कम जमा केली.",
        "कोविड-१९ महामारीच्या काळात हडपसर आणि मार्केट यार्ड येथे रक्तदान शिबीर आयोजित केले.",
        "कोविड-१९ महामारीच्या काळात सर्वात कमी व्याज दरांसह विविध कर्ज योजना सुरू केल्या.",
        "रुग्णालयांना १०११ PPE किट दान केले.",
        "बँक आणि कर्मचाऱ्यांनी PM Care आणि CM Care निधीत योगदान दिले.",
        "ATM कार्ड कंट्रोल, BBPS सारख्या नाविन्यपूर्ण वैशिष्ट्यांसह मोबाईल बँकिंग सुरू केले.",
        "इंटरनेट बँकिंग व्ह्यू मोड सुविधा सुरू केली.",
      ],
    },
  ],
}

const MilestonesTab = () => {
  const { lang } = useLang()
  const milestones = milestonesTranslations[lang]

  return (
    <div className="relative max-w-[1200px] mx-auto">
      {/* Vertical line */}
      <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-300"></div>

      <div className="flex flex-col gap-8 pb-8">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="relative flex items-start gap-4 group transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Year */}
            <div className="flex-shrink-0 min-w-[90px] text-right">
              <span className="inline-block bg-[#f47012] text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap transform transition-transform duration-300 group-hover:scale-110">
                {m.year}
              </span>
            </div>

            {/* Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-4 h-4 rounded-full bg-[#1e3163] border-2 border-white group-hover:bg-[#f47012] transition-colors duration-300 relative">
                <span className="absolute inset-0 rounded-full bg-[#f47012] opacity-30 animate-ping"></span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
                <h4 className="text-[#1e3163] font-semibold text-base md:text-lg mb-2">
                  {m.title}
                </h4>
                {Array.isArray(m.desc) ? (
                  <ul className="list-disc list-inside text-black text-sm space-y-1">
                    {m.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-black text-sm leading-relaxed">{m.desc}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MilestonesTab