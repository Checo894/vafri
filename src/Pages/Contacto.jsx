import React, { useState } from "react";
import banner_contacto from "../Components/Assets/banner_contacto.png"
import emailjs from '@emailjs/browser';
import Slider from "react-slick/lib/slider";
// import smtpjs from "smtpjs";

import './CSS/Contacto.css'


//Importante configurar emailjs con el correo institucional y 
//de la misma manera poner el template adecuado


const Contacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    // const [numero, setNumero] = useState('');
    // const [asunto, setAsunto] = useState('');
    const [message, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateId = 'template_l36qujw';
        const serviceID = 'service_cqzdhb8';
        const publicKey = 'CTcprWfxC2RiLM0dE';
            // sendFeedback(templateId, {message: message, from_name: nombre, reply_to: email, numero: numero, asunto: asunto})

        const templateParams = {
            from_name: nombre,
            from_email: email,
            to_name: 'Vafri Ceramic',
            // numero: numero,
            // asunto: asunto,
            message: message
        };

        emailjs.send(serviceID, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Correo enviado', response.status, response.text);
            setNombre('');
            setEmail('');
            // setNumero('');
            // setAsunto('');
            setMensaje('');
        }).catch((error) => {
            console.log('Error al enviar el correo', error);
        });
    }

    


    return (
        <div className="contacto">
            <img className="contacto-banner" src={banner_contacto} alt="" />
            <h1>Contacto</h1>
            <div className="contacto-content">
                <h2>Información de Contacto</h2>
                <p>Para consultas generales, comentarios o preguntas sobre nuestros productos, no dude en ponerse en contacto con nosotros.</p>
                <div className="container-contact">
                    <h2>Contactanos!</h2>
                    <form className="form" onSubmit={handleSubmit}> 
                        <div className="input-box">
                            <div className="input-field field">
                                <input type="text" id="nombre" className="itemC" onChange={(e) => setNombre(e.target.value)}
                                value={nombre} placeholder="Nombre Completo"required />
                                <div className="error-txt">Nombre no puede estar vacío</div>
                                <input type="email" id="email" className="itemC"  onChange={(e) => setEmail(e.target.value)}
                                value={email} placeholder="Email"required />
                                <div className="error-txt">Email no puede estar vacío</div>
                            </div>
                        </div>

                        {/* <div className="input-box">
                            <div className="input-field field">
                                <input type="text" id="numero" className="itemC" onChange={(e) => setNumero(e.target.value)}    
                                value={numero} placeholder="Teléfono"required />
                                <div className="error-txt">Teléfono no puede estar vacío</div>
                                <input type="text" id="asunto" className="itemC" onChange={(e) => setAsunto(e.target.value)}
                                value={asunto} placeholder="Asunto"required />
                                <div className="error-txt">Asunto no puede estar vacío</div>
                            </div>
                        </div> */}

                        <div className="text-area field">
                            <textarea 
                                name="" className="itemC" id="message" onChange={(e) => setMensaje(e.target.value)}
                                value={message} cols="30" rows="10" placeholder="Mensaje">
                            </textarea>
                            <div className="error-txt">Mensaje no puede estar vacío</div>
                        </div>
                        <div className="contacto-btn">
                    <button type="submit">Enviar Correo</button>
                    </div>
                    </form>
                    
                   
                </div>
                
            </div>
        </div>
    )
}

export default Contacto
