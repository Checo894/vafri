import React from "react";
import banner_contacto from "../Components/Assets/banner_contacto.png"
// import smtpjs from "smtpjs";

import './CSS/Contacto.css'

const Contacto = () => {
    return (
        <div className="contacto">
            <img className="contacto-banner" src={banner_contacto} alt="" />
            <h1>Contacto</h1>
            <div className="contacto-content">
                <h2>Información de Contacto</h2>
                <p>Para consultas generales, comentarios o preguntas sobre nuestros productos, no dude en ponerse en contacto con nosotros.</p>
                <div className="container-contact">
                    <h2>Contactanos!</h2>
                    <form className="form"> 
                        <div className="input-box">
                            <div className="input-field field">
                                <input type="text" id="nombre" className="itemC" 
                                name="nombre" placeholder="Nombre Completo"required />
                                <div className="error-txt">Nombre no puede estar vacío</div>
                                <input type="email" id="email" className="itemC" 
                                name="email" placeholder="Email"required />
                                <div className="error-txt">Email no puede estar vacío</div>
                            </div>
                        </div>

                        <div className="input-box">
                            <div className="input-field field">
                                <input type="text" id="numero" className="itemC" 
                                name="numero" placeholder="Teléfono"required />
                                <div className="error-txt">Teléfono no puede estar vacío</div>
                                <input type="text" id="asunto" className="itemC" 
                                name="asunto" placeholder="Asunto"required />
                                <div className="error-txt">Asunto no puede estar vacío</div>
                            </div>
                        </div>

                        <div className="text-area field">
                            <textarea 
                                name="" className="itemC" id="message" 
                                cols="30" rows="10" placeholder="Mensaje">
                            </textarea>
                            <div className="error-txt">Mensaje no puede estar vacío</div>
                        </div>
                    </form>
                    <div className="contacto-btn">
                        <button type="submit">Enviar Correo</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contacto
