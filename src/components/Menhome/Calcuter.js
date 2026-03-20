// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import resource01 from '../../assets/images/resources/loan-calculator-1-111.png'

// function Calcuter() {

//     const [loanMoney, setLoanMoney] = useState(16000);
//     const [loanMonth, setLoanMonth] = useState(8);
//     const [interestRate, setInterestRate] = useState(15);

//     const [Money, setMoney] = useState(0);
//     const [Month, setMonth] = useState(0);

//     useEffect(() => {
//         if (loanMoney > 0 && loanMonth > 0) {
//             emiCalculate();
//         }
//     }, [loanMoney, loanMonth]);
//     const emiCalculate = () => {
//         console.log("ddsfdfef fsfasf");

//         const interestRatePercent = parseInt(interestRate, 10) / 100;
//         const totalPay = loanMoney * interestRatePercent + parseInt(loanMoney, 10);
//         const monthlyPay = totalPay / parseInt(loanMonth, 10);

//         setMoney(parseInt(monthlyPay, 10));
//         setMonth(parseInt(totalPay, 10));
//     };
//     return (
//         <>
//             <section className="loan-calculator loan-calculator--has-bg pt-60 pb-60">
//                 <div className="container">
//                     <div className="loan-calculator__top">
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="block-title text-left">
//                                     <p className="block-title__tagline">calculate your rate</p>
//                                     <h2 className="block-title__title">
//                                         How much do you need loan for you?
//                                     </h2>
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <p className="loan-calculator__top__text">
//                                     Nullam vel nibh facilisis lectus fermentum ultrices quis non
//                                     risus. Lorem ipsum dolor sit amet, consectetur adipiscing
//                                     elit. In hac habitasse platea dictumst.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="loan-calculator__box">
//                         <div className="row row-gutter-x-0">
//                             <div className="col-lg-6">
//                                 <form className="loan-calculator__form" action="/contact" id="loan-calculator" data-interest-rate="15" >
//                                     <div className="input-box__top">
//                                         <span>$10000</span>
//                                         <span>$40000</span>
//                                     </div>
//                                     <div>
//                                         <input color="orange-50" className="w-100 slider" type="range" id="volume" min="10000" max="40000" onChange={(e) => { setLoanMoney(e.target.value); }} />
//                                         <h6>${loanMoney}</h6>
//                                     </div>
//                                     <div className="input-box">
//                                         <div className="range-slider-count" id="range-slider-count"></div>
//                                         <input type="hidden" value="" id="min-value-rangeslider-count" />
//                                         <input type="hidden" value="" id="max-value-rangeslider-count" />
//                                     </div>
//                                     <div className="input-box__top">
//                                         <span>1 Month</span>
//                                         <span>12 Months</span>
//                                     </div>
//                                     <input style={{ color: "orange-50" }} className="w-100 slider" type="range" id="volume" min="1" max="12" value={loanMonth} onChange={(e) => { setLoanMonth(e.target.value); console.log(e); }} />
//                                     <h6>{loanMonth} Months</h6>
//                                     <div className="input-box">
//                                         <div className="range-slider-month" id="range-slider-month"></div>
//                                         <input type="hidden" value="" id="min-value-rangeslider-month" />
//                                         <input type="hidden" value="" id="max-value-rangeslider-month" />
//                                     </div>
//                                     <p>
//                                         <span>Pay Monthly</span>
//                                         <b>
//                                             $<i id="loan-monthly-pay">{Money}</i>
//                                         </b>
//                                     </p>
//                                     <p>
//                                         <span>Term of Use</span>
//                                         <b>
//                                             <i id="loan-month">{loanMonth}</i> Months
//                                         </b>
//                                     </p>
//                                     <p>
//                                         <span>Total Pay Back</span>
//                                         <b>
//                                             $<i id="loan-total">{Month}</i>
//                                         </b>
//                                     </p>
//                                     <Link to="/applynow" className="thm-btn thm-btn--dark-hover"> Apply For Loan </Link>
//                                     <div className="loan-calculator__form__terms">
//                                         *These calculators are provided only as general self-help
//                                         Planning Tools. Results depend on other factors.
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="loan-calculator__image">
//                                     <img src={resource01} alt="" />
//                                     <div className="loan-calculator__image__caption wow fadeInUp" data-wow-duration="1500ms" >
//                                         <div className="loan-calculator__image__caption__inner">
//                                             <h3 className="loan-calculator__image__title">
//                                                 98<span>%</span>
//                                             </h3>
//                                             <p className="loan-calculator__image__text">
//                                                 Satisfied Customers
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Calcuter







// import { Link } from "react-router-dom";
// import React, { useState, useEffect, useRef } from "react";
// import resource01 from '../../assets/images/resources/handsome-man-pointing-lateral.png'

// function Calcuter() {
//     const [loanAmt, setLoanAmt] = useState(100000);
//     const [loanMonth, setLoanMonth] = useState(12);
//     const [interestRate, setInterestRate] = useState(10);
//     const [emiVal, setEmiVal] = useState(0);
//     const [intVal, setIntVal] = useState(5499.06);
//     const [TotalVal, setTotalVal] = useState(0);
//     const chartRef = useRef(null);

//     useEffect(() => {
//         if (loanAmt > 0 && loanMonth > 0 && interestRate > 0) {
//             emiCalculate();
//         }
//     }, [loanAmt, loanMonth, interestRate]);

//     const emiCalculate = () => {
//         const monthlyInterestRatio = interestRate / 100 / 12;
//         const top = Math.pow(1 + monthlyInterestRatio, loanMonth);
//         const bottom = top - 1;
//         const sp = top / bottom;
//         const emi = loanAmt * monthlyInterestRatio * sp;
//         const emi_str = emi.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         const full = loanMonth * emi;
//         const interest = full - loanAmt;
//         const int_str = interest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         const full_str = full.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//         setEmiVal(emi_str);
//         setIntVal(parseFloat(int_str.replace(/,/g, "")));
//         setTotalVal(full_str);
//     };

//     const handleLoanAmountChange = (e) => {
//         let value = Number(e.target.value);

//         if (value < 10000) value = 10000;
//         if (value > 500000) value = 500000;

//         setLoanAmt(value);
//     };

//     const handleLoanMonthChange = (e) => {
//         let value = Number(e.target.value);

//         if (value < 1) value = 1;
//         if (value > 24) value = 24;

//         setLoanMonth(value);
//     };

//     const handleInterestChange = (e) => {
//         let value = Number(e.target.value);

//         if (value < 1) value = 1;
//         if (value > 24) value = 24;

//         setInterestRate(value);
//     };

//     return (
//         <>
//             <section className="loan-calculator loan-calculator--has-bg pt-60 ">
//                 <div className="container">
//                     <div className="loan-calculator__top">
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="block-title text-left">
//                                     <p className="block-title__tagline">calculate your rate</p>
//                                     <h2 className="block-title__title">
//                                         How much do you need loan for you?
//                                     </h2>
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <p className="loan-calculator__top__text">
//                                     Nullam vel nibh facilisis lectus fermentum ultrices quis non
//                                     risus. Lorem ipsum dolor sit amet, consectetur adipiscing
//                                     elit. In hac habitasse platea dictumst.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="col-xl-5 col-lg-12">
//                             <div className="slider-box">
//                                 <form>
//                                     <div className="main-slide">
//                                         <div className="single-loan-header">
//                                             <h4>Loan Amount</h4>
//                                             <input
//                                                 type="number"
//                                                 className="form-control input-control"
//                                                 min={10000}
//                                                 max={500000}
//                                                 step={1000}
//                                                 value={loanAmt}
//                                                 onChange={handleLoanAmountChange}
//                                             />
//                                         </div>
//                                         <input
//                                             className="w-100 slider"
//                                             type="range"
//                                             min="10000"
//                                             max="500000"
//                                             step="1000"
//                                             value={loanAmt}
//                                             onChange={handleLoanAmountChange}
//                                         />
//                                         <div className="loan-counter-value">
//                                             <span>₹</span>
//                                             <h6>{loanAmt}</h6>
//                                         </div>
//                                     </div>
//                                     <div className="main-slide">
//                                         <div className="single-loan-header">
//                                             <h4>Loan Months</h4>
//                                             <input
//                                                 type="number"
//                                                 className="form-control input-control"
//                                                 min={1}
//                                                 max={24}
//                                                 value={loanMonth}
//                                                 onChange={handleLoanMonthChange}
//                                             />
//                                         </div>
//                                         <input
//                                             className="w-100 slider"
//                                             type="range"
//                                             min="1"
//                                             max="24"
//                                             value={loanMonth}
//                                             onChange={handleLoanMonthChange}
//                                         />
//                                         <div className="loan-counter-value">
//                                             <h6>{loanMonth}</h6>
//                                             <span>Months</span>
//                                         </div>
//                                     </div>
//                                     <div className="main-slide">
//                                         <div className="single-loan-header">
//                                             <h4>Interest Rate</h4>
//                                             <input
//                                                 type="number"
//                                                 className="form-control input-control"
//                                                 min={1}
//                                                 max={16}
//                                                 value={interestRate}
//                                                 onChange={handleInterestChange}
//                                             />
//                                         </div>
//                                         <input
//                                             className="w-100 slider"
//                                             type="range"
//                                             min="1"
//                                             max="24"
//                                             value={interestRate}
//                                             onChange={handleInterestChange}
//                                         />
//                                         <div className="loan-counter-value">
//                                             <h6>{interestRate}</h6>
//                                             <span>%</span>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-xl-4">
//                             <div className="emi-calculation">
//                                 <div className="emi-calculation-content">
//                                     <p>
//                                         <span>Monthly EMI</span>
//                                         <b>₹<i>{emiVal}</i></b>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="loan-calculation">
//                                 <div className="loan-calculation-content total-loan-form">
//                                     <div className="total-loan-form-calculation">
//                                         <p>
//                                             <span>Total Interest</span>
//                                             <b>₹<i>{intVal}</i></b>
//                                         </p>
//                                         <p>
//                                             <span>Total Amount Payable</span>
//                                             <b>₹<i>{TotalVal}</i></b>
//                                         </p>
//                                         <Link to="/#" className="thm-btn" target="_blank" rel="nofollow">
//                                             Apply For Loan
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-3">
//                             <div className="loan-calculator-image">
//                                 <img
//                                     src={resource01}
//                                     alt="Loan Calculator"
//                                     className="img-fluid"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Calcuter






import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import resource01 from '../../assets/images/resources/handsome-man-pointing-lateral.png'

function Calcuter() {
    const [loanAmt, setLoanAmt] = useState(100000);
    const [loanMonth, setLoanMonth] = useState(12);
    const [interestRate, setInterestRate] = useState(10);
    const [emiVal, setEmiVal] = useState(0);
    const [intVal, setIntVal] = useState(5499.06);
    const [TotalVal, setTotalVal] = useState(0);
    const chartRef = useRef(null);
    const [activeTab, setActiveTab] = useState("home");

    const tabData = {
        home: { amount: 500000, months: 24, interest: 8 },
        personal: { amount: 200000, months: 12, interest: 12 },
        car: { amount: 300000, months: 18, interest: 9 },
        education: { amount: 150000, months: 24, interest: 6 }
    };
    useEffect(() => {
        const selected = tabData[activeTab];
        setLoanAmt(selected.amount);
        setLoanMonth(selected.months);
        setInterestRate(selected.interest);
    }, [activeTab]);

    useEffect(() => {
        if (loanAmt > 0 && loanMonth > 0 && interestRate > 0) {
            emiCalculate();
        }
    }, [loanAmt, loanMonth, interestRate]);

    const emiCalculate = () => {
        const monthlyInterestRatio = interestRate / 100 / 12;
        const top = Math.pow(1 + monthlyInterestRatio, loanMonth);
        const bottom = top - 1;
        const sp = top / bottom;
        const emi = loanAmt * monthlyInterestRatio * sp;

        const emi_str = emi.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full = loanMonth * emi;
        const interest = full - loanAmt;

        const int_str = interest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full_str = full.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        setEmiVal(emi_str);
        setIntVal(int_str);
        setTotalVal(full_str);
    };

    // 🔒 LIMITS APPLIED (NO DESIGN CHANGE)
    const handleLoanAmountChange = (e) => {
        let value = Number(e.target.value);
        if (value < 10000) value = 10000;
        if (value > 500000) value = 500000;
        setLoanAmt(value);
    };

    const handleLoanMonthChange = (e) => {
        let value = Number(e.target.value);
        if (value < 1) value = 1;
        if (value > 60) value = 60;
        setLoanMonth(value);
    };

    const handleInterestChange = (e) => {
        let value = Number(e.target.value);
        if (value < 1) value = 1;
        if (value > 24) value = 24;
        setInterestRate(value);
    };

    return (
        <>
            <section className="loan-calculator loan-calculator--has-bg pt-60 ">
                <div className="container">
                    <div className="loan-calculator__top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">calculate your rate</p>
                                    <h2 className="block-title__title">
                                        How much do you need loan for you?
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="loan-calculator__top__text">
                                    Easily estimate your loan amount, interest, and monthly EMI in just a few clicks. Choose the loan type that suits your needs and plan your finances with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bank-tabs mb-4">
                        <button
                            className={`bank-tab cal-tab ${activeTab === "home" ? "active" : ""}`}
                            onClick={() => setActiveTab("home")}
                        >
                            Home Loan
                        </button>

                        <button
                            className={`bank-tab cal-tab ${activeTab === "personal" ? "active" : ""}`}
                            onClick={() => setActiveTab("personal")}
                        >
                            Personal Loan
                        </button>

                        <button
                            className={`bank-tab cal-tab ${activeTab === "car" ? "active" : ""}`}
                            onClick={() => setActiveTab("car")}
                        >
                            Car Loan
                        </button>

                        <button
                            className={`bank-tab cal-tab ${activeTab === "education" ? "active" : ""}`}
                            onClick={() => setActiveTab("education")}
                        >
                            Education Loan
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-xl-5 col-lg-12">
                            <div className="slider-box">
                                <form>
                                    {/* Loan Amount */}
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Loan Amount</h4>
                                            <input
                                                type="number"
                                                className="form-control input-control"
                                                min={10000}
                                                max={500000}
                                                step={1000}
                                                value={loanAmt}
                                                onChange={handleLoanAmountChange}
                                            />
                                        </div>
                                        <input
                                            className="w-100 slider"
                                            type="range"
                                            min="10000"
                                            max="500000"
                                            step="1000"
                                            value={loanAmt}
                                            onChange={handleLoanAmountChange}
                                        />
                                        <div className="loan-counter-value">
                                            <span>₹</span>
                                            <h6>{loanAmt}</h6>
                                        </div>
                                    </div>

                                    {/* Loan Months */}
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Loan Months</h4>
                                            <input
                                                type="number"
                                                className="form-control input-control"
                                                min={1}
                                                max={60}
                                                value={loanMonth}
                                                onChange={handleLoanMonthChange}
                                            />
                                        </div>
                                        <input
                                            className="w-100 slider"
                                            type="range"
                                            min="1"
                                            max="60"
                                            value={loanMonth}
                                            onChange={handleLoanMonthChange}
                                        />
                                        <div className="loan-counter-value">
                                            <h6>{loanMonth}</h6>
                                            <span>Months</span>
                                        </div>
                                    </div>

                                    {/* Interest Rate */}
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Interest Rate</h4>
                                            <input
                                                type="number"
                                                className="form-control input-control"
                                                min={1}
                                                max={24}
                                                value={interestRate}
                                                onChange={handleInterestChange}
                                            />
                                        </div>
                                        <input
                                            className="w-100 slider"
                                            type="range"
                                            min="1"
                                            max="24"
                                            value={interestRate}
                                            onChange={handleInterestChange}
                                        />
                                        <div className="loan-counter-value">
                                            <h6>{interestRate}</h6>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="emi-calculation">
                                <div className="emi-calculation-content">
                                    <p>
                                        <span>Monthly EMI</span>
                                        <b>₹<i>{emiVal}</i></b>
                                    </p>
                                </div>
                            </div>

                            <div className="loan-calculation">
                                <div className="loan-calculation-content total-loan-form">
                                    <div className="total-loan-form-calculation">
                                        <p>
                                            <span>Total Interest</span>
                                            <b>₹<i>{intVal}</i></b>
                                        </p>
                                        <p>
                                            <span>Total Amount Payable</span>
                                            <b>₹<i>{TotalVal}</i></b>
                                        </p>
                                        <Link to="/#" className="thm-btn">
                                            Apply For Loan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="loan-calculator-image">
                                <img src={resource01} alt="Loan Calculator" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Calcuter;
