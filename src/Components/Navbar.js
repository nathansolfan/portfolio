import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the Home page */}
        </li>
        <li>
          <Link to="/register">Register</Link> {/* Link to the Register page */}
        </li>
        {/* You can add more navigation links here */}
      </ul>
    </nav>
  );
}
