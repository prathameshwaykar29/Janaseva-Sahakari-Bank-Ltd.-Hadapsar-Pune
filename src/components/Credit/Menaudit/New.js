import React from 'react';
import { Link } from 'react-router-dom';

function New() {
    const imageBoxes = [
        {
            imgSrc: "assets/images/resources/info-1-1.png",
            title: "Credit auditing",
            link: "/creditaudit",
            text: "There are many variations of passages of lorem ipsum available the majority have alteration in some form by injected humour."
        },
        {
            imgSrc: "assets/images/resources/info-1-2.png",
            title: "Credit consulting",
            link: "/contact",
            text: "There are many variations of passages of lorem ipsum available the majority have alteration in some form by injected humour."
        },
        {
            imgSrc: "assets/images/resources/info-1-3.png",
            title: "Credit repairing",
            link: "/creditrepair",
            text: "There are many variations of passages of lorem ipsum available the majority have alteration in some form by injected humour."
        }
    ];

    return (
        <>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-30">
                        {imageBoxes.map((box, index) => (
                            <div className="col-lg-4 col-md-12" key={index}>
                                <div className="image-box">
                                    <img src={box.imgSrc} alt="" />
                                    <h3 className="image-box__title">
                                        <Link to={box.link}>{box.title}</Link>
                                    </h3>
                                    <p className="image-box__text">{box.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default New;
