import React from "react";
import './Item.css'

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
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