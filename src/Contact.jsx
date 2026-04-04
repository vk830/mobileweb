import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Visit Us Now</h2>
      <p className="address">
        Anav Humarmala, Domlewadi, Tal Kudal, Dist Sindhudurg
      </p>

      {/* Google Maps Embed */}

<div className="map-container">

  <iframe
    title="location-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9497798149064!2d73.706566453355!3d16.068095637339574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00e36e645cc51%3A0x1ca6e84513221732!2sPandur%20Market!5e0!3m2!1sen!2sin!4v1775196427613!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    width="600"
    height="450"
    style={{ border: 0 }}   // ✅ Correct JSX style
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
  );
}

export default Contact;
