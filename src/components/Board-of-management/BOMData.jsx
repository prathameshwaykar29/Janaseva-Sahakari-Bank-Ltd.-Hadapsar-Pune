// import React from 'react';

// function BOMData() {
//   const teamMembers = [
//     {
//       name: 'Mr.Ravi Shankar Tupe',
//       role: 'Chairman of Board of Management',
//       image: 'assets/images/BOM/10.png',
//     },
//     {
//       name: 'Mr.Rajendra Gajanan Valekar',
//       role: 'Member of Board of Management',
//       image: 'assets/images/BOM/9.png',
//     },
//     {
//       name: 'Mr.Nathu Sitaram Sabale',
//       role: 'Member of Board of Management',
//       image: 'assets/images/BOM/7.png',
//     },
//     {
//       name: 'CA Mr.Nikhil Vilas Naikawadi',
//       role: 'Member of Board of Management',
//       image: 'assets/images/BOM/3.png',
//     },
//     {
//       name: 'Mrs.Megha Bhushan Prabhune',
//       role: 'Member of Board of Management',
//       image: 'assets/images/BOM/2.png',
//     },
//     {
//       name: 'Mr.Gajanan Narayan Namjoshi',
//       role: 'Member of Board of Management',
//       image: 'assets/images/BOM/1.png',
//     },
//   ];

//   return (
//     <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
//       <div className="max-w-[1200px] mx-auto">

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="group bg-white border border-[#1e3163]/10 p-8 text-center 
//                          shadow-sm rounded-lg
//                          transition-all duration-300 
//                          hover:shadow-xl hover:-translate-y-1"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-30 h-30 object-cover rounded-full mx-auto mb-3 
//                            border-4 border-[#b8963e]/30
//                            transition-all duration-300
//                            group-hover:scale-105"
//               />

//               <h3 className="text-base font-semibold text-[#1e3163] mb-2 font-serifCustom transition-colors duration-300 group-hover:text-[#f47012]">
//                 {member.name}
//               </h3>

//               <p className="text-xs uppercase tracking-widest text-[#b8963e] font-semibold mb-2">
//                 {member.role}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default BOMData;







// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { MdVerified } from 'react-icons/md';
// import { HiOfficeBuilding } from 'react-icons/hi';

// // ── Data ──────────────────────────────────────────────────────────────────────

// const teamMembers = [
//   {
//     name: 'Mr.Ravi Shankar Tupe',
//     role: 'Chairman of Board of Management',
//     image: 'assets/images/BOM/10.png',
//     experience: '25+ Years',
//     qualification: 'B.Com, MBA (Finance)',
//     expertise: ['Strategic Planning', 'Banking Operations', 'Risk Management', 'Corporate Governance'],
//     since: '2018',
//     about:
//       'Mr. Ravi Shankar Tupe has served as the Chairman of the Board of Management with distinguished leadership. His vast experience in the banking and cooperative sector has been instrumental in shaping Janaseva Sahakari Bank\'s growth and vision.',
//   },
//   {
//     name: 'Mr.Rajendra Gajanan Valekar',
//     role: 'Member of Board of Management',
//     image: 'assets/images/BOM/9.png',
//     experience: '20+ Years',
//     qualification: 'B.Com, LLB',
//     expertise: ['Legal Affairs', 'Compliance', 'Cooperative Law', 'Credit Management'],
//     since: '2019',
//     about:
//       'Mr. Rajendra Gajanan Valekar brings extensive knowledge of cooperative law and banking compliance. His contributions to the Board have strengthened the bank\'s legal and regulatory framework.',
//   },
//   {
//     name: 'Mr.Nathu Sitaram Sabale',
//     role: 'Member of Board of Management',
//     image: 'assets/images/BOM/7.png',
//     experience: '18+ Years',
//     qualification: 'B.A., Diploma in Banking',
//     expertise: ['Rural Banking', 'Deposit Management', 'Member Relations', 'Branch Expansion'],
//     since: '2020',
//     about:
//       'Mr. Nathu Sitaram Sabale has dedicated over 18 years to the cooperative banking sector. His grassroots understanding of member needs and rural banking operations has been a valuable asset to the board.',
//   },
//   {
//     name: 'CA Mr.Nikhil Vilas Naikawadi',
//     role: 'Member of Board of Management',
//     image: 'assets/images/BOM/3.png',
//     experience: '15+ Years',
//     qualification: 'CA, B.Com (Hons)',
//     expertise: ['Financial Auditing', 'Taxation', 'Investment Strategy', 'Financial Reporting'],
//     since: '2021',
//     about:
//       'CA Mr. Nikhil Vilas Naikawadi is a Chartered Accountant with deep expertise in financial auditing and banking taxation. His analytical acumen ensures sound financial governance and transparency at Janaseva Bank.',
//   },
//   {
//     name: 'Mrs.Megha Bhushan Prabhune',
//     role: 'Member of Board of Management',
//     image: 'assets/images/BOM/2.png',
//     experience: '12+ Years',
//     qualification: 'M.Com, MBA',
//     expertise: ['Women Empowerment', 'Microfinance', 'HR Management', 'CSR Initiatives'],
//     since: '2021',
//     about:
//       'Mrs. Megha Bhushan Prabhune has championed women\'s financial inclusion and microfinance initiatives. Her leadership in CSR and human resource management has brought a holistic perspective to the board\'s decision-making.',
//   },
//   {
//     name: 'Mr.Gajanan Narayan Namjoshi',
//     role: 'Member of Board of Management',
//     image: 'assets/images/BOM/1.png',
//     experience: '22+ Years',
//     qualification: 'B.E., MBA (Operations)',
//     expertise: ['IT & Digital Banking', 'Operations Management', 'Infrastructure', 'Process Improvement'],
//     since: '2019',
//     about:
//       'Mr. Gajanan Narayan Namjoshi has been a driving force behind the bank\'s digital transformation. With expertise in IT and operations management, he has modernised Janaseva Bank\'s infrastructure and customer service delivery.',
//   },
// ];

// // ── Modal ─────────────────────────────────────────────────────────────────────

// const MemberModal = ({ member, onClose }) => {
//   if (!member) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-[#1e3163]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-10"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-white rounded-md w-full max-w-2xl shadow-2xl overflow-hidden">

//         {/* Modal Header */}
//         <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] px-7 py-6 overflow-hidden">
//           <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5" />
//           <div className="absolute right-20 -bottom-8 w-24 h-24 rounded-full bg-[#f47012]/10" />

//           <div className="relative z-10 flex items-center gap-5">
//             <div className="shrink-0 w-20 h-20 rounded-md border-2 border-white/30 overflow-hidden bg-white/10">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="min-w-0 flex-1">
//               <div className="flex items-center gap-2 mb-1">
//                 <h2 className="text-white font-extrabold text-lg leading-tight truncate">
//                   {member.name}
//                 </h2>
//                 <MdVerified className="text-[#f47012] shrink-0 text-xl" />
//               </div>
//               <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">
//                 {member.role}
//               </p>
//               <div className="flex items-center gap-2 mt-2">
//                 <span className="bg-[#f47012]/20 text-[#f47012] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
//                   Since {member.since}
//                 </span>
//                 <span className="bg-white/10 text-white/80 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
//                   {member.experience} Experience
//                 </span>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-150 z-20"
//           >
//             <FaTimes size={13} />
//           </button>
//         </div>

//         {/* Modal Body */}
//         <div className="px-7 py-6 space-y-5">

//           <div>
//             <p className="text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-1.5">About</p>
//             <p className="text-sm text-slate-600 leading-relaxed">{member.about}</p>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div className="bg-[#eef8ff] rounded-xl px-4 py-3 border border-[#1e3163]/10">
//               <p className="text-[10px] font-bold text-[#1e3163]/50 uppercase tracking-widest mb-1">Qualification</p>
//               <p className="text-sm font-bold text-[#1e3163]">{member.qualification}</p>
//             </div>
//             <div className="bg-[#eef8ff] rounded-xl px-4 py-3 border border-[#1e3163]/10">
//               <p className="text-[10px] font-bold text-[#1e3163]/50 uppercase tracking-widest mb-1">Experience</p>
//               <p className="text-sm font-bold text-[#1e3163]">{member.experience}</p>
//             </div>
//           </div>

//           <div>
//             <p className="text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-2">Areas of Expertise</p>
//             <div className="flex flex-wrap gap-2">
//               {member.expertise.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1e3163]/5 text-[#1e3163] border border-[#1e3163]/15"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center justify-between pt-2 border-t border-slate-100">
//             <div className="flex items-center gap-1.5 text-[#1e3163]/50">
//               <HiOfficeBuilding size={14} />
//               <span className="text-xs font-medium">Janaseva Sahakari Bank Ltd., Hadapsar, Pune</span>
//             </div>
//             <button
//               onClick={onClose}
//               className="bg-[#1e3163] hover:bg-[#f47012] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors duration-200"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ── Main Component ─────────────────────────────────────────────────────────────

// function BOMData() {
//   const [selected, setSelected] = useState(null);

//   const handleOpen = (member) => setSelected(member);
//   const handleClose = () => setSelected(null);

//   return (
// <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
//   <div className="max-w-[1200px] mx-auto">

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {teamMembers.map((member, index) => (
//         <div
//           key={index}
//           onClick={() => handleOpen(member)}
//           className="group bg-white border border-[#1e3163]/10 p-8 text-center
//                      shadow-sm rounded-lg cursor-pointer
//                      transition-all duration-300
//                      hover:shadow-xl hover:-translate-y-1"
//         >
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-30 h-30 object-cover rounded-full mx-auto mb-3
//                        border-4 border-[#b8963e]/30
//                        transition-all duration-300
//                        group-hover:scale-105"
//           />

//           <h3 className="text-base font-semibold text-[#1e3163] mb-2 font-serifCustom transition-colors duration-300 group-hover:text-[#f47012]">
//             {member.name}
//           </h3>

//           <p className="text-xs uppercase tracking-widest text-[#b8963e] font-semibold mb-2">
//             {member.role}
//           </p>
//         </div>
//       ))}
//     </div>

//   </div>

//   {/* Popup Modal */}
//   <MemberModal member={selected} onClose={handleClose} />
// </section>
//   );
// }

// export default BOMData;






// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { MdVerified } from 'react-icons/md';
// import { HiOfficeBuilding } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import { FaTimes, FaUserTie } from 'react-icons/fa';
import { MdVerified, MdWorkHistory } from 'react-icons/md';
import { HiOfficeBuilding, HiAcademicCap } from 'react-icons/hi';
import { BsStars, BsLightningChargeFill } from 'react-icons/bs';

// ── Data ──────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: 'Mr.Ravi Shankar Tupe',
    role: 'Chairman of Board of Management',
    image: 'assets/images/BOM/10.png',
    experience: '25+ Years',
    qualification: 'B.Com, MBA (Finance)',
    expertise: ['Strategic Planning', 'Banking Operations', 'Risk Management', 'Corporate Governance'],
    since: '2018',
    about:
      "Mr. Ravi Shankar Tupe has served as the Chairman of the Board of Management with distinguished leadership. His vast experience in the banking and cooperative sector has been instrumental in shaping Janaseva Sahakari Bank's growth and vision.",
  },
  {
    name: 'Mr.Rajendra Gajanan Valekar',
    role: 'Member of Board of Management',
    image: 'assets/images/BOM/9.png',
    experience: '20+ Years',
    qualification: 'B.Com, LLB',
    expertise: ['Legal Affairs', 'Compliance', 'Cooperative Law', 'Credit Management'],
    since: '2019',
    about:
      "Mr. Rajendra Gajanan Valekar brings extensive knowledge of cooperative law and banking compliance. His contributions to the Board have strengthened the bank's legal and regulatory framework.",
  },
  {
    name: 'Mr.Nathu Sitaram Sabale',
    role: 'Member of Board of Management',
    image: 'assets/images/BOM/7.png',
    experience: '18+ Years',
    qualification: 'B.A., Diploma in Banking',
    expertise: ['Rural Banking', 'Deposit Management', 'Member Relations', 'Branch Expansion'],
    since: '2020',
    about:
      "Mr. Nathu Sitaram Sabale has dedicated over 18 years to the cooperative banking sector. His grassroots understanding of member needs and rural banking operations has been a valuable asset to the board.",
  },
  {
    name: 'CA Mr.Nikhil Vilas Naikawadi',
    role: 'Member of Board of Management',
    image: 'assets/images/BOM/3.png',
    experience: '15+ Years',
    qualification: 'CA, B.Com (Hons)',
    expertise: ['Financial Auditing', 'Taxation', 'Investment Strategy', 'Financial Reporting'],
    since: '2021',
    about:
      "CA Mr. Nikhil Vilas Naikawadi is a Chartered Accountant with deep expertise in financial auditing and banking taxation. His analytical acumen ensures sound financial governance and transparency at Janaseva Bank.",
  },
  {
    name: 'Mrs.Megha Bhushan Prabhune',
    role: 'Member of Board of Management',
    image: 'assets/images/BOM/2.png',
    experience: '12+ Years',
    qualification: 'M.Com, MBA',
    expertise: ['Women Empowerment', 'Microfinance', 'HR Management', 'CSR Initiatives'],
    since: '2021',
    about:
      "Mrs. Megha Bhushan Prabhune has championed women's financial inclusion and microfinance initiatives. Her leadership in CSR and human resource management has brought a holistic perspective to the board's decision-making.",
  },
  {
    name: 'Mr.Gajanan Narayan Namjoshi',
    role: 'Member of Board of Management',
    image: 'assets/images/BOM/1.png',
    experience: '22+ Years',
    qualification: 'B.E., MBA (Operations)',
    expertise: ['IT & Digital Banking', 'Operations Management', 'Infrastructure', 'Process Improvement'],
    since: '2019',
    about:
      "Mr. Gajanan Narayan Namjoshi has been a driving force behind the bank's digital transformation. With expertise in IT and operations management, he has modernised Janaseva Bank's infrastructure and customer service delivery.",
  },
];

// ── Modal ─────────────────────────────────────────────────────────────────────

// const MemberModal = ({ member, onClose }) => {
//   // Lock body scroll when modal is open
//   useEffect(() => {
//     if (member) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => { document.body.style.overflow = ''; };
//   }, [member]);

//   if (!member) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-[#1e3163]/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
//       onClick={handleBackdropClick}
//     >
//       {/*
//         Mobile:   slides up from bottom, full width, max-height scroll
//         Tablet:   centered card, max-w-lg
//         Desktop:  centered card, max-w-2xl
//       */}
//       <div className="bg-white w-full sm:rounded-md sm:max-w-lg md:max-w-2xl shadow-2xl overflow-hidden
//                       rounded-t-2xl max-h-[92vh] flex flex-col">

//         {/* ── Modal Header ── */}
//         <div className="relative bg-gradient-to-r from-[#1e3163] to-[#2d4a8a] px-5 sm:px-7 py-5 sm:py-6 overflow-hidden shrink-0">
//           <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5" />
//           <div className="absolute right-20 -bottom-8 w-24 h-24 rounded-full bg-[#f47012]/10" />

//           {/* Drag handle — visible only on mobile */}
//           <div className="sm:hidden w-10 h-1 bg-white/30 rounded-full mx-auto mb-4" />

//           <div className="relative z-10 flex items-center gap-3 sm:gap-5">
//             {/* Photo */}
//             <div className="shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl border-2 border-white/30 overflow-hidden bg-white/10">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Name + role */}
//             <div className="min-w-0 flex-1">
//               <div className="flex items-center gap-1.5 mb-0.5">
//                 <h2 className="text-white font-extrabold text-base sm:text-lg leading-tight line-clamp-1">
//                   {member.name}
//                 </h2>
//                 <MdVerified className="text-[#f47012] shrink-0 text-lg sm:text-xl" />
//               </div>
//               <p className="text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-widest leading-snug">
//                 {member.role}
//               </p>
//               <div className="flex items-center gap-2 mt-1.5 flex-wrap">
//                 <span className="bg-[#f47012]/20 text-[#f47012] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
//                   Since {member.since}
//                 </span>
//                 <span className="bg-white/10 text-white/80 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full">
//                   {member.experience} Experience
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-150 z-20"
//           >
//             <FaTimes size={12} />
//           </button>
//         </div>

//         {/* ── Modal Body — scrollable ── */}
//         <div className="px-5 sm:px-7 py-5 sm:py-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">

//           {/* About */}
//           <div>
//             <p className="text-[9px] sm:text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-1.5">
//               About
//             </p>
//             <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
//               {member.about}
//             </p>
//           </div>

//           {/* Info tiles */}
//           <div className="grid grid-cols-2 gap-2 sm:gap-3">
//             <div className="bg-[#eef8ff] rounded-xl px-3 sm:px-4 py-3 border border-[#1e3163]/10">
//               <p className="text-[9px] sm:text-[10px] font-bold text-[#1e3163]/50 uppercase tracking-widest mb-1">
//                 Qualification
//               </p>
//               <p className="text-xs sm:text-sm font-bold text-[#1e3163] leading-snug">
//                 {member.qualification}
//               </p>
//             </div>
//             <div className="bg-[#eef8ff] rounded-xl px-3 sm:px-4 py-3 border border-[#1e3163]/10">
//               <p className="text-[9px] sm:text-[10px] font-bold text-[#1e3163]/50 uppercase tracking-widest mb-1">
//                 Experience
//               </p>
//               <p className="text-xs sm:text-sm font-bold text-[#1e3163]">
//                 {member.experience}
//               </p>
//             </div>
//           </div>

//           {/* Expertise */}
//           <div>
//             <p className="text-[9px] sm:text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-2">
//               Areas of Expertise
//             </p>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {member.expertise.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#1e3163]/5 text-[#1e3163] border border-[#1e3163]/15"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 pt-3 border-t border-slate-100">
//             <div className="flex items-center gap-1.5 text-[#1e3163]/50">
//               <HiOfficeBuilding size={13} />
//               <span className="text-[10px] sm:text-xs font-medium leading-snug">
//                 Janaseva Sahakari Bank Ltd., Hadapsar, Pune
//               </span>
//             </div>
//             <button
//               onClick={onClose}
//               className="w-full xs:w-auto bg-[#1e3163] hover:bg-[#f47012] text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors duration-200 text-center"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




const MemberModal = ({ member, onClose }) => {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [member]);

  if (!member) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#f5f6f8]/70 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-6  lg:mt-20"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full sm:rounded-md sm:max-w-xl md:max-w-2xl shadow-2xl
                      rounded-t-3xl max-h-[95vh] sm:max-h-[88vh] flex flex-col overflow-hidden">

        {/* ══ HERO HEADER ══ */}
        <div className="relative bg-[#1e3163] shrink-0 overflow-hidden">

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-hero-pattern" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#f47012]/10 translate-y-1/2 -translate-x-1/4" />

          {/* Drag handle — mobile only */}
          {/* <div className="sm:hidden pt-3 pb-0 flex justify-center">
            <div className="w-10 h-1 bg-white/20 rounded-full" />
          </div> */}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-150"
          >
            <FaTimes size={12} />
          </button>

          {/* Profile section */}
          <div className="relative z-10 px-6 sm:px-8 pt-4 sm:pt-5 pb-6 sm:pb-8">
            <div className="flex items-end gap-5 sm:gap-6">

              {/* Photo with ring */}
              <div className="shrink-0 relative">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-md overflow-hidden border-2 border-white/30 shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verified badge */}
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#f47012] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <MdVerified className="text-white text-sm" />
                </div>
              </div>

              {/* Name + role + tags */}
              <div className="min-w-0 flex-1 pb-1">
                <p className="text-[#f47012] text-[9px] sm:text-[10px] font-bold uppercase tracking-[2px] mb-1">
                  Board of Management
                </p>
                <h2 className="text-white font-extrabold text-lg sm:text-2xl leading-tight mb-1">
                  {member.name}
                </h2>
                <p className="text-white/60 text-[10px] sm:text-xs font-medium leading-snug mb-3">
                  {member.role}
                </p>
                {/* Stat pills */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1">
                    <MdWorkHistory className="text-[#f47012] text-xs" />
                    <span className="text-white text-[10px] font-semibold">{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1">
                    <BsStars className="text-[#f47012] text-xs" />
                    <span className="text-white text-[10px] font-semibold">Since {member.since}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave divider */}
          <div className="relative h-5 sm:h-6">
            <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
              <path d="M0,24 L0,12 Q300,0 600,12 Q900,24 1200,12 L1200,24 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* ══ BODY — scrollable ══ */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-2 sm:py-6 space-y-5 sm:space-y-6">

          {/* About */}
          <div className="flex gap-2">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-[#f47012]/10 flex items-center justify-center">
              <FaUserTie className="text-[#f47012] text-sm" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#1e3163] uppercase tracking-widest mb-1.5">
                About
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {member.about}
              </p>
            </div>
          </div>

          {/* Divider */}
          {/* <div className="border-t border-dashed border-slate-100" /> */}

          {/* Qualification + Experience */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative bg-gradient-to-br from-[#eef8ff] to-white rounded-md p-3 border border-[#1e3163]/10 overflow-hidden">
              <div className="absolute top-2 right-2 opacity-10">
                <HiAcademicCap className="text-[#1e3163] text-3xl" />
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold text-[#f47012] uppercase tracking-widest mb-2">
                Qualification
              </p>
              <p className="text-xs sm:text-sm font-extrabold text-[#1e3163] leading-snug relative z-10">
                {member.qualification}
              </p>
            </div>
            <div className="relative bg-gradient-to-br from-[#fff5ee] to-white rounded-md p-3 border border-[#f47012]/15 overflow-hidden">
              <div className="absolute right-2 opacity-10">
                <MdWorkHistory className="text-[#f47012] text-3xl" />
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold text-[#f47012] uppercase tracking-widest ">
                Experience
              </p>
              <p className="text-xs sm:text-sm font-extrabold text-[#1e3163] leading-snug relative z-10">
                {member.experience}
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-[#1e3163]/10 flex items-center justify-center">
                <BsLightningChargeFill className="text-[#f47012] text-xs" />
              </div>
              <p className="text-[10px] font-bold text-[#1e3163] uppercase tracking-widest">
                Areas of Expertise
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1e3163]/5 text-[#1e3163] border border-[#1e3163]/10 hover:bg-[#1e3163] hover:text-white transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-[#f47012] inline-block" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-slate-100" />

          {/* Footer row */}
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-[#eef8ff] rounded-xl px-3 py-2 border border-[#1e3163]/10">
              <HiOfficeBuilding className="text-[#1e3163] text-sm shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#1e3163]/70 leading-snug">
                Janaseva Sahakari Bank Ltd., Hadapsar, Pune
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#1e3163] hover:bg-[#f47012] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <FaTimes size={10} />
              Close Profile
            </button>
          </div> */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 lg:hidden">
            <div className="flex items-center gap-2 bg-[#eef8ff] rounded-xl px-3 py-2 border border-[#1e3163]/10">
              <HiOfficeBuilding className="text-[#1e3163] text-sm shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#1e3163]/70 leading-snug">
                Janaseva Sahakari Bank Ltd., Hadapsar, Pune
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#1e3163] hover:bg-[#f47012] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <FaTimes size={10} />
              Close Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────

function BOMData() {
  const [selected, setSelected] = useState(null);

  const handleOpen = (member) => setSelected(member);
  const handleClose = () => setSelected(null);

  return (
    <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => handleOpen(member)}
              className="group bg-white border border-[#1e3163]/10 p-8 text-center
                         shadow-sm rounded-lg cursor-pointer
                         transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-30 h-30 object-cover rounded-full mx-auto mb-3
                           border-4 border-[#b8963e]/30
                           transition-all duration-300
                           group-hover:scale-105"
              />

              <h3 className="text-base font-semibold text-[#1e3163] mb-2 font-serifCustom transition-colors duration-300 group-hover:text-[#f47012]">
                {member.name}
              </h3>

              <p className="text-xs uppercase tracking-widest text-[#b8963e] font-semibold mb-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Popup Modal */}
      <MemberModal member={selected} onClose={handleClose} />
    </section>
  );
}

export default BOMData;