import React from "react";
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/"><h1>
        <i className="fas fa-hands-helping"></i> Urban Food Waste Management
      </h1>
      </Link>
      <nav className="header-buttons">
        <Link to="/about-us">About Us</Link>
        <Link to="/login">Sign In</Link>
        
      </nav>
    </div>
  );
};

export default Navbar;
