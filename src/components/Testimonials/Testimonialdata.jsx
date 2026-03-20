



// import React, { useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Rajaram Jagtap",
//     address: " Hadapsar, Pune",

//     avatar: "SR",
//     rating: 5,
//     text: "My experience with Janaseva Bank , Pune has been very accommodative. When I need to transfer funds and pay bills it can be done at my convenience. It has been a positive experience with personable banking service in a timely manner. My time has been limited so banking must be fast and effective. I was given cooperation with opening my own personal savings accounts, fixed deposit accounts, business accounts, that I am responsible for. I have been a long-term customer of the Bank. My plan would be to stay as a customer and grow financially. A big Thank You from your customer that appreciates the hard work in maintaining excellent customer service and good bank products. When asked by others where is the best bank in town, I send them to Janaseva Bank. Thanks once again.",
//     accent: "#C9A96E",
//   },
//   {
//     id: 2,
//     name: "Shweta Deshmukh",

//     avatar: "ML",
//     rating: 5,
//     text: "The bank staff has always been so good to explain everything to us and bring us up to date on changes. We have enjoyed the good service we get from the bank employees. They are always very friendly and courteous.",
//     accent: "#7B9EA8",
//   },
//   {
//     id: 3,
//     name: "S.S. Deshpande",

//     avatar: "AO",
//     rating: 5,
//     text: "Everyone at Janaseva Bank have been friendly and helpful. I have had business with the Branch Manager the most. He has given me some good advice about ownership on my FDs and setting up two savings accounts of me & my family. When another bank messed up my daughter's fixed deposit account, the Manager was able to help and to get part of the issues solved. We both very much appreciated that. Most of all I feel like he knows me when I walk in, knows my name and we have developed a good personal/business relationship, I think that is what I most appreciate",
//     accent: "#A8887B",
//   },
//   {
//     id: 4,
//     name: "Dasharath Jadhav",
//     address: " Hadapsar, Pune",

//     avatar: "TB",
//     rating: 5,
//     text: "We came to Janaseva Bank one Saturday to withdraw our savings account so we could consolidate all of our accounts at another bank. However, after talking to the staff on counter, we decided instead to consolidate our accounts at another bank, let us continue for some more time. She was very helpful in finding the right type of savings accounts for our needs, and in helping us always. Later on, she emailed us about changing our savings account to a higher yielding recurring deposit account. She followed up with us to ensure everything was ok with it. It is unusual to have a banker who takes such a personal interest in meeting a customers' needs. Now, we have decided to continue with Janaseva Bank as they are truely doing the  Janaseva.",
//     accent: "#8B9E7B",
//   },
//   {
//     id:5,
//     name :"S.R. Shinde",
//     address: " Hadapsar, Pune",
//     avatar:"SR",
//     rating:4.5,
//     text:"The Janaseva bank was very helpful in trying to get our house financed for renovation. The branch Manager and his team were very good about answering any questions we had in a timely manner.",
//     accent: "#8B9E7B",
//   }
// ];

// const StarIcon = ({ filled }) => (
//   <svg
//     className={`w-4 h-4 ${filled ? "text-amber-400" : "text-stone-300"}`}
//     fill="currentColor"
//     viewBox="0 0 20 20"
//   >
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );

// const QuoteIcon = ({ color }) => (
//   <svg
//     width="48"
//     height="36"
//     viewBox="0 0 48 36"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={{ color }}
//     className="opacity-20"
//   >
//     <path
//       d="M0 36V22.08C0 9.6 7.68 2.4 23.04 0L24.96 3.84C17.76 5.76 13.92 9.6 13.44 15.36H21.12V36H0ZM26.88 36V22.08C26.88 9.6 34.56 2.4 49.92 0L51.84 3.84C44.64 5.76 40.8 9.6 40.32 15.36H48V36H26.88Z"
//       fill="currentColor"
//     />
//   </svg>
// );

// const Testimonialdata = () => {
//   const [active, setActive] = useState(0);
//   const current = testimonials[active];

//   return (
//     <section
//       className="min-h-screen bg-stone-950 py-24 px-6 relative overflow-hidden"
//       style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
//     >
//       {/* Decorative background grid */}
//       <div
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage:
//             "linear-gradient(#d4c5b0 1px, transparent 1px), linear-gradient(90deg, #d4c5b0 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Decorative orb */}
//       <div
//         className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
//         style={{ background: current.accent, transition: "background 0.6s ease" }}
//       />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-20 flex items-end justify-between border-b border-stone-800 pb-8">
//           <div>
//             <p
//               className="text-xs tracking-[0.3em] uppercase mb-3"
//               style={{ color: current.accent, transition: "color 0.4s ease", fontFamily: "'Helvetica Neue', sans-serif" }}
//             >
//               Client Voices
//             </p>
//             <h2
//               className="text-5xl md:text-6xl font-normal text-stone-100 leading-none"
//               style={{ letterSpacing: "-0.02em" }}
//             >
//               What people
//               <br />
//               <em className="text-stone-400">are saying</em>
//             </h2>
//           </div>
//           <div
//             className="hidden md:flex items-center gap-2 text-stone-500 text-sm"
//             style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
//           >
//             <span
//               className="font-semibold"
//               style={{ color: current.accent, transition: "color 0.4s ease" }}
//             >
//               {String(active + 1).padStart(2, "0")}
//             </span>
//             <span>/</span>
//             <span>{String(testimonials.length).padStart(2, "0")}</span>
//           </div>
//         </div>

//         {/* Main testimonial */}
//         <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
//           {/* Large quote */}
//           <div className="md:col-span-8">
//             <div className="mb-8">
//               <QuoteIcon color={current.accent} />
//             </div>
//             <blockquote
//               key={active}
//               className="text-2xl md:text-3xl text-stone-200 leading-relaxed font-normal mb-10"
//               style={{
//                 letterSpacing: "-0.01em",
//                 animation: "fadeUp 0.5s ease forwards",
//               }}
//             >
//               "{current.text}"
//             </blockquote>
//             <div className="flex items-center gap-1 mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <StarIcon key={i} filled={i < current.rating} />
//               ))}
//             </div>
//             <div className="flex items-center gap-4">
//               {/* Avatar */}
//               <div
//                 className="w-12 h-12 rounded-full flex items-center justify-center text-stone-900 font-bold text-sm flex-shrink-0"
//                 style={{
//                   background: current.accent,
//                   transition: "background 0.4s ease",
//                   fontFamily: "'Helvetica Neue', sans-serif",
//                 }}
//               >
//                 {current.avatar}
//               </div>
//               <div>
//                 <p
//                   className="text-stone-100 font-semibold text-base"
//                   style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
//                 >
//                   {current.name}
//                 </p>
//                 <p
//                   className="text-stone-500 text-sm"
//                   style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
//                 >
//                   {current.role},{" "}
//                   <span style={{ color: current.accent, transition: "color 0.4s" }}>
//                     {current.company}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Side panel — all testimonials listed */}
//           <div className="md:col-span-4 flex flex-col gap-3">
//             {testimonials.map((t, i) => (
//               <button
//                 key={t.id}
//                 onClick={() => setActive(i)}
//                 className={`text-left p-4 rounded-lg border transition-all duration-300 group ${
//                   i === active
//                     ? "border-stone-600 bg-stone-900"
//                     : "border-stone-800 bg-transparent hover:bg-stone-900/50"
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <div
//                     className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300"
//                     style={{
//                       background: i === active ? t.accent : "#292524",
//                       color: i === active ? "#1c1917" : "#78716c",
//                       fontFamily: "'Helvetica Neue', sans-serif",
//                     }}
//                   >
//                     {t.avatar}
//                   </div>
//                   <div>
//                     <p
//                       className={`text-sm font-medium transition-colors duration-300 ${
//                         i === active ? "text-stone-100" : "text-stone-500"
//                       }`}
//                       style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
//                     >
//                       {t.name}
//                     </p>
//                     <p
//                       className="text-xs text-stone-600"
//                       style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
//                     >
//                       {t.company}
//                     </p>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Navigation dots */}
//         <div className="flex items-center gap-3">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className="h-px transition-all duration-500"
//               style={{
//                 width: i === active ? "48px" : "24px",
//                 background: i === active ? current.accent : "#44403c",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonialdata;




// import React, { useState } from "react";

// const testimonials = [
//     {
//         id: 1,
//         name: "Rajaram Jagtap",
//         address: "Hadapsar, Pune",
//         avatar: "RJ",
//         rating: 5,
//         text: "My experience with Janaseva Bank , Pune has been very accommodative. When I need to transfer funds and pay bills it can be done at my convenience. It has been a positive experience with personable banking service in a timely manner. My time has been limited so banking must be fast and effective. I was given cooperation with opening my own personal savings accounts, fixed deposit accounts, business accounts, that I am responsible for. I have been a long-term customer of the Bank. My plan would be to stay as a customer and grow financially. A big Thank You from your customer that appreciates the hard work in maintaining excellent customer service and good bank products. When asked by others where is the best bank in town, I send them to Janaseva Bank. Thanks once again.",
//         accent: "bg-yellow-600",
//     },
//     {
//         id: 2,
//         name: "Shweta Deshmukh",
//         address: "Pune",
//         avatar: "SD",
//         rating: 5,
//         text: "The bank staff has always been so good to explain everything to us and bring us up to date on changes. We have enjoyed the good service we get from the bank employees. They are always very friendly and courteous.",
//         accent: "bg-teal-600",
//     },
//     {
//         id: 3,
//         name: "S.S. Deshpande",
//         address: "Pune",
//         avatar: "SS",
//         rating: 5,
//         text: "Everyone at Janaseva Bank have been friendly and helpful. I have had business with the Branch Manager the most. He has given me some good advice about ownership on my FDs and setting up two savings accounts of me & my family. When another bank messed up my daughter's fixed deposit account, the Manager was able to help and to get part of the issues solved. We both very much appreciated that. Most of all I feel like he knows me when I walk in, knows my name and we have developed a good personal/business relationship, I think that is what I most appreciate",
//         accent: "bg-red-700",
//     },
//     {
//         id: 4,
//         name: "Dasharath Jadhav",
//         address: "Hadapsar, Pune",
//         avatar: "DJ",
//         rating: 5,
//         text: "We came to Janaseva Bank one Saturday to withdraw our savings account so we could consolidate all of our accounts at another bank. However, after talking to the staff on counter, we decided instead to consolidate our accounts at another bank, let us continue for some more time. She was very helpful in finding the right type of savings accounts for our needs, and in helping us always. Later on, she emailed us about changing our savings account to a higher yielding recurring deposit account. She followed up with us to ensure everything was ok with it. It is unusual to have a banker who takes such a personal interest in meeting a customers' needs. Now, we have decided to continue with Janaseva Bank as they are truely doing the Janaseva.",
//         accent: "bg-green-700",
//     },
//     {
//         id: 5,
//         name: "S.R. Shinde",
//         address: "Hadapsar, Pune",
//         avatar: "SR",
//         rating: 4.5,
//         text: "The Janaseva bank was very helpful in trying to get our house financed for renovation. The branch Manager and his team were very good about answering any questions we had in a timely manner.",
//         accent: "bg-indigo-700",
//     },
// ];

// const StarIcon = ({ filled }) => (
//     <svg
//         className={`w-4 h-4 ${filled ? "text-yellow-500" : "text-gray-300"}`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//     >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     </svg>
// );

// const RenderStars = ({ rating }) =>
//     [...Array(5)].map((_, i) => (
//         <StarIcon key={i} filled={i < Math.floor(rating)} />
//     ));

// const Testimonialdata = () => {
//     const [active, setActive] = useState(0);
//     const current = testimonials[active];

//     return (
//         <section className="min-h-screen py-20 px-6 bg-[#faf7f2]">

//             <div className="max-w-6xl mx-auto">

//                 {/* Header */}
//                 <div className="mb-16 flex items-end justify-between pb-8 border-b border-[#D6C9B6]">
//                     <div>
//                         <h2 className="text-4xl md:text-5xl font-normal leading-tight text-[#2C2416]">
//                             What our members
//                             <br />
//                             <em className="text-[#7A6A55]">are saying</em>
//                         </h2>
//                     </div>

//                     <div className="hidden md:flex items-center gap-2 text-sm text-[#9E8E78]">
//                         <span className="font-bold text-base">
//                             {String(active + 1).padStart(2, "0")}
//                         </span>
//                         <span>/</span>
//                         <span>{String(testimonials.length).padStart(2, "0")}</span>
//                     </div>
//                 </div>

//                 {/* Main Grid */}
//                 <div className="grid md:grid-cols-12 gap-10 items-start mb-12">

//                     {/* Main Testimonial */}
//                     <div className="md:col-span-8">

//                         <blockquote
//                             key={active}
//                             className="text-lg text-[#3A2E22] leading-relaxed mb-8 animate-fadeUp"
//                         >
//                             "{current.text}"
//                         </blockquote>

//                         {/* Stars */}
//                         <div className="flex items-center gap-1 mb-6">
//                             <RenderStars rating={current.rating} />
//                             <span className="ml-2 text-sm text-[#9E8E78]">
//                                 {current.rating}/5
//                             </span>
//                         </div>

//                         {/* Author */}
//                         <div className="flex items-center gap-4">

//                             <div
//                                 className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white ${current.accent}`}
//                             >
//                                 {current.avatar}
//                             </div>

//                             <div>
//                                 <p className="font-semibold text-[#2C2416]">
//                                     {current.name}
//                                 </p>

//                                 <p className="text-sm text-[#9E8E78]">
//                                     {current.address}
//                                 </p>
//                             </div>

//                         </div>
//                     </div>

//                     {/* Side Testimonials */}
//                     <div className="md:col-span-4 flex flex-col gap-3">

//                         {testimonials.map((t, i) => (
//                             <button
//                                 key={t.id}
//                                 onClick={() => setActive(i)}
//                                 className={`text-left p-4 rounded-xl transition-all border 
//                 ${i === active
//                                         ? "bg-white border-gray-400 shadow-md"
//                                         : "bg-white/40 border-gray-300 hover:bg-white"
//                                     }`}
//                             >

//                                 <div className="flex items-center gap-3">

//                                     <div
//                                         className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white ${t.accent}`}
//                                     >
//                                         {t.avatar}
//                                     </div>

//                                     <div>
//                                         <p className="text-sm font-semibold text-[#2C2416]">
//                                             {t.name}
//                                         </p>

//                                         <p className="text-xs text-[#B0A090]">
//                                             {t.address}
//                                         </p>
//                                     </div>

//                                 </div>

//                             </button>
//                         ))}

//                     </div>
//                 </div>

//                 {/* Progress */}
//                 <div className="flex items-center gap-3">

//                     {testimonials.map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setActive(i)}
//                             className={`h-[6px] rounded-full transition-all duration-500 ${i === active
//                                 ? "w-[40px] bg-gray-700"
//                                 : "w-[10px] bg-[#D6C9B6]"
//                                 }`}
//                         />
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Testimonialdata;





import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Rajaram Jagtap",
        address: "Hadapsar, Pune",
        avatar: "RJ",
        rating: 5,
        text: "My experience with Janaseva Bank , Pune has been very accommodative. When I need to transfer funds and pay bills it can be done at my convenience. It has been a positive experience with personable banking service in a timely manner. My time has been limited so banking must be fast and effective. I was given cooperation with opening my own personal savings accounts, fixed deposit accounts, business accounts, that I am responsible for. I have been a long-term customer of the Bank. My plan would be to stay as a customer and grow financially. A big Thank You from your customer that appreciates the hard work in maintaining excellent customer service and good bank products. When asked by others where is the best bank in town, I send them to Janaseva Bank. Thanks once again.",
        accent: "bg-yellow-600",
    },
    {
        id: 2,
        name: "Shweta Deshmukh",
        address: "Pune",
        avatar: "SD",
        rating: 5,
        text: "The bank staff has always been so good to explain everything to us and bring us up to date on changes. We have enjoyed the good service we get from the bank employees. They are always very friendly and courteous.",
        accent: "bg-teal-600",
    },
    {
        id: 3,
        name: "S.S. Deshpande",
        address: "Pune",
        avatar: "SS",
        rating: 5,
        text: "Everyone at Janaseva Bank have been friendly and helpful. I have had business with the Branch Manager the most. He has given me some good advice about ownership on my FDs and setting up two savings accounts of me & my family. When another bank messed up my daughter's fixed deposit account, the Manager was able to help and to get part of the issues solved. We both very much appreciated that. Most of all I feel like he knows me when I walk in, knows my name and we have developed a good personal/business relationship, I think that is what I most appreciate",
        accent: "bg-red-700",
    },
    {
        id: 4,
        name: "Dasharath Jadhav",
        address: "Hadapsar, Pune",
        avatar: "DJ",
        rating: 5,
        text: "We came to Janaseva Bank one Saturday to withdraw our savings account so we could consolidate all of our accounts at another bank. However, after talking to the staff on counter, we decided instead to consolidate our accounts at another bank, let us continue for some more time. She was very helpful in finding the right type of savings accounts for our needs, and in helping us always. Later on, she emailed us about changing our savings account to a higher yielding recurring deposit account. She followed up with us to ensure everything was ok with it. It is unusual to have a banker who takes such a personal interest in meeting a customers' needs. Now, we have decided to continue with Janaseva Bank as they are truely doing the Janaseva.",
        accent: "bg-green-700",
    },
    {
        id: 5,
        name: "S.R. Shinde",
        address: "Hadapsar, Pune",
        avatar: "SR",
        rating: 4.5,
        text: "The Janaseva bank was very helpful in trying to get our house financed for renovation. The branch Manager and his team were very good about answering any questions we had in a timely manner.",
        accent: "bg-indigo-700",
    },
];

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-500" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonialdata = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section className="py-14 bg-gray-100">

      <div className="max-w-5xl mx-auto text-center">
        {/* Card */}
        <div className="relative bg-white shadow-xl rounded-lg p-10">

          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < current.rating} />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            "{current.text}"
          </p>

          {/* User */}
          <div className="flex items-center justify-center gap-4">

            <div className="w-12 h-12 rounded-full bg-[#1e3163] text-white flex items-center justify-center font-bold">
              {current.avatar}
            </div>

            <div className="text-left">
              <p className="font-semibold text-gray-800">
                {current.name}
              </p>
              <p className="text-sm text-gray-500">
                {current.address}
              </p>
            </div>

          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[#1e3163]"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonialdata;