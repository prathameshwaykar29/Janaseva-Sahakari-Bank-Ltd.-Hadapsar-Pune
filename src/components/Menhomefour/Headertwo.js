// import { Link, useLocation } from 'react-router-dom'
// import React, { useState, useEffect, useRef } from 'react'
// import logoL from '../../assets/images/logo-light.png'

// function Headertwo() {

//     const [search, setsearch] = useState(false)
//     const activeRef = useRef(null);
//     const [sticky, setSticky] = useState(false);
//     const location = useLocation()
//     const path = location.pathname
//     const [menu, setmenu] = useState({})
//     const [mobile, setmobile] = useState(false)
//     const [homeDrop, sethomeDrop] = useState(false)
//     const [headerDrop, setheaderDrop] = useState(false)
//     const [servicesDrop, setservicesDrop] = useState(false)
//     const [featuresDrop, setfeaturesDrop] = useState(false)
//     const [newsDrop, setnewsDrop] = useState(false)
//     const [pagesDrop, setpagesDrop] = useState(false)


//     const activeMenu = () => {
//         if (path === "/" || path === "/home-02" || path === "/home-03") {
//             setmenu({ home: true })
//         } else if (path === "/about") {
//             setmenu({ about: true })
//         } else if (path === "/service" || path === "/servicedetails") {
//             setmenu({ services: true })
//         } else if (path === "/team" || path === "/teamdetails" || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" || path === "/applynow") {
//             setmenu({ pages: true })
//         } else if (path === "/personalloan" || path === "/loaneligibility" || path === "/homeloan" || path === "/homeloaneligibility" || path === "/compareEMI" || path === "/monthlyloan") {
//             setmenu({ features: true })
//         }
//         else if (path === "/newsmain" || path === "/newsdetails") {
//             setmenu({ news: true })
//         }
//         else if (path === "/contact") {
//             setmenu({ contact: true })
//         } else {
//             setmenu({ home: true })
//         }
//     }

//     useEffect(() => {
//         window.addEventListener("scroll", isSticky);
//         return () => {
//             window.removeEventListener("scroll", isSticky);
//         };
//     }, []);

//     const isSticky = () => {
//         const scrollTop = window.scrollY;
//         scrollTop >= 250 ? setSticky(true) : setSticky(false);
//     }

//     useEffect(() => {
//         window.scroll(0, 0)
//         activeMenu()
//     }, [path]);

//     return (
//         <>
//             <div className="topbar topbar--two">
//                 <div className="container">
//                     <div className="topbar__info">
//                         <Link to="/#"><i className="icon-pin"></i> 88 Road Broklyn Golden Street. New York</Link>
//                         <Link to="mailto:needhelp@company.com"><i className="icon-email"></i> needhelp@company.com</Link>
//                     </div>

//                     <div className="topbar__social">
//                         <Link to="/#"><i className="fab fa-twitter"></i></Link>
//                         <Link to="/#"><i className="fab fa-facebook"></i></Link>
//                         <Link to="/#"><i className="fab fa-pinterest"></i></Link>
//                         <Link to="/#"><i className="fab fa-instagram"></i></Link>
//                     </div>
//                 </div>
//             </div>

//             <nav className={`main-menu main-menu--two ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
//                 <div className="container">
//                     <div className="main-menu--two__inner">
//                         <div className="main-menu__logo">
//                             <Link to="/">
//                                 <img src={logoL} width="140" height="51" alt="Finlon" />
//                             </Link>
//                         </div>
//                         <div className="main-menu__nav">
//                             <ul className="main-menu__list">
//                                 <li className={`dropdown ${menu.home && "current"}`}>
//                                     <Link to="/">Home</Link>
//                                     <ul>
//                                         <li> <Link to="/">Home One</Link> </li>
//                                         <li><Link to="/home-02">Home Two</Link></li>
//                                         <li><Link to="/home-03">Home Three</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="/#">Header Styles</Link>
//                                             <ul>
//                                                 <li><Link to="/">Header One</Link></li>
//                                                 <li><Link to="/home-02">Header Two</Link></li>
//                                                 <li><Link to="/home-03">Header Three</Link></li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className={`about ${menu.about && "current"}`}>
//                                     <Link to="/about">About</Link>
//                                 </li>

//                                 <li className={`dropdown ${menu.services && "current"}`}><Link to="/services">Services</Link>
//                                     <ul>
//                                         <li><Link to="/services">Services 01</Link></li>
//                                         <li><Link to="/servicesdetails">Service Details</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.pages && "current"}`}><Link to="/#">Pages</Link>
//                                     <ul>
//                                         <li><Link to="/team">Team</Link></li>
//                                         <li><Link to="/teamdetails">Team Details</Link></li>
//                                         <li><Link to="/creditrepair">Credit Repair</Link></li>
//                                         <li><Link to="/creditaudit">Credit Audit</Link></li>
//                                         <li><Link to="/careers">Careers</Link></li>
//                                         <li><Link to="/faqs">Faqs</Link></li>
//                                         <li><Link to="/applynow">Apply Now</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.features && "current"}`}><Link to="/#">Features</Link>
//                                     <ul>
//                                         <li><Link to="/personalloan">Personal Loan</Link></li>
//                                         <li><Link to="/loaneligibility">Loan Eligibility</Link></li>
//                                         <li><Link to="/homeloan">Home Loan</Link></li>
//                                         <li><Link to="/homeloaneligibility">Home Loan Eligibility</Link></li>
//                                         <li><Link to="/compareEMI">Compare EMI</Link></li>
//                                         <li><Link to="/monthlyloan">Monthly Calculator</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.news && "current"}`}><Link to="/#">News</Link>
//                                     <ul>
//                                         <li><Link to="/newsmain">News</Link></li>
//                                         <li><Link to="/newsdetails">News Details</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`about ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li>
//                             </ul>
//                         </div>
//                         <div className="main-menu__right">
//                             <Link to="/#" className="main-menu__toggler mobile-nav__toggler" onClick={() => setmobile(true)}>
//                                 <i className="fa fa-bars"></i>
//                             </Link>
//                             <Link to="/#" className="main-menu__search search-toggler">
//                                 <i className="icon-magnifying-glass" onClick={() => setsearch(true)}></i>
//                             </Link>
//                             <Link to="/applynow" className="thm-btn main-menu__btn">Request Loan</Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <div className="stricky-header stricked-menu main-menu main-menu--two" >
//                 <div className="sticky-header__content"></div>
//             </div>

//             <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
//                 <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
//                 <div className="mobile-nav__content">
//                     <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i className="fa fa-times"></i></span>

//                     <div className="logo-box">
//                         <Link to="/" aria-label="logo image"><img src={logoL} width="155" alt="" /></Link>
//                     </div>

//                     <div className="mobile-nav__container">
//                         <ul className="main-menu__list">
//                             <li className="dropdown current">
//                                 <Link to="/#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
//                                 {homeDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li className="current">
//                                             <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
//                                         </li>
//                                         <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
//                                         <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="/#" className={headerDrop ? "expanded" : ""}>Header Styles
//                                                 <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
//                                                     <i className="fa fa-angle-down"></i>
//                                                 </button>
//                                             </Link>
//                                             {headerDrop &&
//                                                 <ul style={{ display: "block" }}>
//                                                     <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
//                                                     <li><Link to="/home-02" onClick={() => setmobile(false)}>Header Two</Link></li>
//                                                     <li><Link to="/home-03" onClick={() => setmobile(false)}>Header Three</Link></li>
//                                                 </ul>}
//                                         </li>
//                                     </ul>}
//                             </li>
//                             <li>
//                                 <Link to="/about" onClick={() => setmobile(false)}>About</Link>
//                             </li>
//                             <li className="dropdown">
//                                 <Link to="/#" className={servicesDrop ? "expanded" : ""}>Services
//                                     <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
//                                         <i className="fa fa-angle-down"></i>
//                                     </button>
//                                 </Link>
//                                 {servicesDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li><Link to="/service" onClick={() => setmobile(false)}>Service</Link></li>
//                                         <li><Link to="/servicedetails" onClick={() => setmobile(false)}>Service Details</Link></li>
//                                     </ul>}
//                             </li>
//                             <li className="dropdown">
//                                 <Link to="/#" className={pagesDrop ? "expanded" : ""}>Pages
//                                     <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
//                                         <i className="fa fa-angle-down"></i>
//                                     </button>
//                                 </Link>
//                                 {pagesDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li><Link to="/team" onClick={() => setmobile(false)}>Team</Link></li>
//                                         <li><Link to="/teamdetails" onClick={() => setmobile(false)}>Team Details</Link></li>
//                                         <li><Link to="/creditrepair" onClick={() => setmobile(false)}>Credit Repair</Link></li>
//                                         <li><Link to="/creditaudit" onClick={() => setmobile(false)}>Credit Audit</Link></li>
//                                         <li><Link to="/careers" onClick={() => setmobile(false)}>Careers</Link></li>
//                                         <li><Link to="/faqs" onClick={() => setmobile(false)}>Faqs</Link></li>
//                                         <li><Link to="/applynow" onClick={() => setmobile(false)}>Apply Now</Link></li>
//                                     </ul>}
//                             </li>
//                             <li className="dropdown">
//                                 <Link to="/#" className={featuresDrop ? "expanded" : ""}>Features
//                                     <button aria-label="dropdown toggler" className={featuresDrop ? "expanded" : ""} onClick={() => setfeaturesDrop(featuresDrop ? false : true)}>
//                                         <i className="fa fa-angle-down"></i>
//                                     </button>
//                                 </Link>
//                                 {featuresDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li><Link to="/personalloan" onClick={() => setmobile(false)}>Personal Loan</Link></li>
//                                         <li><Link to="/loaneligibility" onClick={() => setmobile(false)}>Loan Eligibility</Link></li>
//                                         <li><Link to="/homeloan" onClick={() => setmobile(false)}>Home Loan</Link></li>
//                                         <li><Link to="/homeloaneligilibity" onClick={() => setmobile(false)}>Home Loan Eligibility</Link></li>
//                                         <li><Link to="/compareEMI" onClick={() => setmobile(false)}>Compare EMI</Link></li>
//                                         <li><Link to="/monthlycalculator" onClick={() => setmobile(false)}>Monthly Calculator</Link></li>
//                                     </ul>}
//                             </li>
//                             <li className="dropdown">
//                                 <Link to="/#" className={newsDrop ? "expanded" : ""}>News
//                                     <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
//                                         <i className="fa fa-angle-down"></i>
//                                     </button>
//                                 </Link>
//                                 {newsDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
//                                         <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
//                                     </ul>}
//                             </li>
//                             <li>
//                                 <Link to="/contact" onClick={() => setmobile(false)}>Contact</Link>
//                             </li>
//                         </ul>

//                     </div>


//                     <ul className="mobile-nav__contact list-unstyled">
//                         <li>
//                             <i className="icon-email"></i>
//                             <Link to="mailto:needhelp@packageName__.com">needhelp@finlon.com</Link>
//                         </li>
//                         <li>
//                             <i className="icon-telephone"></i>
//                             <Link to="tel:666-888-0000">666 888 0000</Link>
//                         </li>
//                     </ul>

//                     <div className="mobile-nav__social">
//                         <Link to="/#"><i className="fab fa-twitter"></i></Link>
//                         <Link to="/#"><i className="fab fa-facebook"></i></Link>
//                         <Link to="/#"><i className="fab fa-pinterest"></i></Link>
//                         <Link to="/#"><i className="fab fa-instagram"></i></Link>
//                     </div>

//                 </div>

//             </div>

//             <div className={`search-popup ${search && "active"}`}>
//                 <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
//                 <div className="search-popup__content">
//                     <form action="/#">
//                         <label htmlFor="search" className="sr-only">search here</label>
//                         <input type="text" id="search" placeholder="Search Here..." />
//                         <button type="submit" aria-label="search submit" className="thm-btn">
//                             <i className="icon-magnifying-glass"></i>
//                         </button>
//                     </form>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Headertwo


import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import logoL from '../../assets/images/janseva-bank-logo-white-removebg-preview (1).png'
import logoz from '../../assets/images/janseva-bank-logo-white-removebg-preview (1).png'



function Headertwo() {

    const [search, setsearch] = useState(false)
    const activeRef = useRef(null);
    const [sticky, setSticky] = useState(false);
    const location = useLocation()
    const path = location.pathname
    const [menu, setmenu] = useState({})
    const [mobile, setmobile] = useState(false)
    const [homeDrop, sethomeDrop] = useState(false)
    const [headerDrop, setheaderDrop] = useState(false)
    const [servicesDrop, setservicesDrop] = useState(false)
    const [featuresDrop, setfeaturesDrop] = useState(false)
    const [newsDrop, setnewsDrop] = useState(false)
    const [pagesDrop, setpagesDrop] = useState(false)


    const activeMenu = () => {
        if (path === "/" || path === "/home-02" || path === "/home-03") {
            setmenu({ home: true })
        } else if (path === "/about") {
            setmenu({ about: true })
        } else if (path === "/service" || path === "/servicedetails") {
            setmenu({ services: true })
        } else if (path === "/team" || path === "/teamdetails" || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" || path === "/applynow") {
            setmenu({ pages: true })
        } else if (path === "/personalloan" || path === "/loaneligibility" || path === "/homeloan" || path === "/homeloaneligibility" || path === "/compareEMI" || path === "/monthlyloan") {
            setmenu({ features: true })
        }
        else if (path === "/newsmain" || path === "/newsdetails") {
            setmenu({ news: true })
        }
        else if (path === "/contact") {
            setmenu({ contact: true })
        } else {
            setmenu({ home: true })
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? setSticky(true) : setSticky(false);
    }

    useEffect(() => {
        window.scroll(0, 0)
        activeMenu()
    }, [path]);

    return (
        <>
            <div className="topbar topbar--two">
                <div className="container">
                    <div className="topbar__info">
                        <Link to="/#"><i className="icon-pin "></i>Branch Locator</Link>
                        <Link to="/#">
                            <i className="fa fa-forward menu-icon"></i>
                            Skip To Main Content
                        </Link>
                    </div>

                    <div className="topbar__social ml-20">
                        <Link to="/#"><i className="fab fa-twitter"></i></Link>
                        <Link to="/#"><i className="fab fa-facebook"></i></Link>
                        <Link to="/#"><i className="fab fa-pinterest"></i></Link>
                        <Link to="/#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <div className="main-menu__right">
<Link
        to="/#"
        className="main-menu__accessibility"
        aria-label="Accessibility options"
        title="Accessibility"
    >
        <i className="fas fa-universal-access"></i>
    </Link>
                        <Link to="/#" className="main-menu__toggler mobile-nav__toggler" onClick={() => setmobile(true)}>
                            <i className="fa fa-bars"></i>
                        </Link>
                        <Link to="/#" className="main-menu__search search-toggler">
                            <i className="icon-magnifying-glass" onClick={() => setsearch(true)}></i>
                        </Link>
                        <Link to="/applynow" className="thm-btn main-menu__btn">Login</Link>
                    </div>
                </div>
            </div>

            <nav className={`main-menu main-menu--two ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
                <div className="container12">
                    <div className="main-menu--two__inner">
                        {/* <div className="main-menu__logo2">
                            <Link to="/">
                                <img src={logoL} width="600"  alt="Finlon" />
                            </Link>
                        </div> */}
                        <div className={`main-menu__logo2 ${sticky ? "logo-small" : ""}`}>
                            <Link to="/">
                                <img src={logoL} alt="Finlon" />
                            </Link>
                        </div>

                        <div className="main-menu__nav2">
                            <ul className="main-menu__list">
                                <li className={`dropdown ${menu.home && "current"}`}>
                                    <Link to="/">Home</Link>
                                    <ul>
                                        <li> <Link to="/">Home One</Link> </li>
                                        <li><Link to="/home-02">Home Two</Link></li>
                                        <li><Link to="/home-03">Home Three</Link></li>
                                        <li className="dropdown">
                                            <Link to="/#">Header Styles</Link>
                                            <ul>
                                                <li><Link to="/">Header One</Link></li>
                                                <li><Link to="/home-02">Header Two</Link></li>
                                                <li><Link to="/home-03">Header Three</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li className={`about ${menu.about && "current"}`}>
                                    <Link to="/about">About</Link>
                                </li> */}
                                <li className={`dropdown ${menu.about && "current"}`}><Link to="/services">Deposits</Link>
                                    <ul>
                                        <li><Link to="/#">Saving Account</Link></li>
                                        <li><Link to="/#">Current Account</Link></li>
                                        <li><Link to="/#">Recuring deposits</Link></li>
                                        <li><Link to="/#">Fixed Deposits</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.services && "current"}`}><Link to="/services">Loans</Link>
                                    <ul>
                                        <li><Link to="/#">Retail Loan</Link></li>
                                        <li><Link to="/#">Commercial Loan</Link></li>
                                    </ul>
                                </li>





                                <li className={`dropdown ${menu.pages && "current"}`}><Link to="#">About us</Link>
                                    <ul>
                                        <li><Link to="/#">Profile</Link></li>
                                        <li><Link to="/#">Board Of Directors</Link></li>
                                        <li><Link to="/#">Board Of Management</Link></li>
                                        <li><Link to="/#">Events</Link></li>
                                        <li><Link to="/#">Careers</Link></li>
                                        <li><Link to="/#">Testimonals</Link></li>
                                        <li><Link to="/#">Blogs</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.features && "current"}`}><Link to="#">Insurance</Link>
                                    <ul>
                                        <li><Link to="/#">General Insurance</Link></li>
                                        <li><Link to="/#">Health Insurance</Link></li>
                                        <li><Link to="/#">Life Insurance</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.news && "current"}`}><Link to="#">News</Link>
                                    <ul>
                                        <li><Link to="/#">Loan Interest Rate</Link></li>
                                        <li><Link to="/#">Deposit Interest Rate</Link></li>
                                    </ul>
                                </li>
                                <li className={`about ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li>
                                <li className={`about ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

            <div className="stricky-header stricked-menu main-menu main-menu--two" >
                <div className="sticky-header__content"></div>
            </div>

            <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link to="/" aria-label="logo image"><img src={logoL} width="155" alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li className="dropdown current">
                                <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                {homeDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li className="current">
                                            <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
                                        </li>
                                        <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
                                        <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
                                        <li className="dropdown">
                                            <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
                                                <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                            </Link>
                                            {headerDrop &&
                                                <ul style={{ display: "block" }}>
                                                    <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
                                                    <li><Link to="/home-02" onClick={() => setmobile(false)}>Header Two</Link></li>
                                                    <li><Link to="/home-03" onClick={() => setmobile(false)}>Header Three</Link></li>
                                                </ul>}
                                        </li>
                                    </ul>}
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setmobile(false)}>About</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
                                    <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {servicesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/service" onClick={() => setmobile(false)}>Service</Link></li>
                                        <li><Link to="/servicedetails" onClick={() => setmobile(false)}>Service Details</Link></li>
                                    </ul>}
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
                                    <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {pagesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/team" onClick={() => setmobile(false)}>Team</Link></li>
                                        <li><Link to="/teamdetails" onClick={() => setmobile(false)}>Team Details</Link></li>
                                        <li><Link to="/creditrepair" onClick={() => setmobile(false)}>Credit Repair</Link></li>
                                        <li><Link to="/creditaudit" onClick={() => setmobile(false)}>Credit Audit</Link></li>
                                        <li><Link to="/careers" onClick={() => setmobile(false)}>Careers</Link></li>
                                        <li><Link to="/faqs" onClick={() => setmobile(false)}>Faqs</Link></li>
                                        <li><Link to="/applynow" onClick={() => setmobile(false)}>Apply Now</Link></li>
                                    </ul>}
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
                                    <button aria-label="dropdown toggler" className={featuresDrop ? "expanded" : ""} onClick={() => setfeaturesDrop(featuresDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {featuresDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/personalloan" onClick={() => setmobile(false)}>Personal Loan</Link></li>
                                        <li><Link to="/loaneligibility" onClick={() => setmobile(false)}>Loan Eligibility</Link></li>
                                        <li><Link to="/homeloan" onClick={() => setmobile(false)}>Home Loan</Link></li>
                                        <li><Link to="/homeloaneligilibity" onClick={() => setmobile(false)}>Home Loan Eligibility</Link></li>
                                        <li><Link to="/compareEMI" onClick={() => setmobile(false)}>Compare EMI</Link></li>
                                        <li><Link to="/monthlycalculator" onClick={() => setmobile(false)}>Monthly Calculator</Link></li>
                                    </ul>}
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={newsDrop ? "expanded" : ""}>News
                                    <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {newsDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
                                        <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
                                    </ul>}
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => setmobile(false)}>Contact</Link>
                            </li>
                        </ul>

                    </div>


                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="icon-email"></i>
                            <Link to="mailto:needhelp@packageName__.com">needhelp@finlon.com</Link>
                        </li>
                        <li>
                            <i className="icon-telephone"></i>
                            <Link to="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>

                    <div className="mobile-nav__social">
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-pinterest"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                    </div>

                </div>

            </div>

            <div className={`search-popup ${search && "active"}`}>
                <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="icon-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Headertwo



