
import React from "react";
import playStoreImg from "../../assets/images/home/deposits55.png";

const Newdeposit = () => {
    return (
        <section className="credit-section">
            <div className="credit-banner">
                <div className="credit-inner">
                    {/* LEFT IMAGE */}


                    {/* RIGHT CONTENT */}
                    <div className="credit-right">
                        <span className="credit-badge55">
                            secure & transparent lending
                        </span>
                        <h2>
                            Deposits Made Simple<br />
                            With Secure & Steady Returns
                        </h2>

                        <p>
                            Choose from savings, fixed, and recurring deposit options with complete transparency.
                        </p>
                    </div>

                    <div className="credit-left credit-left44">
                        <img src={playStoreImg} alt="Credit Card User" />
                    </div>
                </div>
                <div className="credit-bottom">
                    <div className="credit-bottom-inner">
                        <div className="bottom-header">
                             <h3>Choose the Deposit Plan That Suits You</h3>
                        </div>

                        <div className="credit-cards">
                           <Card
                                title="Savings Account"
                                desc="Safe and flexible banking..."
                                link="/#"
                            />
                            <Card
                                title="Current Account"
                                desc="Business banking..."
                                link="/#"
                            />

                            <Card
                                title="Fixed Deposit"
                                desc="Safe guaranteed returns..."
                                link="/#"
                            />

                            <Card
                                title="Recurring Deposit"
                                desc="Easy monthly savings..."
                                link="/#"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* OVERLAPPING WHITE BOX */}

        </section>
    );
};

const Card = ({ title, desc, link }) => (
     <a href={link} className="credit-card-link">
    <div className="credit-card">
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <span className="arrow">›</span>
    </div>
    </a>
);

export default Newdeposit;



