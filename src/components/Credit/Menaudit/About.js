import React from 'react'
import Abt1 from '../../../assets/images/resources/about-1-1.png'

function About() {
    return (
        <>
            <section className="about-one pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">About Company</p>
                                    <h2 className="block-title__title">We’re Trusted leaders in credit auditing</h2>
                                </div>
                                <p className="about-one__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.</p>
                                <div className="row row-gutter-y-20">
                                    <div className="col-md-6">
                                        <div className="about-one__box">
                                            <div className="about-one__box__icon">
                                                <i className="icon-money-transfer"></i>
                                            </div>
                                            <div className="about-one__box__content">
                                                <h3 className="about-one__box__title">International banking
                                                    & finance</h3>
                                                <p className="about-one__box__text">Nullam mollis elit quis dus is lacinia not efficitur
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-one__box">
                                            <div className="about-one__box__icon">
                                                <i className="icon-bank-transfer"></i>
                                            </div>
                                            <div className="about-one__box__content">
                                                <h3 className="about-one__box__title">International banking
                                                    & finance</h3>
                                                <p className="about-one__box__text">Nullam mollis elit quis dus is lacinia not efficitur
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__image">
                                <img src={Abt1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About