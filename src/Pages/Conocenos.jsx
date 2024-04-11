import React from "react";
import banner_conocenos from "../Components/Assets/banner_conocenos.png"
import './CSS/Conocenos.css'
import conocenosLogo from '../Components/Assets/conocenosLogo.png'

const Conocenos = () => {
    return(
        <div className="conocenos">
            <img className="conocenos-banner" src={banner_conocenos} alt="" />
            <h1>Bienvenidos a Vafri</h1>
            <img className="conocenos-img" src={conocenosLogo} alt="" />
            <div className="about-us-content">
                
                <h2>Nuestra historia</h2>
                <p>
                    Empezamos en el negocio de las pastas para clutch hace 15 años, de la mano de la marca VALEO, defendiendo la calidad en la línea, siempre manejando la fibra de vidrio en combinación con el cobre, a la salida de la marca VALEO del país, seguimos ofreciendo a nuestros clientes la misma calidad en otras marcas como es TERMOLITE y FRAS-LE.
                </p>
                <p>
                    Viendo la necesidad del mercado de contar con una pasta de calidad en la reparación de los embragues para los vehículos que se comercializan en México, es que nació VAFRI, la pasta para clutch que está elaborada en 4 formulaciones diferentes, todo esto para que el cliente tenga la mejor solución a su necesidad.
                </p>

                <h2>Misión</h2>
                <p>
                    Ser líder de soluciones integrales en componentes para embragues a nivel Nacional, proporcionando a nuestros clientes un servicio de gran valor, incorporando al mercado pastas para clutch en diferentes fórmulas y otros productos con excelente calidad, a través del desarrollo tecnológico que nuestros clientes requieren.
                </p>

                <h2>Visión</h2>
                <p>
                    Consolidarnos como lideres en el rango, expandiendo nuestra penetración en el mercado nacional sin descuidar la atención, servicio y calidad que ofrecemos día a día.
                </p>

                <h2>Valores</h2>
                <p>
                    Nuestros valores son los que nos ayudan a seguir nuestra misión y visión, por lo cual día a día los respetamos y usamos.
                </p>
                <ul>
                    <li>Trabajo en equipo</li>
                    <li>Crecimiento</li>
                    <li>Responsabilidad Social</li>
                    <li>Honestidad</li>
                    <li>Calidad</li>
                </ul>
                
                <h1>¡Gracias por elegir Vafri!</h1>
            </div>
        </div>
    )
}

export default Conocenos