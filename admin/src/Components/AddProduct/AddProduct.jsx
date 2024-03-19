import React, { useState } from "react";
import './AddProduct.css'
import upload_img from '../../assets/productimage.svg'
import upload_file from '../../assets/productfile.svg'

const AddProduct = () => {

    const [image, setimage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        FMSI:"",
        brand:"",
        formula:"",
        measures:"",
        applications:"",
        category:"pasta",
        image:"",
        pdf:""

    });

    const imageHandler = (e)=>{
        setimage(e.target.files[0])
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const add_product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload',{
            method:'post',
            headers:{
                Accept:'application/jason',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData})

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
        }
    }

    return(
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>AGREGAR NUEVO PRODUCTO</p>
            </div>
            <div className="addproduct-data">
                <div className="addproduct-itemfield">
                    <p>FMSI</p>
                    <input value={productDetails.FMSI} onChange={changeHandler} type="text" name='FMSI' placeholder="FMSI / Modelo"/>
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
                    <input value={productDetails.applications} onChange={changeHandler} type="text" name='applications' placeholder="Ej. VW, Vento, Chevrolet Pick-UP"/>
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
                {/* <div className="addproduct-itemfield">
                    <p>Archivo PDF</p>
                    <label htmlFor="file-input">
                        <img src={upload_file} className="addproduct-thumnail-file" alt=""/>
                    </label>
                    <input type="file" name="pdf" id="file-input" hidden/>
                </div> */}
            </div>
            <button onClick={()=>{add_product()}} className="addproduct-button">Guardar</button>
        </div>
    )
}

// name:{
//     type:String,
//     require:true,
// },
// model:{
//     type:String,
//     require:true,
// },
// image:{
//     type:String,
//     require:true,
// },
// category:{
//     type:String,
//     require:true,
// },
// application:{
//     type:String,
//     require:true,
// },
// material:{
//     type:String,
//     require:true,
// },
// measures:{
//     type: String,
//     require:false,
// },
// pdf:{
//     type:String,
//     require:false,
// },
// date:{
//     type: Date,
//     default:Date.now,
// },
// available:{
//     type:Boolean,
//     default: true,
// },

export default AddProduct