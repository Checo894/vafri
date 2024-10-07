import React, { useEffect, useState } from 'react';
import './Pasta.css';
import Item from '../Item/Item';
import all_data from '../Assets/vafri-products-new.json'; // Importa los datos locales

const Pasta = () => {

    const [pastaP, setPastaP] = useState([]);

    useEffect(() => {
        // Filtrar los productos que pertenecen a la categoría "pasta"
        const pastaProducts = all_data.filter(item => item.category === 'pasta');
        const lastFourPastaProducts = pastaProducts.slice(-4);
        setPastaP(lastFourPastaProducts);
    }, []);

    return(
        <div className="pasta">
            <h1>Pasta</h1>
            <hr />
            <div className="pasta-item">
                {pastaP.map((item, i) => {
                    let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
                    return (
                        <Item 
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
                    );
                })}
            </div>
        </div>
    );
}

export default Pasta;
