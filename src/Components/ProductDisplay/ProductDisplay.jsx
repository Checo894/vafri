import React from "react";
import './ProductDisplay.css'


const ProductDisplay = (props) => {
    const {product} = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>FMSI - {product.name}-{product.model}</h1>
                 <p>Aplicaciones: {product.application}</p>
                 <p>Medidas: {product.measures}</p>
                 <p>Material: {product.material}</p>
            <div className="productdisplay-right-description">
                    Las pastas para clutch, también conocidas como pastillas de 
                    embrague, son componentes fundamentales en los sistemas de 
                    embrague de los vehículos de transmisión manual. Estas pastas 
                    están diseñadas para proporcionar la fricción necesaria que 
                    permite la transferencia de potencia desde el motor hasta la transmisión, 
                    permitiendo así el cambio de marchas y la conducción del vehículo.
            </div>
            <button>Contactar al proveedor</button>
            <p className="productdisplay-right-category"><span>Categoria : Pasta</span></p>
            <p className="productdisplay-right-tags"><span>Tags : Carros</span></p>
            </div>
        </div>
    )
}

export default ProductDisplay