
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



const Insurance55 = () => {
  return (
    <section className="deposit-orbit55 mt-40">
      <div className="deposit-wrapper55 container">

        {/* <div className="deposit-header"> */}
        <div className="deposit-header55">
          <h2>Reliable Insurance Solutions</h2>
          <p>
            Choose trusted life, health, and general insurance solutions for complete peace of mind.
          </p>
        </div>

        <div className="deposit-layout55">

          {/* LEFT CARDS */}
          {/* <div className="deposit-column55">
            {leftCards.map((item, i) => (
              <div className="deposit-mini55" key={i}>
                <h4>{item.title}</h4>
                <span>{item.rate}</span>
              </div>
            ))}
          </div> */}
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
          <div className="deposit-center-image55">
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

export default Insurance55;
