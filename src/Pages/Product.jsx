import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import DescriptionBox_pt from "../Components/DescriptionBox/DescriptionBox_pt";
import DescriptionBox_t from "../Components/DescriptionBox/DescriptionBox_t";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
    const {all_data} = useContext(ShopContext);
    const {productId} = useParams(); // Obtiene el productId de la URL con React Router
    const product = all_data.find((e) => e.id === Number(productId));
    
    if (!product) {
        return <div>Producto no encontrado</div>; // Manejo en caso de que el producto no exista
    }

    const category = product.category;

    const changeDescription = (category) => {
        switch (category) {
            case "pasta":
                return <DescriptionBox />;
            case "pastaTacon":
                return <DescriptionBox_pt />;
            case "tacon":
                return <DescriptionBox_t />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            {changeDescription(category)}
            <RelatedProducts productId={productId} />
        </div>
    );
}

export default Product;