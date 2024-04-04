import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const toggleTools = () => setIsToolsOpen(!isToolsOpen);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/Feedback">Feedback</Link>
        </li>
        <li>
          <Link to="/Color">Choose your color</Link>
        </li>
        <li onClick={toggleTools} style={{ cursor: "pointer" }}>
          Tools
          {isToolsOpen && (
            <ul>
              <li>
                <Link to="/ticktacktoe">Tic Tac Toe</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              {/* Add more tool links as needed */}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
