/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addProduct from '../../assets/add-task.png'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={addProduct} alt="add product icon" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={addProduct} alt="add product icon" />
                    <p>List products</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar