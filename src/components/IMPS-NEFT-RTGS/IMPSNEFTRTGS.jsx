import { useState } from "react";
import AllTabs from "../AllTabs.jsx";
import { useLang } from "../ImpFolder/LangContext";
import {
    FaBolt, FaClock, FaMoneyBillWave, FaRupeeSign, FaGlobe
} from "react-icons/fa";

const translations = {
    en: {
        tabs: ["IMPS", "NEFT", "RTGS"],
        tableHeaders: ["", "IMPS", "NEFT", "RTGS"],
        howToTransfer: "How To Transfer",
        bestFor: "Best For",
        transferLimit: "Transfer Limit",
        processingTime: "Processing Time",
        availability: "Availability",
        charges: "Charges",
        details: {
            IMPS: {
                full: "Immediate Payment Service",
                desc: "Instant 24/7 fund transfer between bank accounts. Perfect for urgent and smaller transfers.",
                limit: "Up to ₹5 Lakh per transaction",
                time: "Instant (within seconds)",
                availability: "24 × 7 × 365 including holidays",
                charges: "₹5 – ₹15 per transaction",
                best: "Urgent transfers, splitting bills, peer-to-peer payments",
            },
            NEFT: {
                full: "National Electronic Funds Transfer",
                desc: "Batch-based settlement system. Ideal for scheduled and non-urgent payments.",
                limit: "No upper limit",
                time: "Processed in 30-minute batches",
                availability: "24 × 7 × 365 including holidays",
                charges: "₹2 – ₹25 per transaction",
                best: "EMI payments, vendor payments, large scheduled transfers",
            },
            RTGS: {
                full: "Real-Time Gross Settlement",
                desc: "Real-time settlement for high-value transactions.",
                limit: "Minimum ₹2 Lakh, no upper limit",
                time: "Instant (real-time gross settlement)",
                availability: "24 × 7 × 365 including holidays",
                charges: "₹25 – ₹50 per transaction",
                best: "Business payments, property transactions, high-value transfers",
            },
        },
        compare: [
            { field: "Min Amount", imps: "₹1", neft: "₹1", rtgs: "₹2,00,000" },
            { field: "Max Amount", imps: "₹5 Lakh", neft: "No Limit", rtgs: "No Limit" },
            { field: "Settlement", imps: "Instant", neft: "30 min batch", rtgs: "Instant" },
            { field: "Availability", imps: "24/7/365", neft: "24/7/365", rtgs: "24/7/365" },
            { field: "Typical Charges", imps: "₹5 – ₹15", neft: "₹2 – ₹25", rtgs: "₹25 – ₹50" },
        ],
        steps: [
            "Login to Net Banking or Mobile Banking",
            "Navigate to Fund Transfer → Add Beneficiary",
            "Enter beneficiary name, account number & IFSC code",
            "Select transfer mode: IMPS, NEFT, or RTGS",
            "Enter the amount and remarks",
            "Confirm the transaction with your OTP",
        ],
    },
    mr: {
        tabs: ["आयएमपीएस", "एनईएफटी", "आरटीजीएस"],
        tableHeaders: ["", "आयएमपीएस", "एनईएफटी", "आरटीजीएस"],
        howToTransfer: "हस्तांतरण कसे करावे",
        bestFor: "सर्वोत्तम उपयोग",
        transferLimit: "हस्तांतरण मर्यादा",
        processingTime: "प्रक्रिया वेळ",
        availability: "उपलब्धता",
        charges: "शुल्क",
        details: {
            IMPS: {
                full: "तत्काळ पेमेंट सेवा",
                desc: "बँक खात्यांमध्ये तत्काळ २४/७ निधी हस्तांतरण. तातडीच्या आणि लहान हस्तांतरणासाठी उत्तम.",
                limit: "प्रति व्यवहार ₹५ लाखांपर्यंत",
                time: "तत्काळ (काही सेकंदांत)",
                availability: "सुट्ट्यांसह २४ × ७ × ३६५",
                charges: "प्रति व्यवहार ₹५ – ₹१५",
                best: "तातडीचे हस्तांतरण, बिल विभाजन, व्यक्ती-ते-व्यक्ती पेमेंट",
            },
            NEFT: {
                full: "राष्ट्रीय इलेक्ट्रॉनिक निधी हस्तांतरण",
                desc: "बॅच-आधारित सेटलमेंट प्रणाली. नियोजित आणि गैर-तातडीच्या पेमेंटसाठी आदर्श.",
                limit: "कमाल मर्यादा नाही",
                time: "३०-मिनिटांच्या बॅचमध्ये प्रक्रिया",
                availability: "सुट्ट्यांसह २४ × ७ × ३६५",
                charges: "प्रति व्यवहार ₹२ – ₹२५",
                best: "ईएमआय पेमेंट, विक्रेता पेमेंट, मोठे नियोजित हस्तांतरण",
            },
            RTGS: {
                full: "रिअल-टाइम ग्रॉस सेटलमेंट",
                desc: "उच्च-मूल्य व्यवहारांसाठी रिअल-टाइम सेटलमेंट.",
                limit: "किमान ₹२ लाख, कमाल मर्यादा नाही",
                time: "तत्काळ (रिअल-टाइम ग्रॉस सेटलमेंट)",
                availability: "सुट्ट्यांसह २४ × ७ × ३६५",
                charges: "प्रति व्यवहार ₹२५ – ₹५०",
                best: "व्यवसाय पेमेंट, मालमत्ता व्यवहार, उच्च-मूल्य हस्तांतरण",
            },
        },
        compare: [
            { field: "किमान रक्कम", imps: "₹१", neft: "₹१", rtgs: "₹२,००,०००" },
            { field: "कमाल रक्कम", imps: "₹५ लाख", neft: "मर्यादा नाही", rtgs: "मर्यादा नाही" },
            { field: "सेटलमेंट", imps: "तत्काळ", neft: "३० मिनिट बॅच", rtgs: "तत्काळ" },
            { field: "उपलब्धता", imps: "२४/७/३६५", neft: "२४/७/३६५", rtgs: "२४/७/३६५" },
            { field: "सामान्य शुल्क", imps: "₹५ – ₹१५", neft: "₹२ – ₹२५", rtgs: "₹२५ – ₹५०" },
        ],
        steps: [
            "नेट बँकिंग किंवा मोबाइल बँकिंगमध्ये लॉगिन करा",
            "फंड ट्रान्सफर → लाभार्थी जोडा येथे जा",
            "लाभार्थीचे नाव, खाते क्रमांक आणि IFSC कोड प्रविष्ट करा",
            "हस्तांतरण मोड निवडा: आयएमपीएस, एनईएफटी किंवा आरटीजीएस",
            "रक्कम आणि टिप्पणी प्रविष्ट करा",
            "आपल्या OTP ने व्यवहार निश्चित करा",
        ],
    },
}

const tabKeys = ["IMPS", "NEFT", "RTGS"]
const icons = { IMPS: FaBolt, NEFT: FaClock, RTGS: FaMoneyBillWave }

export default function IMPSNEFTRTGS() {
    const [tabIndex, setTabIndex] = useState(0)
    const { lang } = useLang()
    const tr = translations[lang]

    const currentKey = tabKeys[tabIndex]
    const d = tr.details[currentKey]
    const Icon = icons[currentKey]

    const infoRows = [
        { label: tr.transferLimit, value: d.limit, icon: FaRupeeSign },
        { label: tr.processingTime, value: d.time, icon: FaClock },
        { label: tr.availability, value: d.availability, icon: FaGlobe },
        { label: tr.charges, value: d.charges, icon: FaMoneyBillWave },
    ]

    return (
        <div className="bg-gray-200 py-14">

            {/* TOP TABS */}
            <div className="max-w-[1200px] mx-auto px-6 mb-6">
                <AllTabs
                    tabs={tr.tabs.map((label) => ({ label }))}
                    activeTab={tr.tabs[tabIndex]}
                    onChange={(label) => setTabIndex(tr.tabs.indexOf(label))}
                />
            </div>

            {/* CARD */}
            <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">

                {/* ── DETAIL SECTION ── */}
                <section>
                    <div className="max-w-[1200px] mx-auto">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-[#eef8ff] flex items-center justify-center rounded-md">
                                <Icon className="text-[#f47012] text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#1e3163]">{tr.tabs[tabIndex]}</h3>
                                <p className="text-sm text-[#f47012]">{d.full}</p>
                            </div>
                        </div>

                        <p className="mb-3">{d.desc}</p>

                        {/* INFO GRID */}
                        <div className="grid md:grid-cols-2 gap-3 mb-3">
                            {infoRows.map((row) => {
                                const RowIcon = row.icon
                                return (
                                    <div
                                        key={row.label}
                                        className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>
                                        <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-[#f47012]">
                                            <RowIcon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
                                        </div>
                                        <h4 className="font-semibold text-[#1e3163] mb-1 text-base">{row.label}</h4>
                                        <p className="text-sm">{row.value}</p>
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* BEST FOR */}
                        <div className="mt-2 bg-[#eef8ff] border border-[#1e3163]/20 p-3 rounded-md">
                            <p className="text-sm text-[#f47012] font-semibold mb-1">{tr.bestFor}</p>
                            <p className="text-sm">{d.best}</p>
                        </div>

                    </div>
                </section>

                {/* ── COMPARISON TABLE ── */}
                <section className="py-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="border border-[#1e3163]/10 rounded-md overflow-hidden bg-white">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-[#1e3163]">
                                        {tr.tableHeaders.map((h) => (
                                            <th key={h} className="px-4 py-3 text-left text-white text-xs uppercase">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tr.compare.map((row, i) => (
                                        <tr key={row.field} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                            <td className="px-4 py-3 font-semibold text-[#f47012]">{row.field}</td>
                                            <td className="px-4 py-3">{row.imps}</td>
                                            <td className="px-4 py-3">{row.neft}</td>
                                            <td className="px-4 py-3">{row.rtgs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ── HOW TO TRANSFER STEPS ── */}
                <section>
                    <div className="max-w-[1200px] mx-auto bg-white border border-[#1e3163]/10 rounded-md p-4 space-y-4">
                        <p className="text-xs uppercase tracking-widest text-[#F59F00] font-bold mb-4">
                            {tr.howToTransfer}
                        </p>
                        {tr.steps.map((s, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <div className="w-8 h-8 bg-[#eef8ff] text-[#f47012] flex items-center justify-center rounded-full text-sm font-bold border border-[#1e3163]/20">
                                    {i + 1}
                                </div>
                                <p className="text-sm">{s}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}