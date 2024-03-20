import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";


const ShopCategory = (props) => {
    const {all_data} = useContext(ShopContext)
    return (
        <div className="shopcategory" onLoad={window.scrollTo(0,0)}>
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of # products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_data.map((item,i)=>{
                    let applicationText = Array.isArray(item.application) && item.application.length === 2 ? item.application.join(', ') : item.application;
                    //Checar como se llama la propiedad de categoria
                    if (props.category === item.category) {
                        return <Item 
                                key={i} 
                                id={item.id} 
                                category={item.category} 
                                fmsi={item.fmsi}
                                brand={item.brand} 
                                application={applicationText} 
                                image={item.image} 
                                measures={item.measures} 
                                formula={item.formula}
                        />
                    } else {
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory