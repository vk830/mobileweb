import React, { useState, useEffect } from "react";
import "./Homescreen.css";

// Import images directly from src/images
import home1 from "./images/home1.jpg";
import home2 from "./images/home2.jpg";
import home3 from "./images/home3.jpg";
import home4 from "./images/home4.jpg";

// ✅ Define the array using the imported variables
const images = [home1, home2, home3, home4];

function Homescreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="hero-slider">
      {/* Slide */}
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="overlay">
          <h1>Welcome to MyApp</h1>
          <p>Discover amazing features and services</p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Homescreen;
