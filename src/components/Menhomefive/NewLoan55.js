
import React from "react";
import playStoreImg from "../../assets/images/home/loan-approved.png";

const Newloan55 = () => {
    return (
        <section className="credit-section55 mt-40">
            <div className="credit-banner55 container">
                <div className="credit-inner55">
                    {/* LEFT IMAGE */}


                    {/* RIGHT CONTENT */}
                    <div className="credit-right55">
                        {/* <span className="credit-badge55">
                            secure & transparent lending
                        </span> */}

                        <h2>
                            Loans Made Simple 
                            With Better Interest Rates
                        </h2>

                        <p>
                            Choose from gold, home, and business loans with complete transparency.
                        </p>
                    </div>

                    <div className="credit-left55">
                        <img src={playStoreImg} alt="Credit Card User" />
                    </div>
                </div>
                <div className="credit-bottom55">
                    <div className="credit-bottom-inner55">
                        <div className="bottom-header55">
                            <h3>Choose the Loan That Fits Your Needs</h3>
                        </div>

                        <div className="credit-cards55">
                            <Card title="Gold Loan" desc="Instant loan against gold" />
                            <Card title="Business Loan" desc="Expand Business" />
                            <Card title="Home Loan" desc="Low EMI housing finance" />
                            <Card title="Personal Loan" desc="Meet Expenses" />
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

export default Newloan55;



