import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import resource01 from '../../assets/images/resources/testi-1-1.png'
import resources02 from '../../assets/images/resources/testi-3-b-133.png'

function Talking() {

    const sliderTestimonial = {
        loop: true,
        items: 1,
        navText: ["<span class='slider-one__carousel__btn__left'></span>", "<span class='slider-one__carousel__btn__left'></span>"],
        margin: 0,
        dots: true,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false
    }

    return (
        <>
            <section className="testimonials-three">
                <div className="testimonials-three__shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonials-three__content">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">our testimonials</p>
                                    <h2 className="block-title__title">What they are talking about our company</h2>
                                </div>
                                <div className="testimonials-three__carousel">
                                    <div className="testimonials-three__carousel__line"></div>
                                    <Slider className="test-slider" {...sliderTestimonial} slidesPerView={1} spaceBetween={0} >
                                        <div className="item col-4">
                                            <div className="testimonial-card-two">
                                                <div className="testimonial-card-two__content">
                                                    <div className="testimonial-card-two__icon">
                                                        <i className="icon-quotes"></i>
                                                    </div>
                                                    <div className="testimonial-card-two__text">I loved the customer service you guys
                                                        provided me. That was very nice and patient with questions I had. I would
                                                        really like definitely come back here. Thank you for yours service.</div>
                                                </div>
                                                <div className="testimonial-card__info">
                                                    <div className="testimonial-card__image">
                                                        <img src={resource01} alt="@@title" />
                                                    </div>
                                                    <div className="testimonial-card__meta">
                                                        <div className="testimonial-card__stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <h3 className="testimonial-card__name">Kevin martin</h3>
                                                        <p className="testimonial-card__designation">Finance Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item col-4">
                                            <div className="testimonial-card-two">
                                                <div className="testimonial-card-two__content">
                                                    <div className="testimonial-card-two__icon">
                                                        <i className="icon-quotes"></i>
                                                    </div>
                                                    <div className="testimonial-card-two__text">I loved the customer service you guys
                                                        provided me. That was very nice and patient with questions I had. I would
                                                        really like definitely come back here. Thank you for yours service.</div>

                                                </div>
                                                <div className="testimonial-card__info">
                                                    <div className="testimonial-card__image">
                                                        <img src={resource01} alt="@@title" />
                                                    </div>
                                                    <div className="testimonial-card__meta">
                                                        <div className="testimonial-card__stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <h3 className="testimonial-card__name">Kevin martin</h3>
                                                        <p className="testimonial-card__designation">Finance Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item col-4">
                                            <div className="testimonial-card-two">
                                                <div className="testimonial-card-two__content">
                                                    <div className="testimonial-card-two__icon">
                                                        <i className="icon-quotes"></i>
                                                    </div>
                                                    <div className="testimonial-card-two__text">I loved the customer service you guys
                                                        provided me. That was very nice and patient with questions I had. I would
                                                        really like definitely come back here. Thank you for yours service.
                                                    </div>
                                                </div>
                                                <div className="testimonial-card__info">
                                                    <div className="testimonial-card__image">
                                                        <img src={resource01} alt="@@title" />
                                                    </div>
                                                    <div className="testimonial-card__meta">
                                                        <div className="testimonial-card__stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <h3 className="testimonial-card__name">Kevin martin</h3>
                                                        <p className="testimonial-card__designation">Finance Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="testimonials-three__image">
                                <img src={resources02} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Talking