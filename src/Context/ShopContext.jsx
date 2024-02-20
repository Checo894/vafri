import React, { createContext } from "react";
import all_data from '../Components/Assets/all_data.js'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_data};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
