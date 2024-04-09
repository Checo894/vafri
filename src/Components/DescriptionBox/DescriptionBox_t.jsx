import React, { useState } from "react";
import './DescriptionBox_t.css';
import vcsd_image from '../Assets/fotoPrueba.png';
import vchd_image from '../Assets/fotoPrueba.png';
import vcm_image from '../Assets/fotoPrueba.png';

const DescriptionBox_t = () => {
    const [description, setDescription] = useState(
        "-"
    );

    const [image, setImage] = useState(vcsd_image);
    const [activeButton, setActiveButton] = useState("vcsd");

    const handleVcSdClick = () => {
        setDescription(
            "-"
        );
        setImage(vcsd_image);
        setActiveButton("vcsd");
    };

    const handleVcHdClick = () => {
        setDescription(
            "--"
        );
        setImage(vchd_image);
        setActiveButton("vchd");
    };

    const handleVcMClick = () => {
        setDescription(
            "---"
        );
        setImage(vcm_image);
        setActiveButton("vcm");
    };

    return (
        <div className="descriptionbox_t">
            <div className="descriptionbox_t-navigator">
                <button className={`${activeButton === 'vcsd' ? 'active' : ''}`} onClick={handleVcSdClick}>VC-SD</button>
                <button className={`${activeButton === 'vchd' ? 'active' : ''}`} onClick={handleVcHdClick}>VC-HD</button>
                <button className={`${activeButton === 'vcm' ? 'active' : ''}`} onClick={handleVcMClick}>VC-M</button>
            </div>
            <div className="descriptionbox_t-description">
                <p>{description}</p>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default DescriptionBox_t;