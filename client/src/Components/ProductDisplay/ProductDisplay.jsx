import React from "react";
import './ProductDisplay.css'
import { Link } from "react-router-dom";


const ProductDisplay = (props) => {
    const {product} = props;

    const handleRedirect = () => {
        // Obtener la URL del PDF desde los props
        const pdfURL = product.pdf; // Suponiendo que el prop que contiene la URL del PDF se llama "pdf"

        // Abrir la URL del PDF en una nueva pestaña
        window.open(pdfURL, '_blank');
    }

    const Categoria =({product})=>{
        if (product.category === "pasta") {
            return <p><strong>Categoría</strong>: Pasta para Clutch</p>
        } else if (product.category === "pastaTacon"){
            return <p><strong>Categoría</strong>: Pasta Tacón</p>
        } else if (product.category === "tacon"){
            return <p><strong>Categoría</strong>: Tacón</p>
        } else if (product.category === "miscelanea"){
            return <p><strong>Categoría</strong>: Miscelanea</p>
        } else if (product.category === "remache"){
            return <p><strong>Categoría</strong>: Remache</p>
        } else if (product.category === "balata"){
            return <p><strong>Categoría</strong>: Balata</p>
        } else{
            return <p>Categoría: No determinada</p>
        }
    }


    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.brand} FMSI : {product.fmsi}</h1>
                 <p><strong>Aplicaciones</strong>: {product.application}</p>
                 <p><strong>Medidas</strong>: {product.measures}</p>
                 <p><strong>Material</strong>: {product.formula}</p>
            <Link style={{textDecoration: 'none'}} to='/contacto'>
                <button>Contactar al Provedor</button>
            </Link>
            <button onClick={handleRedirect}>Descargar PDF en tamaño real</button>
            <div className="productdisplay-right-category"><span>{Categoria({product})} </span></div>
            </div>
        </div>
    )
}

export default ProductDisplay