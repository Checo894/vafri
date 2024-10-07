import React, { useState, useContext, useRef, useEffect } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const { allData } = useContext(ShopContext);  // Cambiado all_data a allData para mantener consistencia con el contexto
    const [sortBy, setSortBy] = useState('');
    const [filteredData, setFilteredData] = useState([]);  // Inicializa como un array vacío
    const [showCount, setShowCount] = useState(12);

    useEffect(() => {
        if (allData && allData.length > 0) {
            const filtered = allData.filter(item => item.category === props.category);
            setFilteredData(filtered);
        }
    }, [allData, props.category]);

    const visibleData = filteredData.slice(0, showCount);

    const handleSortChange = (event) => {
        const sortOrder = event.target.value;
        setSortBy(sortOrder);
        let sortedData = [...filteredData];  // Trabajamos sobre `filteredData` ya que contiene los datos filtrados

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
            default:
                break;
        }

        setFilteredData(sortedData);
    };

    const bottomRef = useRef(null);

    const handleShowMore = (event) => {
        event.preventDefault();
        setShowCount(prevCount => prevCount + 8);
    };

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [showCount]);

    if (!allData || allData.length === 0) {
        return <div>Cargando productos...</div>;  // Mostrar mensaje mientras se cargan los productos
    }

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
