import React from 'react'
import Bredcom from "../Bredcom/Main";
import JanContact from './JanContact';
import ContactShort from './ContactShort';

const Contactjan = () => {
  return (
   <>
      <Bredcom
        title={"Home"}
        subtitle={"Contact Us"}
        link={"Contact Us"}
      />
     
     <JanContact/>
     <ContactShort />
    </>
  )
}

export default Contactjan
