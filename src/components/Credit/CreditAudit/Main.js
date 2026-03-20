import React from 'react'
import Bredcom from '../../Bredcom/Main'
import About from '../Menaudit/About';
import Clint from '../../Menhome/Clint';
import Counter from '../../Menhome/Counter';
import Benefit from '../../Menhome/Benefit';
import New from '../Menaudit/New';
import Ready from '../../Menhomethree/Ready';

const CreditAudit = () => {
  return (
    <>
        <Bredcom title={"Home"} subtitle={"CREDIT AUDIT"} link={"Credit Audit"}/>
        <About/>
        <Clint/>
        <Counter/>
        <Benefit/>
        <New/>
        <Ready/>
    </>
  )
}

export default CreditAudit