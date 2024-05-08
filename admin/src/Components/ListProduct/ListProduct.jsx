import React, { useState } from "react";
import './ListProduct.css'
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
import removeIcon from '../../assets/removeicon.svg'

const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('https://vafri-backend.vercel.app/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product = async (id)=>{
        await fetch('https://vafri-backend.vercel.app/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    const Categoria =({product})=>{
        if (product.category === "pasta") {
            return <p>Pasta para Clutch</p>
        } else if (product.category === "pastaTacon"){
            return <p>Pasta Tacón</p>
        } else if (product.category === "tacon"){
            return <p>Tacón</p>
        } else if (product.category === "miscelanea"){
            return <p>Miscelanea</p>
        } else if (product.category === "remache"){
            return <p>Remache</p>
        } else if (product.category === "balata"){
            return <p>Balata</p>
        } else{
            return <p>Categoría: No determinada</p>
        }
    }

    return(
        <div className="list-product">
            <h1>Lista de todos los productos</h1>
            <div className="listproduct-format-main">
                <p>Productos</p>
                <p>FMSI</p>
                <p>Marca</p>
                <p>Fórmula</p>
                <p>Medidas</p>
                <p>Aplicaciones</p>
                <p>Categoría</p>
                {/* <p>PDF</p> */}
                <p>Quitar un producto</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=>{
                    return <> <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon"/>
                        <p>FMSI {product.fmsi}</p>
                        <p>{product.brand}</p>
                        <p>{product.formula}</p>
                        <p>{product.measures}</p>
                        <p>{product.application}</p>
                        <p>{Categoria({product})}</p>
                        {/* <p>{product.pdf}</p> */}
                        {/* <img src={product.pdf} alt="" className="listproduct-product-pdf" style={{height: '80px'}}/> */}
                        <img onClick={()=>{remove_product(product.id)}} src={removeIcon} alt="" className="listproduct-remove-icon"/>
                    </div>
                    <hr />
                    </>
                })}
            </div>
        </div>
    )
}

export default ListProduct