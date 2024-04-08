import React from "react";
import './Clutch.css'
import img_clutch from '../Assets/img_clutch.png'
import { Link } from "react-router-dom";

const Clutch = () => {
    return(
        <div className="clutch">
            <div className="clutch-left">
                <h1>Busca tus</h1>
                <h1>productos</h1>
                <p>En nuestra página</p>
                <Link to='/buscar'><button>Buscar</button></Link>
            </div>
            <div className="clutch-right">
                <img src={img_clutch} alt="" />
            </div>
        </div>
    )
}

export default Clutch