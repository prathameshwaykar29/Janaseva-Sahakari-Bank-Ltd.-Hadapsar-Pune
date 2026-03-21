// import { Link } from 'react-router-dom'
// import React from 'react'
// import Logos from '../../assets/images/logo-light.png'

// const Footer = () => {
//   return (
//     <>
//         <footer className="main-footer">
//             <div className="container">
//                 <div className="row row-gutter-y-30">
//                     <div className="col-lg-4 col-md-6">
//                         <div className="footer-widget footer-widget--about">
//                             <Link to="/" className="footer-widget__logo">
//                                 <img src={Logos} alt="finlon" width="140" height="51" />
//                             </Link>
//                             <p className="footer-widget__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
//                                 habitasse platea dictumst.</p>
//                             <ul className="list-unstyled footer-widget__info">
//                                 <li>
//                                     <i className="icon-email"></i>
//                                     <Link to="mailto:needhelp@finlon.com">needhelp@finlon.com</Link>
//                                 </li>
//                                 <li>
//                                     <i className="icon-telephone"></i>
//                                     <Link to="tel:926668880000">92 666 888 0000 </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-lg-2 col-md-6">
//                         <div className="footer-widget footer-widget--links">
//                             <h3 className="footer-widget__title">
//                                 Explore
//                             </h3>
//                             <ul className="list-unstyled footer-widget__menu">
//                                 <li><Link to="/about">About</Link></li>
//                                 <li><Link to="/services">Our Services</Link></li>
//                                 <li><Link to="/news">Latest News</Link></li>
//                                 <li><Link to="/applynow">Apply for Loan</Link></li>
//                                 <li><Link to="/contact">Contact</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                         <div className="footer-widget footer-widget--time">
//                             <h3 className="footer-widget__title">
//                                 Timing
//                             </h3>
//                             <p className="footer-widget__text">
//                                 Mon Fri: 7:00am - 6:00pm <br/> Saturday: 9:00am - 5:00pm <br /> Sunday: Closed
//                             </p>
//                             <div className="footer-widget__social">
//                                 <Link to="#"><i className="fab fa-twitter"></i></Link>
//                                 <Link to="#"><i className="fab fa-facebook"></i></Link>
//                                 <Link to="#"><i className="fab fa-pinterest"></i></Link>
//                                 <Link to="#"><i className="fab fa-instagram"></i></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                         <div className="footer-widget footer-widget--newsletter">
//                             <h3 className="footer-widget__title">
//                                 Newsletter
//                             </h3>
//                             <form className="footer-widget__mailchimp">
//                                 <input type="email" placeholder="Email address" />
//                                 <p className="footer-widget__mailchimp__text">
//                                     <i className="fa fa-check"></i>
//                                     I agree to all your terms and policies
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//         <div className="bottom-footer">
//             <div className="container">
//                 <p className="bottom-footer__text text-center">Copyright &copy; 2022 All Rights Reserved.</p>

//             </div>
//         </div>
//     </>
//   )
// }

// export default Footer

















import { Link } from 'react-router-dom'
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
// import Logos from '../../assets/images/janseva-logo-eng-monteserrat.png'
import Logos0 from '../../assets/images/digc-logo.jpg'
import Logos1 from '../../assets/images/QR-Code.jpg'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="row row-gutter-y-30">

                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget footer-widget--links">
                                <h3 className="footer-widget__title">
                                    Explore
                                </h3>
                                <ul className="list-unstyled footer-widget__menu">
                                    <li><Link to="/#">Profile</Link></li>
                                    <li><Link to="/#">Board Of Directors</Link></li>
                                    <li><Link to="/#">Board Of Management</Link></li>
                                    <li><Link to="/#">Events</Link></li>
                                    <li><Link to="/#">Blogs</Link></li>
                                    <li><Link to="/#">Career</Link></li> 
                                    <li><Link to="/Loan-Interest-Rate">Loan Interest Rate</Link></li>

                                </ul>

                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-6">
                            
                        </div> */}

                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget footer-widget--links">
                                <h3 className="footer-widget__title">
                                    Other Links
                                </h3>
                                <ul className="list-unstyled footer-widget__menu">
                                    <li><Link to="/#">About</Link></li>
                                    <li><Link to="/#">Our Services</Link></li>
                                    <li><Link to="/bank-holiday">Holidays</Link></li>
                                    <li><Link to="/#">Annual Reports</Link></li>
                                    <li><Link to="/#">Contact</Link></li>
                                    <li><Link to="/Downloads">DownLoads</Link></li>
                                </ul>


                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget footer-widget--links">
                                <h3 className="footer-widget__title">Documents</h3>

                                <ul className="list-unstyled footer-widget__menu">
                                    <li>
                                        <a
                                            href="assets/pdf/footer-folder/updated_service_charges.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Service Charges
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="assets/pdf/footer-folder/Escalation-Matrix.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Escalation Matrix
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="assets/pdf/footer-folder/JSB-Notice.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            SMA & NPA Notice
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="assets/pdf/footer-folder/Resolution-Framework.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resolution Framework
                                        </a>
                                    </li>
<li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
                                    <li>
                                        <a
                                            href="assets/pdf/footer-folder/DEATH_CLAIM_FORMAT.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Deceased Claim Form
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="assets/pdf/footer-folder/Actual_Propery_Poss.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Secured Assets Possessed Under SARFAESI Act, 2002
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-lg-5 col-md-6">
                            <div className="footer-widget footer-widget--about">
                                {/* <Link to="/" className="footer-widget__logo">
                                 <img src={Logos} alt="finlon" width="600" height="100" />
                             </Link> */}
                                <p className="footer-widget__text footer-location">
                                    <FaMapMarkerAlt className="location-icon" />
                                    Agarwal Towers, Solapur Road, Hadapsar, Pune 411028.
                                </p>
                                <ul className="list-unstyled footer-widget__info">
                                    <li>
                                        <i className="icon-email"></i>
                                        <Link to="mailto:info@janasevabank.in">info@janasevabank.in</Link>
                                    </li>
                                    <li>
                                        <i className="icon-telephone"></i>
                                        <Link to="tel:18001200304">18001200304 </Link>
                                    </li>
                                    <li></li>
                                </ul>
                                <Link to="/https://www.dicgc.org.in" className="footer-widget__logo">
                                    <img src={Logos0} alt="digc-logo" width="90" />
                                    <img src={Logos1} alt="QR-Code" width="90" />
                                </Link>
                                <p><Link to="/https://www.dicgc.org.in" className='footer-dicgc-link'>Janaseva Sahakari Bank Ltd is registered with DICGC</Link></p>
                                <div className="footer-widget__social">
                                    <a
                                        href="https://twitter.com/Janaseva_Bank"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Twitter"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>

                                    <a
                                        href="https://www.facebook.com/Janasevabank"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@janasevasahakaribankpune"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="YouTube"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/janasevasahkaribankltd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>

                                </div>
                                <p className='footer-widget__text'>Best viewed at 1366 × 768 resolution in Microsoft Edge 100+ , Mozilla 100+, Google Chrome 100+</p>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
            {/* <div className="bottom-footer">
            <div className="container">
                <p className="bottom-footer__text text-center">Copyright &copy; 2022 All Rights Reserved.</p>
                
            </div>
        </div> */}
            <div className="bottom-footer">
                <div className="container footer-flex">
                    <span className="footer-left">
                        Copyrights
                        <a
                            href="/#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong> © 2026 Janaseva Sahakari Bank Ltd., Hadapsar, Pune</strong>
                        </a>
                        .  All rights reserved.
                    </span>



                    <span className="footer-right">
                        Design & Developed by{' '}
                        <a
                            href="https://www.convivialsoftware.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>Convivial Software Pvt. Ltd.</strong>
                        </a>
                    </span>
                </div>
            </div>

        </>
    )
}

export default Footer