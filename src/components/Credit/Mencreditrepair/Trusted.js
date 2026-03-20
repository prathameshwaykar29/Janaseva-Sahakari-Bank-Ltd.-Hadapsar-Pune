import React from 'react'
import { Link } from 'react-router-dom'
import rs01 from '../../../assets/images/resources/image-2-1.png'
import rs02 from '../../../assets/images/resources/image-2-2.png'

function Trusted() {
    return (
        <>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-50">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                            <div className="image-box-two">
                                <div className="image-box-two__image">
                                    <img src={rs01} alt="" />
                                </div>
                                <div className="image-box-two__content  mt-30">
                                    <h3 className="image-box-two__title">
                                        <Link to="#">We’re trusted leaders in credit repairing</Link>
                                    </h3>
                                    <p className="image-box-two__text mt-20">There are many variations of passages of lorem ipsum
                                        available
                                        the majority have suffered alteration in some form by injected humour. Duis aute irure dolor
                                        lipsum is simply free text available.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                            <div className="image-box-two">
                                <div className="image-box-two__image">
                                    <img src={rs02} alt="" />
                                </div>
                                <div className="image-box-two__content mt-30">
                                    <h3 className="image-box-two__title">
                                        <Link to="#">Discover our credit repair & restoration works</Link>
                                    </h3>
                                    <p className="image-box-two__text  mt-20">There are many variations of passages of lorem ipsum
                                        available
                                        the majority have suffered alteration in some form by injected humour. Duis aute irure dolor
                                        lipsum is simply free text available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trusted