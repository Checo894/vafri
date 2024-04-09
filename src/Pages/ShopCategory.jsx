// import React, { useState, useContext, useRef, useEffect } from "react";
// import './CSS/ShopCategory.css'
// import { ShopContext } from "../Context/ShopContext";
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from "../Components/Item/Item";

// const ShopCategory = (props) => {
//     const { all_data } = useContext(ShopContext);
//     const [sortBy, setSortBy] = useState('');
//     const filteredData = all_data.filter(item => item.category === props.category);
//     const [showCount, setShowCount] = useState(12);
//     const visibleData = filteredData.slice(0, showCount);

//     const handleSortChange = (event) => {
//         setSortBy(event.target.value);
//     };

//     const bottomRef = useRef(null);

//     const handleShowMore = (event) => {
//         event.preventDefault();
//         setShowCount(prevCount => prevCount + 8); // Aumentar la cantidad de artículos mostrados

//         if (bottomRef.current) {
//             bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//         }
//     };

//     // useEffect(() => {
//     //     // Hacer scroll al elemento bottomRef cuando cambie showCount
//     //     if (bottomRef.current) {
//     //         bottomRef.current.scrollIntoView({behavior: 'instant', block: 'nearest' });
//     //     }
//     // }, [showCount]);

//     return (
//         <div className="shopcategory">
//             <img className="shopcategory-banner" src={props.banner} alt="" />
//             <div className="shopcategory-indexSort">
//                 <p>
//                 <span>Showing 1-{visibleData.length}</span> out of {filteredData.length} products
//                 </p>
//                 <div className="shopcategory-sort">
//                     Sort by
//                     <select value={sortBy} onChange={handleSortChange}>
//                         <option value="">-- Select --</option>
//                         <option value="az">A-Z</option>
//                         <option value="za">Z-A</option>
//                         <option value="newest">Newest to Oldest</option>
//                         <option value="oldest">Oldest to Newest</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="shopcategory-products">
//                 {visibleData.map((item, i) => {
//                     let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
//                     //Checar como se llama la propiedad de categoria
//                     if (props.category === item.category) {
//                         return <Item
//                             key={i}
//                             id={item.id}
//                             fmsi={item.fmsi}
//                             brand={item.brand}
//                             formula={item.formula}
//                             measures={item.measures}
//                             application={item.application}
//                             category={item.category}
//                             image={item.image}
//                             pdf={item.pdf}
//                             date={item.date}
//                             avilable={item.avilable}
//                         />
//                     } else {
//                         return null
//                     }
//                 })}
//             </div>
//             <div ref={bottomRef}></div>
//             {showCount < filteredData.length && (
//                 <div className="shopcategory-loadmore" onClick={handleShowMore}>
//                     Show More
//                 </div>
//             )}
            
//         </div>
//     )
// }

// export default ShopCategory;

// import React, { useState, useContext, useRef, useEffect } from "react";
// import './CSS/ShopCategory.css'
// import { ShopContext } from "../Context/ShopContext";
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from "../Components/Item/Item";

// const ShopCategory = (props) => {
//     const { all_data } = useContext(ShopContext);
//     const [sortBy, setSortBy] = useState('');
//     const filteredData = all_data.filter(item => item.category === props.category);
//     const [showCount, setShowCount] = useState(12);
//     const visibleData = filteredData.slice(0, showCount);

//     const handleSortChange = (event) => {
//         setSortBy(event.target.value);
//     };

//     const bottomRef = useRef(null);

//     const handleShowMore = (event) => {
//         event.preventDefault();
//         setShowCount(prevCount => prevCount + 8); // Aumentar la cantidad de artículos mostrados
//     };

//     useEffect(() => {
//         // Hacer scroll al elemento bottomRef cuando cambie showCount
//         if (bottomRef.current) {
//             bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//         }
//     }, [showCount, bottomRef.current]);

//     return (
//         <div className="shopcategory">
//             <img className="shopcategory-banner" src={props.banner} alt="" />
//             <div className="shopcategory-indexSort">
//                 <p>
//                 <span>Showing 1-{visibleData.length}</span> out of {filteredData.length} products
//                 </p>
//                 <div className="shopcategory-sort">
//                     Sort by
//                     <select value={sortBy} onChange={handleSortChange}>
//                         <option value="">-- Select --</option>
//                         <option value="az">A-Z</option>
//                         <option value="za">Z-A</option>
//                         <option value="newest">Newest to Oldest</option>
//                         <option value="oldest">Oldest to Newest</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="shopcategory-products">
//                 {visibleData.map((item, i) => {
//                     let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
//                     //Checar como se llama la propiedad de categoria
//                     if (props.category === item.category) {
//                         return <Item
//                             key={i}
//                             id={item.id}
//                             fmsi={item.fmsi}
//                             brand={item.brand}
//                             formula={item.formula}
//                             measures={item.measures}
//                             application={item.application}
//                             category={item.category}
//                             image={item.image}
//                             pdf={item.pdf}
//                             date={item.date}
//                             avilable={item.avilable}
//                         />
//                     } else {
//                         return null
//                     }
//                 })}
//             </div>
//             <div ref={bottomRef}></div>
//             {showCount < filteredData.length && (
//                 <div className="shopcategory-loadmore" onClick={handleShowMore}>
//                     Show More
//                 </div>
//             )}
            
//         </div>
//     )
// }

// export default ShopCategory;

import React, { useState, useContext, useRef, useEffect } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const { all_data } = useContext(ShopContext);
    const [sortBy, setSortBy] = useState('');
    const filteredData = all_data.filter(item => item.category === props.category);
    const [showCount, setShowCount] = useState(12);
    const visibleData = filteredData.slice(0, showCount);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const bottomRef = useRef(null);

    const handleShowMore = (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace (scroll)
        setShowCount(prevCount => prevCount + 8); // Aumentar la cantidad de artículos mostrados
    };

    useEffect(() => {
        // Hacer scroll al elemento bottomRef cuando cambie showCount
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [showCount, bottomRef.current]);

    return (
        <div className="shopcategory">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                <span>Showing 1-{visibleData.length}</span> out of {filteredData.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by  <img src={dropdown_icon} alt="" />
                    {/* <select value={sortBy} onChange={handleSortChange}>
                        <option value="">-- Select --</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                        <option value="newest">Newest to Oldest</option>
                        <option value="oldest">Oldest to Newest</option>
                    </select> */}
                </div>
            </div>
            <div className="shopcategory-products">
                {visibleData.map((item, i) => {
                    let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
                    //Checar como se llama la propiedad de categoria
                    if (props.category === item.category) {
                        return <Item
                            key={i}
                            id={item.id}
                            fmsi={item.fmsi}
                            brand={item.brand}
                            formula={item.formula}
                            measures={item.measures}
                            application={item.application}
                            category={item.category}
                            image={item.image}
                            pdf={item.pdf}
                            date={item.date}
                            avilable={item.avilable}
                        />
                    } else {
                        return null
                    }
                })}
            </div>
            <div ref={bottomRef}></div>
            {showCount < filteredData.length && (
                <div className="shopcategory-loadmore" onClick={handleShowMore}>
                    Show More
                </div>
            )}
            
        </div>
    )
}

export default ShopCategory;
