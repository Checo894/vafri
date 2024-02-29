import React from "react";
import banner_conocenos from "../Components/Assets/banner_conocenos.png"
import './CSS/Conocenos.css'

const Conocenos = () => {
    return(
        <div className="conocenos">
            <img className="conocenos-banner" src={banner_conocenos} alt="" />
            Hola Mundo
        </div>
    )
}

export default Conocenos