import React, {useEffect, useState} from 'react'
import './Pasta.css'
import Item from '../Item/Item'

const Pasta = () => {

    const [pastaP, setPastaP] = useState([]);

    useEffect(() => {
        fetch('https://vafri-backend.vercel.app/pastaP')
        .then(res => res.json())
        .then(data => {
            setPastaP(data);
        })
    },[]);

    return(
        <div className="pasta">
            <h1>Pasta</h1>
            <hr />
            <div className="pasta-item">
                {pastaP.map((item,i)=>{
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

export default Pasta