



// import React from 'react';
// import { Link } from 'react-router-dom';

// function BODData() {
//   const teamMembers = [
// {
//   name: 'Dr. Rajendra Gurupadaya Hiremath',
//   role:'Hon. Chairman',
//   image: 'assets/images/BOD/5.png',
// },
// {
//   name: 'Mr. Ravi Shankar Tupe',
//   role:'Vice Chairman',
//   image: 'assets/images/BOD/10.png',
// },
// {
//   name: 'Mr.Rajendra Gajanan Valekar',
//   role:'Director',
//   image: 'assets/images/BOD/9.png',
// },
// {
//   name: 'Mr.Vinayak Anandrao Gaikwad',
//   role:'Director',
//   image: 'assets/images/BOD/15.png',
// },
// {
//   name: 'Dr.Mrs. Asha Balasaheb Bahirat',
//   role:'Director',
//   image: 'assets/images/BOD/16.png',
// },
// {
//   name: 'Adv. Mrs. Madhuri M. Patole',
//   role:'Director',
//   image: 'assets/images/BOD/3.png',
// },
// {
//   name: 'Mr.Nathu Sitaram Sabale',
//   role:'Director',
//   image: 'assets/images/BOD/7.png',
// },
// {
//   name: 'Mr. Sachin Eknath Shirude',
//   role:'Director',
//   image: 'assets/images/BOD/11.png',
// },
// {
//   name: 'Adv.Mr.Sanjay Manohar Dahibhate',
//   role:'Director',
//   image: 'assets/images/BOD/1.png',
// },
// {
//   name: 'Mr. Shirish Bhanudas Kirad',
//   role:'Director',
//   image: 'assets/images/BOD/13.png',
// },
// {
//   name: 'Mr. Sanjay Shripad Ghatpande',
//   role:'Director',
//   image: 'assets/images/BOD/12.png',
// },
// {
//   name: 'Adv.Mr. Vinod Shashikant Raskar',
//   role:'Director',
//   image: 'assets/images/BOD/2.png',
// },
// {
//   name: 'Dr. Nilesh Vinayak Abnave',
//   role:'Director',
//   image: 'assets/images/BOD/4.png',
// },
// {
//   name: 'Mr. Rajan Ratnakar Wadke',
//   role:'Director',
//   image: 'assets/images/BOD/8.png',
// },
// {
//   name: 'Mr. Nandkumar Dnyanoba Raut',
//   role:'Director',
//   image: 'assets/images/BOD/6.png',
// },
// {
//   name: 'Mr. Vidyadhar Bhalchandra Dandawate',
//   role:'Expert Dirctor',
//   image: 'assets/images/BOD/14.png',
// },
//   ];

//   return (
//     <>
//       <section className="team-grid pt-60 pb-60 bg-gray-200">
//         <div className="container">
//           <div className="row row-gutter-y-30">
//             {teamMembers.map((member, index) => (
//               <div
//                 className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
//                 data-wow-duration="1500ms"
//                 data-wow-delay={`${index * 100}ms`}
//                 key={index}
//               >
//                 <div className="team-card">
//                   <div className="team-card__image">
//                     <img src={member.image} alt={member.name} />
//                     {/* <div className="team-card__social">
//                       <Link to="#">
//                         <i className="fab fa-twitter"></i>
//                       </Link>
//                       <Link to="#">
//                         <i className="fab fa-facebook"></i>
//                       </Link>
//                       <Link to="#">
//                         <i className="fab fa-pinterest"></i>
//                       </Link>
//                       <Link to="#">
//                         <i className="fab fa-instagram"></i>
//                       </Link>
//                     </div> */}
//                   </div>
//                   <div className="team-card__content">
//                     <div className="team-card__content__inner">
//                       <h3 className="team-card__title">
//                         <Link to="/teamdetails">{member.name}</Link>
//                       </h3>
//                       <p className="team-card__designation">{member.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default BODData;









// import React from "react";

// const boardMembers = [
//   {
//     id: 1,
//     name: "Mr. Ravi Shankar Tupe",
//     designation: "Chairman of Board of Management",
//     qualification: "B.Sc (Chem)",
//     initials: "RT",
//   },
// ];

// const BODData = () => {
//   return (
//     <section className="w-full bg-[#f7f5f0] py-20 px-6 lg:px-16">
//       <div className="max-w-[1200px] mx-auto">

//         {/* ── HEADER ── */}
//         <div className="mb-14">
//           <div className="flex items-center gap-3 mb-5">
//             <div className="w-10 h-0.5 bg-[#c9a84c]" />
//             <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#8a7340]">
//               Leadership & Governance
//             </span>
//           </div>

//           <h2
//             className="text-4xl lg:text-[52px] font-black text-[#1e3163] leading-none mb-1"
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             Board of
//           </h2>
//           <h2
//             className="text-4xl lg:text-[52px] font-black italic text-[#c9a84c] leading-none"
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             Management
//           </h2>

//           <div className="mt-8 h-px bg-gradient-to-r from-[#c9a84c] via-[#1e3163]/20 to-transparent" />
//         </div>

//         {/* ── CARD ── */}
//         <div className="flex justify-center">
//           {boardMembers.map((member) => (
//             <div
//               key={member.id}
//               className="bg-white border border-[#1e3163]/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden w-full max-w-sm"
//             >
//               {/* Gold left accent on hover */}
//               <div className="absolute left-0 top-0 w-1 h-full bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Top navy strip */}
//               <div className="bg-[#1e3163] h-2 w-full" />

//               <div className="p-8 text-center">

//                 {/* Avatar */}
//                 <div className="w-20 h-20 bg-[#1e3163] flex items-center justify-center mx-auto mb-5 shadow-lg">
//                   <span
//                     className="text-2xl font-black text-white"
//                     style={{ fontFamily: "Georgia, serif" }}
//                   >
//                     {member.initials}
//                   </span>
//                 </div>

//                 {/* Name */}
//                 <h3
//                   className="text-xl font-black text-[#1e3163] leading-tight mb-2"
//                   style={{ fontFamily: "Georgia, serif" }}
//                 >
//                   {member.name}
//                 </h3>

//                 {/* Designation */}
//                 <p className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c] mb-5">
//                   {member.designation}
//                 </p>

//                 {/* Divider */}
//                 <div className="h-px bg-[#1e3163]/10 mb-5" />

//                 {/* Qualification */}
//                 <div>
//                   <p className="text-[9px] uppercase tracking-[2px] text-[#8a7340] font-semibold mb-1">
//                     Qualification
//                   </p>
//                   <p className="text-sm font-bold text-[#1e3163]">
//                     {member.qualification}
//                   </p>
//                 </div>

//               </div>

//               {/* Bottom gold strip */}
//               <div className="bg-[#c9a84c] h-1 w-full" />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BODData;





// import React from "react";

// const qualificationText = "B.Sc (Chem)"; // Same for all

// const boardMembers = [
//   {
//     id: 1,
//     name: "Dr. Rajendra Gurupadaya Hiremath",
//     designation: "Hon. Chairman",
//     image: "assets/images/BOD/5.png",
//     highlight: true,
//   },
//   {
//     id: 2,
//     name: "Mr. Ravi Shankar Tupe",
//     designation: "Vice Chairman",
//     image: "assets/images/BOD/10.png",
//   },
//   {
//     id: 3,
//     name: "Mr. Rajendra Gajanan Valekar",
//     designation: "Director",
//     image: "assets/images/BOD/9.png",
//   },
//   {
//     id: 4,
//     name: "Mr. Vinayak Anandrao Gaikwad",
//     designation: "Director",
//     image: "assets/images/BOD/15.png",
//   },
//   {
//     id: 5,
//     name: "Dr. Mrs. Asha Balasaheb Bahirat",
//     designation: "Director",
//     image: "assets/images/BOD/16.png",
//   },
//   {
//     id: 6,
//     name: "Adv. Mrs. Madhuri M. Patole",
//     designation: "Director",
//     image: "assets/images/BOD/3.png",
//   },
//   {
//     id: 7,
//     name: "Mr. Nathu Sitaram Sabale",
//     designation: "Director",
//     image: "assets/images/BOD/7.png",
//   },
//   {
//     id: 8,
//     name: "Mr. Sachin Eknath Shirude",
//     designation: "Director",
//     image: "assets/images/BOD/11.png",
//   },
//   {
//     id: 9,
//     name: "Adv. Mr. Sanjay Manohar Dahibhate",
//     designation: "Director",
//     image: "assets/images/BOD/1.png",
//   },
//   {
//     id: 10,
//     name: "Mr. Shirish Bhanudas Kirad",
//     designation: "Director",
//     image: "assets/images/BOD/13.png",
//   },
//   {
//     id: 11,
//     name: "Mr. Sanjay Shripad Ghatpande",
//     designation: "Director",
//     image: "assets/images/BOD/12.png",
//   },
//   {
//     id: 12,
//     name: "Adv. Mr. Vinod Shashikant Raskar",
//     designation: "Director",
//     image: "assets/images/BOD/2.png",
//   },
//   {
//     id: 13,
//     name: "Dr. Nilesh Vinayak Abnave",
//     designation: "Director",
//     image: "assets/images/BOD/4.png",
//   },
//   {
//     id: 14,
//     name: "Mr. Rajan Ratnakar Wadke",
//     designation: "Director",
//     image: "assets/images/BOD/8.png",
//   },
//   {
//     id: 15,
//     name: "Mr. Nandkumar Dnyanoba Raut",
//     designation: "Director",
//     image: "assets/images/BOD/6.png",
//   },
//   {
//     id: 16,
//     name: "Mr. Vidyadhar Bhalchandra Dandawate",
//     designation: "Expert Director",
//     image: "assets/images/BOD/14.png",
//   },
// ];

// const BODData = () => {
//   const chairman = boardMembers.find(m => m.highlight);
//   const others = boardMembers.filter(m => !m.highlight);

//   return (
//     <section className="w-full bg-[#f7f5f0] py-20 px-6 lg:px-16">
//       <div className="max-w-[1200px] mx-auto">

//         {/* HEADER */}


//         {/* CHAIRMAN SECTION */}
//         {chairman && (
//           <div className="flex justify-center mb-20">
//             <div className="bg-white shadow-xl border border-[#1e3163]/10 w-full max-w-md text-center p-8">

//               <img
//                 src={chairman.image}
//                 alt={chairman.name}
//                 className="w-36 h-36 object-cover mx-auto rounded-full border-4 border-[#c9a84c] mb-6"
//               />

//               <h3 className="text-2xl font-bold text-[#1e3163]">
//                 {chairman.name}
//               </h3>

//               <p className="text-sm uppercase tracking-widest text-[#c9a84c] mt-2 mb-4">
//                 {chairman.designation}
//               </p>

//               <div className="h-px bg-gray-200 my-4" />

//               <p className="text-sm font-semibold text-[#1e3163]">
//                 Qualification: {qualificationText}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* OTHER MEMBERS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {others.map(member => (
//             <div
//               key={member.id}
//               className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 object-cover mx-auto rounded-full mb-4 border-4 border-[#c9a84c]"
//               />

//               <h3 className="text-lg font-semibold text-[#1e3163]">
//                 {member.name}
//               </h3>

//               <p className="text-xs uppercase tracking-widest text-[#c9a84c] mt-2 mb-3">
//                 {member.designation}
//               </p>

//               <div className="h-px bg-gray-100 my-3" />

//               <p className="text-sm font-medium text-[#1e3163]">
//                 {qualificationText}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BODData;





import React, { useState } from "react";


const boardMembers = [
  {
    id: 1,
    name: "Dr. Rajendra Gurupadaya Hiremath",
    designation: "Hon. Chairman",
    image: "assets/images/BOD/5.png",
    highlight: true,
  },
  {
    id: 2,
    name: "Mr. Ravi Shankar Tupe",
    designation: "Vice Chairman",
    image: "assets/images/BOD/10.png",
  },
  {
    id: 3,
    name: "Mr. Rajendra Gajanan Valekar",
    designation: "Director",
    image: "assets/images/BOD/9.png",
  },
  {
    id: 4,
    name: "Mr. Vinayak Anandrao Gaikwad",
    designation: "Director",
    image: "assets/images/BOD/15.png",
  },
  {
    id: 5,
    name: "Dr. Mrs. Asha Balasaheb Bahirat",
    designation: "Director",
    image: "assets/images/BOD/16.png",
  },
  {
    id: 6,
    name: "Adv. Mrs. Madhuri M. Patole",
    designation: "Director",
    image: "assets/images/BOD/3.png",
  },
  {
    id: 7,
    name: "Mr. Nathu Sitaram Sabale",
    designation: "Director",
    image: "assets/images/BOD/7.png",
  },
  {
    id: 8,
    name: "Mr. Sachin Eknath Shirude",
    designation: "Director",
    image: "assets/images/BOD/11.png",
  },
  {
    id: 9,
    name: "Adv. Mr. Sanjay Manohar Dahibhate",
    designation: "Director",
    image: "assets/images/BOD/1.png",
  },
  {
    id: 10,
    name: "Mr. Shirish Bhanudas Kirad",
    designation: "Director",
    image: "assets/images/BOD/13.png",
  },
  {
    id: 11,
    name: "Mr. Sanjay Shripad Ghatpande",
    designation: "Director",
    image: "assets/images/BOD/12.png",
  },
  {
    id: 12,
    name: "Adv. Mr. Vinod Shashikant Raskar",
    designation: "Director",
    image: "assets/images/BOD/2.png",
  },
  {
    id: 13,
    name: "Dr. Nilesh Vinayak Abnave",
    designation: "Director",
    image: "assets/images/BOD/4.png",
  },
  {
    id: 14,
    name: "Mr. Rajan Ratnakar Wadke",
    designation: "Director",
    image: "assets/images/BOD/8.png",
  },
  {
    id: 15,
    name: "Mr. Nandkumar Dnyanoba Raut",
    designation: "Director",
    image: "assets/images/BOD/6.png",
  },
  {
    id: 16,
    name: "Mr. Vidyadhar Bhalchandra Dandawate",
    designation: "Expert Director",
    image: "assets/images/BOD/14.png",
  },
];

const BODData = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const chairman = boardMembers.find((m) => m.highlight);
  const viceChairman = boardMembers.find((m) => m.designation === "Vice Chairman");
  const directors = boardMembers.filter(
    (m) => !m.highlight && m.designation !== "Vice Chairman"
  );

  return (
    // <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
    //   <div className="max-w-[1200px] mx-auto">


    //     {/* ── CHAIRMAN & VICE CHAIRMAN ── */}
    //     <div className="grid md:grid-cols-2 gap-10 mb-20">
    //       {[chairman, viceChairman].map((member) =>
    //         member ? (
    //           <div
    //             key={member.id}
    //             className="bg-white border border-[#1e3163]/10 p-6 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
    //           >
    //             <div className="flex items-center gap-8">
    //               <img
    //                 src={member.image}
    //                 alt={member.name}
    //                 className="w-28 h-28 object-cover rounded-full border-4 border-[#c9a84c]"
    //               />

    //               <div>
    //                 <p className="text-sm uppercase tracking-widest text-[#b8963e] font-semibold mb-2">
    //                   {member.designation}
    //                 </p>
    //                 <h3
    //                   className="text-xl font-bold text-[#1e3163] leading-snug mb-2 font-serifCustom"
    //                 >
    //                   {member.name}
    //                 </h3>
    //                 {/* <p className="text-sm text-gray-500">
    //               {qualificationText}
    //             </p> */}
    //               </div>
    //             </div>
    //           </div>
    //         ) : null
    //       )}
    //     </div>

    //     {/* ── DIRECTORS TITLE ── */}
    //     {/* <div className="flex items-center mb-12">
    //       <div className="flex-1 h-px bg-[#1e3163]/10" />
    //       <p className="px-6 text-xs tracking-[3px] uppercase text-[#1e3163]/60 font-semibold">
    //         Board of Directors
    //       </p>
    //       <div className="flex-1 h-px bg-[#1e3163]/10" />
    //     </div> */}

    //     {/* ── DIRECTORS GRID ── */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
    //       {directors.map((member) => (
    //         <div
    //           key={member.id}
    //           className="bg-white border border-[#1e3163]/10 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 rounded-lg"
    //         >
    //           <img
    //             src={member.image}
    //             alt={member.name}
    //             className="w-30 h-30 object-cover rounded-full mx-auto mb-3  border-4 border-[#b8963e]/30"
    //           />

    //           <h3
    //             className="text-base font-semibold text-[#1e3163] mb-2 font-serifCustom"
    //           >
    //             {member.name}
    //           </h3>

    //           <p className="text-[10px] uppercase tracking-widest text-[#b8963e] font-semibold mb-4">
    //             {member.designation}
    //           </p>

    //           <div className="h-px bg-[#1e3163]/10 mb-2" />

    //           {/* <p className="text-sm text-gray-500">
    //         {qualificationText}
    //       </p> */}
    //         </div>
    //       ))}
    //     </div>



    //   </div>
    // </section>


    <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* ── ALL MEMBERS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[chairman, viceChairman, ...directors].map((member) =>
            member ? (
              <div
                key={member.id}
                className="group bg-white border border-[#1e3163]/10 p-8 text-center 
             shadow-sm rounded-lg
             transition-all duration-300 
             hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-30 h-30 object-cover rounded-full mx-auto mb-3 
               border-4 border-[#b8963e]/30
               transition-all duration-300
               group-hover:scale-105 
               "
                />

                <h3 className="text-base font-semibold text-[#1e3163] mb-2 font-serifCustom transition-colors duration-300 group-hover:text-[#f47012]">
                  {member.name}
                </h3>

                <p className="text-xs uppercase tracking-widest text-[#b8963e] font-semibold mb-2">
                  {member.designation}
                </p>

              </div>
            ) : null
          )}

        </div>

      </div>
    </section>
  );
};

export default BODData; 