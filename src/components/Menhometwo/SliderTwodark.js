// import BGSLI1 from '../../assets/images/backgrounds/slider-2-166.png'
// import BGSLI2 from '../../assets/images/backgrounds/slider-2-266.png'
// import { Link } from 'react-router-dom'
// import React, { useRef } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';

// SwiperCore.use([Navigation]);

// function Slidertwo() {

//     const carouselRef = useRef()

//     const sliderOptionsOne = {
//         navigation: {
//             nextEl: '.slider-one__carousel__btn__left',
//             prevEl: '.slider-one__carousel__btn__right',
//         }

//     }

//     return (
//         <>
//             <section className="slider-one slider-one--two">
//                 <Swiper prevE1=".slider-one__carousel__btn__right" nextE1=".slider-one__carousel__btn__left"  navigation={sliderOptionsOne.navigation} {...sliderOptionsOne}  >
//                     <SwiperSlide className="item">
//                         <div className="slider-one__item">
//                             <div className="slider-one__image" style={{ backgroundImage: `url(${BGSLI1})` }}>
//                             </div>
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         {/* <p className="slider-one__tagline">Simple & Secure</p> */}
//                                         <h2 className="slider-one__title">Quick Loan
//                                             For <span>Everyone</span></h2>
//                                         <p className="slider-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis
//                                             non risus.</p>
//                                         {/* <div className="slider-one__btns">
//                                             <Link to="/#" className="thm-btn thm-btn--dark-hover">Apply For Loan</Link>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide className="item">
//                         <div className="slider-one__item">
//                             <div className="slider-one__image" style={{ backgroundImage: `url(${BGSLI2})` }}>
//                             </div>
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         <p className="slider-one__tagline">Simple & Secure</p>
//                                         <h2 className="slider-one__title">Quick Loan
//                                             For <span>Everyone</span></h2>
//                                         <p className="slider-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis
//                                             non risus.</p>
//                                         <div className="slider-one__btns">
//                                             <Link to="/#" className="thm-btn thm-btn--dark-hover">Apply For Loan</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//                 <div className="slider-one__carousel__btn">
//                     <button className="slider-one__carousel__btn__left" onClick={() => carouselRef.current.next()}>
//                         <i className="fa fa-angle-left"></i>
//                     </button>
//                     <button className="slider-one__carousel__btn__right" onClick={() => carouselRef.current.prev()}>
//                         <i className="fa fa-angle-right"></i>
//                     </button>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Slidertwo










// import BGSLI1 from '../../assets/images/backgrounds/slider-2-166.png'
// import BGSLI2 from '../../assets/images/backgrounds/slider-2-266.png'
import BGSLI1 from '../../assets/images/backgrounds/banner-dark-1.jpg'
import BGSLI2 from '../../assets/images/backgrounds/banner-dark-2.jpg'
// import { Link } from 'react-router-dom'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

function Slidertwodark() {

    const carouselRef = useRef()

    const sliderOptionsOne = {
        navigation: {
            nextEl: '.slider-one__carousel__btn__left',
            prevEl: '.slider-one__carousel__btn__right',
        }

    }

    return (
        <>
            <section className="slider-one slider-one--two">
                <Swiper prevE1=".slider-one__carousel__btn__right" nextE1=".slider-one__carousel__btn__left" navigation={sliderOptionsOne.navigation} {...sliderOptionsOne}  >
                    <SwiperSlide className="item">
                        <div className="slider-one__item">
                            <div className="slider-one__image" style={{ backgroundImage: `url(${BGSLI1})` }}>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/* <p className="slider-one__tagline">Simple & Secure</p> */}
                                        {/* <h2 className="slider-one__title">Quick Loan
                                            For <span>Everyone</span></h2> */}
                                        {/* <h3 className="slider-one__title">
                                            Reliable Deposit Services
                                        </h3>
                                        <p className="slider-one__text">
                                            Secure deposit schemes offering peace of mind and steady growth.
                                        </p> */}

                                        {/* <div className="slider-one__btns">
                                            <Link to="/#" className="thm-btn thm-btn--dark-hover">Apply For Loan</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="slider-one__item">
                            <div className="slider-one__image" style={{ backgroundImage: `url(${BGSLI2})` }}>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/* <p className="slider-one__tagline">Simple & Secure</p>
                                        <h2 className="slider-one__title">Quick Loan
                                            For <span>Everyone</span></h2> */}
                                        {/* <h3 className="slider-one__title">
                                            Trusted Banking Solutions
                                        </h3>
                                        <p className="slider-one__text">
                                            Experience safe, convenient, and paperless banking services anytime, anywhere.
                                        </p> */}

                                        {/* <div className="slider-one__btns">
                                            <Link to="/#" className="thm-btn thm-btn--dark-hover">Apply For Loan</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-one__carousel__btn">
                    <button className="slider-one__carousel__btn__left" onClick={() => carouselRef.current.next()}>
                        <i className="fa fa-angle-left"></i>
                    </button>
                    <button className="slider-one__carousel__btn__right" onClick={() => carouselRef.current.prev()}>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Slidertwodark