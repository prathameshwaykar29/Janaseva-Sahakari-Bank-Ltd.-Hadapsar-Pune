// import React from 'react';
// import { Link } from 'react-router-dom';

// const serviceData = [
//   {
//     icon: 'icon-credit-cards',
//     title: 'Credit Repair',
//     link: '/creditrepair',
//     text: 'Lorem ipsum is free text used by neque est qui lorem.',
//   },
//   {
//     icon: 'icon-audit',
//     title: 'Credit Audit',
//     link: '/creditrepair',
//     text: 'Lorem ipsum is free text used by neque est qui lorem.',
//   },
//   {
//     icon: 'icon-portfolio',
//     title: 'Business',
//     link: '/creditrepair',
//     text: 'Lorem ipsum is free text used by neque est qui lorem.',
//   },
//   {
//     icon: 'icon-education',
//     title: 'Education',
//     link: '/creditrepair',
//     text: 'Lorem ipsum is free text used by neque est qui lorem.',
//   },
// ];

// function Offering() {
//   return (
//     <>
//       <section className="service-five pt-120 pb-120">
//         <div className="container">
//           <div className="service-five__top">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="block-title text-left">
//                   <p className="block-title__tagline">What We’re Offering</p>
//                   <h2 className="block-title__title">We provide best services for your credit</h2>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <p className="service-five__text">
//                   Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row row-gutter-y-30">
//             {serviceData.map((service, index) => (
//               <div
//                 className="col-lg-3 col-md-6 wow fadeInUp"
//                 data-wow-duration="1500ms"
//                 data-wow-delay={`${index * 100}ms`}
//                 key={index}
//               >
//                 <div className="service-card-five">
//                   <div className="service-card-five__icon">
//                     <i className={service.icon}></i>
//                   </div>
//                   <h3 className="service-card-five__title">
//                     <Link to={service.link}>{service.title}</Link>
//                   </h3>
//                   <p className="service-card-five__text">{service.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Offering;







import React from 'react';
import { Link } from 'react-router-dom';
import { PiBankBold } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa";
import { AiOutlineCalculator } from "react-icons/ai";
import { PiCoins } from "react-icons/pi";

const serviceData = [
  {
    icon: <PiBankBold />,
    title: 'Savings Account',
    link: '/savings-account',
    text: 'Secure savings account with attractive interest rates and easy access to your money.',
  },
  {
    icon: <MdBusinessCenter />,
    title: 'Current Account',
    link: '/current-account',
    text: 'Designed for businesses with high transaction needs and seamless banking services.',
  },
  {
    icon: <PiCoins />,
    title: 'Fixed Deposit',
    link: '/fixed-deposit',
    text: 'Grow your savings with assured returns and flexible tenure options.',
  },
  {
    icon: <AiOutlineCalculator />,
    title: 'Recurring Deposit',
    link: '/recurring-deposit',
    text: 'Save regularly and build wealth with small monthly investments.',
  },
];


function Offering() {
  return (
    <>
      <section className="service-five pt-80 pb-80">
        <div className="container">
          <div className="service-five__top">
            <div className="row">
              <div className="col-lg-12">
                <div className="block-title text-left">
                  <p className="block-title__tagline">Our Banking Products</p>
                  <h2 className="block-title__title">
                    Accounts & Deposit Solutions for Every Need
                  </h2>

                </div>
              </div>
              {/* <div className="col-lg-6">
                <p className="service-five__text">
                  Choose from a range of accounts and deposit options designed to help you
                  save, grow, and manage your finances with confidence.
                </p>

              </div> */}
            </div>
          </div>
          <div className="row row-gutter-y-30">
            {serviceData.map((service, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
                key={index}
              >
                <div className="service-card-five">
                  <div className="service-card-five__icon">
                    {service.icon}
                  </div>
                  <h3 className="service-card-five__title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p className="service-card-five__text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Offering;
