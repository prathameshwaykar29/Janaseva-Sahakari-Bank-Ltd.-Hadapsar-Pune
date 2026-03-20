// import React, { useState, useEffect } from 'react'

// const sections = [
//   {
//     id: 'applicability',
//     icon: '⚖️',
//     title: 'Applicability',
//     content: `This Policy is applicable to personal information and sensitive personal data or information collected by the Bank or its affiliates directly from the customer or through the Bank's online portals, mobile apps and electronic communications, as also any information collected by the Bank's server from the customer's browser.`
//   },
//   {
//     id: 'collected',
//     icon: '📋',
//     title: 'Personal Information Collected',
//     items: [
//       { label: 'App Settings', desc: 'Data stored locally on your device, including your activities on the App and preferences.' },
//       { label: 'Contact Information', desc: 'Name, address, date of birth, phone number, mobile number, email address, last six digits of your payment card, and other contact details.' },
//       { label: 'Device Identifier', desc: 'IP address or unique identifier for any computer, mobile phone, tablet, or other device — including hardware identifiers like IMEI.' },
//       { label: 'Financial Information', desc: 'Your accounts, balances, and transactions.' },
//       { label: 'Activity Tracking', desc: 'Pages visited, duration on each page, searches, transactions, and messages sent between your device and our server.' },
//       { label: 'Usage Information', desc: 'Device type, browser, operating system, search terms, areas accessed, and time of use — collected automatically by us and our service providers.' },
//       { label: 'Location', desc: 'Geographic location data via GPS, WiFi, network, or user-entered input.' },
//     ]
//   },
//   {
//     id: 'purpose',
//     icon: '🎯',
//     title: 'Purpose of Collection',
//     content: `The Bank collects and uses financial and personal information for specific business purposes, related purposes designated by the Bank, or lawful purposes to comply with applicable laws and regulations. The authenticity of personal information provided by the customer shall not be the responsibility of the Bank.`
//   },
//   {
//     id: 'disclosure',
//     icon: '🔒',
//     title: 'Disclosure of Personal Information',
//     content: `The Bank shall not divulge any personal information for cross-selling or any other unauthorized purposes. Personal information will only be disclosed:`,
//     bullets: [
//       'Where disclosure has been agreed upon in a written contract between the Bank and the customer.',
//       'Where the Bank is required to disclose to a third party on a need-to-know basis — in which case the third party is informed of the confidential nature and must maintain equivalent security standards.',
//       'Where disclosure is requested by a local authority under applicable law or regulation.',
//     ]
//   },
//   {
//     id: 'security',
//     icon: '🛡️',
//     title: 'Security Practices',
//     content: `Our Bank is strongly committed to protecting customer privacy and has taken all necessary and reasonable measures to protect the confidentiality of customer information. Security is maintained through physical, electronic, and procedural safeguards that meet applicable laws. The Bank follows standard encryption norms for transmission of information and ensures that employees and affiliates respect confidentiality at all times.`
//   },
//   {
//     id: 'cookies',
//     icon: '🍪',
//     title: 'Cookie Policy',
//     content: `A browser cookie is a small piece of data stored on your device to help websites and apps remember things about you. Other technologies including web storage and device identifiers may be used for similar purposes. By using our website and apps, you agree to the placement of these cookies. You may change your browser settings to refuse or remove cookies. We are not responsible for cookies placed on your device by any other website.`
//   },
//   {
//     id: 'changes',
//     icon: '📝',
//     title: 'Notice of Change',
//     content: `The Bank may, from time to time, update this Policy. The effective date of this Policy indicates the last time it was revised or materially changed.`
//   },
//   {
//     id: 'contact',
//     icon: '✉️',
//     title: 'Enquiries & Complaints',
//     content: `To contact us on any aspect of this policy or for any discrepancies or grievances with respect to your personal information — including modification requests — please write to us at:`,
//     email: 'it@janasevabankpune.com'
//   }
// ]

// const navItems = sections.map(s => ({ id: s.id, title: s.title, icon: s.icon }))

// export default function PrivacyPolicy() {
//   const [active, setActive] = useState(null)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     setActive(id)
//   }

//   return (
//     <div style={styles.root}>
//       <style>{css}</style>

//       {/* Header */}
//       <header style={{ ...styles.header, ...(scrolled ? styles.headerScrolled : {}) }}>
//         <div style={styles.headerInner}>
//           <div style={styles.logo}>
//             <span style={styles.logoMark}>J</span>
//             <span style={styles.logoText}>Janaseva Bank</span>
//           </div>
//           <span style={styles.badge}>Privacy Policy</span>
//         </div>
//       </header>

//       {/* Hero */}
//       <section style={styles.hero}>
//         <div style={styles.heroBg} />
//         <div style={styles.heroContent}>
//           <p style={styles.heroEyebrow}>Janaseva Sahakari Bank Ltd. · Hadapsar, Pune</p>
//           <h1 style={styles.heroTitle}>Your Privacy,<br />Our Commitment</h1>
//           <p style={styles.heroSub}>
//             We are committed to protecting the personal information you entrust to us — in full compliance with the Information Technology Act 2000 and IT Rules 2011.
//           </p>
//           <div style={styles.heroMeta}>
//             <span style={styles.metaTag}>IT Act 2000</span>
//             <span style={styles.metaTag}>IT Rules 2011</span>
//             <span style={styles.metaTag}>Hadapsar, Pune</span>
//           </div>
//         </div>
//         <div style={styles.heroGraphic}>
//           <div style={styles.shield}>🛡️</div>
//         </div>
//       </section>

//       <div style={styles.layout}>
//         {/* Sidebar Nav */}
//         <aside style={styles.sidebar}>
//           <p style={styles.sidebarLabel}>Contents</p>
//           <nav>
//             {navItems.map(n => (
//               <button
//                 key={n.id}
//                 onClick={() => scrollTo(n.id)}
//                 style={{
//                   ...styles.navBtn,
//                   ...(active === n.id ? styles.navBtnActive : {})
//                 }}
//                 className="nav-btn"
//               >
//                 <span style={styles.navIcon}>{n.icon}</span>
//                 <span style={styles.navTitle}>{n.title}</span>
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main style={styles.main}>
//           {/* Intro */}
//           <div style={styles.introCard} className="fade-in">
//             <p style={styles.introText}>
//               In this policy, <strong>"we", "us", "our", "Bank"</strong> or <strong>"Janaseva Bank"</strong> means Janaseva Sahakari Bank Ltd. Hadapsar, Pune and <strong>"you", "your"</strong> or <strong>"yours"</strong> means the persons to whom this policy applies. This policy governs the way in which the Bank collects, uses, discloses, stores, secures, and disposes of personal information.
//             </p>
//           </div>

//           {sections.map((sec, i) => (
//             <section key={sec.id} id={sec.id} style={styles.section} className="section-card">
//               <div style={styles.sectionHeader}>
//                 <span style={styles.sectionIcon}>{sec.icon}</span>
//                 <div>
//                   <span style={styles.sectionNum}>0{i + 1}</span>
//                   <h2 style={styles.sectionTitle}>{sec.title}</h2>
//                 </div>
//               </div>

//               {sec.content && <p style={styles.sectionText}>{sec.content}</p>}

//               {sec.items && (
//                 <div style={styles.grid}>
//                   {sec.items.map((item, j) => (
//                     <div key={j} style={styles.infoCard} className="info-card">
//                       <h4 style={styles.infoLabel}>{item.label}</h4>
//                       <p style={styles.infoDesc}>{item.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {sec.bullets && (
//                 <ul style={styles.bulletList}>
//                   {sec.bullets.map((b, j) => (
//                     <li key={j} style={styles.bulletItem}>
//                       <span style={styles.bulletDot} />
//                       <span>{b}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {sec.email && (
//                 <a href={`mailto:${sec.email}`} style={styles.emailLink} className="email-link">
//                   {sec.email}
//                 </a>
//               )}
//             </section>
//           ))}
//         </main>
//       </div>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         <div style={styles.footerInner}>
//           <span style={styles.footerLogo}>Janaseva Sahakari Bank Ltd.</span>
//           <span style={styles.footerSep}>·</span>
//           <span style={styles.footerAddr}>Hadapsar, Pune</span>
//           <span style={styles.footerSep}>·</span>
//           <a href="mailto:it@janasevabankpune.com" style={styles.footerEmail}>it@janasevabankpune.com</a>
//         </div>
//         <p style={styles.footerNote}>© {new Date().getFullYear()} Janaseva Sahakari Bank Ltd. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

// const styles = {
//   root: {
   
//     background: '#f5f3ee',
//     minHeight: '100vh',
//     color: '#1a1209',
//   },
//   header: {
//     position: 'sticky', top: 0, zIndex: 100,
//     background: 'rgba(245,243,238,0.85)',
//     backdropFilter: 'blur(12px)',
//     borderBottom: '1px solid transparent',
//     transition: 'border-color 0.3s, box-shadow 0.3s',
//     padding: '0 2rem',
//   },
//   headerScrolled: {
//     borderBottom: '1px solid #d4c9a8',
//     boxShadow: '0 2px 24px rgba(26,18,9,0.06)',
//   },
//   headerInner: {
//     maxWidth: 1100, margin: '0 auto',
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     height: 64,
//   },
//   logo: { display: 'flex', alignItems: 'center', gap: 10 },
//   logoMark: {
//     width: 36, height: 36, borderRadius: 8,
//     background: '#1a4d2e', color: '#f5f3ee',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontWeight: 700, fontSize: 18, fontFamily: 'Georgia, serif',
//     lineHeight: '36px', textAlign: 'center',
//   },
//   logoText: { fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 15, color: '#1a1209' },
//   badge: {
//     fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
//     background: '#1a4d2e', color: '#c8e6c9', padding: '4px 12px',
//     borderRadius: 100, textTransform: 'uppercase',
//   },
//   hero: {
//     position: 'relative', overflow: 'hidden',
//     background: '#1a4d2e',
//     padding: '80px 2rem 80px',
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     gap: 40,
//   },
//   heroBg: {
//     position: 'absolute', inset: 0,
//     backgroundImage: 'radial-gradient(ellipse at 70% 50%, #2d6a4f 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #0d2b1a 0%, transparent 50%)',
//     pointerEvents: 'none',
//   },
//   heroContent: { position: 'relative', maxWidth: 600, flex: 1, padding: '0 1rem' },
//   heroEyebrow: {
//     fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
//     color: '#81c784', marginBottom: 16, fontFamily: 'Georgia, serif',
//   },
//   heroTitle: {
//     fontSize: 'clamp(2rem, 5vw, 3.5rem)',
//     fontFamily: 'Georgia, serif', fontWeight: 700, lineHeight: 1.15,
//     color: '#f5f3ee', margin: '0 0 20px',
//   },
//   heroSub: {
//     fontSize: 16, lineHeight: 1.7, color: '#a5d6a7', maxWidth: 480,
//     margin: '0 0 28px',
//   },
//   heroMeta: { display: 'flex', flexWrap: 'wrap', gap: 8 },
//   metaTag: {
//     fontSize: 12, padding: '5px 12px', borderRadius: 100,
//     border: '1px solid #4caf50', color: '#81c784',
//     letterSpacing: '0.06em',
//   },
//   heroGraphic: {
//     position: 'relative', flexShrink: 0,
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     width: 160, height: 160,
//   },
//   shield: {
//     fontSize: 80, lineHeight: 1,
//     filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))',
//     animation: 'floatShield 4s ease-in-out infinite',
//   },
//   layout: {
//     maxWidth: 1100, margin: '0 auto', padding: '48px 2rem',
//     display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40,
//   },
//   sidebar: {
//     position: 'sticky', top: 80, height: 'fit-content',
//   },
//   sidebarLabel: {
//     fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
//     color: '#8a7a5a', marginBottom: 12, fontWeight: 600,
//   },
//   navBtn: {
//     display: 'flex', alignItems: 'center', gap: 8,
//     width: '100%', textAlign: 'left',
//     padding: '9px 12px', borderRadius: 8,
//     border: 'none', background: 'transparent', cursor: 'pointer',
//     color: '#3d3020', transition: 'all 0.2s',
//     marginBottom: 2,
//   },
//   navBtnActive: {
//     background: '#1a4d2e', color: '#c8e6c9',
//   },
//   navIcon: { fontSize: 14, flexShrink: 0 },
//   navTitle: { fontSize: 13, fontFamily: 'Georgia, serif', lineHeight: 1.3 },
//   main: { minWidth: 0 },
//   introCard: {
//     background: '#fff', borderRadius: 16, padding: '28px 32px',
//     border: '1px solid #e2d9c2', marginBottom: 32,
//     borderLeft: '4px solid #1a4d2e',
//   },
//   introText: { fontSize: 15, lineHeight: 1.8, color: '#3d3020', margin: 0 },
//   section: {
//     background: '#fff', borderRadius: 16,
//     padding: '32px', marginBottom: 24,
//     border: '1px solid #e2d9c2',
//     transition: 'box-shadow 0.25s, transform 0.25s',
//   },
//   sectionHeader: {
//     display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20,
//   },
//   sectionIcon: {
//     fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2,
//   },
//   sectionNum: {
//     display: 'block', fontSize: 11, letterSpacing: '0.1em',
//     color: '#1a4d2e', fontWeight: 700, textTransform: 'uppercase',
//     marginBottom: 2,
//   },
//   sectionTitle: {
//     fontSize: 22, fontFamily: 'Georgia, serif', fontWeight: 700,
//     color: '#1a1209', margin: 0,
//   },
//   sectionText: { fontSize: 15, lineHeight: 1.8, color: '#3d3020', margin: 0 },
//   grid: {
//     display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
//     gap: 14, marginTop: 4,
//   },
//   infoCard: {
//     background: '#f5f3ee', borderRadius: 10, padding: '16px 18px',
//     border: '1px solid #e2d9c2', transition: 'all 0.2s',
//   },
//   infoLabel: {
//     fontSize: 13, fontWeight: 700, color: '#1a4d2e',
//     marginBottom: 6, marginTop: 0, fontFamily: 'Georgia, serif',
//   },
//   infoDesc: { fontSize: 13, lineHeight: 1.65, color: '#5c4e32', margin: 0 },
//   bulletList: { listStyle: 'none', padding: 0, margin: '12px 0 0', },
//   bulletItem: {
//     display: 'flex', alignItems: 'flex-start', gap: 12,
//     padding: '10px 0', borderBottom: '1px solid #f0ebe0',
//     fontSize: 15, lineHeight: 1.7, color: '#3d3020',
//   },
//   bulletDot: {
//     width: 8, height: 8, borderRadius: '50%', background: '#1a4d2e',
//     flexShrink: 0, marginTop: 7,
//   },
//   emailLink: {
//     display: 'inline-block', marginTop: 16,
//     color: '#1a4d2e', fontWeight: 600, fontSize: 15,
//     textDecoration: 'none', borderBottom: '2px solid #1a4d2e',
//     paddingBottom: 2, transition: 'opacity 0.2s',
//   },
//   footer: {
//     background: '#1a1209', color: '#8a7a5a',
//     padding: '32px 2rem', textAlign: 'center',
//   },
//   footerInner: {
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     flexWrap: 'wrap', gap: 8, marginBottom: 8,
//   },
//   footerLogo: { color: '#c8b99a', fontWeight: 600, fontFamily: 'Georgia, serif' },
//   footerSep: { color: '#5c4e32' },
//   footerAddr: { color: '#8a7a5a' },
//   footerEmail: { color: '#81c784', textDecoration: 'none', fontSize: 14 },
//   footerNote: { fontSize: 12, color: '#5c4e32', margin: '8px 0 0' },
// }

// const css = `
//   @keyframes floatShield {
//     0%, 100% { transform: translateY(0px); }
//     50% { transform: translateY(-12px); }
//   }
//   .nav-btn:hover {
//     background: #e8f5e9 !important;
//     color: #1a4d2e !important;
//   }
//   .section-card:hover {
//     box-shadow: 0 8px 40px rgba(26,77,46,0.08);
//     transform: translateY(-2px);
//   }
//   .info-card:hover {
//     background: #eef7ee !important;
//     border-color: #a5d6a7 !important;
//   }
//   .email-link:hover { opacity: 0.7; }
//   @media (max-width: 720px) {
//     .layout { grid-template-columns: 1fr !important; }
//     .sidebar { position: static !important; display: none; }
//     .hero { flex-direction: column !important; }
//     .heroGraphic { display: none !important; }
//   }
// `


// import { useState } from "react"

// const sections = [
//   {
//     id: "applicability",
//     icon: "⚖️",
//     title: "Applicability",
//     content: `This Policy applies to personal information and sensitive personal data collected by the Bank or its affiliates — directly from customers or through online portals, mobile apps, and electronic communications, as well as any information collected by the Bank's server from the customer's browser. It complies with the Information Technology Act 2000 and IT Rules 2011.`,
//   },
//   {
//     id: "collected",
//     icon: "📋",
//     title: "Info Collected",
//     items: [
//       { label: "App Settings", desc: "Data stored locally on your device — your activities and preferences within the App." },
//       { label: "Contact Info", desc: "Name, address, date of birth, phone, mobile, email, last 6 digits of payment card." },
//       { label: "Device ID", desc: "IP address or unique hardware identifier (e.g. IMEI) for any device you use." },
//       { label: "Financial Info", desc: "Your accounts, balances, and transaction history." },
//       { label: "Activity", desc: "Pages visited, duration, searches, transactions, messages to/from server." },
//       { label: "Usage", desc: "Device type, browser, OS, search terms, areas accessed, and time of use." },
//       { label: "Location", desc: "Geographic data via GPS, WiFi, network signal, or user-entered input." },
//     ],
//   },
//   {
//     id: "purpose",
//     icon: "🎯",
//     title: "Purpose",
//     content: `The Bank collects and uses financial and personal information for specific business purposes, purposes designated by the Bank, or lawful purposes to comply with applicable laws and regulations. The authenticity of personal information provided by the customer shall not be the responsibility of the Bank.`,
//   },
//   {
//     id: "disclosure",
//     icon: "🔒",
//     title: "Disclosure",
//     content: "The Bank shall not divulge personal information for cross-selling or any unauthorized purposes. Disclosure occurs only in these cases:",
//     bullets: [
//       "Where disclosure has been agreed upon in a written contract between Bank and customer.",
//       "Where required to disclose to a third party on a need-to-know basis — with equivalent confidentiality obligations.",
//       "Where disclosure is requested by a local authority under applicable law or regulation.",
//     ],
//   },
//   {
//     id: "security",
//     icon: "🛡️",
//     title: "Security",
//     content: `Our Bank is strongly committed to protecting customer privacy and has taken all necessary and reasonable measures to protect the confidentiality of customer information. Security is maintained through physical, electronic, and procedural safeguards meeting applicable laws. The Bank follows standard encryption norms for data transmission and ensures employees and affiliates respect confidentiality.`,
//   },
//   {
//     id: "cookies",
//     icon: "🍪",
//     title: "Cookies",
//     content: `A browser cookie is a small piece of data stored on your device to help websites and apps remember information about you. Other technologies including web storage and device identifiers may be used similarly. By using our website and apps, you agree to these cookies. You may change browser settings to refuse or remove cookies. We are not responsible for cookies placed by other websites.`,
//   },
//   {
//     id: "changes",
//     icon: "📝",
//     title: "Changes",
//     content: `The Bank may, from time to time, update this Policy. The effective date of this Policy indicates the last time it was revised or materially changed. Continued use of the Bank's services following any changes constitutes your acceptance of the revised Policy.`,
//   },
//   {
//     id: "contact",
//     icon: "✉️",
//     title: "Contact",
//     content: `For any questions, discrepancies, or grievances regarding your personal information — including requests for modification — please reach out to our dedicated IT team. We aim to respond to all privacy-related enquiries within a reasonable timeframe.`,
//     email: "it@janasevabankpune.com",
//   },
// ]

// export default function PrivacyPolicy() {
//   const [active, setActive] = useState(0)
//   const sec = sections[active]

//   return (
//     <div style={s.root}>
//       <style>{css}</style>

//       {/* Left Panel */}
//       <aside style={s.left}>
//         <div style={s.brand}>
//           <div style={s.logoMark}>J</div>
//           <div>
//             <div style={s.bankName}>Janaseva Bank</div>
//             <div style={s.bankSub}>Hadapsar, Pune</div>
//           </div>
//         </div>

//         <div style={s.divider} />

//         <p style={s.navLabel}>Policy Sections</p>

//         <nav style={s.nav}>
//           {sections.map((sec, i) => (
//             <button
//               key={sec.id}
//               onClick={() => setActive(i)}
//               className="tab-btn"
//               style={{
//                 ...s.tabBtn,
//                 ...(active === i ? s.tabBtnActive : {}),
//               }}
//             >
//               <span style={s.tabIcon}>{sec.icon}</span>
//               <span style={s.tabLabel}>{sec.title}</span>
//               {active === i && <span style={s.tabArrow}>›</span>}
//             </button>
//           ))}
//         </nav>

//         <div style={s.leftFooter}>
//           <span style={s.compliance}>IT Act 2000 · IT Rules 2011</span>
//         </div>
//       </aside>

//       {/* Right Panel */}
//       <main style={s.right}>
//         {/* Top bar */}
//         <div style={s.topBar}>
//           <div style={s.topBreadcrumb}>
//             <span style={s.topHome}>Privacy Policy</span>
//             <span style={s.topSep}>/</span>
//             <span style={s.topCurrent}>{sec.title}</span>
//           </div>
//           <div style={s.topNum}>{String(active + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</div>
//         </div>

//         {/* Content area */}
//         <div style={s.content} key={active} className="content-fade">
//           <div style={s.contentHeader}>
//             <span style={s.contentIcon}>{sec.icon}</span>
//             <h2 style={s.contentTitle}>{sec.title}</h2>
//           </div>

//           {sec.content && <p style={s.contentText}>{sec.content}</p>}

//           {sec.items && (
//             <div style={s.grid}>
//               {sec.items.map((item, i) => (
//                 <div key={i} style={s.card} className="grid-card">
//                   <div style={s.cardDot} />
//                   <div>
//                     <div style={s.cardLabel}>{item.label}</div>
//                     <div style={s.cardDesc}>{item.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {sec.bullets && (
//             <ul style={s.bullets}>
//               {sec.bullets.map((b, i) => (
//                 <li key={i} style={s.bullet}>
//                   <span style={s.bulletNum}>{i + 1}</span>
//                   <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {sec.email && (
//             <div style={s.emailBox}>
//               <span style={s.emailLabel}>Write to us at</span>
//               <a href={`mailto:${sec.email}`} style={s.emailLink} className="email-hover">
//                 {sec.email}
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Bottom nav */}
//         <div style={s.bottomNav}>
//           <button
//             onClick={() => setActive(Math.max(0, active - 1))}
//             disabled={active === 0}
//             style={{ ...s.navArrowBtn, opacity: active === 0 ? 0.3 : 1 }}
//             className="arrow-btn"
//           >
//             ← Previous
//           </button>

//           <div style={s.dots}>
//             {sections.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 style={{ ...s.dot, ...(i === active ? s.dotActive : {}) }}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => setActive(Math.min(sections.length - 1, active + 1))}
//             disabled={active === sections.length - 1}
//             style={{ ...s.navArrowBtn, opacity: active === sections.length - 1 ? 0.3 : 1 }}
//             className="arrow-btn"
//           >
//             Next →
//           </button>
//         </div>
//       </main>
//     </div>
//   )
// }

// const s = {
//   root: {
//     display: "flex",
//     height: "100vh",
//     width: "100vw",
//     overflow: "hidden",
//     fontFamily: "Georgia, 'Times New Roman', serif",
//     background: "#0f1f14",
//   },
//   left: {
//     width: 260,
//     flexShrink: 0,
//     background: "#0f1f14",
//     display: "flex",
//     flexDirection: "column",
//     padding: "28px 0",
//     borderRight: "1px solid #1e3a24",
//   },
//   brand: {
//     display: "flex", alignItems: "center", gap: 12,
//     padding: "0 24px 0",
//   },
//   logoMark: {
//     width: 40, height: 40, borderRadius: 10,
//     background: "linear-gradient(135deg, #2d6a4f, #1b4332)",
//     color: "#c8e6c9", fontSize: 20, fontWeight: 700,
//     display: "flex", alignItems: "center", justifyContent: "center",
//     boxShadow: "0 4px 16px rgba(45,106,79,0.4)",
//     flexShrink: 0,
//   },
//   bankName: { fontSize: 14, fontWeight: 700, color: "#e8f5e9", letterSpacing: "0.01em" },
//   bankSub: { fontSize: 11, color: "#4caf50", marginTop: 1, letterSpacing: "0.04em" },
//   divider: { height: 1, background: "#1e3a24", margin: "24px 0 20px" },
//   navLabel: {
//     fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
//     color: "#4caf50", padding: "0 24px", marginBottom: 10, fontWeight: 600,
//   },
//   nav: { flex: 1, overflowY: "auto", padding: "0 12px" },
//   tabBtn: {
//     display: "flex", alignItems: "center", gap: 10,
//     width: "100%", padding: "10px 12px",
//     border: "none", borderRadius: 8, cursor: "pointer",
//     background: "transparent", color: "#7a9e7e",
//     textAlign: "left", transition: "all 0.18s",
//     marginBottom: 2,
//   },
//   tabBtnActive: {
//     background: "rgba(45,106,79,0.25)",
//     color: "#a5d6a7",
//   },
//   tabIcon: { fontSize: 15, flexShrink: 0 },
//   tabLabel: { fontSize: 13, flex: 1 },
//   tabArrow: { fontSize: 18, color: "#4caf50", fontWeight: 300 },
//   leftFooter: {
//     padding: "20px 24px 0",
//     borderTop: "1px solid #1e3a24",
//     marginTop: 8,
//   },
//   compliance: { fontSize: 10, color: "#2d6a4f", letterSpacing: "0.06em" },

//   right: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     background: "#f7f5f0",
//     overflow: "hidden",
//   },
//   topBar: {
//     display: "flex", alignItems: "center", justifyContent: "space-between",
//     padding: "20px 40px",
//     borderBottom: "1px solid #e2d9c2",
//     background: "#fff",
//     flexShrink: 0,
//   },
//   topBreadcrumb: { display: "flex", alignItems: "center", gap: 8 },
//   topHome: { fontSize: 13, color: "#8a7a5a" },
//   topSep: { fontSize: 13, color: "#ccc" },
//   topCurrent: { fontSize: 13, fontWeight: 700, color: "#1a1209" },
//   topNum: { fontSize: 12, color: "#bbb", letterSpacing: "0.08em", fontFamily: "monospace" },

//   content: {
//     flex: 1,
//     padding: "36px 40px",
//     overflowY: "auto",
//   },
//   contentHeader: {
//     display: "flex", alignItems: "center", gap: 14, marginBottom: 24,
//   },
//   contentIcon: { fontSize: 36, lineHeight: 1 },
//   contentTitle: {
//     fontSize: 30, fontWeight: 700, color: "#1a1209",
//     fontFamily: "Georgia, serif", margin: 0,
//   },
//   contentText: {
//     fontSize: 15, lineHeight: 1.85, color: "#3d3020",
//     maxWidth: 680, margin: 0,
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//     gap: 12, marginTop: 4,
//   },
//   card: {
//     background: "#fff", border: "1px solid #e2d9c2",
//     borderRadius: 10, padding: "14px 16px",
//     display: "flex", gap: 12, alignItems: "flex-start",
//     transition: "all 0.18s",
//   },
//   cardDot: {
//     width: 8, height: 8, borderRadius: "50%",
//     background: "#2d6a4f", flexShrink: 0, marginTop: 5,
//   },
//   cardLabel: { fontSize: 12, fontWeight: 700, color: "#1a4d2e", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.05em" },
//   cardDesc: { fontSize: 13, color: "#5c4e32", lineHeight: 1.6 },
//   bullets: { listStyle: "none", padding: 0, margin: "8px 0 0", maxWidth: 640 },
//   bullet: {
//     display: "flex", alignItems: "flex-start", gap: 14,
//     padding: "12px 0", borderBottom: "1px solid #ede8dd",
//     fontSize: 14, lineHeight: 1.7, color: "#3d3020",
//   },
//   bulletNum: {
//     width: 24, height: 24, borderRadius: "50%",
//     background: "#1a4d2e", color: "#c8e6c9",
//     fontSize: 12, fontWeight: 700,
//     display: "flex", alignItems: "center", justifyContent: "center",
//     flexShrink: 0,
//   },
//   emailBox: {
//     marginTop: 24, background: "#1a4d2e",
//     borderRadius: 12, padding: "20px 24px",
//     display: "inline-flex", flexDirection: "column", gap: 6,
//   },
//   emailLabel: { fontSize: 11, color: "#81c784", letterSpacing: "0.1em", textTransform: "uppercase" },
//   emailLink: {
//     fontSize: 16, color: "#e8f5e9", fontWeight: 600,
//     textDecoration: "none", letterSpacing: "0.01em",
//   },

//   bottomNav: {
//     display: "flex", alignItems: "center", justifyContent: "space-between",
//     padding: "16px 40px",
//     borderTop: "1px solid #e2d9c2",
//     background: "#fff",
//     flexShrink: 0,
//   },
//   navArrowBtn: {
//     border: "1px solid #e2d9c2", borderRadius: 8,
//     background: "transparent", color: "#3d3020",
//     padding: "8px 18px", fontSize: 13, cursor: "pointer",
//     transition: "all 0.18s", fontFamily: "Georgia, serif",
//   },
//   dots: { display: "flex", gap: 6 },
//   dot: {
//     width: 8, height: 8, borderRadius: "50%",
//     background: "#ddd", border: "none", cursor: "pointer",
//     padding: 0, transition: "all 0.18s",
//   },
//   dotActive: { background: "#1a4d2e", width: 22, borderRadius: 4 },
// }

// const css = `
//   * { box-sizing: border-box; margin: 0; padding: 0; }
//   .tab-btn:hover { background: rgba(45,106,79,0.15) !important; color: #a5d6a7 !important; }
//   .arrow-btn:hover:not(:disabled) { background: #1a4d2e !important; color: #e8f5e9 !important; border-color: #1a4d2e !important; }
//   .grid-card:hover { border-color: #a5d6a7 !important; box-shadow: 0 4px 16px rgba(26,77,46,0.1); transform: translateY(-2px); }
//   .email-hover:hover { text-decoration: underline !important; }
//   .content-fade { animation: fadeSlide 0.25s ease; }
//   @keyframes fadeSlide {
//     from { opacity: 0; transform: translateX(12px); }
//     to { opacity: 1; transform: translateX(0); }
//   }
//   ::-webkit-scrollbar { width: 4px; }
//   ::-webkit-scrollbar-track { background: transparent; }
//   ::-webkit-scrollbar-thumb { background: #c8d8c8; border-radius: 4px; }
// `

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 md:px-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3163] mb-8 text-center">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

        {/* Intro */}
        <p>
          In this policy, <strong>“we”, “us”, “our”, “Bank”</strong> or{" "}
          <strong>“Janaseva Bank”</strong> means Janaseva Sahakari Bank Ltd. Hadapsar, Pune 
          and <strong>“you”, “your”</strong> means the persons to whom this policy applies.
          As a part of our ongoing efforts to ensure compliance with modern banking approach, 
          customer trust, security-oriented service, and banking services, the Bank has adopted 
          this Privacy Policy aimed at protecting individual’s personal information entrusted 
          and disclosed to Janaseva Sahakari Bank Ltd. Hadapsar Pune (the "Policy").
        </p>

        {/* Applicability */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Applicability
        </h2>
        <p>
          This Policy governs how the Bank collects, uses, discloses, stores, secures, 
          and disposes of personal information. It applies to personal information collected 
          directly from the customer or through online portals, mobile apps, and electronic communications.
        </p>

        {/* Personal Information */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Personal Information Collected
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>App Settings:</strong> Data stored locally on your device about your activities.
          </li>
          <li>
            <strong>Contact Information:</strong> Name, address, date of birth, phone number, 
            email, last six digits of payment card, etc.
          </li>
          <li>
            <strong>Device Identifier:</strong> IP address, hardware ID (IMEI), etc.
          </li>
          <li>
            <strong>Financial Information:</strong> Account balances and transactions.
          </li>
          <li>
            <strong>Tracking Activity:</strong> Pages visited, searches, transactions, messages.
          </li>
          <li>
            <strong>Usage Information:</strong> Device type, browser, OS, search terms, etc.
          </li>
          <li>
            <strong>Location Information:</strong> GPS, WiFi-based, network-based, or user-entered.
          </li>
        </ul>

        {/* Purpose of Collection */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Purpose of Collection and Use
        </h2>
        <p>
          The Bank collects and uses personal and financial information for specific business 
          purposes, lawful compliance, and to provide secure banking services. Authenticity of 
          the information is the responsibility of the customer.
        </p>

        {/* Disclosure */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Disclosure of Personal Information
        </h2>
        <p>
          The Bank will not disclose personal information for cross-selling or any other purposes 
          except when agreed in writing, required by law, or necessary for service delivery under 
          confidentiality standards.
        </p>

        {/* Security */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Reasonable Security Practices
        </h2>
        <p>
          The Bank maintains physical, electronic, and procedural safeguards, including encryption, 
          to ensure confidentiality and security of personal information.
        </p>

        {/* Cookies */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Cookie Policy
        </h2>
        <p>
          The Bank may use cookies and similar technologies for app/website functionality. Users 
          can disable cookies in browser settings, but the Bank is not responsible for third-party cookies.
        </p>

        {/* Notice of Change */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Notice of Change
        </h2>
        <p>
          The Bank may revise this Policy from time to time. The effective date indicates the last 
          revision or material change.
        </p>

        {/* Contact */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#F47012] mt-4">
          Response to Enquiries and Complaints
        </h2>
        <p>
          For any queries, discrepancies, or grievances regarding personal information, 
          please write to: <a href="mailto:it@janasevabankpune.com" className="text-blue-600 underline">it@janasevabankpune.com</a>
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;