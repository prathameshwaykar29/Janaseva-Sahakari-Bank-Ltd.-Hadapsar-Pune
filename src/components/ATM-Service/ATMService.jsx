import React from "react";
import {
    FaMoneyBillWave,
    FaPiggyBank,
    FaExchangeAlt,
    FaReceipt
} from "react-icons/fa";

const features = [
    {
        icon: FaMoneyBillWave,
        title: "Cash Withdrawal",
        desc: "Withdraw up to ₹50,000 per day from 10,000+ ATMs nationwide.",
    },
    {
        icon: FaPiggyBank,
        title: "Cash Deposit",
        desc: "Deposit cash at our CDM machines — available 24 hours a day.",
    },
    {
        icon: FaExchangeAlt,
        title: "Fund Transfer",
        desc: "Instant transfer between your linked accounts at the ATM.",
    },
    {
        icon: FaReceipt,
        title: "Mini Statement",
        desc: "Print or view the last 8 transactions on your account.",
    },
];

const limits = [
    { type: "Classic Debit Card", perTxn: "₹10,000", perDay: "₹25,000" },
    { type: "Platinum Debit Card", perTxn: "₹25,000", perDay: "₹50,000" },
    { type: "Business Debit Card", perTxn: "₹50,000", perDay: "₹1,00,000" },
];

const steps = [
    "Insert your Debit Card into the ATM slot",
    "Enter your 4-digit secure PIN",
    "Select the type of transaction you need",
    "Collect your cash, card & printed receipt",
];

export default function ATMService() {
    return (
        <div className="bg-gray-200 py-14">
            <div className="max-w-[1200px] mx-auto bg-white p-4 rounded-md">
                {/* Hero */}
                <div className="relative overflow-hidden px-3 pt-6 pb-6 md:px-10 ">

                    <div className="relative z-10 max-w-4xl">


                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                            <span className="">Instant Cash </span>

                            <span className="bg-gradient-to-r from-[#F47012] to-[#ffb066] bg-clip-text text-transparent">
                                Zero Hassle
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-base  max-w-xl leading-relaxed">
                            10,000+ ATMs across India. Withdraw, deposit, and manage your
                            account 24 hours a day, 365 days a year — no branch visit needed.
                        </p>

                        {/* Button */}
                        <div className="mt-4 flex gap-3 flex-wrap">
                            <button className="px-7 py-3.5 rounded-md bg-gradient-to-r from-[#F47012] to-orange-500 text-white font-semibold text-sm  hover:scale-105  transition-all duration-300 ">
                                Find Nearest ATM →
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-4 flex gap-4 flex-wrap">
                            {["10,000+ ATMs", "24 × 7 Access", "₹50K Daily Limit"].map((stat) => (
                                <span
                                    key={stat}
                                    className="px-4 py-2 rounded-md 
          bg-gray-100 border border-black 
           text-xs font-medium 
          "
                                >
                                    {stat}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Features */}
                <section className="">

                    <div className="flex items-center justify-center mb-4 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            ATM Services
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#FF6B6B]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                        {features.map((f, i) => {
                            const Icon = f.icon;

                            return (


                                <div
                                    key={i}
                                    className="group relative bg-white border border-[#1e3163]/10 rounded-md p-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    {/* TOP ACCENT BAR */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3163] to-[#f47012] opacity-80"></div>

                                    {/* ICON */}
                                    <div className="w-12 h-12 bg-[#eef8ff] rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#f47012]">
                                        <Icon className="text-[#f47012] text-xl transition-all duration-300 group-hover:text-white" />
                                    </div>

                                    {/* TITLE */}
                                    <h4 className="font-semibold text-[#1e3163] mb-1 text-base">
                                        {f.title}
                                    </h4>

                                    {/* DESC */}
                                    <p className="text-sm">
                                        {f.desc}
                                    </p>

                                    {/* HOVER LINE */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f47012] transition-all duration-300 group-hover:w-full"></div>
                                </div>


                            );
                        })}
                    </div>
                </section>

                {/* Withdrawal Limits */}
                <section className="">
                    <div className="flex items-center justify-center mb-4 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            Withdrawal Limits
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>





                    <div className="border border-[#1e3163] rounded-md overflow-hidden ">
                        <table className="w-full text-sm">

                            <thead>
                                <tr className="bg-[#1e3163]">
                                    {["Card Type", "Per Transaction", "Per Day"].map((h) => (
                                        <th key={h} className="px-6 py-4 text-left text-sm uppercase tracking-widest text-white">{h}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {limits.map((l, i) => (
                                    <tr key={l.type} className={i % 2 === 0 ? "bg-gray-50" : ""}>

                                        <td className="px-4 py-3 font-semibold text-[#f47012]">{l.type}</td>
                                        <td className="px-4 py-3">{l.perTxn}</td>
                                        <td className="px-4 py-3">{l.perDay}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </section>

                {/* How it works */}
                {/* <section className="px-6 md:px-16 pb-20 max-w-5xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#FF6B6B] font-bold mb-6">
          
        </p>
        <div className="rounded-2xl p-8 bg-white/[0.025] border border-white/[0.07] flex flex-col gap-5">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold bg-[#FF6B6B]/15 text-[#FF6B6B] border border-[#FF6B6B]/25">
                {i + 1}
              </div>
              <p className="text-white/60 text-sm leading-relaxed pt-1">{s}</p>
            </div>
          ))}
        </div>
      </section> */}

                <section className=" ">
                    <div className="flex items-center justify-center mb-4 mt-4">
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                        <h2 className="px-6 text-3xl font-semibold text-[#f47012] whitespace-nowrap">
                            How It Works
                        </h2>
                        <div className="h-px bg-[#000] flex-1 max-w-xs"></div>
                    </div>


                    <div className="p-6 space-y-3">
                        {steps.map((s, i) => (
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
    );
}
