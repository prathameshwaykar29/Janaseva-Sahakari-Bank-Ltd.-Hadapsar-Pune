// // import { Link, useLocation} from 'react-router-dom'
// // import React, { useEffect, useState } from 'react'
// // import logox from '../../assets/images/logo-dark.png'
// // import logoL from '../../assets/images/logo-light.png'


// // const Navbar = () => {

// //     const [mobile, setmobile] = useState(false)
// //     const [search, setsearch] = useState(false)
// //     const [homeDrop, sethomeDrop] = useState(false)
// //     const [headerDrop, setheaderDrop] = useState(false)
// //     const [servicesDrop, setservicesDrop] = useState(false)
// //     const [featuresDrop, setfeaturesDrop] = useState(false)
// //     const [newsDrop, setnewsDrop] = useState(false)
// //     const [pagesDrop, setpagesDrop] = useState(false)
// //     const location = useLocation()
// //     const path = location.pathname
// //     const [menu, setmenu] = useState({})

// //     const activeMenu = () => {
// //         if(path === "/" || path === "/home-02" || path === "/home-03" ){
// //             setmenu({home:true})
// //         }else if(path === "/about" ){
// //             setmenu({about:true})
// //         }else if(path === "/service" || path === "/servicedetails" ){
// //             setmenu({services:true})
// //         }else if(path === "/team" || path === "/teamdetails"  || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" ||  path === "/applynow"){
// //             setmenu({pages:true})
// //         }else if(path === "/personalloan" || path === "/loaneligibility" || path === "/homeloan" || path === "/homeloaneligibility" || path === "/compareEMI" || path === "/monthlyloan"){
// //             setmenu({features:true})
// //         }
// //         else if(path === "/newsmain" || path === "/newsdetails" ){
// //             setmenu({news:true})
// //         }
// //         else if(path === "/contact"){
// //             setmenu({contact:true})
// //         }else{
// //             setmenu({home:true})
// //         }
// //     }

// //     const [sticky, setSticky] = useState(false);
// //     useEffect(() => {
// //         window.addEventListener("scroll", isSticky);
// //         return () => {
// //             window.removeEventListener("scroll", isSticky);
// //         };
// //     }, []);

// //     useEffect(() => {
// //         window.scroll(0, 0)
// //         activeMenu()
// //     }, [path]);
// //     const isSticky = () => {
// //         const scrollTop = window.scrollY;
// //         scrollTop >= 141 ? setSticky(true) : setSticky(false);
// //     }

// //   return (
// //     <>
// //         <div className="page-wrapper">
// //             <div className="topbar">
// //                 <div className="container-fluid">
// //                     <div className="topbar__info">
// //                         <Link to="#"><i className="icon-pin"></i> 88 Road Broklyn Golden Street. New York</Link>
// //                         <Link to="mailto:needhelp@company.com"><i className="icon-email"></i> needhelp@company.com</Link>
// //                     </div>
// //                     <div className="topbar__links">
// //                         <Link to="#">Login</Link>
// //                         <Link to="#">Company News</Link>
// //                         <Link to="/faqs">FAQs</Link>
// //                     </div>
// //                     <div className="topbar__social">
// //                         <Link to="#"><i className="fab fa-twitter"></i></Link>
// //                         <Link to="#"><i className="fab fa-facebook"></i></Link>
// //                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
// //                         <Link to="#"><i className="fab fa-instagram"></i></Link>
// //                     </div>
// //                 </div>
// //             </div>
// //             <nav className={`main-menu ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
// //                 <div className="container-fluid">
// //                     <div className="main-menu__logo">

// //                         <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1" viewBox="0 0 317 120">
// //                             <path d="M259.856,120H0V0H274l43,37.481Z" />
// //                         </svg>
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2" viewBox="0 0 317 120">
// //                             <path d="M259.856,120H0V0H274l43,37.481Z" />
// //                         </svg>


// //                         <Link to="/">
// //                             <img src={logox} width="140" height="51" alt="Finlon"/>
// //                         </Link>
// //                     </div>
// //                     <div className="main-menu__nav">
// //                         <ul className="main-menu__list">
// //                             <li className={`dropdown ${menu.home && "current"}`}>
// //                                 <Link to="/">Home</Link>
// //                                 <ul>
// //                                     <li><Link to="/">Home One</Link> </li>
// //                                     <li><Link to="/home-02">Home Two</Link></li>
// //                                     <li><Link to="/home-03">Home Three</Link></li>
// //                                     <li className="dropdown">
// //                                         <Link to="#">Header Styles</Link>
// //                                         <ul>
// //                                             <li><Link to="/">Header One</Link></li>
// //                                             <li><Link to="/home-02">Header Two</Link></li>
// //                                             <li><Link to="/home-03">Header Three</Link></li>
// //                                         </ul>
// //                                     </li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`about ${menu.about && "current"}`}>
// //                                 <Link to="/about">About</Link>
// //                             </li>

// //                             <li className={`dropdown ${menu.services && "current" && "hover"}`} 
// //                             ><Link to="/service">Services</Link>
// //                                 <ul>
// //                                     <li><Link to="/service">Services 01</Link></li>
// //                                     <li><Link to="serviceDetails">Service Details</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`dropdown ${menu.pages && "current"}`}><Link to="#">Pages</Link>
// //                                 <ul>
// //                                     <li><Link to="/team">Team</Link></li>
// //                                     <li><Link to="/teamdetails">Team Details</Link></li>
// //                                     <li><Link to="/creditrepair">Credit Repair</Link></li>
// //                                     <li><Link to="/creditaudit">Credit Audit</Link></li>
// //                                     <li><Link to="/careers">Careers</Link></li>
// //                                     <li><Link to="/faqs">Faqs</Link></li>
// //                                     <li><Link to="/applynow">Apply Now</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`dropdown ${menu.features && "current"}`}><Link to="#">Features</Link>
// //                                 <ul>
// //                                     <li><Link to="/personalloan">Personal Loan</Link></li>
// //                                     <li><Link to="/loaneligibility">Loan Eligibility</Link></li>
// //                                     <li><Link to="/homeloan">Home Loan</Link></li>
// //                                     <li><Link to="/homeloaneligibility">Home Loan Eligibility</Link></li>
// //                                     <li><Link to="/compareEMI">Compare EMI</Link></li>
// //                                     <li><Link to="/monthlyloan">Monthly Calculator</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`dropdown ${menu.news && "current"}`}><Link to="/newsmain">News</Link>
// //                                 <ul>
// //                                     <li><Link to="/newsmain">News</Link></li>
// //                                     <li><Link to="/newsdetails">News Details</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`contact ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li>
// //                         </ul>
// //                     </div>
// //                     <div className="main-menu__right">
// //                         <Link to="#" onClick= {() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
// //                             <i className="fa fa-bars"></i>
// //                         </Link>
// //                         <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
// //                             <i className="icon-magnifying-glass"></i>
// //                         </Link>
// //                         <Link to="/applynow" className="thm-btn main-menu__btn">Request Loan</Link>
// //                         <Link to="tel:926668880000" className="main-menu__contact">
// //                             <span className="main-menu__contact__icon">
// //                                 <i className="icon-phone"></i>
// //                             </span>
// //                             <span className="main-menu__contact__text">
// //                                 <strong>92 666 888 0000</strong>
// //                                 Mon to Fri: 9 am to 6 pm
// //                             </span>
// //                         </Link>
// //                     </div>
// //                 </div>
// //             </nav>
// //         </div>

// //         <div className={`search-popup ${search && "active"}`}>
// //             <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
// //             <div className="search-popup__content">
// //                 <form action="#">
// //                     <label htmlFor="search" className="sr-only">search here</label>
// //                     <input type="text" id="search" placeholder="Search Here..." />
// //                     <button type="submit" aria-label="search submit" className="thm-btn">
// //                         <i className="icon-magnifying-glass"></i>
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>

// //         <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
// //                 <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
// //                 <div className="mobile-nav__content">
// //                     <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i className="fa fa-times"></i></span>

// //                     <div className="logo-box">
// //                         <Link to="/" aria-label="logo image"><img src={logoL} width="155" alt="" /></Link>
// //                     </div>

// //                     <div className="mobile-nav__container">
// //                         <ul className="main-menu__list">
// //                             <li className="dropdown current">
// //                                 <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
// //                                 {homeDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li className="current">
// //                                             <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
// //                                         </li>
// //                                         <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
// //                                         <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
// //                                         <li className="dropdown">
// //                                             <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
// //                                                 <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
// //                                                     <i className="fa fa-angle-down"></i>
// //                                                 </button>
// //                                             </Link>
// //                                             {headerDrop &&
// //                                                 <ul style={{ display: "block" }}>
// //                                                     <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
// //                                                     <li><Link to="/home-02" onClick={() => setmobile(false)}>Header Two</Link></li>
// //                                                     <li><Link to="/home-03" onClick={() => setmobile(false)}>Header Three</Link></li>
// //                                                 </ul>}
// //                                         </li>
// //                                     </ul>}
// //                             </li>
// //                             <li>
// //                                 <Link to="/about" onClick={() => setmobile(false)}>About</Link>
// //                             </li>
// //                             <li className="dropdown">
// //                                 <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
// //                                     <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
// //                                         <i className="fa fa-angle-down"></i>
// //                                     </button>
// //                                 </Link>
// //                                 {servicesDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/service" onClick={() => setmobile(false)}>Service</Link></li>
// //                                         <li><Link to="/servicedetails" onClick={() => setmobile(false)}>Service Details</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li className="dropdown">
// //                                 <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
// //                                     <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
// //                                         <i className="fa fa-angle-down"></i>
// //                                     </button>
// //                                 </Link>
// //                                 {pagesDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/team" onClick={() => setmobile(false)}>Team</Link></li>
// //                                         <li><Link to="/teamdetails" onClick={() => setmobile(false)}>Team Details</Link></li>
// //                                         <li><Link to="/creditrepair" onClick={() => setmobile(false)}>Credit Repair</Link></li>
// //                                         <li><Link to="/creditaudit" onClick={() => setmobile(false)}>Credit Audit</Link></li>
// //                                         <li><Link to="/careers" onClick={() => setmobile(false)}>Careers</Link></li>
// //                                         <li><Link to="/faqs" onClick={() => setmobile(false)}>Faqs</Link></li>
// //                                         <li><Link to="/applynow" onClick={() => setmobile(false)}>Apply Now</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li className="dropdown">
// //                                 <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
// //                                     <button aria-label="dropdown toggler" className={featuresDrop ? "expanded" : ""} onClick={() => setfeaturesDrop(featuresDrop ? false : true)}>
// //                                         <i className="fa fa-angle-down"></i>
// //                                     </button>
// //                                 </Link>
// //                                 {featuresDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/personalloan" onClick={() => setmobile(false)}>Personal Loan</Link></li>
// //                                         <li><Link to="/loaneligibility" onClick={() => setmobile(false)}>Loan Eligibility</Link></li>
// //                                         <li><Link to="/homeloan" onClick={() => setmobile(false)}>Home Loan</Link></li>
// //                                         <li><Link to="/homeloaneligilibity" onClick={() => setmobile(false)}>Home Loan Eligibility</Link></li>
// //                                         <li><Link to="/compareEMI" onClick={() => setmobile(false)}>Compare EMI</Link></li>
// //                                         <li><Link to="/monthlycalculator" onClick={() => setmobile(false)}>Monthly Calculator</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li className="dropdown">
// //                             <Link to="#" className={newsDrop ? "expanded" : ""}>News
// //                                 <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
// //                                     <i className="fa fa-angle-down"></i>
// //                                 </button>
// //                             </Link>
// //                                 {newsDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
// //                                         <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li>
// //                                 <Link to="/contact" onClick={() => setmobile(false)}>Contact</Link>
// //                             </li>
// //                         </ul>

// //                     </div>


// //                     <ul className="mobile-nav__contact list-unstyled">
// //                         <li>
// //                             <i className="icon-email"></i>
// //                             <Link to="mailto:needhelp@packageName__.com">needhelp@finlon.com</Link>
// //                         </li>
// //                         <li>
// //                             <i className="icon-telephone"></i>
// //                             <Link to="tel:666-888-0000">666 888 0000</Link>
// //                         </li>
// //                     </ul>

// //                     <div className="mobile-nav__social">
// //                         <Link to="#"><i className="fab fa-twitter"></i></Link>
// //                         <Link to="#"><i className="fab fa-facebook"></i></Link>
// //                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
// //                         <Link to="#"><i className="fab fa-instagram"></i></Link>
// //                     </div>

// //                 </div>

// //         </div>
// //     </>
// //   )
// // }

// // export default Navbar





// // import { Link, useLocation} from 'react-router-dom'
// // import React, { useEffect, useState } from 'react'
// // import logox from '../../assets/images/janseva-updated-logo (1).png'

// // import logoL from '../../assets/images/janseva-logo-eng-monteserrat2.png'


// // const Navbar = () => {

// //     const [mobile, setmobile] = useState(false)
// //     const [search, setsearch] = useState(false)
// //     const [homeDrop, sethomeDrop] = useState(false)
// //     const [headerDrop, setheaderDrop] = useState(false)
// //     const [servicesDrop, setservicesDrop] = useState(false)
// //     const [featuresDrop, setfeaturesDrop] = useState(false)
// //     const [newsDrop, setnewsDrop] = useState(false)
// //     const [pagesDrop, setpagesDrop] = useState(false)
// //     const location = useLocation()
// //     const path = location.pathname
// //     const [menu, setmenu] = useState({})

// //     const activeMenu = () => {
// //         if(path === "/" || path === "/home-02" || path === "/home-03" || path === "/home-04" || path === "/home-05" ){
// //             setmenu({home:true})
// //         }else if(path === "/about" ){
// //             setmenu({deposits:true})
// //         }else if(path === "/service" || path === "/servicedetails" ){
// //             setmenu({Loans:true})
// //         }else if(path === "/team" || path === "/teamdetails"  || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" ||  path === "/applynow"){
// //             setmenu({aboutus:true})
// //         }else if(path === "/personalloan" || path === "/loaneligibility" || path === "/homeloan" || path === "/homeloaneligibility" || path === "/compareEMI" || path === "/monthlyloan"){
// //             setmenu({insurance:true})
// //         }
// //         else if(path === "/newsmain" || path === "/newsdetails" ){
// //             setmenu({interestrate:true})
// //         }
// //         else if(path === "/contact"){
// //             setmenu({contact:true})
// //         }else if(path === "/contact"){
// //             setmenu({download:true})
// //         }else{
// //             setmenu({home:true})
// //         }
// //     }

// //     const [sticky, setSticky] = useState(false);
// //     useEffect(() => {
// //         window.addEventListener("scroll", isSticky);
// //         return () => {
// //             window.removeEventListener("scroll", isSticky);
// //         };
// //     }, []);

// //     useEffect(() => {
// //         window.scroll(0, 0)
// //         activeMenu()
// //     }, [path]);
// //     const isSticky = () => {
// //         const scrollTop = window.scrollY;
// //         scrollTop >= 141 ? setSticky(true) : setSticky(false);
// //     }

// //   return (
// //     <>
// //         <div className="page-wrapper">
// //             <div className="topbar">
// //                 <div className="container-fluid">
// //                     <div className="topbar__info">
// //                         <Link to="#"><i className="icon-pin"></i> 88 Road Broklyn Golden Street. New York</Link>
// //                         <Link to="mailto:needhelp@company.com"><i className="icon-email"></i> needhelp@company.com</Link>
// //                     </div>
// //                     <div className="topbar__links">
// //                         <Link to="#">Login</Link>
// //                         <Link to="#">Company News</Link>
// //                         <Link to="/faqs">FAQs</Link>
// //                     </div>
// //                     <div className="topbar__social">
// //                         <Link to="#"><i className="fab fa-twitter"></i></Link>
// //                         <Link to="#"><i className="fab fa-facebook"></i></Link>
// //                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
// //                         <Link to="#"><i className="fab fa-instagram"></i></Link>
// //                     </div>
// //                 </div>
// //             </div>
// //             <nav className={`main-menu ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
// //                 <div className="container-fluid">
// //                     <div className="main-menu__logo">

// //                         <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1" viewBox="0 0 317 120">
// //                             <path d="M259.856,120H0V0H274l43,37.481Z" />
// //                         </svg>
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2" viewBox="0 0 317 120">
// //                             <path d="M259.856,120H0V0H274l43,37.481Z" />
// //                         </svg>


// //                         <div className="main-menu__logo__img">
// //     <Link to="/">
// //       <img
// //         src={logox}
// //         width="200"
// //         alt="Janaseva-Sahakari-Bank-Ltd., Hadapsar-Pune"
// //       />
// //     </Link>
// //   </div>

// //                     </div>
// //                     <div className="main-menu__nav">
// //                         <ul className="main-menu__list">
// //                             <li className={`dropdown ${menu.home && "current"}`}>
// //                                 <Link to="/">Home</Link>
// //                                 <ul>
// //                                     <li><Link to="/">Home One</Link> </li>
// //                                     <li><Link to="/home-02">Home Two</Link></li>
// //                                     <li><Link to="/home-03">Home Three</Link></li>
// //                                     <li><Link to="/home-04">Home Four</Link></li>
// //                                     <li><Link to="/home-05">Home five</Link></li>
// //                                     <li className="dropdown">
// //                                         <Link to="#">Header Styles</Link>
// //                                         <ul>
// //                                             <li><Link to="/">Header One</Link></li>
// //                                             <li><Link to="/home-02">Header Two</Link></li>
// //                                             <li><Link to="/home-03">Header Three</Link></li>
// //                                             {/* <li><Link to="/home-04">Header four</Link></li> */}
// //                                         </ul>
// //                                     </li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`dropdown ${menu.deposits && "current" && "hover"}`} 
// //                             ><Link to="/#">Deposits</Link>
// //                                 <ul>
// //                                     <li><Link to="/#">Saving Account</Link></li>
// //                                     <li><Link to="/#">Current Account</Link></li>
// //                                     <li><Link to="/#">Recuring deposits</Link></li>
// //                                     <li><Link to="/#">Fixed Deposits</Link></li>
// //                                 </ul>
// //                             </li>

// //                             <li className={`dropdown ${menu.Loans && "current" && "hover"}`} 
// //                             ><Link to="/#">Loans</Link>
// //                                 <ul>
// //                                     <li><Link to="/#">Retail Loan</Link></li>
// //                                     <li><Link to="/#">Commercial Loan</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`dropdown ${menu.aboutus && "current"}`}><Link to="#">About Us</Link>
// //                                 <ul>
// //                                     <li><Link to="/#">Profile</Link></li>
// //                                     <li><Link to="/#">Board Of Directors</Link></li>
// //                                     <li><Link to="/#">Board Of Management</Link></li>
// //                                     <li><Link to="/#">Events</Link></li>
// //                                     <li><Link to="/#">Careers</Link></li>
// //                                     <li><Link to="/#">Testimonals</Link></li>
// //                                     <li><Link to="/#">Blogs</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`dropdown ${menu.insurance && "current"}`}><Link to="#">Insurance</Link>
// //                                 <ul>
// //                                     <li><Link to="/#">General Insurance</Link></li>
// //                                     <li><Link to="/#">Health Insurance</Link></li>
// //                                     <li><Link to="/#">Life Insurance</Link></li>

// //                                 </ul>
// //                             </li>
// //                              <li className={`download ${menu.download && "current"}`}><Link to="/#">Downloads</Link></li>
// //                             <li className={`dropdown ${menu.interestrate && "current"}`}><Link to="/#">Interest Rate</Link>
// //                                 <ul>
// //                                     <li><Link to="/#">Loan Interest Rate</Link></li>
// //                                     <li><Link to="/#">Deposit Interest Rate</Link></li>
// //                                 </ul>
// //                             </li>
// //                             <li className={`contact ${menu.contact && "current"}`}><Link to="/#">Contact</Link></li>

// //                             {/* <li className={`contact ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li> */}
// //                         </ul>
// //                     </div>
// //                     <div className="main-menu__right">
// //                         <Link to="#" onClick= {() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
// //                             <i className="fa fa-bars"></i>
// //                         </Link>
// //                         <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
// //                             <i className="icon-magnifying-glass"></i>
// //                         </Link>
// //                         <Link to="/applynow" className="thm-btn main-menu__btn">Login</Link>
// //                         <Link to="tel:926668880000" className="main-menu__contact">
// //                             <span className="main-menu__contact__icon">
// //                                 <i className="icon-phone"></i>
// //                             </span>
// //                             <span className="main-menu__contact__text">
// //                                 <strong>92 666 888 0000</strong>
// //                                 Mon to Fri: 9 am to 6 pm
// //                             </span>
// //                         </Link>
// //                     </div>
// //                 </div>
// //             </nav>
// //         </div>

// //         <div className={`search-popup ${search && "active"}`}>
// //             <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
// //             <div className="search-popup__content">
// //                 <form action="#">
// //                     <label htmlFor="search" className="sr-only">search here</label>
// //                     <input type="text" id="search" placeholder="Search Here..." />
// //                     <button type="submit" aria-label="search submit" className="thm-btn">
// //                         <i className="icon-magnifying-glass"></i>
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>

// //         <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
// //                 <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
// //                 <div className="mobile-nav__content">
// //                     <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i className="fa fa-times"></i></span>

// //                     <div className="logo-box">
// //                         <Link to="/" aria-label="logo image"><img src={logoL} width="155" alt="" /></Link>
// //                     </div>

// //                     <div className="mobile-nav__container">
// //                         <ul className="main-menu__list">
// //                             <li className="dropdown current">
// //                                 <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
// //                                 {homeDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li className="current">
// //                                             <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
// //                                         </li>
// //                                         <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
// //                                         <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
// //                                         <li className="dropdown">
// //                                             <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
// //                                                 <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
// //                                                     <i className="fa fa-angle-down"></i>
// //                                                 </button>
// //                                             </Link>
// //                                             {headerDrop &&
// //                                                 <ul style={{ display: "block" }}>
// //                                                     <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
// //                                                     <li><Link to="/home-02" onClick={() => setmobile(false)}>Header Two</Link></li>
// //                                                     <li><Link to="/home-03" onClick={() => setmobile(false)}>Header Three</Link></li>
// //                                                 </ul>}
// //                                         </li>
// //                                     </ul>}
// //                             </li>
// //                             <li>
// //                                 <Link to="/about" onClick={() => setmobile(false)}>About</Link>
// //                             </li>
// //                             <li className="dropdown">
// //                                 <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
// //                                     <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
// //                                         <i className="fa fa-angle-down"></i>
// //                                     </button>
// //                                 </Link>
// //                                 {servicesDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/service" onClick={() => setmobile(false)}>Service</Link></li>
// //                                         <li><Link to="/servicedetails" onClick={() => setmobile(false)}>Service Details</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li className="dropdown">
// //                                 <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
// //                                     <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
// //                                         <i className="fa fa-angle-down"></i>
// //                                     </button>
// //                                 </Link>
// //                                 {pagesDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/team" onClick={() => setmobile(false)}>Team</Link></li>
// //                                         <li><Link to="/teamdetails" onClick={() => setmobile(false)}>Team Details</Link></li>
// //                                         <li><Link to="/creditrepair" onClick={() => setmobile(false)}>Credit Repair</Link></li>
// //                                         <li><Link to="/creditaudit" onClick={() => setmobile(false)}>Credit Audit</Link></li>
// //                                         <li><Link to="/careers" onClick={() => setmobile(false)}>Careers</Link></li>
// //                                         <li><Link to="/faqs" onClick={() => setmobile(false)}>Faqs</Link></li>
// //                                         <li><Link to="/applynow" onClick={() => setmobile(false)}>Apply Now</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li className="dropdown">
// //                                 <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
// //                                     <button aria-label="dropdown toggler" className={featuresDrop ? "expanded" : ""} onClick={() => setfeaturesDrop(featuresDrop ? false : true)}>
// //                                         <i className="fa fa-angle-down"></i>
// //                                     </button>
// //                                 </Link>
// //                                 {featuresDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/personalloan" onClick={() => setmobile(false)}>Personal Loan</Link></li>
// //                                         <li><Link to="/loaneligibility" onClick={() => setmobile(false)}>Loan Eligibility</Link></li>
// //                                         <li><Link to="/homeloan" onClick={() => setmobile(false)}>Home Loan</Link></li>
// //                                         <li><Link to="/homeloaneligilibity" onClick={() => setmobile(false)}>Home Loan Eligibility</Link></li>
// //                                         <li><Link to="/compareEMI" onClick={() => setmobile(false)}>Compare EMI</Link></li>
// //                                         <li><Link to="/monthlycalculator" onClick={() => setmobile(false)}>Monthly Calculator</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li className="dropdown">
// //                             <Link to="#" className={newsDrop ? "expanded" : ""}>News
// //                                 <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
// //                                     <i className="fa fa-angle-down"></i>
// //                                 </button>
// //                             </Link>
// //                                 {newsDrop &&
// //                                     <ul style={{ display: "block" }}>
// //                                         <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
// //                                         <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
// //                                     </ul>}
// //                             </li>
// //                             <li>
// //                                 <Link to="/contact" onClick={() => setmobile(false)}>Contact</Link>
// //                             </li>
// //                         </ul>

// //                     </div>


// //                     <ul className="mobile-nav__contact list-unstyled">
// //                         <li>
// //                             <i className="icon-email"></i>
// //                             <Link to="mailto:needhelp@packageName__.com">needhelp@finlon.com</Link>
// //                         </li>
// //                         <li>
// //                             <i className="icon-telephone"></i>
// //                             <Link to="tel:666-888-0000">666 888 0000</Link>
// //                         </li>
// //                     </ul>

// //                     <div className="mobile-nav__social">
// //                         <Link to="#"><i className="fab fa-twitter"></i></Link>
// //                         <Link to="#"><i className="fab fa-facebook"></i></Link>
// //                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
// //                         <Link to="#"><i className="fab fa-instagram"></i></Link>
// //                     </div>

// //                 </div>

// //         </div>
// //     </>
// //   )
// // }

// // export default Navbar








// import { Link, useLocation } from 'react-router-dom'
// import React, { useState, useEffect, useRef } from 'react'
// import logoL from '../../assets/images/44.png'
// import Switcher from '../../assets/images/translate-fill.svg'
// // import logoz from '../../assets/images/janseva-bank-logo-white-removebg-preview (1).png'
// import { FaUniversalAccess } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowForward } from "react-icons/fa";



// function Navbar() {

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
//         if (path === "/" || path === "/home-02" || path === "/home-03" || path === "/home-04" ) {
//             setmenu({ home: true })
//         } else if (path === "/about") {
//             setmenu({ about: true })
//         } else if (path === "/service" || path === "/servicedetails") {
//             setmenu({ services: true })
//         } else if (path === "/Two-wheeler-Loan" || path === "/teamdetails" || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" || path === "/applynow") {
//             setmenu({ aboutus: true })
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
//                 <div className="container containerheader2">
//                     <div className="topbar__info info22">
//                         <Link to="/#"><i className="icon-pin "></i>Branch Locator</Link>
//                         <Link to="/#">
//                             <i className="fa fa-forward menu-icon"></i>
//                             Skip To Main Content
//                         </Link>
//                         <div className="lang-dropdown">
//                             <button className="lang-btn22">
//                                <img src={Switcher} width="20" /> English <IoIosArrowForward className="lang-icon" />
//                             </button>

//                             <ul className="lang-menu">
//                                 <li>
//                                     <button type="button">English</button>
//                                 </li>
//                                 <li>
//                                     <button type="button">मराठी</button>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* <div className="topbar__social ml-20">
//                         <Link to="/#"><i className="fab fa-twitter"></i></Link>
//                         <Link to="/#"><i className="fab fa-facebook"></i></Link>
//                         <Link to="/#"><i className="fab fa-pinterest"></i></Link>
//                         <Link to="/#"><i className="fab fa-instagram"></i></Link>
//                     </div> */}
//                     <div className="main-menu__right">
//                         <Link
//                             to="/#"
//                             className="main-menu__accessibility22"
//                             aria-label="Accessibility options"
//                             title="Accessibility"
//                         >
//                             <FaUniversalAccess aria-hidden="true" />
//                         </Link>
//                         <Link to="/#" className="main-menu__toggler mobile-nav__toggler" onClick={() => setmobile(true)}>
//                             <i className="fa fa-bars"></i>
//                         </Link>
//                         <Link to="#" onClick={() => setsearch(true)} className="main-menu__search main-menu__search22 search-toggler">
//                             <CiSearch  />
//                         </Link>
//                         <Link to="/#" className="thm-btn main-menu__btn  btn22">Login</Link>
//                     </div>
//                 </div>
//             </div>

//             <nav className={`main-menu main-menu--two ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
//                 <div className="container22">
//                     <div className="main-menu--two__inner2">
//                         {/* <div className="main-menu__logo2">
//                             <Link to="/">
//                                 <img src={logoL} width="600"  alt="Finlon" />
//                             </Link>
//                         </div> */}
//                         <div className={`main-menu__logo2 ${sticky ? "logo-small" : ""}`}>
//                             <Link to="/">
//                                 <img src={logoL} alt="Finlon" />
//                             </Link>
//                         </div>

//                         <div className="main-menu__nav2">
//                             <ul className="main-menu__list main-menu__list2">
//                                 <li className={`dropdown ${menu.home && "current"}`}>
//                                     <Link to="/">Home</Link>
//                                     <ul>
//                                         <li> <Link to="/">Home One</Link> </li>
//                                         <li><Link to="/home-02">Home Two</Link></li>
//                                         <li><Link to="/home-03">Home Three</Link></li>
//                                         <li><Link to="/home-04">Home four</Link></li>
//                                         {/* <li><Link to="/home-05">Home five</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="/#">Header Styles</Link>
//                                             <ul>
//                                                 <li><Link to="/">Header One</Link></li>
//                                                 <li><Link to="/home-02">Header Two</Link></li>
//                                                 <li><Link to="/home-03">Header Three</Link></li>
//                                             </ul>
//                                         </li> */}
//                                     </ul>
//                                 </li>
//                                 {/* <li className={`about ${menu.about && "current"}`}>
//                                     <Link to="/about">About</Link>
//                                 </li> */}
//                                 <li className={`about ${menu.contact && "current"}`}><Link to="/#">Accounts</Link></li>
//                                 <li className={`dropdown ${menu.about && "current"}`}><Link to="/#">Deposits</Link>
//                                     <ul>
//                                         <li><Link to="/#">Saving Account</Link></li>
//                                         <li><Link to="/#">Current Account</Link></li>
//                                         <li><Link to="/#">Recuring deposits</Link></li>
//                                         <li><Link to="/#">Fixed Deposits</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.services && "current"}`}><Link to="/#">Loans</Link>
//                                     <ul>
//                                         <li><Link to="/Two-wheeler-Loan">Two wheeler Loan</Link></li>
//                                         <li><Link to="/#">Commercial Loan</Link></li>
//                                     </ul>
//                                 </li>





//                                 <li className={`dropdown ${menu.aboutus && "current"}`}><Link to="#">About us</Link>
//                                     <ul>
//                                         <li><Link to="/#">Profile</Link></li>
//                                         <li><Link to="/#">Board Of Directors</Link></li>
//                                         <li><Link to="/#">Board Of Management</Link></li>
//                                         <li><Link to="/#">Events</Link></li>
//                                         <li><Link to="/#">Careers</Link></li>
//                                         <li><Link to="/#">Testimonals</Link></li>
//                                         <li><Link to="/#">Blogs</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.features && "current"}`}><Link to="#">Insurance</Link>
//                                     <ul>
//                                         <li><Link to="/#">General Insurance</Link></li>
//                                         <li><Link to="/#">Health Insurance</Link></li>
//                                         <li><Link to="/#">Life Insurance</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.news && "current"}`}><Link to="#">Interest Rate</Link>
//                                     <ul>
//                                         <li><Link to="/#">Loan Interest Rate</Link></li>
//                                         <li><Link to="/#">Deposit Interest Rate</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`about ${menu.contact && "current"}`}><Link to="/#">Contact</Link></li>

//                             </ul>
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
//                                 <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
//                                 {homeDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li className="current">
//                                             <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
//                                         </li>
//                                         <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
//                                         <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
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
//                                 <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
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
//                                 <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
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
//                                 <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
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
//                                 <Link to="#" className={newsDrop ? "expanded" : ""}>News
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
//                         <Link to="#"><i className="fab fa-twitter"></i></Link>
//                         <Link to="#"><i className="fab fa-facebook"></i></Link>
//                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
//                         <Link to="#"><i className="fab fa-instagram"></i></Link>
//                     </div>

//                 </div>

//             </div>

//             <div className={`search-popup ${search && "active"}`}>
//                 <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
//                 <div className="search-popup__content">
//                     <form action="#">
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

// export default Navbar








// import { Link, useLocation } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import logox from '../../assets/images/44.png'
// import logoz from '../../assets/images/44.png'
// import logoL from '../../assets/images/janseva-logo-eng-monteserrat2.png'
// import { IoIosArrowForward } from "react-icons/fa";
// import { FaUniversalAccess } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// // import AccessibilityPanel from '../Accessibilitypanel'


// const Navbar = () => {
//     const [langOpen, setLangOpen] = useState(false);
//     const [mobile, setmobile] = useState(false)
//     const [search, setsearch] = useState(false)
//     const [homeDrop, sethomeDrop] = useState(false)
//     const [headerDrop, setheaderDrop] = useState(false)
//     const [servicesDrop, setservicesDrop] = useState(false)
//     const [featuresDrop, setfeaturesDrop] = useState(false)
//     const [newsDrop, setnewsDrop] = useState(false)
//     const [pagesDrop, setpagesDrop] = useState(false)
//     const location = useLocation()
//     const path = location.pathname
//     const [menu, setmenu] = useState({})

//     const activeMenu = () => {
//         if (path === "/" || path === "/home-02" || path === "/home-03" || path === "/home-04") {
//             setmenu({ home: true })
//         } else if (path === "/#" || path === "/#" || path === "/#" || path === "/Fixed-Deposits") {
//             setmenu({ deposits: true })
//         } else if (path === "/#" || path === "/#" || path === "/#" || path === "/Machinery-Loan") {
//             setmenu({ Loans: true })
//         } else if (path === "/Our-history" || path === "/Board-of-directors" || path === "/Board-of-management" || path === "/Events" || path === "/#" || path === "/Testimonials" || path === "/Annual-Reports") {
//             setmenu({ aboutus: true })
//         } else if (path === "/#" || path === "/#" || path === "/#" || path === "/#" || path === "/#") {
//             setmenu({ insurance: true })
//         }
//         else if (path === "/#" || path === "/#") {
//             setmenu({ interestrate: true })
//         }
//         else if (path === "/#") {
//             setmenu({ contact: true })
//         } else if (path === "/#") {
//             setmenu({ download: true })
//         } else {
//             setmenu({ home: true })
//         }
//     }

//     const [sticky, setSticky] = useState(false);
//     useEffect(() => {
//         window.addEventListener("scroll", isSticky);
//         return () => {
//             window.removeEventListener("scroll", isSticky);
//         };
//     }, []);

//     useEffect(() => {
//         window.scroll(0, 0)
//         activeMenu()
//     }, [path]);
//     const isSticky = () => {
//         const scrollTop = window.scrollY;
//         scrollTop >= 141 ? setSticky(true) : setSticky(false);
//     }

//     return (
//         <>
//             <div className="page-wrapper">
//                 <div className="topbar topbar44">
//                     <div className="container-fluid ">
//                         <div className="topbar__info topbar__info3">
//                             <Link to="/#"><i className="icon-pin "></i>Branch Locator</Link>
//                             {/* <Link to="mailto:needhelp@company.com"><i className="icon-email"></i>Skip To Main Content</Link> */}
//                             <Link to="/#">
//                                 <i className="fa fa-forward menu-icon"></i>
//                                 Skip To Main Content
//                             </Link>
//                             <div className="lang-dropdown relative">
//                                 <button
//                                     className="lang-btn flex items-center gap-1"
//                                     onClick={() => setLangOpen(!langOpen)}
//                                 >
//                                     English
//                                     <IoIosArrowForward
//                                         className={`lang-icon transition ${langOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </button>

//                                 {langOpen && (
//                                     <ul className="lang-menu absolute  bg-white shadow-md rounded-md overflow-hidden z-50">
//                                         <li>
//                                             <button
//                                                 type="button"
//                                                 className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
//                                                 onClick={() => setLangOpen(false)}
//                                             >
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button
//                                                 type="button"
//                                                 className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
//                                                 onClick={() => setLangOpen(false)}
//                                             >
//                                                 मराठी
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>

//                         </div>
//                         {/* 
//                         <div className="topbar__social">
//                             <Link to="/#"><i className="fab fa-twitter"></i></Link>
//                             <Link to="/#"><i className="fab fa-facebook"></i></Link>
//                             <Link to="/#"><i className="fab fa-pinterest"></i></Link>
//                             <Link to="/#"><i className="fab fa-instagram"></i></Link>
//                         </div> */}
//                         <div className="topbar__links Links3">
//                             <Link
//                                 to="/#"
//                                 className="main-menu__accessibility "
//                                 aria-label="Accessibility options"
//                                 title="Accessibility"
//                             >
//                                 <FaUniversalAccess aria-hidden="true" />
//                             </Link>
//                             {/* <AccessibilityPanel/> */}


//                             {/* <Link to="/#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
//                                 <i className="icon-magnifying-glass"></i>
//                             </Link> */}
//                             <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler search33">
//                                 <CiSearch />
//                             </Link>


//                             <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx" className="thm-btn main-menu__btn3">Login</Link>
//                             {/* <Link to="/#">Login</Link> */}
//                             {/* <Link to="/#">Company News</Link> */}
//                             {/* <Link to="/#">FAQs</Link> */}

//                         </div>

//                     </div>
//                 </div>
//                 <nav className={`main-menu ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
//                     <div className="container-fluid   nav44">
//                         <div className="main-menu__logo logo3 logo44">

//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1 head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 43 40 Z" />
//                             </svg>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2  head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 42 40 Z" />
//                             </svg>


//                             <div className="main-menu__logo__img">
//                                 <Link to="/">
//                                     <img
//                                         src={sticky ? logoz : logox}
//                                         className={`logo33  main-menu__logo3 ${sticky ? "logo-small" : "logo-large"}`}
//                                         alt="Janaseva-Sahakari-Bank-Ltd., Hadapsar-Pune"
//                                     />
//                                 </Link>
//                             </div>

//                         </div>
//                         <div className="main-menu__nav nav3">
//                             <ul className="main-menu__list navcolor44">
//                                 <li className={`dropdown ${menu.home && "current" && "hover"}`}>
//                                     <Link to="/">Home</Link>
//                                     <ul>
//                                         <li><Link to="/">Home One</Link> </li>
//                                         <li><Link to="/home-02">Home Two</Link></li>
//                                         <li><Link to="/home-03">Home Three</Link></li>
//                                         <li><Link to="/home-04">Home four</Link></li>
//                                         {/* <li><Link to="/home-05">Home five</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="/#">Header Styles</Link>
//                                             <ul>
//                                                 <li><Link to="/">Header One</Link></li>
//                                                 <li><Link to="/home-02">Header Two</Link></li>
//                                                 <li><Link to="/home-03">Header Three</Link></li>
//                                             </ul>
//                                         </li> */}
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.deposits && "current" && "hover"}`}
//                                 ><Link to="/#">Deposits</Link>
//                                     <ul>
//                                         <li><Link to="/#">Saving Account</Link></li>
//                                         <li><Link to="/#">Current Account</Link></li>
//                                         <li><Link to="/#">Recuring deposits</Link></li>
//                                         <li><Link to="/Fixed-Deposits">Fixed Deposits</Link></li>
//                                     </ul>
//                                 </li>

//                                 {/* <li className={({ isActive }) => isActive ? "active-link" : ""}>
//                                 <Link to="/#">Loans</Link>
//                                     <ul>
//                                         <li><Link to="/#">Two wheeler Loan</Link></li>
//                                         <li><Link to="/#">Commercial Loan</Link></li>
//                                         <li><Link to="/#">Gold Loan</Link></li>
//                                         <li><Link to="/#">Commercial Products</Link></li>
//                                         <li><Link to="/Machinery-Loan">Machinery Loan</Link></li>
//                                     </ul>
//                                 </li> */}
//                                 ```jsx
// <li className={({ isActive }) => (isActive ? "active-link" : "")}>
//   <Link to="/#">Loans</Link>

//   <ul>
//     <li><Link to="/#">Two Wheeler Loan</Link></li>
//     <li><Link to="/#">Commercial Loan</Link></li>
//     <li><Link to="/#">Gold Loan</Link></li>

//     {/* Commercial Products with Sub Menu */}
//     <li className="submenu">
//       <Link to="/#">Commercial Products</Link>

//       <ul className="sub-dropdown">
//         <li><Link to="/3-wheeler-loan">3 Wheeler Loan</Link></li>
//         <li><Link to="/commercial-vehicle-loan">Commercial Vehicle Loan</Link></li>
//         <li><Link to="/udyog-vastu-loan">Udyog Vastu Loan</Link></li>
//         <li><Link to="/cash-credit-loan">Cash Credit Loan</Link></li>
//         <li><Link to="/Machinery-Loan">Machinery Loan</Link></li>
//         <li><Link to="/hypothecation-loan">Hypothecation Loan</Link></li>
//         <li><Link to="/trade-pack-loan">Trade Pack Loan</Link></li>
//       </ul>
//     </li>

//   </ul>
// </li>
// ```

//                                 <li className={`dropdown ${menu.aboutus && "current" && "hover"}`}><Link to="#">About Us</Link>
//                                     <ul>
//                                         <li><Link to="/Our-history">Profile</Link></li>
//                                         <li><Link to="/Board-of-directors">Board Of Directors</Link></li>
//                                         <li><Link to="/Board-of-management">Board Of Management</Link></li>
//                                         <li><Link to="/Events">Events</Link></li>
//                                         <li><Link to="/#">Careers</Link></li>
//                                         <li><Link to="/Testimonials">Testimonals</Link></li>
//                                         <li><Link to="/Annual-Reports">Annual-Reports</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.insurance && "current" && "hover"}`}><Link to="#">Insurance</Link>
//                                     <ul>
//                                         <li><Link to="/#">General Insurance</Link></li>
//                                         <li><Link to="/#">Health Insurance</Link></li>
//                                         <li><Link to="/#">Life Insurance</Link></li>

//                                     </ul>
//                                 </li>
//                                 <li className={`download ${menu.download && "current"}`}><Link to="/#">Downloads</Link></li>
//                                 <li className={`dropdown ${menu.interestrate && "current" && "hover"}`}><Link to="/#">Interest Rate</Link>
//                                     <ul>
//                                         <li><Link to="/#">Loan Interest Rate</Link></li>
//                                         <li><Link to="/#">Deposit Interest Rate</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`contact ${menu.contact && "current"}`}><Link to="/#">Contact</Link></li>

//                                 {/* <li className={`contact ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li> */}
//                             </ul>
//                         </div>
//                         <div className="main-menu__right">
//                             <Link to="#" onClick={() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
//                                 <i className="fa fa-bars"></i>
//                             </Link>
//                             {/* <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
//                             <i className="icon-magnifying-glass"></i>
//                         </Link>
//                         <Link to="/applynow" className="thm-btn main-menu__btn">Login</Link>
//                         <Link to="tel:926668880000" className="main-menu__contact">
//                             <span className="main-menu__contact__icon">
//                                 <i className="icon-phone"></i>
//                             </span>
//                             <span className="main-menu__contact__text">
//                                 <strong>92 666 888 0000</strong>
//                                 Mon to Fri: 9 am to 6 pm
//                             </span>
//                         </Link> */}
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             <div className={`search-popup ${search && "active"}`}>
//                 <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
//                 <div className="search-popup__content">
//                     <form action="#">
//                         <label htmlFor="search" className="sr-only">search here</label>
//                         <input type="text" id="search" placeholder="Search Here..." />
//                         <button type="submit" aria-label="search submit" className="thm-btn">
//                             <i className="icon-magnifying-glass"></i>
//                         </button>
//                     </form>
//                 </div>
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
//                                 <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
//                                 {homeDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li className="current">
//                                             <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
//                                         </li>
//                                         <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
//                                         <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
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
//                                 <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
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
//                                 <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
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
//                                 <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
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
//                                 <Link to="#" className={newsDrop ? "expanded" : ""}>News
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
//                         <Link to="#"><i className="fab fa-twitter"></i></Link>
//                         <Link to="#"><i className="fab fa-facebook"></i></Link>
//                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
//                         <Link to="#"><i className="fab fa-instagram"></i></Link>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Navbar










// import { Link, useLocation } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import logox from '../../assets/images/44.png'
// import logoz from '../../assets/images/44.png'
// import logoL from '../../assets/images/janseva-logo-eng-monteserrat2.png'
// import { IoIosArrowForward } from "react-icons/fa";
// import { FaUniversalAccess } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// // import AccessibilityPanel from '../Accessibilitypanel'


// const Navbar = () => {
//     const [langOpen, setLangOpen] = useState(false);
//     const [mobile, setmobile] = useState(false)
//     const [search, setsearch] = useState(false)
//     const [homeDrop, sethomeDrop] = useState(false)
//     const [headerDrop, setheaderDrop] = useState(false)
//     const [servicesDrop, setservicesDrop] = useState(false)
//     const [featuresDrop, setfeaturesDrop] = useState(false)
//     const [newsDrop, setnewsDrop] = useState(false)
//     const [pagesDrop, setpagesDrop] = useState(false)
//     const location = useLocation()
//     const path = location.pathname
//     const [menu, setmenu] = useState({})

//     // const activeMenu = () => {
//     //     if (path === "/" || path === "/home-02" || path === "/home-03" || path === "/home-04") {
//     //         setmenu({ home: true })
//     //     } else if (path === "/#" || path === "/#" || path === "/#" || path === "/Fixed-Deposits") {
//     //         setmenu({ deposits: true })
//     //     } else if (path === "/#" || path === "/#" || path === "/#" || path === "/Machinery-Loan") {
//     //         setmenu({ Loans: true })
//     //     } else if (path === "/Our-history" || path === "/Board-of-directors" || path === "/Board-of-management" || path === "/Events" || path === "/#" || path === "/Testimonials" || path === "/Annual-Reports") {
//     //         setmenu({ aboutus: true })
//     //     } else if (path === "/#" || path === "/#" || path === "/#" || path === "/#" || path === "/#") {
//     //         setmenu({ insurance: true })
//     //     }
//     //     else if (path === "/#" || path === "/#") {
//     //         setmenu({ interestrate: true })
//     //     }
//     //     else if (path === "/#") {
//     //         setmenu({ contact: true })
//     //     } else if (path === "/#") {
//     //         setmenu({ download: true })
//     //     } else {
//     //         setmenu({ home: true })
//     //     }
//     // }
//     const activeMenu = () => {
//         if (["/", "/home-02", "/home-03", "/home-04"].includes(path)) {
//             setmenu({ home: true });

//         } else if (["/Saving-Account", "/Current-Account", "/Recurring-Deposits", "/Fixed-Deposits"].includes(path)) {
//             setmenu({ deposits: true });

//         } else if ([
//             "/commercial-loan",
//             "/3-wheeler-loan",
//             "/commercial-vehicle-loan",
//             "/udyog-vastu-loan",
//             "/cash-credit-loan",
//             "/Machinery-Loan","/gold-loan","/Loan-Against-Life-Insurance-Policies",
//             "/hypothecation-loan",
//             "/trade-pack-loan",
//             "/Janaseva-Gharkul-Loan-Scheme",
//             "/Housing-Loan-under-CRE",
//             "/Janaseva-Home-Decore",
//             "/Janaseva-Gharkul-Top-Up","/Government-Secured-Loan","/Loan-Against-FD-FDTL",
//             "/New-four-Wheeler-Loan",
//             "/Two-Wheeler-Loan",
//             "/Resale-4-Wheeler",
//             "/Janaseva-Educational-Secured-Loan",
//             "/Education-loan-for-Coaching","/Janvikas-Loan-Scheme",
//             "/Unsecured-Education-Loan", "/Consumer-Durable", "/Consumer-Loan", "/Personal-Loan-Scheme","/Group-Loan"
//         ].includes(path)) {
//             setmenu({ Loans: true });

//         } else if ([
//             "/Our-history",
//             "/Board-of-directors",
//             "/Board-of-management",
//             "/Events",
//             "/Testimonials",
//             "/Annual-Reports"
//         ].includes(path)) {
//             setmenu({ aboutus: true });

//         } else if (["/general-insurance", "/health-insurance", "/life-insurance"].includes(path)) {
//             setmenu({ insurance: true });

//         } else if (["/loan-interest-rate", "/deposit-interest-rate"].includes(path)) {
//             setmenu({ interestrate: true });

//         } else if (path === "/contact") {
//             setmenu({ contact: true });

//         } else if (path === "/downloads") {
//             setmenu({ download: true });

//         } else {
//             setmenu({ home: true });
//         }
//     };
//     const [sticky, setSticky] = useState(false);
//     useEffect(() => {
//         window.addEventListener("scroll", isSticky);
//         return () => {
//             window.removeEventListener("scroll", isSticky);
//         };
//     }, []);

//     useEffect(() => {
//         window.scroll(0, 0)
//         activeMenu()
//     }, [path]);
//     const isSticky = () => {
//         const scrollTop = window.scrollY;
//         scrollTop >= 141 ? setSticky(true) : setSticky(false);
//     }

//     return (
//         <>
//             <div className="page-wrapper">
//                 <div className="topbar topbar44">
//                     <div className="container-fluid ">
//                         <div className="topbar__info topbar__info3">
//                             <Link to="/#"><i className="icon-pin "></i>Branch Locator</Link>
//                             {/* <Link to="mailto:needhelp@company.com"><i className="icon-email"></i>Skip To Main Content</Link> */}
//                             <Link to="/#">
//                                 <i className="fa fa-forward menu-icon"></i>
//                                 Skip To Main Content
//                             </Link>
//                             <div className="lang-dropdown relative">
//                                 <button
//                                     className="lang-btn flex items-center gap-1"
//                                     onClick={() => setLangOpen(!langOpen)}
//                                 >
//                                     English
//                                     <IoIosArrowForward
//                                         className={`lang-icon transition ${langOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </button>

//                                 {langOpen && (
//                                     <ul className="lang-menu absolute  bg-white shadow-md rounded-md overflow-hidden z-50">
//                                         <li>
//                                             <button
//                                                 type="button"
//                                                 className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
//                                                 onClick={() => setLangOpen(false)}
//                                             >
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button
//                                                 type="button"
//                                                 className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
//                                                 onClick={() => setLangOpen(false)}
//                                             >
//                                                 मराठी
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>

//                         </div>
//                         {/* 
//                         <div className="topbar__social">
//                             <Link to="/#"><i className="fab fa-twitter"></i></Link>
//                             <Link to="/#"><i className="fab fa-facebook"></i></Link>
//                             <Link to="/#"><i className="fab fa-pinterest"></i></Link>
//                             <Link to="/#"><i className="fab fa-instagram"></i></Link>
//                         </div> */}
//                         <div className="topbar__links Links3">
//                             <Link
//                                 to="/#"
//                                 className="main-menu__accessibility "
//                                 aria-label="Accessibility options"
//                                 title="Accessibility"
//                             >
//                                 <FaUniversalAccess aria-hidden="true" />
//                             </Link>
//                             {/* <AccessibilityPanel/> */}


//                             {/* <Link to="/#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
//                                 <i className="icon-magnifying-glass"></i>
//                             </Link> */}
//                             <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler search33">
//                                 <CiSearch />
//                             </Link>


//                             <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx" className="thm-btn main-menu__btn3">Login</Link>
//                             {/* <Link to="/#">Login</Link> */}
//                             {/* <Link to="/#">Company News</Link> */}
//                             {/* <Link to="/#">FAQs</Link> */}

//                         </div>

//                     </div>
//                 </div>
//                 <nav className={`main-menu ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
//                     <div className="container-fluid   nav44">
//                         <div className="main-menu__logo logo3 logo44">

//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1 head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 43 40 Z" />
//                             </svg>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2  head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 42 40 Z" />
//                             </svg>


//                             <div className="main-menu__logo__img">
//                                 <Link to="/">
//                                     <img
//                                         src={sticky ? logoz : logox}
//                                         className={`logo33  main-menu__logo3 ${sticky ? "logo-small" : "logo-large"}`}
//                                         alt="Janaseva-Sahakari-Bank-Ltd., Hadapsar-Pune"
//                                     />
//                                 </Link>
//                             </div>

//                         </div>
//                         <div className="main-menu__nav nav3">
//                             <ul className="main-menu__list navcolor44">
//                                 <li className={`dropdown ${menu.home && "current" && "hover"}`}>
//                                     <Link to="/">Home</Link>
//                                     <ul>
//                                         <li><Link to="/">Home One</Link> </li>
//                                         <li><Link to="/home-02">Home Two</Link></li>
//                                         <li><Link to="/home-03">Home Three</Link></li>
//                                         <li><Link to="/home-04">Home four</Link></li>
//                                         {/* <li><Link to="/home-05">Home five</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="/#">Header Styles</Link>
//                                             <ul>
//                                                 <li><Link to="/">Header One</Link></li>
//                                                 <li><Link to="/home-02">Header Two</Link></li>
//                                                 <li><Link to="/home-03">Header Three</Link></li>
//                                             </ul>
//                                         </li> */}
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.deposits && "current" && "hover"}`}
//                                 ><Link to="/#">Deposits</Link>
//                                     <ul>
//                                         <li><Link to="/#">Saving Account</Link></li>
//                                         <li><Link to="/#">Current Account</Link></li>
//                                         <li><Link to="/#">Recuring deposits</Link></li>
//                                         <li><Link to="/Fixed-Deposits">Fixed Deposits</Link></li>
//                                     </ul>
//                                 </li>

//                                 {/* <li className={({ isActive }) => isActive ? "active-link" : ""}>
//                                 <Link to="/#">Loans</Link>
//                                     <ul>
//                                         <li><Link to="/#">Two wheeler Loan</Link></li>
//                                         <li><Link to="/#">Commercial Loan</Link></li>
//                                         <li><Link to="/#">Gold Loan</Link></li>
//                                         <li><Link to="/#">Commercial Products</Link></li>
//                                     </ul>
//                                 </li> */}
//                                 <li className={`dropdown ${menu.Loans && "current"}`}>
//                                     <Link to="/#">Loans</Link>

//                                     <ul>
//                                         <li className="dropdown">
//                                             <Link to="/#">
//                                                 Commercial Products <IoIosArrowForward />
//                                             </Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/3-wheeler-loan">3 Wheeler Loan</Link></li>
//                                                 <li><Link to="/New-commercial-vehicle">New Commercial Vehicle</Link></li>
//                                                 <li><Link to="/udyog-vastu-loan">Udyog Vastu Yojana</Link></li>
//                                                 <li><Link to="/Cash-Credit-Secured-General">Cash Credit Loan</Link></li>
//                                                 <li><Link to="/Machinery-Loan">Machinery Loan</Link></li>
//                                                 <li><Link to="/hypothecation-loan">Hypothecation Loan</Link></li>
//                                                 <li><Link to="/trade-pack-loan">Trade Pack Loan</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li><Link to="/Janaseva-Gharkul-Loan-Scheme">Janaseva Gharkul Scheme</Link></li>
//                                         <li><Link to="/two-wheeler-loan">Two Wheeler Loan</Link></li>                                        
//                                         <li><Link to="/commercial-loan">Commercial Loan</Link></li>
//                                         <li><Link to="/gold-loan">Gold Loan</Link></li>   
//                                         <li><Link to="/Loan-Against-FD-FDTL">Loan Against FD - FDTL</Link></li>
//                                          <li><Link to="/Cash-Credit-Against-FD-FDCC">Cash Credit Against FD - FDCC</Link></li>    
//                                         <li><Link to="/Government-Secured-Loan">Government Secured Loan</Link></li>
//                                         <li><Link to="/Loan-Against-Life-Insurance-Policies">Loan Against Life Insurance Policies</Link></li>
//                                         <li><Link to="/Janvikas-Loan-Scheme">Janvikas Loan Scheme</Link></li>
//                                         <li><Link to="/Group-Loan">Group Loan</Link></li>
//                                         <li><Link to="/Personal-Loan-Scheme">Personal Loan Scheme </Link></li>
//                                         <li><Link to="/Consumer-Loan">Consumer Loan - For Housing Furniture</Link></li>
//                                         <li><Link to="/Consumer-Durable">Consumer Durable / Furniture</Link></li>
//                                         <li><Link to="/Janaseva-Educational-Secured-Loan">Janaseva Educational Loan</Link></li>
//                                         <li><Link to="/Education-loan-for-Coaching">Education loan for Coaching</Link></li>
//                                         <li><Link to="/Housing-Loan-under-CRE">Housing Loan under CRE</Link></li>
//                                         <li><Link to="/Janaseva-Home-Decore">Janaseva Home Decore</Link></li>
//                                         <li><Link to="/Unsecured-Education-Loan">Unsecured Education Loan</Link></li>
//                                         <li><Link to="/Janaseva-Gharkul-Top-Up">Janaseva Gharkul Top Up</Link></li>
//                                         <li><Link to="/New-four-Wheeler-Loan">New four Wheeler Loan</Link></li>
//                                         <li><Link to="/Two-Wheeler-Loan">Two Wheeler Loan</Link></li>
//                                         <li><Link to="/Resale-4-Wheeler">Resale 4 Wheeler </Link></li>



//                                     </ul>
//                                 </li>

//                                 <li className={`dropdown ${menu.aboutus && "current" && "hover"}`}><Link to="#">About Us</Link>
//                                     <ul>
//                                         <li><Link to="/Our-history">Profile</Link></li>
//                                         <li><Link to="/Board-of-directors">Board Of Directors</Link></li>
//                                         <li><Link to="/Board-of-management">Board Of Management</Link></li>
//                                         <li><Link to="/Events">Events</Link></li>
//                                         <li><Link to="/#">Careers</Link></li>
//                                         <li><Link to="/Testimonials">Testimonals</Link></li>
//                                         <li><Link to="/Annual-Reports">Annual-Reports</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.insurance && "current" && "hover"}`}><Link to="#">Insurance</Link>
//                                     <ul>
//                                         <li><Link to="/#">General Insurance</Link></li>
//                                         <li><Link to="/#">Health Insurance</Link></li>
//                                         <li><Link to="/#">Life Insurance</Link></li>

//                                     </ul>
//                                 </li>
//                                 <li className={`download ${menu.download && "current"}`}><Link to="/#">Downloads</Link></li>
//                                 <li className={`dropdown ${menu.interestrate && "current" && "hover"}`}><Link to="/#">Interest Rate</Link>
//                                     <ul>
//                                         <li><Link to="/#">Loan Interest Rate</Link></li>
//                                         <li><Link to="/#">Deposit Interest Rate</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`contact ${menu.contact && "current"}`}><Link to="/#">Contact</Link></li>

//                                 {/* <li className={`contact ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li> */}
//                             </ul>
//                         </div>
//                         <div className="main-menu__right">
//                             <Link to="#" onClick={() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
//                                 <i className="fa fa-bars"></i>
//                             </Link>
//                             {/* <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
//                             <i className="icon-magnifying-glass"></i>
//                         </Link>
//                         <Link to="/applynow" className="thm-btn main-menu__btn">Login</Link>
//                         <Link to="tel:926668880000" className="main-menu__contact">
//                             <span className="main-menu__contact__icon">
//                                 <i className="icon-phone"></i>
//                             </span>
//                             <span className="main-menu__contact__text">
//                                 <strong>92 666 888 0000</strong>
//                                 Mon to Fri: 9 am to 6 pm
//                             </span>
//                         </Link> */}
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             <div className={`search-popup ${search && "active"}`}>
//                 <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
//                 <div className="search-popup__content">
//                     <form action="#">
//                         <label htmlFor="search" className="sr-only">search here</label>
//                         <input type="text" id="search" placeholder="Search Here..." />
//                         <button type="submit" aria-label="search submit" className="thm-btn">
//                             <i className="icon-magnifying-glass"></i>
//                         </button>
//                     </form>
//                 </div>
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
//                                 <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
//                                 {homeDrop &&
//                                     <ul style={{ display: "block" }}>
//                                         <li className="current">
//                                             <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
//                                         </li>
//                                         <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
//                                         <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
//                                         <li className="dropdown">
//                                             <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
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
//                                 <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
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
//                                 <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
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
//                                 <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
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
//                                 <Link to="#" className={newsDrop ? "expanded" : ""}>News
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
//                         <Link to="#"><i className="fab fa-twitter"></i></Link>
//                         <Link to="#"><i className="fab fa-facebook"></i></Link>
//                         <Link to="#"><i className="fab fa-pinterest"></i></Link>
//                         <Link to="#"><i className="fab fa-instagram"></i></Link>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Navbar



// import { Link, useLocation } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import logox from '../../assets/images/44.png'
// import logoz from '../../assets/images/44.png'
// import logoL from '../../assets/images/45.png'
// import { useLang } from '../ImpFolder/LangContext'
// import { FaUniversalAccess } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowForward } from "react-icons/io";

// // ─── Reusable mobile accordion components ────────────────────────────────────

// const AccordionItem = ({ label, open, onToggle, children, depth = 0 }) => (
//     <li className={`border-b ${depth === 0 ? 'border-white/10' : 'border-white/5'}`}>
//         <button
//             onClick={onToggle}
//             className={`flex items-center justify-between w-full text-left transition-colors duration-150
//                 ${depth === 0
//                     ? 'px-5 py-[14px] text-[15px] font-semibold text-white hover:text-yellow-400'
//                     : 'px-4 py-[11px] text-[13.5px] font-medium text-white/80 bg-black/10 hover:text-yellow-300'
//                 }`}
//         >
//             <span>{label}</span>
//             <span className="text-xl font-light leading-none flex-shrink-0 ml-2">
//                 {open ? '−' : '+'}
//             </span>
//         </button>
//         {open && (
//             <ul className={`list-none m-0 p-0 ${depth === 0 ? 'bg-black/20' : 'bg-black/10'}`}>
//                 {children}
//             </ul>
//         )}
//     </li>
// )

// const SubLink = ({ to, label, depth = 1, onClose }) => (
//     <li className="border-t border-white/5">
//         <Link
//             to={to}
//             onClick={onClose}
//             className={`block text-white/75 hover:text-white hover:bg-white/5 transition-all duration-150
//                 ${depth === 1 ? 'px-8 py-[11px] text-[14px]' : 'px-10 py-[10px] text-[13px]'}`}
//         >
//             {label}
//         </Link>
//     </li>
// )

// const TopLink = ({ to, label, onClose }) => (
//     <li className="border-b border-white/10">
//         <Link
//             to={to}
//             onClick={onClose}
//             className="block px-5 py-[14px] text-[15px] font-semibold text-white hover:text-yellow-400 transition-colors duration-150"
//         >
//             {label}
//         </Link>
//     </li>
// )

// // ─── Main Navbar ──────────────────────────────────────────────────────────────

// const Navbar = () => {
//     const [langOpen, setLangOpen] = useState(false)
//     const [mobile, setmobile] = useState(false)
//     const [search, setsearch] = useState(false)
//     const { lang, setLang } = useLang()
//     // Mobile accordion states
//     const [mobileDeposits, setMobileDeposits] = useState(false)
//     const [mobileLoans, setMobileLoans] = useState(false)
//     const [mobileCommercial, setMobileCommercial] = useState(false)
//     const [mobileVehicle, setMobileVehicle] = useState(false)
//     const [mobilePersonal, setMobilePersonal] = useState(false)
//     const [mobileEducation, setMobileEducation] = useState(false)
//     const [mobileHousing, setMobileHousing] = useState(false)
//     const [mobileSecured, setMobileSecured] = useState(false)
//     const [mobileAbout, setMobileAbout] = useState(false)
//     const [mobileInsurance, setMobileInsurance] = useState(false)
//     //const [mobileInterest, setMobileInterest] = useState(false)
//     const [mobileDigitalBanking, setmobileDigitalBanking] = useState(false)
//     const location = useLocation()
//     const path = location.pathname
//     const [menu, setmenu] = useState({})
//     const [sticky, setSticky] = useState(false)

//     const closeMobile = () => setmobile(false)

//     const activeMenu = () => {
//         if (["/", "/home-02", "/home-03", "/home-04"].includes(path)) {
//             setmenu({ home: true })
//         } else if (["/Saving-Account", "/Current-Account", "/Recurring-Deposits", "/Fixed-Deposits"].includes(path)) {
//             setmenu({ deposits: true })
//         } else if (["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Testimonials", "/Annual-Reports"].includes(path)) {
//             setmenu({ aboutus: true })
//         } else if (["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].includes(path)) {
//             setmenu({ insurance: true })
//         } else if (["/loan-interest-rate", "/deposit-interest-rate"].includes(path)) {
//             setmenu({ interestrate: true })
//         } else if (path === "/Contact-Us") {
//             setmenu({ contact: true })
//         } else if (["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].includes(path)) {
//             setmenu({ DigitalBanking: true })
//         } else {
//             setmenu({ home: true })
//         }
//     }

//     useEffect(() => {
//         const isSticky = () => setSticky(window.scrollY >= 141)
//         window.addEventListener("scroll", isSticky)
//         return () => window.removeEventListener("scroll", isSticky)
//     }, [])

//     useEffect(() => {
//         window.scroll(0, 0)
//         activeMenu()
//     }, [path])

//     return (
//         <>
//             <div className="page-wrapper">

//                 {/* ════════════════════════════════════════
//                     DESKTOP TOPBAR  (hidden below lg)
//                 ════════════════════════════════════════ */}
//                 <div className="topbar topbar44 hidden lg:block">
//                     <div className="container-fluid">
//                         <div className="topbar__info topbar__info3">
//                             <Link to="/Branch-Locator"><i className="icon-pin"></i>Branch Locator</Link>

//                             <a href="#main-content">
//                                 <i className="fa fa-forward menu-icon"></i>
//                                 Skip To Main Content
//                             </a>

//                             {/* Desktop language dropdown */}
//                             {/* <div className="relative">
//                                 <button
//                                     className="lang-btn flex items-center gap-1"
//                                     onClick={() => setLangOpen(!langOpen)}
//                                 >
//                                     English
//                                     <IoIosArrowForward className={`transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`} />
//                                 </button>
//                                 {langOpen && (
//                                     <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden z-50 min-w-[110px] list-none p-0 m-0">
//                                         <li><button type="button" className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-sm text-gray-700" onClick={() => setLangOpen(false)}>English</button></li>
//                                         <li><button type="button" className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-sm text-gray-700" onClick={() => setLangOpen(false)}>मराठी</button></li>
//                                     </ul>
//                                 )}
//                             </div> */}
//                             <div className="lang-dropdown relative">
//                                 {/* <button
//                                     className="lang-btn flex items-center gap-1"
//                                     onClick={() => setLangOpen(!langOpen)}
//                                 >
//                                     English
//                                     <IoIosArrowForward
//                                         className={`lang-icon transition ${langOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </button> */}
//                                 <button className="lang-btn flex items-center gap-1 cursor-pointer" onClick={() => setLangOpen(!langOpen)} type="button">
//                                     {lang === 'mr' ? 'मराठी' : 'English'}
//                                     <IoIosArrowForward className={`lang-icon transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`} />
//                                 </button>

//                                 {langOpen && (
//                                     <ul className="lang-menu absolute  bg-white shadow-md rounded-md overflow-hidden z-50">
//                                         {/* <li>
//                                             <button
//                                                 type="button"
//                                                 className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
//                                                 onClick={() => setLangOpen(false)}
//                                             >
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button
//                                                 type="button"
//                                                 className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
//                                                 onClick={() => setLangOpen(false)}
//                                             >
//                                                 मराठी
//                                             </button>
//                                         </li> */}
//                                         <li>
//                                             <button type="button"
//                                                 className={`block px-4 py-2 hover:bg-gray-100 w-full text-left ${lang === 'en' ? 'font-bold text-[#f47012]' : ''}`}
//                                                 onClick={() => { setLang('en'); setLangOpen(false) }}
//                                             >
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button type="button"
//                                                 className={`block px-4 py-2 hover:bg-gray-100 w-full text-left ${lang === 'mr' ? 'font-bold text-[#f47012]' : ''}`}
//                                                 onClick={() => { setLang('mr'); setLangOpen(false) }}
//                                             >
//                                                 मराठी
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="topbar__links Links3">
//                             <Link to="/#" className="main-menu__accessibility" aria-label="Accessibility options" title="Accessibility">
//                                 <FaUniversalAccess aria-hidden="true" />
//                             </Link>
//                             <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler search33">
//                                 <CiSearch />
//                             </Link>
//                             <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx" className="thm-btn main-menu__btn3">Login</Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ════════════════════════════════════════
//                     MOBILE TOPBAR  (visible below lg)
//                 ════════════════════════════════════════ */}
//                 <div className="lg:hidden bg-[#f47012] px-4">
//                     <div className="flex items-center justify-between h-[60px]">

//                         {/* Logo */}
//                         <Link to="/">
//                             <img src={logox} alt="Janaseva Sahakari Bank" className="h-[42px] w-auto block" />
//                         </Link>

//                         {/* Right: Branch + Language + Hamburger */}
//                         <div className="flex items-center gap-3">

//                             {/* Branch Locator */}
//                             {/* <Link
//                                 to="/#"
//                                 className="flex items-center gap-1 text-white text-[13px] no-underline whitespace-nowrap hover:text-yellow-300 transition-colors duration-150"
//                             >
//                                 <i className="icon-pin text-[14px]"></i>
//                                 <span>Branch</span>
//                             </Link> */}

//                             {/* Language switcher */}
//                             <div className="relative">
//                                 <button
//                                     onClick={() => setLangOpen(!langOpen)}
//                                     className="flex items-center gap-1 bg-white/15 border border-white/30 rounded px-2 py-[5px] text-white text-[12px] cursor-pointer whitespace-nowrap hover:bg-white/25 transition-colors duration-150 "
//                                 >
//                                     EN
//                                     <IoIosArrowForward className={`transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`} />
//                                 </button>
//                                 {langOpen && (
//                                     <ul className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-xl list-none m-0 p-1 min-w-[100px] z-[9999]">
//                                         <li>
//                                             <button onClick={() => setLangOpen(false)} className="block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded cursor-pointer border-none bg-transparent">
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button onClick={() => setLangOpen(false)} className="block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded cursor-pointer border-none bg-transparent">
//                                                 मराठी
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>

//                             {/* Hamburger */}
//                             <button
//                                 onClick={() => setmobile(true)}
//                                 aria-label="Open navigation menu"
//                                 className="bg-transparent border-none text-white text-[22px] cursor-pointer p-1 leading-none hover:text-yellow-300 transition-colors duration-150"
//                             >
//                                 <i className="fa fa-bars"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ════════════════════════════════════════
//                     DESKTOP NAV  (hidden below lg)
//                 ════════════════════════════════════════ */}
//                 <nav className={`main-menu hidden lg:block ${sticky ? "stricky-header stricked-menu stricky-fixed" : ""}`}>
//                     <div className="container-fluid nav44">
//                         <div className="main-menu__logo logo3 logo44">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1 head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 43 40 Z" />
//                             </svg>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2 head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 42 40 Z" />
//                             </svg>
//                             <div className="main-menu__logo__img">
//                                 <Link to="/">
//                                     <img
//                                         src={sticky ? logoz : logox}
//                                         className={`logo33 main-menu__logo3 ${sticky ? "logo-small" : "logo-large"}`}
//                                         alt="Janaseva-Sahakari-Bank-Ltd., Hadapsar-Pune"
//                                     />
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="main-menu__nav nav3">
//                             <ul className="main-menu__list navcolor44">
//                                 <li className={`dropdown ${menu.home ? "current" : ""}`}>
//                                     <Link to="/">Home</Link>
//                                     <ul>
//                                         <li><Link to="/">Home One</Link></li>
//                                         <li><Link to="/home-02">Home Two</Link></li>
//                                         <li><Link to="/home-03">Home Three</Link></li>
//                                         <li><Link to="/home-04">Home Four</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.deposits ? "current" : ""}`}>
//                                     <Link to="/">Deposits</Link>
//                                     <ul>
//                                         <li><Link to="/">Saving Account</Link></li>
//                                         <li><Link to="/">Current Account</Link></li>
//                                         <li><Link to="/">Recurring Deposits</Link></li>
//                                         <li><Link to="/Fixed-Deposits">Fixed Deposits</Link></li>
//                                         <li><Link to="/">Deposit Interest Rate</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.Loans ? "current" : ""}`}>
//                                     <Link to="/">Loans</Link>
//                                     <ul>
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">Commercial Loans <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li className="dropdown">
//                                                     <Link to="/" className="flex items-center justify-between w-full">Vehicle Loans <IoIosArrowForward /></Link>
//                                                     <ul className="submenu">
//                                                         <li><Link to="/3-wheeler-loan">3 Wheeler Loan</Link></li>
//                                                         <li><Link to="/New-commercial-vehicle">New Commercial Vehicle</Link></li>
//                                                     </ul>
//                                                 </li>
//                                                 <li className="dropdown">
//                                                     <Link to="/" className="flex items-center justify-between w-full">Business Loans <IoIosArrowForward /></Link>
//                                                     <ul className="submenu">
//                                                         <li><Link to="/ProSelf-Loan">ProSelf Loan</Link></li>
//                                                         <li><Link to="/trade-pack-loan">Trade Pack Loan</Link></li>
//                                                         <li><Link to="/Machinery-Loan">Machinery Loan</Link></li>
//                                                         <li><Link to="/Cash-Credit-Secured-General">Cash Credit Loan</Link></li>
//                                                     </ul>
//                                                 </li>
//                                                 <li className="dropdown">
//                                                     <Link to="/" className="flex items-center justify-between w-full">Property Loans <IoIosArrowForward /></Link>
//                                                     <ul className="submenu">
//                                                         <li><Link to="/Property-Loan-Builder-Finance">Property Loan</Link></li>
//                                                         <li><Link to="/Rent-Discounting">Rent Discounting</Link></li>
//                                                         <li><Link to="/Janaseva-Saral-Overdraft-Loan-Scheme">Saral Overdraft Loan</Link></li>
//                                                     </ul>
//                                                 </li>
//                                                 <li><Link to="/Hospital-Educational-Institute-Loan">Hospital/Educational Loan</Link></li>
//                                                 <li><Link to="/Janaseva-Start-Up-(MSME)Finance">Start Up (MSME) Finance</Link></li>
//                                                 <li><Link to="/Janaseva-Solar-Scheme">Janaseva Solar Scheme</Link></li>
//                                                 <li><Link to="/Janaseva-Saral-Karj-Yojana">Saral Karj Yojana</Link></li>
//                                                 <li><Link to="/udyog-vastu-loan">Udyog Vastu Yojana</Link></li>
//                                                 <li><Link to="/hypothecation-loan">Hypothecation Loan</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">Vehicle Loans <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Two-Wheeler-Loan">Two Wheeler Loan</Link></li>
//                                                 <li><Link to="/New-four-Wheeler-Loan">New Four Wheeler Loan</Link></li>
//                                                 <li><Link to="/Resale-4-Wheeler">Resale Four Wheeler Loan</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">Personal Loans <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Personal-Loan-Scheme">Personal Loan Scheme</Link></li>
//                                                 <li><Link to="/Group-Loan">Group Loan</Link></li>
//                                                 <li><Link to="/Consumer-Loan">Consumer Loan</Link></li>
//                                                 <li><Link to="/Consumer-Durable">Consumer Durable Loan</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">Education Loans <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Janaseva-Educational-Secured-Loan">Janaseva Educational Loan</Link></li>
//                                                 <li><Link to="/Education-loan-for-Coaching">Education Loan for Coaching</Link></li>
//                                                 <li><Link to="/Unsecured-Education-Loan">Unsecured Education Loan</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">Housing Loans <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Janaseva-Gharkul-Loan-Scheme">Janaseva Gharkul Scheme</Link></li>
//                                                 <li><Link to="/Janaseva-Gharkul-Top-Up">Janaseva Gharkul Top Up</Link></li>
//                                                 <li><Link to="/Housing-Loan-under-CRE">Housing Loan under CRE</Link></li>
//                                                 <li><Link to="/Janaseva-Home-Decore">Janaseva Home Decor</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">Secured Loans <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/gold-loan">Gold Loan</Link></li>
//                                                 <li><Link to="/Loan-Against-FD-FDTL">Loan Against FD</Link></li>
//                                                 <li><Link to="/Cash-Credit-Against-FD-FDCC">Cash Credit Against FD</Link></li>
//                                                 <li><Link to="/Loan-Against-Life-Insurance-Policies">Loan Against Life Insurance</Link></li>
//                                                 <li><Link to="/Government-Secured-Loan">Government Secured Loan</Link></li>
//                                                 <li><Link to="/Janvikas-Loan-Scheme">Janvikas Loan Scheme</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li><Link to="/">Loan Interest Rate</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.aboutus ? "current" : ""}`}>
//                                     <Link to="#">About Us</Link>
//                                     <ul>
//                                         <li><Link to="/Our-history">Profile</Link></li>
//                                         <li><Link to="/Board-of-directors">Board Of Directors</Link></li>
//                                         <li><Link to="/Board-of-management">Board Of Management</Link></li>
//                                         <li><Link to="/Events">Events</Link></li>
//                                         {/* <li>
//   <a 
//     href="assets/pdf/Downloads/IT-Application_202504111231092683.pdf" 
//     target="_blank" 
//     rel="noopener noreferrer"
//   >
//     Careers
//   </a>
// </li> */}
//                                         <li><Link to="/Annual-Reports">Annual Reports</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.insurance ? "current" : ""}`}>
//                                     <Link to="#">Insurance</Link>
//                                     <ul>
//                                         <li><Link to="/General-Insurance">General Insurance</Link></li>
//                                         <li><Link to="/Health-Insurance">Health Insurance</Link></li>
//                                         <li><Link to="/Life-Insurance">Life Insurance</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className={`dropdown ${menu.DigitalBanking ? "current" : ""}`}>
//                                     <Link to="#">Digital Banking</Link>
//                                     <ul>
//                                         <li><Link to="/SMS-Banking">SMS Banking</Link></li>
//                                         <li><Link to="/ATM-Service">ATM Service</Link></li>
//                                         <li><Link to="/Mobile-Banking">Mobile Banking</Link></li>
//                                         <li><Link to="/Internet-banking">Internet banking</Link></li>
//                                         <li><Link to="/IMPS-NEFT-RTGS">IMPS / NEFT / RTGS</Link></li>
//                                     </ul>
//                                 </li>
//                                 {/* <li className={`download ${menu.digitalbanking ? "current" : ""}`}><Link to="/Downloads">Digital Banking</Link></li> */}
//                                 {/* <li className={`dropdown ${menu.interestrate ? "current" : ""}`}>
//                                     <Link to="/">Interest Rate</Link>
//                                     <ul>
                                        
                                         
//                                     </ul>
//                                 </li> */}
//                                 <li className={`contact ${menu.contact ? "current" : ""}`}><Link to="/Contact-Us">Contact</Link></li>
//                             </ul>
//                         </div>

//                         <div className="main-menu__right">
//                             <Link to="#" onClick={() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
//                                 <i className="fa fa-bars"></i>
//                             </Link>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             {/* ════════════════════════════════════════
//                 SEARCH POPUP
//             ════════════════════════════════════════ */}
//             <div className={`search-popup ${search ? "active" : ""}`}>
//                 <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
//                 <div className="search-popup__content">
//                     <form action="#">
//                         <label htmlFor="search" className="sr-only">search here</label>
//                         <input type="text" id="search" placeholder="Search Here..." />
//                         <button type="submit" aria-label="search submit" className="thm-btn">
//                             <i className="icon-magnifying-glass"></i>
//                         </button>
//                     </form>
//                 </div>
//             </div>

//             {/* ════════════════════════════════════════
//                 MOBILE DRAWER BACKDROP
//             ════════════════════════════════════════ */}
//             {mobile && (
//                 <div
//                     className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
//                     onClick={closeMobile}
//                 />
//             )}

//             {/* ════════════════════════════════════════
//                 MOBILE DRAWER
//             ════════════════════════════════════════ */}
//             <div
//                 className={`fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-[#1e3163] z-[999]
//                     overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden
//                     ${mobile ? "translate-x-0" : "-translate-x-full"}`}
//             >
//                 {/* Drawer header */}
//                 <div className="flex items-center justify-between px-2 py-4 border-b border-white/15">
//                     <Link to="/" onClick={closeMobile}>
//                         <img src={logoL} alt="Janaseva Bank" className="w-60 h-auto" />
//                     </Link>
//                     <button
//                         onClick={closeMobile}
//                         aria-label="Close menu"
//                         className="text-white text-sm bg-white/10 hover:bg-white/25 rounded-full w-8 h-8
//                             flex items-center justify-center transition-colors duration-150 border-none cursor-pointer"
//                     >
//                         <i className="fa fa-times"></i>
//                     </button>
//                 </div>

//                 {/* ── Accordion menu list ── */}
//                 <ul className="list-none m-0 p-0">

//                     <TopLink to="/" label="Home" onClose={closeMobile} />

//                     {/* Deposits */}
//                     <AccordionItem label="Deposits" open={mobileDeposits} onToggle={() => setMobileDeposits(!mobileDeposits)}>
//                         <SubLink to="/" label="Saving Account" onClose={closeMobile} />
//                         <SubLink to="/" label="Current Account" onClose={closeMobile} />
//                         <SubLink to="/" label="Recurring Deposits" onClose={closeMobile} />
//                         <SubLink to="/Fixed-Deposits" label="Fixed Deposits" onClose={closeMobile} />
//                         <SubLink to="/" label="Deposit Interest Rate" onClose={closeMobile} />
//                     </AccordionItem>

//                     {/* Loans (with nested sub-accordions) */}
//                     <AccordionItem label="Loans" open={mobileLoans} onToggle={() => setMobileLoans(!mobileLoans)}>

//                         <li className="border-t border-white/5">
//                             <AccordionItem label="Commercial Loans" open={mobileCommercial} onToggle={() => setMobileCommercial(!mobileCommercial)} depth={1}>
//                                 <SubLink to="/3-wheeler-loan" label="3 Wheeler Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/New-commercial-vehicle" label="New Commercial Vehicle" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/ProSelf-Loan" label="ProSelf Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/trade-pack-loan" label="Trade Pack Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Machinery-Loan" label="Machinery Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Cash-Credit-Secured-General" label="Cash Credit Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Property-Loan-Builder-Finance" label="Property Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Rent-Discounting" label="Rent Discounting" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Saral-Overdraft-Loan-Scheme" label="Saral Overdraft Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Hospital-Educational-Institute-Loan" label="Hospital/Educational Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Start-Up-(MSME)Finance" label="Start Up (MSME) Finance" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Solar-Scheme" label="Janaseva Solar Scheme" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Saral-Karj-Yojana" label="Saral Karj Yojana" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/udyog-vastu-loan" label="Udyog Vastu Yojana" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/hypothecation-loan" label="Hypothecation Loan" onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>

//                         <li className="border-t border-white/5">
//                             <AccordionItem label="Vehicle Loans" open={mobileVehicle} onToggle={() => setMobileVehicle(!mobileVehicle)} depth={1}>
//                                 <SubLink to="/Two-Wheeler-Loan" label="Two Wheeler Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/New-four-Wheeler-Loan" label="New Four Wheeler Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Resale-4-Wheeler" label="Resale Four Wheeler Loan" onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>

//                         <li className="border-t border-white/5">
//                             <AccordionItem label="Personal Loans" open={mobilePersonal} onToggle={() => setMobilePersonal(!mobilePersonal)} depth={1}>
//                                 <SubLink to="/Personal-Loan-Scheme" label="Personal Loan Scheme" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Group-Loan" label="Group Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Consumer-Loan" label="Consumer Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Consumer-Durable" label="Consumer Durable Loan" onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>

//                         <li className="border-t border-white/5">
//                             <AccordionItem label="Education Loans" open={mobileEducation} onToggle={() => setMobileEducation(!mobileEducation)} depth={1}>
//                                 <SubLink to="/Janaseva-Educational-Secured-Loan" label="Janaseva Educational Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Education-loan-for-Coaching" label="Education Loan for Coaching" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Unsecured-Education-Loan" label="Unsecured Education Loan" onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>

//                         <li className="border-t border-white/5">
//                             <AccordionItem label="Housing Loans" open={mobileHousing} onToggle={() => setMobileHousing(!mobileHousing)} depth={1}>
//                                 <SubLink to="/Janaseva-Gharkul-Loan-Scheme" label="Janaseva Gharkul Scheme" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Gharkul-Top-Up" label="Janaseva Gharkul Top Up" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Housing-Loan-under-CRE" label="Housing Loan under CRE" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Home-Decore" label="Janaseva Home Decor" onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>

//                         <li className="border-t border-white/5">
//                             <AccordionItem label="Secured Loans" open={mobileSecured} onToggle={() => setMobileSecured(!mobileSecured)} depth={1}>
//                                 <SubLink to="/gold-loan" label="Gold Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Loan-Against-FD-FDTL" label="Loan Against FD" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Cash-Credit-Against-FD-FDCC" label="Cash Credit Against FD" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Loan-Against-Life-Insurance-Policies" label="Loan Against Life Insurance" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Government-Secured-Loan" label="Government Secured Loan" onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janvikas-Loan-Scheme" label="Janvikas Loan Scheme" onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <SubLink to="/" label="Loan Interest Rate" onClose={closeMobile} />
//                     </AccordionItem>

//                     {/* About Us */}
//                     <AccordionItem label="About Us" open={mobileAbout} onToggle={() => setMobileAbout(!mobileAbout)}>
//                         <SubLink to="/Our-history" label="Profile" onClose={closeMobile} />
//                         <SubLink to="/Board-of-directors" label="Board Of Directors" onClose={closeMobile} />
//                         <SubLink to="/Board-of-management" label="Board Of Management" onClose={closeMobile} />
//                         <SubLink to="/Events" label="Events" onClose={closeMobile} />
//                         {/* <SubLink 
//   href="assets/pdf/Downloads/IT-Application_202504111231092683.pdf" 
//   label="Careers" 
//   onClose={closeMobile} 
// /> */}

//                         <SubLink to="/Annual-Reports" label="Annual Reports" onClose={closeMobile} />
//                     </AccordionItem>

//                     {/* Insurance */}
//                     <AccordionItem label="Insurance" open={mobileInsurance} onToggle={() => setMobileInsurance(!mobileInsurance)}>
//                         <SubLink to="/General-Insurance" label="General Insurance" onClose={closeMobile} />
//                         <SubLink to="/Health-Insurance" label="Health Insurance" onClose={closeMobile} />
//                         <SubLink to="/Life-Insurance" label="Life Insurance" onClose={closeMobile} />
//                     </AccordionItem>


//                     <AccordionItem label="Digital Banking" open={mobileDigitalBanking} onToggle={() => setmobileDigitalBanking(!mobileDigitalBanking)}>
//                         <SubLink to="/SMS-Banking" label="SMS Banking" onClose={closeMobile} />
//                         <SubLink to="/ATM-Service" label="ATM Service" onClose={closeMobile} />
//                         <SubLink to="/Mobile-Banking" label="Mobile Banking" onClose={closeMobile} />
//                         <SubLink to="/Internet-banking" label="Internet banking" onClose={closeMobile} />
//                         <SubLink to="/IMPS-NEFT-RTGS" label="IMPS / NEFT / RTGS" onClose={closeMobile} />
//                     </AccordionItem>
//                     {/* <TopLink to="/digital-banking" label="" onClose={closeMobile} /> */}

//                     {/* Interest Rate */}
//                     {/* <AccordionItem label="Interest Rate" open={mobileInterest} onToggle={() => setMobileInterest(!mobileInterest)}>


//                     </AccordionItem> */}

//                     <TopLink to="/Contact-Us" label="Contact" onClose={closeMobile} />

//                 </ul>

//                 {/* Login CTA */}
//                 <div className="px-5 py-4 border-t border-white/15 mt-2">
//                     <Link
//                         to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx"
//                         className="block text-center bg-yellow-400 hover:bg-yellow-300 text-[#1e3163] font-bold
//                             py-3 px-4 rounded-md text-[15px] transition-colors duration-200 no-underline"
//                     >
//                         Login to Net Banking
//                     </Link>
//                 </div>

//                 {/* Contact info */}
//                 <ul className="list-none px-5 py-4 border-t border-white/15 m-0 space-y-2">
//                     <li className="flex items-center gap-2">
//                         <i className="icon-email text-white/60"></i>
//                         <Link to="mailto:needhelp@finlon.com" className="text-white/70 hover:text-white text-sm transition-colors duration-150">needhelp@finlon.com</Link>
//                     </li>
//                     <li className="flex items-center gap-2">
//                         <i className="icon-telephone text-white/60"></i>
//                         <Link to="tel:666-888-0000" className="text-white/70 hover:text-white text-sm transition-colors duration-150">666 888 0000</Link>
//                     </li>
//                 </ul>

//                 {/* Social */}
//                 <div className="flex items-center gap-3 px-5 pb-8">
//                     {[
//                         { icon: "fab fa-twitter", href: "#" },
//                         { icon: "fab fa-facebook", href: "#" },
//                         { icon: "fab fa-pinterest", href: "#" },
//                         { icon: "fab fa-instagram", href: "#" },
//                     ].map(({ icon, href }) => (
//                         <Link key={icon} to={href}
//                             className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center
//                                 text-white transition-colors duration-150"
//                         >
//                             <i className={`${icon} text-sm`}></i>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar









// import { Link, useLocation } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import logox from '../../assets/images/44.png'
// import logoz from '../../assets/images/44.png'
// import logoL from '../../assets/images/45.png'
// import { useLang } from '../ImpFolder/LangContext'
// import { FaUniversalAccess } from "react-icons/fa6"
// import { CiSearch } from "react-icons/ci"
// import { IoIosArrowForward } from "react-icons/io"

// // ─── Translations ─────────────────────────────────────────────────────────────
// const navTranslations = {
//     en: {
//         branchLocator: "Branch Locator",
//         skipContent: "Skip To Main Content",
//         login: "Login",
//         loginNetBanking: "Login to Net Banking",
//         home: "Home", homeItems: ["Home One", "Home Two", "Home Three", "Home Four"],
//         deposits: "Deposits", depositItems: ["Saving Account", "Current Account", "Recurring Deposits", "Fixed Deposits", "Deposit Interest Rate"],
//         loans: "Loans",
//         commercialLoans: "Commercial Loans",
//         vehicleLoansC: "Vehicle Loans",
//         businessLoans: "Business Loans",
//         propertyLoans: "Property Loans",
//         vehicleLoans: "Vehicle Loans",
//         personalLoans: "Personal Loans",
//         educationLoans: "Education Loans",
//         housingLoans: "Housing Loans",
//         securedLoans: "Secured Loans",
//         loanInterestRate: "Loan Interest Rate",
//         aboutUs: "About Us", aboutItems: ["Profile", "Board Of Directors", "Board Of Management", "Events", "Annual Reports"],
//         insurance: "Insurance", insuranceItems: ["General Insurance", "Health Insurance", "Life Insurance"],
//         digitalBanking: "Digital Banking", digitalItems: ["SMS Banking", "ATM Service", "Mobile Banking", "Internet banking", "IMPS / NEFT / RTGS"],
//         contact: "Contact",
//         contactEmail: "needhelp@finlon.com",
//         contactPhone: "666 888 0000",
//     },
//     mr: {
//         branchLocator: "शाखा शोधक",
//         skipContent: "मुख्य सामग्रीवर जा",
//         login: "लॉगिन",
//         loginNetBanking: "नेट बँकिंगमध्ये लॉगिन करा",
//         home: "मुखपृष्ठ", homeItems: ["मुखपृष्ठ एक", "मुखपृष्ठ दोन", "मुखपृष्ठ तीन", "मुखपृष्ठ चार"],
//         deposits: "ठेवी", depositItems: ["बचत खाते", "चालू खाते", "आवर्ती ठेव", "मुदत ठेव", "ठेव व्याज दर"],
//         loans: "कर्जे",
//         commercialLoans: "व्यावसायिक कर्जे",
//         vehicleLoansC: "वाहन कर्जे",
//         businessLoans: "व्यवसाय कर्जे",
//         propertyLoans: "मालमत्ता कर्जे",
//         vehicleLoans: "वाहन कर्जे",
//         personalLoans: "वैयक्तिक कर्जे",
//         educationLoans: "शिक्षण कर्जे",
//         housingLoans: "गृह कर्जे",
//         securedLoans: "सुरक्षित कर्जे",
//         loanInterestRate: "कर्ज व्याज दर",
//         aboutUs: "आमच्याबद्दल", aboutItems: ["प्रोफाइल", "संचालक मंडळ", "व्यवस्थापन मंडळ", "कार्यक्रम", "वार्षिक अहवाल"],
//         insurance: "विमा", insuranceItems: ["सामान्य विमा", "आरोग्य विमा", "जीवन विमा"],
//         digitalBanking: "डिजिटल बँकिंग", digitalItems: ["एसएमएस बँकिंग", "एटीएम सेवा", "मोबाइल बँकिंग", "इंटरनेट बँकिंग", "आयएमपीएस / एनईएफटी / आरटीजीएस"],
//         contact: "संपर्क",
//         contactEmail: "needhelp@finlon.com",
//         contactPhone: "666 888 0000",
//     },
// }

// // ─── Reusable mobile accordion components ────────────────────────────────────
// const AccordionItem = ({ label, open, onToggle, children, depth = 0 }) => (
//     <li className={`border-b ${depth === 0 ? 'border-white/10' : 'border-white/5'}`}>
//         <button
//             onClick={onToggle}
//             className={`flex items-center justify-between w-full text-left transition-colors duration-150
//                 ${depth === 0
//                     ? 'px-5 py-[14px] text-[15px] font-semibold text-white hover:text-yellow-400'
//                     : 'px-4 py-[11px] text-[13.5px] font-medium text-white/80 bg-black/10 hover:text-yellow-300'
//                 }`}
//         >
//             <span>{label}</span>
//             <span className="text-xl font-light leading-none flex-shrink-0 ml-2">
//                 {open ? '−' : '+'}
//             </span>
//         </button>
//         {open && (
//             <ul className={`list-none m-0 p-0 ${depth === 0 ? 'bg-black/20' : 'bg-black/10'}`}>
//                 {children}
//             </ul>
//         )}
//     </li>
// )

// const SubLink = ({ to, label, depth = 1, onClose }) => (
//     <li className="border-t border-white/5">
//         <Link
//             to={to}
//             onClick={onClose}
//             className={`block text-white/75 hover:text-white hover:bg-white/5 transition-all duration-150
//                 ${depth === 1 ? 'px-8 py-[11px] text-[14px]' : 'px-10 py-[10px] text-[13px]'}`}
//         >
//             {label}
//         </Link>
//     </li>
// )

// const TopLink = ({ to, label, onClose }) => (
//     <li className="border-b border-white/10">
//         <Link
//             to={to}
//             onClick={onClose}
//             className="block px-5 py-[14px] text-[15px] font-semibold text-white hover:text-yellow-400 transition-colors duration-150"
//         >
//             {label}
//         </Link>
//     </li>
// )

// // ─── Main Navbar ──────────────────────────────────────────────────────────────
// const Navbar = () => {
//     const [langOpen, setLangOpen] = useState(false)
//     const [mobile, setmobile] = useState(false)
//     const [search, setsearch] = useState(false)
//     const { lang, setLang } = useLang()
//     const tr = navTranslations[lang]

//     const [mobileDeposits, setMobileDeposits] = useState(false)
//     const [mobileLoans, setMobileLoans] = useState(false)
//     const [mobileCommercial, setMobileCommercial] = useState(false)
//     const [mobileVehicle, setMobileVehicle] = useState(false)
//     const [mobilePersonal, setMobilePersonal] = useState(false)
//     const [mobileEducation, setMobileEducation] = useState(false)
//     const [mobileHousing, setMobileHousing] = useState(false)
//     const [mobileSecured, setMobileSecured] = useState(false)
//     const [mobileAbout, setMobileAbout] = useState(false)
//     const [mobileInsurance, setMobileInsurance] = useState(false)
//     const [mobileDigitalBanking, setmobileDigitalBanking] = useState(false)

//     const location = useLocation()
//     const path = location.pathname
//     const [menu, setmenu] = useState({})
//     const [sticky, setSticky] = useState(false)

//     const closeMobile = () => setmobile(false)

//     const activeMenu = () => {
//         if (["/", "/home-02", "/home-03", "/home-04"].includes(path)) setmenu({ home: true })
//         else if (["/Saving-Account", "/Current-Account", "/Recurring-Deposits", "/Fixed-Deposits"].includes(path)) setmenu({ deposits: true })
//         else if (["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Testimonials", "/Annual-Reports"].includes(path)) setmenu({ aboutus: true })
//         else if (["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].includes(path)) setmenu({ insurance: true })
//         else if (["/loan-interest-rate", "/deposit-interest-rate"].includes(path)) setmenu({ interestrate: true })
//         else if (path === "/Contact-Us") setmenu({ contact: true })
//         else if (["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].includes(path)) setmenu({ DigitalBanking: true })
//         else setmenu({ home: true })
//     }

//     useEffect(() => {
//         const isSticky = () => setSticky(window.scrollY >= 141)
//         window.addEventListener("scroll", isSticky)
//         return () => window.removeEventListener("scroll", isSticky)
//     }, [])

//     useEffect(() => {
//         window.scroll(0, 0)
//         activeMenu()
//     }, [path])

//     return (
//         <>
//             <div className="page-wrapper">

//                 {/* ════════ DESKTOP TOPBAR ════════ */}
//                 <div className="topbar topbar44 hidden lg:block">
//                     <div className="container-fluid">
//                         <div className="topbar__info topbar__info3">

//                             <Link to="/Branch-Locator">
//                                 <i className="icon-pin"></i>{tr.branchLocator}
//                             </Link>

//                             <a href="#main-content">
//                                 <i className="fa fa-forward menu-icon"></i>
//                                 {tr.skipContent}
//                             </a>

//                             {/* Language Dropdown */}
//                             <div className="lang-dropdown relative">
//                                 <button
//                                     className="lang-btn flex items-center gap-1 cursor-pointer"
//                                     onClick={() => setLangOpen(!langOpen)}
//                                     type="button"
//                                 >
//                                     {lang === 'mr' ? 'मराठी' : 'English'}
//                                     <IoIosArrowForward className={`lang-icon transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`} />
//                                 </button>
//                                 {langOpen && (
//                                     <ul className="lang-menu absolute bg-white shadow-md rounded-md overflow-hidden z-50">
//                                         <li>
//                                             <button type="button"
//                                                 className={`block px-4 py-2 hover:bg-gray-100 w-full text-left ${lang === 'en' ? 'font-bold text-[#f47012]' : ''}`}
//                                                 onClick={() => { setLang('en'); setLangOpen(false) }}
//                                             >
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button type="button"
//                                                 className={`block px-4 py-2 hover:bg-gray-100 w-full text-left ${lang === 'mr' ? 'font-bold text-[#f47012]' : ''}`}
//                                                 onClick={() => { setLang('mr'); setLangOpen(false) }}
//                                             >
//                                                 मराठी
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="topbar__links Links3">
//                             <Link to="/#" className="main-menu__accessibility" aria-label="Accessibility options" title="Accessibility">
//                                 <FaUniversalAccess aria-hidden="true" />
//                             </Link>
//                             <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler search33">
//                                 <CiSearch />
//                             </Link>
//                             <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx" className="thm-btn main-menu__btn3">
//                                 {tr.login}
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ════════ MOBILE TOPBAR ════════ */}
//                 <div className="lg:hidden bg-[#f47012] px-4">
//                     <div className="flex items-center justify-between h-[60px]">
//                         <Link to="/">
//                             <img src={logox} alt="Janaseva Sahakari Bank" className="h-[42px] w-auto block" />
//                         </Link>
//                         <div className="flex items-center gap-3">
//                             {/* Mobile Language Switcher */}
//                             <div className="relative">
//                                 <button
//                                     onClick={() => setLangOpen(!langOpen)}
//                                     className="flex items-center gap-1 bg-white/15 border border-white/30 rounded px-2 py-[5px] text-white text-[12px] cursor-pointer whitespace-nowrap hover:bg-white/25 transition-colors duration-150"
//                                 >
//                                     {lang === 'mr' ? 'मरा' : 'EN'}
//                                     <IoIosArrowForward className={`transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`} />
//                                 </button>
//                                 {langOpen && (
//                                     <ul className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-xl list-none m-0 p-1 min-w-[100px] z-[9999]">
//                                         <li>
//                                             <button
//                                                 onClick={() => { setLang('en'); setLangOpen(false) }}
//                                                 className={`block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded cursor-pointer border-none bg-transparent ${lang === 'en' ? 'font-bold text-[#f47012]' : ''}`}
//                                             >
//                                                 English
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button
//                                                 onClick={() => { setLang('mr'); setLangOpen(false) }}
//                                                 className={`block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded cursor-pointer border-none bg-transparent ${lang === 'mr' ? 'font-bold text-[#f47012]' : ''}`}
//                                             >
//                                                 मराठी
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </div>
//                             {/* Hamburger */}
//                             <button
//                                 onClick={() => setmobile(true)}
//                                 aria-label="Open navigation menu"
//                                 className="bg-transparent border-none text-white text-[22px] cursor-pointer p-1 leading-none hover:text-yellow-300 transition-colors duration-150"
//                             >
//                                 <i className="fa fa-bars"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ════════ DESKTOP NAV ════════ */}
//                 <nav className={`main-menu hidden lg:block ${sticky ? "stricky-header stricked-menu stricky-fixed" : ""}`}>
//                     <div className="container-fluid nav44">
//                         <div className="main-menu__logo logo3 logo44">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1 head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 43 40 Z" />
//                             </svg>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2 head33" viewBox="0 0 317 120">
//                                 <path d="M 259.856 120 H 0 V 0 H 274 l 42 40 Z" />
//                             </svg>
//                             <div className="main-menu__logo__img">
//                                 <Link to="/">
//                                     <img
//                                         src={sticky ? logoz : logox}
//                                         className={`logo33 main-menu__logo3 ${sticky ? "logo-small" : "logo-large"}`}
//                                         alt="Janaseva-Sahakari-Bank-Ltd., Hadapsar-Pune"
//                                     />
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="main-menu__nav nav3">
//                             <ul className="main-menu__list navcolor44">

//                                 {/* Home */}
//                                 <li className={`dropdown ${menu.home ? "current" : ""}`}>
//                                     <Link to="/">{tr.home}</Link>
//                                     <ul>
//                                         {["/", "/home-02", "/home-03", "/home-04"].map((path, i) => (
//                                             <li key={i}><Link to={path}>{tr.homeItems[i]}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </li>

//                                 {/* Deposits */}
//                                 <li className={`dropdown ${menu.deposits ? "current" : ""}`}>
//                                     <Link to="/">{tr.deposits}</Link>
//                                     <ul>
//                                         {["/", "/", "/", "/Fixed-Deposits", "/"].map((path, i) => (
//                                             <li key={i}><Link to={path}>{tr.depositItems[i]}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </li>

//                                 {/* Loans */}
//                                 <li className={`dropdown ${menu.Loans ? "current" : ""}`}>
//                                     <Link to="/">{tr.loans}</Link>
//                                     <ul>
//                                         {/* Commercial */}
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">{tr.commercialLoans} <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li className="dropdown">
//                                                     <Link to="/" className="flex items-center justify-between w-full">{tr.vehicleLoansC} <IoIosArrowForward /></Link>
//                                                     <ul className="submenu">
//                                                         <li><Link to="/3-wheeler-loan">3 {lang === 'mr' ? 'चाकी कर्ज' : 'Wheeler Loan'}</Link></li>
//                                                         <li><Link to="/New-commercial-vehicle">{lang === 'mr' ? 'नवीन व्यावसायिक वाहन' : 'New Commercial Vehicle'}</Link></li>
//                                                     </ul>
//                                                 </li>
//                                                 <li className="dropdown">
//                                                     <Link to="/" className="flex items-center justify-between w-full">{tr.businessLoans} <IoIosArrowForward /></Link>
//                                                     <ul className="submenu">
//                                                         <li><Link to="/ProSelf-Loan">{lang === 'mr' ? 'प्रोसेल्फ कर्ज' : 'ProSelf Loan'}</Link></li>
//                                                         <li><Link to="/trade-pack-loan">{lang === 'mr' ? 'ट्रेड पॅक कर्ज' : 'Trade Pack Loan'}</Link></li>
//                                                         <li><Link to="/Machinery-Loan">{lang === 'mr' ? 'यंत्रसामग्री कर्ज' : 'Machinery Loan'}</Link></li>
//                                                         <li><Link to="/Cash-Credit-Secured-General">{lang === 'mr' ? 'कॅश क्रेडिट कर्ज' : 'Cash Credit Loan'}</Link></li>
//                                                     </ul>
//                                                 </li>
//                                                 <li className="dropdown">
//                                                     <Link to="/" className="flex items-center justify-between w-full">{tr.propertyLoans} <IoIosArrowForward /></Link>
//                                                     <ul className="submenu">
//                                                         <li><Link to="/Property-Loan-Builder-Finance">{lang === 'mr' ? 'मालमत्ता कर्ज' : 'Property Loan'}</Link></li>
//                                                         <li><Link to="/Rent-Discounting">{lang === 'mr' ? 'भाडे सवलत' : 'Rent Discounting'}</Link></li>
//                                                         <li><Link to="/Janaseva-Saral-Overdraft-Loan-Scheme">{lang === 'mr' ? 'सरल ओव्हरड्राफ्ट कर्ज' : 'Saral Overdraft Loan'}</Link></li>
//                                                     </ul>
//                                                 </li>
//                                                 <li><Link to="/Hospital-Educational-Institute-Loan">{lang === 'mr' ? 'रुग्णालय/शैक्षणिक कर्ज' : 'Hospital/Educational Loan'}</Link></li>
//                                                 <li><Link to="/Janaseva-Start-Up-(MSME)Finance">{lang === 'mr' ? 'स्टार्ट अप (एमएसएमई)' : 'Start Up (MSME) Finance'}</Link></li>
//                                                 <li><Link to="/Janaseva-Solar-Scheme">{lang === 'mr' ? 'सौर योजना' : 'Janaseva Solar Scheme'}</Link></li>
//                                                 <li><Link to="/Janaseva-Saral-Karj-Yojana">{lang === 'mr' ? 'सरल कर्ज योजना' : 'Saral Karj Yojana'}</Link></li>
//                                                 <li><Link to="/udyog-vastu-loan">{lang === 'mr' ? 'उद्योग वस्तु योजना' : 'Udyog Vastu Yojana'}</Link></li>
//                                                 <li><Link to="/hypothecation-loan">{lang === 'mr' ? 'गहाण कर्ज' : 'Hypothecation Loan'}</Link></li>
//                                             </ul>
//                                         </li>
//                                         {/* Vehicle */}
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">{tr.vehicleLoans} <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Two-Wheeler-Loan">{lang === 'mr' ? 'दुचाकी कर्ज' : 'Two Wheeler Loan'}</Link></li>
//                                                 <li><Link to="/New-four-Wheeler-Loan">{lang === 'mr' ? 'नवीन चारचाकी कर्ज' : 'New Four Wheeler Loan'}</Link></li>
//                                                 <li><Link to="/Resale-4-Wheeler">{lang === 'mr' ? 'पुनर्विक्री चारचाकी कर्ज' : 'Resale Four Wheeler Loan'}</Link></li>
//                                             </ul>
//                                         </li>
//                                         {/* Personal */}
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">{tr.personalLoans} <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Personal-Loan-Scheme">{lang === 'mr' ? 'वैयक्तिक कर्ज योजना' : 'Personal Loan Scheme'}</Link></li>
//                                                 <li><Link to="/Group-Loan">{lang === 'mr' ? 'गट कर्ज' : 'Group Loan'}</Link></li>
//                                                 <li><Link to="/Consumer-Loan">{lang === 'mr' ? 'ग्राहक कर्ज' : 'Consumer Loan'}</Link></li>
//                                                 <li><Link to="/Consumer-Durable">{lang === 'mr' ? 'ग्राहक टिकाऊ कर्ज' : 'Consumer Durable Loan'}</Link></li>
//                                             </ul>
//                                         </li>
//                                         {/* Education */}
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">{tr.educationLoans} <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Janaseva-Educational-Secured-Loan">{lang === 'mr' ? 'जनसेवा शैक्षणिक कर्ज' : 'Janaseva Educational Loan'}</Link></li>
//                                                 <li><Link to="/Education-loan-for-Coaching">{lang === 'mr' ? 'कोचिंगसाठी शिक्षण कर्ज' : 'Education Loan for Coaching'}</Link></li>
//                                                 <li><Link to="/Unsecured-Education-Loan">{lang === 'mr' ? 'असुरक्षित शिक्षण कर्ज' : 'Unsecured Education Loan'}</Link></li>
//                                             </ul>
//                                         </li>
//                                         {/* Housing */}
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">{tr.housingLoans} <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/Janaseva-Gharkul-Loan-Scheme">{lang === 'mr' ? 'जनसेवा घरकुल योजना' : 'Janaseva Gharkul Scheme'}</Link></li>
//                                                 <li><Link to="/Janaseva-Gharkul-Top-Up">{lang === 'mr' ? 'जनसेवा घरकुल टॉप अप' : 'Janaseva Gharkul Top Up'}</Link></li>
//                                                 <li><Link to="/Housing-Loan-under-CRE">{lang === 'mr' ? 'सीआरई अंतर्गत गृह कर्ज' : 'Housing Loan under CRE'}</Link></li>
//                                                 <li><Link to="/Janaseva-Home-Decore">{lang === 'mr' ? 'जनसेवा होम डेकोर' : 'Janaseva Home Decor'}</Link></li>
//                                             </ul>
//                                         </li>
//                                         {/* Secured */}
//                                         <li className="dropdown">
//                                             <Link to="/" className="flex items-center justify-between w-full">{tr.securedLoans} <IoIosArrowForward /></Link>
//                                             <ul className="submenu">
//                                                 <li><Link to="/gold-loan">{lang === 'mr' ? 'सोने कर्ज' : 'Gold Loan'}</Link></li>
//                                                 <li><Link to="/Loan-Against-FD-FDTL">{lang === 'mr' ? 'एफडीवर कर्ज' : 'Loan Against FD'}</Link></li>
//                                                 <li><Link to="/Cash-Credit-Against-FD-FDCC">{lang === 'mr' ? 'एफडीवर कॅश क्रेडिट' : 'Cash Credit Against FD'}</Link></li>
//                                                 <li><Link to="/Loan-Against-Life-Insurance-Policies">{lang === 'mr' ? 'जीवन विम्यावर कर्ज' : 'Loan Against Life Insurance'}</Link></li>
//                                                 <li><Link to="/Government-Secured-Loan">{lang === 'mr' ? 'शासकीय सुरक्षित कर्ज' : 'Government Secured Loan'}</Link></li>
//                                                 <li><Link to="/Janvikas-Loan-Scheme">{lang === 'mr' ? 'जनविकास कर्ज योजना' : 'Janvikas Loan Scheme'}</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li><Link to="/">{tr.loanInterestRate}</Link></li>
//                                     </ul>
//                                 </li>

//                                 {/* About Us */}
//                                 <li className={`dropdown ${menu.aboutus ? "current" : ""}`}>
//                                     <Link to="#">{tr.aboutUs}</Link>
//                                     <ul>
//                                         {["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Annual-Reports"].map((path, i) => (
//                                             <li key={i}><Link to={path}>{tr.aboutItems[i]}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </li>

//                                 {/* Insurance */}
//                                 <li className={`dropdown ${menu.insurance ? "current" : ""}`}>
//                                     <Link to="#">{tr.insurance}</Link>
//                                     <ul>
//                                         {["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].map((path, i) => (
//                                             <li key={i}><Link to={path}>{tr.insuranceItems[i]}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </li>

//                                 {/* Digital Banking */}
//                                 <li className={`dropdown ${menu.DigitalBanking ? "current" : ""}`}>
//                                     <Link to="#">{tr.digitalBanking}</Link>
//                                     <ul>
//                                         {["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].map((path, i) => (
//                                             <li key={i}><Link to={path}>{tr.digitalItems[i]}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </li>

//                                 {/* Contact */}
//                                 <li className={`contact ${menu.contact ? "current" : ""}`}>
//                                     <Link to="/Contact-Us">{tr.contact}</Link>
//                                 </li>

//                             </ul>
//                         </div>

//                         <div className="main-menu__right">
//                             <Link to="#" onClick={() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
//                                 <i className="fa fa-bars"></i>
//                             </Link>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             {/* ════════ SEARCH POPUP ════════ */}
//             <div className={`search-popup ${search ? "active" : ""}`}>
//                 <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
//                 <div className="search-popup__content">
//                     <form action="#">
//                         <label htmlFor="search" className="sr-only">search here</label>
//                         <input type="text" id="search" placeholder={lang === 'mr' ? 'येथे शोधा...' : 'Search Here...'} />
//                         <button type="submit" aria-label="search submit" className="thm-btn">
//                             <i className="icon-magnifying-glass"></i>
//                         </button>
//                     </form>
//                 </div>
//             </div>

//             {/* ════════ MOBILE BACKDROP ════════ */}
//             {mobile && (
//                 <div className="fixed inset-0 bg-black/50 z-[998] lg:hidden" onClick={closeMobile} />
//             )}

//             {/* ════════ MOBILE DRAWER ════════ */}
//             <div className={`fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-[#1e3163] z-[999]
//                 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden
//                 ${mobile ? "translate-x-0" : "-translate-x-full"}`}
//             >
//                 {/* Drawer header */}
//                 <div className="flex items-center justify-between px-2 py-4 border-b border-white/15">
//                     <Link to="/" onClick={closeMobile}>
//                         <img src={logoL} alt="Janaseva Bank" className="w-60 h-auto" />
//                     </Link>
//                     <button onClick={closeMobile} aria-label="Close menu"
//                         className="text-white text-sm bg-white/10 hover:bg-white/25 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-150 border-none cursor-pointer"
//                     >
//                         <i className="fa fa-times"></i>
//                     </button>
//                 </div>

//                 {/* Accordion menu */}
//                 <ul className="list-none m-0 p-0">
//                     <TopLink to="/" label={tr.home} onClose={closeMobile} />

//                     <AccordionItem label={tr.deposits} open={mobileDeposits} onToggle={() => setMobileDeposits(!mobileDeposits)}>
//                         {["/", "/", "/", "/Fixed-Deposits", "/"].map((path, i) => (
//                             <SubLink key={i} to={path} label={tr.depositItems[i]} onClose={closeMobile} />
//                         ))}
//                     </AccordionItem>

//                     <AccordionItem label={tr.loans} open={mobileLoans} onToggle={() => setMobileLoans(!mobileLoans)}>
//                         <li className="border-t border-white/5">
//                             <AccordionItem label={tr.commercialLoans} open={mobileCommercial} onToggle={() => setMobileCommercial(!mobileCommercial)} depth={1}>
//                                 <SubLink to="/3-wheeler-loan" label={lang === 'mr' ? '३ चाकी कर्ज' : '3 Wheeler Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/New-commercial-vehicle" label={lang === 'mr' ? 'नवीन व्यावसायिक वाहन' : 'New Commercial Vehicle'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/ProSelf-Loan" label={lang === 'mr' ? 'प्रोसेल्फ कर्ज' : 'ProSelf Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/trade-pack-loan" label={lang === 'mr' ? 'ट्रेड पॅक कर्ज' : 'Trade Pack Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Machinery-Loan" label={lang === 'mr' ? 'यंत्रसामग्री कर्ज' : 'Machinery Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Cash-Credit-Secured-General" label={lang === 'mr' ? 'कॅश क्रेडिट कर्ज' : 'Cash Credit Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Property-Loan-Builder-Finance" label={lang === 'mr' ? 'मालमत्ता कर्ज' : 'Property Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Rent-Discounting" label={lang === 'mr' ? 'भाडे सवलत' : 'Rent Discounting'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Saral-Overdraft-Loan-Scheme" label={lang === 'mr' ? 'सरल ओव्हरड्राफ्ट कर्ज' : 'Saral Overdraft Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Hospital-Educational-Institute-Loan" label={lang === 'mr' ? 'रुग्णालय/शैक्षणिक कर्ज' : 'Hospital/Educational Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Start-Up-(MSME)Finance" label={lang === 'mr' ? 'स्टार्ट अप (एमएसएमई)' : 'Start Up (MSME) Finance'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Solar-Scheme" label={lang === 'mr' ? 'सौर योजना' : 'Janaseva Solar Scheme'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Saral-Karj-Yojana" label={lang === 'mr' ? 'सरल कर्ज योजना' : 'Saral Karj Yojana'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/udyog-vastu-loan" label={lang === 'mr' ? 'उद्योग वस्तु योजना' : 'Udyog Vastu Yojana'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/hypothecation-loan" label={lang === 'mr' ? 'गहाण कर्ज' : 'Hypothecation Loan'} onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <li className="border-t border-white/5">
//                             <AccordionItem label={tr.vehicleLoans} open={mobileVehicle} onToggle={() => setMobileVehicle(!mobileVehicle)} depth={1}>
//                                 <SubLink to="/Two-Wheeler-Loan" label={lang === 'mr' ? 'दुचाकी कर्ज' : 'Two Wheeler Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/New-four-Wheeler-Loan" label={lang === 'mr' ? 'नवीन चारचाकी कर्ज' : 'New Four Wheeler Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Resale-4-Wheeler" label={lang === 'mr' ? 'पुनर्विक्री चारचाकी' : 'Resale Four Wheeler Loan'} onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <li className="border-t border-white/5">
//                             <AccordionItem label={tr.personalLoans} open={mobilePersonal} onToggle={() => setMobilePersonal(!mobilePersonal)} depth={1}>
//                                 <SubLink to="/Personal-Loan-Scheme" label={lang === 'mr' ? 'वैयक्तिक कर्ज योजना' : 'Personal Loan Scheme'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Group-Loan" label={lang === 'mr' ? 'गट कर्ज' : 'Group Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Consumer-Loan" label={lang === 'mr' ? 'ग्राहक कर्ज' : 'Consumer Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Consumer-Durable" label={lang === 'mr' ? 'ग्राहक टिकाऊ कर्ज' : 'Consumer Durable Loan'} onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <li className="border-t border-white/5">
//                             <AccordionItem label={tr.educationLoans} open={mobileEducation} onToggle={() => setMobileEducation(!mobileEducation)} depth={1}>
//                                 <SubLink to="/Janaseva-Educational-Secured-Loan" label={lang === 'mr' ? 'जनसेवा शैक्षणिक कर्ज' : 'Janaseva Educational Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Education-loan-for-Coaching" label={lang === 'mr' ? 'कोचिंगसाठी शिक्षण कर्ज' : 'Education Loan for Coaching'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Unsecured-Education-Loan" label={lang === 'mr' ? 'असुरक्षित शिक्षण कर्ज' : 'Unsecured Education Loan'} onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <li className="border-t border-white/5">
//                             <AccordionItem label={tr.housingLoans} open={mobileHousing} onToggle={() => setMobileHousing(!mobileHousing)} depth={1}>
//                                 <SubLink to="/Janaseva-Gharkul-Loan-Scheme" label={lang === 'mr' ? 'जनसेवा घरकुल योजना' : 'Janaseva Gharkul Scheme'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Gharkul-Top-Up" label={lang === 'mr' ? 'जनसेवा घरकुल टॉप अप' : 'Janaseva Gharkul Top Up'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Housing-Loan-under-CRE" label={lang === 'mr' ? 'सीआरई अंतर्गत गृह कर्ज' : 'Housing Loan under CRE'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janaseva-Home-Decore" label={lang === 'mr' ? 'जनसेवा होम डेकोर' : 'Janaseva Home Decor'} onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <li className="border-t border-white/5">
//                             <AccordionItem label={tr.securedLoans} open={mobileSecured} onToggle={() => setMobileSecured(!mobileSecured)} depth={1}>
//                                 <SubLink to="/gold-loan" label={lang === 'mr' ? 'सोने कर्ज' : 'Gold Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Loan-Against-FD-FDTL" label={lang === 'mr' ? 'एफडीवर कर्ज' : 'Loan Against FD'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Cash-Credit-Against-FD-FDCC" label={lang === 'mr' ? 'एफडीवर कॅश क्रेडिट' : 'Cash Credit Against FD'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Loan-Against-Life-Insurance-Policies" label={lang === 'mr' ? 'जीवन विम्यावर कर्ज' : 'Loan Against Life Insurance'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Government-Secured-Loan" label={lang === 'mr' ? 'शासकीय सुरक्षित कर्ज' : 'Government Secured Loan'} onClose={closeMobile} depth={2} />
//                                 <SubLink to="/Janvikas-Loan-Scheme" label={lang === 'mr' ? 'जनविकास कर्ज योजना' : 'Janvikas Loan Scheme'} onClose={closeMobile} depth={2} />
//                             </AccordionItem>
//                         </li>
//                         <SubLink to="/" label={tr.loanInterestRate} onClose={closeMobile} />
//                     </AccordionItem>

//                     <AccordionItem label={tr.aboutUs} open={mobileAbout} onToggle={() => setMobileAbout(!mobileAbout)}>
//                         {["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Annual-Reports"].map((path, i) => (
//                             <SubLink key={i} to={path} label={tr.aboutItems[i]} onClose={closeMobile} />
//                         ))}
//                     </AccordionItem>

//                     <AccordionItem label={tr.insurance} open={mobileInsurance} onToggle={() => setMobileInsurance(!mobileInsurance)}>
//                         {["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].map((path, i) => (
//                             <SubLink key={i} to={path} label={tr.insuranceItems[i]} onClose={closeMobile} />
//                         ))}
//                     </AccordionItem>

//                     <AccordionItem label={tr.digitalBanking} open={mobileDigitalBanking} onToggle={() => setmobileDigitalBanking(!mobileDigitalBanking)}>
//                         {["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].map((path, i) => (
//                             <SubLink key={i} to={path} label={tr.digitalItems[i]} onClose={closeMobile} />
//                         ))}
//                     </AccordionItem>

//                     <TopLink to="/Contact-Us" label={tr.contact} onClose={closeMobile} />
//                 </ul>

//                 {/* Login CTA */}
//                 <div className="px-5 py-4 border-t border-white/15 mt-2">
//                     <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx"
//                         className="block text-center bg-yellow-400 hover:bg-yellow-300 text-[#1e3163] font-bold py-3 px-4 rounded-md text-[15px] transition-colors duration-200 no-underline"
//                     >
//                         {tr.loginNetBanking}
//                     </Link>
//                 </div>

//                 {/* Contact info */}
//                 <ul className="list-none px-5 py-4 border-t border-white/15 m-0 space-y-2">
//                     <li className="flex items-center gap-2">
//                         <i className="icon-email text-white/60"></i>
//                         <Link to={`mailto:${tr.contactEmail}`} className="text-white/70 hover:text-white text-sm transition-colors duration-150">
//                             {tr.contactEmail}
//                         </Link>
//                     </li>
//                     <li className="flex items-center gap-2">
//                         <i className="icon-telephone text-white/60"></i>
//                         <Link to="tel:666-888-0000" className="text-white/70 hover:text-white text-sm transition-colors duration-150">
//                             {tr.contactPhone}
//                         </Link>
//                     </li>
//                 </ul>

//                 {/* Social */}
//                 <div className="flex items-center gap-3 px-5 pb-8">
//                     {[
//                         { icon: "fab fa-twitter", href: "#" },
//                         { icon: "fab fa-facebook", href: "#" },
//                         { icon: "fab fa-pinterest", href: "#" },
//                         { icon: "fab fa-instagram", href: "#" },
//                     ].map(({ icon, href }) => (
//                         <Link key={icon} to={href}
//                             className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-150"
//                         >
//                             <i className={`${icon} text-sm`}></i>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar






import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import logox from '../../assets/images/44.png'
import logoz from '../../assets/images/44.png'
import logoL from '../../assets/images/45.png'
import { useLang } from '../ImpFolder/LangContext'
import { FaUniversalAccess } from "react-icons/fa6"
import { CiSearch } from "react-icons/ci"
import { IoIosArrowForward } from "react-icons/io"

// ─── Translations ─────────────────────────────────────────────────────────────
const navTranslations = {
    en: {
        branchLocator: "Branch Locator",
        skipContent: "Skip To Main Content",
        login: "Login",
        loginNetBanking: "Login to Net Banking",
        home: "Home", homeItems: ["Home One", "Home Two", "Home Three", "Home Four"],
        deposits: "Deposits", depositItems: ["Saving Account", "Current Account", "Recurring Deposits", "Fixed Deposits", "Deposit Interest Rate"],
        loans: "Loans",
        commercialLoans: "Commercial Loans",
        vehicleLoansC: "Vehicle Loans",
        businessLoans: "Business Loans",
        propertyLoans: "Property Loans",
        vehicleLoans: "Vehicle Loans",
        personalLoans: "Personal Loans",
        educationLoans: "Education Loans",
        housingLoans: "Housing Loans",
        securedLoans: "Secured Loans",
        loanInterestRate: "Loan Interest Rate",
        aboutUs: "About Us", aboutItems: ["Profile", "Board Of Directors", "Board Of Management", "Events", "Annual Reports"],
        insurance: "Insurance", insuranceItems: ["General Insurance", "Health Insurance", "Life Insurance"],
        digitalBanking: "Digital Banking", digitalItems: ["SMS Banking", "ATM Service", "Mobile Banking", "Internet banking", "IMPS / NEFT / RTGS"],
        contact: "Contact",
        contactEmail: "needhelp@finlon.com",
        contactPhone: "666 888 0000",
    },
    mr: {
        branchLocator: "शाखा शोधक",
        skipContent: "मुख्य सामग्रीवर जा",
        login: "लॉगिन",
        loginNetBanking: "नेट बँकिंगमध्ये लॉगिन करा",
        home: "मुखपृष्ठ", homeItems: ["मुखपृष्ठ एक", "मुखपृष्ठ दोन", "मुखपृष्ठ तीन", "मुखपृष्ठ चार"],
        deposits: "ठेवी", depositItems: ["बचत खाते", "चालू खाते", "आवर्ती ठेव", "मुदत ठेव", "ठेव व्याज दर"],
        loans: "कर्जे",
        commercialLoans: "व्यावसायिक कर्जे",
        vehicleLoansC: "वाहन कर्जे",
        businessLoans: "व्यवसाय कर्जे",
        propertyLoans: "मालमत्ता कर्जे",
        vehicleLoans: "वाहन कर्जे",
        personalLoans: "वैयक्तिक कर्जे",
        educationLoans: "शिक्षण कर्जे",
        housingLoans: "गृह कर्जे",
        securedLoans: "सुरक्षित कर्जे",
        loanInterestRate: "कर्ज व्याज दर",
        aboutUs: "आमच्याबद्दल", aboutItems: ["प्रोफाइल", "संचालक मंडळ", "व्यवस्थापन मंडळ", "कार्यक्रम", "वार्षिक अहवाल"],
        insurance: "विमा", insuranceItems: ["सामान्य विमा", "आरोग्य विमा", "जीवन विमा"],
        digitalBanking: "डिजिटल बँकिंग", digitalItems: ["एसएमएस बँकिंग", "एटीएम सेवा", "मोबाइल बँकिंग", "इंटरनेट बँकिंग", "आयएमपीएस / एनईएफटी / आरटीजीएस"],
        contact: "संपर्क",
        contactEmail: "needhelp@finlon.com",
        contactPhone: "666 888 0000",
    },
}

// ─── Reusable mobile accordion components ────────────────────────────────────
const AccordionItem = ({ label, open, onToggle, children, depth = 0 }) => (
    <li className={`border-b ${depth === 0 ? 'border-white/10' : 'border-white/5'}`}>
        <button
            onClick={onToggle}
            className={`flex items-center justify-between w-full text-left transition-colors duration-150
                ${depth === 0
                    ? 'px-5 py-[14px] text-[15px] font-semibold text-white hover:text-yellow-400'
                    : 'px-4 py-[11px] text-[13.5px] font-medium text-white/80 bg-black/10 hover:text-yellow-300'
                }`}
        >
            <span>{label}</span>
            <span className="text-xl font-light leading-none flex-shrink-0 ml-2">
                {open ? '−' : '+'}
            </span>
        </button>
        {open && (
            <ul className={`list-none m-0 p-0 ${depth === 0 ? 'bg-black/20' : 'bg-black/10'}`}>
                {children}
            </ul>
        )}
    </li>
)

const SubLink = ({ to, label, depth = 1, onClose }) => (
    <li className="border-t border-white/5">
        <Link
            to={to}
            onClick={onClose}
            className={`block text-white/75 hover:text-white hover:bg-white/5 transition-all duration-150
                ${depth === 1 ? 'px-8 py-[11px] text-[14px]' : 'px-10 py-[10px] text-[13px]'}`}
        >
            {label}
        </Link>
    </li>
)

const TopLink = ({ to, label, onClose }) => (
    <li className="border-b border-white/10">
        <Link
            to={to}
            onClick={onClose}
            className="block px-5 py-[14px] text-[15px] font-semibold text-white hover:text-yellow-400 transition-colors duration-150"
        >
            {label}
        </Link>
    </li>
)

// ─── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar = () => {
    const [langOpen, setLangOpen] = useState(false)
    const [mobile, setmobile] = useState(false)
    const [search, setsearch] = useState(false)
    const { lang, setLang } = useLang()
    const tr = navTranslations[lang]

    const [mobileDeposits, setMobileDeposits] = useState(false)
    const [mobileLoans, setMobileLoans] = useState(false)
    const [mobileCommercial, setMobileCommercial] = useState(false)
    const [mobileVehicle, setMobileVehicle] = useState(false)
    const [mobilePersonal, setMobilePersonal] = useState(false)
    const [mobileEducation, setMobileEducation] = useState(false)
    const [mobileHousing, setMobileHousing] = useState(false)
    const [mobileSecured, setMobileSecured] = useState(false)
    const [mobileAbout, setMobileAbout] = useState(false)
    const [mobileInsurance, setMobileInsurance] = useState(false)
    const [mobileDigitalBanking, setmobileDigitalBanking] = useState(false)

    const location = useLocation()
    const path = location.pathname
    const [menu, setmenu] = useState({})
    const [sticky, setSticky] = useState(false)

    const closeMobile = () => setmobile(false)

    const activeMenu = () => {
        if (["/", "/home-02", "/home-03", "/home-04"].includes(path)) setmenu({ home: true })
        else if (["/Saving-Account", "/Current-Account", "/Recurring-Deposits", "/Fixed-Deposits"].includes(path)) setmenu({ deposits: true })
        else if (["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Testimonials", "/Annual-Reports"].includes(path)) setmenu({ aboutus: true })
        else if (["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].includes(path)) setmenu({ insurance: true })
        else if (["/loan-interest-rate", "/deposit-interest-rate"].includes(path)) setmenu({ interestrate: true })
        else if (path === "/Contact-Us") setmenu({ contact: true })
        else if (["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].includes(path)) setmenu({ DigitalBanking: true })
        else setmenu({ home: true })
    }

    useEffect(() => {
        const isSticky = () => setSticky(window.scrollY >= 141)
        window.addEventListener("scroll", isSticky)
        return () => window.removeEventListener("scroll", isSticky)
    }, [])

    useEffect(() => {
        window.scroll(0, 0)
        activeMenu()
    }, [path])

    return (
        <>
            <div className="page-wrapper">

                {/* ════════ DESKTOP TOPBAR ════════ */}
                <div className="topbar topbar44 hidden lg:block">
                    <div className="container-fluid">
                        <div className="topbar__info topbar__info3">

                            <Link to="/Branch-Locator">
                                <i className="icon-pin"></i>{tr.branchLocator}
                            </Link>

                            <a href="#main-content">
                                <i className="fa fa-forward menu-icon"></i>
                                {tr.skipContent}
                            </a>

                            {/* Language Dropdown */}
                            <div className="lang-dropdown relative">
                                <button
                                    className="lang-btn flex items-center gap-1 cursor-pointer"
                                    onClick={() => setLangOpen(!langOpen)}
                                    type="button"
                                >
                                    {lang === 'mr' ? 'मराठी' : 'English'}
                                    <IoIosArrowForward className={`lang-icon transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`} />
                                </button>
                                {langOpen && (
                                    <ul className="lang-menu absolute bg-white shadow-md rounded-md overflow-hidden z-50">
                                        <li>
                                            <button type="button"
                                                className={`block px-4 py-2 hover:bg-gray-100 w-full text-left ${lang === 'en' ? 'font-bold text-[#f47012]' : ''}`}
                                                onClick={() => { setLang('en'); setLangOpen(false) }}
                                            >
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                className={`block px-4 py-2 hover:bg-gray-100 w-full text-left ${lang === 'mr' ? 'font-bold text-[#f47012]' : ''}`}
                                                onClick={() => { setLang('mr'); setLangOpen(false) }}
                                            >
                                                मराठी
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className="topbar__links Links3">
                            <Link to="/#" className="main-menu__accessibility" aria-label="Accessibility options" title="Accessibility">
                                <FaUniversalAccess aria-hidden="true" />
                            </Link>
                            <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler search33">
                                <CiSearch />
                            </Link>
                            <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx" className="thm-btn main-menu__btn3">
                                {tr.login}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ════════ MOBILE TOPBAR — TWO ROWS ════════ */}
                <div className="lg:hidden bg-[#f47012]">

                    {/* ── Row 1: Logo + Hamburger ── */}
                    <div className="flex items-center justify-between px-4 h-[58px] border-b border-white/10">
                        <Link to="/">
                            <img src={logox} alt="Janaseva Sahakari Bank" className="h-[40px] w-auto block" />
                        </Link>

                        {/* Hamburger */}
                        <button
                            onClick={() => setmobile(true)}
                            aria-label="Open navigation menu"
                            className="bg-transparent border-none text-white text-[22px] cursor-pointer p-1 leading-none hover:text-yellow-300 transition-colors duration-150"
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>

                    {/* ── Row 2: Branch Locator | Accessibility | Lang ── */}
                    <div className="flex items-center justify-between px-4 h-[38px] bg-[#1e3163]">

                        {/* Left: Branch Locator */}
                        <Link
                            to="/Branch-Locator"
                            className="flex items-center gap-1.5 text-white text-[12px] font-semibold no-underline hover:text-yellow-200 transition-colors duration-150 whitespace-nowrap"
                        >
                            <i className="icon-pin text-[11px]"></i>
                            {tr.branchLocator}
                        </Link>

                        {/* Right: Accessibility + Lang */}
                        <div className="flex items-center gap-3">

                            {/* Accessibility Icon */}
                            <Link
                                to="/#"
                                aria-label="Accessibility options"
                                title="Accessibility"
                                className="text-white text-[18px] flex items-center hover:text-yellow-200 transition-colors duration-150"
                            >
                                <FaUniversalAccess aria-hidden="true" />
                            </Link>

                            {/* Language Switcher */}
                            <div className="relative">
                                <button
                                    onClick={() => setLangOpen(!langOpen)}
                                    className="flex items-center gap-1 bg-white/20 border border-white/30 rounded px-2.5 py-[4px] text-white text-[12px] font-semibold cursor-pointer whitespace-nowrap hover:bg-white/30 transition-colors duration-150"
                                >
                                    {lang === 'mr' ? 'मराठी' : 'EN'}
                                    <IoIosArrowForward
                                        className={`text-[10px] transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`}
                                    />
                                </button>
                                {langOpen && (
                                    <ul className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-xl list-none m-0 p-1 min-w-[110px] z-[9999]">
                                        <li>
                                            <button
                                                onClick={() => { setLang('en'); setLangOpen(false) }}
                                                className={`block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded cursor-pointer border-none bg-transparent ${lang === 'en' ? 'font-bold text-[#f47012]' : ''}`}
                                            >
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { setLang('mr'); setLangOpen(false) }}
                                                className={`block w-full text-left px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded cursor-pointer border-none bg-transparent ${lang === 'mr' ? 'font-bold text-[#f47012]' : ''}`}
                                            >
                                                मराठी
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                {/* ════════ END MOBILE TOPBAR ════════ */}


                {/* ════════ DESKTOP NAV ════════ */}
                <nav className={`main-menu hidden lg:block ${sticky ? "stricky-header stricked-menu stricky-fixed" : ""}`}>
                    <div className="container-fluid nav44">
                        <div className="main-menu__logo logo3 logo44">
                            <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1 head33" viewBox="0 0 317 120">
                                <path d="M 259.856 120 H 0 V 0 H 274 l 43 40 Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2 head33" viewBox="0 0 317 120">
                                <path d="M 259.856 120 H 0 V 0 H 274 l 42 40 Z" />
                            </svg>
                            <div className="main-menu__logo__img">
                                <Link to="/">
                                    <img
                                        src={sticky ? logoz : logox}
                                        className={`logo33 main-menu__logo3 ${sticky ? "logo-small" : "logo-large"}`}
                                        alt="Janaseva-Sahakari-Bank-Ltd., Hadapsar-Pune"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="main-menu__nav nav3">
                            <ul className="main-menu__list navcolor44">

                                {/* Home */}
                                <li className={`dropdown ${menu.home ? "current" : ""}`}>
                                    <Link to="/">{tr.home}</Link>
                                    <ul>
                                        {["/", "/home-02", "/home-03", "/home-04"].map((path, i) => (
                                            <li key={i}><Link to={path}>{tr.homeItems[i]}</Link></li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Deposits */}
                                <li className={`dropdown ${menu.deposits ? "current" : ""}`}>
                                    <Link to="/">{tr.deposits}</Link>
                                    <ul>
                                        {["/", "/", "/", "/Fixed-Deposits", "/"].map((path, i) => (
                                            <li key={i}><Link to={path}>{tr.depositItems[i]}</Link></li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Loans */}
                                <li className={`dropdown ${menu.Loans ? "current" : ""}`}>
                                    <Link to="/">{tr.loans}</Link>
                                    <ul>
                                        {/* Commercial */}
                                        <li className="dropdown">
                                            <Link to="/" className="flex items-center justify-between w-full">{tr.commercialLoans} <IoIosArrowForward /></Link>
                                            <ul className="submenu">
                                                <li className="dropdown">
                                                    <Link to="/" className="flex items-center justify-between w-full">{tr.vehicleLoansC} <IoIosArrowForward /></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/3-wheeler-loan">3 {lang === 'mr' ? 'चाकी कर्ज' : 'Wheeler Loan'}</Link></li>
                                                        <li><Link to="/New-commercial-vehicle">{lang === 'mr' ? 'नवीन व्यावसायिक वाहन' : 'New Commercial Vehicle'}</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="/" className="flex items-center justify-between w-full">{tr.businessLoans} <IoIosArrowForward /></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/ProSelf-Loan">{lang === 'mr' ? 'प्रोसेल्फ कर्ज' : 'ProSelf Loan'}</Link></li>
                                                        <li><Link to="/trade-pack-loan">{lang === 'mr' ? 'ट्रेड पॅक कर्ज' : 'Trade Pack Loan'}</Link></li>
                                                        <li><Link to="/Machinery-Loan">{lang === 'mr' ? 'यंत्रसामग्री कर्ज' : 'Machinery Loan'}</Link></li>
                                                        <li><Link to="/Cash-Credit-Secured-General">{lang === 'mr' ? 'कॅश क्रेडिट कर्ज' : 'Cash Credit Loan'}</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="/" className="flex items-center justify-between w-full">{tr.propertyLoans} <IoIosArrowForward /></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/Property-Loan-Builder-Finance">{lang === 'mr' ? 'मालमत्ता कर्ज' : 'Property Loan'}</Link></li>
                                                        <li><Link to="/Rent-Discounting">{lang === 'mr' ? 'भाडे सवलत' : 'Rent Discounting'}</Link></li>
                                                        <li><Link to="/Janaseva-Saral-Overdraft-Loan-Scheme">{lang === 'mr' ? 'सरल ओव्हरड्राफ्ट कर्ज' : 'Saral Overdraft Loan'}</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/Hospital-Educational-Institute-Loan">{lang === 'mr' ? 'रुग्णालय/शैक्षणिक कर्ज' : 'Hospital/Educational Loan'}</Link></li>
                                                <li><Link to="/Janaseva-Start-Up-(MSME)Finance">{lang === 'mr' ? 'स्टार्ट अप (एमएसएमई)' : 'Start Up (MSME) Finance'}</Link></li>
                                                <li><Link to="/Janaseva-Solar-Scheme">{lang === 'mr' ? 'सौर योजना' : 'Janaseva Solar Scheme'}</Link></li>
                                                <li><Link to="/Janaseva-Saral-Karj-Yojana">{lang === 'mr' ? 'सरल कर्ज योजना' : 'Saral Karj Yojana'}</Link></li>
                                                <li><Link to="/udyog-vastu-loan">{lang === 'mr' ? 'उद्योग वस्तु योजना' : 'Udyog Vastu Yojana'}</Link></li>
                                                <li><Link to="/hypothecation-loan">{lang === 'mr' ? 'गहाण कर्ज' : 'Hypothecation Loan'}</Link></li>
                                            </ul>
                                        </li>
                                        {/* Vehicle */}
                                        <li className="dropdown">
                                            <Link to="/" className="flex items-center justify-between w-full">{tr.vehicleLoans} <IoIosArrowForward /></Link>
                                            <ul className="submenu">
                                                <li><Link to="/Two-Wheeler-Loan">{lang === 'mr' ? 'दुचाकी कर्ज' : 'Two Wheeler Loan'}</Link></li>
                                                <li><Link to="/New-four-Wheeler-Loan">{lang === 'mr' ? 'नवीन चारचाकी कर्ज' : 'New Four Wheeler Loan'}</Link></li>
                                                <li><Link to="/Resale-4-Wheeler">{lang === 'mr' ? 'पुनर्विक्री चारचाकी कर्ज' : 'Resale Four Wheeler Loan'}</Link></li>
                                            </ul>
                                        </li>
                                        {/* Personal */}
                                        <li className="dropdown">
                                            <Link to="/" className="flex items-center justify-between w-full">{tr.personalLoans} <IoIosArrowForward /></Link>
                                            <ul className="submenu">
                                                <li><Link to="/Personal-Loan-Scheme">{lang === 'mr' ? 'वैयक्तिक कर्ज योजना' : 'Personal Loan Scheme'}</Link></li>
                                                <li><Link to="/Group-Loan">{lang === 'mr' ? 'गट कर्ज' : 'Group Loan'}</Link></li>
                                                <li><Link to="/Consumer-Loan">{lang === 'mr' ? 'ग्राहक कर्ज' : 'Consumer Loan'}</Link></li>
                                                <li><Link to="/Consumer-Durable">{lang === 'mr' ? 'ग्राहक टिकाऊ कर्ज' : 'Consumer Durable Loan'}</Link></li>
                                            </ul>
                                        </li>
                                        {/* Education */}
                                        <li className="dropdown">
                                            <Link to="/" className="flex items-center justify-between w-full">{tr.educationLoans} <IoIosArrowForward /></Link>
                                            <ul className="submenu">
                                                <li><Link to="/Janaseva-Educational-Secured-Loan">{lang === 'mr' ? 'जनसेवा शैक्षणिक कर्ज' : 'Janaseva Educational Loan'}</Link></li>
                                                <li><Link to="/Education-loan-for-Coaching">{lang === 'mr' ? 'कोचिंगसाठी शिक्षण कर्ज' : 'Education Loan for Coaching'}</Link></li>
                                                <li><Link to="/Unsecured-Education-Loan">{lang === 'mr' ? 'असुरक्षित शिक्षण कर्ज' : 'Unsecured Education Loan'}</Link></li>
                                            </ul>
                                        </li>
                                        {/* Housing */}
                                        <li className="dropdown">
                                            <Link to="/" className="flex items-center justify-between w-full">{tr.housingLoans} <IoIosArrowForward /></Link>
                                            <ul className="submenu">
                                                <li><Link to="/Janaseva-Gharkul-Loan-Scheme">{lang === 'mr' ? 'जनसेवा घरकुल योजना' : 'Janaseva Gharkul Scheme'}</Link></li>
                                                <li><Link to="/Janaseva-Gharkul-Top-Up">{lang === 'mr' ? 'जनसेवा घरकुल टॉप अप' : 'Janaseva Gharkul Top Up'}</Link></li>
                                                <li><Link to="/Housing-Loan-under-CRE">{lang === 'mr' ? 'सीआरई अंतर्गत गृह कर्ज' : 'Housing Loan under CRE'}</Link></li>
                                                <li><Link to="/Janaseva-Home-Decore">{lang === 'mr' ? 'जनसेवा होम डेकोर' : 'Janaseva Home Decor'}</Link></li>
                                            </ul>
                                        </li>
                                        {/* Secured */}
                                        <li className="dropdown">
                                            <Link to="/" className="flex items-center justify-between w-full">{tr.securedLoans} <IoIosArrowForward /></Link>
                                            <ul className="submenu">
                                                <li><Link to="/gold-loan">{lang === 'mr' ? 'सोने कर्ज' : 'Gold Loan'}</Link></li>
                                                <li><Link to="/Loan-Against-FD-FDTL">{lang === 'mr' ? 'एफडीवर कर्ज' : 'Loan Against FD'}</Link></li>
                                                <li><Link to="/Cash-Credit-Against-FD-FDCC">{lang === 'mr' ? 'एफडीवर कॅश क्रेडिट' : 'Cash Credit Against FD'}</Link></li>
                                                <li><Link to="/Loan-Against-Life-Insurance-Policies">{lang === 'mr' ? 'जीवन विम्यावर कर्ज' : 'Loan Against Life Insurance'}</Link></li>
                                                <li><Link to="/Government-Secured-Loan">{lang === 'mr' ? 'शासकीय सुरक्षित कर्ज' : 'Government Secured Loan'}</Link></li>
                                                <li><Link to="/Janvikas-Loan-Scheme">{lang === 'mr' ? 'जनविकास कर्ज योजना' : 'Janvikas Loan Scheme'}</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/Loan-Interest-Rate">{tr.loanInterestRate}</Link></li>
                                    </ul>
                                </li>

                                {/* About Us */}
                                <li className={`dropdown ${menu.aboutus ? "current" : ""}`}>
                                    <Link to="#">{tr.aboutUs}</Link>
                                    <ul>
                                        {["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Annual-Reports"].map((path, i) => (
                                            <li key={i}><Link to={path}>{tr.aboutItems[i]}</Link></li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Insurance */}
                                <li className={`dropdown ${menu.insurance ? "current" : ""}`}>
                                    <Link to="#">{tr.insurance}</Link>
                                    <ul>
                                        {["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].map((path, i) => (
                                            <li key={i}><Link to={path}>{tr.insuranceItems[i]}</Link></li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Digital Banking */}
                                <li className={`dropdown ${menu.DigitalBanking ? "current" : ""}`}>
                                    <Link to="#">{tr.digitalBanking}</Link>
                                    <ul>
                                        {["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].map((path, i) => (
                                            <li key={i}><Link to={path}>{tr.digitalItems[i]}</Link></li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Contact */}
                                <li className={`contact ${menu.contact ? "current" : ""}`}>
                                    <Link to="/Contact-Us">{tr.contact}</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="main-menu__right">
                            <Link to="#" onClick={() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
                                <i className="fa fa-bars"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* ════════ SEARCH POPUP ════════ */}
            <div className={`search-popup ${search ? "active" : ""}`}>
                <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder={lang === 'mr' ? 'येथे शोधा...' : 'Search Here...'} />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="icon-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* ════════ MOBILE BACKDROP ════════ */}
            {mobile && (
                <div className="fixed inset-0 bg-black/50 z-[998] lg:hidden" onClick={closeMobile} />
            )}

            {/* ════════ MOBILE DRAWER ════════ */}
            <div className={`fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-[#1e3163] z-[999]
                overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden
                ${mobile ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-2 py-4 border-b border-white/15">
                    <Link to="/" onClick={closeMobile}>
                        <img src={logoL} alt="Janaseva Bank" className="w-60 h-auto" />
                    </Link>
                    <button onClick={closeMobile} aria-label="Close menu"
                        className="text-white text-sm bg-white/10 hover:bg-white/25 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-150 border-none cursor-pointer"
                    >
                        <i className="fa fa-times"></i>
                    </button>
                </div>

                {/* Accordion menu */}
                <ul className="list-none m-0 p-0">
                    <TopLink to="/" label={tr.home} onClose={closeMobile} />

                    <AccordionItem label={tr.deposits} open={mobileDeposits} onToggle={() => setMobileDeposits(!mobileDeposits)}>
                        {["/", "/", "/", "/Fixed-Deposits", "/"].map((path, i) => (
                            <SubLink key={i} to={path} label={tr.depositItems[i]} onClose={closeMobile} />
                        ))}
                    </AccordionItem>

                    <AccordionItem label={tr.loans} open={mobileLoans} onToggle={() => setMobileLoans(!mobileLoans)}>
                        <li className="border-t border-white/5">
                            <AccordionItem label={tr.commercialLoans} open={mobileCommercial} onToggle={() => setMobileCommercial(!mobileCommercial)} depth={1}>
                                <SubLink to="/3-wheeler-loan" label={lang === 'mr' ? '३ चाकी कर्ज' : '3 Wheeler Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/New-commercial-vehicle" label={lang === 'mr' ? 'नवीन व्यावसायिक वाहन' : 'New Commercial Vehicle'} onClose={closeMobile} depth={2} />
                                <SubLink to="/ProSelf-Loan" label={lang === 'mr' ? 'प्रोसेल्फ कर्ज' : 'ProSelf Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/trade-pack-loan" label={lang === 'mr' ? 'ट्रेड पॅक कर्ज' : 'Trade Pack Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Machinery-Loan" label={lang === 'mr' ? 'यंत्रसामग्री कर्ज' : 'Machinery Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Cash-Credit-Secured-General" label={lang === 'mr' ? 'कॅश क्रेडिट कर्ज' : 'Cash Credit Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Property-Loan-Builder-Finance" label={lang === 'mr' ? 'मालमत्ता कर्ज' : 'Property Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Rent-Discounting" label={lang === 'mr' ? 'भाडे सवलत' : 'Rent Discounting'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janaseva-Saral-Overdraft-Loan-Scheme" label={lang === 'mr' ? 'सरल ओव्हरड्राफ्ट कर्ज' : 'Saral Overdraft Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Hospital-Educational-Institute-Loan" label={lang === 'mr' ? 'रुग्णालय/शैक्षणिक कर्ज' : 'Hospital/Educational Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janaseva-Start-Up-(MSME)Finance" label={lang === 'mr' ? 'स्टार्ट अप (एमएसएमई)' : 'Start Up (MSME) Finance'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janaseva-Solar-Scheme" label={lang === 'mr' ? 'सौर योजना' : 'Janaseva Solar Scheme'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janaseva-Saral-Karj-Yojana" label={lang === 'mr' ? 'सरल कर्ज योजना' : 'Saral Karj Yojana'} onClose={closeMobile} depth={2} />
                                <SubLink to="/udyog-vastu-loan" label={lang === 'mr' ? 'उद्योग वस्तु योजना' : 'Udyog Vastu Yojana'} onClose={closeMobile} depth={2} />
                                <SubLink to="/hypothecation-loan" label={lang === 'mr' ? 'गहाण कर्ज' : 'Hypothecation Loan'} onClose={closeMobile} depth={2} />
                            </AccordionItem>
                        </li>
                        <li className="border-t border-white/5">
                            <AccordionItem label={tr.vehicleLoans} open={mobileVehicle} onToggle={() => setMobileVehicle(!mobileVehicle)} depth={1}>
                                <SubLink to="/Two-Wheeler-Loan" label={lang === 'mr' ? 'दुचाकी कर्ज' : 'Two Wheeler Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/New-four-Wheeler-Loan" label={lang === 'mr' ? 'नवीन चारचाकी कर्ज' : 'New Four Wheeler Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Resale-4-Wheeler" label={lang === 'mr' ? 'पुनर्विक्री चारचाकी' : 'Resale Four Wheeler Loan'} onClose={closeMobile} depth={2} />
                            </AccordionItem>
                        </li>
                        <li className="border-t border-white/5">
                            <AccordionItem label={tr.personalLoans} open={mobilePersonal} onToggle={() => setMobilePersonal(!mobilePersonal)} depth={1}>
                                <SubLink to="/Personal-Loan-Scheme" label={lang === 'mr' ? 'वैयक्तिक कर्ज योजना' : 'Personal Loan Scheme'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Group-Loan" label={lang === 'mr' ? 'गट कर्ज' : 'Group Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Consumer-Loan" label={lang === 'mr' ? 'ग्राहक कर्ज' : 'Consumer Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Consumer-Durable" label={lang === 'mr' ? 'ग्राहक टिकाऊ कर्ज' : 'Consumer Durable Loan'} onClose={closeMobile} depth={2} />
                            </AccordionItem>
                        </li>
                        <li className="border-t border-white/5">
                            <AccordionItem label={tr.educationLoans} open={mobileEducation} onToggle={() => setMobileEducation(!mobileEducation)} depth={1}>
                                <SubLink to="/Janaseva-Educational-Secured-Loan" label={lang === 'mr' ? 'जनसेवा शैक्षणिक कर्ज' : 'Janaseva Educational Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Education-loan-for-Coaching" label={lang === 'mr' ? 'कोचिंगसाठी शिक्षण कर्ज' : 'Education Loan for Coaching'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Unsecured-Education-Loan" label={lang === 'mr' ? 'असुरक्षित शिक्षण कर्ज' : 'Unsecured Education Loan'} onClose={closeMobile} depth={2} />
                            </AccordionItem>
                        </li>
                        <li className="border-t border-white/5">
                            <AccordionItem label={tr.housingLoans} open={mobileHousing} onToggle={() => setMobileHousing(!mobileHousing)} depth={1}>
                                <SubLink to="/Janaseva-Gharkul-Loan-Scheme" label={lang === 'mr' ? 'जनसेवा घरकुल योजना' : 'Janaseva Gharkul Scheme'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janaseva-Gharkul-Top-Up" label={lang === 'mr' ? 'जनसेवा घरकुल टॉप अप' : 'Janaseva Gharkul Top Up'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Housing-Loan-under-CRE" label={lang === 'mr' ? 'सीआरई अंतर्गत गृह कर्ज' : 'Housing Loan under CRE'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janaseva-Home-Decore" label={lang === 'mr' ? 'जनसेवा होम डेकोर' : 'Janaseva Home Decor'} onClose={closeMobile} depth={2} />
                            </AccordionItem>
                        </li>
                        <li className="border-t border-white/5">
                            <AccordionItem label={tr.securedLoans} open={mobileSecured} onToggle={() => setMobileSecured(!mobileSecured)} depth={1}>
                                <SubLink to="/gold-loan" label={lang === 'mr' ? 'सोने कर्ज' : 'Gold Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Loan-Against-FD-FDTL" label={lang === 'mr' ? 'एफडीवर कर्ज' : 'Loan Against FD'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Cash-Credit-Against-FD-FDCC" label={lang === 'mr' ? 'एफडीवर कॅश क्रेडिट' : 'Cash Credit Against FD'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Loan-Against-Life-Insurance-Policies" label={lang === 'mr' ? 'जीवन विम्यावर कर्ज' : 'Loan Against Life Insurance'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Government-Secured-Loan" label={lang === 'mr' ? 'शासकीय सुरक्षित कर्ज' : 'Government Secured Loan'} onClose={closeMobile} depth={2} />
                                <SubLink to="/Janvikas-Loan-Scheme" label={lang === 'mr' ? 'जनविकास कर्ज योजना' : 'Janvikas Loan Scheme'} onClose={closeMobile} depth={2} />
                            </AccordionItem>
                        </li>
                        <SubLink to="/Loan-Interest-Rate" label={tr.loanInterestRate} onClose={closeMobile} />
                    </AccordionItem>

                    <AccordionItem label={tr.aboutUs} open={mobileAbout} onToggle={() => setMobileAbout(!mobileAbout)}>
                        {["/Our-history", "/Board-of-directors", "/Board-of-management", "/Events", "/Annual-Reports"].map((path, i) => (
                            <SubLink key={i} to={path} label={tr.aboutItems[i]} onClose={closeMobile} />
                        ))}
                    </AccordionItem>

                    <AccordionItem label={tr.insurance} open={mobileInsurance} onToggle={() => setMobileInsurance(!mobileInsurance)}>
                        {["/General-Insurance", "/Health-Insurance", "/Life-Insurance"].map((path, i) => (
                            <SubLink key={i} to={path} label={tr.insuranceItems[i]} onClose={closeMobile} />
                        ))}
                    </AccordionItem>

                    <AccordionItem label={tr.digitalBanking} open={mobileDigitalBanking} onToggle={() => setmobileDigitalBanking(!mobileDigitalBanking)}>
                        {["/SMS-Banking", "/ATM-Service", "/Mobile-Banking", "/Internet-banking", "/IMPS-NEFT-RTGS"].map((path, i) => (
                            <SubLink key={i} to={path} label={tr.digitalItems[i]} onClose={closeMobile} />
                        ))}
                    </AccordionItem>

                    <TopLink to="/Contact-Us" label={tr.contact} onClose={closeMobile} />
                </ul>

                {/* Login CTA */}
                <div className="px-5 py-4 border-t border-white/15 mt-2">
                    <Link to="https://janainternet.janasevabankpune.bank.in/Screens/HomePage.aspx"
                        className="block text-center bg-yellow-400 hover:bg-yellow-300 text-[#1e3163] font-bold py-3 px-4 rounded-md text-[15px] transition-colors duration-200 no-underline"
                    >
                        {tr.loginNetBanking}
                    </Link>
                </div>

                {/* Contact info */}
                <ul className="list-none px-5 py-4 border-t border-white/15 m-0 space-y-2">
                    <li className="flex items-center gap-2">
                        <i className="icon-email text-white/60"></i>
                        <Link to={`mailto:${tr.contactEmail}`} className="text-white/70 hover:text-white text-sm transition-colors duration-150">
                            {tr.contactEmail}
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <i className="icon-telephone text-white/60"></i>
                        <Link to="tel:666-888-0000" className="text-white/70 hover:text-white text-sm transition-colors duration-150">
                            {tr.contactPhone}
                        </Link>
                    </li>
                </ul>

                {/* Social */}
                <div className="flex items-center gap-3 px-5 pb-8">
                    {[
                        { icon: "fab fa-twitter", href: "#" },
                        { icon: "fab fa-facebook", href: "#" },
                        { icon: "fab fa-pinterest", href: "#" },
                        { icon: "fab fa-instagram", href: "#" },
                    ].map(({ icon, href }) => (
                        <Link key={icon} to={href}
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-150"
                        >
                            <i className={`${icon} text-sm`}></i>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar