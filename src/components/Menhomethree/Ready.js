
import BGCta1 from '../../assets/images/backgrounds/cta-1-100.jpg'
import { Link }from 'react-router-dom'
import React from 'react'

function Ready() {
  return (
    <>
         <section className="call-to-action-one call-to-action-one--has-bottom-margin">
            <div className="container">
                <div className="call-to-action-one__inner wow fadeInUp" data-wow-duration="1500ms">
                    <div className="call-to-action-one__bg" style={{ backgroundImage: `url(${BGCta1})`}}></div>
                    
                    <h3 className="call-to-action-one__title">
                        Are you ready to get your Car Loan approved quickly?

                    </h3>
                    <div className="call-to-action-one__btns">
                        <Link to="/#" className="thm-btn">Apply now</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Ready