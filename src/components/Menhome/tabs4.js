
// import React, { useState } from "react";

// const Tabs4 = () => {
//     const [activeTab, setActiveTab] = useState("loan");
//     const [index, setIndex] = useState(1);

//     const data = {
//         loan: {
//             title: "Loans",
//             items: [
//                 {
//                     title: "Home Loan",
//                     desc: "Affordable home loans with flexible repayment options",
//                     btn1: "Apply Now",
//                     btn2: "Know More",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Commercial Car Loan",
//                     desc: "Quick personal loans for all your financial needs",
//                     btn1: "Apply Now",
//                     btn2: "Know More",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Machinery Loan",
//                     desc: "Grow your business with easy and fast funding",
//                     btn1: "Apply Now",
//                     btn2: "Know More",
//                     img: "../../../assets/images/home/recuring.png"
//                 }, {
//                     title: "E Bike Loan",
//                     desc: "Affordable home loans with flexible repayment options",
//                     btn1: "Apply Now",
//                     btn2: "Know More",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: " Student Loan",
//                     desc: "Quick personal loans for all your financial needs",
//                     btn1: "Apply Now",
//                     btn2: "Know More",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//             ]
//         },

//         deposit: {
//             title: "Deposits",
//             items: [
//                 {
//                     title: "Current Account",
//                     desc: "Safe savings account with attractive interest rates",
//                     btn1: "Open Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Saving Account",
//                     desc: "Safe savings account with attractive interest rates",
//                     btn1: "Open Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Fixed Deposit",
//                     desc: "Guaranteed returns with flexible tenure options",
//                     btn1: "Invest Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Recurring Deposit",
//                     desc: "Build wealth by saving small amounts regularly",
//                     btn1: "Start Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 }
//             ]
//         },

//         insurance: {
//             title: "Insurance",
//             items: [
//                 {
//                     title: "Life Insurance",
//                     desc: "Protect your family with comprehensive life cover",
//                     btn1: "Buy Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Health Insurance",
//                     desc: "Cashless medical coverage for your entire family",
//                     btn1: "Buy Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "General Insurance",
//                     desc: "Complete protection for your car and bike",
//                     btn1: "Renew Now",
//                     img: "../../../assets/images/home/recuring.png"
//                 }
//             ]
//         },

//         interest: {
//             title: "Interest Rates",
//             items: [
//                 {
//                     title: "Loan Interest rate",
//                     desc: "Transparent and competitive loan interest rates",
//                     btn1: "View Rates",
//                     img: "../../../assets/images/home/recuring.png"
//                 },
//                 {
//                     title: "Deposit Interest Rates",
//                     desc: "Best returns on fixed and recurring deposits",
//                     btn1: "View Rates",
//                     img: "../../../assets/images/home/recuring.png"
//                 }
//             ]
//         }
//     };

//     const items = data[activeTab].items;
//     const total = items.length;

//     const next = () => {
//         setIndex((prev) => (prev + 1) % total);
//     };

//     const prev = () => {
//         setIndex((prev) => (prev - 1 + total) % total);
//     };

//     return (
//         <div className="bank-container">

//             {/* Tabs */}
//             <div className="bank-tabs">
//                 {Object.keys(data).map((key) => (
//                     <button
//                         key={key}
//                         className={`bank-tab ${activeTab === key ? "active" : ""}`}
//                         onClick={() => {
//                             setActiveTab(key);
//                             setIndex(1);
//                         }}
//                     >
//                         {data[key].title}
//                     </button>
//                 ))}
//             </div>

//             {/* Carousel */}
//             <div className="carousel-wrapper">
//                 <div className="carousel-track">
//                     {items.map((item, i) => {
//                         let position =
//                             i === index
//                                 ? "center"
//                                 : i === (index - 1 + total) % total
//                                     ? "left"
//                                     : i === (index + 1) % total
//                                         ? "right"
//                                         : "hidden";

//                         return (
//                             // <div key={i} className={`bank-card ${position}`}>
//                             //     <div
//                             //         className="card-content"
//                             //         style={{ backgroundImage: `url(${item.img})` }}
//                             //     >
//                             //         <div className="card-text">
//                             //             <h2>{item.title}</h2>
//                             //             <p>{item.desc}</p>

//                             //             <div className="buttons">
//                             //                 {item.btn1 && <button className="primary">{item.btn1}</button>}
//                             //                 {item.btn2 && <button className="secondary">{item.btn2}</button>}
//                             //             </div>
//                             //         </div>
//                             //     </div>
//                             // </div>
//                             <div key={i} className={`bank-card ${position}`}>
//                                 <div className="card-content image-card" data-img={item.img}>
//                                     <div className="card-text">
//                                         <h2>{item.title}</h2>
//                                         <p>{item.desc}</p>
//                                         <div className="buttons">
//                                             {item.btn1 && <button className="primary">{item.btn1}</button>}
//                                             {item.btn2 && <button className="secondary">{item.btn2}</button>}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                         );
//                     })}
//                 </div>

//                 {/* Bottom Arrows */}
//                 <div className="carousel-controls">
//                     <button onClick={prev}>‹</button>
//                     <button onClick={next}>›</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Tabs4;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiCoinLight } from "react-icons/pi";
import { MdAccountBalance } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

const Tabs4 = () => {
    const [activeTab, setActiveTab] = useState("deposit");
    const [index, setIndex] = useState(0);
    const tabs = {
        deposit: {
            title: "Deposits",
            icon: MdAccountBalance
        }, loan: {
            title: "Loans",
            icon: PiCoinLight
        },
       
        insurance: {
            title: "Insurance",
            icon: BsShieldCheck
        },
        // interest: {
        //     title: "Interest Rates",
        //     icon: AiOutlinePercentage
        // }
    };

    const data = {
        deposit: {
            title: "Deposits",
            items: [
                {
                    title: "Fixed Deposit",
                    desc: "Safe deposits with assured returns.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-deposit-2",
                    link1: "/#",
                    link2: "/#"
                },
                {
                    title: "Saving Account",
                    desc: "Save securely and earn interest.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-deposit-1",
                    link1: "/#",
                    link2: "/#"
                },
                
                {
                    title: "Recurring Deposit",
                    desc: "Save monthly and grow steadily.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-deposit-3",
                    link1: "/#",
                    link2: "/#"
                },{
                    title: "Current Account",
                    desc: "Easy banking for daily transactions.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-deposit-0",
                    link1: "/#",
                    link2: "/#"
                },
            ]

        },loan: {
            title: "Loans",
            items: [
                {
                    title: "Home Loan",
                    desc: "Affordable home loans with flexible repayment options.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-loan-0",
                    link1: "/#",
                    link2: "/#"
                },
                {
                    title: "Commercial Car Loan",
                    desc: "Easy financing solutions for commercial and business vehicles.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-loan-1",
                    link1: "/#",
                    link2: "/#"
                },
                {
                    title: "Machinery Loan",
                    desc: "Grow your business with quick and reliable machinery financing.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-loan-2",
                    link1: "/#",
                    link2: "/#"
                },
                {
                    title: "E-Bike Loan",
                    desc: "Affordable loans for eco-friendly electric two-wheelers.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-loan-3",
                    link1: "/#",
                    link2: "/#"
                },
                {
                    title: "Student Loan",
                    desc: "Financial support for higher education and career growth.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-loan-4",
                    link1: "/#",
                    link2: "/#"
                },
                {
                    title: "Gold Loan",
                    desc: "Instant loans against gold with competitive interest rates.",
                    btn1: "Apply Now",
                    btn2: "Know More",
                    imgClass: "img-loan-5",
                    link1: "/#",
                    link2: "/#"
                }
            ]

        },
        
        insurance: {
            title: "Insurance",
            items: [
                { title: "Life Insurance", desc: "Protect your family...", btn1: "Know More", imgClass: "img-insurance-0", link1: "/#" },
                { title: "Health Insurance", desc: "Cashless medical coverage...", btn1: "Know More", imgClass: "img-insurance-1", link1: "/#" },
                { title: "General Insurance", desc: "Complete protection...", btn1: "Know More", imgClass: "img-insurance-2", link1: "/#" },
            ]
        },
        interest: {
            title: "Interest Rates",
            items: [
                { title: "Loan Interest rate", desc: "Transparent rates...", btn1: "View Rates", imgClass: "img-interest-0", link1: "/#" },
                { title: "Deposit Interest Rates", desc: "Best returns...", btn1: "View Rates", imgClass: "img-interest-1", link1: "/#" },
            ]
        }
    };
    const items = data[activeTab].items;
    const total = items.length;

    const next = () => setIndex((prev) => (prev + 1) % total);
    const prev = () => setIndex((prev) => (prev - 1 + total) % total);

    return (
        <div className=" mt-60 mb-60">
            <div className="col-md-12">
                <div className="block-title text-center">
                    <p className="block-title__tagline">Empowering your financial journey with tailored solutions</p>
                    <h2 className="dbank-title">
                        Smarter Banking Through Digital Innovation
                    </h2>
                </div>
            </div>
            {/* Tabs */}
            {/* <div className="bank-tabs">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        className={`bank-tab ${activeTab === key ? "active" : ""}`}
                        onClick={() => { setActiveTab(key); setIndex(0); }}
                    >
                        {data[key].title}
                    </button>
                ))}
            </div> */}
            <div className="bank-tabs-wrapper">
                <nav className="bank-tabs" role="tablist">
                    {Object.keys(tabs).map((key) => {
                        const Icon = tabs[key].icon;

                        return (
                            <button
                                key={key}
                                className={`bank-tab ${activeTab === key ? "active" : ""}`}
                                role="tab"
                                aria-selected={activeTab === key}
                                onClick={() => {
                                    setActiveTab(key);
                                    setIndex(0);
                                }}
                            >
                                <Icon className="tab-icon" />
                                <span>{tabs[key].title}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>


            {/* Carousel */}
            <div className="carousel-wrapper mt-20">
                <div className="carousel-track">
                    {items.map((item, i) => {
                        let position =
                            i === index ? "center" :
                                i === (index - 1 + total) % total ? "left" :
                                    i === (index + 1) % total ? "right" : "hidden";

                        return (
                            <div
                                key={i}
                                className={`bank-card ${position} clickable`}
                                onClick={() => {
                                    if (i !== index) setIndex(i);
                                }}
                            >

                                <div className={`card-content image-card ${item.imgClass}`}>
                                    <div className="card-text">
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                        <div className="buttons">
                                            {item.btn1 && item.link1 && (
                                                <Link to={item.link1}>
                                                    <button className="primary">{item.btn1}</button>
                                                </Link>
                                            )}

                                            {item.btn2 && item.link2 && (
                                                <Link to={item.link2}>
                                                    <button className="secondary">{item.btn2}</button>
                                                </Link>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Carousel Controls */}
                <div className="carousel-controls">
                    <button onClick={prev}>‹</button>
                    <button onClick={next}>›</button>
                </div>
            </div>
        </div>
    );
};

export default Tabs4;







