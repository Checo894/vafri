import React from "react";
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow_icon.svg'

const Breadcrum = (props) => {
    const {product} = props;
    return (
        <div className="breadcrum">
            INICIO <img src={arrow_icon} alt="" /> TIENDA <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> FMSI {product.fmsi}
        </div>
    )
}

export default Breadcrum