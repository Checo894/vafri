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
    const {all_data}=useContext(ShopContext);
    const {productId} = useParams();
    const product = all_data.find((e) => e.id === Number(productId));
    const category = product.category;

    const changeDescription = (category) => {
        if (category === "pasta") {
            return <DescriptionBox/>
        }
        else if (category === "pastaTacon") {
            return <DescriptionBox_pt/>
        }
        else if (category === "tacon") {
            return <DescriptionBox_t/>
        }
        else {
            return null;
        }
    }
   
    return (
        <div>
            <Breadcrum  product={product}/>
            <ProductDisplay product={product}/>
            {changeDescription(category)}

            <RelatedProducts />
        </div>
    )
}

export default Product