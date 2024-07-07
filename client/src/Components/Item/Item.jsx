import React from "react";
import './Item.css';
import { Link } from "react-router-dom";
import foto_prueba from '../Assets/fotoPrueba.png';

const Item = (props) => {
    const imageSrc = props.image === "" ? foto_prueba : props.image;
    
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={imageSrc} alt="" /></Link>
            <Link style={{textDecoration:'none'}} to={`/product/${props.id}`}>
                <div className="model-name">
                    <p className="model">
                        {props.brand} - FMSI {props.fmsi}
                    </p>
                    {/* <p className="name">
                        {props.name}
                    </p> */}
                </div>
                <div className="application">
                    {props.application}
                </div>
            </Link>
        </div>
    );
}

export default Item;
