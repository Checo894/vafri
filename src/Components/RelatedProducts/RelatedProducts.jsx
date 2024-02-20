import React from "react";
import './RelatedProducts.css'
import data_product from "../Assets/all_data";
import Item from "../Item/Item";

const RelatedProducts = () => {
    return(
        <div className="relatedproducts">
            <h1>Artículos relacionados</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, i) => {
                    let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
                    return <Item 
                    key={i} 
                    id={item.id} 
                    category={item.category} 
                    model={item.model} 
                    name={item.name} 
                    application={applicationText} 
                    image={item.image} 
                    measures={item.measures} 
                    material={item.material}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts