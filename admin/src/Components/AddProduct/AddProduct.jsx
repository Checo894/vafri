import React, { useState } from "react";
import './AddProduct.css'
import upload_img from '../../assets/productimage.svg'
import upload_file from '../../assets/productfile.svg'

const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [pdf, setPDF] = useState(null);
    const [productDetails,setProductDetails] = useState({
        fmsi:"",
        brand:"",
        formula:"",
        measures:"",
        application:"",
        category:"pasta",
        image:"",
        pdf:""

    });

    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }

    const fileHandler = (e)=>{
        setPDF(e.target.files[0])
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const add_product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;
    
        let formData = new FormData();
        formData.append('product', image);
        formData.append('productPDF', pdf);
    
        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        })
            .then((resp) => resp.json())
            .then((data) => {
                responseData = data;
                if (responseData.success) {
                    product.image = responseData.imageURL;
                    product.pdf = responseData.pdfURL;
                
                    // Actualizar el estado productDetails con los URLs
                    setProductDetails({
                        ...productDetails,
                        image: responseData.imageURL,
                        pdf: responseData.pdfURL
                    });
                
                    console.log(product);
                    return fetch('http://localhost:4000/addproduct', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product),
                    });
                } else {
                    throw new Error('Upload failed');
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.success) {
                    alert("Product Added");
                } else {
                    alert("Failed");
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("An error occurred while adding the product.");
            });
    };

    return(
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>AGREGAR NUEVO PRODUCTO</p>
            </div>
            <div className="addproduct-data">
                <div className="addproduct-itemfield">
                    <p>FMSI</p>
                    <input value={productDetails.fmsi} onChange={changeHandler} type="text" name='fmsi' placeholder="FMSI / Modelo"/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Marca</p>
                    <input value={productDetails.brand} onChange={changeHandler} type="text" name='brand' placeholder="Marca"/>
                </div>
            </div>
            <div className="addproduct-data">
                <div className="addproduct-itemfield">
                    <p>Fórmula</p>
                    <input value={productDetails.formula} onChange={changeHandler} type="text" name='formula' placeholder="Ej. VFB / VFC / VFR / VC"/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Medidas</p>
                    <input value={productDetails.measures} onChange={changeHandler} type="text" name='measures' placeholder="###*###*#.#/##"/>
                </div>
            </div>
            <div className="addproduct-data">
                <div className="addproduct-itemfield">
                    <p>Aplicaciones</p>
                    <input value={productDetails.application} onChange={changeHandler} type="text" name='application' placeholder="Ej. VW, Vento, Chevrolet Pick-UP"/>
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="pasta">Pasta para Clutch</option>
                    <option value="pastaTacon">Pasta Tacón</option>
                    <option value="tacon">Tacón</option>
                    <option value="remache">Remache</option>
                    <option value="miscelanea">Miscelánea</option>
                    <option value="remache">Remache</option>
                    <option value="balata">Balata</option>
                </select>
            </div>
            <div className="addproduct-assets">
                <div className="addproduct-itemfield">
                    <p>Imagen</p>
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image):upload_img} className="addproduct-thumnail-img" alt=""/>
                    </label>
                    <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Archivo PDF</p>
                    <label htmlFor="file-input2">
                        <img src={pdf?URL.createObjectURL(pdf):upload_file} className="addproduct-thumnail-file" alt=""/>
                    </label>
                    <input onChange={fileHandler} type="file" name="pdf" id="file-input2" hidden/>
                </div>
            </div>
            <button onClick={()=>{add_product()}} className="addproduct-button">Guardar</button>
        </div>
    )
}

export default AddProduct