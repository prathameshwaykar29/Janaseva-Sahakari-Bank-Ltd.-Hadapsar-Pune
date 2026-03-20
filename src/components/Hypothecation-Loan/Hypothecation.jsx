import React from 'react'
import Bredcom from "../Bredcom/Main";
import HypothecationBred from './Sub-Hypothecation/HypothecationBred';
import HypothecationMain from './Sub-Hypothecation/HypothecationMain';
import AdsEight from '../Ads/AdsEight';

const Hypothecation = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <HypothecationBred />
      <HypothecationMain/>
<AdsEight />
      
    </>
  )
}

export default Hypothecation
