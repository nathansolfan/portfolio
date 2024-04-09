import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this path is correct
import nathan from "../Images/nathan1.webp"; // Ensure this path is correct

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const userEmail = localStorage.getItem("userEmail");

  const toggleTools = () => setIsToolsOpen(!isToolsOpen);

  return (
    <nav>
      <img src={nathan} alt="Nathan" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!userEmail && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </>
        )}
        {userEmail && (
          <>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
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
                    <Link to="/color">Palette</Link>
                  </li>
                </ul>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
