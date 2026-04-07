import React, { useState } from "react";
import "./Bookmobile.css";

function Bookmobile() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    model: "",
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://mobileweb-backend-1.onrender.com/bookmobile",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Booking saved successfully! ID: " + result.data[0].id);
        setShowForm(false);
        setFormData({ model: "", name: "", email: "" });
      } else {
        const err = await response.json();
        alert("Error saving booking: " + err.error);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bookmobile">
      <button className="book-btn" onClick={() => setShowForm(true)}>
        Book Your Mobile
      </button>

      {showForm && (
        <div className="form-panel">
          <form onSubmit={handleSubmit}>
            <h2>Book Your Mobile</h2>
            <input
              type="text"
              name="model"
              placeholder="Mobile Model"
              value={formData.model}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="form-buttons">
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Bookmobile;
