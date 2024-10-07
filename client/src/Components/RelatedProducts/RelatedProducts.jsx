import React, { useEffect, useState } from "react";
import './RelatedProducts.css';
import Item from "../Item/Item";
import { db } from '../../firebaseConfig'; // Asegúrate de importar tu configuración de Firebase
import { collection, query, where, getDocs } from 'firebase/firestore';

const RelatedProducts = ({ productId }) => {
    const [related, setRelated] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!productId) {
            console.log("productId es undefined o no válido");
            return;
        }

        const fetchRelatedProducts = async () => {
            try {
                // Primero obtenemos el producto actual
                const productRef = collection(db, "products"); // Asegúrate de que "products" sea el nombre correcto de tu colección
                const q = query(productRef, where("id", "==", Number(productId)));
                const productSnapshot = await getDocs(q);
                if (!productSnapshot.empty) {
                    const productData = productSnapshot.docs[0].data();

                    // Ahora buscamos los productos relacionados basados en la aplicación del producto actual
                    const relatedQuery = query(
                        productRef,
                        where("application", "==", productData.application),
                        where("id", "!=", Number(productId)) // Excluir el producto actual
                    );

                    const relatedSnapshot = await getDocs(relatedQuery);
                    if (!relatedSnapshot.empty) {
                        const relatedProducts = relatedSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        setRelated(relatedProducts);
                    } else {
                        console.log("No related products found");
                    }
                } else {
                    console.log("Product not found");
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching related products:', error);
            }
        };

        fetchRelatedProducts();
    }, [productId]);

    return (
        <div className="relatedproducts">
            <h1>Artículos relacionados</h1>
            <hr />
            <div className="relatedproducts-item">
                {error ? (
                    <p>Error al cargar los productos relacionados: {error}</p>
                ) : related.length > 0 ? (
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

