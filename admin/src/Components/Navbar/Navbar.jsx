// eslint-disable-next-line no-unused-vars
import React from "react";
import './Navbar.css'
import navlogo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo" />
        </div>
    )
}

export default Navbar