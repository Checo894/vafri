import React, { useState, useContext, useRef, useEffect } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const { all_data } = useContext(ShopContext);
    const [sortBy, setSortBy] = useState('');
    const [filteredData, setFilteredData] = useState(all_data.filter(item => item.category === props.category));
    const [showCount, setShowCount] = useState(12);
    const visibleData = filteredData.slice(0, showCount);

    const handleSortChange = (event) => {
        const sortOrder = event.target.value;
        setSortBy(sortOrder);
        let sortedData = [...all_data].filter(item => item.category === props.category);
    
        switch (sortOrder) {
            case 'newest':
                sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'alphabetical_asc':
                sortedData.sort((a, b) => a.application.localeCompare(b.application));
                break;
            case 'alphabetical_desc':
                sortedData.sort((a, b) => b.application.localeCompare(a.application));
                break;
        }
    
        setFilteredData(sortedData);
    };

    useEffect(() => {
        const updateFilteredData = () => {
            const filtered = all_data.filter(item => item.category === props.category);
            setFilteredData(filtered);
        };
    
        updateFilteredData();
    }, [all_data, props.category]);
    
    

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
                <p><span>Showing 1-{visibleData.length}</span> out of {filteredData.length} products</p>
                <div className="shopcategory-sort">
                    Ordenar por: 
                    <select onChange={handleSortChange} value={sortBy}>
                        <option value="newest">Más nuevo a más viejo</option>
                        <option value="oldest">Más viejo a más nuevo</option>
                        <option value="alphabetical_asc">Alfabético: A-Z</option>
                        <option value="alphabetical_desc">Alfabético: Z-A</option>
                    </select>
                </div>
            </div>
            <div className="shopcategory-products">
                {visibleData.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </div>
            <div ref={bottomRef}></div>
            {showCount < filteredData.length && (
                <div className="shopcategory-loadmore" onClick={handleShowMore}>
                    Show More
                </div>
            )}
        </div>
    );    
}

export default ShopCategory;
