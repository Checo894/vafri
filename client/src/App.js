import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from "./Pages/ShopCategory";
import Inicio from "./Pages/Inicio";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog";
import Conocenos from "./Pages/Conocenos";
import Contacto from "./Pages/Contacto";
import Catalogo from "./Pages/Catalogo";
import Search from "./Pages/Search";
import ShopContextProvider from "./Context/ShopContext";  // Importa el contexto
import banner_tacon from "./Components/Assets/banner_tacon_final.png";
import banner_pasta_tacon from "./Components/Assets/banner_pasta_tacon_final.png";
import banner_pasta from "./Components/Assets/banner_pasta_final.png";
import banner_miscelanea from "./Components/Assets/banner_miscelanea_final.png";
import banner_remache from "./Components/Assets/banner_remache.png";
import banner_kit from "./Components/Assets/banner_kits.png";

function App() {
  return (
    <div>
      <ShopContextProvider>  {/* Envuelve tu aplicación con el contexto */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/vafri" element={<Inicio/>}/>
            <Route path="/catalogo" element={<Catalogo/>}></Route>
            <Route path="/pasta" element={<ShopCategory banner={banner_pasta} category="pasta"/>}/>
            <Route path="/tacon" element={<ShopCategory banner={banner_tacon} category="tacon"/>}/>
            <Route path="/pastaTacon" element={<ShopCategory banner={banner_pasta_tacon} category="pastaTacon"/>}/>
            <Route path="/miscelanea" element={<ShopCategory banner={banner_miscelanea} category="miscelanea"/>}/>
            <Route path="/remache" element={<ShopCategory banner={banner_remache} category="remache"/>}/>
            <Route path="/balata" element={<ShopCategory banner={banner_kit} category="balata"/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/conocenos" element={<Conocenos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/buscar" element={<Search/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;

