import React, {useEffect, useState} from "react";
import './RelatedProducts.css'
import Item from "../Item/Item";

const RelatedProducts = () => {

    const [related, setRelated] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/related')
        .then(res => res.json())
        .then(data => {
            setRelated(data);
        })
    },[]);



    return(
        <div className="relatedproducts">
            <h1>Artículos relacionados</h1>
            <hr />
            <div className="relatedproducts-item">
                {related.map((item, i) => {
                    let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
                    return <Item 
                    key={i} 
                    id={item.id} 
                    fmsi={item.fmsi}
                    brand={item.brand}
                    category={item.category} 
                    model={item.model} 
                    application={applicationText} 
                    image={item.image} 
                    measures={item.measures} 
                    formula={item.formula}
                    pdf={item.pdf} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts