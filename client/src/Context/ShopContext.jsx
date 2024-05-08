import React, { createContext, useEffect, useState } from "react";
// import all_data from '../Components/Assets/all_data_new_final'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [all_data,setAll_product] = useState([]);

    useEffect(()=>{
        fetch('https://vafri-backend.vercel.app/allproducts')
        .then((Response)=>Response.json())
        .then((data)=>setAll_product(data)) 
    },[])

    const contextValue = {all_data};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
