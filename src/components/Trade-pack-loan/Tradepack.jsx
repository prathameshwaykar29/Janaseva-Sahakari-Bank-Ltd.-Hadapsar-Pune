
import React from 'react'
import Bredcom from "../Bredcom/Main";

import TradepackBred from './Sub-Tradepack/TradepackBred';
import TradepackMain from './Sub-Tradepack/TradepackMain';
import AdsTwo from '../Ads/AdsTwo';

const Tradepack = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <TradepackBred />
      <TradepackMain/>
<AdsTwo />
      
    </>
  )
}

export default Tradepack
