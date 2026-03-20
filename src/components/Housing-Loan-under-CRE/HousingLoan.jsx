
import React from 'react'
import Bredcom from "../Bredcom/Main";
import CREBred from './Sub-Housing-Loan-under-CRE/CREBred';
import Maincre from './Sub-Housing-Loan-under-CRE/Maincre';
import AdsTwo from '../Ads/AdsTwo';

const HousingLoan = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <CREBred />
      <Maincre/>
<AdsTwo/>
      
    </>
  )
}

export default HousingLoan
