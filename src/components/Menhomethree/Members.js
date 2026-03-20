import React from 'react';
import { Link } from 'react-router-dom';
import BGBL21 from '../../assets/images/blog/blog-2-100.png';
import BGBL22 from '../../assets/images/blog/blog-2-200.png';
import BGBL23 from '../../assets/images/blog/blog-2-300.png';

const blogCardsData = [
  {
    image: BGBL21,
    user: 'Admin',
    comments: '2 Comments',
    title: 'Better changing to grow business faster',
  },
  {
    image: BGBL22,
    user: 'Admin',
    comments: '2 Comments',
    title: 'Better changing to grow business faster',
  },
  {
    image: BGBL23,
    user: 'Admin',
    comments: '2 Comments',
    title: 'Better changing to grow business faster',
  },
];

const Members = () => {
  return (
    <>
      <section className="blog-three pb-120">
        <div className="container">
          <div className="blog-three__top">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-title text-left">
                  <p className="block-title__tagline">professional team</p>
                  <h2 className="block-title__title">Meet the highly qualified <br /> team members</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-three__btns">
                  <Link to="newsdetails" className="thm-btn">View All News</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-gutter-y-30">
            {blogCardsData.map((card, index) => (
              <div className="col-lg-4 col-md-12" key={index}>
                <div className="blog-card-two">
                  <div className="blog-card-two__image" style={{ backgroundImage: `url(${card.image})` }}></div>
                  <div className="blog-card-two__content">
                    <div className="blog-card__meta">
                      <Link to="newsdetails"><i className="far fa-user-circle"></i> by {card.user}</Link>
                      <Link to="newsdetails"><i className="far fa-comments"></i> {card.comments}</Link>
                    </div>
                    <h3 className="blog-card-two__title"><Link to="newsdetails">{card.title}</Link></h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
