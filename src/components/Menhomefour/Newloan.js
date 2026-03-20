


import React from "react";
import playStoreImg from "../../assets/images/home/loan-approved.png";

const Newloan = () => {
    return (
        <section className="credit-section">
            <div className="credit-banner">
                <div className="credit-inner">
                    {/* LEFT IMAGE */}


                    {/* RIGHT CONTENT */}
                    <div className="credit-right">
                        <span className="credit-badge">
                            secure & transparent lending
                        </span>

                        <h2>
                            Loans Made Simple <br />
                            With Better Interest Rates
                        </h2>

                        <p>
                            Choose from gold, home, and business loans with complete transparency.
                        </p>
                    </div>

                    <div className="credit-left">
                        <img src={playStoreImg} alt="Credit Card User" />
                    </div>
                </div>
                <div className="credit-bottom">
                    <div className="credit-bottom-inner">
                        <div className="bottom-header">
                            <h3>Choose the Loan That Fits Your Needs</h3>
                        </div>

                        <div className="credit-cards">
                            <Card title="Gold Loan" desc="Instant loan against gold" />
                            <Card title="Business Loan" desc="Grow your business with ease" />
                            <Card title="Home Loan" desc="Low EMI housing finance" />
                            <Card title="Personal Loan" desc="Quick funds for your needs" />
                        </div>

                    </div>
                </div>
            </div>

            {/* OVERLAPPING WHITE BOX */}

        </section>
    );
};

const Card = ({ title, desc }) => (
    <div className="credit-card">
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <span className="arrow">›</span>
    </div>
);

export default Newloan;



