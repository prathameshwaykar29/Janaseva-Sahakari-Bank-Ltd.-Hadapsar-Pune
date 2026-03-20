import React from 'react'
import { Link } from 'react-router-dom'
import Abt03 from '../../../assets/images/resources/about-3-1.png'

function Repair() {
    return (
        <>
            <section className="about-three text-center pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-three__image mb-60 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <img src={Abt03} alt="" />
                            </div>
                            <div className="about-three__content">
                                <div className="block-title text-center">
                                    <p className="block-title__tagline">our introduction</p>
                                    <h2 className="block-title__title">Are you ready to get <br /> credit repair services?</h2>
                                </div>
                                <p className="about-three__text mt--10">Proin aliquet sagittis ex quis ultricies. Suspendisse a felis
                                    euismod, faucibus sem nec, porta
                                    velit. Aliquam facilisis, ligula vitae ultrices dapibus, nibh lacus aliquam mi, vel facilisis
                                    purus dolor vulputate urna. Morbi viverra imperdiet arcu, sit amet suscipit enim vehicula sed.
                                    Ut varius leo et dolor pharetra mollis. Proin cursus eros id aliquam euismod. Sed erat arcu,
                                    iaculis pellentesque ultrices sed. Suspendisse quis nibh lorem.</p>
                                <div className="about-three__btns mt-40">
                                    <Link to="#" className="thm-btn thm-btn--dark-hover">Let’s Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Repair