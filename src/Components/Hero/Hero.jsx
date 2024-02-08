import React from "react";
import './Hero.css'
import hero_icon_right from '../Assets/hero_icon_right.png'

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>Productos de fricción de alto rendimiento</h2>
                <div>
                    <div className="hero-piece-icon">
                        <p>Todo para</p>
                    </div>
                    <p>tu auto</p>
                </div>
                <div className="contacto-btn">
                    <button>Catálogo</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_icon_right} alt="" />
            </div>
        </div>
    )
}

export default Hero