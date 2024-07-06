import React from "react";
import bannerConocenos from "../Components/Assets/banner_conocenos.png"
import './CSS/Conocenos.css'
import conocenosLogo from '../Components/Assets/conocenosLogo.png'


const Conocenos = () => {
    return(
        <div className="conocenos">
            <img className="conocenosBanner" src={bannerConocenos} alt="Banner de Conócenos" />
            <div className="conocenosGrid">
                <img className="conocenosImg" src={conocenosLogo} alt="Logotipo de Conócenos" />
                <div className="accordion">
                    {articles.map(article => (
                        <Article key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const articles = [
    {
        id: "article1",
        title: "Nuestra Historia",
        content: [
            {type: "paragraph", data: "Empezamos en el negocio de las pastas para clutch hace 15 años, de la mano de la marca VALEO, defendiendo la calidad en la línea, siempre manejando la fibra de vidrio en combinación con el cobre, a la salida de la marca VALEO del país, seguimos ofreciendo a nuestros clientes la misma calidad en otras marcas como es TERMOLITE y FRAS-LE. "},
            { type: "paragraph", data: "Viendo la necesidad del mercado de contar con una pasta de calidad en la reparación de los embragues para los vehículos que se comercializan en México, es que nació VAFRI, la pasta para clutch que está elaborada en 4 formulaciones diferentes, todo esto para que el cliente tenga la mejor solución a su necesidad."}
        ]
    },
    {
        id: "article2",
        title: "Misión",
        content: [
            { type: "paragraph", data: "Ser líder de soluciones integrales en componentes para embragues a nivel Nacional, proporcionando a nuestros clientes un servicio de gran valor, incorporando al mercado pastas para clutch en diferentes fórmulas y otros productos con excelente calidad, a través del desarrollo tecnológico que nuestros clientes requieren."}
        ]
    },
    {
        id: "article3",
        title: "Visión",
        content: [
            { type: "paragraph", data: "Consolidarnos como lideres en el rango, expandiendo nuestra penetración en el mercado nacional sin descuidar la atención, servicio y calidad que ofrecemos día a día."}
        ]
    },
    {
        id: "article4",
        title: "Valores",
        content: [
            { type: "paragraph", data: "Nuestros valores son los que nos ayudan a seguir nuestra misión y visión, por lo cual día a día los respetamos y usamos." },
            { type: "list", data: ["Trabajo en equipo", "Crecimiento", "Responsabilidad Social", "Honestidad", "Calidad"] }
        ]
    },
];

const Article = ({ article }) => {
    return (
        <article>
            <input id={article.id} type="radio" name="articles" />
            <label htmlFor={article.id}>
                <h2>{article.title}</h2>
            </label>
            <div>
                {Array.isArray(article.content) ? article.content.map((item, index) => {
                    if (item.type === "paragraph") {
                        return <p key={index}>{item.data}</p>;
                    } else if (item.type === "list") {
                        return (
                            <ul key={index}>
                                {item.data.map((listItem, liIndex) => (
                                    <li key={liIndex}>{listItem}</li>
                                ))}
                            </ul>
                        );
                    }
                    return null;
                }) : <p>Error: Article content is not formatted correctly.</p>}
            </div>
        </article>
    );
};

export default Conocenos;
