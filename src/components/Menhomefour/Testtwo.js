import React from 'react'
import { Link } from 'react-router-dom'

function Testtwo() {

    const testimonials = [
        {
          image: 'assets/images/resources/testi-1-1.png',
          name: 'Delia Riley',
          designation: 'Finance Manager',
          stars: [1, 2, 3, 4, 5],
          text:
            'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.',
        },
        {
          image: 'assets/images/resources/testi-1-2.png',
          name: 'Essie Perez',
          designation: 'Finance Manager',
          stars: [1, 2, 3, 4, 5],
          text:
            'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.',
        },
        {
          image: 'assets/images/resources/testi-1-3.png',
          name: 'Dustin Dunn',
          designation: 'Finance Manager',
          stars: [1, 2, 3, 4, 5],
          text:
            'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.',
        },
      ];

    return (
        <>
            <section className="call-to-action-four text-center wow fadeInUp" data-wow-duration="1500ms">
                <div className="container">
                    <div className="call-to-action-four__inner">
                        <div className="call-to-action-four__shape-1"></div>
                        <div className="call-to-action-four__shape-2"></div>
                        <p className="call-to-action-four__text">
                            We will customize a loan based on the amount of cash you need.
                            <Link to="/contact">Contact Now</Link>
                        </p>
                    </div>
                </div>
            </section>

             <section className="testimonials-one pt-120 pb-120">
                <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">our testimonials</p>
                    <h2 className="block-title__title">
                    What they’re talking about <br /> our company
                    </h2>
                </div>
                <div className="row row-gutter-y-30">
                    {testimonials.map((testimonial, index) => (
                    <div
                        className="col-lg-4 col-md-12 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay={`${index * 100}ms`}
                        key={index}
                    >
                        <div className="testimonial-card">
                        <div className="testimonial-card__info">
                            <div className="testimonial-card__image">
                            <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <div className="testimonial-card__meta">
                            <div className="testimonial-card__stars">
                                {testimonial.stars.map((_, starIndex) => (
                                <i className="fa fa-star" key={starIndex}></i>
                                ))}
                            </div>
                            <h3 className="testimonial-card__name">
                                {testimonial.name}
                            </h3>
                            <p className="testimonial-card__designation">
                                {testimonial.designation}
                            </p>
                            </div>
                        </div>
                        <span className="testimonial-card__line"></span>
                        <div className="testimonial-card__text">
                            <p>{testimonial.text}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}

export default Testtwo