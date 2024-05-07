import React from "react";
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow_icon.svg'
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
    const {product} = props;
    return (
        <div className="breadcrum">
            <Link to="/vafri" style={{textDecoration:'none'}} >Inicio</Link> 
            <img src={arrow_icon} alt="" /> 
            <Link to="/catalogo" style={{textDecoration:'none'}}>Catálogo</Link> 
            <img src={arrow_icon} alt="" /> 
            <Link to={`/${product.category}`} style={{textDecoration:'none'}}>{product.category}</Link>  
            <img src={arrow_icon} alt="" /> FMSI {product.fmsi}
        </div>
    )
}

export default Breadcrum