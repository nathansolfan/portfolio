import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const userEmail = localStorage.getItem("userEmail");
  const toggleTools = ({ userEmail }) => setIsToolsOpen(!isToolsOpen);

  return (
    <nav>
      <ul>
        {userEmail && <span>{userEmail}</span>}
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
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
        <li
          onClick={toggleTools}
          className="tools-dropdown"
          style={{ cursor: "pointer" }}
        >
          Tools
          {isToolsOpen && (
            <ul className="tools-dropdown-menu">
              <li>
                <Link to="/ticktacktoe">TicTacToe</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/Color">Palete</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
