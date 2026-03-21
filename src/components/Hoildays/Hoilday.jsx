import React from 'react'
import Bredcom from "../Bredcom/Main";
import Hoildayscalendar from './Hoildayscalendar';
const Hoilday = () => {
  return (
    <>
        <Bredcom title={"Home"} subtitle={"Hoildays"} link={"Bank Holidays"}/>
        <Hoildayscalendar/>
    </>
  )
}

export default Hoilday
