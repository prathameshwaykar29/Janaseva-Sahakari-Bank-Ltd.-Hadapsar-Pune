
import React from 'react'
import Bredcom from "../Bredcom/Main";
import MainConsumerDurable from './Sub-Consumer-Durable/MainConsumerDurabl';
import ConsumerDurableBred from './Sub-Consumer-Durable/ConsumerDurableBred';
import AdsTwo from '../Ads/AdsTwo';

const ConsumerDurable = () => {
  return (
    <>
      {/* <Bredcom
        title={"Home"}
        subtitle={"Machinery Loan"}
        link={"Machinery Loan"}
      /> */}
      <ConsumerDurableBred />
      <MainConsumerDurable/>
<AdsTwo />
      
    </>
  )
}

export default ConsumerDurable
