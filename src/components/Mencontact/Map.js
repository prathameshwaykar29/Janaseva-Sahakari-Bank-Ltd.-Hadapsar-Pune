// import React from 'react'

// function Map() {
//     return (
//         <>
//             <section className="contact-info-one">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-4 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon">
//                                     <i className="icon-telephone"></i>
//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Have any question?</p>
//                                     <a className="contact-info-one__link" href="tel:+3-(856)000-9850">+3-(856) 000-9850</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon">
//                                     <i className="icon-email"></i>
//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Write us email</p>
//                                     <a className="contact-info-one__link" href="mailto:needhelp@company.com">needhelp@company.com</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon">
//                                     <i className="icon-pin"></i>
//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Visit anytime</p>
//                                     <a className="contact-info-one__link" href="#">88 Road Broklyn New York</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Map





// import React from 'react'
// import { PiBankBold } from "react-icons/pi";
// import { GrCompliance } from "react-icons/gr";
// import { MdOutlineSecurityUpdateGood } from "react-icons/md";

// function Map() {
//     return (
//         <>
//             <section className="contact-info-one">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-3 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon bank-quick-icon">
//                                     <PiBankBold   />
//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Savings Acount</p>
//                                     {/* <a className="contact-info-one__link" href="tel:+3-(856)000-9850">+3-(856) 000-9850</a> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon bank-quick-icon">
//                                     <MdOutlineSecurityUpdateGood />
//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Internet Banking</p>
//                                     {/* <a className="contact-info-one__link" href="mailto:needhelp@company.com">needhelp@company.com</a> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon bank-quick-icon">
//                                     <GrCompliance />

//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Lodge Of Complaint</p>
//                                     {/* <a className="contact-info-one__link" href="tel:+3-(856)000-9850">+3-(856) 000-9850</a> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 col-sm-12">
//                             <div className="contact-info-one__item">
//                                 <div className="contact-info-one__icon bank-quick-icon">
//                                     <i className="icon-pin"></i>
//                                 </div>
//                                 <div className="contact-info-one__content">
//                                     <p className="contact-info-one__text">Branch & ATM Locator</p>
//                                     {/* <a className="contact-info-one__link" href="#">88 Road Broklyn New York</a> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Map


import React from 'react';
import { Link } from "react-router-dom";
import { FaCalculator } from "react-icons/fa6";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

function Map() {
  return (
    <>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">

            {/* Savings Account */}
            <div className="col-md-3 col-sm-12">
              <Link to="/#" className="bank-link">
                <div className="contact-info-one__item">
                  <div className="contact-info-one__icon bank-quick-icon">
                    <FaCalculator   />
                  </div>
                  <p className="contact-info-one__text">Emi Calculator</p>
                </div>
              </Link>
            </div>

            {/* Internet Banking */}
            <div className="col-md-3 col-sm-12">
              <Link to="/#" className="bank-link">
                <div className="contact-info-one__item">
                  <div className="contact-info-one__icon bank-quick-icon">
                    <MdOutlineSecurityUpdateGood />
                  </div>
                  <p className="contact-info-one__text">Internet Banking</p>
                </div>
              </Link>
            </div>

            {/* Lodge a Complaint */}
            <div className="col-md-3 col-sm-12">
              <Link to="/#" className="bank-link">
                <div className="contact-info-one__item">
                  <div className="contact-info-one__icon bank-quick-icon">
                    <GrCompliance />
                  </div>
                  <p className="contact-info-one__text">Lodge a Complaint</p>
                </div>
              </Link>
            </div>

            {/* Branch & ATM */}
            <div className="col-md-3 col-sm-12">
              <Link to="/#" className="bank-link">
                <div className="contact-info-one__item">
                  <div className="contact-info-one__icon bank-quick-icon">
                    <i className="icon-pin"></i>
                  </div>
                  <p className="contact-info-one__text">Branch & ATM Locator</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Map;
