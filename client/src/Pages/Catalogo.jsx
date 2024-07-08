import React from "react";
import banner_catalogo from "../Components/Assets/banner_catalogo.png"
import banner_pasta from "../Components/Assets/banner_pasta_square.png"
import banner_pasta_tacon from "../Components/Assets/banner_pasta_tacon_square.png"
import banner_tacon from "../Components/Assets/banner_tacon_square.png"
import banner_miscelanea from "../Components/Assets/banner_miscelanea_square.png"
import banner_remache from "../Components/Assets/banner_remache_square.png"
import banner_balata from "../Components/Assets/banner_kits_square.png"
import './CSS/Catalogo.css'
import { Link } from "react-router-dom";

const Catalogo = () => {
    return (
        <div className="catalogo">
            <img className="catalogo-banner" src={banner_catalogo} alt="" />
            <div className="catalogo-info">
            </div>
            <div className="catalogo-type1">
                <Link to='/pasta'>
                    <img  className="catalogo-elements" src={banner_pasta} alt="" />
                </Link>
                <Link to='/pastaTacon'>
                    <img  className="catalogo-elements" src={banner_pasta_tacon} alt="" />
                </Link>
            </div>
            <div className="catalogo-type1">
                <Link to='/tacon'>
                    <img  className="catalogo-elements" src={banner_tacon} alt="" />
                </Link>
                <Link to='/miscelanea'>
                    <img  className="catalogo-elements" src={banner_miscelanea} alt="" />
                </Link>
            </div>
            <div className="catalogo-type2">
                <Link to='/remache'>
                    <img  className="catalogo-elements" src={banner_remache} alt="" />
                </Link>
                <Link to='/balata'>
                    <img  className="catalogo-elements" src={banner_balata} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Catalogo