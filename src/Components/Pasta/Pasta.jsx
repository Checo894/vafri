import React from 'react'
import './Pasta.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item'

const Pasta = () => {
    return(
        <div className="pasta">
            <h1>Pasta</h1>
            <hr />
            <div className="pasta-item">
                {data_product.map((item,i)=>{
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
                                material={item.material} />
                })}
            </div>
        </div>
    )
}

export default Pasta