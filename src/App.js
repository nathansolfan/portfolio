import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import HomeHero from "./HomeHero/HomeHero";
import Calculator from "./Components/Calculator/Calculator";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Ticktacktoe from "./Components/Ticktacktoe/Ticktacktoe";
import Donate from "./Components/Donate";
import FeedbackForm from "./Components/Feedback";
import ColorPalete from "./Components/ColorPalete";
import ParallaxTest from "./Components/Parallax";
import NotFound from "./Components/NotFound";
import Account from "./Components/Account";

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
        ></div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomeHero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Ticktacktoe" element={<Ticktacktoe />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Feedback" element={<FeedbackForm />} />
          <Route path="/Color" element={<ColorPalete />} />
          <Route path="/parallax" element={<ParallaxTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
