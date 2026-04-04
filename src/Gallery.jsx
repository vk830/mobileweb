import React from "react";
import "./Gallery.css";

// Import images from src/images
import mobile1 from "./images/mobile1.jpg";
import mobile2 from "./images/mobile2.jpg";
import mobile3 from "./images/mobile3.jpg";
import mobile4 from "./images/mobile4.jpg";
import mobile5 from "./images/mobile5.jpg";
import mobile6 from "./images/mobile6.jpg";
import mobile7 from "./images/mobile7.jpg";
import mobile8 from "./images/mobile8.jpg";
import mobile9 from "./images/mobile9.jpg";
import mobile10 from "./images/mobile10.jpg";

const mobiles = [
  { img: mobile1, name: "Samsung Galaxy S25", price: "₹79,999", desc: "Flagship performance with AMOLED display" },
  { img: mobile2, name: "Vivo X100", price: "₹59,999", desc: "Camera-focused smartphone with Zeiss optics" },
  { img: mobile3, name: "iPhone 15 Pro", price: "₹1,29,999", desc: "Premium design with A17 Bionic chip" },
  { img: mobile4, name: "OnePlus 12", price: "₹64,999", desc: "Fast performance with OxygenOS" },
  { img: mobile5, name: "Realme GT Neo", price: "₹34,999", desc: "Affordable gaming powerhouse" },
  { img: mobile6, name: "Xiaomi 14 Pro", price: "₹49,999", desc: "High-end specs at mid-range price" },
  { img: mobile7, name: "Oppo Reno 11", price: "₹39,999", desc: "Stylish design with strong cameras" },
  { img: mobile8, name: "Google Pixel 8", price: "₹74,999", desc: "Pure Android with AI features" },
  { img: mobile9, name: "Motorola Edge 40", price: "₹29,999", desc: "Slim design with clean UI" },
  { img: mobile10, name: "Nothing Phone 2", price: "₹44,999", desc: "Unique transparent design with Glyph interface" },
];

function Gallery() {
  return (
    <div className="gallery">
      <h2>Mobile Gallery</h2>
      <div className="gallery-grid">
        {mobiles.map((mobile, index) => (
          <div key={index} className="gallery-item">
            <img src={mobile.img} alt={mobile.name} />
            <h3>{mobile.name}</h3>
            <p className="price">{mobile.price}</p>
            <p className="desc">{mobile.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
