import React, { useState, useEffect, useContext } from 'react';
import './CSS/Search.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import banner_buscar from '../Components/Assets/banner_buscar.png';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import './CSS/ShopCategory.css';

const Search = () => {
  const { all_data } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]); 
  const [sortBy, setSortBy] = useState('');
  

  const keys = ['fmsi', 'brand', 'formula', 'measures', 'application', 'category'];

  useEffect(() => {
    let sortedFilteredData = [...all_data].filter((item) =>
        keys.some(
            (key) => typeof item[key] === 'string' && item[key].toLowerCase().includes(query.toLowerCase())
        )
    );

      // Ordenar los datos
      switch (sortBy) {
          case 'newest':
              sortedFilteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
              break;
          case 'oldest':
              sortedFilteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
              break;
          case 'alphabetical_asc':
              sortedFilteredData.sort((a, b) => a.application.localeCompare(b.application));
              break;
          case 'alphabetical_desc':
              sortedFilteredData.sort((a, b) => b.application.localeCompare(a.application));
              break;
          // Añade más casos según sea necesario
      }

      setFilteredData(sortedFilteredData);
  }, [all_data, query, sortBy]);


  const handleSearch = () => {
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
      
      <div className="shopcategory-indexSort">
          <p>
              <span>Showing 1-{filteredData.length}</span> out of {filteredData.length} products
          </p>
          <div className="shopcategory-sort">
              Ordenar por <img onClick={() => setSortBy('')} />
              <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                  <option value="newest">Más nuevo a más viejo</option>
                  <option value="oldest">Más viejo a más nuevo</option>
                  <option value="alphabetical_asc">Alfabético: A-Z</option>
                  <option value="alphabetical_desc">Alfabético: Z-A</option>
              </select>
          </div>
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
