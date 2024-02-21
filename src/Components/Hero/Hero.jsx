import React from "react";
import './Hero.css'
import hero_icon_right from '../Assets/hero_icon_right.png'
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>Productos de fricción de alto rendimiento</h2>
                <div>
                    <div className="hero-piece-icon">
                        <p>Consulta</p>
                    </div>
                    <p>nuestros productos</p>
                </div>
                <div className="contacto-btn">
                    <Link style={{textDecoration: 'none'}} to='/catalogo'>
                        <button>Catálogo</button>
                    </Link>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_icon_right} alt="" />
            </div>
        </div>
    )
}

export default Hero