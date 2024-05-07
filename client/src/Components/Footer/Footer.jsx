import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import mail_logo from '../Assets/mail_logo.svg'
import facebook_logo from '../Assets/facebook_logo.svg'
import whatsapp_logo from '../Assets/whatsapp_logo.svg'
import tel_logo from '../Assets/phone_logo.svg'

const Footer = () => {

    const handleRedirectFacebook = () => {
        window.open('https://www.facebook.com/people/Vafri/100071049796148/', '_blank')
    }

    const handleRedirectWhatsapp = () => {
        window.open('https://wa.me/523315663639/', '_blank')
    }

    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <Link to={"/contacto"}><img src={mail_logo} alt=""/></Link>
                </div>
                <div className="footer-icons-container">
                    <Link to={"/contacto"}><img src={tel_logo} alt=""/></Link>
                </div>
                <div className="footer-icons-container">
                    <img onClick={handleRedirectFacebook} src={facebook_logo} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img onClick={handleRedirectWhatsapp} src={whatsapp_logo} alt=""/>
                </div>
            </div>
            
            <div className="footer-copyright">
                <hr />
                <p>Copyright © 2024 - Vafri Ceramic. Todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default Footer