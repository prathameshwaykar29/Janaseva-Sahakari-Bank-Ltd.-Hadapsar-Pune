// import React, { useState, useMemo } from 'react'

// const branchData = [
//   {
//     id: 1,
//     name: "SHANIPAR",
//     district: "Pune",
//     address: "UTTAM MOTI 1051 SADASHIV PETH PUNE-411030",
//     phones: ["(020) 24491735", "(020) 24491431", "8805025702"],
//     email: "snp@janasevabankpune.in",
//   },
//   {
//     id: 2,
//     name: "MARKETYARD",
//     district: "Pune",
//     address: "PLOT NO-365/66, GULKEKDI, MARKETYARD PUNE",
//     phones: ["(020) 24260392", "(020) 24264192", "8805025703"],
//     email: "mkt@janasevabankpune.in",
//   },
//   {
//     id: 3,
//     name: "NETAJINAGAR",
//     district: "Pune",
//     address: "WANWADI PARMAR PARK WANWADI PUNE-411040",
//     phones: ["24262865", "9146003305", "8805025704"],
//     email: "nng@janasevabankpune.in",
//   },
//   {
//     id: 4,
//     name: "RAMWADI",
//     district: "Pune",
//     address: "DEEPAK PARK, KALYANI NAGAR, NAGAR RD, RAMWADI",
//     phones: ["(020) 26680735", "(020) 26686562", "8805025705"],
//     email: "rmw@janasevabankpune.in",
//   },
//   {
//     id: 5,
//     name: "SASWAD",
//     district: "Pune",
//     address: "LANDGE BLDG, MAIN RD, SASWAD, TAL PURANDAR DIS PUNE-412301",
//     phones: ["(02115) 222630", "8805025706"],
//     email: "swd@janasevabankpune.in",
//   },
//   {
//     id: 6,
//     name: "SHIKRAPUR",
//     district: "Pune",
//     address: "S.T STAND, SHIKRAPUR TAL SHIRUR DIS PUNE-412208",
//     phones: ["8805025707", "8554055770"],
//     email: "shk@janasevabankpune.in",
//   },
//   {
//     id: 7,
//     name: "DHANKAWADI",
//     district: "Pune",
//     address: "S.NO-19/A, KUMAR TRED CENTER, SATARA RD DHANKAWADI, PUNE-411043",
//     phones: ["(020) 24373859", "(020) 24361622", "8805025708"],
//     email: "dhn@janasevabankpune.in",
//   },
// ]

// const districts = ["Pune", "Satara", "Thane"]

// const PhoneIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//   </svg>
// )

// const MailIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//     <polyline points="22,6 12,13 2,6" />
//   </svg>
// )

// const MapPinIcon = ({ className = "w-4 h-4" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// )

// const SearchIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="11" cy="11" r="8" />
//     <line x1="21" y1="21" x2="16.65" y2="16.65" />
//   </svg>
// )

// const ChevronIcon = ({ open }) => (
//   <svg
//     className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
//     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//   >
//     <polyline points="6 9 12 15 18 9" />
//   </svg>
// )

// const BranchCard = ({ branch, isSelected, onClick }) => (
//   <div
//     onClick={onClick}
//     className={`rounded-md p-4 cursor-pointer border-2 transition-all duration-200 select-none
//       ${isSelected
//         ? 'bg-blue-900 border-yellow-400 shadow-lg -translate-y-0.5'
//         : 'bg-white border-slate-100 hover:border-blue-300 hover:shadow-md'
//       }`}
//   >
//     <div className="flex items-center justify-between mb-1.5">
//       <span className={`font-bold text-sm tracking-wide ${isSelected ? 'text-yellow-400' : 'text-blue-900'}`}>
//         {branch.name}
//       </span>
//       <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full
//         ${isSelected ? 'bg-yellow-400/20 text-yellow-300' : 'bg-blue-50 text-blue-600'}`}>
//         {branch.district}
//       </span>
//     </div>
//     <div className={`flex items-start gap-1.5 text-xs leading-relaxed
//       ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}>
//       <span className="mt-0.5 shrink-0"><MapPinIcon /></span>
//       <span>{branch.address}</span>
//     </div>
//   </div>
// )

// const Locator = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState('')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [selectedBranch, setSelectedBranch] = useState(null)
//   const [districtOpen, setDistrictOpen] = useState(false)

//   const filteredBranches = useMemo(() => {
//     return branchData.filter(b => {
//       const matchDistrict = selectedDistrict ? b.district === selectedDistrict : true
//       const matchSearch = searchQuery
//         ? b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           b.address.toLowerCase().includes(searchQuery.toLowerCase())
//         : true
//       return matchDistrict && matchSearch
//     })
//   }, [selectedDistrict, searchQuery])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50">

//       {/* Header */}
//       <header className="bg-gradient-to-r from-blue-950 to-blue-900 px-6 py-4 flex items-center gap-4 shadow-lg">
//         <div className="w-11 h-11 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-blue-950 font-extrabold text-xl shadow-md shrink-0">
//           J
//         </div>
//         <div>
//           <p className="text-white font-bold text-lg tracking-wide leading-none">Jana Seva Bank</p>
//           <p className="text-blue-300 text-xs uppercase tracking-widest mt-0.5">Branch Locator</p>
//         </div>
//       </header>

//       {/* Content */}
//       <div className="max-w-5xl mx-auto p-5 grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6">

//         {/* Left: Filter + List */}
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">

//           {/* Panel Header */}
//           <div className="bg-gradient-to-r from-blue-900 to-blue-950 px-5 py-3.5 flex items-center justify-between">
//             <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase">Find a Branch</span>
//             <span className="bg-yellow-400/20 text-yellow-300 text-xs font-bold px-2.5 py-0.5 rounded-full">
//               {filteredBranches.length}
//             </span>
//           </div>

//           <div className="p-4 space-y-3">
//             {/* Search */}
//             <div className="relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
//                 <SearchIcon />
//               </span>
//               <input
//                 type="text"
//                 placeholder="Search branch or address..."
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 className="w-full bg-slate-50 border border-slate-200 rounded-md pl-9 pr-4 py-2.5 text-sm text-blue-900 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
//               />
//             </div>

//             {/* District Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setDistrictOpen(o => !o)}
//                 className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 text-sm flex items-center justify-between text-blue-900 hover:border-blue-300 transition focus:outline-none focus:ring-2 focus:ring-blue-100"
//               >
//                 <span className={selectedDistrict ? 'text-blue-900 font-medium' : 'text-slate-400'}>
//                   {selectedDistrict || 'Select District'}
//                 </span>
//                 <ChevronIcon open={districtOpen} />
//               </button>

//               {districtOpen && (
//                 <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-md shadow-lg z-50 overflow-hidden">
//                   <div
//                     onClick={() => { setSelectedDistrict(''); setDistrictOpen(false) }}
//                     className={`px-4 py-2.5 text-sm cursor-pointer transition-colors
//                       ${selectedDistrict === '' ? 'bg-blue-900 text-yellow-400 font-semibold' : 'text-blue-900 hover:bg-blue-50'}`}
//                   >
//                     All Districts
//                   </div>
//                   {districts.map(d => (
//                     <div
//                       key={d}
//                       onClick={() => { setSelectedDistrict(d); setDistrictOpen(false) }}
//                       className={`px-4 py-2.5 text-sm cursor-pointer transition-colors
//                         ${selectedDistrict === d ? 'bg-blue-900 text-yellow-400 font-semibold' : 'text-blue-900 hover:bg-blue-50'}`}
//                     >
//                       {d}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Branch Cards */}
//           <div className="px-4 pb-4 flex flex-col gap-2.5 overflow-y-auto max-h-96">
//             {filteredBranches.length === 0 ? (
//               <p className="text-center py-10 text-slate-400 text-sm">No branches found</p>
//             ) : (
//               filteredBranches.map(b => (
//                 <BranchCard
//                   key={b.id}
//                   branch={b}
//                   isSelected={selectedBranch?.id === b.id}
//                   onClick={() => setSelectedBranch(b)}
//                 />
//               ))
//             )}
//           </div>
//         </div>

//         {/* Right: Detail */}
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col">
//           {!selectedBranch ? (
//             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-16 text-center">
//               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-200">
//                 <MapPinIcon className="w-10 h-10" />
//               </div>
//               <div>
//                 <p className="text-blue-900 font-semibold text-base">Select a Branch</p>
//                 <p className="text-slate-400 text-sm mt-1">Click any branch card to view its full details</p>
//               </div>
//             </div>
//           ) : (
//             <div className="p-7">
//               {/* Badge */}
//               <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
//                 Branch Details
//               </span>

//               {/* Name & District */}
//               <h2 className="text-3xl font-extrabold text-blue-950 leading-tight">{selectedBranch.name}</h2>
//               <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mt-1 mb-5">
//                 {selectedBranch.district} District
//               </p>

//               {/* Divider */}
//               <div className="h-px bg-gradient-to-r from-yellow-300/50 to-transparent mb-6 rounded-full" />

//               {/* Address Row */}
//               <div className="flex items-start gap-3 mb-5">
//                 <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
//                   <MapPinIcon />
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">Address</p>
//                   <p className="text-sm text-blue-900 leading-relaxed">{selectedBranch.address}</p>
//                 </div>
//               </div>

//               {/* Phones Row */}
//               <div className="flex items-start gap-3 mb-5">
//                 <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
//                   <PhoneIcon />
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-2">Phone Numbers</p>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedBranch.phones.map((p, i) => (
//                       <span key={i} className="bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
//                         {p}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Email Row */}
//               <div className="flex items-start gap-3">
//                 <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
//                   <MailIcon />
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">Email</p>
//                   <a
//                     href={`mailto:${selectedBranch.email}`}
//                     className="text-sm text-blue-600 hover:text-yellow-500 underline underline-offset-2 transition-colors"
//                   >
//                     {selectedBranch.email}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Locator




// import React, { useState, useMemo, useEffect, useRef } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'

// // Fix Leaflet default icons
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// })

// const goldIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
// })
// const blueIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
// })

// const branchData = [
//   { id: 1, name: 'SHANIPAR', district: 'Pune', address: 'UTTAM MOTI 1051 SADASHIV PETH PUNE-411030', phones: ['(020) 24491735', '(020) 24491431', '8805025702'], email: 'snp@janasevabankpune.in', lat: 18.5134, lng: 73.8476 },
//   { id: 2, name: 'MARKETYARD', district: 'Pune', address: 'PLOT NO-365/66, GULKEKDI, MARKETYARD PUNE', phones: ['(020) 24260392', '(020) 24264192', '8805025703'], email: 'mkt@janasevabankpune.in', lat: 18.5018, lng: 73.8601 },
//   { id: 3, name: 'NETAJINAGAR', district: 'Pune', address: 'WANWADI PARMAR PARK WANWADI PUNE-411040', phones: ['24262865', '9146003305', '8805025704'], email: 'nng@janasevabankpune.in', lat: 18.4945, lng: 73.8891 },
//   { id: 4, name: 'RAMWADI', district: 'Pune', address: 'DEEPAK PARK, KALYANI NAGAR, NAGAR RD, RAMWADI', phones: ['(020) 26680735', '(020) 26686562', '8805025705'], email: 'rmw@janasevabankpune.in', lat: 18.5461, lng: 73.9052 },
//   { id: 5, name: 'SASWAD', district: 'Pune', address: 'LANDGE BLDG, MAIN RD, SASWAD, TAL PURANDAR DIS PUNE-412301', phones: ['(02115) 222630', '8805025706'], email: 'swd@janasevabankpune.in', lat: 18.3507, lng: 74.0174 },
//   { id: 6, name: 'SHIKRAPUR', district: 'Pune', address: 'S.T STAND, SHIKRAPUR TAL SHIRUR DIS PUNE-412208', phones: ['8805025707', '8554055770'], email: 'shk@janasevabankpune.in', lat: 18.6962, lng: 74.1257 },
//   { id: 7, name: 'DHANKAWADI', district: 'Pune', address: 'S.NO-19/A, KUMAR TRED CENTER, SATARA RD DHANKAWADI, PUNE-411043', phones: ['(020) 24373859', '(020) 24361622', '8805025708'], email: 'dhn@janasevabankpune.in', lat: 18.4629, lng: 73.8614 },
// ]

// const DEFAULT_CENTER = [18.5204, 73.8567]
// const DEFAULT_ZOOM = 11
// const DISTRICTS = ['Pune', 'Satara', 'Thane']

// const MapController = ({ branch }) => {
//   const map = useMap()
//   useEffect(() => {
//     if (branch) map.flyTo([branch.lat, branch.lng], 15, { duration: 1.2 })
//     else map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, { duration: 1.2 })
//   }, [branch, map])
//   return null
// }

// // SVG Icons
// const IconSearch = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} />
//   </svg>
// )
// const IconChevron = ({ open }) => (
//   <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <polyline points="6 9 12 15 18 9" />
//   </svg>
// )
// const IconPin = ({ cls = 'w-4 h-4' }) => (
//   <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx={12} cy={10} r={3} />
//   </svg>
// )
// const IconPhone = () => (
//   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//   </svg>
// )
// const IconMail = () => (
//   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//     <polyline points="22,6 12,13 2,6" />
//   </svg>
// )
// const IconNav = () => (
//   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <polygon points="3 11 22 2 13 21 11 13 3 11" />
//   </svg>
// )
// const IconX = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} />
//   </svg>
// )

// const getDirectionsUrl = (branch) =>
//   `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`

// const BranchCard = ({ branch, isSelected, onClick }) => (
//   <div
//     onClick={onClick}
//     className={`rounded-md p-3 cursor-pointer border-2 transition-all duration-200 select-none
//       ${isSelected
//         ? 'bg-[#1e3163]  shadow-lg -translate-y-0.5'
//         : 'bg-white border-[#829BD9] hover:border-[#1e3163] hover:shadow-md'
//       }`}
//   >
//     <div className="flex items-center justify-between mb-1.5">
//       <span className={`font-bold text-sm tracking-wide ${isSelected ? 'text-white' : 'text-[#f47012]'}`}>
//         {branch.name}
//       </span>
//       <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full
//         ${isSelected ? 'bg-[#f47012] text-white' : 'bg-blue-50 '}`}>
//         {branch.district}
//       </span>
//     </div>
//     <div className={`flex items-start gap-1.5 text-xs leading-relaxed
//       ${isSelected ? 'text-white' : 'text-black'}`}>
//       <span className="mt-0.5 shrink-0"><IconPin /></span>
//       <span className="line-clamp-2">{branch.address}</span>
//     </div>
//   </div>
// )

// const Locator1 = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState('')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [selectedBranch, setSelectedBranch] = useState(null)
//   const [districtOpen, setDistrictOpen] = useState(false)
//   const markerRefs = useRef({})
//   const dropdownRef = useRef(null)

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDistrictOpen(false) }
//     document.addEventListener('mousedown', handler)
//     return () => document.removeEventListener('mousedown', handler)
//   }, [])

//   const filtered = useMemo(() => branchData.filter(b => {
//     const matchD = selectedDistrict ? b.district === selectedDistrict : true
//     const matchS = searchQuery
//       ? b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       b.address.toLowerCase().includes(searchQuery.toLowerCase())
//       : true
//     return matchD && matchS
//   }), [selectedDistrict, searchQuery])

//   const handleSelect = (b) => {
//     setSelectedBranch(b)
//     setTimeout(() => markerRefs.current[b.id]?.openPopup(), 1300)
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&display=swap');
//         .branch-list::-webkit-scrollbar { width: 4px; }
//         .branch-list::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
//         /* Leaflet popup custom */
//         .leaflet-popup-content-wrapper {
//           border-radius: 14px !important;
//           box-shadow: 0 8px 30px rgba(0,0,0,0.15) !important;
//           padding: 0 !important;
//           overflow: hidden !important;
//           border: none !important;
//         }
//         .leaflet-popup-content { margin: 0 !important; padding: 0 !important; width: auto !important; min-width: 220px; }
//         .leaflet-popup-tip-container { margin-top: -1px; }
//         .leaflet-popup-close-button {
//           top: 8px !important; right: 8px !important;
//           color: #94a3b8 !important; font-size: 18px !important;

//         }
//         .leaflet-popup-close-button:hover { color: #1e293b !important; }
//       `}</style>

//       <div className=" bg-gradient-to-br from-slate-100 to-blue-50 ">



//         {/* ── Body ── */}
//         <div className="max-w-[1200px] mx-auto  grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5 py-14">

//           {/* ── LEFT PANEL ── */}
//           <div className="bg-white rounded-md shadow-sm border  overflow-hidden flex flex-col">

//             {/* Panel header */}
//             <div className="bg-[#1e3163] px-5 py-3.5 flex items-center justify-between">
//               <span className="text-white font-bold text-sm tracking-widest uppercase">Find a Branch</span>
//               <span className="bg-[#f47012] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">{filtered.length}</span>
//             </div>

//             {/* Filters */}
//             <div className="p-3 space-y-2.5">

//               {/* District dropdown */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setDistrictOpen(o => !o)}
//                   className="w-full  border  rounded-md px-4 py-2.5 text-sm flex items-center justify-between "
//                 >
//                   <span className={selectedDistrict ? 'text-slate-800 font-medium' : 'text-black'}>
//                     {selectedDistrict || 'Select District'}
//                   </span>
//                   <IconChevron open={districtOpen} />
//                 </button>

//                 {districtOpen && (
//                   <div className="absolute z-10 top-full left-0 right-0 mt-1.5 bg-white border  rounded-md shadow-xl  overflow-hidden">
//                     {['', ...DISTRICTS].map((d) => (
//                       <div
//                         key={d || 'all'}
//                         onClick={() => { setSelectedDistrict(d); setDistrictOpen(false) }}
//                         className={`px-4 py-2.5 text-sm cursor-pointer transition-colors
//                           ${selectedDistrict === d
//                             ? 'bg-[#1e3163] text-white font-semibold'
//                             : ' hover:bg-[#eef8ff]'
//                           }`}
//                       >
//                         {d || 'All Districts'}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {/* Search */}
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2  pointer-events-none">
//                   <IconSearch />
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search branch or address…"
//                   value={searchQuery}
//                   onChange={e => setSearchQuery(e.target.value)}
//                   className="w-full  border  rounded-md pl-9 pr-4 py-2.5 text-sm  placeholder-slate-400 outline-none  transition"
//                 />
//               </div>

//             </div>

//             {/* Branch cards */}
//             <div className="branch-list px-3.5 pb-3.5 flex flex-col gap-2 overflow-y-auto flex-1 max-h-[420px]">
//               {filtered.length === 0
//                 ? <p className="text-center py-10 text-black text-sm">No branches found</p>
//                 : filtered.map(b => (
//                   <BranchCard key={b.id} branch={b} isSelected={selectedBranch?.id === b.id} onClick={() => handleSelect(b)} />
//                 ))
//               }
//             </div>
//           </div>

//           {/* ── RIGHT PANEL ── */}
//           <div className="flex flex-col rounded-md overflow-hidden shadow-sm  bg-white">

//             {/* Map */}
//             <div className="flex-1" style={{ minHeight: 380 }}>
//               <MapContainer
//                 center={DEFAULT_CENTER}
//                 zoom={DEFAULT_ZOOM}
//                 style={{ width: '100%', height: '100%', minHeight: 380 }}
//                 scrollWheelZoom
//                 attributionControl={false}
//               >
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution="&copy; OpenStreetMap contributors" 
//                 />
//                 <MapController branch={selectedBranch} />
//                 {branchData.map(b => (
//                   <Marker
//                     key={b.id}
//                     position={[b.lat, b.lng]}
//                     icon={selectedBranch?.id === b.id ? goldIcon : blueIcon}
//                     ref={el => { if (el) markerRefs.current[b.id] = el }}
//                     eventHandlers={{ click: () => handleSelect(b) }}
//                   >
//                     <Popup>
//                       {/* Custom popup card */}
//                       <div style={{ fontFamily: "", minWidth: 220 }}>
//                         {/* Popup header */}
//                         <div style={{ background: 'linear-gradient(135deg,#1e3163,#1e3163)', padding: '12px 16px 10px' }}>
//                           <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: '0.95rem', margin: 0, letterSpacing: '0.02em' }}>
//                             {b.name}
//                           </p>
//                           <p style={{ color: '#f47012', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '2px 0 0' }}>
//                             {b.district} District
//                           </p>
//                         </div>
//                         {/* Popup body */}
//                         <div style={{ padding: '10px 16px 13px', background: '#fff' }}>
//                           <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start', marginBottom: 10 }}>
//                             <span style={{ color: '#1e3163', marginTop: 2, flexShrink: 0 }}>
//                               <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
//                               </svg>
//                             </span>
//                             <span style={{ fontSize: '0.75rem', color: '#000', lineHeight: 1.45 }}>{b.address}</span>
//                           </div>

//                           {/* Get Directions button */}
//                           <a
//                             href={getDirectionsUrl(b)}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               gap: 6,
//                               background: 'linear-gradient(135deg,#f47012,#F68737)',
//                               color: '#fff',
//                               fontSize: '0.75rem',
//                               fontWeight: 600,
//                               letterSpacing: '0.04em',
//                               padding: '7px 14px',
//                               borderRadius: 8,
//                               textDecoration: 'none',
//                               transition: 'opacity 0.15s',
//                               width: '100%',
//                               boxSizing: 'border-box',
//                             }}
//                             onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
//                             onMouseLeave={e => e.currentTarget.style.opacity = '1'}
//                           >
//                             <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                               <polygon points="3 11 22 2 13 21 11 13 3 11" />
//                             </svg>
//                             Get Directions
//                           </a>
//                         </div>
//                       </div>
//                     </Popup>
//                   </Marker>
//                 ))}
//               </MapContainer>
//             </div>

//             {/* Detail section */}
//             {!selectedBranch ? (
//               <div className="px-6 py-2 flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-full bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                   <IconPin cls="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-base">Select a Branch</p>
//                   <p className=" text-xs mt-0.5">Click a branch card or map marker to view full details</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="px-6 py-3 ">
//                 {/* Badge + Name */}
//                 <span className="inline-block bg-[#f47012] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
//                   Branch Details
//                 </span>
//                 <div className="flex items-start justify-between gap-3">
//                   <div>
//                     <h2 className="text-2xl font-extrabold text-black leading-tight">{selectedBranch.name}</h2>
//                     <p className="text-[#1e3163] text-xs font-semibold uppercase tracking-widest mt-0.5 mb-4">{selectedBranch.district} District</p>
//                   </div>
//                   {/* Get Directions button — also in detail panel */}
//                   <a
//                     href={getDirectionsUrl(selectedBranch)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1.5 bg-[#f47012]  text-white text-xs font-semibold px-3.5 py-2 rounded-md transition-colors shrink-0 mt-0.5"
//                   >
//                     <IconNav />
//                     Get Directions
//                   </a>
//                 </div>

//                 <div className="h-px bg-gradient-to-r from-[#f47012] to-transparent rounded-full mb-4" />

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
//                   {/* Address */}
//                   <div className="flex items-start gap-3 sm:col-span-2">
//                     <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                       <IconPin />
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">Address</p>
//                       <p className="text-sm text-black leading-relaxed">{selectedBranch.address}</p>
//                     </div>
//                   </div>

//                   {/* Phones */}
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                       <IconPhone />
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1.5">Phones</p>
//                       <div className="flex flex-wrap gap-1.5">
//                         {selectedBranch.phones.map((p, i) => (
//                           <span key={i} className="bg-slate-100 text-[#f47012] text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
//                             {p}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                       <IconMail />
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">Email</p>
//                       <a
//                         href={`mailto:${selectedBranch.email}`}
//                         className="text-sm text-blue-600 hover:text-amber-500 transition-colors underline underline-offset-2"
//                       >
//                         {selectedBranch.email}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Locator1



import React, { useState, useMemo, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiPhone,
  FiMail,
  FiNavigation,
} from 'react-icons/fi'

// Fix Leaflet default icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
})
const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
})

const branchData = [
  { id: 1, name: 'SHANIPAR', district: 'Pune', address: 'UTTAM MOTI 1051 SADASHIV PETH PUNE-411030', phones: ['(020) 24491735', '(020) 24491431', '8805025702'], email: 'snp@janasevabankpune.in', lat: 18.5134, lng: 73.8476 },
  { id: 2, name: 'MARKETYARD', district: 'Pune', address: 'PLOT NO-365/66, GULKEKDI, MARKETYARD PUNE', phones: ['(020) 24260392', '(020) 24264192', '8805025703'], email: 'mkt@janasevabankpune.in', lat: 18.5018, lng: 73.8601 },
  { id: 3, name: 'NETAJINAGAR', district: 'Pune', address: 'WANWADI PARMAR PARK WANWADI PUNE-411040', phones: ['24262865', '9146003305', '8805025704'], email: 'nng@janasevabankpune.in', lat: 18.4945, lng: 73.8891 },
  { id: 4, name: 'RAMWADI', district: 'Pune', address: 'DEEPAK PARK, KALYANI NAGAR, NAGAR RD, RAMWADI', phones: ['(020) 26680735', '(020) 26686562', '8805025705'], email: 'rmw@janasevabankpune.in', lat: 18.5461, lng: 73.9052 },
  { id: 5, name: 'SASWAD', district: 'Pune', address: 'LANDGE BLDG, MAIN RD, SASWAD, TAL PURANDAR DIS PUNE-412301', phones: ['(02115) 222630', '8805025706'], email: 'swd@janasevabankpune.in', lat: 18.3507, lng: 74.0174 },
  { id: 6, name: 'SHIKRAPUR', district: 'Pune', address: 'S.T STAND, SHIKRAPUR TAL SHIRUR DIS PUNE-412208', phones: ['8805025707', '8554055770'], email: 'shk@janasevabankpune.in', lat: 18.6962, lng: 74.1257 },
  { id: 7, name: 'DHANKAWADI', district: 'Pune', address: 'S.NO-19/A, KUMAR TRED CENTER, SATARA RD DHANKAWADI, PUNE-411043', phones: ['(020) 24373859', '(020) 24361622', '8805025708'], email: 'dhn@janasevabankpune.in', lat: 18.4629, lng: 73.8614 },

  // ✅ NEW DATA ADDED BELOW

  {
    id: 8,
    name: 'THANE',
    district: 'Thane',
    address: 'SHOP NO-1,2,3,AND 4 SITA KRUPA APPARTMENT, DHARMAVIR MARG, NR. PARMARTH NIKETAN, PACHPAKHDI, THANE-400602',
    phones: ['(022)25336535', '(022)25336525', '8805025721'],
    email: 'thn@janasevabankpune.in',
    lat: 19.1947,
    lng: 72.9721,
  },
  {
    id: 9,
    name: 'SATARA',
    district: 'Satara',
    address: 'GULBAHAR, NR. BADHIYE PETROL PUMP, POVAI NAKA, RAVIVAR PETH SATARA-415002',
    phones: ['(02162)229399', '8805025715'],
    email: 'str@janasevabankpune.in',
    lat: 17.6805,
    lng: 74.0183,
  },
  {
    id: 10,
    name: 'KOREGAON',
    district: 'Satara',
    address: 'RAHIMATPUR RD, TAHASHIL OFFICE SAMOR, M.P. KOREGAON, DIS SATARA-415501',
    phones: ['8805025719'],
    email: 'kor@janasevabankpune.in',
    lat: 17.6983,
    lng: 74.0695,
  },
  {
    id: 11,
    name: 'SHIRAVAL',
    district: 'Satara',
    address: 'GAT NO-377, NR S.T. STAND, M.P SHIRWAL, DIS SATARA-412801',
    phones: ['(02169)244071', '8805025731'],
    email: 'swl@janasevabankpune.in',
    lat: 18.1406,
    lng: 73.9776,
  },
]

const DEFAULT_CENTER = [18.5204, 73.8567]
const DEFAULT_ZOOM = 8
const DISTRICTS = ['Pune', 'Satara', 'Thane']

// const MapController = ({ branch }) => {
//   const map = useMap()
//   useEffect(() => {
//     if (branch) map.flyTo([branch.lat, branch.lng], 15, { duration: 1.2 })
//     else map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, { duration: 1.2 })
//   }, [branch, map])
//   return null
// }
const MapController = ({ branches, selectedDistrict, selectedBranch }) => {
  const map = useMap()

  useEffect(() => {
    if (selectedBranch) {
      // Fly to the selected branch
      map.flyTo([selectedBranch.lat, selectedBranch.lng], 15, { duration: 1.2 })
    } else if (selectedDistrict && branches.length > 0) {
      // Zoom to fit all filtered branches
      const bounds = L.latLngBounds(branches.map(b => [b.lat, b.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    } else {
      // Default view
      map.setView([18.5204, 73.8567], 8)
    }
  }, [selectedBranch, branches, selectedDistrict, map])

  return null
}

const getDirectionsUrl = (branch) =>
  `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`

const BranchCard = ({ branch, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`rounded-md p-3 cursor-pointer border-2 transition-all duration-200 select-none ${isSelected
        ? 'bg-[#1e3163] border-[#1e3163] shadow-lg -translate-y-0.5'
        : 'bg-white border-[#829BD9] hover:border-[#1e3163] hover:shadow-md'
      }`}
  >
    <div className="flex items-center justify-between mb-1.5">
      <span className={`font-bold text-sm tracking-wide ${isSelected ? 'text-white' : 'text-[#f47012]'}`}>
        {branch.name}
      </span>
      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isSelected ? 'bg-[#f47012] text-white' : 'bg-blue-50'
        }`}>
        {branch.district}
      </span>
    </div>
    <div className={`flex items-start gap-1.5 text-xs leading-relaxed ${isSelected ? 'text-white' : 'text-black'}`}>
      <FiMapPin className="w-4 h-4 mt-0.5 shrink-0" />
      <span className="line-clamp-2">{branch.address}</span>
    </div>
  </div>
)

const PopupCard = ({ branch }) => (
  <div className="min-w-[220px]">
    <div className="px-4 py-3 bg-[#1e3163]">
      <p className="font-bold text-white text-sm m-0 tracking-wide font-serif">
        {branch.name}
      </p>
      <p className="text-[#f47012] text-[11px] font-semibold tracking-widest uppercase mt-0.5 mb-0">
        {branch.district} District
      </p>
    </div>
    <div className="px-4 py-2.5 bg-white">
      <div className="flex gap-1.5 items-start mb-2.5">
        <FiMapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#1e3163]" />
        <span className="text-xs text-black leading-snug">{branch.address}</span>
      </div>
      <a
        href={getDirectionsUrl(branch)}
        target="_blank"
        rel="noopener noreferrer"
        className="locator-directions-btn"
      >
        <FiNavigation className="w-3.5 h-3.5" />
        Get Directions
      </a>
    </div>
  </div>
)

const Locator1 = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBranch, setSelectedBranch] = useState(null)
  const [districtOpen, setDistrictOpen] = useState(false)
  const markerRefs = useRef({})
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDistrictOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = useMemo(() => branchData.filter(b => {
    // const matchD = selectedDistrict ? b.district === selectedDistrict : true
    const matchD = selectedDistrict
      ? b.district.toLowerCase().trim() === selectedDistrict.toLowerCase().trim()
      : true
    const matchS = searchQuery
      ? b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.address.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchD && matchS
  }), [selectedDistrict, searchQuery])

  const handleSelect = (b) => {
    setSelectedBranch(b)
    setTimeout(() => markerRefs.current[b.id]?.openPopup(), 1300)
  }




useEffect(() => {
  setSelectedBranch(null)

  // ✅ Close all open popups
  Object.values(markerRefs.current).forEach(marker => {
    if (marker) {
      marker.closePopup()
    }
  })
}, [selectedDistrict])




// useEffect(() => {
//   setSelectedBranch(null)
//   setSearchQuery("")

//   Object.values(markerRefs.current).forEach(marker => {
//     marker?.closePopup()
//   })
// }, [selectedDistrict])


  return (
    <>

      <div className="bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5 py-10 lg:py-14">

          {/* ── LEFT PANEL ── */}
          <div className="bg-white rounded-md shadow-sm border overflow-hidden flex flex-col">

            {/* Panel header */}
            <div className="bg-[#1e3163] px-5 py-3.5 flex items-center justify-between">
              <span className="text-white font-bold text-sm tracking-widest uppercase">Find a Branch</span>
              <span className="bg-[#f47012] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {filtered.length}
              </span>
            </div>

            {/* Filters */}
            <div className="p-3 space-y-2.5">

              {/* District dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDistrictOpen(o => !o)}
                  className="w-full border rounded-md px-4 py-2.5 text-sm flex items-center justify-between bg-white"
                >
                  <span className={selectedDistrict ? 'text-slate-800 font-medium' : 'text-black'}>
                    {selectedDistrict || 'Select District'}
                  </span>
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${districtOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {districtOpen && (
                  <div className="absolute z-10 top-full left-0 right-0 mt-1.5 bg-white border rounded-md shadow-xl overflow-hidden">
                    {['', ...DISTRICTS].map((d) => (
                      <div
                        key={d || 'all'}
                        onClick={() => { setSelectedDistrict(d); setDistrictOpen(false) }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${selectedDistrict === d
                            ? 'bg-[#1e3163] text-white font-semibold'
                            : 'hover:bg-[#eef8ff]'
                          }`}
                      >
                        {d || 'All Districts'}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search branch or address…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full border rounded-md pl-9 pr-4 py-2.5 text-sm placeholder-slate-400 outline-none transition"
                />
              </div>
            </div>

            {/* Branch cards */}
            <div className="branch-list px-3.5 pb-3.5 flex flex-col gap-2 overflow-y-auto flex-1 max-h-[420px]">
              {filtered.length === 0
                ? <p className="text-center py-10 text-black text-sm">No branches found</p>
                : filtered.map(b => (
                  <BranchCard
                    key={b.id}
                    branch={b}
                    isSelected={selectedBranch?.id === b.id}
                    onClick={() => handleSelect(b)}
                  />
                ))
              }
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="flex flex-col rounded-md overflow-hidden shadow-sm bg-white">

            {/* Map */}
            <div className="flex-1 min-h-[300px] sm:min-h-[380px]">
              <MapContainer
                center={DEFAULT_CENTER}
                zoom={DEFAULT_ZOOM}
                className="locator-map"
                scrollWheelZoom
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
               <MapController
  branches={filtered}
  selectedDistrict={selectedDistrict}
  selectedBranch={selectedBranch}   // ← add this
/>
                {branchData.map(b => (
                  <Marker
                    key={b.id}
                    position={[b.lat, b.lng]}
                    icon={selectedBranch?.id === b.id ? goldIcon : blueIcon}
                    ref={el => { if (el) markerRefs.current[b.id] = el }}
                    eventHandlers={{ click: () => handleSelect(b) }}
                  >
                    <Popup>
                      <PopupCard branch={b} />
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Detail section */}
            {!selectedBranch ? (
              <div className="px-6 py-2 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-base">Select a Branch</p>
                  <p className="text-xs mt-0.5">Click a branch card or map marker to view full details</p>
                </div>
              </div>
            ) : (
              <div className="px-4 sm:px-6 py-3">
                <span className="inline-block bg-[#f47012] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  Branch Details
                </span>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-black leading-tight">
                      {selectedBranch.name}
                    </h2>
                    <p className="text-[#1e3163] text-xs font-semibold uppercase tracking-widest mt-0.5 mb-4">
                      {selectedBranch.district} District
                    </p>
                  </div>
                  <a
                    href={getDirectionsUrl(selectedBranch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#f47012] text-white text-xs font-semibold px-3.5 py-2 rounded-md transition-colors shrink-0 sm:mt-0.5 w-fit"
                  >
                    <FiNavigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>

                <div className="h-px bg-gradient-to-r from-[#f47012] to-transparent rounded-full mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">

                  {/* Address */}
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
                      <FiMapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">Address</p>
                      <p className="text-sm text-black leading-relaxed">{selectedBranch.address}</p>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
                      <FiPhone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1.5">Phones</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedBranch.phones.map((p, i) => (
                          <span key={i} className="bg-slate-100 text-[#f47012] text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
                      <FiMail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">Email</p>
                      <a
                        href={`mailto:${selectedBranch.email}`}
                        className="text-sm text-blue-600 hover:text-amber-500 transition-colors underline underline-offset-2"
                      >
                        {selectedBranch.email}
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default Locator1






// import React, { useState, useMemo, useEffect, useRef } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import { FiSearch, FiChevronDown, FiMapPin, FiPhone, FiMail, FiNavigation } from 'react-icons/fi'
// import { useLang } from '../ImpFolder/LangContext'

// // ── Translations ──────────────────────────────────────────────────────────────
// const locatorTranslations = {
//   en: {
//     findBranch: "Find a Branch",
//     selectDistrict: "Select District",
//     allDistricts: "All Districts",
//     searchPlaceholder: "Search branch or address…",
//     noBranches: "No branches found",
//     selectBranchTitle: "Select a Branch",
//     selectBranchDesc: "Click a branch card or map marker to view full details",
//     branchDetails: "Branch Details",
//     district: "District",
//     address: "Address",
//     phones: "Phones",
//     email: "Email",
//     getDirections: "Get Directions",
//     districts: {
//       Pune: "Pune",
//       Satara: "Satara",
//       Thane: "Thane",
//     },
//   },
//   mr: {
//     findBranch: "शाखा शोधा",
//     selectDistrict: "जिल्हा निवडा",
//     allDistricts: "सर्व जिल्हे",
//     searchPlaceholder: "शाखा किंवा पत्ता शोधा…",
//     noBranches: "कोणतीही शाखा आढळली नाही",
//     selectBranchTitle: "शाखा निवडा",
//     selectBranchDesc: "संपूर्ण माहिती पाहण्यासाठी शाखा कार्ड किंवा नकाशावरील चिन्हावर क्लिक करा",
//     branchDetails: "शाखा तपशील",
//     district: "जिल्हा",
//     address: "पत्ता",
//     phones: "दूरध्वनी",
//     email: "ईमेल",
//     getDirections: "मार्ग दाखवा",
//     districts: {
//       Pune: "पुणे",
//       Satara: "सातारा",
//       Thane: "ठाणे",
//     },
//   },
// }

// // ── Leaflet icon fix ──────────────────────────────────────────────────────────
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// })

// const goldIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
// })
// const blueIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
// })

// // ── Branch Data ───────────────────────────────────────────────────────────────
// const branchData = [
//   { id: 1, name: 'SHANIPAR', nameMr: 'शनिपार', district: 'Pune', address: 'UTTAM MOTI 1051 SADASHIV PETH PUNE-411030', addressMr: 'उत्तम मोती १०५१ सदाशिव पेठ पुणे-४११०३०', phones: ['(020) 24491735', '(020) 24491431', '8805025702'], email: 'snp@janasevabankpune.in', lat: 18.5134, lng: 73.8476 },
//   { id: 2, name: 'MARKETYARD', nameMr: 'मार्केट यार्ड', district: 'Pune', address: 'PLOT NO-365/66, GULKEKDI, MARKETYARD PUNE', addressMr: 'प्लॉट नं-३६५/६६, गुलकेकडी, मार्केट यार्ड पुणे', phones: ['(020) 24260392', '(020) 24264192', '8805025703'], email: 'mkt@janasevabankpune.in', lat: 18.5018, lng: 73.8601 },
//   { id: 3, name: 'NETAJINAGAR', nameMr: 'नेताजीनगर', district: 'Pune', address: 'WANWADI PARMAR PARK WANWADI PUNE-411040', addressMr: 'वानवडी परमार पार्क वानवडी पुणे-४११०४०', phones: ['24262865', '9146003305', '8805025704'], email: 'nng@janasevabankpune.in', lat: 18.4945, lng: 73.8891 },
//   { id: 4, name: 'RAMWADI', nameMr: 'रामवाडी', district: 'Pune', address: 'DEEPAK PARK, KALYANI NAGAR, NAGAR RD, RAMWADI', addressMr: 'दीपक पार्क, कल्याणी नगर, नगर रोड, रामवाडी', phones: ['(020) 26680735', '(020) 26686562', '8805025705'], email: 'rmw@janasevabankpune.in', lat: 18.5461, lng: 73.9052 },
//   { id: 5, name: 'SASWAD', nameMr: 'सासवड', district: 'Pune', address: 'LANDGE BLDG, MAIN RD, SASWAD, TAL PURANDAR DIS PUNE-412301', addressMr: 'लांडगे बिल्डिंग, मेन रोड, सासवड, ता. पुरंदर जि. पुणे-४१२३०१', phones: ['(02115) 222630', '8805025706'], email: 'swd@janasevabankpune.in', lat: 18.3507, lng: 74.0174 },
//   { id: 6, name: 'SHIKRAPUR', nameMr: 'शिक्रापूर', district: 'Pune', address: 'S.T STAND, SHIKRAPUR TAL SHIRUR DIS PUNE-412208', addressMr: 'एस.टी. स्टँड, शिक्रापूर ता. शिरूर जि. पुणे-४१२२०८', phones: ['8805025707', '8554055770'], email: 'shk@janasevabankpune.in', lat: 18.6962, lng: 74.1257 },
//   { id: 7, name: 'DHANKAWADI', nameMr: 'धनकवडी', district: 'Pune', address: 'S.NO-19/A, KUMAR TRED CENTER, SATARA RD DHANKAWADI, PUNE-411043', addressMr: 'स.नं-१९/अ, कुमार ट्रेड सेंटर, सातारा रोड धनकवडी, पुणे-४११०४३', phones: ['(020) 24373859', '(020) 24361622', '8805025708'], email: 'dhn@janasevabankpune.in', lat: 18.4629, lng: 73.8614 },
//   { id: 8, name: 'THANE', nameMr: 'ठाणे', district: 'Thane', address: 'SHOP NO-1,2,3,AND 4 SITA KRUPA APPARTMENT, DHARMAVIR MARG, NR. PARMARTH NIKETAN, PACHPAKHDI, THANE-400602', addressMr: 'दुकान नं-१,२,३ आणि ४ सीता कृपा अपार्टमेंट, धर्मवीर मार्ग, परमार्थ निकेतनजवळ, पाचपाखडी, ठाणे-४००६०२', phones: ['(022)25336535', '(022)25336525', '8805025721'], email: 'thn@janasevabankpune.in', lat: 19.1947, lng: 72.9721 },
//   { id: 9, name: 'SATARA', nameMr: 'सातारा', district: 'Satara', address: 'GULBAHAR, NR. BADHIYE PETROL PUMP, POVAI NAKA, RAVIVAR PETH SATARA-415002', addressMr: 'गुलबहार, बाधिये पेट्रोल पंपजवळ, पोवई नाका, रविवार पेठ सातारा-४१५००२', phones: ['(02162)229399', '8805025715'], email: 'str@janasevabankpune.in', lat: 17.6805, lng: 74.0183 },
//   { id: 10, name: 'KOREGAON', nameMr: 'कोरेगाव', district: 'Satara', address: 'RAHIMATPUR RD, TAHASHIL OFFICE SAMOR, M.P. KOREGAON, DIS SATARA-415501', addressMr: 'रहिमतपूर रोड, तहसील कार्यालयासमोर, म.प. कोरेगाव, जि. सातारा-४१५५०१', phones: ['8805025719'], email: 'kor@janasevabankpune.in', lat: 17.6983, lng: 74.0695 },
//   { id: 11, name: 'SHIRAVAL',
//      nameMr: 'शिरवळ', 
//      district: 'Satara',
//       address: 'GAT NO-377, NR S.T. STAND, M.P SHIRWAL, DIS SATARA-412801', 
//       addressMr: 'गट नं-३७७, एस.टी. स्टँडजवळ, म.प. शिरवळ, जि. सातारा-४१२८०१',
//        phones: ['(02169)244071', '8805025731'], email: 'swl@janasevabankpune.in', lat: 18.1406, lng: 73.9776 },
// ]

// const DEFAULT_CENTER = [18.5204, 73.8567]
// const DEFAULT_ZOOM = 8
// const DISTRICTS = ['Pune', 'Satara', 'Thane']

// // ── Map Controller ────────────────────────────────────────────────────────────
// const MapController = ({ branches, selectedDistrict, selectedBranch }) => {
//   const map = useMap()
//   useEffect(() => {
//     if (selectedBranch) {
//       map.flyTo([selectedBranch.lat, selectedBranch.lng], 15, { duration: 1.2 })
//     } else if (selectedDistrict && branches.length > 0) {
//       const bounds = L.latLngBounds(branches.map(b => [b.lat, b.lng]))
//       map.fitBounds(bounds, { padding: [50, 50] })
//     } else {
//       map.setView(DEFAULT_CENTER, DEFAULT_ZOOM)
//     }
//   }, [selectedBranch, branches, selectedDistrict, map])
//   return null
// }

// const getDirectionsUrl = (branch) =>
//   `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`

// // ── Branch Card ───────────────────────────────────────────────────────────────
// const BranchCard = ({ branch, isSelected, onClick, tr, lang }) => (
//   <div onClick={onClick} className={`rounded-md p-3 cursor-pointer border-2 transition-all duration-200 select-none ${isSelected ? 'bg-[#1e3163] border-[#1e3163] shadow-lg -translate-y-0.5' : 'bg-white border-[#829BD9] hover:border-[#1e3163] hover:shadow-md'}`}>
//     <div className="flex items-center justify-between mb-1.5">
//       <span className={`font-bold text-sm tracking-wide ${isSelected ? 'text-white' : 'text-[#f47012]'}`}>
//         {lang === 'mr' ? branch.nameMr : branch.name}   {/* ← translated name */}
//       </span>
//       <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isSelected ? 'bg-[#f47012] text-white' : 'bg-blue-50'}`}>
//         {tr.districts[branch.district] || branch.district}
//       </span>
//     </div>
//     <div className={`flex items-start gap-1.5 text-xs leading-relaxed ${isSelected ? 'text-white' : 'text-black'}`}>
//       <FiMapPin className="w-4 h-4 mt-0.5 shrink-0" />
//       <span className="line-clamp-2">
//         {lang === 'mr' ? branch.addressMr : branch.address}  {/* ← translated address */}
//       </span>
//     </div>
//   </div>
// )

// const PopupCard = ({ branch, tr, lang }) => (
//   <div className="min-w-[220px]">
//     <div className="px-4 py-3 bg-[#1e3163]">
//       <p className="font-bold text-white text-sm m-0 tracking-wide font-serif">
//         {lang === 'mr' ? branch.nameMr : branch.name}   {/* ← translated name */}
//       </p>
//       <p className="text-[#f47012] text-[11px] font-semibold tracking-widest uppercase mt-0.5 mb-0">
//         {tr.districts[branch.district] || branch.district} {tr.district}
//       </p>
//     </div>
//     <div className="px-4 py-2.5 bg-white">
//       <div className="flex gap-1.5 items-start mb-2.5">
//         <FiMapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#1e3163]" />
//         <span className="text-xs text-black leading-snug">
//           {lang === 'mr' ? branch.addressMr : branch.address}  {/* ← translated address */}
//         </span>
//       </div>
//       <a href={getDirectionsUrl(branch)} target="_blank" rel="noopener noreferrer"
//         className="flex items-center gap-1.5 text-xs font-semibold text-[#f47012] hover:underline">
//         <FiNavigation className="w-3.5 h-3.5" />
//         {tr.getDirections}
//       </a>
//     </div>
//   </div>
// )

// // ── Main Component ────────────────────────────────────────────────────────────
// const Locator1 = () => {
//   const { lang } = useLang()
//   const tr = locatorTranslations[lang]

//   const [selectedDistrict, setSelectedDistrict] = useState('')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [selectedBranch, setSelectedBranch] = useState(null)
//   const [districtOpen, setDistrictOpen] = useState(false)
//   const markerRefs = useRef({})
//   const dropdownRef = useRef(null)

//   useEffect(() => {
//     const handler = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target))
//         setDistrictOpen(false)
//     }
//     document.addEventListener('mousedown', handler)
//     return () => document.removeEventListener('mousedown', handler)
//   }, [])

//   const filtered = useMemo(() => branchData.filter(b => {
//     const matchD = selectedDistrict
//       ? b.district.toLowerCase().trim() === selectedDistrict.toLowerCase().trim()
//       : true
//     const matchS = searchQuery
//       ? b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       b.address.toLowerCase().includes(searchQuery.toLowerCase())
//       : true
//     return matchD && matchS
//   }), [selectedDistrict, searchQuery])

//   const handleSelect = (b) => {
//     setSelectedBranch(b)
//     setTimeout(() => markerRefs.current[b.id]?.openPopup(), 1300)
//   }

//   useEffect(() => {
//     setSelectedBranch(null)
//     Object.values(markerRefs.current).forEach(marker => {
//       if (marker) marker.closePopup()
//     })
//   }, [selectedDistrict])

//   return (
//     <div className="bg-gradient-to-br from-slate-100 to-blue-50">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5 py-10 lg:py-14">

//         {/* ── LEFT PANEL ── */}
//         <div className="bg-white rounded-md shadow-sm border overflow-hidden flex flex-col">

//           {/* Panel header */}
//           <div className="bg-[#1e3163] px-5 py-3.5 flex items-center justify-between">
//             <span className="text-white font-bold text-sm tracking-widest uppercase">
//               {tr.findBranch}
//             </span>
//             <span className="bg-[#f47012] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
//               {filtered.length}
//             </span>
//           </div>

//           {/* Filters */}
//           <div className="p-3 space-y-2.5">

//             {/* District dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDistrictOpen(o => !o)}
//                 className="w-full border rounded-md px-4 py-2.5 text-sm flex items-center justify-between bg-white"
//               >
//                 <span className={selectedDistrict ? 'text-slate-800 font-medium' : 'text-black'}>
//                   {selectedDistrict ? (tr.districts[selectedDistrict] || selectedDistrict) : tr.selectDistrict}
//                 </span>
//                 <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${districtOpen ? 'rotate-180' : 'rotate-0'}`} />
//               </button>

//               {districtOpen && (
//                 <div className="absolute z-10 top-full left-0 right-0 mt-1.5 bg-white border rounded-md shadow-xl overflow-hidden">
//                   {['', ...DISTRICTS].map((d) => (
//                     <div
//                       key={d || 'all'}
//                       onClick={() => { setSelectedDistrict(d); setDistrictOpen(false) }}
//                       className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${selectedDistrict === d
//                         ? 'bg-[#1e3163] text-white font-semibold'
//                         : 'hover:bg-[#eef8ff]'
//                         }`}
//                     >
//                       {d ? (tr.districts[d] || d) : tr.allDistricts}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Search */}
//             <div className="relative">
//               <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
//               <input
//                 type="text"
//                 placeholder={tr.searchPlaceholder}
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 className="w-full border rounded-md pl-9 pr-4 py-2.5 text-sm placeholder-slate-400 outline-none transition"
//               />
//             </div>
//           </div>

//           {/* Branch cards */}
//           <div className="branch-list px-3.5 pb-3.5 flex flex-col gap-2 overflow-y-auto flex-1 max-h-[420px]">
//             {filtered.length === 0
//               ? <p className="text-center py-10 text-black text-sm">{tr.noBranches}</p>
//               : filtered.map(b => (
//                 <BranchCard
//                   key={b.id}
//                   branch={b}
//                   isSelected={selectedBranch?.id === b.id}
//                   onClick={() => handleSelect(b)}
//                   tr={tr}
//                   lang={lang}
//                 />
//               ))
//             }
//           </div>
//         </div>

//         {/* ── RIGHT PANEL ── */}
//         <div className="flex flex-col rounded-md overflow-hidden shadow-sm bg-white">

//           {/* Map */}
//           <div className="flex-1 min-h-[300px] sm:min-h-[380px]">
//             <MapContainer
//               center={DEFAULT_CENTER}
//               zoom={DEFAULT_ZOOM}
//               className="locator-map"
//               scrollWheelZoom
//               attributionControl={false}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution="&copy; OpenStreetMap contributors"
//               />
//               <MapController
//                 branches={filtered}
//                 selectedDistrict={selectedDistrict}
//                 selectedBranch={selectedBranch}
//               />
//               {branchData.map(b => (
//                 <Marker
//                   key={b.id}
//                   position={[b.lat, b.lng]}
//                   icon={selectedBranch?.id === b.id ? goldIcon : blueIcon}
//                   ref={el => { if (el) markerRefs.current[b.id] = el }}
//                   eventHandlers={{ click: () => handleSelect(b) }}
//                 >
//                   <Popup>
//                     <PopupCard branch={b} tr={tr} lang={lang}/>
//                   </Popup>
//                 </Marker>
//               ))}
//             </MapContainer>
//           </div>

//           {/* Detail section */}
//           {!selectedBranch ? (
//             <div className="px-6 py-2 flex items-center gap-4">
//               <div className="w-10 h-10 rounded-full bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                 <FiMapPin className="w-5 h-5" />
//               </div>
//               <div>
//                 <p className="font-semibold text-base">{tr.selectBranchTitle}</p>
//                 <p className="text-xs mt-0.5">{tr.selectBranchDesc}</p>
//               </div>
//             </div>
//           ) : (
//             <div className="px-4 sm:px-6 py-3">
//               <span className="inline-block bg-[#f47012] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
//                 {tr.branchDetails}
//               </span>

//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-extrabold text-black leading-tight">
//                     {lang === 'mr' ? selectedBranch.nameMr : selectedBranch.name}
//                   </h2>
//                   <p className="text-[#1e3163] text-xs font-semibold uppercase tracking-widest mt-0.5 mb-4">
//                     {tr.districts[selectedBranch.district] || selectedBranch.district} {tr.district}
//                   </p>
//                 </div>
//                 <a
//                   href={getDirectionsUrl(selectedBranch)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 bg-[#f47012] text-white text-xs font-semibold px-3.5 py-2 rounded-md transition-colors shrink-0 sm:mt-0.5 w-fit"
//                 >
//                   <FiNavigation className="w-3.5 h-3.5" />
//                   {tr.getDirections}
//                 </a>
//               </div>

//               <div className="h-px bg-gradient-to-r from-[#f47012] to-transparent rounded-full mb-4" />

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">

//                 {/* Address */}
//                 <div className="flex items-start gap-3 sm:col-span-2">
//                   <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                     <FiMapPin className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">{tr.address}</p>
//                     <p className="text-sm text-black leading-relaxed"> {lang === 'mr' ? selectedBranch.addressMr : selectedBranch.address}</p>
//                   </div>
//                 </div>

//                 {/* Phones */}
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                     <FiPhone className="w-3.5 h-3.5" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1.5">{tr.phones}</p>
//                     <div className="flex flex-wrap gap-1.5">
//                       {selectedBranch.phones.map((p, i) => (
//                         <span key={i} className="bg-slate-100 text-[#f47012] text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
//                           {p}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-[#eef8ff] flex items-center justify-center text-[#1e3163] shrink-0">
//                     <FiMail className="w-3.5 h-3.5" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#1e3163] uppercase tracking-widest font-semibold mb-1">{tr.email}</p>
//                     <a
//                       href={`mailto:${selectedBranch.email}`}
//                       className="text-sm text-blue-600 hover:text-amber-500 transition-colors underline underline-offset-2"
//                     >
//                       {selectedBranch.email}
//                     </a>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Locator1