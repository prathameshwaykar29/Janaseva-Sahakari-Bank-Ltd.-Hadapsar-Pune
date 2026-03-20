import React from "react";
import playStoreImg from "../../assets/images/home/GP.png";
import appleStoreImg from "../../assets/images/home/apple-store-app.svg";
import playappStoreImg from "../../assets/images/home/play-store-app.svg";
const Playstore55 = () => {
    return (
        <section className="playstore-banner55 container mt-40">
            <div className="playstore-content55">
                <h4>SMART BANKING, MADE SIMPLE</h4>
                <h1>
                    NOW AVAILABLE ON <span>MOBILE</span>
                </h1>
                <p>
                    Manage your accounts, payments, and services anytime with our iOS and Android app.
                </p>


                <div className="store-buttons55">
                    <img
                        src={appleStoreImg}
                        alt="Download on App Store"
                    />
                    <img
                        src={playappStoreImg}
                        alt="Get it on Google Play"
                    />
                </div>
            </div>

            <div className="playstore-image55">
                <img
                    src={playStoreImg}
                    alt="Mobile App Preview"
                />
            </div>
        </section>
    );
};

export default Playstore55;
