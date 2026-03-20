



// import React, { useState } from "react";

// const photos = [
//    { id: 1, src: "assets/images/Events/15.jpg", span: "col-span-2 row-span-2"},
//   { id: 2, src: "assets/images/Events/16.jpg", span: "col-span-2 row-span-1" },
//   { id: 3, src: "assets/images/Events/17.jpg", span: "col-span-2 row-span-1" },
//   { id: 4, src: "assets/images/Events/1.jpg", span: "col-span-2 row-span-1" },
//   { id: 5, src: "assets/images/Events/2.jpg", span: "col-span-1 row-span-1" },
//   { id: 6, src: "assets/images/Events/3.jpg", span: "col-span-1 row-span-1" },
//   { id: 7, src: "assets/images/Events/4.jpg", span: "col-span-1 row-span-1" },
//   { id: 8, src: "assets/images/Events/5.jpg", span: "col-span-1 row-span-1" },
//   { id: 9, src: "assets/images/Events/6.jpg", span: "col-span-2 row-span-1" },
//   { id: 10, src: "assets/images/Events/7.jpg", span: "col-span-1 row-span-1" },
//   { id: 11, src: "assets/images/Events/8.jpg", span: "col-span-1 row-span-1" },
//   { id: 12, src: "assets/images/Events/9.jpg", span: "col-span-2 row-span-1" },
//   { id: 13, src: "assets/images/Events/10.jpg", span: "col-span-1 row-span-1" },
//   { id: 14, src: "assets/images/Events/11.jpg", span: "col-span-1 row-span-1" },
//   { id: 15, src: "assets/images/Events/12.jpg", span: "col-span-1 row-span-1" },
//   { id: 16, src: "assets/images/Events/13.jpg", span: "col-span-1 row-span-1" },
//   { id: 17, src: "assets/images/Events/14.png", span: "col-span-1 row-span-1" },
 

// ];

// export default function EventPhoto() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className=" bg-gray-100 text-white">

//       {/* Gallery Grid */}
//       <div className="p-6 md:p-10 max-w-7xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px] gap-3">

//           {photos.map((photo) => (
//             <div
//               key={photo.id}
//               className={`${photo.span} relative group overflow-hidden cursor-pointer`}
//               onClick={() => setSelected(photo)}
//             >
//               <img
//                 src={photo.src}
//                 alt="event"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300"></div>
//             </div>
//           ))}

//         </div>

      
//       </div>

//       {/* Lightbox */}
//       {selected && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
//           onClick={() => setSelected(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Previous */}
//             <button
//               className="absolute -left-10 top-1/2 -translate-y-1/2 text-white text-3xl hidden md:block"
//               onClick={() =>
//                 setSelected(
//                   photos[
//                     (photos.findIndex((p) => p.id === selected.id) -
//                       1 +
//                       photos.length) %
//                       photos.length
//                   ]
//                 )
//               }
//             >
//               ←
//             </button>

//             {/* Next */}
//             <button
//               className="absolute -right-10 top-1/2 -translate-y-1/2 text-white text-3xl hidden md:block"
//               onClick={() =>
//                 setSelected(
//                   photos[
//                     (photos.findIndex((p) => p.id === selected.id) + 1) %
//                       photos.length
//                   ]
//                 )
//               }
//             >
//               →
//             </button>

//             <img
//               src={selected.src}
//               alt="event"
//               className="w-full max-h-[80vh] object-contain rounded-lg"
//             />

//             <div className="flex justify-end mt-3">
//               <button
//                 className="text-base text-white hover:text-white"
//                 onClick={() => setSelected(null)}
//               >
//                 Close ✕
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }







import React, { useState } from "react";

const photos = [
   { id: 1, src: "assets/images/Events/15.jpg", span: "col-span-2 row-span-2"},
  { id: 2, src: "assets/images/Events/16.jpg", span: "col-span-2 row-span-1" },
  { id: 3, src: "assets/images/Events/17.jpg", span: "col-span-2 row-span-1" },
  { id: 4, src: "assets/images/Events/1.jpg", span: "col-span-2 row-span-1" },
  { id: 5, src: "assets/images/Events/2.jpg", span: "col-span-1 row-span-1" },
  { id: 6, src: "assets/images/Events/3.jpg", span: "col-span-1 row-span-1" },
  { id: 7, src: "assets/images/Events/4.jpg", span: "col-span-1 row-span-1" },
  { id: 8, src: "assets/images/Events/5.jpg", span: "col-span-1 row-span-1" },
  { id: 9, src: "assets/images/Events/6.jpg", span: "col-span-2 row-span-1" },
  { id: 10, src: "assets/images/Events/7.jpg", span: "col-span-1 row-span-1" },
  { id: 11, src: "assets/images/Events/8.jpg", span: "col-span-1 row-span-1" },
  { id: 12, src: "assets/images/Events/9.jpg", span: "col-span-2 row-span-1" },
  { id: 13, src: "assets/images/Events/10.jpg", span: "col-span-1 row-span-1" },
  { id: 14, src: "assets/images/Events/11.jpg", span: "col-span-1 row-span-1" },
  { id: 15, src: "assets/images/Events/12.jpg", span: "col-span-1 row-span-1" },
  { id: 16, src: "assets/images/Events/13.jpg", span: "col-span-1 row-span-1" },
  { id: 17, src: "assets/images/Events/14.png", span: "col-span-1 row-span-1" },
 

];

export default function EventPhoto() {
const [selected, setSelected] = useState(null);

  const prev = () => {
    const i = photos.findIndex(p => p.id === selected.id);
    setSelected(photos[(i - 1 + photos.length) % photos.length]);
  };

  const next = () => {
    const i = photos.findIndex(p => p.id === selected.id);
    setSelected(photos[(i + 1) % photos.length]);
  };

  return (
    <div className="bg-gray-100">

      {/* Gallery */}
      <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
          auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[220px] gap-3">

          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative group overflow-hidden cursor-pointer
                col-span-1 row-span-1 sm:${photo.span}`}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt="event"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Desktop arrows (UNCHANGED) */}
            <button
              className="absolute -left-10 top-1/2 -translate-y-1/2 text-white text-3xl hidden md:block"
              onClick={prev}
            >
              ←
            </button>

            <button
              className="absolute -right-10 top-1/2 -translate-y-1/2 text-white text-3xl hidden md:block"
              onClick={next}
            >
              →
            </button>

            {/* Image */}
            <img
              src={selected.src}
              alt="event"
              className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
            />

            {/* MOBILE navigation (NEW) */}
            <div className="flex justify-between mt-4 md:hidden text-sm">
              <button onClick={prev}>← Prev</button>
              <button onClick={next}>Next →</button>
            </div>

            {/* Close */}
            <div className="flex justify-end mt-3">
              <button
                className="text-sm sm:text-base hover:opacity-80"
                onClick={() => setSelected(null)}
              >
                Close ✕
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}