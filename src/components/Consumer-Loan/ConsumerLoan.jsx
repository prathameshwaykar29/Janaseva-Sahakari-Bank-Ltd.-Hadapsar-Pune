
import React from 'react'
import Bredcom from "../Bredcom/Main";
import MainConsumerloan from './Sub-Consumer-loan/MainConsumerloan';
import ConsumerloanBred from './Sub-Consumer-loan/ConsumerloanBred';
import AdsSeven from '../Ads/AdsSeven';

const ConsumerLoan = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <ConsumerloanBred />
      <MainConsumerloan/>
<AdsSeven />
      
    </>
  )
}

export default ConsumerLoan
