import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import logoL from '../../assets/images/janseva-updated-logo__2_-removebg-preview (1).png'
import logoSmall from '../../assets/images/janseva-updated-logo__2_-removebg-preview (1).png'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa6";

function Headerfive() {

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
        if (path === "/" || path === "/home-02" || path === "/home-03" || path === "/home-04") {
            setmenu({ home: true })
        } else if (path === "/about") {
            setmenu({ about: true })
        } else if (path === "/service" || path === "/servicedetails") {
            setmenu({ loans: true })
        } else if (path === "/Two-wheeler-Loan" || path === "/teamdetails" || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" || path === "/applynow") {
            setmenu({ loan: true })
        } else if (path === "/Two-wheeler-Loan" || path === "/loaneligibility" || path === "/homeloan" || path === "/homeloaneligibility" || path === "/compareEMI" || path === "/monthlyloan") {
            setmenu({ features: true })
        }
        else if (path === "/newsmain" || path === "/newsdetails") {
            setmenu({ news: true })
        }
        else if (path === "/contact") {
            setmenu({ contact: true })
        } else if (path === "/newsmain" || path === "/newsdetails") {
            setmenu({ interestrate: true })
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
                <div className="container container5">
                    <div className="topbar__info">
                        {/* <Link to="/#"><i className="icon-pin"></i> 88 Road Broklyn Golden Street. New York</Link>
                        <Link to="mailto:needhelp@company.com"><i className="icon-email"></i> needhelp@company.com</Link> */}
                        <Link to="/#"><i className="icon-pin "></i>Branch Locator</Link>
                        <Link to="/#">
                            <i className="fa fa-forward menu-icon"></i>
                            Skip To Main Content
                        </Link>
                        <div className="lang-dropdown">
                            <button className="lang-btn22">
                                English <FaAngleDown className="lang-icon" />
                            </button>

                            <ul className="lang-menu">
                                <li>
                                    <button type="button">English</button>
                                </li>
                                <li>
                                    <button type="button">मराठी</button>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/#"
                            className="main-menu__accessibility  main-menu__accessibility55"
                            aria-label="Accessibility options"
                            title="Accessibility"
                        >
                            <FaUniversalAccess aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="topbar__social">
                        <Link to="/#"><i className="fab fa-twitter"></i></Link>
                        <Link to="/#"><i className="fab fa-facebook"></i></Link>
                        <Link to="/#"><i className="fab fa-pinterest"></i></Link>
                        <Link to="/#"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>

            <nav className={`main-menu main-menu--two ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
                <div className="container12">
                    <div className="main-menu--two__inner main-menu--two__inner5">
                        <div className={`main-menu__logo main-menu__logo5 ${sticky ? "logo-small" : ""}`}>
                            <Link to="/">
                                <img src={logoL} className="logo55" alt="Finlon" />
                            </Link>
                        </div>


                        <div className="main-menu__nav main-menu__nav5">
                            <ul className="main-menu__list main-menu__list5">
                                <li className={`dropdown ${menu.home && "current"}`}>
                                    <Link to="/">Home</Link>
                                    <ul>
                                        <li> <Link to="/">Home One</Link> </li>
                                        <li><Link to="/home-02">Home Two</Link></li>
                                        <li><Link to="/home-03">Home Three</Link></li>
                                        <li><Link to="/home-04">Home four</Link></li>
                                        <li><Link to="/home-05">Home five</Link></li>
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


                                <li className={`dropdown ${menu.services && "current"}`}><Link to="/#">deposits</Link>
                                    <ul>
                                        <li><Link to="/#">Saving Account</Link></li>
                                        <li><Link to="/#">Current Account</Link></li>
                                        <li><Link to="/#">Recuring deposits</Link></li>
                                        <li><Link to="/#">Fixed Deposits</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.loan && "current"}`}><Link to="/#">Loans</Link>
                                    <ul>
                                        <li><Link to="/Two-wheeler-Loan">Two wheeler Loan</Link></li>
                                        <li><Link to="/#">Commercial Loan</Link></li>
                                    </ul>
                                </li>
                                <li className={`about ${menu.about && "current"}`}>
                                    <Link to="/about">Downloads</Link>
                                </li>
                                <li className={`dropdown ${menu.features && "current"}`}><Link to="/#">About Us </Link>
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
                                <li className={`dropdown ${menu.news && "current"}`}><Link to="/#">Insurance</Link>
                                    <ul>
                                        <li><Link to="/#">General Insurance</Link></li>
                                        <li><Link to="/#">Health Insurance</Link></li>
                                        <li><Link to="/#">Life Insurance</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.interestrate && "current"}`}><Link to="/#">Interest Rate</Link>
                                    <ul>
                                        <li><Link to="/#">Loan Interest Rate</Link></li>
                                        <li><Link to="/#">Deposit Interest Rate</Link></li>
                                    </ul>
                                </li>
                                <li className={`about ${menu.contact && "current"}`}><Link to="/#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="main-menu__right main-menu__right5">
                            <Link to="/#" className="main-menu__toggler mobile-nav__toggler" onClick={() => setmobile(true)}>
                                <i className="fa fa-bars"></i>
                            </Link>
                            {/* <Link to="/#" className="main-menu__search search-toggler main-menu__search5">
                                <i className="icon-magnifying-glass" onClick={() => setsearch(true)}></i>
                            </Link> */}
                            <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler main-menu__search5">
                                <CiSearch />
                            </Link>
                            <Link to="/applynow" className="thm-btn main-menu__btn">Login</Link>
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
                                <Link to="/#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                {homeDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li className="current">
                                            <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
                                        </li>
                                        <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
                                        <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
                                        <li className="dropdown">
                                            <Link to="/#" className={headerDrop ? "expanded" : ""}>Header Styles
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
                                <Link to="/#" className={servicesDrop ? "expanded" : ""}>Services
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
                                <Link to="/#" className={pagesDrop ? "expanded" : ""}>Pages
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
                                <Link to="/#" className={featuresDrop ? "expanded" : ""}>Features
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
                                <Link to="/#" className={newsDrop ? "expanded" : ""}>News
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
                        <Link to="/#"><i className="fab fa-twitter"></i></Link>
                        <Link to="/#"><i className="fab fa-facebook"></i></Link>
                        <Link to="/#"><i className="fab fa-pinterest"></i></Link>
                        <Link to="/#"><i className="fab fa-instagram"></i></Link>
                    </div>

                </div>

            </div>

            <div className={`search-popup ${search && "active"}`}>
                <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
                <div className="search-popup__content">
                    <form action="/#">
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

export default Headerfive
