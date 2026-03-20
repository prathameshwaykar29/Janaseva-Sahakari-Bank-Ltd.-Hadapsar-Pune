




import React from 'react'
import Bredcom from "../Bredcom/Main";
import MainsectionNew from './Sub-new-Vehicle/MainsectionNew';
import MainNewBredcom from './Sub-new-Vehicle/MainNewBred';
import AdsSix from '../Ads/AdsSix';
const NewCommercial = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <MainNewBredcom />
      <MainsectionNew/>
<AdsSix />
      
    </>
  )
}

export default NewCommercial
