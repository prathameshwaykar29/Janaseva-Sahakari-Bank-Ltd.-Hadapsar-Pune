
// import React, { useState, useEffect, useCallback } from 'react'
// import { FaUniversalAccess } from "react-icons/fa6";

// const AccessibilityPanel = () => {
//     const [open, setOpen] = useState(false);

//     const [settings, setSettings] = useState({
//         invertBrightness: false,
//         contrast: false,
//         grayscale: false,
//         fontSize: 0,
//         textSpacing: false,
//         lineHeight: false,
//         zoom: 100,
//         bigCursor: false,
//         underlineLinks: false,
//         hideImages: false,
//         showImageTitles: false,
//     });

//     const applySettings = useCallback((s) => {
//         const body = document.body;

//         // Remove all acc classes
//         body.classList.remove(
//             'acc-invert', 'acc-contrast', 'acc-grayscale',
//             'acc-font-xxs', 'acc-font-xs', 'acc-font-sm',
//             'acc-font-md', 'acc-font-lg', 'acc-font-xl',
//             'acc-text-spacing', 'acc-line-height',
//             'acc-zoom-90', 'acc-zoom-95', 'acc-zoom-105',
//             'acc-zoom-110',
//             'acc-big-cursor', 'acc-underline-links',
//             'acc-hide-images', 'acc-show-img-titles'
//         );

//         if (s.invertBrightness) body.classList.add('acc-invert');
//         if (s.contrast) body.classList.add('acc-contrast');
//         if (s.grayscale) body.classList.add('acc-grayscale');

//         const fontMap = {
//             '-2': 'acc-font-xxs', '-1': 'acc-font-xs',
//             '1': 'acc-font-sm', '2': 'acc-font-md',
//             '3': 'acc-font-lg', '4': 'acc-font-xl',
//         };
//         if (fontMap[s.fontSize]) body.classList.add(fontMap[s.fontSize]);

//         if (s.textSpacing) body.classList.add('acc-text-spacing');
//         if (s.lineHeight) body.classList.add('acc-line-height');

//         const zoomMap = {
//             90: 'acc-zoom-90', 95: 'acc-zoom-95',
//             105: 'acc-zoom-105', 110: 'acc-zoom-110',

//         };
//         if (zoomMap[s.zoom]) body.classList.add(zoomMap[s.zoom]);

//         if (s.bigCursor) body.classList.add('acc-big-cursor');
//         if (s.underlineLinks) body.classList.add('acc-underline-links');
//         if (s.hideImages) body.classList.add('acc-hide-images');
//         if (s.showImageTitles) body.classList.add('acc-show-img-titles');
//     }, []);

//     useEffect(() => {
//         applySettings(settings);
//     }, [settings, applySettings]);

//     // Inject global CSS once on mount
//     useEffect(() => {
//         const styleId = 'acc-global-styles';
//         if (document.getElementById(styleId)) return;
//         const style = document.createElement('style');
//         style.id = styleId;
//         style.textContent = `
//             .acc-invert { filter: invert(1) brightness(1.1); }
//             .acc-contrast { filter: contrast(1.75); }
//             .acc-grayscale { filter: grayscale(1); }
//             .acc-invert.acc-contrast { filter: invert(1) brightness(1.1) contrast(1.75); }
//             .acc-invert.acc-grayscale { filter: invert(1) brightness(1.1) grayscale(1); }
//             .acc-contrast.acc-grayscale { filter: contrast(1.75) grayscale(1); }
//             .acc-invert.acc-contrast.acc-grayscale { filter: invert(1) brightness(1.1) contrast(1.75) grayscale(1); }
//             .acc-font-xxs * { font-size: 12px !important; }
//             .acc-font-xs * { font-size: 14px !important; }
//             .acc-font-sm * { font-size: 18px !important; }
//             .acc-font-md * { font-size: 20px !important; }

//             .acc-text-spacing * { letter-spacing: 0.12em !important; word-spacing: 0.16em !important; }
//             .acc-line-height * { line-height: 2 !important; }
//             .acc-zoom-90 { zoom: 90%; }
//             .acc-zoom-95 { zoom: 95%; }
//             .acc-zoom-105 { zoom: 105%; }
//             .acc-zoom-110 { zoom: 110%; }

//             .acc-big-cursor, .acc-big-cursor * {
//                 cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M8 2 L8 34 L16 26 L22 38 L26 36 L20 24 L32 24 Z' fill='black' stroke='white' stroke-width='2'/%3E%3C/svg%3E") 4 2, auto !important;
//             }
//             .acc-underline-links a { text-decoration: underline !important; text-underline-offset: 3px; }
//             .acc-hide-images img { visibility: hidden !important; }
//         `;
//         document.head.appendChild(style);
//     }, []);

//     const toggle = (key) =>
//         setSettings(prev => ({ ...prev, [key]: !prev[key] }));

//     const adjustFontSize = (dir) =>
//         setSettings(prev => ({
//             ...prev,
//             fontSize: Math.min(4, Math.max(-2, prev.fontSize + dir))
//         }));

//     const adjustZoom = (dir) =>
//         setSettings(prev => ({
//             ...prev,
//             zoom: Math.min(150, Math.max(80, prev.zoom + dir * 10))
//         }));

//     const reset = () => {
//         setSettings({
//             invertBrightness: false, contrast: false, grayscale: false,
//             fontSize: 0, textSpacing: false, lineHeight: false,
//             zoom: 100, bigCursor: false, underlineLinks: false,
//             hideImages: false, showImageTitles: false,
//         });
//     };

//     const fontSizeLabel = () => `${16 + settings.fontSize * 2}px`;

//     const ToggleBtn = ({ label, stateKey, icon }) => (
//         <button
//             onClick={() => toggle(stateKey)}
//             className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all duration-200 cursor-pointer
//                 ${settings[stateKey]
//                     ? 'bg-blue-50 border-blue-800 text-blue-900'
//                     : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
//                 }`}
//         >
//             <span className="text-base leading-none flex-shrink-0">{icon}</span>
//             <span className="flex-1 text-left leading-tight">{label}</span>
//             <span className={`text-xs font-bold px-1.5 py-0.5 rounded leading-none
//                 ${settings[stateKey] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-500'}`}>
//                 {settings[stateKey] ? 'ON' : 'OFF'}
//             </span>
//         </button>
//     );

//     const SectionLabel = ({ children }) => (
//         <p className="text-xs font-bold tracking-widest uppercase text-blue-900 opacity-60 mt-3 mb-0.5 pb-1 border-b border-gray-200">
//             {children}
//         </p>
//     );

//     const StepperRow = ({ icon, label, onDec, onInc, value, decDisabled, incDisabled }) => (
//         <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-lg">
//             <span className="text-base leading-none flex-shrink-0">{icon}</span>
//             <span className="flex-1 text-sm font-medium text-gray-700">{label}</span>
//             <button
//                 onClick={onDec}
//                 disabled={decDisabled}
//                 className="w-7 h-7 rounded-md border-2 border-blue-200 bg-white cursor-pointer text-lg font-bold text-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed leading-none"
//             >−</button>
//             <span className="text-xs font-bold text-blue-900 w-10 text-center">{value}</span>
//             <button
//                 onClick={onInc}
//                 disabled={incDisabled}
//                 className="w-7 h-7 rounded-md border-2 border-blue-200 bg-white cursor-pointer text-lg font-bold text-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed leading-none"
//             >+</button>
//         </div>
//     );

//     return (
//         <>
//             {/* Trigger Button */}
//             <button
//                 onClick={() => setOpen(true)}
//                 className="bg-transparent border-none cursor-pointer flex items-center text-xl p-1 text-current hover:text-yellow-500 transition-colors duration-200"
//                 aria-label="Open Accessibility Options"
//                 title="Accessibility"
//             >
//                 <FaUniversalAccess aria-hidden="true" />
//             </button>

//             {/* Backdrop Overlay */}
//             {open && (
//                 <div
//                     className="fixed inset-0  bg-opacity-40 z-[9998]"
//                     onClick={() => setOpen(false)}
//                 />
//             )}

//             {/* Side Panel */}
//             <div
//                 className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-[9999] flex flex-col border-l-4 border-blue-900 transition-transform duration-300 ease-in-out
//                     ${open ? 'translate-x-0' : 'translate-x-full'}`}
//                 role="dialog"
//                 aria-modal="true"
//                 aria-label="Accessibility Options Panel"
//             >
//                 {/* Panel Header */}
//                 <div className="bg-blue-900 text-white px-4 py-4 flex items-center justify-between flex-shrink-0">
//                     <h2 className="m-0 text-base font-bold tracking-widest uppercase flex items-center gap-2 text-white">
//                         <FaUniversalAccess />
//                         Accessibility
//                     </h2>
//                     <button
//                         className="bg-white bg-opacity-20 border-none text-black w-8 h-8 rounded-full cursor-pointer flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 text-sm font-bold"
//                         onClick={() => setOpen(false)}
//                         aria-label="Close Accessibility Panel"
//                     >
//                         ✕
//                     </button>
//                 </div>

//                 {/* Scrollable Content */}
//                 <div className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-1.5">

//                     <SectionLabel>👁 Vision</SectionLabel>
//                     <ToggleBtn label="Invert Brightness" stateKey="invertBrightness" icon="🔆" />
//                     <ToggleBtn label="High Contrast" stateKey="contrast" icon="⬛" />
//                     <ToggleBtn label="Grayscale" stateKey="grayscale" icon="🩶" />

//                     <SectionLabel>🔤 Text</SectionLabel>
//                     <StepperRow
//                         icon="🔡" label="Font Size"
//                         onDec={() => adjustFontSize(-1)} onInc={() => adjustFontSize(1)}
//                         value={fontSizeLabel()}
//                         decDisabled={settings.fontSize <= -2} incDisabled={settings.fontSize >= 2}
//                     />
//                     <ToggleBtn label="Text Spacing" stateKey="textSpacing" icon="↔️" />
//                     <ToggleBtn label="Increase Line Height" stateKey="lineHeight" icon="↕️" />

//                     <SectionLabel>📄 Page</SectionLabel>
//                     <StepperRow
//                         icon="🔍" label="Page Zoom"
//                         onDec={() => adjustZoom(-1)} onInc={() => adjustZoom(1)}
//                         value={`${settings.zoom}%`}
//                         decDisabled={settings.zoom <= 90} incDisabled={settings.zoom >= 110}
//                     />

//                     <SectionLabel>🖱 Navigation</SectionLabel>
//                     <ToggleBtn label="Big Mouse Cursor" stateKey="bigCursor" icon="🖱️" />
//                     <ToggleBtn label="Underline Links" stateKey="underlineLinks" icon="🔗" />

//                     <SectionLabel>🖼 Media</SectionLabel>
//                     <ToggleBtn label="Hide Images" stateKey="hideImages" icon="🚫" />
//                     <ToggleBtn label="Show Image ALT Text" stateKey="showImageTitles" icon="🏷️" />

//                 </div>

//                 {/* Reset Button */}
//                 <button
//                     className="mx-3 mb-3 mt-1 py-3 bg-blue-900 text-white border-none rounded-lg text-sm font-bold tracking-wider cursor-pointer hover:bg-blue-700 transition-colors duration-200 flex-shrink-0"
//                     onClick={reset}
//                 >
//                     ↺ Reset All Settings
//                 </button>
//             </div>
//         </>
//     );
// };

// export default AccessibilityPanel;





































import React, { useState, useEffect, useCallback } from 'react';
import { FaUniversalAccess } from 'react-icons/fa6';

/* ─────────────────────────────────────────────
   Global CSS – injected once, no inline styles
───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

  /* ── Vision ── */
  .acc-invert                          { filter: invert(1) brightness(1.05) !important; }
  .acc-contrast                        { filter: contrast(2) !important; }
  .acc-grayscale                       { filter: grayscale(1) !important; }
  .acc-invert.acc-contrast             { filter: invert(1) brightness(1.05) contrast(2) !important; }
  .acc-invert.acc-grayscale            { filter: invert(1) brightness(1.05) grayscale(1) !important; }
  .acc-contrast.acc-grayscale          { filter: contrast(2) grayscale(1) !important; }
  .acc-invert.acc-contrast.acc-grayscale { filter: invert(1) brightness(1.05) contrast(2) grayscale(1) !important; }
  .acc-dark-mode                       { background:#111 !important; color:#f0f0f0 !important; }
  .acc-dark-mode *                     { background-color: inherit; color: inherit; }
  .acc-sepia *                         { filter: sepia(0.7); }
  .acc-low-sat                         { filter: saturate(0.3) !important; }

  /* ── Font ── */
  .acc-font-xxs *  { font-size:12px !important; }
  .acc-font-xs  *  { font-size:14px !important; }
  .acc-font-sm  *  { font-size:18px !important; }
  .acc-font-md  *  { font-size:20px !important; }
  .acc-font-lg  *  { font-size:22px !important; }
  .acc-font-xl  *  { font-size:24px !important; }

  /* ── Dyslexia font ── */
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/OpenDyslexic-Regular.otf');
  }
  .acc-dyslexia *  { font-family:'OpenDyslexic', sans-serif !important; }

  /* ── Readability ── */
  .acc-text-spacing *  { letter-spacing:0.14em !important; word-spacing:0.18em !important; }
  .acc-line-height  *  { line-height:2.2 !important; }
  .acc-reading-guide::after {
    content:''; position:fixed; left:0; height:60px; width:100%;
    background:rgba(255,255,0,0.15); pointer-events:none;
    top:var(--acc-guide-y,50%); transform:translateY(-50%); z-index:99997;
  }
  .acc-highlight-focus *:focus {
    outline:4px solid #f59e0b !important; outline-offset:4px !important;
  }
  .acc-word-break * { word-break:break-word !important; overflow-wrap:anywhere !important; }

  /* ── Zoom ── */
  .acc-zoom-80  { zoom:80%; }
  .acc-zoom-90  { zoom:90%; }
  .acc-zoom-110 { zoom:110%; }
  .acc-zoom-120 { zoom:120%; }
  .acc-zoom-130 { zoom:130%; }
  .acc-zoom-140 { zoom:140%; }
  .acc-zoom-150 { zoom:150%; }

  /* ── Motion ── */
  .acc-stop-anim *, .acc-stop-anim *::before, .acc-stop-anim *::after {
    animation:none !important; transition:none !important;
  }

  /* ── Navigation ── */
  .acc-big-cursor, .acc-big-cursor * {
    cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M10 3 L10 40 L19 31 L26 46 L31 43 L24 28 L38 28 Z' fill='%23000' stroke='%23fff' stroke-width='2.5'/%3E%3C/svg%3E") 5 3, auto !important;
  }
  .acc-underline-links a          { text-decoration:underline !important; text-underline-offset:4px !important; }
  .acc-highlight-links a          { background:#fef08a !important; color:#111 !important; padding:0 2px; border-radius:2px; }

  /* ── Media ── */
  .acc-hide-images img            { visibility:hidden !important; }
  .acc-mute-video video           { filter: opacity(0.3) !important; }

  /* ── Page layout ── */
  .acc-readable-width .container,
  .acc-readable-width .container-fluid { max-width:720px !important; margin-inline:auto !important; }
  .acc-left-align *               { text-align:left !important; }

  /* ── Keyboard nav ── */
  .acc-keyboard-nav *:focus       { outline:3px dashed #e11d48 !important; outline-offset:3px !important; }

  /* Scrollbar for panel */
  .acc-scroll::-webkit-scrollbar         { width:4px; }
  .acc-scroll::-webkit-scrollbar-track   { background:#1e1e2e; }
  .acc-scroll::-webkit-scrollbar-thumb   { background:#4c4f6b; border-radius:4px; }
`;

/* ─────────────────────────────────────────────
   Feature definition map
───────────────────────────────────────────── */
const FEATURES = {
  // Vision
  invertBrightness: { label: 'Invert', icon: '☀️', cat: 'vision' },
  contrast:         { label: 'Contrast', icon: '◑', cat: 'vision' },
  grayscale:        { label: 'Grayscale', icon: '🩶', cat: 'vision' },
  sepia:            { label: 'Sepia', icon: '🟫', cat: 'vision' },
  lowSaturation:    { label: 'Low Sat.', icon: '🎨', cat: 'vision' },
  darkMode:         { label: 'Dark Mode', icon: '🌙', cat: 'vision' },
  // Text
  textSpacing:      { label: 'Spacing', icon: '↔', cat: 'text' },
  lineHeight:       { label: 'Line Height', icon: '↕', cat: 'text' },
  dyslexia:         { label: 'Dyslexia Font', icon: '📖', cat: 'text' },
  wordBreak:        { label: 'Word Break', icon: '✂️', cat: 'text' },
  leftAlign:        { label: 'Left Align', icon: '⬅', cat: 'text' },
  // Navigation
  bigCursor:        { label: 'Big Cursor', icon: '🖱', cat: 'nav' },
  underlineLinks:   { label: 'Underline Links', icon: '🔗', cat: 'nav' },
  highlightLinks:   { label: 'Highlight Links', icon: '🟡', cat: 'nav' },
  focusHighlight:   { label: 'Focus Ring', icon: '🎯', cat: 'nav' },
  keyboardNav:      { label: 'Keyboard Nav', icon: '⌨️', cat: 'nav' },
  // Motion & Media
  stopAnimations:   { label: 'Stop Animations', icon: '⏸', cat: 'motion' },
  hideImages:       { label: 'Hide Images', icon: '🖼', cat: 'motion' },
  muteVideos:       { label: 'Mute Videos', icon: '🎬', cat: 'motion' },
  // Layout
  readableWidth:    { label: 'Readable Width', icon: '📏', cat: 'layout' },
  readingGuide:     { label: 'Reading Guide', icon: '📍', cat: 'layout' },
};

const CATEGORIES = [
  { key: 'vision',  label: '👁  Vision',        color: 'from-violet-600 to-indigo-600' },
  { key: 'text',    label: '🔤  Text',           color: 'from-emerald-600 to-teal-600' },
  { key: 'nav',     label: '🖱  Navigation',     color: 'from-amber-500 to-orange-500' },
  { key: 'motion',  label: '⏱  Motion & Media',  color: 'from-rose-500 to-pink-500' },
  { key: 'layout',  label: '📐  Layout',         color: 'from-sky-500 to-cyan-500' },
];

const DEFAULT_STATE = {
  invertBrightness: false, contrast: false, grayscale: false,
  sepia: false, lowSaturation: false, darkMode: false,
  textSpacing: false, lineHeight: false, dyslexia: false,
  wordBreak: false, leftAlign: false,
  bigCursor: false, underlineLinks: false, highlightLinks: false,
  focusHighlight: false, keyboardNav: false,
  stopAnimations: false, hideImages: false, muteVideos: false,
  readableWidth: false, readingGuide: false,
  fontSize: 0,
  zoom: 100,
};

function applyToBody(s) {
  const b = document.body;
  const all = [
    'acc-invert','acc-contrast','acc-grayscale','acc-sepia','acc-low-sat','acc-dark-mode',
    'acc-font-xxs','acc-font-xs','acc-font-sm','acc-font-md','acc-font-lg','acc-font-xl',
    'acc-text-spacing','acc-line-height','acc-dyslexia','acc-word-break','acc-left-align',
    'acc-zoom-80','acc-zoom-90','acc-zoom-110','acc-zoom-120','acc-zoom-130','acc-zoom-140','acc-zoom-150',
    'acc-stop-anim','acc-hide-images','acc-mute-video',
    'acc-big-cursor','acc-underline-links','acc-highlight-links','acc-highlight-focus','acc-keyboard-nav',
    'acc-readable-width','acc-reading-guide',
  ];
  b.classList.remove(...all);

  if (s.invertBrightness) b.classList.add('acc-invert');
  if (s.contrast)         b.classList.add('acc-contrast');
  if (s.grayscale)        b.classList.add('acc-grayscale');
  if (s.sepia)            b.classList.add('acc-sepia');
  if (s.lowSaturation)    b.classList.add('acc-low-sat');
  if (s.darkMode)         b.classList.add('acc-dark-mode');

  const fontMap = { '-2':'acc-font-xxs','-1':'acc-font-xs','1':'acc-font-sm','2':'acc-font-md','3':'acc-font-lg','4':'acc-font-xl' };
  if (fontMap[s.fontSize]) b.classList.add(fontMap[s.fontSize]);

  if (s.textSpacing)    b.classList.add('acc-text-spacing');
  if (s.lineHeight)     b.classList.add('acc-line-height');
  if (s.dyslexia)       b.classList.add('acc-dyslexia');
  if (s.wordBreak)      b.classList.add('acc-word-break');
  if (s.leftAlign)      b.classList.add('acc-left-align');

  const zoomMap = { 80:'acc-zoom-80',90:'acc-zoom-90',110:'acc-zoom-110',120:'acc-zoom-120',130:'acc-zoom-130',140:'acc-zoom-140',150:'acc-zoom-150' };
  if (zoomMap[s.zoom]) b.classList.add(zoomMap[s.zoom]);

  if (s.stopAnimations) b.classList.add('acc-stop-anim');
  if (s.hideImages)     b.classList.add('acc-hide-images');
  if (s.muteVideos)     b.classList.add('acc-mute-video');
  if (s.bigCursor)      b.classList.add('acc-big-cursor');
  if (s.underlineLinks) b.classList.add('acc-underline-links');
  if (s.highlightLinks) b.classList.add('acc-highlight-links');
  if (s.focusHighlight) b.classList.add('acc-highlight-focus');
  if (s.keyboardNav)    b.classList.add('acc-keyboard-nav');
  if (s.readableWidth)  b.classList.add('acc-readable-width');
  if (s.readingGuide)   b.classList.add('acc-reading-guide');
}

function useReadingGuide(active) {
  useEffect(() => {
    if (!active) return;
    const move = (e) => {
      document.body.style.setProperty('--acc-guide-y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [active]);
}

const AccessibilityPanel = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_STATE);
  const [activeTab, setActiveTab] = useState('vision');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const id = 'acc-global-styles-v2';
    if (!document.getElementById(id)) {
      const el = document.createElement('style');
      el.id = id;
      el.textContent = GLOBAL_CSS;
      document.head.appendChild(el);
    }
  }, []);

  useEffect(() => { applyToBody(settings); }, [settings]);
  useReadingGuide(settings.readingGuide);

  const toggle = (key) => setSettings(p => ({ ...p, [key]: !p[key] }));
  const setFontSize = (dir) => setSettings(p => ({ ...p, fontSize: Math.min(4, Math.max(-2, p.fontSize + dir)) }));
  const setZoom = (dir) => setSettings(p => ({ ...p, zoom: Math.min(150, Math.max(80, p.zoom + dir * 10)) }));
  const reset = () => setSettings(DEFAULT_STATE);

  const activeCount = Object.entries(settings).filter(([k, v]) => {
    if (k === 'fontSize') return v !== 0;
    if (k === 'zoom') return v !== 100;
    return v === true;
  }).length;

  const searchLower = search.toLowerCase();
  const matchedKeys = search
    ? Object.entries(FEATURES).filter(([, f]) => f.label.toLowerCase().includes(searchLower)).map(([k]) => k)
    : null;

  const fontPx = 16 + settings.fontSize * 2;
  const currentCatFeatures = CATEGORIES.find(c => c.key === activeTab);

  const ToggleCard = ({ featureKey }) => {
    const f = FEATURES[featureKey];
    const on = settings[featureKey];
    return (
      <button
        onClick={() => toggle(featureKey)}
        className={`relative flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer w-full
          ${on
            ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg'
            : 'bg-[#1e1e2e] border-[#2e2e42] text-slate-300 hover:border-indigo-500 hover:bg-[#25253a]'
          }`}
      >
        {on && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400" />
        )}
        <span className="text-xl leading-none">{f.icon}</span>
        <span className="text-xs font-semibold text-center leading-tight">{f.label}</span>
      </button>
    );
  };

  const StepperCard = ({ icon, label, value, onDec, onInc, decDis, incDis }) => (
    <div className="flex items-center gap-2 bg-[#1e1e2e] border-2 border-[#2e2e42] rounded-xl px-3 py-2.5 col-span-2">
      <span className="text-lg">{icon}</span>
      <span className="text-xs font-semibold text-slate-300 flex-1">{label}</span>
      <button
        onClick={onDec} disabled={decDis}
        className="w-7 h-7 rounded-lg bg-[#2e2e42] text-slate-200 font-bold text-base flex items-center justify-center hover:bg-indigo-600 transition-all duration-150 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer border-none"
      >−</button>
      <span className="text-xs font-bold text-indigo-300 w-10 text-center tabular-nums">{value}</span>
      <button
        onClick={onInc} disabled={incDis}
        className="w-7 h-7 rounded-lg bg-[#2e2e42] text-slate-200 font-bold text-base flex items-center justify-center hover:bg-indigo-600 transition-all duration-150 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer border-none"
      >+</button>
    </div>
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative bg-transparent border-none cursor-pointer p-1 text-current hover:text-yellow-400 transition-colors duration-200 text-xl flex items-center"
        aria-label="Open Accessibility Panel"
        title="Accessibility"
      >
        <FaUniversalAccess aria-hidden="true" />
        {activeCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
            {activeCount}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0  bg-opacity-60 z-[9998]" onClick={() => setOpen(false)} />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-[#13131f] z-[9999] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out border-l border-[#2e2e42]
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Accessibility Options"
      >
        {/* Header */}
        <div className="flex-shrink-0 px-4 pt-4 pb-3 border-b border-[#2e2e42]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-base shadow-lg">
                <FaUniversalAccess />
              </div>
              <div>
                <h2 className="text-white font-bold text-sm leading-none m-0">Accessibility</h2>
                <p className="text-slate-500 text-xs mt-0.5 m-0">
                  {activeCount > 0 ? `${activeCount} feature${activeCount > 1 ? 's' : ''} active` : 'Customize your experience'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg bg-[#1e1e2e] text-slate-400 flex items-center justify-center hover:bg-[#2e2e42] hover:text-white transition-all duration-150 cursor-pointer border border-[#2e2e42] text-sm font-bold"
              aria-label="Close"
            >✕</button>
          </div>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none">🔍</span>
            <input
              type="text"
              placeholder="Search features..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#1e1e2e] border border-[#2e2e42] rounded-lg pl-8 pr-3 py-2 text-xs text-slate-300 placeholder-slate-600 outline-none focus:border-indigo-500 transition-colors duration-150"
            />
          </div>
        </div>

        {/* Tab Bar */}
        {!search && (
          <div className="flex-shrink-0 flex gap-1 px-3 py-2 border-b border-[#2e2e42] overflow-x-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer border-none
                  ${activeTab === cat.key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-[#1e1e2e] text-slate-400 hover:text-slate-200 hover:bg-[#25253a]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto acc-scroll px-3 py-3">
          {search ? (
            matchedKeys && matchedKeys.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {matchedKeys.map(k => <ToggleCard key={k} featureKey={k} />)}
              </div>
            ) : (
              <p className="text-slate-500 text-xs text-center py-8">No features found for "{search}"</p>
            )
          ) : (
            <div className="flex flex-col gap-3">
              {/* Category Header */}
              <div className={`rounded-xl bg-gradient-to-r ${currentCatFeatures?.color} px-3 py-2`}>
                <span className="text-white font-bold text-xs uppercase tracking-widest">{currentCatFeatures?.label}</span>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-2">
                {activeTab === 'text' && (
                  <StepperCard
                    icon="🔡" label="Font Size"
                    value={`${fontPx}px`}
                    onDec={() => setFontSize(-1)} onInc={() => setFontSize(1)}
                    decDis={settings.fontSize <= -2} incDis={settings.fontSize >= 4}
                  />
                )}
                {activeTab === 'layout' && (
                  <StepperCard
                    icon="🔍" label="Page Zoom"
                    value={`${settings.zoom}%`}
                    onDec={() => setZoom(-1)} onInc={() => setZoom(1)}
                    decDis={settings.zoom <= 80} incDis={settings.zoom >= 150}
                  />
                )}
                {Object.entries(FEATURES)
                  .filter(([, f]) => f.cat === activeTab)
                  .map(([k]) => <ToggleCard key={k} featureKey={k} />)}
              </div>

              {/* Active tags */}
              {Object.entries(FEATURES)
                .filter(([k, f]) => f.cat === activeTab && settings[k])
                .length > 0 && (
                <div className="mt-1 bg-indigo-900 bg-opacity-30 rounded-xl px-3 py-2 border border-indigo-800 border-opacity-50">
                  <p className="text-indigo-300 text-xs font-semibold mb-1.5">Active in this section:</p>
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(FEATURES)
                      .filter(([k, f]) => f.cat === activeTab && settings[k])
                      .map(([k, f]) => (
                        <span key={k} className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                          {f.icon} {f.label}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-3 border-t border-[#2e2e42] flex gap-2">
          <button
            onClick={reset}
            className="flex-1 py-2.5 bg-[#1e1e2e] border border-[#2e2e42] text-slate-300 rounded-xl text-xs font-bold hover:bg-[#2e2e42] hover:text-white transition-all duration-150 cursor-pointer"
          >
            ↺ Reset All
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-500 transition-all duration-150 cursor-pointer border-none"
          >
            ✓ Done
          </button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPanel;
