import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import mail_logo from '../Assets/mail_logo.svg'
import facebook_logo from '../Assets/facebook_logo.svg'
import whatsapp_logo from '../Assets/whatsapp_logo.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={mail_logo} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_logo} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_logo} alt=""/>
                </div>
            </div>
            
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - Vafri Ceramic. Todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default Footer