import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../assets/images/blog/blog-1-144.png'
import Blog2 from '../../assets/images/blog/blog-1-244.png'
import Blog3 from '../../assets/images/blog/blog-1-344.png'


function Ourtwo() {
    return (
        <>
            <section className="blog-two pt-120 pb-120">
                <div className="container">
                    <div className="block-title text-center">
                        <p className="block-title__tagline">What We’re Offering</p>
                        <h2 className="block-title__title">Our latest news updates <br /> & articles</h2>
                    </div>
                    <div className="row row-gutter-y-30">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog1} alt="Which growth strategies you should adopt" />
                                    <Link to="/newsdetails"></Link>
                                </div>
                                <div className="blog-card__content">
                                    <div className="blog-card__meta">
                                        <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                        <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                    </div>
                                    <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                    <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                    <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog2} alt="Which growth strategies you should adopt" />
                                    <Link to="/newsdetails"></Link>
                                </div>
                                <div className="blog-card__content">
                                    <div className="blog-card__meta">
                                        <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                        <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                    </div>
                                    <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                    <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                    <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog3} alt="Which growth strategies you should adopt" />
                                    <Link to="/newsdetails"></Link>
                                </div>
                                <div className="blog-card__content">
                                    <div className="blog-card__meta">
                                        <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                        <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                    </div>
                                    <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                    <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                    <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Ourtwo