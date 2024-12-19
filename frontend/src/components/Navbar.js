import React from "react";
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>
        <i className="fas fa-hands-helping"></i> Urban Food Waste Management
      </h1>
      <nav className="header-buttons">
        <a href="../aboutus/index.html" className="button">
          About Us
        </a>
        <a href="../analytics/index.html" className="button">
          Analytics
        </a>
        <a href="../home/login.html" className="button">
          Sign In
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
