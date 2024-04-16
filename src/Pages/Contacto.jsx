import React, { useState } from "react";
import banner_contacto from "../Components/Assets/banner_contacto.png"
import emailjs from '@emailjs/browser';
import mail_logo from '../Components/Assets/mail_logo.svg'
import tel_logo from '../Components/Assets/phone_logo.svg'
import facebook_logo from '../Components/Assets/facebook_logo.svg'
import whatsapp_logo from '../Components/Assets/whatsapp_logo.svg'


import './CSS/Contacto.css'


//Importante configurar emailjs con el correo institucional y 
//de la misma manera poner el template adecuado


const Contacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMensaje] = useState('');
    const [alerta, setAlerta] = useState({ tipo: '', mensaje: '' });


    const handleSubmit = (e) => {
        e.preventDefault();
        const templateId = 'template_l36qujw';
        const serviceID = 'service_cqzdhb8';
        const publicKey = 'CTcprWfxC2RiLM0dE';
      
        const templateParams = {
          from_name: nombre,
          from_email: email,
          to_name: 'Vafri Ceramic',
          message: message
        };
      
        emailjs.send(serviceID, templateId, templateParams, publicKey)
          .then((response) => {
            console.log('Correo enviado', response.status, response.text);
            mostrarAlertaExito();
            setNombre('');
            setEmail('');
            setMensaje('');
          }).catch((error) => {
            console.log('Error al enviar el correo', error);
            mostrarAlertaError('Hubo un problema al enviar el correo. Inténtalo de nuevo más tarde.');
          });
      };
      

    const handleRedirectFacebook = () => {
        window.open('https://www.facebook.com/people/Vafri/100071049796148/', '_blank')
    }

    const handleRedirectWhatsapp = () => {
        window.open('https://wa.me/523315663639/', '_blank')
    }

    const handleRedirectEmail = () => {
        window.open('mailto:aa_vafri@hotmail.com', '_blank')
    }

    const mostrarAlertaExito = () => {
        setAlerta({ tipo: 'exito', mensaje: '¡Correo enviado con éxito!' });
      };
      
      const mostrarAlertaError = (mensaje) => {
        setAlerta({ tipo: 'error', mensaje });
      };
      

    return (
        <div className="contacto">
            <img className="contacto-banner" src={banner_contacto} alt="" />
            <h1>Contacto</h1>
            <div className="contacto-content">
                <h2>Información de Contacto</h2>
                <p>Para consultas generales, comentarios o preguntas sobre nuestros productos, no dude en ponerse en contacto con nosotros.</p>
                <div className="contacto-miniBanners">
                    <button onClick={handleRedirectFacebook}>
                        <img src={facebook_logo} alt=""/>
                        <p>Facebook</p>
                    </button>
                    <button onClick={handleRedirectWhatsapp}>
                        <img src={whatsapp_logo} alt=""/>
                        <p>WhatsApp</p>
                    </button>
                    <button>
                        <img src={tel_logo} alt=""/>
                        <p>(443) 520-8109</p>
                    </button>
                    <button onClick={handleRedirectEmail}>
                        <img src={mail_logo} alt=""/>
                        <p>aa_vafri@hotmail.com</p>
                    </button>
                </div>
                <div className="container-contact">
                    <h2>Contactanos!</h2>
                    {alerta.tipo === 'exito' && (
                            <div className="alerta exito">{alerta.mensaje}</div>
                        )}

                        {alerta.tipo === 'error' && (
                            <div className="alerta error">{alerta.mensaje}</div>
                        )}
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
