import React from "react";
import { FiFileText, FiDownload } from "react-icons/fi";
import { FaUserCircle, FaFileInvoiceDollar, FaFileAlt, FaLock, FaCheckCircle } from "react-icons/fa";
import { useLang } from "../ImpFolder/LangContext"; // adjust path as needed

const translations = {
  en: {
    heading1: "Secure Internet",
    heading2: "Banking Experience",
    desc: "Perform all your banking activities online with advanced security, fast transactions, and 24×7 access — no branch visits required.",
    policyTitle: "Internet Banking View Mode Policy",
    policySize: "Size • 3.2 MB",
    download: "Download",
    capabilitiesTitle: "Banking Services Available",
    featuresTitle: "Core Features",
    stepsTitle: "How to Get Started",
    capabilities: [
      "Loan application & EMI management",
      "Fixed & recurring deposit booking",
      "Cheque book request & tracking",
      "Nominee management",
      "IMPS / NEFT / RTGS transfers",
      "Credit card bill payments",
      "Insurance premium payments",
      "Stop cheque requests",
    ],
    features: [
      { icon: FaUserCircle, title: "Account Management", desc: "View, manage, and switch between all your linked accounts in one place." },
      { icon: FaFileInvoiceDollar, title: "Tax Payments", desc: "Pay income tax, GST, and other taxes quickly and securely." },
      { icon: FaFileAlt, title: "e-Statements", desc: "Download account statements for up to 10 years in PDF or Excel." },
      { icon: FaLock, title: "Two-Factor Authentication", desc: "Secure login with OTP verification for every transaction." },
    ],
    steps: [
      "Visit the official internet banking portal",
      "Login using your Customer ID & Password",
      "Verify OTP sent to your registered mobile number",
      "Access all banking services securely",
    ],
  },
  mr: {
    heading1: "सुरक्षित इंटरनेट",
    heading2: "बँकिंग अनुभव",
    desc: "प्रगत सुरक्षा, जलद व्यवहार आणि २४×७ प्रवेशासह आपले सर्व बँकिंग व्यवहार ऑनलाइन करा — शाखेला भेट देण्याची गरज नाही.",
    policyTitle: "इंटरनेट बँकिंग व्ह्यू मोड धोरण",
    policySize: "आकार • ३.२ एमबी",
    download: "डाउनलोड करा",
    capabilitiesTitle: "उपलब्ध बँकिंग सेवा",
    featuresTitle: "मुख्य वैशिष्ट्ये",
    stepsTitle: "सुरुवात कशी करावी",
    capabilities: [
      "कर्ज अर्ज आणि ईएमआय व्यवस्थापन",
      "मुदत ठेव आणि आवर्ती ठेव बुकिंग",
      "चेकबुक विनंती आणि ट्रॅकिंग",
      "नॉमिनी व्यवस्थापन",
      "आयएमपीएस / एनईएफटी / आरटीजीएस हस्तांतरण",
      "क्रेडिट कार्ड बिल पेमेंट",
      "विमा प्रीमियम पेमेंट",
      "चेक थांबवण्याची विनंती",
    ],
    features: [
      { icon: FaUserCircle, title: "खाते व्यवस्थापन", desc: "आपली सर्व लिंक केलेली खाती एकाच ठिकाणी पाहा, व्यवस्थापित करा आणि बदला." },
      { icon: FaFileInvoiceDollar, title: "कर पेमेंट", desc: "आयकर, जीएसटी आणि इतर कर जलद आणि सुरक्षितपणे भरा." },
      { icon: FaFileAlt, title: "ई-स्टेटमेंट", desc: "१० वर्षांपर्यंतचे खाते स्टेटमेंट PDF किंवा Excel मध्ये डाउनलोड करा." },
      { icon: FaLock, title: "द्वि-घटक प्रमाणीकरण", desc: "प्रत्येक व्यवहारासाठी OTP सत्यापनासह सुरक्षित लॉगिन." },
    ],
    steps: [
      "अधिकृत इंटरनेट बँकिंग पोर्टलला भेट द्या",
      "आपला ग्राहक आयडी आणि पासवर्ड वापरून लॉगिन करा",
      "नोंदणीकृत मोबाइल नंबरवर पाठवलेल्या OTP ने सत्यापित करा",
      "सर्व बँकिंग सेवा सुरक्षितपणे वापरा",
    ],
  },
}

export default function InternetBanking() {
  const { lang } = useLang()
  const tr = translations[lang]

  return (
    <div className="bg-gray-200 py-14">
      <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">

        {/* ── HERO SECTION ── */}
        <div className="relative overflow-hidden px-3 pt-4 pb-4 md:px-10">
          <div className="relative z-10">

            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
              <span>{tr.heading1} </span>
              <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
                {tr.heading2}
              </span>
            </h1>

            <p className="mt-4 text-lg max-w-xl leading-relaxed">{tr.desc}</p>

            {/* Policy Download */}
            <div className="mt-4 flex items-center justify-between flex-wrap gap-4 p-3 rounded-md border">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#F47012]/10 flex items-center justify-center">
                  <FiFileText className="text-[#F47012] text-xl" />
                </div>
                <div className="flex flex-col leading-tight">
                  <p className="font-semibold text-base tracking-tight">{tr.policyTitle}</p>
                  <p className="text-xs italic">{tr.policySize}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="assets/pdf/Downloads/Internet-Baking-View-Mode-Policy_202407301159469936.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#1e3163] to-[#5F7ECE] text-white text-sm font-semibold hover:scale-105 transition"
                >
                  <FiDownload className="text-sm" />
                  {tr.download}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── CAPABILITIES ── */}
        <section className="py-6">
          <div className="flex items-center justify-center mb-4 mt-2">
            <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
            <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
              {tr.capabilitiesTitle}
            </h2>
            <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
          </div>

          <div className="bg-white border border-[#1e3163]/10 rounded-md p-6 grid md:grid-cols-2 gap-4">
            {tr.capabilities.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f47012] text-base shrink-0" />
                <span className="text-base">{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
            <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
              {tr.featuresTitle}
            </h2>
            <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tr.features.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>
                  <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#f47012]">
                    <Icon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1e3163] mb-1 text-base">{f.title}</h4>
                  <p className="text-sm">{f.desc}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── STEPS ── */}
        <section>
          <div className="flex items-center justify-center mb-2 mt-4">
            <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
            <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
              {tr.stepsTitle}
            </h2>
            <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
          </div>

          <div className="p-6 space-y-3">
            {tr.steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-[#eef8ff] text-[#f47012] flex items-center justify-center rounded-full text-sm font-bold border border-[#1e3163]/20">
                  {i + 1}
                </div>
                <p className="text-base text-[#1e3163]">{s}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}