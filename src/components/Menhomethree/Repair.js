import React from 'react';
import { Link } from 'react-router-dom';

const workProcessSteps = [
  {
    icon: 'icon-select',
    title: 'Review reports',
    text: 'Lorem Ipsum is simply free dumy text of the printing and amet piscing',
  },
  {
    icon: 'icon-settings',
    title: 'Fix errors',
    text: 'Lorem Ipsum is simply free dumy text of the printing and amet piscing',
  },
  {
    icon: 'icon-bill',
    title: 'Pay your bills',
    text: 'Lorem Ipsum is simply free dumy text of the printing and amet piscing',
  },
  {
    icon: 'icon-growth',
    title: 'Watch progress',
    text: 'Lorem Ipsum is simply free dumy text of the printing and amet piscing',
  },
];

const Repair = () => {
  return (
    <>
      <section className="work-process pb-120">
        <div className="work-process__shape-1"></div>
        <div className="work-process__shape-2"></div>
        <div className="work-process__shape-3"></div>
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">Work process</p>
            <h2 className="block-title__title">Credit repair works in 4 eas <br /> simple steps</h2>
          </div>
          <div className="row row-gutter-y-30">
            {workProcessSteps.map((step, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
                key={index}
              >
                <div className="work-process__item">
                  <div className="work-process__icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="work-process__title">
                    <Link to="#">{step.title}</Link>
                  </h3>
                  <p className="work-process__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Repair;
