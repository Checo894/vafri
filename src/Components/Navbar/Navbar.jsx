import React, {useState} from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("inicio")
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
                <ul className="nav-menu">
                    <li onClick={() => {setMenu("inicio")}}><Link style={{textDecoration:'none'}} to='/'>Inicio</Link>{menu==="inicio"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("blog")}}><Link style={{textDecoration:'none'}} to='/blog'>Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("pastas")}}><Link style={{textDecoration:'none'}} to='/pastas'>Pastas</Link>{menu==="pastas"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("tacon")}}><Link style={{textDecoration:'none'}} to='/tacon'>Tacón</Link>{menu==="tacon"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("remache")}}><Link style={{textDecoration:'none'}} to='/remache'>Remache</Link>{menu==="remache"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("kit")}}><Link style={{textDecoration:'none'}} to='/kit'>Kit de clutch</Link>{menu==="kit"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("conocenos")}}><Link style={{textDecoration:'none'}} to='/conocenos'>Conócenos</Link>{menu==="conocenos"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("contacto")}}><Link style={{textDecoration:'none'}} to='/contacto'>Contacto</Link>{menu==="contacto"?<hr/>:<></>}</li>
                </ul>
                <div className="login-admi">
                    <Link to='/login'><button>Login Admi</button></Link>
                </div>
        </div>
    )
}

export default Navbar