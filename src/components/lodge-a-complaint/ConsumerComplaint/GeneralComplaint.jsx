// import React, { useState } from 'react'

// const GeneralComplaint = () => {
//     const [form, setForm] = useState({
//         complaintType: '',
//         prevRef: '',
//         fullName: '',
//         mobile: '',
//         email: '',
//         accountNumber: '',
//         branchName: '',
//         category: '',
//         subCategory: '',
//         description: '',
//         declaration: false,
//     })
//     const [errors, setErrors] = useState({})
//     const [submitted, setSubmitted] = useState(false)

//     const categories = {
//         'Account Related': ['Balance Discrepancy', 'Wrong Debit/Credit', 'Account Closure', 'KYC Issue', 'Account Not Opened'],
//         'Loan Related': ['EMI Deduction Error', 'Wrong Interest', 'Disbursement Delay', 'Foreclosure Issue', 'Loan Statement'],
//         'Card Related': ['ATM Cash Not Dispensed', 'Card Blocked', 'Credit Card Dispute', 'Card Charges', 'Card Delivery'],
//         'Digital Banking': ['UPI Failed', 'Net Banking Issue', 'Mobile App Issue', 'NEFT/RTGS Delay', 'IMPS Failure'],
//         'Service Related': ['Staff Misbehaviour', 'Branch Service', 'Cheque Return', 'Locker Issue', 'Insurance'],
//     }

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target
//         setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
//         if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
//     }

//     const validate = () => {
//         const e = {}
//         if (!form.complaintType) e.complaintType = 'Required'
//         if (!form.fullName.trim()) e.fullName = 'Required'
//         if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit number'
//         if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter valid email'
//         if (!form.accountNumber.trim()) e.accountNumber = 'Required'
//         if (!form.branchName.trim()) e.branchName = 'Required'
//         if (!form.category) e.category = 'Required'
//         if (!form.subCategory) e.subCategory = 'Required'
//         if (form.description.trim().length < 30) e.description = 'Minimum 30 characters required'
//         if (!form.declaration) e.declaration = 'Please accept the declaration'
//         return e
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const errs = validate()
//         if (Object.keys(errs).length) { setErrors(errs); return }
//         setSubmitted(true)
//     }

//     const resetForm = () => {
//         setForm({ complaintType: '', prevRef: '', fullName: '', mobile: '', email: '', accountNumber: '', branchName: '', category: '', subCategory: '', description: '', declaration: false })
//         setErrors({})
//         setSubmitted(false)
//     }

//     const refNo = `JSB-${Date.now().toString().slice(-9)}`

//     const inputStyle = (name) => ({
//         width: '100%',
//         padding: '9px 12px',
//         border: `1.5px solid ${errors[name] ? '#fca5a5' : '#d1d5db'}`,
//         borderRadius: 6,
//         fontSize: 13.5,
//         outline: 'none',
//         boxSizing: 'border-box',
//         backgroundColor: errors[name] ? '#fff5f5' : '#fff',
//         color: '#1e293b',
//         fontFamily: 'inherit',
//         transition: 'border-color 0.2s',
//     })

//     const Inp = ({ name, placeholder, type = 'text', extra = {} }) => (
//         <input
//             type={type} name={name}
//             value={form[name]}
//             onChange={handleChange}
//             placeholder={placeholder}
//             style={inputStyle(name)}
//             {...extra}
//         />
//     )

//     const Sel = ({ name, children }) => (
//         <select
//             name={name} value={form[name]} onChange={handleChange}
//             style={{ ...inputStyle(name), color: form[name] ? '#1e293b' : '#9ca3af' }}>
//             {children}
//         </select>
//     )

//     const Field = ({ label, req, name, col = 1, children }) => (
//         <div style={{ gridColumn: `span ${col}` }}>
//             <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#374151', marginBottom: 5 }}>
//                 {label}{req && <span style={{ color: '#dc2626' }}> *</span>}
//             </label>
//             {children}
//             {errors[name] && (
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11.5, color: '#ef4444' }}>
//                     <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
//                     {errors[name]}
//                 </div>
//             )}
//         </div>
//     )

//     const SecHead = ({ num, title }) => (
//         <div style={{ gridColumn: 'span 12', display: 'flex', alignItems: 'center', gap: 9, margin: '14px 0 4px', paddingBottom: 7, borderBottom: '2px solid #e2e8f0' }}>
//             <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#1e3a5f', color: '#fff', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{num}</div>
//             <span style={{ fontSize: 13.5, fontWeight: 700, color: '#1e3a5f', letterSpacing: '0.2px' }}>{title}</span>
//         </div>
//     )

//     /* ── Success Screen ── */
//     if (submitted) return (
//         <div style={{ minHeight: '100vh', backgroundColor: '#eef2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
//             <div style={{ backgroundColor: '#fff', borderRadius: 12, padding: '48px 44px', textAlign: 'center', maxWidth: 460, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
//                 <div style={{ width: 68, height: 68, borderRadius: '50%', backgroundColor: '#1e3a5f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
//                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </div>
//                 <h2 style={{ color: '#1e3a5f', fontSize: 21, fontWeight: 800, margin: '0 0 10px' }}>Complaint Submitted!</h2>
//                 <p style={{ color: '#6b7280', fontSize: 13.5, margin: '0 0 22px', lineHeight: 1.6 }}>
//                     Your complaint has been successfully registered with<br /><strong>Janaseva Sahakari Bank Ltd.</strong>
//                 </p>
//                 <div style={{ backgroundColor: '#f0f4f8', borderRadius: 8, padding: '14px 22px', marginBottom: 20, border: '1px solid #dde3ea' }}>
//                     <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 5 }}>Reference Number</div>
//                     <div style={{ fontSize: 20, fontWeight: 800, color: '#1e3a5f', letterSpacing: '0.5px' }}>{refNo}</div>
//                 </div>
//                 <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 26px', lineHeight: 1.75 }}>
//                     Our grievance team will respond within <strong>5–7 working days</strong> on your registered mobile and email.
//                 </p>
//                 <button onClick={resetForm}
//                     style={{ backgroundColor: '#1e3a5f', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 28px', fontSize: 13.5, fontWeight: 700, cursor: 'pointer' }}>
//                     File Another Complaint
//                 </button>
//             </div>
//         </div>
//     )

//     /* ── Main Form ── */
//     return (
//         <div style={{ minHeight: '100vh', backgroundColor: '#eef2f7', fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>

//             {/* ── Header ── */}
//             <div style={{ backgroundColor: '#1e3a5f' }}>
//                 <div style={{ maxWidth: 1200, margin: '0 auto', padding: '13px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
//                     {/* <div style={{ width: 42, height: 42, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                         <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                             <rect x="3" y="10" width="18" height="11" rx="1" stroke="#1e3a5f" strokeWidth="2" />
//                             <path d="M6 10V7a6 6 0 0 1 12 0v3" stroke="#1e3a5f" strokeWidth="2" />
//                             <circle cx="12" cy="15" r="1.5" fill="#1e3a5f" />
//                         </svg>
//                     </div>
//                     <div>
//                         <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: '0.5px' }}>Janaseva Sahakari Bank Ltd.</div>
//                         <div style={{ color: '#93c5fd', fontSize: 11.5 }}>Hadapsar, Pune · Consumer Complaint Portal</div>
//                     </div> */}
//                     <div style={{ marginLeft: 'auto', color: '#93c5fd', fontSize: 11.5, textAlign: 'right', lineHeight: 1.9 }}>
//                         <div>Toll Free: <strong style={{ color: '#fff' }}>1800-XXX-XXXX</strong></div>
//                         <div>Mon–Sat · 9AM–6PM</div>
//                     </div>
//                 </div>
//                 <div style={{ backgroundColor: '#17304f', padding: '6px 28px' }}>
//                     <div style={{ maxWidth: 1200, margin: '0 auto', color: '#93c5fd', fontSize: 11 }}>
//                         Home &rsaquo; Customer Services &rsaquo; <span style={{ color: '#fff', fontWeight: 600 }}>Consumer Complaint</span>
//                     </div>
//                 </div>
//             </div>

//             {/* ── Body ── */}
//             <div style={{ maxWidth: 1200, margin: '20px auto', padding: '0 20px 32px' }}>

//                 {/* Note Banner */}
//                 <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 7, padding: '10px 16px', marginBottom: 16, display: 'flex', gap: 10, fontSize: 13, color: '#92400e', alignItems: 'flex-start' }}>
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
//                         <circle cx="12" cy="12" r="10" stroke="#b45309" strokeWidth="2" />
//                         <path d="M12 8v4M12 16h.01" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
//                     </svg>
//                     <span>
//                         <strong>Note:</strong> Fields marked <span style={{ color: '#dc2626', fontWeight: 700 }}>*</span> are mandatory.
//                         Please keep your Account Number and registered mobile number handy before filling this form.
//                     </span>
//                 </div>

//                 {/* ── Form Card ── */}
//                 <div style={{ backgroundColor: '#fff', borderRadius: 10, boxShadow: '0 2px 20px rgba(0,0,0,0.08)', overflow: 'hidden' }}>

//                     {/* Card Header */}
//                     <div style={{ backgroundColor: '#1e3a5f', padding: '15px 28px', display: 'flex', alignItems: 'center', gap: 13 }}>
//                         <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                                 <path d="M9 12h6M9 16h4M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
//                             </svg>
//                         </div>
//                         <div>
//                             <div style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>Consumer Complaint Registration Form</div>
//                             <div style={{ color: '#93c5fd', fontSize: 11.5, marginTop: 2 }}>
//                                 Janaseva Sahakari Bank Ltd., Hadapsar, Pune &nbsp;·&nbsp; Fields marked <span style={{ color: '#fca5a5' }}>*</span> are mandatory
//                             </div>
//                         </div>
//                     </div>

//                     {/* Form Body */}
//                     <form onSubmit={handleSubmit} noValidate style={{ padding: '20px 28px 28px' }}>
//                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12px 18px', alignItems: 'start' }}>

//                             {/* ── Section 1: Complaint Type ── */}
//                             <SecHead num="1" title="Complaint Type" />

//                             <Field label="Complaint Type" req name="complaintType" col={4}>
//                                 <Sel name="complaintType">
//                                     <option value="">-- Select Complaint Type --</option>
//                                     <option>New Complaint</option>
//                                     <option>Follow-up on Existing</option>
//                                     <option>Appeal / Escalation</option>
//                                 </Sel>
//                             </Field>

//                             {(form.complaintType === 'Follow-up on Existing' || form.complaintType === 'Appeal / Escalation') && (
//                                 <Field label="Previous Complaint Reference No." name="prevRef" col={4}>
//                                     <Inp name="prevRef" placeholder="e.g. JSB-123456789" />
//                                 </Field>
//                             )}

//                             {/* ── Section 2: Personal Details ── */}
//                             <SecHead num="2" title="Personal Details" />

//                             <Field label="Full Name" req name="fullName" col={4}>
//                                 <Inp name="fullName" placeholder="Enter your full name" />
//                             </Field>

//                             <Field label="Mobile Number" req name="mobile" col={4}>
//                                 <Inp name="mobile" placeholder="10-digit mobile number" type="tel" extra={{ maxLength: 10 }} />
//                             </Field>

//                             <Field label="Email Address" req name="email" col={4}>
//                                 <Inp name="email" placeholder="yourname@email.com" type="email" />
//                             </Field>

//                             {/* ── Section 3: Account Details ── */}
//                             <SecHead num="3" title="Account / Product Details" />

//                             <Field label="Account / Loan / Card No." req name="accountNumber" col={6}>
//                                 <Inp name="accountNumber" placeholder="Enter account / loan / card number" />
//                             </Field>

//                             <Field label="Branch Name" req name="branchName" col={6}>
//                                 <Inp name="branchName" placeholder="Enter branch name" />
//                             </Field>

//                             {/* ── Section 4: Complaint Details ── */}
//                             <SecHead num="4" title="Complaint Details" />

//                             <Field label="Complaint Category" req name="category" col={4}>
//                                 <Sel name="category">
//                                     <option value="">-- Select Category --</option>
//                                     {Object.keys(categories).map(c => <option key={c}>{c}</option>)}
//                                 </Sel>
//                             </Field>

//                             <Field label="Sub-Category" req name="subCategory" col={4}>
//                                 <Sel name="subCategory">
//                                     <option value="">-- Select Sub-Category --</option>
//                                     {form.category && categories[form.category]?.map(s => <option key={s}>{s}</option>)}
//                                 </Sel>
//                             </Field>

//                             <Field label="Complaint Description" req name="description" col={12}>
//                                 <textarea
//                                     name="description"
//                                     value={form.description}
//                                     onChange={handleChange}
//                                     placeholder="Describe your complaint in detail — include relevant dates, amounts, transaction IDs and what happened..."
//                                     rows={4}
//                                     style={{
//                                         width: '100%', padding: '9px 12px',
//                                         border: `1.5px solid ${errors.description ? '#fca5a5' : '#d1d5db'}`,
//                                         borderRadius: 6, fontSize: 13.5, outline: 'none',
//                                         boxSizing: 'border-box', resize: 'vertical',
//                                         fontFamily: 'inherit', color: '#1e293b',
//                                         backgroundColor: errors.description ? '#fff5f5' : '#fff',
//                                         lineHeight: 1.6,
//                                     }}
//                                 />
//                                 <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, marginTop: 4 }}>
//                                     <span style={{ color: '#ef4444' }}>{errors.description || ''}</span>
//                                     <span style={{ color: form.description.length >= 30 ? '#10b981' : '#9ca3af', fontWeight: 600 }}>
//                                         {form.description.length} characters &nbsp;·&nbsp; minimum 30
//                                     </span>
//                                 </div>
//                             </Field>

//                             {/* ── Declaration ── */}
//                             <div style={{ gridColumn: 'span 12', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 7, padding: '13px 16px', marginTop: 4 }}>
//                                 <label style={{ display: 'flex', gap: 11, cursor: 'pointer', fontSize: 13, color: '#374151', lineHeight: 1.75, alignItems: 'flex-start' }}>
//                                     <input
//                                         type="checkbox" name="declaration" checked={form.declaration} onChange={handleChange}
//                                         style={{ marginTop: 4, width: 15, height: 15, flexShrink: 0, accentColor: '#1e3a5f' }}
//                                     />
//                                     <span>
//                                         I hereby declare that I am an existing customer of <strong>Janaseva Sahakari Bank Ltd., Hadapsar, Pune</strong> and all information provided above is true and correct to the best of my knowledge. I authorise the bank to contact me using the details provided for complaint resolution purposes.
//                                         <span style={{ color: '#dc2626' }}> *</span>
//                                     </span>
//                                 </label>
//                                 {errors.declaration && (
//                                     <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, paddingLeft: 26, fontSize: 12, color: '#ef4444' }}>
//                                         <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
//                                         {errors.declaration}
//                                     </div>
//                                 )}
//                             </div>

//                             {/* ── Buttons ── */}
//                             <div style={{ gridColumn: 'span 12', display: 'flex', justifyContent: 'flex-end', gap: 12, borderTop: '1px solid #e5e7eb', paddingTop: 18, marginTop: 6 }}>
//                                 <button type="button" onClick={resetForm}
//                                     style={{ padding: '10px 24px', borderRadius: 6, border: '1.5px solid #d1d5db', backgroundColor: '#fff', color: '#374151', fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>
//                                     Reset
//                                 </button>
//                                 <button type="submit"
//                                     style={{ padding: '10px 30px', borderRadius: 6, border: 'none', backgroundColor: '#1e3a5f', color: '#fff', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.2px' }}>
//                                     Submit Complaint →
//                                 </button>
//                             </div>

//                         </div>
//                     </form>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default GeneralComplaint




// "use client";
// import React, { useState } from "react";

// const GeneralComplaint = () => {
//   const [formData, setFormData] = useState({
//     existingCustomer: "",
//     accountNumber: "",
//     complaintType: "",
//     fullName: "",
//     mobile: "",
//     email: "",
//     branch: "",
//     address: "",
//     complaintDetails: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Complaint Submitted Successfully");
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Report Complaints / Feedback
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Existing Customer */}
//         {/* Existing Customer */}
// <div>
//   <label className="font-medium">Existing Customer</label>
//   <select
//     name="existingCustomer"
//     value={formData.existingCustomer}
//     onChange={handleChange}
//     className="w-full border p-2 rounded"
//   >
//     <option value="">Select</option>
//     <option value="yes">Yes</option>
//     <option value="no">No</option>
//   </select>
// </div>

// {/* Show only if Yes */}
// {formData.existingCustomer === "yes" && (
//   <div>
//     <label className="font-medium">Account Number / Customer ID</label>
//     <input
//       type="text"
//       name="accountNumber"
//       value={formData.accountNumber}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//     />
//   </div>
// )}

//         {/* Complaint Type */}
//         <div>
//           <label className="font-medium">Select a Complaint</label>
//           <select
//             name="complaintType"
//             value={formData.complaintType}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select a Complaint</option>

//             <optgroup label="Account Related">
//               <option value="savings-account-issues">Savings Account Issues</option>
//               <option value="current-account-issues">Current Account Issues</option>
//               <option value="fd-rd-issues">Fixed Deposit / Recurring Deposit Issues</option>
//               <option value="kyc-issues">Account Opening / KYC Issues</option>
//               <option value="account-closure-issues">Account Closure Issues</option>
//             </optgroup>

//             <optgroup label="Cash & Branch Services">
//               <option value="cash-deposit-issues">Cash Deposit Issues</option>
//               <option value="cash-withdrawal-issues">Cash Withdrawal Issues</option>
//               <option value="counter-delay">Counter Service Delay</option>
//               <option value="branch-infrastructure">Branch Infrastructure / Cleanliness</option>
//               <option value="queue-management">Queue Management Issues</option>
//             </optgroup>

//             <optgroup label="Loan Related">
//               <option value="personal-loan-issues">Personal Loan Issues</option>
//               <option value="home-loan-issues">Home Loan Issues</option>
//               <option value="vehicle-loan-issues">Vehicle Loan Issues</option>
//               <option value="loan-disbursement-delay">Loan Disbursement Delay</option>
//               <option value="emi-interest-issues">EMI / Interest Related Issues</option>
//             </optgroup>

//             <optgroup label="Cards & Cheques">
//               <option value="cheque-book-issues">Cheque Book Issues</option>
//               <option value="cheque-clearance-delay">Cheque Clearance Delay</option>
//               <option value="debit-card-issues">Debit Card Issues</option>
//               <option value="credit-card-issues">Credit Card Issues</option>
//             </optgroup>

//             <optgroup label="Charges & Fees">
//               <option value="excess-charges">Excess / Wrong Charges</option>
//               <option value="hidden-charges">Hidden Charges</option>
//               <option value="penalty-dispute">Penalty / Fine Dispute</option>
//             </optgroup>

//             <optgroup label="Others">
//               <option value="service-delay">Delay in Service</option>
//               <option value="wrong-information">Wrong Information Provided</option>
//               <option value="general-complaint">Any Other General Complaint</option>
//             </optgroup>
//           </select>
//         </div>

//         {/* Full Name */}
//         <div>
//           <label className="font-medium">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Mobile */}
//         <div>
//           <label className="font-medium">Mobile Number</label>
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="font-medium">Email ID</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Branch */}
//         <div>
//           <label className="font-medium">Select Your Branch</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="font-medium">Address for Communication</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Complaint Details */}
//         <div>
//           <label className="font-medium">
//             Details of Your Complaint / Fraud Report / Feedback
//           </label>
//           <textarea
//             name="complaintDetails"
//             value={formData.complaintDetails}
//             onChange={handleChange}
//             rows="4"
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Submit Complaint
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GeneralComplaint;




// "use client";
// import { useState } from "react";

// export default function GeneralComplaint() {
//   const [formData, setFormData] = useState({
//     existingCustomer: "",
//     accountNumber: "",
//     complaintType: "",
//     fullName: "",
//     mobile: "",
//     email: "",
//     branch: "",
//     address: "",
//     complaintDetails: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3500);
//   };

//   const inputCls =
//     "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all";

//   const selectCls =
//     "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer";

//   const labelCls = "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 flex items-center justify-center py-8 px-4">
//       <div className="w-full" style={{ maxWidth: 1200 }}>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
//             <span className="w-1.5 h-1.5 bg-blue-300 rounded-full inline-block"></span>
//             Grievance Redressal Portal
//           </div>
//           <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Report a Complaint / Feedback</h1>
//           <p className="text-slate-500 text-sm mt-1">Fill in the details below. We respond within 3–7 working days.</p>
//         </div>

//         {/* Success Banner */}
//         {submitted && (
//           <div className="mb-4 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-3.5 text-sm font-medium">
//             <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//             Complaint submitted successfully! You'll receive a confirmation on your registered email.
//           </div>
//         )}

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">

//           {/* Top accent bar */}
//           <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500" />

//           <div className="px-10 py-8">
//             <form onSubmit={handleSubmit}>

//               {/* ── SECTION 1: Account Info ── */}
//               <div className="mb-7">
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</div>
//                   <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest">Account Information</h2>
//                   <div className="flex-1 h-px bg-slate-100"></div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-5">
//                   <div>
//                     <label className={labelCls}>Existing Customer <span className="text-blue-500">*</span></label>
//                     <div className="relative">
//                       <select name="existingCustomer" value={formData.existingCustomer} onChange={handleChange} className={selectCls}>
//                         <option value="">Select</option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                       </select>
//                       <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1e3163] text-xs">▾</span>
//                     </div>
//                   </div>

//                   <div className={`transition-all duration-300 ${formData.existingCustomer === "yes" ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
//                     <label className={labelCls}>Account No. / Customer ID</label>
//                     <input type="text" name="accountNumber" placeholder="e.g. 001234567890" value={formData.accountNumber} onChange={handleChange} className={inputCls} />
//                   </div>

//                   <div>
//                     <label className={labelCls}>Complaint Category <span className="text-blue-500">*</span></label>
//                     <div className="relative">
//                       <select name="complaintType" value={formData.complaintType} onChange={handleChange} className={selectCls}>
//                         <option value="">Select a category</option>
//                         <optgroup label="Account Related">
//                           <option value="savings-account-issues">Savings Account Issues</option>
//                           <option value="current-account-issues">Current Account Issues</option>
//                           <option value="fd-rd-issues">Fixed / Recurring Deposit Issues</option>
//                           <option value="kyc-issues">Account Opening / KYC Issues</option>
//                           <option value="account-closure-issues">Account Closure Issues</option>
//                         </optgroup>
//                         <optgroup label="Cash & Branch Services">
//                           <option value="cash-deposit-issues">Cash Deposit Issues</option>
//                           <option value="cash-withdrawal-issues">Cash Withdrawal Issues</option>
//                           <option value="counter-delay">Counter Service Delay</option>
//                           <option value="branch-infrastructure">Branch Infrastructure / Cleanliness</option>
//                           <option value="queue-management">Queue Management Issues</option>
//                         </optgroup>
//                         <optgroup label="Loan Related">
//                           <option value="personal-loan-issues">Personal Loan Issues</option>
//                           <option value="home-loan-issues">Home Loan Issues</option>
//                           <option value="vehicle-loan-issues">Vehicle Loan Issues</option>
//                           <option value="loan-disbursement-delay">Loan Disbursement Delay</option>
//                           <option value="emi-interest-issues">EMI / Interest Issues</option>
//                         </optgroup>
//                         <optgroup label="Cards & Cheques">
//                           <option value="cheque-book-issues">Cheque Book Issues</option>
//                           <option value="cheque-clearance-delay">Cheque Clearance Delay</option>
//                           <option value="debit-card-issues">Debit Card Issues</option>
//                           <option value="credit-card-issues">Credit Card Issues</option>
//                         </optgroup>
//                         <optgroup label="Charges & Fees">
//                           <option value="excess-charges">Excess / Wrong Charges</option>
//                           <option value="hidden-charges">Hidden Charges</option>
//                           <option value="penalty-dispute">Penalty / Fine Dispute</option>
//                         </optgroup>
//                         <optgroup label="Others">
//                           <option value="service-delay">Delay in Service</option>
//                           <option value="wrong-information">Wrong Information Provided</option>
//                           <option value="general-complaint">General Complaint</option>
//                         </optgroup>
//                       </select>
//                       <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1e3163] text-xs">▾</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* ── SECTION 2: Personal Details ── */}
//               <div className="mb-7">
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</div>
//                   <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest">Personal Details</h2>
//                   <div className="flex-1 h-px bg-slate-100"></div>
//                 </div>

//                 <div className="grid grid-cols-4 gap-5">
//                   <div>
//                     <label className={labelCls}>Full Name <span className="text-blue-500">*</span></label>
//                     <input type="text" name="fullName" placeholder="As per bank records" value={formData.fullName} onChange={handleChange} className={inputCls} />
//                   </div>
//                   <div>
//                     <label className={labelCls}>Mobile Number <span className="text-blue-500">*</span></label>
//                     <input type="tel" name="mobile" placeholder="+91 00000 00000" value={formData.mobile} onChange={handleChange} className={inputCls} />
//                   </div>
//                   <div>
//                     <label className={labelCls}>Email Address <span className="text-blue-500">*</span></label>
//                     <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className={inputCls} />
//                   </div>
//                   <div>
//                     <label className={labelCls}>Home Branch</label>
//                     <input type="text" name="branch" placeholder="e.g. Andheri West" value={formData.branch} onChange={handleChange} className={inputCls} />
//                   </div>
//                 </div>

//                 <div className="mt-5">
//                   <label className={labelCls}>Address for Communication</label>
//                   <input type="text" name="address" placeholder="Street, City, State, PIN Code" value={formData.address} onChange={handleChange} className={inputCls} />
//                 </div>
//               </div>

//               {/* ── SECTION 3: Complaint Details ── */}
//               <div className="mb-7">
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</div>
//                   <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest">Complaint Details</h2>
//                   <div className="flex-1 h-px bg-slate-100"></div>
//                 </div>

//                 <div>
//                   <label className={labelCls}>Describe your complaint / fraud report / feedback <span className="text-blue-500">*</span></label>
//                   <textarea
//                     name="complaintDetails"
//                     rows={4}
//                     placeholder="Provide a clear description. Include relevant dates, transaction IDs, amounts, or reference numbers if applicable..."
//                     value={formData.complaintDetails}
//                     onChange={handleChange}
//                     className={inputCls + " resize-none"}
//                   />
//                 </div>
//               </div>

//               {/* ── Footer / Submit ── */}
//               <div className="flex items-center justify-between pt-5 border-t border-slate-100">
//                 <div className="flex items-center gap-2 text-[#1e3163] text-xs">
//                   <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                   Your data is secure &amp; confidential · RBI Compliant
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-200"
//                 >
//                   Submit Complaint
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// }



// "use client";
// import { useState } from "react";

// export default function GeneralComplaint() {
//   const [formData, setFormData] = useState({
//     existingCustomer: "",
//     accountNumber: "",
//     complaintType: "",
//     fullName: "",
//     mobile: "",
//     email: "",
//     branch: "",
//     address: "",
//     complaintDetails: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [focused, setFocused] = useState(null);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3500);
//   };

//   const fieldBase =
//     "w-full bg-transparent border-b-2 py-2.5 px-1 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 font-light";

//   const fieldCls = (name) =>
//     `${fieldBase} ${focused === name ? "border-amber-500" : "border-slate-200 hover:border-slate-400"}`;

//   const selectBase =
//     "w-full bg-white border-b-2 py-2.5 px-1 text-sm text-slate-700 outline-none transition-all duration-300 font-light appearance-none cursor-pointer";

//   const selectCls = (name) =>
//     `${selectBase} ${focused === name ? "border-amber-500" : "border-slate-200 hover:border-slate-400"}`;

//   const labelCls = "block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1e3163] mb-1";

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');
//         .pf { font-family: 'Playfair Display', serif; }
//         .dm { font-family: 'DM Sans', sans-serif; }
//         body { font-family: 'DM Sans', sans-serif; }
//         .gold-btn::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: #f5b037;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.35s ease;
//           z-index: 0;
//           border-radius: 4px;
//         }
//         .gold-btn:hover::before { transform: scaleX(1); }
//         .gold-btn:hover { color: #1a1a2e !important; }
//         .gold-btn span, .gold-btn svg { position: relative; z-index: 1; }
//         .reveal { animation: slideDown 0.3s ease; }
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         select option { font-family: 'DM Sans', sans-serif; }
//       `}</style>

//       <div
//         className="dm min-h-screen flex items-center justify-center py-10 px-4"
//         style={{ background: "linear-gradient(135deg,#f5f3ef 0%,#eef0f5 100%)" }}
//       >
//         <div className="w-full" style={{ maxWidth: 1200 }}>

//           {/* ── TOP HEADER ── */}
//           <div className="text-center mb-8">
//             <div
//               className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
//               style={{ background: "#1a1a2e", color: "#f5b037" }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#f5b037" }}></span>
//               BankCare · Grievance Portal
//             </div>
//             <h1 className="pf text-4xl font-bold text-slate-800 leading-tight">
//               Report Complaints &amp; <span style={{ color: "#f5b037" }}>Feedback</span>
//             </h1>
//             <p className="text-[#1e3163] text-sm font-light mt-2 tracking-wide">
//               All concerns are reviewed within 3–7 working days · RBI Compliant
//             </p>
//           </div>

//           {/* ── CARD ── */}
//           <div
//             className="bg-white rounded-2xl overflow-hidden"
//             style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.09), 0 4px 20px rgba(0,0,0,0.04)" }}
//           >
//             {/* gold top bar */}
//             <div className="h-1" style={{ background: "linear-gradient(90deg,#1a1a2e,#f5b037,#1a1a2e)" }} />

//             <div className="px-12 py-10">

//               {/* Success banner */}
//               {submitted && (
//                 <div className="reveal mb-6 flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium"
//                   style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", color: "#065f46" }}>
//                   <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   Complaint submitted! A reference number will be sent to your registered email shortly.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-10">

//                 {/* ══ SECTION 1 ══ */}
//                 <div>
//                   <div className="flex items-center gap-4 mb-6">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e3163]">
//                       01 — Account Information
//                     </p>
//                     <div className="flex-1 h-px bg-slate-100" />
//                   </div>

//                   <div className="grid grid-cols-3 gap-x-10 gap-y-7">

//                     {/* Existing Customer */}
//                     <div>
//                       <label className={labelCls}>Existing Customer <span style={{ color: "#f5b037" }}>*</span></label>
//                       <div className="relative">
//                         <select
//                           name="existingCustomer"
//                           value={formData.existingCustomer}
//                           onChange={handleChange}
//                           onFocus={() => setFocused("existingCustomer")}
//                           onBlur={() => setFocused(null)}
//                           className={selectCls("existingCustomer")}
//                         >
//                           <option value="">Select an option</option>
//                           <option value="yes">Yes</option>
//                           <option value="no">No</option>
//                         </select>
//                         <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#1e3163] text-xs">▾</span>
//                       </div>
//                     </div>

//                     {/* Account Number */}
//                     <div className={`transition-all duration-300 ${formData.existingCustomer === "yes" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//                       {formData.existingCustomer === "yes" && (
//                         <div className="reveal">
//                           <label className={labelCls}>Account No. / Customer ID</label>
//                           <input
//                             type="text"
//                             name="accountNumber"
//                             placeholder="e.g. 001234567890"
//                             value={formData.accountNumber}
//                             onChange={handleChange}
//                             onFocus={() => setFocused("accountNumber")}
//                             onBlur={() => setFocused(null)}
//                             className={fieldCls("accountNumber")}
//                           />
//                         </div>
//                       )}
//                     </div>

//                     {/* Complaint Type */}
//                     <div>
//                       <label className={labelCls}>Complaint Category <span style={{ color: "#f5b037" }}>*</span></label>
//                       <div className="relative">
//                         <select
//                           name="complaintType"
//                           value={formData.complaintType}
//                           onChange={handleChange}
//                           onFocus={() => setFocused("complaintType")}
//                           onBlur={() => setFocused(null)}
//                           className={selectCls("complaintType")}
//                         >
//                           <option value="">Select a complaint category</option>
//                           <optgroup label="Account Related">
//                             <option value="savings-account-issues">Savings Account Issues</option>
//                             <option value="current-account-issues">Current Account Issues</option>
//                             <option value="fd-rd-issues">Fixed / Recurring Deposit Issues</option>
//                             <option value="kyc-issues">Account Opening / KYC Issues</option>
//                             <option value="account-closure-issues">Account Closure Issues</option>
//                           </optgroup>
//                           <optgroup label="Cash & Branch Services">
//                             <option value="cash-deposit-issues">Cash Deposit Issues</option>
//                             <option value="cash-withdrawal-issues">Cash Withdrawal Issues</option>
//                             <option value="counter-delay">Counter Service Delay</option>
//                             <option value="branch-infrastructure">Branch Infrastructure / Cleanliness</option>
//                             <option value="queue-management">Queue Management Issues</option>
//                           </optgroup>
//                           <optgroup label="Loan Related">
//                             <option value="personal-loan-issues">Personal Loan Issues</option>
//                             <option value="home-loan-issues">Home Loan Issues</option>
//                             <option value="vehicle-loan-issues">Vehicle Loan Issues</option>
//                             <option value="loan-disbursement-delay">Loan Disbursement Delay</option>
//                             <option value="emi-interest-issues">EMI / Interest Issues</option>
//                           </optgroup>
//                           <optgroup label="Cards & Cheques">
//                             <option value="cheque-book-issues">Cheque Book Issues</option>
//                             <option value="cheque-clearance-delay">Cheque Clearance Delay</option>
//                             <option value="debit-card-issues">Debit Card Issues</option>
//                             <option value="credit-card-issues">Credit Card Issues</option>
//                           </optgroup>
//                           <optgroup label="Charges & Fees">
//                             <option value="excess-charges">Excess / Wrong Charges</option>
//                             <option value="hidden-charges">Hidden Charges</option>
//                             <option value="penalty-dispute">Penalty / Fine Dispute</option>
//                           </optgroup>
//                           <optgroup label="Others">
//                             <option value="service-delay">Delay in Service</option>
//                             <option value="wrong-information">Wrong Information Provided</option>
//                             <option value="general-complaint">General Complaint</option>
//                           </optgroup>
//                         </select>
//                         <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#1e3163] text-xs">▾</span>
//                       </div>
//                     </div>

//                   </div>
//                 </div>

//                 {/* ══ SECTION 2 ══ */}
//                 <div>
//                   <div className="flex items-center gap-4 mb-6">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e3163]">
//                       02 — Personal Details
//                     </p>
//                     <div className="flex-1 h-px bg-slate-100" />
//                   </div>

//                   <div className="grid grid-cols-4 gap-x-10 gap-y-7">
//                     {[
//                       { name: "fullName", label: "Full Name", placeholder: "As per bank records", type: "text", req: true },
//                       { name: "mobile",   label: "Mobile Number", placeholder: "+91 00000 00000", type: "tel", req: true },
//                       { name: "email",    label: "Email Address",  placeholder: "you@example.com", type: "email", req: true },
//                       { name: "branch",   label: "Home Branch",    placeholder: "e.g. Andheri West", type: "text", req: false },
//                     ].map(({ name, label, placeholder, type, req }) => (
//                       <div key={name}>
//                         <label className={labelCls}>
//                           {label} {req && <span style={{ color: "#f5b037" }}>*</span>}
//                         </label>
//                         <input
//                           type={type}
//                           name={name}
//                           placeholder={placeholder}
//                           value={formData[name]}
//                           onChange={handleChange}
//                           onFocus={() => setFocused(name)}
//                           onBlur={() => setFocused(null)}
//                           className={fieldCls(name)}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-7">
//                     <label className={labelCls}>Address for Communication</label>
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Street, City, State, PIN Code"
//                       value={formData.address}
//                       onChange={handleChange}
//                       onFocus={() => setFocused("address")}
//                       onBlur={() => setFocused(null)}
//                       className={fieldCls("address")}
//                     />
//                   </div>
//                 </div>

//                 {/* ══ SECTION 3 ══ */}
//                 <div>
//                   <div className="flex items-center gap-4 mb-6">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e3163]">
//                       03 — Complaint Details
//                     </p>
//                     <div className="flex-1 h-px bg-slate-100" />
//                   </div>

//                   <label className={labelCls}>
//                     Describe your complaint / fraud report / feedback <span style={{ color: "#f5b037" }}>*</span>
//                   </label>
//                   <textarea
//                     name="complaintDetails"
//                     rows={4}
//                     placeholder="Please provide a clear description. Include dates, amounts, transaction IDs or reference numbers if applicable..."
//                     value={formData.complaintDetails}
//                     onChange={handleChange}
//                     onFocus={() => setFocused("complaintDetails")}
//                     onBlur={() => setFocused(null)}
//                     className={fieldCls("complaintDetails") + " resize-none block w-full"}
//                   />
//                 </div>

//                 {/* ══ SUBMIT ROW ══ */}
//                 <div className="flex items-center justify-between pt-6 border-t border-slate-100">
//                   <div className="flex items-center gap-2 text-xs text-[#1e3163] font-light">
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//                         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                     </svg>
//                     Your data is secure &amp; confidential · By submitting you agree to our grievance terms
//                   </div>

//                   <button
//                     type="submit"
//                     className="gold-btn relative inline-flex items-center gap-2.5 text-sm font-medium px-9 py-3.5 rounded transition-all duration-200 overflow-hidden"
//                     style={{ background: "#1a1a2e", color: "white" }}
//                   >
//                     <span>Submit Complaint</span>
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </button>
//                 </div>

//               </form>
//             </div>
//           </div>

//           {/* Bottom note */}
//           <p className="text-center text-xs text-[#1e3163] font-light mt-5 tracking-wide">
//             Need urgent help? Call our 24/7 helpline at{" "}
//             <span className="font-medium text-slate-500">1800-XXX-XXXX</span> · Toll-Free
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import Select from "react-select";
import { IoSend } from "react-icons/io5";
export default function GeneralComplaint() {
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
                  Complaint submitted! A reference number will be sent to your registered email shortly.
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

                    {/* Existing Customer */}
                    <div>
                      <label className={labelCls}>
                        Existing Customer <span className="text-red">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="existingCustomer"
                          value={formData.existingCustomer}
                          onChange={handleChange}
                          onFocus={() => setFocused("existingCustomer")}
                          onBlur={() => setFocused(null)}
                          className={selectCls("existingCustomer")}
                        >
                          {/* <option value="">Select an option</option> */}
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#1e3163] text-xs">▾</span>
                      </div>
                    </div>

                    {/* Account Number */}
                    <div className={`transition-all duration-300 ${formData.existingCustomer === "yes" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                      {formData.existingCustomer === "yes" && (
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
                      )}
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
                          <optgroup label="Account Related">
                            <option value="savings-account-issues">Savings Account Issues</option>
                            <option value="current-account-issues">Current Account Issues</option>
                            <option value="fd-rd-issues">Fixed / Recurring Deposit Issues</option>
                            <option value="kyc-issues">Account Opening / KYC Issues</option>
                            <option value="account-closure-issues">Account Closure Issues</option>
                          </optgroup>
                          <optgroup label="Cash & Branch Services">
                            <option value="cash-deposit-issues">Cash Deposit Issues</option>
                            <option value="cash-withdrawal-issues">Cash Withdrawal Issues</option>
                            <option value="counter-delay">Counter Service Delay</option>
                            <option value="branch-infrastructure">Branch Infrastructure / Cleanliness</option>
                            <option value="queue-management">Queue Management Issues</option>
                          </optgroup>
                          <optgroup label="Loan Related">
                            <option value="personal-loan-issues">Personal Loan Issues</option>
                            <option value="home-loan-issues">Home Loan Issues</option>
                            <option value="vehicle-loan-issues">Vehicle Loan Issues</option>
                            <option value="loan-disbursement-delay">Loan Disbursement Delay</option>
                            <option value="emi-interest-issues">EMI / Interest Issues</option>
                          </optgroup>
                          <optgroup label="Cards & Cheques">
                            <option value="cheque-book-issues">Cheque Book Issues</option>
                            <option value="cheque-clearance-delay">Cheque Clearance Delay</option>
                            <option value="debit-card-issues">Debit Card Issues</option>
                            <option value="credit-card-issues">Credit Card Issues</option>
                          </optgroup>
                          <optgroup label="Charges & Fees">
                            <option value="excess-charges">Excess / Wrong Charges</option>
                            <option value="hidden-charges">Hidden Charges</option>
                            <option value="penalty-dispute">Penalty / Fine Dispute</option>
                          </optgroup>
                          <optgroup label="Others">
                            <option value="service-delay">Delay in Service</option>
                            <option value="wrong-information">Wrong Information Provided</option>
                            <option value="general-complaint">General Complaint</option>
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