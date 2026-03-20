import React from 'react';
import Abts01 from '../../assets/images/resources/about-1-1444.png'

function Trusted() {
  const boxes = [
    {
      icon: 'icon-money-transfer',
      title: 'International banking & finance',
      text: 'Nullam mollis elit quis dus is lacinia not efficitur',
    },
    {
      icon: 'icon-bank-transfer',
      title: 'International banking & finance',
      text: 'Nullam mollis elit quis dus is lacinia not efficitur',
    },
  ];

  return (
    <section className="about-one pt-80 pb-120">
      <div className="container">
        <div className="row row-gutter-y-80">
          <div className="col-lg-6">
            <div className="about-one__content">
              <div className="block-title text-left">
                <p className="block-title__tagline">About Company</p>
                <h2 className="block-title__title">
                  We’re Trusted leaders in credit auditing
                </h2>
              </div>
              <p className="about-one__text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="row row-gutter-y-20">
                {boxes.map((box, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="about-one__box">
                      <div className="about-one__box__icon">
                        <i className={box.icon}></i>
                      </div>
                      <div className="about-one__box__content">
                        <h3 className="about-one__box__title">{box.title}</h3>
                        <p className="about-one__box__text">{box.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-one__image">
              <img src={Abts01} alt="" />
              <div className="about-one__image__caption">
                <span>We're provide best facility for / wishes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
