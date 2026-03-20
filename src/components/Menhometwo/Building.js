import React, { useRef } from 'react'
import BGVImg1 from '../../assets/images/backgrounds/video-bg-1-144.jpg'
import { Link } from 'react-router-dom'

function Building() {
    
    const activeRef = useRef(null);

  return (
    <>
        <section className="call-to-action-three" ref={activeRef} style={{ backgroundImage: `url(${BGVImg1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="call-to-action-three__title">Building a brighter financial future for you</h3>

                            <div className="call-to-action-three__btns mt-50">
                                <Link to="/about" className="thm-btn">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Building