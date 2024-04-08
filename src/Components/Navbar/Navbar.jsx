import React, {useRef, useState} from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import dropdown_icon2 from '../Assets/dropdown_icon2.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("inicio")
    const menuRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    return(
        <div className="navbar">
            <div className="nav-logo">
                <Link style={{textDecoration: 'none'}} to='/vafri'>
                    <img src={logo} alt="" onClick={() => {setMenu("inicio")}}/>
                </Link>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon2} alt="" />
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => {setMenu("inicio")}}><Link style={{textDecoration:'none'}} to='/vafri'>Inicio</Link>{menu==="inicio"?<hr/>:<></>}</li>
                    <li onClick={()=> {setMenu("catalogo")}}><Link style={{textDecoration: 'none'}} to='/catalogo'>Catálogo</Link>{menu==="catalogo"?<hr/>:<></>}</li>
                    {/* <li onClick={() => {setMenu("pasta")}}><Link style={{textDecoration:'none'}} to='/pasta'>Pastas</Link>{menu==="pasta"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("tacon")}}><Link style={{textDecoration:'none'}} to='/tacon'>Tacón</Link>{menu==="tacon"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("pastaTacon")}}><Link style={{textDecoration:'none'}} to='/pastaTacon'>Pasta tacón</Link>{menu==="pastaTacon"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("miscelanea")}}><Link style={{textDecoration:'none'}} to='/miscelanea'>Miscelanea</Link>{menu==="miscelanea"?<hr/>:<></>}</li> */}
                    {/* <li onClick={() => {setMenu("blog")}}><Link style={{textDecoration:'none'}} to='/blog'>Blog</Link>{menu==="blog"?<hr/>:<></>}</li> */}
                    <li onClick={() => {setMenu("conocenos")}}><Link style={{textDecoration:'none'}} to='/conocenos'>Conócenos</Link>{menu==="conocenos"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("contacto")}}><Link style={{textDecoration:'none'}} to='/contacto'>Contacto</Link>{menu==="contacto"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("buscar")}}><Link style={{textDecoration:'none'}} to='/buscar'>Buscar</Link>{menu==="buscar"?<hr/>:<></>}</li>
                </ul>
                {/* <div class="buscador-container">
                    <input type="text" class="buscador" placeholder="Buscar producto"/>
                    <button class="boton-buscar">Buscar</button>
                </div> */}

                {/* <div className="login-admi">
                    <Link to='/login'><button>Login Admi</button></Link>
                </div> */}
        </div>
    )
}

export default Navbar