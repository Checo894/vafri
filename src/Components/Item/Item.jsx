import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
import foto_prueba from '../Assets/fotoPrueba.png'

const Item = (props) => {
    if(props.image === ""){
        props.image = foto_prueba
    }
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <div className="model-name">
                <p className="model">
                    {props.model}
                </p>
                <p className="name">
                    {props.name}
                </p>
            </div>
            <div className="application">
                {props.application}
            </div>
            
        </div>
    )
}

export default Item