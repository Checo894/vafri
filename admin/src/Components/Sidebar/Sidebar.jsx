/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addProduct from '../../assets/addproduct.svg'
import listproduct from '../../assets/listproduct.svg'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={addProduct} alt="add product icon" style={{width: '30px', height: '30px'}}/>
                    <p>Añadir Producto</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={listproduct} alt="list product icon" style={{width: '30px', height: '30px'}}/>
                    <p>Lista de Prouctos</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar