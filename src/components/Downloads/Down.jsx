
import React from 'react'
import Bredcom from "../Bredcom/Main";
import Downloadspdf from './Downloadspdf';

const Down = () => {
  return (
    <>
            <Bredcom title={"Home"} subtitle={"Downloads"} link={"Downloads"} />
            <Downloadspdf/>
        </>
  )
}

export default Down
