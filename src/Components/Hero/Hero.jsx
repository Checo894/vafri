import React from "react";
import './Hero.css';
import hero_icon_right from '../Assets/hero_icon_right.png';
import pag_inicio_banner from '../Assets/pag_inicio_banner.jpg';
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../Assets/hero1.png';
import hero2 from '../Assets/hero2.png';

const Hero = () => {
  const images = [
    hero1,
    hero2,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay interval (in milliseconds)
    infinite: true,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px", padding: "0", display: 'inline-block'}}> {dots} </ul>
      </div>
    ),
    prevArrow: <CustomPrevArrow />, // Custom component for left arrow
    nextArrow: <CustomNextArrow />, // Custom component for right arrow
  };

  const carouselStyles = {
    margin: '0 auto',
    width: '100%',
    height: 'auto',
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {images.map((image, i) => (
          <Link key={i} to={i === 0 ? "/catalogo" : "/buscar"}>
            <img src={image} alt="slide" style={{ width: '100%', height: '90%' }} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components to style them with gray color
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-prev"
    style={{
      color: 'gray', // Set arrow color to gray
      fontSize: '30px', // Adjust font size as needed
      position: 'absolute',
      top: '50%',
      left: '10px', // Adjust left position as needed
      transform: 'translateY(-50%)',
    }}
    onClick={onClick}
  >
    <i className="fa fa-angle-left" aria-hidden="true"></i> {/* Use FontAwesome icon */}
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-next"
    style={{
      color: 'gray', // Set arrow color to gray
      fontSize: '30px', // Adjust font size as needed
      position: 'absolute',
      top: '50%',
      right: '10px', // Adjust right position as needed
      transform: 'translateY(-50%)',
    }}
    onClick={onClick}
  >
    <i className="fa fa-angle-right" aria-hidden="true"></i> {/* Use FontAwesome icon */}
  </div>
);

export default Hero;