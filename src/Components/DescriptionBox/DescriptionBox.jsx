import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (34)</div>
            </div>
            <div className="descriptionbox-description">
                <p>las pastas para clutch, también conocidas como pastillas de 
                    embrague, son componentes fundamentales en los sistemas de 
                    embrague de los vehículos de transmisión manual. Estas pastas 
                    están diseñadas para proporcionar la fricción necesaria que 
                    permite la transferencia de potencia desde el motor hasta la transmisión, 
                    permitiendo así el cambio de marchas y la conducción del vehículo.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox