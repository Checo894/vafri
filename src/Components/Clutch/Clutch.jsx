import React from "react";
import './Clutch.css'
import img_clutch from '../Assets/img_clutch.png'

const Clutch = () => {
    return(
        <div className="clutch">
            <div className="clutch-left">
                <h1>Novedades</h1>
                <h1>en clutch</h1>
                <p>LO MEJOR DEL MERCADO</p>
                <button>Más información</button>
            </div>
            <div className="clutch-right">
                <img src={img_clutch} alt="" />
            </div>
        </div>
    )
}

export default Clutch