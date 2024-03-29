import React, { useState, useEffect, useContext } from 'react';
import './CSS/Search.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import banner_buscar from '../Components/Assets/banner_buscar.png';
import './CSS/ShopCategory.css';

const Search = () => {
  const { all_data } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]); // Store filtered data

  const keys = ['fmsi', 'brand', 'formula', 'measures', 'application', 'category'];

  useEffect(() => {
    // Filter data based on query (and ensure case-insensitive search)
    const filtered = all_data.filter((item) =>
      keys.some(
        (key) => typeof item[key] === 'string' && item[key].toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [all_data, query]); // Re-search when query or data changes

  const handleSearch = () => {
    // Trigger search based on query value
    // You can add more specific logic here if needed
    console.log('Search button clicked with query:', query);
  };

  return (
    <div className="search">
      <div className="buscar">
        <img className="buscar-banner" src={banner_buscar} alt="Banner de búsqueda" />
      </div>
      <div className="container">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          type="text"
          id="searchInput"
          placeholder="Escribe para empezar a buscar..."
        />
        <button className="search-button" id="searchButton" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      <div className="shopcategory-products">
        {filteredData.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Search;
