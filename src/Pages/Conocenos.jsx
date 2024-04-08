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
                <p>En Vafri, nuestra historia es la de una pasión compartida por la excelencia en cada detalle. 
                    Fundada en el corazón de la industria automotriz, nos hemos dedicado a perfeccionar las pastas para clutch, 
                    brindando soluciones confiables y duraderas a nuestros clientes desde [año de fundación]. 
                    Lo que comenzó como una visión de calidad se ha convertido en una realidad arraigada en cada 
                    producto que sale de nuestras instalaciones.
                </p>

                <h2>Compromiso con la Calidad</h2>
                <p>Nos enorgullecemos de ser pioneros en la fabricación de pastas para clutch de alta calidad. 
                    Cada componente que utilizamos pasa por rigurosas pruebas de calidad para garantizar su rendimiento 
                    y durabilidad en las condiciones más exigentes. Nuestro equipo de ingenieros y técnicos altamente 
                    capacitados trabaja incansablemente para mantener los más altos estándares de calidad en cada 
                    etapa del proceso de fabricación.
                </p>

                <h2>Servicio al Cliente Personalizado</h2>
                <p>
                    En Vafri, creemos en el poder de las relaciones personales. Valoramos a cada cliente como un socio 
                    y nos comprometemos a brindar un servicio personalizado que supere sus expectativas. 
                    Desde el asesoramiento técnico hasta la atención al detalle en cada pedido, 
                    nos esforzamos por construir una experiencia de cliente excepcional en cada interacción.
                </p>

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