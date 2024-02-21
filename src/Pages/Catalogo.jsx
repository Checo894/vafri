import React from "react";
import banner_catalogo from "../Components/Assets/banner_catalogo.png"
import banner_pasta from "../Components/Assets/banner_pasta_final.png"
import banner_pasta_tacon from "../Components/Assets/banner_pasta_tacon_final.png"
import banner_tacon from "../Components/Assets/banner_tacon_final.png"
import banner_miscelanea from "../Components/Assets/banner_miscelanea_final.png"
import './CSS/Catalogo.css'
import { Link } from "react-router-dom";

const Catalogo = () => {
    return (
        <div className="catalogo">
            <img className="catalogo-banner" src={banner_catalogo} alt="" />
            <div className="catalogo-info">
                <p>	
                    aa
                </p>
            </div>
            <div>
                <Link to='/pasta'>
                    <img onClick={window.scrollTo(0,0)} className="catalogo-pasta" src={banner_pasta} alt="" />
                </Link>
                <Link to='/pastaTacon'>
                    <img onClick={window.scrollTo(0,0)} className="catalogo-pastaTacon" src={banner_pasta_tacon} alt="" />
                </Link>
                <Link to='/tacon'>
                    <img onClick={window.scrollTo(0,0)} className="catalogo-tacon" src={banner_tacon} alt="" />
                </Link>
                <Link to='/miscelanea'>
                    <img onClick={window.scrollTo(0,0)} className="catalogo-miscelanea" src={banner_miscelanea} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Catalogo