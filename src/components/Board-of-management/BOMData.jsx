

// import React from 'react';
// import { Link } from 'react-router-dom';

// function BOMData() {
//   const teamMembers = [
//     {
//       name: 'Mr.Ravi Shankar Tupe',
//       role:'Chairman of Board of Management ',
//       image: 'assets/images/BOM/10.png',
//     },


//     {
//       name: 'Mr.Rajendra Gajanan Valekar',
//       role:'Member of Board of Management ',
//       image: 'assets/images/BOM/9.png',
//     },
//     {
//       name: 'Mr.Nathu Sitaram Sabale',
//       role:'Member of Board of Management',
//       image: 'assets/images/BOM/7.png',
//     },
//     {
//       name: 'CA Mr.Nikhil Vilas Naikawadi',
//       role:'Member of Board of Management',
//       image: 'assets/images/BOM/3.png',
//     },
//     {
//       name: 'Mrs.Megha Bhushan Prabhune',
//       role:'Member of Board of Management',
//       image: 'assets/images/BOM/2.png',
//     },
//     {
//       name: 'Mr.Gajanan Narayan Namjoshi',
//       role:'Member of Board of Management',
//       image: 'assets/images/BOM/1.png',
//     },
//   ];

//   return (
//     <>
//       <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
//       <div className="max-w-[1200px] mx-auto">

//         {/* ── ALL MEMBERS GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {[chairman, viceChairman, ...directors].map((member) =>
//             member ? (
//               <div
//                 key={member.id}
//                 className="group bg-white border border-[#1e3163]/10 p-8 text-center 
//              shadow-sm rounded-lg
//              transition-all duration-300 
//              hover:shadow-xl hover:-translate-y-1"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-30 h-30 object-cover rounded-full mx-auto mb-3 
//                border-4 border-[#b8963e]/30
//                transition-all duration-300
//                group-hover:scale-105 
//                "
//                 />

//                 <h3 className="text-base font-semibold text-[#1e3163] mb-2 font-serifCustom transition-colors duration-300 group-hover:text-[#f47012]">
//                   {member.name}
//                 </h3>

//                 <p className="text-xs uppercase tracking-widest text-[#b8963e] font-semibold mb-2">
//                   {member.designation}
//                 </p>

//               </div>
//             ) : null
//           )}

//         </div>

//       </div>
//     </section>
//     </>
//   );
// }

// export default BOMData;














import React from 'react';

function BOMData() {
  const teamMembers = [
    {
      name: 'Mr.Ravi Shankar Tupe',
      role: 'Chairman of Board of Management',
      image: 'assets/images/BOM/10.png',
    },
    {
      name: 'Mr.Rajendra Gajanan Valekar',
      role: 'Member of Board of Management',
      image: 'assets/images/BOM/9.png',
    },
    {
      name: 'Mr.Nathu Sitaram Sabale',
      role: 'Member of Board of Management',
      image: 'assets/images/BOM/7.png',
    },
    {
      name: 'CA Mr.Nikhil Vilas Naikawadi',
      role: 'Member of Board of Management',
      image: 'assets/images/BOM/3.png',
    },
    {
      name: 'Mrs.Megha Bhushan Prabhune',
      role: 'Member of Board of Management',
      image: 'assets/images/BOM/2.png',
    },
    {
      name: 'Mr.Gajanan Narayan Namjoshi',
      role: 'Member of Board of Management',
      image: 'assets/images/BOM/1.png',
    },
  ];

  return (
    <section className="w-full bg-[#f8f6f1] py-14 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {teamMembers.map((member, index) => (
            <div
              key={index}
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
    </section>
  );
}

export default BOMData;