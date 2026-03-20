import React from 'react'
import Abt06 from '../../assets/images/resources/about-6-1111.png'
import Abt62 from '../../assets/images/resources/about-6-211.png'

function Credit() {
  return (
    <>
        <section className="about-six pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-60">
                    <div className="col-lg-6">
                        <div className="about-six__image">
                            <img src={Abt06} alt="" />
                            <div className="about-six__image__caption wow fadeInRight" data-wow-duration="1500ms">
                                <h4 className="about-six__image__caption__year count-box">
                                    <span className="count-text" data-stop="20" data-speed="1500"></span>
                                </h4>
                                <p className="about-six__image__caption__text">Years of
                                    practicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-six__content">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">About Company</p>
                                <h2 className="block-title__title">We repair & improve your credit scores</h2>
                            </div>
                            <ul className="list-unstyled about-six__list">
                                <li>
                                    <i className="fa fa-check-circle"></i>
                                    Credit repairing
                                </li>
                                <li>
                                    <i className="fa fa-check-circle"></i>
                                    Credit consulting
                                </li>
                            </ul>
                            <h3 className="about-six__subtitle">Duis irure dolor lipsum is simply free text available.</h3>
                            
                            <p className="about-six__text">There are many variations of passages of lorem ipsum available the
                                majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum
                                is simply free text available.</p>
                            <div className="about-six__author">
                                <div className="about-six__author__image">
                                    <img src={Abt62} alt="" />
                                </div>
                                <div className="about-six__author__name">
                                    Kevin Martin
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

export default Credit