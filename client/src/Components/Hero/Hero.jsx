import React from "react";
import './Hero.css';
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../Assets/hero1.png';
import hero2 from '../Assets/hero2.png';
import hero3 from '../Assets/hero3.png';

const Hero = () => {
  const images = [
    hero1,
    hero2,
    hero3,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
        <ul style={{ margin: "0px", padding: "0", display: 'inline-block' }}> {dots} </ul>
      </div>
    ),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {images.map((image, i) => (
          <Link key={i} to={i === 0 ? "/catalogo" : "/buscar"}>
            <img src={image} alt="slide" style={{ width: '100%', height: 'auto' }} />
          </Link>
        ))}
      </Slider>
      <div className="contenedor-texto">
        <h1>¡Bienvenido a Vafri!</h1>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-prev"
    style={{
      color: 'gray',
      fontSize: '30px',
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
    }}
    onClick={onClick}
  >
    <i className="fa fa-angle-left" aria-hidden="true"></i> 
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-next"
    style={{
      color: 'gray',
      fontSize: '30px',
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
    }}
    onClick={onClick}
  >
    <i className="fa fa-angle-right" aria-hidden="true"></i> 
  </div>
);

export default Hero;
