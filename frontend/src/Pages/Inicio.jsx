import React from "react";
import Hero from '../Components/Hero/Hero'
import Pasta from "../Components/Pasta/Pasta";
import PastaTacon from "../Components/PastaTacon/PastaTacon";
import Clutch from "../Components/Clutch/Clutch";


const Inicio = () => {
    return (
        <div>
            <Hero/>
            <Pasta/>
            <Clutch/>
            <PastaTacon />
        </div>
    )
}

export default Inicio