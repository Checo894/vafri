import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from "./Pages/ShopCategory";
import Inicio from "./Pages/Inicio";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog";
import Conocenos from "./Pages/Conocenos";
import Contacto from "./Pages/Contacto";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/pastas" element={<ShopCategory category="pastas"/>}/>
          <Route path="/tacon" element={<ShopCategory category="tacon"/>}/>
          <Route path="/remache" element={<ShopCategory category="remache"/>}/>
          <Route path="/kit" element={<ShopCategory category="kit"/>}/>
          <Route path="/conocenos" element={<Conocenos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
