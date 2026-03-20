// import React from "react";

// const deposits = [
//   {
//     title: "Fixed Deposit",
//     desc: "Safe investment with assured returns",
//     rate: "Up to 8.5% p.a",
//   },
//   {
//     title: "Recurring Deposit",
//     desc: "Monthly savings with steady growth",
//     rate: "Up to 7.5% p.a",
//   },
//   {
//     title: "Senior Citizen Deposit",
//     desc: "Higher interest for senior citizens",
//     rate: "Up to 9.0% p.a",
//   },
//   {
//     title: "Tax Saving Deposit",
//     desc: "Save tax under Section 80C",
//     rate: "Up to 7.0% p.a",
//   },
// ];

// const Depositshome = () => {
//   return (
//     <section className="deposit-wrap">
//       <div className="deposit-layout">
        
//         {/* LEFT CONTENT */}
//         <div className="deposit-info">
//           <span className="deposit-tag">Secure Deposits</span>
//           <h2>Smart Deposit Plans for Every Goal</h2>
//           <p>
//             Choose from flexible deposit schemes with guaranteed returns and
//             complete security.
//           </p>
//         </div>

//         {/* RIGHT LIST */}
//         <div className="deposit-list">
//           {deposits.map((item, index) => (
//             <div className="deposit-item" key={index}>
//               <div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//               <span className="deposit-rate">{item.rate}</span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Depositshome;




// import React from "react";
// import depositImg from "../../assets/images/home/loan-approved.png"; // add your image

// const deposits = [
//   {
//     title: "Fixed Deposit",
//     desc: "Safe investment with assured returns",
//     rate: "Up to 8.5% p.a",
//   },
//   {
//     title: "Recurring Deposit",
//     desc: "Monthly savings with steady growth",
//     rate: "Up to 7.5% p.a",
//   },
//   {
//     title: "Senior Citizen Deposit",
//     desc: "Higher interest for senior citizens",
//     rate: "Up to 9.0% p.a",
//   },
//   {
//     title: "Tax Saving Deposit",
//     desc: "Save tax under Section 80C",
//     rate: "Up to 7.0% p.a",
//   },
// ];

// const Depositshome = () => {
//   return (
//     <section className="deposit-wrap">
//       <div className="deposit-layout">

//         {/* LEFT SIDE */}
//         <div className="deposit-info">
//           <span className="deposit-tag">Secure Deposits</span>
//           <h2>Smart Deposit Plans for Every Goal</h2>
//           <p>
//             Choose from flexible deposit schemes with guaranteed returns and
//             complete security.
//           </p>

//           {/* IMAGE */}
//           <div className="deposit-image">
//             <img src={depositImg} alt="Deposits Illustration" />
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="deposit-list">
//           {deposits.map((item, index) => (
//             <div className="deposit-item" key={index}>
//               <div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//               <span className="deposit-rate">{item.rate}</span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Depositshome;




import React from "react";
import depositImg from "../../assets/images/home/insurance-home.png";

const leftCards = [
  {
    title: "Axis Max Life Insurance",
    rate: "Trusted life insurance solutions",
    link: "/#"
  },
  {
    title: "HDFC Life Insurance",
    rate: "Flexible life coverage plans",
    link: "/#"
  },
  {
    title: "United India Insurance",
    rate: "Comprehensive general insurance coverage",
    link: "/#"
  }
];

const rightCards = [
  {
    title: "Care Health Insurance",
    rate: "Reliable health insurance plans",
    link: "/#"
  },
  {
    title: "ICICI Lombard General Insurance",
    rate: "Complete general insurance solutions",
    link: "/#"
  },
  {
    title: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    rate: "Affordable government life insurance",
    link: "/#"
  }
];
const Depositshome = () => {
  return (
    <section className="deposit-orbit">
      <div className="deposit-wrapper">

        {/* <div className="deposit-header"> */}
        <div className="deposit-header">
          <h2>Reliable Insurance Solutions</h2>
          <p>
            Choose trusted life, health, and general insurance solutions for complete peace of mind.
          </p>
        </div>

        <div className="deposit-layout">

          {/* LEFT CARDS */}
          <div className="deposit-column55">
  {leftCards.map((item, i) => (
    <a
      key={i}
      href={item.link}
      rel="noopener noreferrer"
      className="deposit-card-link55"
    >
      <div className="deposit-mini55">
        <h4>{item.title}</h4>
        <span>{item.rate}</span>
      </div>
    </a>
  ))}
</div>

          {/* CENTER IMAGE */}
          <div className="deposit-center-image">
            <img src={depositImg} alt="Deposit Illustration" />
          </div>

          {/* RIGHT CARDS */}
          <div className="deposit-column55">
            {rightCards.map((item, i) => (
              <a
                key={i}
                href={item.link}
                rel="noopener noreferrer"
                className="deposit-card-link55"
              >
                <div className="deposit-mini55" key={i}>
                  <h4>{item.title}</h4>
                  <span>{item.rate}</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Depositshome;
