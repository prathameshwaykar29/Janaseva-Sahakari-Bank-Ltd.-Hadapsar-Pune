import React from 'react'
import Bredcom from "../Bredcom/Main";
import MobileBanking from './MobileBanking'

const Mobile = () => {
  return (
    <>
            <Bredcom title={"Home"} subtitle={"Mobile banking"} link={"Mobile banking"} />
            <MobileBanking/>
        </>
  )
}

export default Mobile
