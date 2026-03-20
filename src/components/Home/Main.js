import React, { useState } from "react";
import Firstslider from "../Menhome/Firstslider";
// import Company from "../Menhome/Company";
import Company from '../Menhometwo/Company'
import Safe from "../Menhome/Safe";
import Video from "../Menhome/Video";
import Clint from "../Menhome/Clint";
import Slidertwo from '../Menhometwo/Slidertwo'
import What from "../Menhome/What";
import Calcuter from "../Menhome/Calcuter";
import Testimonials from "../Credit/Mencreditrepair/Testimonials";
import Counter from "../Menhome/Counter";
import Benefit from "../Menhome/Benefit";
import Offer from "../Menhome/Offer";
import Get from "../Menhome/Get";
import Loan from "../Menhometwo/Loan";
import Ready from "../Menhomethree/Ready";
import Benefits from "../Menhomethree/Benefits";
import Tabs4 from "../Menhome/tabs4";
import Mobileapp from "../Menhome/Mobileapp";
import BankUtilities from "../Menhome/BankUtilities";

const Main = () => {

  return (
    <>
      {/* <Firstslider/> */}
      <Slidertwo />
      <Loan />
      <Company/>
      {/* <What/> */}
      {/* <Testimonials/> */}
      <Tabs4/>
      <Get/>
      <Calcuter/>
      {/* <Safe/>
      
      <Video/> */}
      {/* <Clint/> */}
      
      
      {/* <Testimonials/> */}
      {/* <Counter/> */}
      {/* <Benefit/> */}
      {/* <Offer/> */}
      <Mobileapp/>
      <BankUtilities/>
      
    </>
  );
};

export default Main;
