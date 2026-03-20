import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

function We() {

    const sliderCard = {
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            576: {
                margin: 30,
                items: 1
            },
            768: {
                margin: 30,
                items: 2
            },
            992: {
                margin: 30,
                items: 3
            },
            1200: {
                margin: 30,
                items: 4
            }
        },
    }
    return (
        <>
            <section className="service-three pt-120 pb-120">
                <div className="container">
                    <div className="service-three__top">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">What We’re Offering</p>
                                    <h2 className="block-title__title">We provide best services for your loans </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="service-three__top__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non
                                    risus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.</p>

                            </div>
                        </div>
                    </div>
                    <Swiper className=''  {...sliderCard} slidesPerView={3.8} spaceBetween={30}>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-car"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Auto Car Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>
                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-diamond"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Wedding Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-house"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Property Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-briefcase"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Business Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-car"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Auto Car Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>
                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-diamond"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Wedding Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-house"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Property Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-briefcase"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Business Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-car"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Auto Car Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>
                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-diamond"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Wedding Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-house"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Property Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="service-card-three">
                                <div className="service-card-three__inner">
                                    <div className="service-card-three__icon">
                                        <i className="icon-briefcase"></i>
                                    </div>
                                    <h3 className="service-card-three__title">
                                        <Link to="/servicedetails">Business Loan</Link>
                                    </h3>
                                    <p className="service-card-three__text">Car Loan provide low interest many variations of passages of
                                        lorem ipsum have some.</p>

                                </div>
                                <Link to="/servicedetails" className="service-card-three__link">
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
        </>
    )
}

export default We