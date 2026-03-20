import React from 'react'
import { Link } from 'react-router-dom'
import Blog01 from '../../../assets/images/blog/blog-1-144.png'
import Blog02 from '../../../assets/images/blog/blog-1-244.png'
import Blog03 from '../../../assets/images/blog/blog-1-344.png'
import Blog04 from '../../../assets/images/blog/blog-1-144.png'
import Blog05 from '../../../assets/images/blog/blog-1-244.png'
import Blog06 from '../../../assets/images/blog/blog-1-344.png'


function First() {
    return (
        <>
            <section className="blog-grid pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-30">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog01} alt="Which growth strategies you should adopt" />
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
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog02} alt="Which growth strategies you should adopt" />
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
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog03} alt="Which growth strategies you should adopt" />
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
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog04} alt="Which growth strategies you should adopt" />
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
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog05} alt="Which growth strategies you should adopt" />
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
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <div className="blog-card__date"><span>05</span> Mar</div>
                                    <img src={Blog06} alt="Which growth strategies you should adopt" />
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

export default First