import React, { useEffect, useState } from "react";
import './RelatedProducts.css';
import Item from "../Item/Item";

const RelatedProducts = ({ productId }) => {
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (!productId) {
            console.log("productId es undefined o no válido");
            return;
        }

        fetch(`https://vafri-backend.vercel.app/related?productId=${productId}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setRelated(data);
                } else {
                    console.log("No related products found");
                }
            })
            .catch(error => {
                console.error('Error fetching related products:', error);
            });
    }, [productId]);

    return (
        <div className="relatedproducts">
            <h1>Artículos relacionados</h1>
            <hr />
            <div className="relatedproducts-item">
                {related.length > 0 ? (
                    related.map((item) => (
                        <Item key={item.id} {...item} />
                    ))
                ) : (
                    <p>No hay artículos relacionados disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
