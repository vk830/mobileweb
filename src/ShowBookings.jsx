import React, { useState } from "react";
import "./ShowBookings.css";

function ShowBookings() {
  const [bookings, setBookings] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://mobileweb-backend-1.onrender.com/bookings"
      );
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
        setShow(true);
      } else {
        const err = await response.json();
        alert("Error fetching bookings: " + err.error);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="show-bookings">
      <button onClick={fetchBookings} disabled={loading}>
        {loading ? "Loading..." : "Show Bookings"}
      </button>

      {show && (
        <div className="bookings-list">
          <h2>All Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Model</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.model}</td>
                    <td>{b.name}</td>
                    <td>{b.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowBookings;
