
import React from 'react'
import Bredcom from "../Bredcom/Main";
import LoanRate from './LoanRate';
const LoanInterestRate = () => {
  return (
    <>
        <Bredcom title={"Home"} subtitle={"Loan Interest Rate"} link={"Official Rate Chart"}/>
        <LoanRate/>
    </>
  )
}

export default LoanInterestRate
