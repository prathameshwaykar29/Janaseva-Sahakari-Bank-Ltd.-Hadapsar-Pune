
import React from 'react'
import Bredcom from "../Bredcom/Main";

import CashMain from './Sub-Cash-Credit-Secured-General/CashMain';
import CashBred from './Sub-Cash-Credit-Secured-General/CashBred';
import AdsSeven from '../Ads/AdsSeven';
const CashCredit = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <CashBred />
      <CashMain/>
<AdsSeven />
      
    </>
  )
}

export default CashCredit
