import React from 'react'
import Bredcom from '../../Bredcom/Main'
import Repair from '../Mencreditrepair/Repair'
import Video from '../Mencreditrepair/Video';
import Testimonials from '../Mencreditrepair/Testimonials';
import Trusted from '../Mencreditrepair/Trusted';
import Clint from '../../Teams/Menteamdeatils/Clint';

const CreditRepair = () => {

    return (
        <>
            <Bredcom title={"Home"} subtitle={"CREDIT REPAIR"} link={"Credit Repair"}/>
            <Repair/>
            <Video/>
            <Testimonials/>
            <Trusted/>
            <Clint/>
        </>
    )
}

export default CreditRepair