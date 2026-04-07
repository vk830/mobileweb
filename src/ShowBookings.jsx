import React, { useState } from "react";
import "./ShowBookings.css";


function ShowBookings() {
  const [bookings, setBookings] = useState([]);
  const [show, setShow] = useState(false);

  const fetchBookings = async () => {
    const response = await fetch("https://mobileweb-backend-1.onrender.com/bookings");
    if (response.ok) {
      const data = await response.json();
      setBookings(data);
      setShow(true);
    } else {
      alert("Error fetching bookings.");
    }
  };

  return (
    <div className="show-bookings">
      <button onClick={fetchBookings}>Show Bookings</button>

      {show && (
        <div className="bookings-list">
          <h2>All Bookings</h2>
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
        </div>
      )}
    </div>
  );
}

export default ShowBookings;
