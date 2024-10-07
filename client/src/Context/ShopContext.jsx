// import React, { createContext, useEffect, useState } from "react";
// // import all_data from '../Components/Assets/all_data_new_final'

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {

//     const [all_data,setAll_product] = useState([]);

//     useEffect(()=>{
//         fetch('https://vafri-backend.vercel.app/allproducts')
//         .then((Response)=>Response.json())
//         .then((data)=>setAll_product(data)) 
//     },[])

//     const contextValue = {all_data};

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider

// ------------------------------------------------------------

// 

import React, { createContext, useState, useEffect } from "react";
import { db } from '../firebaseConfig';  // Importa la configuración de Firebase
import { collection, getDocs } from 'firebase/firestore';  // Importa Firestore

export const ShopContext = createContext(null);  // Crear el contexto

const ShopContextProvider = (props) => {
    const [allData, setAllData] = useState([]);  // Estado para almacenar los productos

    // Función para hacer fetch de los datos de Firestore
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));  // "products" es la colección en Firestore
                const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  // Mapear los datos
                setAllData(products);  // Guardar los productos en el estado
            } catch (error) {
                console.error("Error al obtener los datos de Firestore: ", error);
            }
        };
        fetchData();
    }, []);  // El arreglo vacío asegura que el fetch se haga solo una vez

    // Valor que se compartirá a través del contexto
    const contextValue = { allData };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}  {/* Renderiza los componentes hijos */}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
