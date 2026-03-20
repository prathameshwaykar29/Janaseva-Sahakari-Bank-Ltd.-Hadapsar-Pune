// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import resource from '../../assets/images/resources/about-5-177.png'
// import resource01 from '../../assets/images/resources/about-5-v-177.png'

// function Company() {

//     const [ytShow, setytShow] = useState(false);

//     return (
//         <>
//             <section className="about-five pt-120 pb-120">
//                 <div className="about-five__shape-1"></div>
//                 <div className="about-five__shape-2"></div>
//                 <div className="about-five__shape-3"></div>
//                 <div className="container">
//                     <div className="row row-gutter-y-60">
//                         <div className="col-lg-6">
//                             <div className="about-five__image wow fadeInLeft" data-wow-duration="1500ms">
//                                 <img src={resource} alt="" />
//                                 <div className="about-five__image__caption">
//                                     <div className="about-five__image__caption__shape-1"></div>
//                                     <div className="about-five__image__caption__shape-2"></div>
//                                     <div className="about-five__image__caption__shape-3"></div>
//                                     <h3 className="about-five__image__title">
//                                         25<i>+</i>
//                                     </h3>
//                                     <p className="about-five__image__text">Years Experiecne</p>
//                                 </div>
//                                 <div className="about-five__image__floated">Finlon</div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="about-five__content">
//                                 <div className="block-title text-left">
//                                     <p className="block-title__tagline">About Company</p>
//                                     <h2 className="block-title__title">Small business loans for daily expenses</h2>
//                                 </div>
//                                 <h3 className="about-five__subtitle">Duis irure dolor lipsum is simply free text available.</h3>
//                                 <p className="about-five__text">There are many variations of passages of lorem ipsum available the
//                                     majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum
//                                     is simply free text available.</p>
//                                 <div className="team-progress__item">
//                                     <h4 className="team-progress__title">Investment Plan</h4>
//                                     <div className="team-progress__bar">
//                                         <div className="team-progress__bar__inner count-bar" data-percent="77%" style={{ width: "77%" }}  >
//                                             <div className="team-progress__bar__text count-text">77%</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="team-progress__item">
//                                     <h4 className="team-progress__title">Consulting Experience</h4>
//                                     <div className="team-progress__bar">
//                                         <div className="team-progress__bar__inner count-bar" data-percent="68%" style={{ width: '68%' }}>
//                                             <div className="team-progress__bar__text count-text">68%
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div className="row row-gutter-y-30">
//                                     <div className="col-md-6">
//                                         <ul className="list-unstyled ml-0 about-two__list">
//                                             <li>
//                                                 <i className="fa fa-arrow-circle-right"></i>
//                                                 Nsectetur cing elit.
//                                             </li>
//                                             <li>
//                                                 <i className="fa fa-arrow-circle-right"></i>
//                                                 Suspe ndisse suscipit sagittis leo.
//                                             </li>
//                                             <li>
//                                                 <i className="fa fa-arrow-circle-right"></i>
//                                                 Entum estibulum digni posuere.
//                                             </li>
//                                             <li>
//                                                 <i className="fa fa-arrow-circle-right"></i>
//                                                 Donec tristique ante dictum rhoncus.
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="about-five__video">
//                                             <img src={resource01} alt="" />
//                                             <Link to="#" onClick={() => setytShow(true)} className="video-popup about-five__video__btn">
//                                                 <i className="fa fa-play"></i>
//                                                 <span className="ripple"></span>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {ytShow &&
//                 <>
//                     <div className="mfp-bg mfp-fade mfp-ready" style={{ height: '7368px', position: 'absolute' }}></div>
//                     <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabindex="-1" style={{ top: '1561px', position: 'absolute', height: '310px' }}>
//                         <div className="mfp-container mfp-s-ready mfp-iframe-holder">
//                             <div className="mfp-content">
//                                 <div className="mfp-iframe-scaler">
//                                     <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setytShow(false)}>×</button>
//                                     <iframe className="mfp-iframe" src="//www.youtube.com/embed/m2b9ZTBlW2k?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
//                                 </div>
//                             </div>
//                             <div className="mfp-preloader">Loading...</div>
//                         </div>
//                     </div>
//                 </>}
//         </>
//     )
// }

// export default Company



// import React from "react";
// import { Link } from "react-router-dom";
// import resource from "../../assets/images/resources/about-5-177.png";

// function Company() {
//   return (
//     <>
//       <section className="about-five pt-120 pb-120">
//         <div className="about-five__shape-1"></div>
//         <div className="about-five__shape-2"></div>
//         <div className="about-five__shape-3"></div>

//         <div className="container">
//           <div className="row row-gutter-y-60">
//             {/* LEFT IMAGE */}
//             <div className="col-lg-6">
//               <div
//                 className="about-five__image wow fadeInLeft"
//                 data-wow-duration="1500ms"
//               >
//                 <img src={resource} alt="Digital Banking" />

//                 <div className="about-five__image__caption">
//                   <h3 className="about-five__image__title">
//                     24<i>/</i>7
//                   </h3>
//                   <p className="about-five__image__text">Digital Banking</p>
//                 </div>

//                 <div className="about-five__image__floated">
//                   Secure Banking
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="col-lg-6">
//               <div className="about-five__content">
//                 <div className="block-title text-left">
//                   <p className="block-title__tagline">Digital Banking</p>
//                   <h2 className="block-title__title">
//                     Smart, Secure & Seamless Banking
//                   </h2>
//                 </div>

//                 <h3 className="about-five__subtitle">
//                   Experience modern banking with powerful digital services.
//                 </h3>

//                 <p className="about-five__text">
//                   Our digital banking platform allows you to manage accounts,
//                   transfer funds, pay bills, and access services securely from
//                   anywhere, anytime.
//                 </p>

//                 {/* PROGRESS */}
//                 <div className="team-progress__item">
//                   <h4 className="team-progress__title">
//                     Digital Transactions
//                   </h4>
//                   <div className="team-progress__bar">
//                     <div
//                       className="team-progress__bar__inner"
//                       style={{ width: "88%" }}
//                     >
//                       <div className="team-progress__bar__text">88%</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="team-progress__item">
//                   <h4 className="team-progress__title">
//                     Secure Infrastructure
//                   </h4>
//                   <div className="team-progress__bar">
//                     <div
//                       className="team-progress__bar__inner"
//                       style={{ width: "96%" }}
//                     >
//                       <div className="team-progress__bar__text">96%</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* FEATURES LIST */}
//                 <div className="row row-gutter-y-30">
//                   <div className="col-md-12">
//                     <ul className="list-unstyled ml-0 about-two__list">
//                       <li>
//                         <i className="fa fa-check-circle"></i>
//                         Internet & Mobile Banking
//                       </li>
//                       <li>
//                         <i className="fa fa-check-circle"></i>
//                         UPI, QR & Instant Payments
//                       </li>
//                       <li>
//                         <i className="fa fa-check-circle"></i>
//                         Online Account Opening
//                       </li>
//                       <li>
//                         <i className="fa fa-check-circle"></i>
//                         EMI, FD & RD Calculators
//                       </li>
//                       <li>
//                         <i className="fa fa-check-circle"></i>
//                         RBI Compliant Secure Systems
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div >
//                   <Link to="/digital-banking" className="thm-btn">
//                     Explore Digital Banking
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Company;



import React from "react";
import { Link } from "react-router-dom";

function Company() {
    return (
        <section className="dbank-section  ">
            <div className="container ">
                <div className="row align-items-center row-gutter-y-50">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-4 ">
                        <div className="dbank-content ">
                            <span className="block-title__tagline">Digital Banking</span>

                            <h2 className="dbank-title">
                                Bank Smarter with <br /> Digital Services
                            </h2>

                            <p className="dbank-text">
                                Access secure and convenient banking services<br /> anytime, anywhere.
                                Our digital platform is designed for speed, safety, and ease.
                            </p>

                            <div className="dbank-actions">
                                <Link to="/#" className="dbank-btn-primary">
                                    Explore Services
                                </Link>
                                {/* <Link to="/login" className="dbank-btn-outline">
                  Net Banking Login
                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="dbank-left-bg"> </div>
                    </div>
                    {/* RIGHT DIGITAL CARDS */}
                    <div className="col-lg-5 ">

                        <div className="dbank-cards">

                            <div className="dbank-card">
                                <i className="fa fa-globe"></i>
                                <h4>Internet Banking</h4>
                                <p>Access accounts & services online 24/7.</p>
                            </div>

                            <div className="dbank-card">
                                <i className="fa fa-mobile"></i>
                                <h4>Mobile Banking</h4>
                                <p>Manage banking anytime on your mobile.</p>
                            </div>

                            {/* <div className="dbank-card">
                <i className="fa fa-qrcode"></i>
                <h4>UPI & QR Payments</h4>
                <p>Fast, secure & instant digital payments.</p>
              </div> */}

                            <div className="dbank-card">
                                <i className="fa fa-user-plus"></i>
                                <h4>Online Account Opening</h4>
                                <p>Open your account digitally in minutes.</p>
                            </div>

                            {/* <div className="dbank-card">
                <i className="fa fa-calculator"></i>
                <h4>EMI & FD Calculator</h4>
                <p>Plan your finances with ease.</p>
              </div> */}

                            <div className="dbank-card">
                                <i class="fas fa-shield-alt"></i>

                                <h4>Secure Banking</h4>
                                <p>RBI compliant multi-layer security.</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Company;




// import React from "react";
// import { Link } from "react-router-dom";
// import phoneLady from "../../assets/images/shapes/home-payment-d.webp"; // your image

// function Company() {
//   return (
//     <section className="dbank-section">
//       <div className="container">
//         <div className="dbank-wrapper">

//           {/* LEFT CONTENT */}
//           <div className="dbank-left">
//             <h2 className="dbank-title">
//               Payments made effortless
//             </h2>

//             <p className="dbank-subtitle">
//               A simple click is what it takes now.
//             </p>

//             <div className="dbank-feature-grid">
//               <div className="dbank-feature">
//                 <i className="fa fa-file-invoice"></i>
//                 <span>Bill Payments</span>
//               </div>

//               <div className="dbank-feature">
//                 <i className="fa fa-rupee-sign"></i>
//                 <span>Digital Rupee</span>
//               </div>

//               <div className="dbank-feature">
//                 <i className="fa fa-car"></i>
//                 <span>FASTag</span>
//               </div>

//               <div className="dbank-feature">
//                 <i className="fa fa-th-large"></i>
//                 <span>View All</span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="dbank-right">
//             <img src={phoneLady} alt="Digital Banking" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Company;
