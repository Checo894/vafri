// import React, { useEffect, useState } from "react";
// import './PastaTacon.css'
// import Item from "../Item/Item";

// const PastaTacon = () => {

//     const [nuevo, setNuevo] = useState([]);

//     useEffect(() => {   
//         fetch('https://vafri-backend.vercel.app/nuevo')
//         .then(res => res.json())
//         .then(data => {
//             setNuevo(data);
//         })
//     },[])


//     return(
//         <div className="pasta-tacon">
//             <h1>Novedades en la tienda</h1>
//             <hr />
            
//             <div className="nuevo-products">
//             {nuevo.map((item,i)=>{
//                     let appText = Array.isArray(item.application) && (item.application.length === 2 || item.application.length === 3)? item.application.join(', ') : item.application;
//                     return <Item 
//                                 key={i} 
//                                 id={item.id} 
//                                 fmsi={item.fmsi}
//                                 brand={item.brand}
//                                 category={item.category} 
//                                 model={item.model}  
//                                 image={item.image} 
//                                 measures={item.measures} 
//                                 application={appText}
//                                 formula={item.formula}
//                                 pdf={item.pdf} 
//                                 />
//                 })}
//             </div>
//         </div>
//     )
// }

// export default PastaTacon

import React, { useEffect, useState } from "react";
import './PastaTacon.css';
import Item from "../Item/Item";
import all_data from '../Assets/vafri-products-new.js'; // Importa los datos locales

const PastaTacon = () => {

    const [nuevo, setNuevo] = useState([]);

    useEffect(() => {
        // Obtener los últimos 8 productos
        const lastEightProducts = all_data.slice(-8);
        setNuevo(lastEightProducts);
    }, []);

    return(
        <div className="pasta-tacon">
            <h1>Novedades en la tienda</h1>
            <hr />
            
            <div className="nuevo-products">
                {nuevo.map((item, i) => {
                    let appText = Array.isArray(item.application) && (item.application.length === 2 || item.application.length === 3) ? item.application.join(', ') : item.application;
                    return (
                        <Item 
                            key={i} 
                            id={item.id} 
                            fmsi={item.fmsi}
                            brand={item.brand}
                            category={item.category} 
                            model={item.model}  
                            image={item.image} 
                            measures={item.measures} 
                            application={appText}
                            formula={item.formula}
                            pdf={item.pdf} 
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default PastaTacon;
