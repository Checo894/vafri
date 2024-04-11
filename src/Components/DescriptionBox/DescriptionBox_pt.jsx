import React, { useState } from "react";
import './DescriptionBox.css';
import vc_image from '../Assets/fotoPrueba.png';

const DescriptionBox_pt = () => {
    const [description, setDescription] = useState(
        "---"
    );

    const [image, setImage] = useState(vc_image);
    const [activeButton, setActiveButton] = useState("vc");

    const handleVcClick = () => {
        setDescription(
            "---"
        );
        setImage(vc_image);
        setActiveButton("vc");
    };

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <button className={`${activeButton === 'vc' ? 'active' : ''}`} onClick={handleVcClick}>VC</button>
            </div>
            <div className="descriptionbox-description">
                <p>{description}</p>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default DescriptionBox_pt;