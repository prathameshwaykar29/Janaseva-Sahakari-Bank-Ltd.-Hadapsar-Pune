
import React from 'react'
import Bredcom from "../Bredcom/Main";
import ATMService from './ATMService';

const ATM = () => {
  return (
    <>
            <Bredcom title={"Home"} subtitle={"ATM Service"} link={"Mobile Service"} />
            <ATMService/>
        </>
  )
}

export default ATM
