import React from 'react'
import Bredcom from "../Bredcom/Main";
import EventPhoto from './EventPhoto';

const Eventspage = () => {
  return (
    <>
            <Bredcom title={"Home"} subtitle={"Events"} link={"Events"} />
            <EventPhoto/>
        </>
  )
}

export default Eventspage
