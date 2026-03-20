import React from 'react';
import { Link } from 'react-router-dom';

function Loan() {
  const services = [
    {
      icon: 'icon-bill',
      title: 'Quick cash loan',
      text: 'Lorem ipsum is simply dolor sit am adipi we help.',
      link: '/#'
    },
    {
      icon: 'icon-select',
      title: 'Easy online application',
      text: 'Lorem ipsum is simply dolor sit am adipi we help.',
      link: '/#'
    },
    {
      icon: 'icon-growth',
      title: 'Credit scores',
      text: 'Lorem ipsum is simply dolor sit am adipi we help.',
      link: '/#'
    }
  ];

  return (
    <>
      <section className="service-four">
        <div className="container">
          <div className="service-four__inner wow fadeInUp" data-wow-duration="1500ms">
            <div className="row row-gutter-x-0">
              {services.map((service, index) => (
                <div className="col-lg-4 col-md-12" key={index}>
                  <div className="service-card-four">
                    <div className="service-card-four__icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="service-card-four__title">
                      <Link to={service.link}>{service.title}</Link>
                    </h3>
                    <p className="service-card-four__text">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loan;
