import React from "react";
import banner_blog from "../Components/Assets/banner_blog.png"
import './CSS/Blog.css'

const Blog = () => {
    return (
        <div className="blog">
            <img className="blog-banner" src={banner_blog} alt="" />
            Hola mundo
        </div>
    )
}

export default Blog
