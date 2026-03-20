
import React from "react";
import playStoreImg from "../../assets/images/home/deposits55.png";

const Deposit55 = () => {
    return (
        <section className="credit-section55 mt-40">
            <div className="credit-banner55 container">
                <div className="credit-inner55">
                    {/* LEFT IMAGE */}


                    {/* RIGHT CONTENT */}
                    <div className="credit-right55 ">
                        {/* <span className="credit-badge55">
                            secure & transparent lending
                        </span> */}

                        <h2>
                            Deposits Made Simple<br />
                            With Secure & Steady Returns
                        </h2>

                        <p>
                            Choose from savings, fixed, and recurring deposit options with complete transparency.
                        </p>

                    </div>

                    <div className="credit-left55 credit-left5555">
                        <img src={playStoreImg} alt="Credit Card User" />
                    </div>
                </div>
                <div className="credit-bottom55 credit-bottom5555">
                    <div className="credit-bottom-inner55">
                        <div className="bottom-header55">
                            <h3>Choose the Deposit Plan That Suits You</h3>
                        </div>

                        <div className="credit-cards55 ">
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
        <div className="credit-card credit-card5555">
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <span className="arrow">›</span>
        </div>
    </a>
);

export default Deposit55;



