import React from 'react'
import AnimatedNumber from "animated-number-react"
import benefit01 from '../../assets/images/resources/benefit-2-111.png'
import benefit02 from '../../assets/images/resources/benefit-2-211.png'


function Benefits() {
    return (
        <>
            <section className="benefit-two ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="benefit-two__image">
                                <img src={benefit01} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="benefit-two__content">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">our benefits</p>
                                    <h2 className="block-title__title">Benefits of better credit score and restoration</h2>
                                </div>
                                <div className="benefit-two__tab tabs-box">
                                    <ul className="list-unstyled benefit-two__tab__title tab-btns tab-buttons">
                                        <li className="tab-btn  active-btn" data-tab="#repair">
                                            <span>Credit repairs</span>
                                        </li>
                                        <li className="tab-btn" data-tab="#audit">
                                            <span>Credit audit</span>
                                        </li>
                                        <li className="tab-btn" data-tab="#credit">
                                            <span>New credit</span>
                                        </li>
                                    </ul>
                                    <div className="benefit-two__tab__content tabs-content">
                                        <div className="benefit-two__tab__content__inner tab active-tab" id="repair">
                                            <p>There are many variations of passages of but the majority have in some form, by
                                                injected humou or words which don't look even slightly believable of but the
                                                majority have suffered.</p>
                                            <div className="benefit-two__tab__content__box">
                                                <div className="benefit-two__tab__content__box__image">
                                                    <img src={benefit02} alt="" />
                                                </div>
                                                <div className="benefit-two__tab__content__box__content">
                                                    <ul className="list-unstyled ml-0 about-two__list">
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Nsectetur cing elit
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Suspe ndisse suscipit sagittis leo.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Entum estibulum digni posuere.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Lorem Ipsum on the tend to repeat
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="benefit-two__tab__content__inner tab" id="audit">
                                            <p>There are many variations of passages of but the majority have in some form, by
                                                injected humou or words which don't look even slightly believable of but the
                                                majority have suffered.</p>
                                            <div className="benefit-two__tab__content__box">
                                                <div className="benefit-two__tab__content__box__image">
                                                    <img src={benefit02} alt="" />
                                                </div>
                                                <div className="benefit-two__tab__content__box__content">
                                                    <ul className="list-unstyled ml-0 about-two__list">
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Nsectetur cing elit
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Suspe ndisse suscipit sagittis leo.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Entum estibulum digni posuere.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Lorem Ipsum on the tend to repeat
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="benefit-two__tab__content__inner tab" id="credit">
                                            <p>There are many variations of passages of but the majority have in some form, by
                                                injected humou or words which don't look even slightly believable of but the
                                                majority have suffered.</p>
                                            <div className="benefit-two__tab__content__box">
                                                <div className="benefit-two__tab__content__box__image">
                                                    <img src={benefit02} alt="" />
                                                </div>
                                                <div className="benefit-two__tab__content__box__content">
                                                    <ul className="list-unstyled ml-0 about-two__list">
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Nsectetur cing elit
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Suspe ndisse suscipit sagittis leo.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Entum estibulum digni posuere.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-arrow-circle-right"></i>
                                                            Lorem Ipsum on the tend to repeat
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="benefit-two__fact">
                                    <div className="benefit-two__fact__icon">
                                        <i className="icon-credibility"></i>
                                    </div>
                                    <div className="benefit-two__fact__content">
                                        <div className="benefit-two__fact__title">
                                            <span className="odometer" data-count="6,800"><AnimatedNumber value={6800} duration={5000} formatValue={(v) => Math.round(v)} /></span>
                                        </div>
                                        <p className="benefit-two__fact__text">Successfully credit repaired</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits