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
    const { allData } = useContext(ShopContext);  // Cambiado a allData en lugar de all_data
    const { productId } = useParams();  // Obtiene el productId de la URL con React Router

    // Verifica que allData esté disponible y que no sea undefined o vacío
    if (!allData || allData.length === 0) {
        return <div>Cargando productos...</div>;  // Muestra un mensaje de carga mientras se obtienen los datos
    }

    const product = allData.find((e) => e.id === Number(productId));  // Busca el producto por ID

    if (!product) {
        return <div>Producto no encontrado</div>;  // Manejo en caso de que el producto no exista
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
};

export default Product;
