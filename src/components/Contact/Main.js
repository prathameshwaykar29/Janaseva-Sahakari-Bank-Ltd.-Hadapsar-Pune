import React from 'react'
import Bredcom from '../Bredcom/Main'
import Contactfile from '../Mencontact/Contactfile'
import Map from '../Mencontact/Map'
import Maptwo from '../Menhometwo/Maptwo'

const Contact = () => {
    return (
        <>
            <Bredcom title={"Home"} subtitle={"Contact"} link={"Contact us"}/>
            <Contactfile />
            <Map/>
            <Maptwo/>
        </>
    )
}

export default Contact