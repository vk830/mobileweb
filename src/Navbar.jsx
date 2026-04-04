import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MyApp</div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      {/* Search/Profile */}
      <div className="nav-actions">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile-dropdown">
          <button className="profile-btn">Profile ▼</button>
          <div className="dropdown-content">
            <a href="/">Settings</a>
            <a href="/">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
