import React from "react";
import banner_conocenos from "../Components/Assets/banner_conocenos.png"
import './CSS/Conocenos.css'

const Conocenos = () => {
    return(
        <div className="conocenos">
            <img className="conocenos-banner" src={banner_conocenos} alt="" />
            <h1>Bienvenidos a Vafri</h1>
            <div className="about-us-content">
                <h2>Nuestra historia</h2>
                <p>Ser líder de soluciones integrales en componentes para embragues a nivel Nacional, proporcionando a nuestros clientes un servicio de gran valor, incorporando al mercado pastas para clutch en diferentes fórmulas y otros productos con excelente calidad, a través del desarrollo tecnológico que nuestros clientes requieren.
                </p>

                <h2>Compromiso con la Calidad</h2>
                <p>Ser líder de soluciones integrales en componentes para embragues a nivel Nacional, proporcionando a nuestros clientes un servicio de gran valor, incorporando al mercado pastas para clutch en diferentes fórmulas y otros productos con excelente calidad, a través del desarrollo tecnológico que nuestros clientes requieren.
                </p>

                <h2>Servicio al Cliente Personalizado</h2>
                <p>
                Ser líder de soluciones integrales en componentes para embragues a nivel Nacional, proporcionando a nuestros clientes un servicio de gran valor, incorporando al mercado pastas para clutch en diferentes fórmulas y otros productos con excelente calidad, a través del desarrollo tecnológico que nuestros clientes requieren.
                </p>
                <ul>
                    <li>Trabajo en equipo</li>
                    <li>Crecimiento</li>
                    <li>Responsabilidad Social</li>
                    <li>Honestidad</li>
                    <li>Calidad</li>
                </ul>

                <h2>Nuestra Visión</h2>
                <p>
                    Nuestra visión en Vafri es ser reconocidos como líderes indiscutibles en la industria de las pastas para 
                    clutch, no solo por la calidad de nuestros productos, sino también por nuestro compromiso inquebrantable 
                    con la satisfacción del cliente. Buscamos constantemente innovar y mejorar para seguir siendo la elección 
                    número uno de nuestros clientes en todo el mundo.
                </p>

                <h2>Únete a la Familia Vafri</h2>
                <p>
                    Ya sea que seas un cliente leal de muchos años o estés descubriendo nuestros productos por primera vez, 
                    te invitamos a unirte a la familia Vafri. Descubre por qué nuestra combinación única de calidad, servicio 
                    y pasión nos distingue en la industria y cómo podemos ayudarte a lograr tus objetivos de rendimiento con confianza.
                </p>

                <p>¡Gracias por elegir Vafri!</p>
            </div>
        </div>
    )
}

export default Conocenos