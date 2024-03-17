import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home/HomeColor";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home2 from "./Home2/Home2";
import Calculator from "./Components/Calculator/Calculator";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Ticktacktoe from "./Components/Ticktacktoe/Ticktacktoe";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const cursorSize = 200; // Size of the cursor ball

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });

      // Elements that could change color when hovered by the cursor ball
      const hoverElements = document.querySelectorAll(".hover-sensitive");

      hoverElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        const distance = Math.sqrt(
          Math.pow(elCenter.x - event.clientX, 2) +
            Math.pow(elCenter.y - event.clientY, 2)
        );

        if (distance < cursorSize / 2) {
          // Check if within the cursor ball area
          el.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // Change color
        } else {
          el.style.backgroundColor = ""; // Reset color
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div
          className="cursor-ball"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <svg>
            <defs>
              <filter id="noise">
                <feTurbulence
                  baseFrequency="0.7,0.8"
                  seed="0"
                  type="fractalNoise"
                  result="static"
                />
                <feDisplacementMap in="SourceGraphic" in2="static" scale="20" />
              </filter>
            </defs>
          </svg>
        </div>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Ticktacktoe" element={<Ticktacktoe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
