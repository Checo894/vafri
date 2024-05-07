import React, { useState } from "react";
import './DescriptionBox.css';
import vfb_image from '../Assets/vfb_image.png';
import vfc_image from '../Assets/vfc_image.png';
import vfr_image from '../Assets/vfr_image.png';

const DescriptionBox = () => {
    const [description, setDescription] = useState(
        "Pasta de fibra de vidrio con cobre y tecnología de segunda generación " +
        "con trenzado, integrando un hilo de cobre para un buen funcionamiento"
    );

    const [image, setImage] = useState(vfb_image);
    const [activeButton, setActiveButton] = useState("vfb");

    const handleVfbClick = () => {
        setDescription(
            "Pasta de fibra de vidrio con cobre y tecnología de segunda generación " +
            "con trenzado, integrando un hilo de cobre para un buen funcionamiento"
        );
        setImage(vfb_image);
        setActiveButton("vfb");
    };

    const handleVfcClick = () => {
        setDescription(
            "Pasta de fibra de vidrio con cobre y tecnología de segunda generación " +
            "con trenzado, integrando 3 hilos de cobre para mejorar el rendimiento"
        );
        setImage(vfc_image);
        setActiveButton("vfc");
    };

    const handleVfrClick = () => {
        setDescription(
            "Pasta de fibra de vidrio con cobre y tecnología de segunda generación " +
            "con trenzado, integrados 5 hilos de cobre para optimizar el rendimiento"
        );
        setImage(vfr_image);
        setActiveButton("vfr");
    };

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <button className={`${activeButton === 'vfb' ? 'active' : ''}`} onClick={handleVfbClick}>VFB</button>
                <button className={`${activeButton === 'vfc' ? 'active' : ''}`} onClick={handleVfcClick}>VFC</button>
                <button className={`${activeButton === 'vfr' ? 'active' : ''}`} onClick={handleVfrClick}>VFR</button>
            </div>
            <div className="descriptionbox-description">
                <p>{description}</p>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default DescriptionBox;

