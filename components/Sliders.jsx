"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
const styles = {
  h1: {
    fontSize: "1.5rem",
    fontWeight: 700,
    backgroundImage: "linear-gradient(45deg, #D28500, #FF4FFA)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontFamily: "your-handwriting-font, cursive", // Replace 'your-handwriting-font' with the actual font name
  },
};
const Sliders = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const divStyle = {
    padding: "50px",
    paddingLeft: "45px", 
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
  };
  const sliderContent = [
    { title: "Image 1", imageUrl: "/slider/1.jpg" },
    { title: "Image 2", imageUrl: "/slider/2.jpg" },
    { title: "Image 3", imageUrl: "/slider/3.jpg" },
    { title: "Image 4", imageUrl: "/slider/4.jpg" },
    { title: "Image 5", imageUrl: "/slider/5.jpg" },
    { title: "Image 6", imageUrl: "/slider/6.jpg" },
    { title: "Image 7", imageUrl: "/slider/7.jpg" },
    { title: "Image 8", imageUrl: "/slider/8.jpg" },
    { title: "Image 9", imageUrl: "/slider/9.jpg" },
    { title: "Image 10", imageUrl: "/slider/10.jpg" },
    
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function calculateSlidesToShow() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 992) {
          return 3;
        } else if (screenWidth >= 768) {
          return 2;
        } else {
          return 1;
        }
      }

      function handleResize() {
        setSlidesToShow(calculateSlidesToShow());
      }

      handleResize(); // Initial calculation
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div style={divStyle}>
      <h1 style={styles.h1}>Explore Kerala</h1>
      <div className="body-area">
        <Slider {...sliderSettings}>
          {sliderContent.map((slide, index) => (
            <div key={index} className="slide">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-64 object-cover" 
              />

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
