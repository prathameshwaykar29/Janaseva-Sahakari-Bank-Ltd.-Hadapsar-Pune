import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    image: 'assets/images/team/team-1-1.jpg',
    name: 'Connor Estrada',
    designation: 'ADVISOR',
  },
  {
    image: 'assets/images/team/team-1-2.jpg',
    name: 'Darrell Powell',
    designation: 'ADVISOR',
  },
  {
    image: 'assets/images/team/team-1-3.jpg',
    name: 'Carolyn Love',
    designation: 'ADVISOR',
  },
];

const Meet = () => {
  return (
    <>
      <section className="team-about pt-120 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">professional team</p>
            <h2 className="block-title__title">Meet the highly qualified <br /> team members</h2>
          </div>
          <div className="row row-gutter-y-30">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
                key={index}>
                <div className="team-card">
                  <div className="team-card__image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-card__social">
                      <Link to="#"><i className="fab fa-twitter"></i></Link>
                      <Link to="#"><i className="fab fa-facebook"></i></Link>
                      <Link to="#"><i className="fab fa-pinterest"></i></Link>
                      <Link to="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="team-card__content">
                    <div className="team-card__content__inner">
                      <h3 className="team-card__title">
                        <Link to="/teamdetails">{member.name}</Link>
                      </h3>
                      <p className="team-card__designation">{member.designation}</p>
                    </div>
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

export default Meet;
