import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>MyLogo</h1>
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
