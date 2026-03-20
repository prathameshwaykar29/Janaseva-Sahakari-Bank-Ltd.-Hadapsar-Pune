import React from 'react'
import Bredcom from "../Bredcom/Main";
import MainGrouploan from './Sub-GRoup-Loan/MainGrouploan'
import GroupLoanBred from './Sub-GRoup-Loan/GroupLoanBred'
import AdsFour from '../Ads/AdsFour';

const Grouploan = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <GroupLoanBred/>
      <MainGrouploan />
      <AdsFour />
    </>
  )
}

export default Grouploan
