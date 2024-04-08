import React, { useEffect, useState } from "react";
import './PastaTacon.css'
import Item from "../Item/Item";

const PastaTacon = () => {

    const [nuevo, setNuevo] = useState([]);

    useEffect(() => {   
        fetch('http://localhost:4000/nuevo')
        .then(res => res.json())
        .then(data => {
            setNuevo(data);
        })
    },[])


    return(
        <div className="pasta-tacon">
            <h1>Novedades en la tienda</h1>
            <hr />
            
            <div className="nuevo-products">
            {nuevo.map((item,i)=>{
                    let appText = Array.isArray(item.application) && (item.application.length === 2 || item.application.length === 3)? item.application.join(', ') : item.application;
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
                                pdf={item.pdf} 
                                />
                })}
            </div>
        </div>
    )
}

export default PastaTacon