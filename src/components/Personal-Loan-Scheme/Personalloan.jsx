
import React from 'react'
import Bredcom from "../Bredcom/Main";
import MainPersonalloan from './Sub-Personal-Loan/MainPersonalloan';
import PersonalBred from './Sub-Personal-Loan/PersonalBred';
import AdsThree from '../Ads/AdsThree';

const Personalloan = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <PersonalBred />
      <MainPersonalloan/>
<AdsThree/>
      
    </>
  )
}

export default Personalloan
