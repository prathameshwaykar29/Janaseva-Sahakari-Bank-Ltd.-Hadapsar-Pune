import React from 'react'
import BOMData from './BOMData'
import Bredcom from "../Bredcom/Main";
const BOM = () => {
  return (
    <>
        <Bredcom title={"Home"} subtitle={"Board Of Management"} link={"Board Of Management"}/>
        <BOMData/>
    </>
  )
}

export default BOM
