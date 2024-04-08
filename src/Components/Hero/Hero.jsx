import React from "react";
import './Hero.css'
import hero_icon_right from '../Assets/hero_icon_right.png'
import pag_inicio_banner from '../Assets/pag_inicio_banner.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <div className="hero">
            <div className="contenedor">
                <h1 className="hero-vafri">
                        VAFRI CERAMIC
                </h1>
                <p>VAFRI CERAMIC te da la bienvenida a su página </p>
                <p>Encuentra los mejores productos para tu vehículo</p>
                <div className="contacto-btn">
                <Link style={{textDecoration: 'none'}} to='/catalogo'>
                    <button>Catálogo</button>
                </Link>
            </div>
            </div>
              
        </div>
    )
}

 {/*  */}

                {/* <img src={pag_inicio_banner} alt="" /> */}

                    {/* <div className="hero-left">
               
            </div>
            <div className="hero-right">
                
            </div> */}

export default Hero