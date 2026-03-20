
import React from 'react'
import Bredcom from "../Bredcom/Main";
import TwoWheelerBred from './Sub-TwoWheelerLoan/TwoWheelerBred';
import MaintwoWheeler from './Sub-TwoWheelerLoan/MaintwoWheeler';
import AdsFour from '../Ads/AdsFour';

const TwoWheelerLoan = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <TwoWheelerBred />
      <MaintwoWheeler/>
<AdsFour />
      
    </>
  )
}

export default TwoWheelerLoan
