// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
import navlogo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <img src={navlogo} alt="" className="nav-logo" />
            </Link>
        </div>
    )
}

export default Navbar