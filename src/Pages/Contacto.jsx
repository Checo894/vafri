import React from "react";
import { Link } from "react-router-dom";
import banner_contacto from "../Components/Assets/banner_contacto.png"
import banner_pasta from "../Components/Assets/banner_pasta_square.png"
import banner_pasta_tacon from "../Components/Assets/banner_pasta_tacon_square.png"
import banner_tacon from "../Components/Assets/banner_tacon_square.png"
import banner_miscelanea from "../Components/Assets/banner_miscelanea_square.png"
import './CSS/Contacto.css'

const Contacto = () => {
    return (
        <div className="contacto">
            <img className="contacto-banner" src={banner_contacto} alt="" />
            <h1>Contacto</h1>
            <div className="contacto-content">
                <h2>Información de Contacto</h2>
                <p>Para consultas generales, comentarios o preguntas sobre nuestros productos, no dude en ponerse en contacto con nosotros.</p>
                <div className="contact-info">
                <div className="catalogo-type1">
                    <Link to='/pasta'>
                        <img onClick={window.scrollTo(0,0)} className="catalogo-elements" src={banner_pasta} alt="" />
                    </Link>
                    <Link to='/pastaTacon'>
                        <img onClick={window.scrollTo(0,0)} className="catalogo-elements" src={banner_pasta_tacon} alt="" />
                    </Link>
                </div>
                <div className="catalogo-type2">
                    <Link to='/tacon'>
                        <img onClick={window.scrollTo(0,0)} className="catalogo-elements" src={banner_tacon} alt="" />
                    </Link>
                    <Link to='/miscelanea'>
                        <img onClick={window.scrollTo(0,0)} className="catalogo-elements" src={banner_miscelanea} alt="" />
                    </Link>
                </div>
            </div>
                
            </div>
        </div>
    )
}

export default Contacto