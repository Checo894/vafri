import React from "react";
import './PastaTacon.css'
import data_product from "../Assets/pastaTacon";
import Item from "../Item/Item";

const PastaTacon = () => {
    return(
        <div className="pasta-tacon">
            <h1>Pasta tacón</h1>
            <hr />
            <div className="pasta-tacon-item">
            {data_product.map((item,i)=>{
                    let appText = Array.isArray(item.application) && (item.application.length === 2 || item.application.length === 3)? item.application.join(', ') : item.application;
                    return <Item 
                                key={i} 
                                id={item.id} 
                                category={item.category} 
                                model={item.model} 
                                name={item.name} 
                                application={appText} 
                                image={item.image} 
                                measures={item.measures} 
                                material={item.material} 
                            />
                })}
            </div>
        </div>
    )
}

export default PastaTacon