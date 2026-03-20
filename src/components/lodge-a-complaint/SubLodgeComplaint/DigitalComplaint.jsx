import { useState } from "react";
import Select from "react-select";
import { IoSend } from "react-icons/io5";
export default function DigitalComplaint() {
    const [formData, setFormData] = useState({
        existingCustomer: "yes",
        accountNumber: "",
        complaintType: "",
        fullName: "",
        mobile: "",
        email: "",
        branch: "",
        address: "",
        complaintDetails: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState(null);
    const branchOptions = [
        { value: "pune-main", label: "Pune Main Branch" },
        { value: "hadapsar", label: "Hadapsar Branch" },
        { value: "shivajinagar", label: "Shivajinagar Branch" },
        { value: "pimpri", label: "Pimpri Branch" },
        { value: "kothrud", label: "Kothrud Branch" },
    ];
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3500);
    };

    const fieldBase =
        "w-full bg-transparent border-b-2 py-2.5 px-1 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 font-light";

    const fieldCls = (name) =>
        `${fieldBase} ${focused === name ? "border-amber-500" : "border-slate-200 hover:border-[#f47012]"}`;

    const selectBase =
        "w-full bg-white border-b-2 py-2.5 px-1 text-sm text-slate-700 outline-none transition-all duration-300 font-light appearance-none cursor-pointer";

    const selectCls = (name) =>
        `${selectBase} ${focused === name ? "border-amber-500" : "border-slate-200 hover:border-[#f47012]"}`;

    const labelCls = "block text-xs font-semibold uppercase tracking-[0.1em] text-[#1e3163] mb-0";

    return (
        <>


            {/* Page wrapper */}
            <div className="dm  flex items-center justify-center py-10  bg-gray-100">
                <div className="w-full max-w-[1200px]">

                    {/* ── TOP HEADER ── */}
                    <div className="text-center mb-8">
                        {/* <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 bg-[#1e3163] text-white">
              <span className="w-1.5 h-1.5 rounded-full inline-block bg-white"></span>
              BankCare · Grievance Portal
            </div> */}
                        <h1 className=" text-4xl font-bold text-black leading-tight">
                            General Complaint/Query/Request and Feedback
                        </h1>
                        <p className="text-[#1e3163] text-sm font-light mt-2 tracking-wide">
                            All concerns are reviewed within 3–7 working days · RBI Compliant
                        </p>
                    </div>

                    {/* ── CARD ── */}
                    <div className="bg-white rounded-lg overflow-hidden ">

                        {/* Gold top bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#1e3163] via-[#f47012] to-[#1e3163]" />

                        <div className="px-10 py-8">

                            {/* Success banner */}
                            {submitted && (
                                <div className="reveal mb-6 flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-800">
                                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Reporting Unauthorised/ Suspicious/Disputed Digital Transactions
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-8">

                                {/* ══ SECTION 1 ══ */}
                                <div>
                                    <div className="flex items-center gap-4 ">
                                        <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#f47012]">
                                            01 — Account Information
                                        </p>
                                        <div className="flex-1 h-px bg-slate-100" />
                                    </div>

                                    <div className="grid grid-cols-3 gap-x-10 gap-y-4">

                                        {/* Account Number */}
                                        <div className={`transition-all duration-300 ${formData.existingCustomer === "yes" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                                            <div className="reveal">
                                                <label className={labelCls}>Account No. / Customer ID</label>
                                                <input
                                                    type="text"
                                                    name="accountNumber"
                                                    placeholder="e.g. 001234567890"
                                                    value={formData.accountNumber}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("accountNumber")}
                                                    onBlur={() => setFocused(null)}
                                                    className={fieldCls("accountNumber")}
                                                />
                                            </div>

                                        </div>

                                        {/* Complaint Type */}
                                        <div>
                                            <label className={labelCls}>
                                                Complaint Category <span className="text-amber-400">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="complaintType"
                                                    value={formData.complaintType}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("complaintType")}
                                                    onBlur={() => setFocused(null)}
                                                    className={selectCls("complaintType")}
                                                >
                                                    <option value="">Select a complaint category</option>
                                                    <optgroup label="Internet & Mobile Banking">
                                                        <option value="internet-login-issues">Internet Banking Login Issues</option>
                                                        <option value="mobile-app-issues">Mobile Banking App Issues</option>
                                                        <option value="transaction-failure">Transaction Failure</option>
                                                        <option value="session-timeout">Session Timeout / App Crash</option>
                                                    </optgroup>

                                                    <optgroup label="UPI & Payments">
                                                        <option value="upi-failed">UPI Transaction Failed</option>
                                                        <option value="amount-debited-not-credited">Amount Debited but Not Credited</option>
                                                        <option value="wrong-upi-transfer">Wrong UPI Transfer</option>
                                                        <option value="pending-reversed">Pending / Reversed Transaction</option>
                                                    </optgroup>

                                                    <optgroup label="ATM Related">
                                                        <option value="atm-cash-not-dispensed">ATM Cash Not Dispensed</option>
                                                        <option value="cash-debited-not-received">Cash Debited but Not Received</option>
                                                        <option value="atm-card-retained">ATM Card Retained</option>
                                                        <option value="atm-out-of-service">ATM Out of Service</option>
                                                    </optgroup>

                                                    <optgroup label="Cards (Digital Usage)">
                                                        <option value="debit-online-failed">Debit Card Online Transaction Failed</option>
                                                        <option value="credit-online-failed">Credit Card Online Transaction Failed</option>
                                                        <option value="card-block-unblock">Card Block / Unblock Issue</option>
                                                        <option value="otp-not-received">OTP Not Received</option>
                                                    </optgroup>

                                                    <optgroup label="Security & Fraud">
                                                        <option value="unauthorized-transaction">Unauthorized Transaction</option>
                                                        <option value="fraud-scam">Suspected Fraud / Scam</option>
                                                        <option value="phishing">Phishing / Fake Call / SMS</option>
                                                        <option value="account-hacked">Account Hacked / Compromised</option>
                                                    </optgroup>

                                                    <optgroup label="Others">
                                                        <option value="sms-email-alert">SMS / Email Alert Issues</option>
                                                        <option value="transaction-history">Transaction History Not Updated</option>
                                                        <option value="other-digital">Any Other Digital Complaint</option>
                                                    </optgroup>
                                                </select>
                                                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#1e3163] text-xs">▾</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* ══ SECTION 2 ══ */}
                                <div>
                                    <div className="flex items-center gap-4 ">
                                        <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#f47012]">
                                            02 — Personal Details
                                        </p>
                                        <div className="flex-1 h-px bg-slate-100" />
                                    </div>

                                    <div className="grid grid-cols-4 gap-x-10 gap-y-7">
                                        {[
                                            { name: "fullName", label: "Full Name", placeholder: "As per bank records", type: "text", req: true },
                                            { name: "mobile", label: "Mobile Number", placeholder: "+91 00000 00000", type: "tel", req: true },
                                            { name: "email", label: "Email Address", placeholder: "you@example.com", type: "email", req: true },
                                            { name: "branch", label: "Select Branch", type: "branch", req: false },
                                        ].map(({ name, label, placeholder, type, req }) => (
                                            <div key={name}>
                                                <label className={labelCls}>
                                                    {label} {req && <span className="text-amber-400">*</span>}
                                                </label>

                                                {type === "branch" ? (
                                                    // <Select
                                                    //   options={branchOptions}
                                                    //   placeholder="Search branch..."
                                                    //   value={branchOptions.find(
                                                    //     (option) => option.value === formData.branch
                                                    //   )}
                                                    //   onChange={(selectedOption) =>
                                                    //     setFormData({
                                                    //       ...formData,
                                                    //       branch: selectedOption ? selectedOption.value : "",
                                                    //     })
                                                    //   }
                                                    //   isSearchable
                                                    //   isClearable
                                                    //   className="text-sm"
                                                    //   styles={{
                                                    //     control: (base) => ({
                                                    //       ...base,
                                                    //       border: "none",
                                                    //       borderBottom: "2px solid #e2e8f0",
                                                    //       borderRadius: "0px",
                                                    //       boxShadow: "none",
                                                    //       paddingLeft: "2px",
                                                    //       minHeight: "38px",
                                                    //     }),
                                                    //   }}
                                                    // />
                                                    <Select
                                                        options={branchOptions}
                                                        placeholder="Search branch..."
                                                        value={branchOptions.find(
                                                            (option) => option.value === formData.branch
                                                        )}
                                                        onChange={(selectedOption) =>
                                                            setFormData({
                                                                ...formData,
                                                                branch: selectedOption ? selectedOption.value : "",
                                                            })
                                                        }
                                                        isSearchable
                                                        isClearable
                                                        className={`react-select-container text-sm mt-1 ${fieldCls}`}
                                                        classNamePrefix="react-select"
                                                    />
                                                ) : (
                                                    <input
                                                        type={type}
                                                        name={name}
                                                        placeholder={placeholder}
                                                        value={formData[name]}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocused(name)}
                                                        onBlur={() => setFocused(null)}
                                                        className={fieldCls(name)}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-7">
                                        <label className={labelCls}>Address for Communication</label>
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Street, City, State, PIN Code"
                                            value={formData.address}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("address")}
                                            onBlur={() => setFocused(null)}
                                            className={fieldCls("address")}
                                        />
                                    </div>
                                </div>

                                {/* ══ SECTION 3 ══ */}
                                <div>
                                    <div className="flex items-center gap-4 ">
                                        <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#f47012]">
                                            03 — Complaint Details
                                        </p>
                                        <div className="flex-1 h-px bg-slate-100" />
                                    </div>

                                    <label className={labelCls}>
                                        Describe your complaint / fraud report / feedback{" "}
                                        <span className="text-amber-400">*</span>
                                    </label>
                                    <textarea
                                        name="complaintDetails"
                                        rows={2}
                                        placeholder="Please provide a clear description. Include dates, amounts, transaction IDs or reference numbers if applicable..."
                                        value={formData.complaintDetails}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("complaintDetails")}
                                        onBlur={() => setFocused(null)}
                                        className={`${fieldCls("complaintDetails")} resize-none block w-full`}
                                    />
                                </div>

                                {/* ══ SUBMIT ROW ══ */}
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className="gold-btn relative inline-flex items-center gap-2.5 text-sm font-medium px-9 py-3.5 rounded transition-all duration-200 overflow-hidden bg-[#1e3163] text-white"
                                    >
                                        <IoSend className="text-lg" />
                                        <span>Submit Complaint</span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}