import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import tst1 from '../../../assets/images/resources/testi-1-1.png'
import tst2 from '../../../assets/images/resources/testi-1-2.png'
import tst3 from '../../../assets/images/resources/testi-1-3.png'

SwiperCore.use([Navigation]);

function Testimonials() {

    const sliderOptions = {
        navigation: {
            nextEl: '.testimonials-two__btn__right',
            prevEl: '.testimonials-two__btn__left',

        }
    }

    return (
        <>
            <section className="testimonials-two pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">our testimonials</p>
                                <h2 className="block-title__title">What they’re talking about company</h2>
                            </div>

                            <div className="testimonials-two__btn">
                                <button className="testimonials-two__btn__left">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                                <button className="testimonials-two__btn__right">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="testimonials-two__carousel">
                                <Swiper prevE1=".testimonials-two__btn__left" nextE1=".testimonials-two__btn__right" {...sliderOptions} slidesPerView={2} centeredSlides= {false} >
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst1} alt="Delia Riley" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst2} alt="Essie Perez" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst3} alt="Dustin Dunn" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst1} alt="Delia Riley" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst2} alt="Essie Perez" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst3} alt="Dustin Dunn" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst1} alt="Delia Riley" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst2} alt="Essie Perez" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src={tst3} alt="Dustin Dunn" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials




// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Testimonials() {
//   const [activeTab, setActiveTab] = useState("loans");

//   const tabData = {
//     loans: [
//       { title: "Home Loan", text: "Low interest housing loans.", link: "/loans/home", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//       { title: "Personal Loan", text: "Instant personal finance.", link: "/loans/personal", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "Business Loan", text: "Support your business growth.", link: "/loans/business", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//       { title: "Personal Loan", text: "Instant personal finance.", link: "/loans/personal", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "Business Loan", text: "Support your business growth.", link: "/loans/business", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" }
//     ],
//     deposits: [
//       { title: "Fixed Deposit", text: "Secure long-term returns.", link: "/fd", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//       { title: "Recurring Deposit", text: "Monthly saving solutions.", link: "/rd", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" },
//       { title: "Senior Citizen FD", text: "Higher interest benefits.", link: "/senior-fd", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//     ],
//     insurance: [
//       { title: "Life Insurance", text: "Protect your loved ones.", link: "/life-insurance", img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f" },
//       { title: "Health Insurance", text: "Medical coverage for family.", link: "/health-insurance", img: "https://images.unsplash.com/photo-1588776814546-0e28deff1b0f" },
//       { title: "Vehicle Insurance", text: "Secure your vehicle.", link: "/vehicle-insurance", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" }
//     ],
//     cards: [
//       { title: "Debit Cards", text: "Safe digital payments.", link: "/debit-card", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//       { title: "UPI Services", text: "Fast & secure payments.", link: "/upi", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "QR Payments", text: "Scan & pay anywhere.", link: "/qr", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" }
//     ]
//   };

//   return (
//     <section className="bank-left-grid-tabs pt-120 pb-120">
//       <div className="container">
//         <div className="row justify-content-center mb-60">
//           <div className="col-lg-8 text-center">
//             <span className="bank-tabs-tag">Our Products</span>
//             <h2 className="bank-tabs-title">Smart Banking for a Digital India</h2>
//           </div>
//         </div>

//         <div className="row">
//           {/* LEFT TABS */}
//           <div className="col-lg-3">
//             <div className="vertical-tabs-nav">
//               {Object.keys(tabData).map((tab) => (
//                 <button
//                   key={tab}
//                   className={activeTab === tab ? "v-tab active" : "v-tab"}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT GRID CARDS */}
//           <div className="col-lg-9">
//             <div className="tab-cards-grid row">
//               {tabData[activeTab].map((item, idx) => (
//                 <div key={idx} className="col-md-6 col-lg-4 mb-4">
//                   <div className="tab-card">
//                     <div className="tab-card-image">
//                       <img src={item.img} alt={item.title} />
//                     </div>
//                     <div className="tab-card-content">
//                       <h4>{item.title}</h4>
//                       <p>{item.text}</p>
//                       <Link to={item.link}>Know More →</Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Testimonials() {
//   const [activeTab, setActiveTab] = useState("loans");

//   const tabData = {
//     loans: [
//       { title: "Home Loan", text: "Low interest housing loans.", link: "/loans/home", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//       { title: "Personal Loan", text: "Instant personal finance.", link: "/loans/personal", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "Business Loan", text: "Support your business growth.", link: "/loans/business", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" }
//     ],
//     deposits: [
//       { title: "Fixed Deposit", text: "Secure long-term returns.", link: "/fd", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//       { title: "Recurring Deposit", text: "Monthly saving solutions.", link: "/rd", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" },
//       { title: "Senior Citizen FD", text: "Higher interest benefits.", link: "/senior-fd", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//     ],
//     insurance: [
//       { title: "Life Insurance", text: "Protect your loved ones.", link: "/life-insurance", img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f" },
//       { title: "Health Insurance", text: "Medical coverage for family.", link: "/health-insurance", img: "https://images.unsplash.com/photo-1588776814546-0e28deff1b0f" },
//       { title: "Vehicle Insurance", text: "Secure your vehicle.", link: "/vehicle-insurance", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" }
//     ],
//     cards: [
//       { title: "Debit Cards", text: "Safe digital payments.", link: "/debit-card", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//       { title: "UPI Services", text: "Fast & secure payments.", link: "/upi", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "QR Payments", text: "Scan & pay anywhere.", link: "/qr", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//       { title: "Credit Cards", text: "Rewards and cashback.", link: "/credit-card", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//       { title: "Prepaid Cards", text: "Easy payments anytime.", link: "/prepaid-card", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//     ]
//   };

//   const useSlider = tabData[activeTab].length > 4;

//   return (
//     <section className="bank-left-grid-tabs pt-120 pb-120">
//       <div className="container">
//         <div className="row justify-content-center mb-60">
//           <div className="col-lg-8 text-center">
//             <span className="bank-tabs-tag">Our Products</span>
//             <h2 className="bank-tabs-title">Smart Banking for a Digital India</h2>
//           </div>
//         </div>

//         <div className="row">
//           {/* LEFT TABS */}
//           <div className="col-lg-3">
//             <div className="vertical-tabs-nav d-flex flex-column gap-3">
//               {Object.keys(tabData).map((tab) => (
//                 <button
//                   key={tab}
//                   className={activeTab === tab ? "v-tab active" : "v-tab"}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT GRID OR AUTO-SCROLL SLIDER */}
//           <div className="col-lg-9">
//             {useSlider ? (
//               <div className="auto-slider">
//                 {tabData[activeTab].map((item, idx) => (
//                   <div key={idx} className="tab-card">
//                     <div className="tab-card-image">
//                       <img src={item.img} alt={item.title} />
//                     </div>
//                     <div className="tab-card-content">
//                       <h4>{item.title}</h4>
//                       <p>{item.text}</p>
//                       <Link to={item.link}>Know More →</Link>
//                     </div>
//                   </div>
//                 ))}
//                 {/* duplicate for smooth loop */}
//                 {tabData[activeTab].map((item, idx) => (
//                   <div key={`dup-${idx}`} className="tab-card">
//                     <div className="tab-card-image">
//                       <img src={item.img} alt={item.title} />
//                     </div>
//                     <div className="tab-card-content">
//                       <h4>{item.title}</h4>
//                       <p>{item.text}</p>
//                       <Link to={item.link}>Know More →</Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="tab-cards-grid row">
//                 {tabData[activeTab].map((item, idx) => (
//                   <div key={idx} className="col-md-6 col-lg-4 mb-4">
//                     <div className="tab-card">
//                       <div className="tab-card-image">
//                         <img src={item.img} alt={item.title} />
//                       </div>
//                       <div className="tab-card-content">
//                         <h4>{item.title}</h4>
//                         <p>{item.text}</p>
//                         <Link to={item.link}>Know More →</Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Testimonials() {
//   const [activeTab, setActiveTab] = useState("loans");

//   const tabData = {
//     loans: [
//       { title: "Home Loan", text: "Low interest housing loans.", link: "/loans/home", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//       { title: "Personal Loan", text: "Instant personal finance.", link: "/loans/personal", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "Business Loan", text: "Support your business growth.", link: "/loans/business", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//       { title: "Education Loan", text: "Finance your studies.", link: "/loans/education", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" },
//       { title: "Gold Loan", text: "Quick gold-backed loans.", link: "/loans/gold", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" }
//     ],
//     deposits: [
//       { title: "Fixed Deposit", text: "Secure long-term returns.", link: "/fd", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//       { title: "Recurring Deposit", text: "Monthly saving solutions.", link: "/rd", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" },
//       { title: "Senior Citizen FD", text: "Higher interest benefits.", link: "/senior-fd", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//     ],
//     insurance: [
//       { title: "Life Insurance", text: "Protect your loved ones.", link: "/life-insurance", img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f" },
//       { title: "Health Insurance", text: "Medical coverage for family.", link: "/health-insurance", img: "https://images.unsplash.com/photo-1588776814546-0e28deff1b0f" },
//       { title: "Vehicle Insurance", text: "Secure your vehicle.", link: "/vehicle-insurance", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" }
//     ],
//     cards: [
//       { title: "Debit Cards", text: "Safe digital payments.", link: "/debit-card", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//       { title: "UPI Services", text: "Fast & secure payments.", link: "/upi", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "QR Payments", text: "Scan & pay anywhere.", link: "/qr", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//       { title: "Credit Cards", text: "Rewards and cashback.", link: "/credit-card", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//       { title: "Prepaid Cards", text: "Easy payments anytime.", link: "/prepaid-card", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//     ]
//   };

//   const useAutoScroll = tabData[activeTab].length > 4;


//   return (
//     <section className="bank-left-grid-tabs pt-120 pb-120">
//       <div className="container">
//         <div className="row justify-content-center mb-60">
//           <div className="col-lg-8 text-center">
//             <span className="bank-tabs-tag">Our Products</span>
//             <h2 className="bank-tabs-title">Smart Banking for a Digital India</h2>
//           </div>
//         </div>

//         <div className="row">
//           {/* LEFT TABS */}
//           <div className="col-lg-3">
//             <div className="vertical-tabs-nav">
//               {Object.keys(tabData).map((tab) => (
//                 <button
//                   key={tab}
//                   className={activeTab === tab ? "v-tab active" : "v-tab"}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT GRID or Auto-scroll */}
//           <div className="col-lg-9">
//             {useAutoScroll ? (
//               <div className="auto-scroll-wrapper">
//                 <div className="auto-scroll-track">
//                   {tabData[activeTab].map((item, idx) => (
//                     <div className="tab-card" key={idx}>
//                       <div className="tab-card-image">
//                         <img src={item.img} alt={item.title} />
//                       </div>
//                       <div className="tab-card-content">
//                         <h4>{item.title}</h4>
//                         <p>{item.text}</p>
//                         <Link to={item.link}>Know More →</Link>
//                       </div>
//                     </div>
//                   ))}
//                   {/* Duplicate items for smooth infinite scroll */}
//                   {tabData[activeTab].map((item, idx) => (
//                     <div className="tab-card" key={"dup-" + idx}>
//                       <div className="tab-card-image">
//                         <img src={item.img} alt={item.title} />
//                       </div>
//                       <div className="tab-card-content">
//                         <h4>{item.title}</h4>
//                         <p>{item.text}</p>
//                         <Link to={item.link}>Know More →</Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <div className="tab-cards-grid row">
//                 {tabData[activeTab].map((item, idx) => (
//                   <div key={idx} className="col-md-6 col-lg-4 mb-4">
//                     <div className="tab-card">
//                       <div className="tab-card-image">
//                         <img src={item.img} alt={item.title} />
//                       </div>
//                       <div className="tab-card-content">
//                         <h4>{item.title}</h4>
//                         <p>{item.text}</p>
//                         <Link to={item.link}>Know More →</Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiArrowRight, FiCreditCard, FiUser, FiShield } from "react-icons/fi";

// export default function Testimonials() {
//     const [activeTab, setActiveTab] = useState("loans");
//     const tabIcons = {
//         loans: <FiCreditCard />,
//         deposits: <FiUser />,
//         insurance: <FiShield />,
//         cards: <FiUser />  // or any icon you like
//     };

//     const tabData = {
//         loans: [
//             { title: "Home Loan", text: "Low interest housing loans.", link: "/loans/home", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//             { title: "Personal Loan", text: "Instant personal finance.", link: "/loans/personal", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//             { title: "Business Loan", text: "Support your business growth.", link: "/loans/business", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//             { title: "Education Loan", text: "Finance your studies.", link: "/loans/education", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//             { title: "Gold Loan", text: "Quick gold-backed loans.", link: "/loans/gold", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" }
//         ],
//         deposits: [
//             { title: "Fixed Deposit", text: "Secure long-term returns.", link: "/fd", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//             { title: "Recurring Deposit", text: "Monthly saving solutions.", link: "/rd", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//             { title: "Senior Citizen FD", text: "Higher interest benefits.", link: "/senior-fd", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" }
//         ],
//         insurance: [
//             { title: "Life Insurance", text: "Protect your loved ones.", link: "/life-insurance", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//             { title: "Health Insurance", text: "Medical coverage for family.", link: "/health-insurance", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//             { title: "Vehicle Insurance", text: "Secure your vehicle.", link: "/vehicle-insurance", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" }
//         ],
//         cards: [
//             { title: "Debit Cards", text: "Safe digital payments.", link: "/debit-card", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//             { title: "UPI Services", text: "Fast & secure payments.", link: "/upi", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//             { title: "QR Payments", text: "Scan & pay anywhere.", link: "/qr", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//             { title: "Credit Cards", text: "Rewards and cashback.", link: "/credit-card", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//             { title: "Prepaid Cards", text: "Easy payments anytime.", link: "/prepaid-card", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//         ]
//     };

//     const useAutoScroll = tabData[activeTab].length > 4;

//     return (
//         <section className="bank-left-grid-tabs pt-80 pb-80">
//             <div className="container">
//                 <div className="row justify-content-center mb-60">
//                     <div className="col-lg-8 text-center">
//                         <span className="block-title__tagline">Our Products</span>
//                         <h2 className="bank-tabs-title">Smart Banking for a Digital India</h2>
//                     </div>
//                 </div>

//                 <div className="row">
//                     {/* LEFT TABS */}
//                     <div className="col-lg-3">
//                         <div className="vertical-tabs-nav">
//                             {/* {Object.keys(tabData).map((tab) => (
//                                 <button
//                                     key={tab}
//                                     className={`v-tab ${activeTab === tab ? "active" : ""}`}
//                                     onClick={() => setActiveTab(tab)}
//                                 >
//                                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                                 </button>
//                             ))} */}
//                             {Object.keys(tabData).map((tab) => (
//                                 <button
//                                     key={tab}
//                                     className={`v-tab ${activeTab === tab ? "active" : ""}`}
//                                     onClick={() => setActiveTab(tab)}
//                                 >
//                                     <span className="tab-icon">{tabIcons[tab]}</span>
//                                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                                     <span className="tab-arrow"><FiArrowRight /></span>
//                                 </button>
//                             ))}

//                         </div>
//                     </div>

//                     {/* RIGHT AUTO-SCROLL CARDS */}
//                     <div className="col-lg-9">
//                         <div className="auto-scroll-wrapper">
//                             <div className="auto-scroll-track">
//                                 {tabData[activeTab].map((item, idx) => (
//                                     <div className="tab-card" key={idx}>
//                                         <div className="tab-card-image">
//                                             <img src={item.img} alt={item.title} />
//                                         </div>
//                                         <div className="tab-card-content">
//                                             <h4>{item.title}</h4>
//                                             <p>{item.text}</p>
//                                             <Link to={item.link}>Know More →</Link>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 {/* Always duplicate to maintain layout */}
//                                 {tabData[activeTab].map((item, idx) => (
//                                     <div className="tab-card" key={"dup-" + idx}>
//                                         <div className="tab-card-image">
//                                             <img src={item.img} alt={item.title} />
//                                         </div>
//                                         <div className="tab-card-content">
//                                             <h4>{item.title}</h4>
//                                             <p>{item.text}</p>
//                                             <Link to={item.link}>Know More →</Link>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </section>
//     );



// }












// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Testimonials() {
//   const [activeTab, setActiveTab] = useState("loans");

//   const tabData = {
//     loans: [
//       { title: "Home Loan", text: "Low interest housing loans.", link: "/loans/home", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc" },
//       { title: "Personal Loan", text: "Instant personal finance.", link: "/loans/personal", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad" },
//       { title: "Business Loan", text: "Support your business growth.", link: "/loans/business", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
//       { title: "Education Loan", text: "Finance your studies.", link: "/loans/education", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" },
//       { title: "Gold Loan", text: "Quick gold-backed loans.", link: "/loans/gold", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" }
//     ],
//     deposits: [
//       { title: "Fixed Deposit", text: "Secure long-term returns.", link: "/fd", img: "https://images.unsplash.com/photo-1581092580493-173db44eae26" },
//       { title: "Recurring Deposit", text: "Monthly saving solutions.", link: "/rd", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" },
//       { title: "Senior Citizen FD", text: "Higher interest benefits.", link: "/senior-fd", img: "https://images.unsplash.com/photo-1600181951897-230c5c58e8fa" }
//     ],
//     insurance: [
//       { title: "Life Insurance", text: "Protect your loved ones.", link: "/life-insurance", img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f" },
//       { title: "Health Insurance", text: "Medical coverage for family.", link: "/health-insurance", img: "https://images.unsplash.com/photo-1588776814546-0e28deff1b0f" },
//       { title: "Vehicle Insurance", text: "Secure your vehicle.", link: "/vehicle-insurance", img: "https://images.unsplash.com/photo-1594007658872-12e3f2bc69b6" }
//     ]
//   };

//   const cards = tabData[activeTab];
//   const useScroll = cards.length > 4;

//   // Duplicate cards to fill the row for seamless scroll
//   const duplicatedCards = [...cards, ...cards];

//   return (
//     <section className="bank-horizontal-tabs pt-120 pb-120">
//       <div className="container">
//         <div className="text-center mb-60">
//           <span className="bank-tabs-tag">Our Products</span>
//           <h2 className="bank-tabs-title">Smart Banking for a Digital India</h2>
//         </div>

//         {/* Horizontal Tabs */}
//         <div className="horizontal-tabs-nav mb-4">
//           {Object.keys(tabData).map((tab) => (
//             <button
//               key={tab}
//               className={`h-tab ${activeTab === tab ? "active" : ""}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Cards Row */}
//         <div className={`tab-cards-grid ${useScroll ? "auto-scroll" : ""}`}>
//           {duplicatedCards.map((item, idx) => (
//             <div className="tab-card" key={idx}>
//               <div className="tab-card-image">
//                 <img src={item.img} alt={item.title} />
//               </div>
//               <div className="tab-card-content">
//                 <h4>{item.title}</h4>
//                 <p>{item.text}</p>
//                 <Link to={item.link}>Know More →</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











// import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
// import { Link } from "react-router-dom";
// import 'swiper/css';
// import 'swiper/css/navigation';

// import tst1 from '../../../assets/images/home/recuring.png'
// import tst2 from '../../../assets/images/home/saving-account.png'
// import tst3 from '../../../assets/images/home/fixed-deposits.png'
// import tst4 from '../../../assets/images/home/current-account.png'
// import tst5 from '../../../assets/images/home/home-loan.png'
// import tst6 from '../../../assets/images/home/education-loan.png'
// import tst7 from '../../../assets/images/home/gold-loan.png'
// import tst8 from '../../../assets/images/home/hosiptal.png'
// import tst9 from '../../../assets/images/home/general.png'
// import tst10 from '../../../assets/images/home/life-insurance.png'
// import tst11 from '../../../assets/images/home/health-insurance.png'
// import tst12 from '../../../assets/images/home/deposits-interest-rate.png'
// import tst13 from '../../../assets/images/home/Loan-Interest-Rate.png'

// SwiperCore.use([Navigation]);

// function Testimonials() {

//     const [activeTab, setActiveTab] = useState("customers");

//     const testimonialsData = {
//         customers: [
//             { img: tst1, name: "Recurring Deposits", text: "Earn great returns safely with our safe and flexible recurring deposits today.", link: "/#" },
//             { img: tst2, name: "Saving Account", text: "Keep your money secure while earning interest every single month.", link: "/#" },
//             { img: tst3, name: "Fixed Deposits", text: "Lock your funds securely and effortlessly, and get higher interest rates easily right now.", link: "/#" },
//             { img: tst4, name: "Current Account", text: "Manage daily transactions efficiently with our reliable current account service.", link: "/#" }
//         ],
//         corporate: [
//             { img: tst5, name: "Home Loan", text: "Finance your dream home with affordable interest rates and support.", link: "/#" },
//             { img: tst6, name: "Educational Loan", text: "Get funds for education with simple, easy repayment options suitable for students.", link: "/#" },
//             { img: tst7, name: "Gold Loan", text: "Get instant cash securely by using your gold as collateral with minimal hassle involved.", link: "/#" },
//             { img: tst8, name: "Hospital Loan", text: "Cover medical expenses quickly with flexible hospital loan options available.", link: "/#" }
//         ],
//         partners: [
//             { img: tst9, name: "General Insurance", text: "Protect your assets with our affordable general insurance plans today.", link: "/#" },
//             { img: tst10, name: "Life Insurance", text: "Ensure your family's future with comprehensive life insurance coverage now.", link: "/#" },
//             { img: tst11, name: "Health Insurance", text: "Stay healthy and financially secure with our reliable health insurance coverage.", link: "/#" }
//         ],
//         top: [
//             { img: tst12, name: "Deposit Interest Rate", text: "Check out our latest deposit interest rates for all accounts.", link: "/#" },
//             { img: tst13, name: "Loan Interest Rate", text: "Compare our loan interest rates and choose the best option.", link: "/#" }
//         ]

//     };

//     const sliderOptions = {
//         navigation: {
//             nextEl: '.testimonials-two__btn__right',
//             prevEl: '.testimonials-two__btn__left',
//         }
//     };

//     return (
//         <>
//             <section className="testimonials-two pt-120 pb-120">
//                 <div className="container">
//                     <div className="row">

//                         {/* HEADER */}
//                         <div className="col-lg-12 col-md-12">

//                             <div className="block-title text-left">
//                                 <p className="block-title__tagline">our testimonials</p>
//                                 <h2 className="block-title__title">
//                                     Banking Solutions tailor-made for you
//                                 </h2>
//                             </div>

//                         </div>

//                         {/* LEFT VERTICAL TABS */}
//                         <div className="col-lg-4 col-md-12 ">

//                             <div className="testimonials-two__btn">
//                                 <button className="testimonials-two__btn__left">
//                                     <i className="fa fa-angle-left"></i>
//                                 </button>
//                                 <button className="testimonials-two__btn__right">
//                                     <i className="fa fa-angle-right"></i>
//                                 </button>
//                             </div>
//                             <div className="testimonial-tabs mt-20">
//                                 <button
//                                     className={`testimonial-tab ${activeTab === "customers" ? "active" : ""}`}
//                                     onClick={() => setActiveTab("customers")}
//                                 >
//                                     <i className="fa fa-users"></i>
//                                     <span>Deposits</span>
//                                 </button>

//                                 <button
//                                     className={`testimonial-tab ${activeTab === "corporate" ? "active" : ""}`}
//                                     onClick={() => setActiveTab("corporate")}
//                                 >
//                                     <i className="fa fa-building"></i>
//                                     <span>Loans</span>
//                                 </button>

//                                 <button
//                                     className={`testimonial-tab ${activeTab === "partners" ? "active" : ""}`}
//                                     onClick={() => setActiveTab("partners")}
//                                 >
//                                     <i className="fa fa-briefcase"></i>
//                                     <span>Insurance</span>
//                                 </button>

//                                 <button
//                                     className={`testimonial-tab ${activeTab === "top" ? "active" : ""}`}
//                                     onClick={() => setActiveTab("top")}
//                                 >
//                                     <i className="fa fa-star"></i>
//                                     <span>Interest Rate</span>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* RIGHT TESTIMONIAL SLIDER */}
//                         <div className="col-lg-8 col-md-12">
//                             <div className="testimonials-two__carousel">
//                                 <Swiper
//                                     {...sliderOptions}
//                                     slidesPerView={2}
//                                     spaceBetween={30}
//                                 >
//                                     {testimonialsData[activeTab].map((item, index) => (
//                                         <SwiperSlide className="item" key={index}>
//                                             <Link to={item.link} className="testimonial-card__link-wrapper">
//                                                 <div className="testimonial-card">
//                                                     <div className="testimonial-card__info">
//                                                         <div className="testimonial-card__image">
//                                                             <img src={item.img} alt={item.name} />
//                                                         </div>
//                                                         <div className="testimonial-card__meta">
//                                                             <h3 className="testimonial-card__name">{item.name}</h3>
//                                                         </div>
//                                                     </div>
//                                                     <span className="testimonial-card__line"></span>
//                                                     <div className="testimonial-card__text">
//                                                         <p>{item.text}</p>
//                                                         <span className="testimonial-card__link">More Detail</span>
//                                                     </div>
//                                                 </div>
//                                             </Link>

//                                         </SwiperSlide>

//                                     ))}
//                                 </Swiper>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Testimonials;
