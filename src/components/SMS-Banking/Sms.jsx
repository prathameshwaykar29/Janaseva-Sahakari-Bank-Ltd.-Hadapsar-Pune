
import React from 'react'
import Bredcom from "../Bredcom/Main";
import SMSBanking from './SMSBanking';

const Sms = () => {
  return (
    <>
            <Bredcom title={"Home"} subtitle={"SMS banking"} link={"SMS banking"} />
            <SMSBanking/>
        </>
  )
}

export default Sms
